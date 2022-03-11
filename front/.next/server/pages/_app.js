module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // eslint-disable-next-line react/prop-types

function LocalRentalKing({
  Component
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("meate", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "\uC6B0\uB9AC\uB3D9\uB124 \uB80C\uD0C8\uB300\uC7A5")), __jsx(Component, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
}

LocalRentalKing.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(LocalRentalKing));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");



 // (이전상태,액션) => 다음상태

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, UPDATE_SEARCH, UPDATE_BOARD, LOAD_CHANGE_TAG_REQUEST, LOAD_CHANGE_TAG_SUCCESS, LOAD_CHANGE_TAG_FAILURE, SEND_DUMMYPOST_REQUEST, SEND_DUMMYPOST_SUCCESS, SEND_DUMMYPOST_FAILURE, LOAD_SEARCH_POSTS_REQUEST, LOAD_SEARCH_POSTS_SUCCESS, LOAD_SEARCH_POSTS_FAILURE, MODIFY_POST_REQUEST, MODIFY_POST_SUCCESS, MODIFY_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_RELATED_POST_REQUEST, LOAD_RELATED_POST_SUCCESS, LOAD_RELATED_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_LIKED_POSTS_REQUEST, LOAD_LIKED_POSTS_SUCCESS, LOAD_LIKED_POSTS_FAILURE, LOAD_SPOST_REQUEST, LOAD_SPOST_SUCCESS, LOAD_SPOST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_RENTAL_POST_REQUEST, LOAD_RENTAL_POST_SUCCESS, LOAD_RENTAL_POST_FAILURE, LOAD_WRITE_POST_REQUEST, LOAD_WRITE_POST_SUCCESS, LOAD_WRITE_POST_FAILURE, REMOVE_IMAGE, UPDATE_TAG, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SEARCH", function() { return UPDATE_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOARD", function() { return UPDATE_BOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHANGE_TAG_REQUEST", function() { return LOAD_CHANGE_TAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHANGE_TAG_SUCCESS", function() { return LOAD_CHANGE_TAG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHANGE_TAG_FAILURE", function() { return LOAD_CHANGE_TAG_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_DUMMYPOST_REQUEST", function() { return SEND_DUMMYPOST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_DUMMYPOST_SUCCESS", function() { return SEND_DUMMYPOST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_DUMMYPOST_FAILURE", function() { return SEND_DUMMYPOST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_POSTS_REQUEST", function() { return LOAD_SEARCH_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_POSTS_SUCCESS", function() { return LOAD_SEARCH_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_POSTS_FAILURE", function() { return LOAD_SEARCH_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_REQUEST", function() { return MODIFY_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_SUCCESS", function() { return MODIFY_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_FAILURE", function() { return MODIFY_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_REQUEST", function() { return LOAD_RELATED_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_SUCCESS", function() { return LOAD_RELATED_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_FAILURE", function() { return LOAD_RELATED_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_REQUEST", function() { return LOAD_LIKED_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_SUCCESS", function() { return LOAD_LIKED_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_FAILURE", function() { return LOAD_LIKED_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_REQUEST", function() { return LOAD_SPOST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_SUCCESS", function() { return LOAD_SPOST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_FAILURE", function() { return LOAD_SPOST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_REQUEST", function() { return LOAD_RENTAL_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_SUCCESS", function() { return LOAD_RENTAL_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_FAILURE", function() { return LOAD_RENTAL_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_REQUEST", function() { return LOAD_WRITE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_SUCCESS", function() { return LOAD_WRITE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_FAILURE", function() { return LOAD_WRITE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TAG", function() { return UPDATE_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  imagePaths: [],
  object_TagsData: ['전체', '공구', '의류', '전자기기', '서적', '게임/취미', '차량', '스포츠/래저', '뷰티/미용', '반려동물', '기타'],
  talent_TagsData: ['전체', '미술', '구충', '설치', '코칭', '촬영', '일손', '기타'],
  cooperate_tagsData: ['전체', '1+1', '배달', '공동구매', '기타'],
  play_tagsData: ['전체', '질문', '자유'],
  boardNum: null,
  inputSearch: null,
  select: null,
  selectedTag: null,
  category: null,
  searchResultId: null,
  singlePost: null,
  hasMorePost: true,
  searchPostLoading: false,
  searchPostDone: false,
  searchPostError: null,
  loadProfilePostLoading: false,
  loadProfilePostDone: false,
  loadProfilePostError: null,
  upLoadImagesLoading: false,
  upLoadImagesDone: false,
  upLoadImagesError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadSPostLoading: false,
  loadSPostDone: false,
  loadSPostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadUserPostsLoading: false,
  loadUserPostsDone: false,
  loadUserPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  modifyPostLoading: false,
  modifyPostDone: false,
  modifyPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const UPDATE_SEARCH = 'UPDATE_SEARCH';
const UPDATE_BOARD = 'UPDATE_BOARD';
const LOAD_CHANGE_TAG_REQUEST = 'LOAD_CHANGE_TAG_REQUEST';
const LOAD_CHANGE_TAG_SUCCESS = 'LOAD_CHANGE_TAG_SUCCESS';
const LOAD_CHANGE_TAG_FAILURE = 'LOAD_CHANGE_TAG_FAILURE';
const SEND_DUMMYPOST_REQUEST = 'SEND_DUMMYPOST_REQUEST';
const SEND_DUMMYPOST_SUCCESS = 'SEND_DUMMYPOST_SUCCESS';
const SEND_DUMMYPOST_FAILURE = 'SEND_DUMMYPOST_FAILURE';
const LOAD_SEARCH_POSTS_REQUEST = 'LOAD_SEARCH_POSTS_REQUEST';
const LOAD_SEARCH_POSTS_SUCCESS = 'LOAD_SEARCH_POSTS_SUCCESS';
const LOAD_SEARCH_POSTS_FAILURE = 'LOAD_SEARCH_POSTS_FAILURE';
const MODIFY_POST_REQUEST = 'MODIFY_POST_REQUEST';
const MODIFY_POST_SUCCESS = 'MODIFY_POST_SUCCESS';
const MODIFY_POST_FAILURE = 'MODIFY_POST_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const LOAD_RELATED_POST_REQUEST = 'LOAD_RELATED_POST_REQUEST';
const LOAD_RELATED_POST_SUCCESS = 'LOAD_RELATED_POST_SUCCESS';
const LOAD_RELATED_POST_FAILURE = 'LOAD_RELATED_POST_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_LIKED_POSTS_REQUEST = 'LOAD_LIKED_POSTS_REQUEST';
const LOAD_LIKED_POSTS_SUCCESS = 'LOAD_LIKED_POSTS_SUCCESS';
const LOAD_LIKED_POSTS_FAILURE = 'LOAD_LIKED_POSTS_FAILURE';
const LOAD_SPOST_REQUEST = 'LOAD_SPOST_REQUEST';
const LOAD_SPOST_SUCCESS = 'LOAD_SPOST_SUCCESS';
const LOAD_SPOST_FAILURE = 'LOAD_SPOST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const LOAD_RENTAL_POST_REQUEST = 'LOAD_RENTAL_POST_REQUEST';
const LOAD_RENTAL_POST_SUCCESS = 'LOAD_RENTAL_POST_SUCCESS';
const LOAD_RENTAL_POST_FAILURE = 'LOAD_RENTAL_POST_FAILURE';
const LOAD_WRITE_POST_REQUEST = 'LOAD_WRITE_POST_REQUEST';
const LOAD_WRITE_POST_SUCCESS = 'LOAD_WRITE_POST_SUCCESS';
const LOAD_WRITE_POST_FAILURE = 'LOAD_WRITE_POST_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const UPDATE_TAG = 'UPDATE_TAG';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
}); // (이전상태,액션) => 다음상태

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case UPDATE_BOARD:
      draft.boardNum = action.data;
      break;

    case UPDATE_SEARCH:
      draft.inputSearch = action.data.searchword;
      draft.select = action.data.select;
      break;

    case LOAD_CHANGE_TAG_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_CHANGE_TAG_SUCCESS:
      draft.mainPosts = action.data; // 기존 배열 밀어버리고 새롭게 10개씩 넣는다.

      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      break;

    case LOAD_CHANGE_TAG_FAILURE:
      draft.loadPostError = action.error;
      draft.loadPostLoading = false;
      break;

    case LOAD_SEARCH_POSTS_REQUEST:
      draft.searchPostLoading = true;
      draft.searchPostDone = false;
      draft.searchPostError = null;
      break;

    case LOAD_SEARCH_POSTS_SUCCESS:
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.searchPostLoading = false;
      draft.searchPostDone = true;
      draft.hasMorePost = action.data.length === 10;
      break;

    case LOAD_SEARCH_POSTS_FAILURE:
      draft.searchPostError = action.error;
      draft.searchPostLoading = false;
      break;

    case LOAD_RENTAL_POST_REQUEST:
      draft.loadProfilePostLoading = true;
      draft.loadProfilePostDone = false;
      draft.loadProfilePostError = null;
      break;

    case LOAD_RENTAL_POST_SUCCESS:
      {
        if (action.data[0].board_boardnum === 1 || 2 || 3 || 4) {
          // 렌탈 게시물이 쌓이고 있는경우
          draft.mainPosts = draft.mainPosts.concat(action.data);
        } else {
          // 주제가 다른 게시물 덩어리를 가져올 경우
          draft.mainPosts = action.data;
        }

        draft.loadProfilePostLoading = false;
        draft.loadProfilePostDone = true;
        break;
      }

    case LOAD_RENTAL_POST_FAILURE:
      draft.loadProfilePostError = action.error;
      draft.loadProfilePostLoading = false;
      break;

    case LOAD_WRITE_POST_REQUEST:
      draft.loadProfilePostLoading = true;
      draft.loadProfilePostDone = false;
      draft.loadProfilePostError = null;
      break;

    case LOAD_WRITE_POST_SUCCESS:
      {
        if (action.data[0].boardNum === 5 || 6) {
          // 렌탈 게시물이 쌓이고 있는경우
          draft.mainPosts = draft.mainPosts.concat(action.data);
        } else {
          // 주제가 다른 게시물 덩어리를 가져올 경우
          draft.mainPosts = action.data;
        }

        draft.loadProfilePostLoading = false;
        draft.loadProfilePostDone = true;
        break;
      }

    case LOAD_WRITE_POST_FAILURE:
      draft.loadProfilePostError = action.error;
      draft.loadProfilePostLoading = false;
      break;

    case UPDATE_TAG:
      draft.selectedTag = action.data;
      draft.hasMorePost = true;
      break;

    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.upLoadImagesLoading = true;
      draft.upLoadImagesDone = false;
      draft.upLoadImagesError = null;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      {
        draft.imagePaths = action.data;
        draft.upLoadImagesLoading = false;
        draft.upLoadImagesDone = true;
        break;
      }

    case UPLOAD_IMAGES_FAILURE:
      draft.upLoadImagesError = action.error;
      draft.upLoadImagesLoading = false;
      break;

    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostError = action.error;
      draft.likePostLoading = false;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostError = action.error;
      draft.unlikePostLoading = false;
      break;

    case LOAD_SPOST_REQUEST:
      draft.loadSPostLoading = true;
      draft.loadSPostDone = false;
      draft.loadSPostError = null;
      break;

    case LOAD_SPOST_SUCCESS:
      draft.singlePost = action.data;
      draft.loadSPostLoading = false;
      draft.loadSPostDone = true;
      break;

    case LOAD_SPOST_FAILURE:
      draft.loadSPostError = action.error;
      draft.loadSPostLoading = false;
      break;

    case LOAD_LIKED_POSTS_REQUEST:
    case LOAD_RELATED_POST_REQUEST:
    case LOAD_USER_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_LIKED_POSTS_SUCCESS:
    case LOAD_RELATED_POST_SUCCESS:
    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_POST_SUCCESS:
      if (draft.mainPosts.length > 0) {
        // SSR로 처음에 들고오는 경우가 아닐때
        if (draft.mainPosts[0].category !== action.data[0].category //카테고리 , 지역이 일치하지 않을때
        && draft.mainPosts[0].location !== action.data[0].location) {
          draft.mainPosts = action.data; // 기존 배열 밀어버리고 새롭게 10개씩 넣는다.
          // draft.mainPosts = draft.mainPosts.concat(action.data);
        } else {
          draft.mainPosts = draft.mainPosts.concat(action.data); // 같은속성의 게시물을 쌓고있는 경우
        }
      } else {
        draft.mainPosts = draft.mainPosts.concat(action.data); // SSR로 처음에 들고올때
      }

      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.hasMorePost = action.data.length === 10;
      break;

    case LOAD_LIKED_POSTS_FAILURE:
    case LOAD_RELATED_POST_FAILURE:
    case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_POST_FAILURE:
      draft.loadPostError = action.error;
      draft.loadPostLoading = false;
      break;

    case SEND_DUMMYPOST_REQUEST:
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case SEND_DUMMYPOST_SUCCESS:
    case ADD_POST_SUCCESS:
      draft.mainPosts.unshift(action.data);
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.imagePaths = [];
      break;

    case SEND_DUMMYPOST_FAILURE:
    case ADD_POST_FAILURE:
      draft.addPostError = action.error;
      draft.addPostLoading = false;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
      draft.removePostLoading = false;
      draft.removePostDone = true;
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostError = action.error;
      draft.removePostLoading = false;
      break;

    case MODIFY_POST_REQUEST:
      draft.modifyPostLoading = true;
      draft.modifyPostDone = false;
      draft.modifyPostError = null;
      break;

    case MODIFY_POST_SUCCESS:
      draft.mainPosts.find(v => v.id === action.data.PostId).content = action.data.content;
      draft.modifyPostLoading = false;
      draft.modifyPostDone = true;
      break;

    case MODIFY_POST_FAILURE:
      draft.modifyPostError = action.error;
      draft.modifyPostLoading = false;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, UPDATE_LOCAL, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LOCAL", function() { return UPDATE_LOCAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_REQUEST", function() { return LOAD_USERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_SUCCESS", function() { return LOAD_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_FAILURE", function() { return LOAD_USERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  loadUserLoading: false,
  // 다른 이용자 정보 로딩
  loadUserDone: false,
  loadUserError: null,
  loadUsersLoading: false,
  // 전체 이용자 리스트 로딩
  loadUsersDone: false,
  loadUsersError: null,
  loadMyInfoLoading: false,
  // 내정보 로딩 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  userInfo: null,
  me: null,
  local: "없음",
  usersInfo: {},
  signUpData: {},
  loginData: {}
};
const UPDATE_LOCAL = 'UPDATE_LOCAL';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
const LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
}); // (이전상태,액션) => 다음상태

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case UPDATE_LOCAL:
      draft.local = action.data;
      break;

    case LOAD_USER_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;

    case LOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      draft.userInfo = action.data;
      draft.loadUserDone = true;
      break;

    case LOAD_USER_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

    case LOAD_USERS_REQUEST:
      draft.loadUsersLoading = true;
      draft.loadUsersError = null;
      draft.loadUsersDone = false;
      break;

    case LOAD_USERS_SUCCESS:
      draft.loadUsersLoading = false;
      draft.usersInfo = action.data;
      draft.loadUsersDone = true;
      break;

    case LOAD_USERS_FAILURE:
      draft.loadUsersLoading = false;
      draft.loadUsersError = action.error;
      break;

    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.me = action.data;
      draft.loadMyInfoDone = true;
      break;

    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me = action.data;
      draft.logInDone = true;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameError = null;
      draft.changeNicknameDone = false;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.me.nickname = action.data.nickname;
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      console.log(action.data);

      if (action.data.boardNum === 1 || 2) {
        console.log("1/2"); //console.log(draft.me);

        draft.me.ProdPosts.push({
          id: action.data.id
        });
      } else if (action.data.boardNum === 3 || 4) {
        console.log("3/4");
        draft.me.PowerPosts.push({
          id: action.data.id
        });
      } else if (action.data.boardNum === 5) {
        console.log("5");
        draft.me.TogetherPosts.push({
          id: action.data.id
        });
      }

      break;

    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', data); // formdata 전송
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function sendDummyPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/write', data); // formdata 전송
}

function* sendDummyPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sendDummyPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEND_DUMMYPOST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEND_DUMMYPOST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}`); // delete는 데이터를 가져갈 수 없다 data는 postId
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostAPI(data, lastId, boardNum) {
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/${encodeURIComponent(data)}/post?lastId=${lastId || 0}&boardNum=${boardNum || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data, action.lastId, action.boardNum);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function changeTagAPI(data, boardNum) {
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/${encodeURIComponent(data)}/tag?boardNum=${boardNum || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* changeTag(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeTagAPI, action.data, action.boardNum);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_CHANGE_TAG_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_CHANGE_TAG_FAILURE"],
      error: err.response.data
    });
  }
}

function loadSearchPostAPI(select, searchword, local, boardNum, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/search?select=${encodeURIComponent(select)}&local=${encodeURIComponent(local)}
  &search=${encodeURIComponent(searchword)}&boardNum=${boardNum}&lastId=${lastId || 0}`);
} // api 서버 요청은 GET/posts/search/


function* loadSearchPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadSearchPostAPI, action.select, action.search, action.local, action.boardNum, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SEARCH_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SEARCH_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function rentalPostAPI(data, lastId) {
  // 대상유저 id
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/${data}/post?lastId=${lastId || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* rentalPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(rentalPostAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RENTAL_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RENTAL_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function writePostAPI(data, lastId) {
  // 대상유저 id
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/${data}/post?lastId=${lastId || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* writePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(writePostAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_WRITE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_WRITE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadSPostAPI(postId, postBoardNum) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/singlepost?postId=${postId}&postBoardNum=${postBoardNum}`);
}

function* loadSPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadSPostAPI, action.postId, action.postBoardNum);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SPOST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SPOST_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data // PostId,UserId

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data // PostId,UserId

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', data); // formdata는 { name: data } 같은 식으로 감싸버리면 json으로 자동 변환되버린다.
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function RelatedPostAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/related?lastId=${lastId || 0}`);
}

function* RelatedPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(RelatedPostAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RELATED_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RELATED_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadLikedPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/liked?lastId=${lastId || 0}`);
}

function* loadLikedPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadLikedPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_LIKED_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_LIKED_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function modifyPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data.PostId}`, data);
}

function* modifyPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(modifyPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["MODIFY_POST_SUCCESS"],
      data: result.data // PostId,UserId

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["MODIFY_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLoadSPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SPOST_REQUEST"], loadSPost);
}

function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function* watchModifyPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["MODIFY_POST_REQUEST"], modifyPost);
}

function* watchLoadRelatedPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RELATED_POST_REQUEST"], RelatedPost);
}

function* watchLoadLikedtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_LIKED_POSTS_REQUEST"], loadLikedPosts);
}

function* watchLoadRentalPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RENTAL_POST_REQUEST"], rentalPost);
}

function* watchLoadWritePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_WRITE_POST_REQUEST"], writePost);
}

function* watchLoadSearchPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SEARCH_POSTS_REQUEST"], loadSearchPost);
}

function* watchSendDummyPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEND_DUMMYPOST_REQUEST"], sendDummyPost);
}

function* watchLoadChangeTag() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_CHANGE_TAG_REQUEST"], changeTag);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadSPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadRelatedPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadLikedtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchModifyPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadRentalPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadWritePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadSearchPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSendDummyPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadChangeTag)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}

function SignUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}`);
}

function loadUsersAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/all');
}

function ChangeNickNameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function logOutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout', data);
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function* loadUsers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUsersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USERS_FAILURE"],
      error: err.response.data
    });
  }
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function* logOut(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function* signUp(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(SignUpAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function* changeNickName(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(ChangeNickNameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchChangenickName() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickName);
}

function* watchLoadUserInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchLoadUsersInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USERS_REQUEST"], loadUsers);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUsersInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangenickName)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJMb2NhbFJlbnRhbEtpbmciLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJvYmplY3RfVGFnc0RhdGEiLCJ0YWxlbnRfVGFnc0RhdGEiLCJjb29wZXJhdGVfdGFnc0RhdGEiLCJwbGF5X3RhZ3NEYXRhIiwiYm9hcmROdW0iLCJpbnB1dFNlYXJjaCIsInNlbGVjdCIsInNlbGVjdGVkVGFnIiwiY2F0ZWdvcnkiLCJzZWFyY2hSZXN1bHRJZCIsInNpbmdsZVBvc3QiLCJoYXNNb3JlUG9zdCIsInNlYXJjaFBvc3RMb2FkaW5nIiwic2VhcmNoUG9zdERvbmUiLCJzZWFyY2hQb3N0RXJyb3IiLCJsb2FkUHJvZmlsZVBvc3RMb2FkaW5nIiwibG9hZFByb2ZpbGVQb3N0RG9uZSIsImxvYWRQcm9maWxlUG9zdEVycm9yIiwidXBMb2FkSW1hZ2VzTG9hZGluZyIsInVwTG9hZEltYWdlc0RvbmUiLCJ1cExvYWRJbWFnZXNFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFNQb3N0TG9hZGluZyIsImxvYWRTUG9zdERvbmUiLCJsb2FkU1Bvc3RFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsb2FkVXNlclBvc3RzTG9hZGluZyIsImxvYWRVc2VyUG9zdHNEb25lIiwibG9hZFVzZXJQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJtb2RpZnlQb3N0TG9hZGluZyIsIm1vZGlmeVBvc3REb25lIiwibW9kaWZ5UG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIlVQREFURV9TRUFSQ0giLCJVUERBVEVfQk9BUkQiLCJMT0FEX0NIQU5HRV9UQUdfUkVRVUVTVCIsIkxPQURfQ0hBTkdFX1RBR19TVUNDRVNTIiwiTE9BRF9DSEFOR0VfVEFHX0ZBSUxVUkUiLCJTRU5EX0RVTU1ZUE9TVF9SRVFVRVNUIiwiU0VORF9EVU1NWVBPU1RfU1VDQ0VTUyIsIlNFTkRfRFVNTVlQT1NUX0ZBSUxVUkUiLCJMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNUIiwiTE9BRF9TRUFSQ0hfUE9TVFNfU1VDQ0VTUyIsIkxPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkUiLCJNT0RJRllfUE9TVF9SRVFVRVNUIiwiTU9ESUZZX1BPU1RfU1VDQ0VTUyIsIk1PRElGWV9QT1NUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUIiwiTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1NQT1NUX1JFUVVFU1QiLCJMT0FEX1NQT1NUX1NVQ0NFU1MiLCJMT0FEX1NQT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1QiLCJMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1JFTlRBTF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1dSSVRFX1BPU1RfUkVRVUVTVCIsIkxPQURfV1JJVEVfUE9TVF9TVUNDRVNTIiwiTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJVUERBVEVfVEFHIiwiYWRkUG9zdCIsImRhdGEiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsInNlYXJjaHdvcmQiLCJlcnJvciIsImNvbmNhdCIsImxlbmd0aCIsImJvYXJkX2JvYXJkbnVtIiwiZmlsdGVyIiwidiIsImkiLCJmaW5kIiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwibG9jYXRpb24iLCJ1bnNoaWZ0IiwiY29udGVudCIsIkNvbW1lbnRzIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvYWRVc2Vyc0xvYWRpbmciLCJsb2FkVXNlcnNEb25lIiwibG9hZFVzZXJzRXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsInVzZXJJbmZvIiwibWUiLCJsb2NhbCIsInVzZXJzSW5mbyIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJVUERBVEVfTE9DQUwiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX1VTRVJTX1JFUVVFU1QiLCJMT0FEX1VTRVJTX1NVQ0NFU1MiLCJMT0FEX1VTRVJTX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIm5pY2tuYW1lIiwiUHJvZFBvc3RzIiwiUG93ZXJQb3N0cyIsIlRvZ2V0aGVyUG9zdHMiLCJQb3N0cyIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZFBvc3RBUEkiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJzZW5kRHVtbXlQb3N0QVBJIiwic2VuZER1bW15UG9zdCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwibG9hZFBvc3RBUEkiLCJsYXN0SWQiLCJnZXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2FkUG9zdCIsImNoYW5nZVRhZ0FQSSIsImNoYW5nZVRhZyIsImxvYWRTZWFyY2hQb3N0QVBJIiwibG9hZFNlYXJjaFBvc3QiLCJzZWFyY2giLCJyZW50YWxQb3N0QVBJIiwicmVudGFsUG9zdCIsIndyaXRlUG9zdEFQSSIsIndyaXRlUG9zdCIsImxvYWRTUG9zdEFQSSIsInBvc3RJZCIsInBvc3RCb2FyZE51bSIsImxvYWRTUG9zdCIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0IiwiYWRkQ29tbWVudEFQSSIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyIsImxvYWRVc2VyUG9zdHNBUEkiLCJsb2FkVXNlclBvc3RzIiwiUmVsYXRlZFBvc3RBUEkiLCJSZWxhdGVkUG9zdCIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwibG9hZExpa2VkUG9zdHNBUEkiLCJsb2FkTGlrZWRQb3N0cyIsIm1vZGlmeVBvc3RBUEkiLCJtb2RpZnlQb3N0Iiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbkxpa2VQb3N0Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaExvYWRTUG9zdCIsIndhdGNoTG9hZFVzZXJQb3N0cyIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoTW9kaWZ5UG9zdCIsIndhdGNoTG9hZFJlbGF0ZWRQb3N0Iiwid2F0Y2hMb2FkTGlrZWR0YWdQb3N0cyIsIndhdGNoTG9hZFJlbnRhbFBvc3QiLCJ3YXRjaExvYWRXcml0ZVBvc3QiLCJ3YXRjaExvYWRTZWFyY2hQb3N0Iiwid2F0Y2hTZW5kRHVtbXlQb3N0Iiwid2F0Y2hMb2FkQ2hhbmdlVGFnIiwibG9hZE15SW5mb0FQSSIsIlNpZ25VcEFQSSIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXJzQVBJIiwiQ2hhbmdlTmlja05hbWVBUEkiLCJsb2dJbkFQSSIsImxvZ091dEFQSSIsImxvYWRNeUluZm8iLCJsb2FkVXNlciIsImxvYWRVc2VycyIsImxvZ0luIiwibG9nT3V0Iiwic2lnblVwIiwiY2hhbmdlTmlja05hbWUiLCJ3YXRjaExvZ2luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoQ2hhbmdlbmlja05hbWUiLCJ3YXRjaExvYWRVc2VySW5mbyIsIndhdGNoTG9hZFVzZXJzSW5mbyIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsU0FBU0EsZUFBVCxDQUF5QjtBQUFFQztBQUFGLENBQXpCLEVBQXdDO0FBQ3RDLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQUZGLENBREYsRUFLRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREY7QUFTRDs7QUFFREQsZUFBZSxDQUFDRSxTQUFoQixHQUE0QjtBQUMxQkQsV0FBUyxFQUFFRSxvREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURQLENBQTVCO0FBSWVDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JQLGVBQWxCLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTVEsV0FBVyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNyQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQywwREFBTDtBQUNFQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixNQUF2QjtBQUNBLGFBQU9BLE1BQU0sQ0FBQ0ssT0FBZDs7QUFDRjtBQUFTO0FBQ1AsY0FBTUMsZUFBZSxHQUFHQyw2REFBZSxDQUFDO0FBQ3RDQyw2REFEc0M7QUFFdENDLDZEQUFJQTtBQUZrQyxTQUFELENBQXZDO0FBSUEsZUFBT0gsZUFBZSxDQUFDUCxLQUFELEVBQVFDLE1BQVIsQ0FBdEI7QUFDRDtBQVZIO0FBWUQsQ0FiRDs7QUFlZUYsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNWSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxFQURlO0FBRTFCQyxZQUFVLEVBQUUsRUFGYztBQUcxQkMsaUJBQWUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQ2YsSUFEZSxFQUVmLE1BRmUsRUFHZixJQUhlLEVBSWYsT0FKZSxFQUtmLElBTGUsRUFNZixRQU5lLEVBT2YsT0FQZSxFQVFmLE1BUmUsRUFTZixJQVRlLENBSFM7QUFhMUJDLGlCQUFlLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsRUFBMkMsSUFBM0MsQ0FiUztBQWMxQkMsb0JBQWtCLEVBQUUsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsTUFBcEIsRUFBNEIsSUFBNUIsQ0FkTTtBQWUxQkMsZUFBYSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLENBZlc7QUFnQjFCQyxVQUFRLEVBQUMsSUFoQmlCO0FBaUIxQkMsYUFBVyxFQUFDLElBakJjO0FBa0IxQkMsUUFBTSxFQUFDLElBbEJtQjtBQW1CMUJDLGFBQVcsRUFBRSxJQW5CYTtBQW9CMUJDLFVBQVEsRUFBRSxJQXBCZ0I7QUFxQjFCQyxnQkFBYyxFQUFFLElBckJVO0FBc0IxQkMsWUFBVSxFQUFFLElBdEJjO0FBdUIxQkMsYUFBVyxFQUFFLElBdkJhO0FBd0IxQkMsbUJBQWlCLEVBQUUsS0F4Qk87QUF5QjFCQyxnQkFBYyxFQUFFLEtBekJVO0FBMEIxQkMsaUJBQWUsRUFBRSxJQTFCUztBQTJCMUJDLHdCQUFzQixFQUFFLEtBM0JFO0FBNEIxQkMscUJBQW1CLEVBQUUsS0E1Qks7QUE2QjFCQyxzQkFBb0IsRUFBRSxJQTdCSTtBQThCMUJDLHFCQUFtQixFQUFFLEtBOUJLO0FBK0IxQkMsa0JBQWdCLEVBQUUsS0EvQlE7QUFnQzFCQyxtQkFBaUIsRUFBRSxJQWhDTztBQWlDMUJDLGlCQUFlLEVBQUUsS0FqQ1M7QUFrQzFCQyxjQUFZLEVBQUUsS0FsQ1k7QUFtQzFCQyxlQUFhLEVBQUUsSUFuQ1c7QUFvQzFCQyxtQkFBaUIsRUFBRSxLQXBDTztBQXFDMUJDLGdCQUFjLEVBQUUsS0FyQ1U7QUFzQzFCQyxpQkFBZSxFQUFFLElBdENTO0FBdUMxQkMsa0JBQWdCLEVBQUUsS0F2Q1E7QUF3QzFCQyxlQUFhLEVBQUUsS0F4Q1c7QUF5QzFCQyxnQkFBYyxFQUFFLElBekNVO0FBMEMxQkMsaUJBQWUsRUFBRSxLQTFDUztBQTJDMUJDLGNBQVksRUFBRSxLQTNDWTtBQTRDMUJDLGVBQWEsRUFBRSxJQTVDVztBQTZDMUJDLHNCQUFvQixFQUFFLEtBN0NJO0FBOEMxQkMsbUJBQWlCLEVBQUUsS0E5Q087QUErQzFCQyxvQkFBa0IsRUFBRSxJQS9DTTtBQWdEMUJDLGdCQUFjLEVBQUUsS0FoRFU7QUFpRDFCQyxhQUFXLEVBQUUsS0FqRGE7QUFrRDFCQyxjQUFZLEVBQUUsSUFsRFk7QUFtRDFCQyxtQkFBaUIsRUFBRSxLQW5ETztBQW9EMUJDLGdCQUFjLEVBQUUsS0FwRFU7QUFxRDFCQyxpQkFBZSxFQUFFLElBckRTO0FBc0QxQkMsbUJBQWlCLEVBQUUsS0F0RE87QUF1RDFCQyxnQkFBYyxFQUFFLEtBdkRVO0FBd0QxQkMsaUJBQWUsRUFBRSxJQXhEUztBQXlEMUJDLG1CQUFpQixFQUFFLEtBekRPO0FBMEQxQkMsZ0JBQWMsRUFBRSxLQTFEVTtBQTJEMUJDLGlCQUFlLEVBQUU7QUEzRFMsQ0FBckI7QUE4REEsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0Es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RUFBVXVMLFFBQVYsQ0FBekI7QUFDQUksT0FBSyxDQUFDRSxRQUFOLEdBQWlCVCxjQUFjLENBQUNVLEdBQWYsQ0FBbUIzRyw4Q0FBbkIsQ0FBakI7QUFDQSxTQUFPd0csS0FBUDtBQUNELENBVEQ7O0FBV0EsTUFBTXpULE9BQU8sR0FBRzZULHdFQUFhLENBQUNaLGNBQUQsRUFBaUI7QUFDNUNhLE9BQUs7QUFEdUMsQ0FBakIsQ0FBN0I7QUFJZTlULHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xyXG5mdW5jdGlvbiBMb2NhbFJlbnRhbEtpbmcoeyBDb21wb25lbnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWVhdGUgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8dGl0bGU+7Jqw66as64+Z64SkIOugjO2DiOuMgOyepTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuTG9jYWxSZW50YWxLaW5nLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTG9jYWxSZW50YWxLaW5nKTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbi8vICjsnbTsoITsg4Htg5ws7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBwb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIG9iamVjdF9UYWdzRGF0YTogWyfsoITssrQnLCAn6rO16rWsJyxcclxuICAgICfsnZjrpZgnLFxyXG4gICAgJ+yghOyekOq4sOq4sCcsXHJcbiAgICAn7ISc7KCBJyxcclxuICAgICfqsozsnoQv7Leo66+4JyxcclxuICAgICfssKjrn4knLFxyXG4gICAgJ+yKpO2PrOy4oC/rnpjsoIAnLFxyXG4gICAgJ+u3sO2LsC/rr7jsmqknLFxyXG4gICAgJ+uwmOugpOuPmeusvCcsXHJcbiAgICAn6riw7YOAJyxdLFxyXG4gIHRhbGVudF9UYWdzRGF0YTogWyfsoITssrQnLCAn66+47IigJywgJ+q1rOy2qScsICfshKTsuZgnLCAn7L2U7LmtJywgJ+y0rOyYgScsICfsnbzshpAnLCAn6riw7YOAJ10sXHJcbiAgY29vcGVyYXRlX3RhZ3NEYXRhOiBbJ+yghOyytCcsICcxKzEnLCAn67Cw64usJywgJ+qzteuPmeq1rOunpCcsICfquLDtg4AnXSxcclxuICBwbGF5X3RhZ3NEYXRhOiBbJ+yghOyytCcsICfsp4jrrLgnLCAn7J6Q7JygJ10sXHJcbiAgYm9hcmROdW06bnVsbCxcclxuICBpbnB1dFNlYXJjaDpudWxsLFxyXG4gIHNlbGVjdDpudWxsLFxyXG4gIHNlbGVjdGVkVGFnOiBudWxsLFxyXG4gIGNhdGVnb3J5OiBudWxsLFxyXG4gIHNlYXJjaFJlc3VsdElkOiBudWxsLFxyXG4gIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3Q6IHRydWUsXHJcbiAgc2VhcmNoUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHNlYXJjaFBvc3REb25lOiBmYWxzZSxcclxuICBzZWFyY2hQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFByb2ZpbGVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFByb2ZpbGVQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFByb2ZpbGVQb3N0RXJyb3I6IG51bGwsXHJcbiAgdXBMb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFNQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRVc2VyUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlclBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgbW9kaWZ5UG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIG1vZGlmeVBvc3REb25lOiBmYWxzZSxcclxuICBtb2RpZnlQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX1NFQVJDSCA9ICdVUERBVEVfU0VBUkNIJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9CT0FSRCA9ICdVUERBVEVfQk9BUkQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQ0hBTkdFX1RBR19SRVFVRVNUID0gJ0xPQURfQ0hBTkdFX1RBR19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ0hBTkdFX1RBR19TVUNDRVNTID0gJ0xPQURfQ0hBTkdFX1RBR19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ0hBTkdFX1RBR19GQUlMVVJFID0gJ0xPQURfQ0hBTkdFX1RBR19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRU5EX0RVTU1ZUE9TVF9SRVFVRVNUID0gJ1NFTkRfRFVNTVlQT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0VORF9EVU1NWVBPU1RfU1VDQ0VTUyA9ICdTRU5EX0RVTU1ZUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFTkRfRFVNTVlQT1NUX0ZBSUxVUkUgPSAnU0VORF9EVU1NWVBPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9TRUFSQ0hfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NFQVJDSF9QT1NUU19GQUlMVVJFID0gJ0xPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRElGWV9QT1NUX1JFUVVFU1QgPSAnTU9ESUZZX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUE9TVF9TVUNDRVNTID0gJ01PRElGWV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTU9ESUZZX1BPU1RfRkFJTFVSRSA9ICdNT0RJRllfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfTElLRURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTElLRURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfU1BPU1RfUkVRVUVTVCA9ICdMT0FEX1NQT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9TUE9TVF9TVUNDRVNTID0gJ0xPQURfU1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NQT1NUX0ZBSUxVUkUgPSAnTE9BRF9TUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9SRU5UQUxfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVOVEFMX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRU5UQUxfUE9TVF9GQUlMVVJFID0gJ0xPQURfUkVOVEFMX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9XUklURV9QT1NUX1JFUVVFU1QgPSAnTE9BRF9XUklURV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9XUklURV9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9XUklURV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9UQUcgPSAnVVBEQVRFX1RBRyc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBVUERBVEVfQk9BUkQ6XHJcbiAgICAgIGRyYWZ0LmJvYXJkTnVtID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUERBVEVfU0VBUkNIOlxyXG4gICAgICBkcmFmdC5pbnB1dFNlYXJjaCA9IGFjdGlvbi5kYXRhLnNlYXJjaHdvcmQ7XHJcbiAgICAgIGRyYWZ0LnNlbGVjdCA9IGFjdGlvbi5kYXRhLnNlbGVjdDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfQ0hBTkdFX1RBR19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0NIQU5HRV9UQUdfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7IC8vIOq4sOyhtCDrsLDsl7Qg67CA7Ja067KE66as6rOgIOyDiOuhreqyjCAxMOqwnOyUqSDrhKPripTri6QuXHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9DSEFOR0VfVEFHX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2VhcmNoUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TRUFSQ0hfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TRUFSQ0hfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2VhcmNoUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9SRU5UQUxfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgaWYgKGFjdGlvbi5kYXRhWzBdLmJvYXJkX2JvYXJkbnVtID09PSAxIHx8IDIgfHwgMyB8fCA0KSB7IC8vIOugjO2DiCDqsozsi5zrrLzsnbQg7IyT7J206rOgIOyeiOuKlOqyveyasFxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICB9IGVsc2UgeyAvLyDso7zsoJzqsIAg64uk66W4IOqyjOyLnOusvCDrjanslrTrpqzrpbwg6rCA7KC47JisIOqyveyasFxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0FEX1JFTlRBTF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1dSSVRFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9XUklURV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgaWYgKGFjdGlvbi5kYXRhWzBdLmJvYXJkTnVtID09PSA1IHx8IDYpIHsgLy8g66CM7YOIIOqyjOyLnOusvOydtCDsjJPsnbTqs6Ag7J6I64qU6rK97JqwXHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7IC8vIOyjvOygnOqwgCDri6Trpbgg6rKM7Iuc66y8IOuNqeyWtOumrOulvCDqsIDsoLjsmKwg6rK97JqwXHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExPQURfV1JJVEVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBEQVRFX1RBRzpcclxuICAgICAgZHJhZnQuc2VsZWN0ZWRUYWcgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFNQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NQT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTElLRURfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgaWYgKGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPiAwKSB7IC8vIFNTUuuhnCDsspjsnYzsl5Ag65Ok6rOg7Jik64qUIOqyveyasOqwgCDslYTri5DrlYxcclxuICAgICAgICBpZiAoZHJhZnQubWFpblBvc3RzWzBdLmNhdGVnb3J5ICE9PSBhY3Rpb24uZGF0YVswXS5jYXRlZ29yeSAvL+y5tO2FjOqzoOumrCAsIOyngOyXreydtCDsnbzsuZjtlZjsp4Ag7JWK7J2E65WMXHJcbiAgICAgICAgICAmJiBkcmFmdC5tYWluUG9zdHNbMF0ubG9jYXRpb24gIT09IGFjdGlvbi5kYXRhWzBdLmxvY2F0aW9uKSB7XHJcbiAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YTsgLy8g6riw7KG0IOuwsOyXtCDrsIDslrTrsoTrpqzqs6Ag7IOI66Gt6rKMIDEw6rCc7JSpIOuEo+uKlOuLpC5cclxuICAgICAgICAgIC8vIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTsgLy8g6rCZ7J2A7IaN7ISx7J2YIOqyjOyLnOusvOydhCDsjJPqs6DsnojripQg6rK97JqwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpOyAvLyBTU1LroZwg7LKY7J2M7JeQIOuTpOqzoOyYrOuVjFxyXG4gICAgICB9XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0VORF9EVU1NWVBPU1RfUkVRVUVTVDpcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0VORF9EVU1NWVBPU1RfU1VDQ0VTUzpcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNFTkRfRFVNTVlQT1NUX0ZBSUxVUkU6XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIE1PRElGWV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIE1PRElGWV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpLmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50O1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBNT0RJRllfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g64uk66W4IOydtOyaqeyekCDsoJXrs7Qg66Gc65SpXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gIGxvYWRVc2Vyc0xvYWRpbmc6IGZhbHNlLCAvLyDsoITssrQg7J207Jqp7J6QIOumrOyKpO2KuCDroZzrlKlcclxuICBsb2FkVXNlcnNEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlcnNFcnJvcjogbnVsbCxcclxuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOuCtOygleuztCDroZzrlKkg7Iuc64+E7KSRXHJcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICB1c2VySW5mbzogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICBsb2NhbDogXCLsl4bsnYxcIixcclxuICB1c2Vyc0luZm86IHt9LFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX0xPQ0FMID0gJ1VQREFURV9MT0NBTCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJTX1JFUVVFU1QgPSAnTE9BRF9VU0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUlNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSU19GQUlMVVJFID0gJ0xPQURfVVNFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCzslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVVBEQVRFX0xPQ0FMOlxyXG4gICAgICBkcmFmdC5sb2NhbCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFVzZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZFVzZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVzZXJzSW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUlNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFVzZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgaWYoYWN0aW9uLmRhdGEuYm9hcmROdW09PT0xfHwyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIxLzJcIik7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkcmFmdC5tZSk7XHJcbiAgICAgICAgZHJhZnQubWUuUHJvZFBvc3RzLnB1c2goe2lkOmFjdGlvbi5kYXRhLmlkfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihhY3Rpb24uZGF0YS5ib2FyZE51bT09PTN8fDQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMy80XCIpO1xyXG4gICAgICAgIGRyYWZ0Lm1lLlBvd2VyUG9zdHMucHVzaCh7aWQ6IGFjdGlvbi5kYXRhLmlkfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihhY3Rpb24uZGF0YS5ib2FyZE51bT09PTUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiNVwiKTtcclxuICAgICAgICBkcmFmdC5tZS5Ub2dldGhlclBvc3RzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5pZH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICBmb3JrKHVzZXJTYWdhKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQge2FsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0fSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9TVUNDRVNTLCBMT0FEX0NIQU5HRV9UQUdfRkFJTFVSRSwgTE9BRF9DSEFOR0VfVEFHX1JFUVVFU1QsIExPQURfQ0hBTkdFX1RBR19TVUNDRVNTLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfTElLRURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUkVOVEFMX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9SRU5UQUxfUE9TVF9TVUNDRVNTLCBMT0FEX1NFQVJDSF9QT1NUU19GQUlMVVJFLCBMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNULCBMT0FEX1NFQVJDSF9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfU1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1NQT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9TUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfV1JJVEVfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfV1JJVEVfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfV1JJVEVfUE9TVF9TVUNDRVNTLFxyXG4gIE1PRElGWV9QT1NUX0ZBSUxVUkUsXHJcbiAgTU9ESUZZX1BPU1RfUkVRVUVTVCxcclxuICBNT0RJRllfUE9TVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLCBTRU5EX0RVTU1ZUE9TVF9GQUlMVVJFLCBTRU5EX0RVTU1ZUE9TVF9SRVFVRVNULCBTRU5EX0RVTU1ZUE9TVF9TVUNDRVNTLFxyXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQge0FERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRX0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKTsgLy8gZm9ybWRhdGEg7KCE7IahXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kRHVtbXlQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3Qvd3JpdGUnLCBkYXRhKTsgLy8gZm9ybWRhdGEg7KCE7IahXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzZW5kRHVtbXlQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNlbmREdW1teVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogU0VORF9EVU1NWVBPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VORF9EVU1NWVBPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7IC8vIGRlbGV0ZeuKlCDrjbDsnbTthLDrpbwg6rCA7KC46rCIIOyImCDsl4bri6QgZGF0YeuKlCBwb3N0SWRcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGEsIGxhc3RJZCAsIGJvYXJkTnVtKSB7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfS9wb3N0P2xhc3RJZD0ke2xhc3RJZCB8fCAwfSZib2FyZE51bT0ke2JvYXJkTnVtIHx8IDB9YCk7IC8vIGFwaSDshJzrsoQg7JqU7LKt7J2AIC91c2VyLzp1c2VySWQvcG9zdHNcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCAsIGFjdGlvbi5ib2FyZE51bSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlVGFnQVBJKGRhdGEgLCBib2FyZE51bSkge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0vdGFnP2JvYXJkTnVtPSR7Ym9hcmROdW0gfHwgMH1gKTsgLy8gYXBpIOyEnOuyhCDsmpTssq3snYAgL3VzZXIvOnVzZXJJZC9wb3N0c1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlVGFnKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZVRhZ0FQSSwgYWN0aW9uLmRhdGEgLCBhY3Rpb24uYm9hcmROdW0pO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX0NIQU5HRV9UQUdfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQ0hBTkdFX1RBR19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRTZWFyY2hQb3N0QVBJKHNlbGVjdCwgc2VhcmNod29yZCAsIGxvY2FsICxib2FyZE51bSAsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cy9zZWFyY2g/c2VsZWN0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlbGVjdCl9JmxvY2FsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGxvY2FsKX1cclxuICAmc2VhcmNoPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlYXJjaHdvcmQpfSZib2FyZE51bT0ke2JvYXJkTnVtfSZsYXN0SWQ9JHtsYXN0SWR8fDB9YCk7XHJcbn0vLyBhcGkg7ISc67KEIOyalOyyreydgCBHRVQvcG9zdHMvc2VhcmNoL1xyXG5cclxuZnVuY3Rpb24qIGxvYWRTZWFyY2hQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRTZWFyY2hQb3N0QVBJLCBhY3Rpb24uc2VsZWN0LCBhY3Rpb24uc2VhcmNoICwgYWN0aW9uLmxvY2FsICxhY3Rpb24uYm9hcmROdW0sIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1NFQVJDSF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9TRUFSQ0hfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW50YWxQb3N0QVBJKGRhdGEsIGxhc3RJZCkgeyAvLyDrjIDsg4HsnKDsoIAgaWRcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHMvJHsoZGF0YSl9L3Bvc3Q/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7IC8vIGFwaSDshJzrsoQg7JqU7LKt7J2AIC91c2VyLzp1c2VySWQvcG9zdHNcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbnRhbFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVudGFsUG9zdEFQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQgKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9SRU5UQUxfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9SRU5UQUxfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlUG9zdEFQSShkYXRhLCBsYXN0SWQpIHsgLy8g64yA7IOB7Jyg7KCAIGlkXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzLyR7KGRhdGEpfS9wb3N0P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyAvLyBhcGkg7ISc67KEIOyalOyyreydgCAvdXNlci86dXNlcklkL3Bvc3RzXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3cml0ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwod3JpdGVQb3N0QVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCApO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1dSSVRFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfV1JJVEVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRTUG9zdEFQSShwb3N0SWQscG9zdEJvYXJkTnVtKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3Qvc2luZ2xlcG9zdD9wb3N0SWQ9JHtwb3N0SWR9JnBvc3RCb2FyZE51bT0ke3Bvc3RCb2FyZE51bX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRTUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkU1Bvc3RBUEksIGFjdGlvbi5wb3N0SWQsYWN0aW9uLnBvc3RCb2FyZE51bSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfU1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfU1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSwgLy8gUG9zdElkLFVzZXJJZFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSwgLy8gUG9zdElkLFVzZXJJZFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpOyAvLyBmb3JtZGF0YeuKlCB7IG5hbWU6IGRhdGEgfSDqsJnsnYAg7Iud7Jy866GcIOqwkOyLuOuyhOumrOuptCBqc29u7Jy866GcIOyekOuPmSDrs4DtmZjrkJjrsoTrprDri6QuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7IC8vIGFwaSDshJzrsoQg7JqU7LKt7J2AIC91c2VyLzp1c2VySWQvcG9zdHNcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbGF0ZWRQb3N0QVBJKGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cy9yZWxhdGVkP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogUmVsYXRlZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoUmVsYXRlZFBvc3RBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTGlrZWRQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvbGlrZWQ/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTGlrZWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTGlrZWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5UG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGEuUG9zdElkfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbW9kaWZ5UG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChtb2RpZnlQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IE1PRElGWV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IE1PRElGWV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdCggTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFNQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9TUE9TVF9SRVFVRVNULCBsb2FkU1Bvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlclBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hNb2RpZnlQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTU9ESUZZX1BPU1RfUkVRVUVTVCwgbW9kaWZ5UG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRSZWxhdGVkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1QsIFJlbGF0ZWRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZExpa2VkdGFnUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1QsIGxvYWRMaWtlZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFJlbnRhbFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1QsIHJlbnRhbFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkV3JpdGVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9XUklURV9QT1NUX1JFUVVFU1QsIHdyaXRlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRTZWFyY2hQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCwgbG9hZFNlYXJjaFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTZW5kRHVtbXlQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0VORF9EVU1NWVBPU1RfUkVRVUVTVCwgc2VuZER1bW15UG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRDaGFuZ2VUYWcoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0NIQU5HRV9UQUdfUkVRVUVTVCwgY2hhbmdlVGFnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFNQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFJlbGF0ZWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTGlrZWR0YWdQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXJQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFVuTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaE1vZGlmeVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFJlbnRhbFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRXcml0ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRTZWFyY2hQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hTZW5kRHVtbXlQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkQ2hhbmdlVGFnKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQge2FsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJTX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSU19SRVFVRVNULFxyXG4gIExPQURfVVNFUlNfU1VDQ0VTUyxcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXInKTtcclxufVxyXG5mdW5jdGlvbiBTaWduVXBBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFVzZXJzQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2FsbCcpO1xyXG59XHJcbmZ1bmN0aW9uIENoYW5nZU5pY2tOYW1lQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywge25pY2tuYW1lOiBkYXRhfSk7XHJcbn1cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uIGxvZ091dEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBsb2FkVXNlcnMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfVVNFUlNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUlNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIGxvZ091dChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKFNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrTmFtZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChDaGFuZ2VOaWNrTmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlbmlja05hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja05hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VySW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJzSW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUlNfUkVRVUVTVCwgbG9hZFVzZXJzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9naW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlckluZm8pLFxyXG4gICAgZm9yayh3YXRjaExvYWRVc2Vyc0luZm8pLFxyXG4gICAgZm9yayh3YXRjaENoYW5nZW5pY2tOYW1lKSxcclxuICBdKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9