import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import wrapper from '../store/configureStore';
import Head from 'next/head';
import {useDispatch, useSelector} from 'react-redux';
import { END } from 'redux-saga';
import { useInView } from "react-intersection-observer";

import AppLayout from '../components/AppLayout';

import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_O_SEND_POST_REQUEST } from '../reducers/post';

function ObjectSend() {
  const dispatch = useDispatch();
  const [ref, inView] = useInView();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePost, loadPostLoading, id } = useSelector((state) => state.post);

  useEffect( // 화면 사이즈에 따라 버그가 발생중 fix1
    () => {
      if (inView && hasMorePost && !loadPostLoading) {
        const lastId = mainPosts[mainPosts.length - 1]?.id; // 인피니트 스크롤 구현을 위해 프론트 서버의 현재 렌더링중인 게시글들중 가장 아래 게시물의 게시넘버를 lastId로
        dispatch({
          type: LOAD_O_SEND_POST_REQUEST,
          lastId, // 게시물 10개를 요청하고 인피니트 스크롤 구현을 위해 lastId를 전송하여 lastId 기준으로 10개를 잘라 받아온다.
        });
      }
    },
    [inView, hasMorePost, loadPostLoading, mainPosts, id],
  );

  if (!me) {
    return '내 정보 로딩중...';
  }

  return (
    <>
      <Head>
        <title>물건을 빌려줄게 | 우리동네 렌탈대장</title>
      </Head>
      <AppLayout>
        {me && <PostForm />}
        {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        <div ref={hasMorePost && !loadPostLoading ? ref : undefined} />
        {/* 아직 게시물을 전부 열람하지 않았고 && 게시물을 요청하는 중이 아닐경우 인피니트 스크롤 동작 : 아닐경우 undefined */}
      </AppLayout>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = cookie;
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) { // 타 유저간 쿠키가 공유되는 문제를 방지하기 위함
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_O_SEND_POST_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default ObjectSend;
