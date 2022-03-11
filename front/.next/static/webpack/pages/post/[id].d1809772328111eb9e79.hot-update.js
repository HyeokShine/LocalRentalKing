webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _MenuItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItems */ "./components/MenuItems.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo2.png */ "./components/logo2.png");
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_logo2_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _SearchLocation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SearchLocation */ "./components/SearchLocation.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\components\\Layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















var Topbar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__Topbar",
  componentId: "sc-139bv3m-0"
})(["padding:1%;width:100%;height:40px;font-size:0.6em;border-bottom:solid #eeeeee;display:flex;justify-content:center;;background:RGB(255,255,255);padding:0 35px;"]);
_c = Topbar;
var TopDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__TopDiv",
  componentId: "sc-139bv3m-1"
})(["padding:10px;display:flex;justify-content:flex-end;width:80%;backgounr:blue;font-size:1.6em;color:RGB(127,127,127);"]);
_c2 = TopDiv;
var NavBar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__NavBar",
  componentId: "sc-139bv3m-2"
})(["width:100%;height:146px;display:flex;border-bottom:solid #eeeeee;padding:0 35px;align-items:center;flex-wrap:wrap;"]);
_c3 = NavBar;
var NavBarDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__NavBarDiv",
  componentId: "sc-139bv3m-3"
})(["width:100%;height:30px;display:flex;align-content:center;align-items:center;padding-left:200px;"]);
_c4 = NavBarDiv;
var GlobalStyle = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(["div{cursor:pointer;}input:focus{outline:none;}ul{list-style:none;}"]);
_c5 = GlobalStyle;
var SelcectDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__SelcectDiv",
  componentId: "sc-139bv3m-4"
})(["color:#212a4b;width:450px;height:30px;border:solid #212a4b;min-width:450px;display:flex;"]);
_c6 = SelcectDiv;
var SelectDropD = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__SelectDropD",
  componentId: "sc-139bv3m-5"
})(["width:60px;hieght:30px;padding-top:4px;font-size:13px;font-weight:600;border-right:solid #212a4b;align-items:center;padding-left:5px;min-width:60px;a{color:black;}a:hover{color:black;}"]);
_c7 = SelectDropD;
var Select = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "Layout__Select",
  componentId: "sc-139bv3m-6"
})(["padding:1.5%;width:250px;hieght:30px;border:none;float:left;"]);
var ProfileDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__ProfileDiv",
  componentId: "sc-139bv3m-7"
})(["width:400px;height:28px;display:flex;padding-left:50px;"]);
_c8 = ProfileDiv;
var UserDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__UserDiv",
  componentId: "sc-139bv3m-8"
})(["width:120px;height:26px;:nth-child(2){border-right:solid #e6e6e6;border-left:solid #e6e6e6;}padding-top:2px;padding-left:28px;"]);
_c9 = UserDiv;
var NavMenu = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Layout__NavMenu",
  componentId: "sc-139bv3m-9"
})(["flex-direction:column;width:100%;position:absolute;transition:all .5s ease;"]);
_c10 = NavMenu;
var NavActive = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Layout__NavActive",
  componentId: "sc-139bv3m-10"
})(["position:absolute;z-index:1;"]);
_c11 = NavActive;
var MenuLi = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Layout__MenuLi",
  componentId: "sc-139bv3m-11"
})(["text-align:center;padding-bottom:40px;font-weight:600;font-size:20px;transition:all 0.25s ease;:hover{transform:scale(1.3,1.3);}:first-child{padding-top:20px;}a{color:black;}a:hover{color:black;}"]);
_c12 = MenuLi;
var MenuDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__MenuDiv",
  componentId: "sc-139bv3m-12"
})(["width:200px;flex-wrap:wrap;padding-top:30px;min-width:200px;"]);
_c13 = MenuDiv;
var LogoDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__LogoDiv",
  componentId: "sc-139bv3m-13"
})(["width:260px;position:absolute;padding-top:25px;min-height:50px;"]);
_c14 = LogoDiv;
var MenuA = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__MenuA",
  componentId: "sc-139bv3m-14"
})(["width:30px;padding-top:90px;"]);
_c15 = MenuA;
var PlaceDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__PlaceDiv",
  componentId: "sc-139bv3m-15"
})(["position:fixed;width:200px;height:30px;top:200px;left:1350px;right:1485px;bottom:219px;text-align:center;font-weight:600;font-size:20px;:hover{transform:scale(1.3,1.3);}display:flex;flex-wrap:wrap;"]);
_c16 = PlaceDiv;

function Layout(_ref) {
  _s();

  var _this = this;

  var children = _ref.children;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      local = _useSelector.local;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setMenu = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      profile = _useState2[0],
      SetProfile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      place = _useState3[0],
      SetPlace = _useState3[1];

  var PlaceClick = function PlaceClick() {
    SetPlace(true);
  };

  var toggleMenu = function toggleMenu() {
    setMenu(!isOpen);
  };

  var goProfile = function goProfile() {
    SetProfile(true);
    console.log(profile);
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/profile');
  }; // const onSearch = useCallback(() => {
  //   Router.push(`/hashtag/${searchInput}`);
  // }, [searchInput]);


  var onWrite = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/write');
  }, []);
  var onLogIn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/loginpage');
  }, []);
  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_10__["logoutRequestAction"])());
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
  }, []);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("글제목"),
      select = _useState4[0],
      setSelect = _useState4[1];

  var onCategory = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    setSelect(value);
  }, []); //
  // const [searchword, onSearchWord,setSearchWord] = useInput("asdfasdf");

  var searchword = "asdasdsadasdasdas";

  var setSearchWord = function setSearchWord(value) {
    _this.searchword = value;
  };

  var onSearchWord = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setSearchWord(e.target.value);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(select);
  }, [select]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(searchword);
  }, [searchword]);

  var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 7
    }
  }, __jsx("a", {
    onClick: function onClick() {
      setSelect("닉네임");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 9
    }
  }, "\uB2C9\uB124\uC784")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }
  }, __jsx("a", {
    onClick: function onClick() {
      setSelect("글제목");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 9
    }
  }, "\uAE00\uC81C\uBAA9")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 7
    }
  }, __jsx("a", {
    onClick: function onClick() {
      setSelect("글내용");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 9
    }
  }, "\uAE00\uB0B4\uC6A9")));

  var onSearching = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_14__["UPDATE_SEARCH"],
      data: {
        select: select,
        searchword: searchword
      }
    });
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/search/".concat(select, "*").concat(searchword));
  }, []); //이벤트 리스너 받는 오리지널 방식으로 텍스트
  //

  return __jsx("div", {
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      position: "relative",
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 7
    }
  }, __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 9
    }
  }, __jsx(Topbar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 11
    }
  }, __jsx(TopDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 13
    }
  }, !me ? __jsx("div", {
    onClick: onLogIn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 18
    }
  }, "\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785") : __jsx("div", {
    onClick: onLogOut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 18
    }
  }, "\uB85C\uADF8\uC544\uC6C3"), __jsx("div", {
    style: {
      paddingLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 15
    }
  }, "\uB0B4\uC0C1\uC810"))), __jsx(NavBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 11
    }
  }, __jsx(NavBarDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 13
    }
  }, __jsx(MenuDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 15
    }
  }, __jsx(LogoDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"].Brand, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 19
    }
  }, __jsx("img", {
    alt: "",
    src: _logo2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    width: "245px;",
    height: "45px",
    className: "d-inline-block align-top",
    style: {
      paddingTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 21
    }
  }))), __jsx(MenuA, {
    style: {
      paddingBottom: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 17
    }
  }, !isOpen ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MenuOutlined"], {
    style: {
      fontSize: "20px"
    },
    onClick: toggleMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 21
    }
  }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CloseOutlined"], {
    style: {
      fontSize: "20px"
    },
    onClick: toggleMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 21
    }
  }), isOpen ? __jsx(NavActive, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 21
    }
  }, _MenuItems__WEBPACK_IMPORTED_MODULE_3__["MenuItems"].map(function (item, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, index === 0 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/objectrecieve",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 77
      }
    }, item.title))), index === 1 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/objectsend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 74
      }
    }, item.title))), index === 2 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/talentrecieve",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 77
      }
    }, item.title))), index === 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/talentsend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 74
      }
    }, item.title))), index === 4 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/cooperate",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 53
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 73
      }
    }, item.title))), index === 5 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/playground",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 74
      }
    }, item.title))));
  })) : __jsx(NavMenu, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 36
    }
  }))), __jsx("div", {
    style: {
      paddingLeft: "160px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 15
    }
  }, __jsx(SelcectDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 17
    }
  }, __jsx(SelectDropD, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    overlay: menu,
    trigger: ['click'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "ant-dropdown-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 23
    }
  }, select, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DownOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 34
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search, {
    placeholder: "지역, 상품명 입력",
    value: searchword,
    onChange: onSearchWord,
    onSearch: onSearching,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 19
    }
  }), __jsx("div", {
    style: {
      paddingTop: "3px",
      paddingLeft: "115px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 19
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SearchOutlined"], {
    onClick: onSearching,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 21
    }
  })))), __jsx(ProfileDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 15
    }
  }, __jsx(UserDiv, {
    onClick: goProfile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 19
    }
  }), " \uB0B4\uD504\uB85C\uD544"), __jsx(UserDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MailOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 19
    }
  }), " \uC54C\uB9BC\uD1A1"), __jsx(UserDiv, {
    onClick: onWrite,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 19
    }
  }), " \uAE00 \uC4F0\uAE30"))))), __jsx("div", {
    style: {
      marginTop: 0,
      zIndex: 5,
      width: '90%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 7,
    md: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 11,
    md: 11,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 13
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 6,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 13
    }
  }))), __jsx(PlaceDiv, {
    onClick: PlaceClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      paddingLeft: "4px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["AimOutlined"], {
    style: {
      paddingRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 13
    }
  }), "\uB3D9\uB124 \uC124\uC815"), __jsx(_SearchLocation__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 11
    }
  }), local ? __jsx("div", {
    style: {
      color: "#15254d",
      fontSize: "25px",
      width: "114px",
      paddingRight: ""
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 13
    }
  }, local) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 13
    }
  }))));
}

_s(Layout, "H2ApA1KPsSrid3oQQhq7YAov3oc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"]];
});

_c17 = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;

$RefreshReg$(_c, "Topbar");
$RefreshReg$(_c2, "TopDiv");
$RefreshReg$(_c3, "NavBar");
$RefreshReg$(_c4, "NavBarDiv");
$RefreshReg$(_c5, "GlobalStyle");
$RefreshReg$(_c6, "SelcectDiv");
$RefreshReg$(_c7, "SelectDropD");
$RefreshReg$(_c8, "ProfileDiv");
$RefreshReg$(_c9, "UserDiv");
$RefreshReg$(_c10, "NavMenu");
$RefreshReg$(_c11, "NavActive");
$RefreshReg$(_c12, "MenuLi");
$RefreshReg$(_c13, "MenuDiv");
$RefreshReg$(_c14, "LogoDiv");
$RefreshReg$(_c15, "MenuA");
$RefreshReg$(_c16, "PlaceDiv");
$RefreshReg$(_c17, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiVG9wYmFyIiwic3R5bGVkIiwiZGl2IiwiVG9wRGl2IiwiTmF2QmFyIiwiTmF2QmFyRGl2IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlNlbGNlY3REaXYiLCJTZWxlY3REcm9wRCIsIlNlbGVjdCIsImlucHV0IiwiUHJvZmlsZURpdiIsIlVzZXJEaXYiLCJOYXZNZW51IiwidWwiLCJOYXZBY3RpdmUiLCJNZW51TGkiLCJsaSIsIk1lbnVEaXYiLCJMb2dvRGl2IiwiTWVudUEiLCJQbGFjZURpdiIsIkxheW91dCIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJsb2NhbCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0TWVudSIsInByb2ZpbGUiLCJTZXRQcm9maWxlIiwicGxhY2UiLCJTZXRQbGFjZSIsIlBsYWNlQ2xpY2siLCJ0b2dnbGVNZW51IiwiZ29Qcm9maWxlIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJvbldyaXRlIiwidXNlQ2FsbGJhY2siLCJvbkxvZ0luIiwib25Mb2dPdXQiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwic2VsZWN0Iiwic2V0U2VsZWN0Iiwib25DYXRlZ29yeSIsInZhbHVlIiwic2VhcmNod29yZCIsInNldFNlYXJjaFdvcmQiLCJvblNlYXJjaFdvcmQiLCJlIiwidGFyZ2V0IiwidXNlRWZmZWN0IiwibWVudSIsIm9uU2VhcmNoaW5nIiwidHlwZSIsIlVQREFURV9TRUFSQ0giLCJkYXRhIiwid2lkdGgiLCJwb3NpdGlvbiIsInBhZGRpbmdMZWZ0IiwibG9nbyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiZm9udFNpemUiLCJNZW51SXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0aXRsZSIsIm1hcmdpblRvcCIs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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFhLFNBQUssRUFBRTtBQUFDWSxrQkFBWSxFQUFFO0FBQWYsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLDhCQURGLEVBS0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNR2pELEtBQUssR0FDSjtBQUFLLFNBQUssRUFBRTtBQUFDa0QsV0FBSyxFQUFFLFNBQVI7QUFBbUJULGNBQVEsRUFBRSxNQUE3QjtBQUFxQ04sV0FBSyxFQUFFLE9BQTVDO0FBQXFEYyxrQkFBWSxFQUFFO0FBQW5FLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHakQsS0FESCxDQURJLEdBSUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBakdGLENBREYsQ0FERjtBQW9IRDs7R0FqTlFSLE07VUFDVUcsd0QsRUFDR0Msd0Q7OztPQUZiSixNO0FBbU5NQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uZDE4MDk3NzIzMjgxMTFlYjllNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCwge2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtcclxuICBVc2VyT3V0bGluZWQsXHJcbiAgTWFpbE91dGxpbmVkLFxyXG4gIFNlYXJjaE91dGxpbmVkLFxyXG4gIEZvcm1PdXRsaW5lZCxcclxuICBNZW51T3V0bGluZWQsXHJcbiAgQ2xvc2VPdXRsaW5lZCxcclxuICBEb3duT3V0bGluZWQsXHJcbiAgQWltT3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQge01lbnVJdGVtc30gZnJvbSAnLi9NZW51SXRlbXMnO1xyXG5pbXBvcnQge01lbnUsIERyb3Bkb3duLCBSb3csIENvbCAsSW5wdXR9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuL2xvZ28yLnBuZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7bG9nb3V0UmVxdWVzdEFjdGlvbiwgVVBEQVRFX0xPQ0FMfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IFNlYXJjaExvY2F0aW9uIGZyb20gXCIuL1NlYXJjaExvY2F0aW9uXCI7XHJcbmltcG9ydCB7VVBEQVRFX1NFQVJDSH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IFRvcGJhciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgLy8gYmFja2dyb3VuZDogcmVkO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkICNlZWVlZWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjs7XHJcbiAgYmFja2dyb3VuZDogUkdCKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHBhZGRpbmc6IDAgMzVweDtcclxuYDtcclxuY29uc3QgVG9wRGl2ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB3aWR0aDogODAlO1xyXG4gIGJhY2tnb3VucjogYmx1ZTtcclxuICBmb250LXNpemU6IDEuNmVtO1xyXG4gIGNvbG9yOiBSR0IoMTI3LCAxMjcsIDEyNyk7XHJcbmA7XHJcblxyXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGJhY2tncm91bmQ6cmVkO1xyXG4gIGhlaWdodDogMTQ2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBiYWNrZ3JvdW5kOnllbGxvdztcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAjZWVlZWVlO1xyXG4gIHBhZGRpbmc6IDAgMzVweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuYDtcclxuY29uc3QgTmF2QmFyRGl2ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kOmJsdWU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICBkaXYge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTZWxjZWN0RGl2ID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogIzIxMmE0YjtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogc29saWQgIzIxMmE0YjtcclxuICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OjUwcHg7XHJcbmA7XHJcbmNvbnN0IFNlbGVjdERyb3BEID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNjBweDtcclxuICBoaWVnaHQ6IDMwcHg7XHJcbiAgLy8gYmFja2dyb3VuZDpyZWQ7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkICMyMTJhNGI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTZWxlY3QgPSBzdHlsZWQuaW5wdXRgXHJcbiAgcGFkZGluZzogMS41JTtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGllZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmbG9hdDogbGVmdDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6ODBweDtcclxuXHJcbmA7XHJcbmNvbnN0IFByb2ZpbGVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgLy8gYmFja2dyb3VuZDp3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuYDtcclxuY29uc3QgVXNlckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMjZweDtcclxuICAvLyBib3JkZXItcmlnaHQ6IHNvbGlkICNlNmU2ZTY7XHJcbiAgOm50aC1jaGlsZCgyKSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkICNlNmU2ZTY7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgI2U2ZTZlNjtcclxuICB9XHJcblxyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG5gO1xyXG5jb25zdCBOYXZNZW51ID0gc3R5bGVkLnVsYFxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIHRvcDogODBweDtcclxuICAvLyBsZWZ0Oi0xMDAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuYDtcclxuY29uc3QgTmF2QWN0aXZlID0gc3R5bGVkLnVsYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuYDtcclxuY29uc3QgTWVudUxpID0gc3R5bGVkLmxpYFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjMpO1xyXG4gIH1cclxuXHJcbiAgOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG5gO1xyXG5jb25zdCBNZW51RGl2ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbmA7XHJcbmNvbnN0IExvZ29EaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAyNjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICAvLyBiYWNrZ3JvdW5kOnJlZDtcclxuYDtcclxuY29uc3QgTWVudUEgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA5MHB4O1xyXG4gIC8vIG1pbndpZHRoOjEyMHB4O1xyXG5gO1xyXG5jb25zdCBQbGFjZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICAvLyBiYWNrZ3JvdW5kOnJlZDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgdG9wOiAyMDBweDtcclxuICBsZWZ0OiAxMzUwcHg7XHJcbiAgcmlnaHQ6IDE0ODVweDtcclxuICBib3R0b206IDIxOXB4O1xyXG4gIC8vIGJvcmRlcjpzb2xpZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbn0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qge21lLCBsb2NhbH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldE1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwcm9maWxlLCBTZXRQcm9maWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGxhY2UsIFNldFBsYWNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgUGxhY2VDbGljayA9ICgpID0+IHtcclxuICAgIFNldFBsYWNlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldE1lbnUoIWlzT3Blbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnb1Byb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBTZXRQcm9maWxlKHRydWUpO1xyXG4gICAgY29uc29sZS5sb2cocHJvZmlsZSk7XHJcbiAgICBSb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IG9uU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gIC8vICAgUm91dGVyLnB1c2goYC9oYXNodGFnLyR7c2VhcmNoSW5wdXR9YCk7XHJcbiAgLy8gfSwgW3NlYXJjaElucHV0XSk7XHJcblxyXG4gIGNvbnN0IG9uV3JpdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL3dyaXRlJyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkxvZ0luID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbnBhZ2UnKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0UmVxdWVzdEFjdGlvbigpKTtcclxuICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbc2VsZWN0LCBzZXRTZWxlY3RdID0gdXNlU3RhdGUoXCLquIDsoJzrqqlcIik7XHJcbiAgY29uc3Qgb25DYXRlZ29yeSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0KHZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgLy9cclxuICAvLyBjb25zdCBbc2VhcmNod29yZCwgb25TZWFyY2hXb3JkLHNldFNlYXJjaFdvcmRdID0gdXNlSW5wdXQoXCJhc2RmYXNkZlwiKTtcclxuXHJcbiAgbGV0IHNlYXJjaHdvcmQgPSBcImFzZGFzZHNhZGFzZGFzZGFzXCI7XHJcbiAgbGV0IHNldFNlYXJjaFdvcmQgPSAodmFsdWUpPT57XHJcbiAgICB0aGlzLnNlYXJjaHdvcmQgPSB2YWx1ZTtcclxuICB9XHJcbiAgY29uc3Qgb25TZWFyY2hXb3JkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFNlYXJjaFdvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdCk7XHJcbiAgfSwgW3NlbGVjdF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc2VhcmNod29yZCk7XHJcbiAgfSwgW3NlYXJjaHdvcmRdKTtcclxuXHJcblxyXG4gIGNvbnN0IG1lbnUgPSAoXHJcbiAgICA8TWVudT5cclxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIwXCI+XHJcbiAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2VsZWN0KFwi64uJ64Sk7J6EXCIpXHJcbiAgICAgICAgfX0+64uJ64Sk7J6EPC9hPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+XHJcbiAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2VsZWN0KFwi6riA7KCc66qpXCIpXHJcbiAgICAgICAgfX0+6riA7KCc66qpPC9hPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+XHJcbiAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2VsZWN0KFwi6riA64K07JqpXCIpXHJcbiAgICAgICAgfX0+6riA64K07JqpPC9hPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgIDwvTWVudT5cclxuICApXHJcbiAgY29uc3Qgb25TZWFyY2hpbmcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6VVBEQVRFX1NFQVJDSCxcclxuICAgICAgZGF0YTp7c2VsZWN0OnNlbGVjdCwgc2VhcmNod29yZDpzZWFyY2h3b3JkLH1cclxuICAgIH0pO1xyXG4gICAgUm91dGVyLnB1c2goYC9zZWFyY2gvJHtzZWxlY3R9KiR7c2VhcmNod29yZH1gKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8v7J2067Kk7Yq4IOumrOyKpOuEiCDrsJvripQg7Jik66as7KeA64SQIOuwqeyLneycvOuhnCDthY3siqTtirhcclxuXHJcbiAgLy9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fT5cclxuICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjEwMCVcIn19PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZS8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxUb3BiYXI+XHJcbiAgICAgICAgICAgIDxUb3BEaXY+XHJcbiAgICAgICAgICAgICAgeyFtZSA/XHJcbiAgICAgICAgICAgICAgICAoPGRpdiBvbkNsaWNrPXtvbkxvZ0lufT7roZzqt7jsnbgv7ZqM7JuQ6rCA7J6FPC9kaXY+KSA6XHJcbiAgICAgICAgICAgICAgICAoPGRpdiBvbkNsaWNrPXtvbkxvZ091dH0+66Gc6re47JWE7JuDPC9kaXY+KX1cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICDrgrTsg4HsoJBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Ub3BEaXY+XHJcbiAgICAgICAgICA8L1RvcGJhcj5cclxuICAgICAgICAgIDxOYXZCYXI+XHJcbiAgICAgICAgICAgIDxOYXZCYXJEaXY+XHJcbiAgICAgICAgICAgICAgPE1lbnVEaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nb0Rpdj5cclxuICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0NXB4O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgIDwvTG9nb0Rpdj5cclxuICAgICAgICAgICAgICAgIDxNZW51QSBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIHshaXNPcGVuID9cclxuICAgICAgICAgICAgICAgICAgICA8TWVudU91dGxpbmVkIHN0eWxlPXt7Zm9udFNpemU6IFwiMjBweFwifX0gb25DbGljaz17dG9nZ2xlTWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCBzdHlsZT17e2ZvbnRTaXplOiBcIjIwcHhcIn19IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7aXNPcGVuID9cclxuICAgICAgICAgICAgICAgICAgICA8TmF2QWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgICAgICAge01lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vYmplY3RyZWNpZXZlXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vYmplY3RzZW5kXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90YWxlbnRyZWNpZXZlXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90YWxlbnRzZW5kXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gNCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb29wZXJhdGVcIj48TWVudUxpIGtleT17aW5kZXh9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSA1ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BsYXlncm91bmRcIj48TWVudUxpIGtleT17aW5kZXh9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkFjdGl2ZT4gOiA8TmF2TWVudS8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvTWVudUE+XHJcbiAgICAgICAgICAgICAgPC9NZW51RGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDogXCIxNjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8U2VsY2VjdERpdj5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdERyb3BEPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fSB0cmlnZ2VyPXtbJ2NsaWNrJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW50LWRyb3Bkb3duLWxpbmtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3R9IDxEb3duT3V0bGluZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0RHJvcEQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKjxTZWxlY3QgcGxhY2Vob2xkZXI9e1wi7KeA7JetLCDsg4HtkojrqoUg7J6F66ClXCJ9IHZhbHVlPXtzZWFyY2h3b3JkfSBvbkNoYW5nZT17b25TZWFyY2hXb3JkfS8+Ki99XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2ggcGxhY2Vob2xkZXI9e1wi7KeA7JetLCDsg4HtkojrqoUg7J6F66ClXCJ9IHZhbHVlPXtzZWFyY2h3b3JkfSBvbkNoYW5nZT17b25TZWFyY2hXb3JkfSBvblNlYXJjaD17b25TZWFyY2hpbmd9Lz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiM3B4XCIsIHBhZGRpbmdMZWZ0OiBcIjExNXB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoT3V0bGluZWQgb25DbGljaz17b25TZWFyY2hpbmd9Lz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGNlY3REaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFByb2ZpbGVEaXY+XHJcbiAgICAgICAgICAgICAgICA8VXNlckRpdiBvbkNsaWNrPXtnb1Byb2ZpbGV9PlxyXG4gICAgICAgICAgICAgICAgICA8VXNlck91dGxpbmVkLz4g64K07ZSE66Gc7ZWEXHJcbiAgICAgICAgICAgICAgICA8L1VzZXJEaXY+XHJcbiAgICAgICAgICAgICAgICA8VXNlckRpdj5cclxuICAgICAgICAgICAgICAgICAgPE1haWxPdXRsaW5lZC8+IOyVjOumvO2GoVxyXG4gICAgICAgICAgICAgICAgPC9Vc2VyRGl2PlxyXG4gICAgICAgICAgICAgICAgPFVzZXJEaXYgb25DbGljaz17b25Xcml0ZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtT3V0bGluZWQvPiDquIAg7JOw6riwXHJcbiAgICAgICAgICAgICAgICA8L1VzZXJEaXY+XHJcbiAgICAgICAgICAgICAgPC9Qcm9maWxlRGl2PlxyXG4gICAgICAgICAgICA8L05hdkJhckRpdj5cclxuICAgICAgICAgIDwvTmF2QmFyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IDAsIHpJbmRleDogNSAsIHdpZHRoOiAnOTAlJ319PlxyXG4gICAgICAgICAgPFJvdyBndXR0ZXI9ezh9PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXs3fSBtZD17N30vPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMX0gbWQ9ezExfT5cclxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17Nn0vPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBsYWNlRGl2IG9uQ2xpY2s9e1BsYWNlQ2xpY2t9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdMZWZ0OiBcIjRweFwifX0+XHJcbiAgICAgICAgICAgIDxBaW1PdXRsaW5lZCBzdHlsZT17e3BhZGRpbmdSaWdodDogXCIxMHB4XCJ9fS8+XHJcbiAgICAgICAgICAgIOuPmeuEpCDshKTsoJVcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFNlYXJjaExvY2F0aW9uLz5cclxuICAgICAgICAgIHtsb2NhbCA/XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogXCIjMTUyNTRkXCIsIGZvbnRTaXplOiBcIjI1cHhcIiwgd2lkdGg6IFwiMTE0cHhcIiwgcGFkZGluZ1JpZ2h0OiBcIlwifX0+XHJcbiAgICAgICAgICAgICAge2xvY2FsfVxyXG4gICAgICAgICAgICA8L2Rpdj4gOlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L1BsYWNlRGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9