import React, { useCallback, useState } from 'react';
import { Button, Card, Popover, Avatar, List, Comment } from 'antd';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import PostImages from './PostImages';
import PostCardContent from './PostCardContent';
import { LIKE_POST_REQUEST, REMOVE_POST_REQUEST, UNLIKE_POST_REQUEST, MODIFY_POST_REQUEST } from '../reducers/post';

moment.locale('ko');

function PostCard({ post }) {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const id = useSelector((state) => state.user.me?.id);
  const liked = post.Likers.find((v) => v.id === id);

  const onLike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onUnlike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, [id]);

  const onRemovePost = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  });

  const onChangePost = useCallback((editText) => () => dispatch({
    type: MODIFY_POST_REQUEST,
    data: {
      PostId: post.id,
      content: editText,
    },
  }), [post]);

  const onClickUpdate = useCallback(() => {
    setEditMode(true);
  }, []);

  const onCancelUpdate = useCallback(() => {
    setEditMode(false);
  }, []);

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike} />
            : <HeartOutlined key="heart" onClick={onLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={(
              <Button.Group>
                {id && post.User.id === id
                  ? (
                    <>
                      {!post.RetweetId && <Button onClick={onClickUpdate}>수정</Button>}
                      <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                    </>
                  )
                  : <Button>신고</Button>}
              </Button.Group>
                    )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        title={post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다.` : null}
      >
        {post.RetweetId && post.Retweet
          ? (
            <Card
              cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
            >
              <div style={{ float: 'right' }}>{moment(post.createdAt).format('YYYY.MM.DD')}</div>
              <Card.Meta
                avatar={(
                  <Link href={`/user/${post.Retweet.User.id}`}>
                    <a><Avatar>{post.Retweet.User.nickname[0]}</Avatar></a>
                  </Link>
                )}
                title={post.Retweet.User.nickname}
                description={<PostCardContent postData={post.Retweet.content} onCancelUpdate={onCancelUpdate} onChangePost={onChangePost} />}
              />
            </Card>
          )
          : (
            <>
              <div style={{ float: 'right' }}>{moment(post.createdAt).format('YYYY.MM.DD')}</div>
              <Card.Meta
                avatar={(
                  <Link href={`/user/${post.User.id}`}>
                    <a><Avatar>{post.User.nickname[0]}</Avatar></a>
                  </Link>
              )}
                title={post.User.nickname}
                description={<PostCardContent onCancelUpdate={onCancelUpdate} editMode={editMode} postData={post.content} onChangePost={onChangePost} />}
              />
            </>
          )}

      </Card>
      {commentFormOpened && (
      <div>
        <CommentForm post={post} />
        <List
          header={`${post.Comments.length}개의 댓글`}
          itemLayout="horizontal"
          dataSource={post.Comments}
          renderItem={(item) => (
            <li>
              <Comment
                author={item.User.nickname}
                avatar={(
                  <Link href={`/user/${item.User.id}`}>
                    <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                  </Link>
                )}
                content={item.content}
              />
            </li>
          )}
        />
      </div>
      )}
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    UserId: PropTypes.number,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    RetweetId: PropTypes.number,
    Retweet: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default PostCard;
