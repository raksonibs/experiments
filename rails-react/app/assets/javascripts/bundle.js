/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************!*\
  !*** ./app/assets/javascripts/frontend/main.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _actions = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../actions\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _actions2 = _interopRequireDefault(_actions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_actions2.default.getAllTweets();
	
	var getAppState = function getAppState() {
	  return { tweetsList: TweetStore.getAll() };
	};
	
	var Main = (function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main(props) {
	    _classCallCheck(this, Main);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));
	
	    _this.state = getAppState();
	    _this._onChange = _this._onChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(Main, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      TweetStore.addChangeListener(this._onChange);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      TweetStore.removeChangeListener(this._onChange);
	    }
	  }, {
	    key: "_onChange",
	    value: function _onChange() {
	      this.setState(getAppState());
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "container" },
	        React.createElement(TweetBox, null),
	        React.createElement(TweetList, { tweets: this.state.tweetsList })
	      );
	    }
	  }]);
	
	  return Main;
	})(React.Component);
	
	var documentReady = function documentReady() {
	  ReactDOM.render(React.createElement(Main, null), document.getElementById('react'));
	};
	
	$(documentReady);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map