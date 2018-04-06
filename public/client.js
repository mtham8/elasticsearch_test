webpackJsonp([0],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_scss__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_app_scss__);







var mute = function () {
  var iterateLogs = function iterateLogs(config) {
    for (var prop in console) {
      config.iteratee(prop);
    }
  };
  var noop = function noop() {};
  var logs = function logs(muted) {
    var muted = typeof muted !== 'undefined' ? muted : false;
    iterateLogs({
      iteratee: function iteratee(prop) {
        if (muted === true) console[prop] = noop;else if (muted === false) delete console[prop];
      }
    });
  };
  return { logs: logs };
}();

// suppress all logs in production mode
if (false) mute.logs(true);

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__app_app__["a" /* default */], null), document.getElementById('client'));

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fetchMethods__ = __webpack_require__(357);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      column: ''
    }, _this.selectColumn = function (_ref2) {
      var id = _ref2.id,
          value = _ref2.value;

      _this.setState(_defineProperty({}, id, value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var column = this.state.column;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ColumnDropdown, { value: column, selectColumn: this.selectColumn })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

var ColumnDropdown = function (_Component2) {
  _inherits(ColumnDropdown, _Component2);

  function ColumnDropdown() {
    var _ref3;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, ColumnDropdown);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref3 = ColumnDropdown.__proto__ || Object.getPrototypeOf(ColumnDropdown)).call.apply(_ref3, [this].concat(args))), _this2), _this2.state = {
      columns: [],
      isLoading: false
    }, _this2.generateOptions = function () {
      var columns = _this2.state.columns;

      return columns.map(function (column) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'option',
          { key: column, value: column },
          column
        );
      });
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(ColumnDropdown, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var columns = Object(__WEBPACK_IMPORTED_MODULE_1__fetchMethods__["a" /* getColumns */])();
      this.setState({ isLoading: true });
      if (columns) {
        this.setState({ columns: columns, isLoading: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          selectColumn = _props.selectColumn;
      var _state = this.state,
          isLoading = _state.isLoading,
          columns = _state.columns;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        isLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          'Loading...'
        ),
        columns.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'select',
          { id: 'column', value: value, onChange: selectColumn },
          this.generateOptions()
        )
      );
    }
  }]);

  return ColumnDropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getColumns; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var BASE_URL = 'http://localhost:5000';

var getColumns = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var url, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = BASE_URL + '/get_columns';
            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url);

          case 4:
            response = _context.sent;

            console.log('response --> ', response);
            return _context.abrupt('return', response);

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](1);

            console.log('error --> ', _context.t0);
            return _context.abrupt('return', null);

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 9]]);
  }));

  return function getColumns() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[132]);
//# sourceMappingURL=client.js.map