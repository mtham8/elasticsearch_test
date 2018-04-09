webpackJsonp([0],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var BASE_URL = 'http://localhost:5000';

var getFields = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var url, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = BASE_URL + '/get_fields';
            _context.prev = 1;
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url);

          case 4:
            response = _context.sent;

            console.log('field response --> ', response);
            return _context.abrupt('return', response.data.sort());

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

  return function getFields() {
    return _ref.apply(this, arguments);
  };
}();

var search = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var field = _ref3.field,
        query = _ref3.query;
    var url, body, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = BASE_URL + '/search';
            body = {
              field: field,
              query: query
            };
            _context2.prev = 2;
            _context2.next = 5;
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(url, body);

          case 5:
            response = _context2.sent;

            console.log('search response --> ', response.data);
            return _context2.abrupt('return', response.data);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](2);

            console.log('error --> ', _context2.t0);
            return _context2.abrupt('return', null);

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 10]]);
  }));

  return function search(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_scss__ = __webpack_require__(383);
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

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_FieldDropdown__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_QueryInput__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ResultsList__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_fetchMethods__ = __webpack_require__(136);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var App = function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      field: '',
      query: '',
      results: [],
      hits: 0
    }, _this.handleChange = function (_ref2) {
      var _ref2$target = _ref2.target,
          id = _ref2$target.id,
          value = _ref2$target.value;

      _this.setState(_defineProperty({}, id, value));
    }, _this.handleQuery = function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var value, field, results, data, hits;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.handleChange(event);
                value = event.target.value;
                field = _this.state.field;
                _context.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_4__helpers_fetchMethods__["b" /* search */])({ field: field, query: value });

              case 5:
                results = _context.sent;

                if (results) {
                  data = results.data, hits = results.hits;

                  _this.setState({ results: data, hits: hits });
                }

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          field = _state.field,
          query = _state.query,
          results = _state.results,
          hits = _state.hits;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'search' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_FieldDropdown__["a" /* default */], { field: field, handleChange: this.handleChange }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_QueryInput__["a" /* default */], { query: query, handleQuery: this.handleQuery }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ResultsList__["a" /* default */], { results: results, field: field, hits: hits })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_fetchMethods__ = __webpack_require__(136);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var string = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    func = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func;

var FieldDropdown = function (_PureComponent) {
  _inherits(FieldDropdown, _PureComponent);

  function FieldDropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FieldDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FieldDropdown.__proto__ || Object.getPrototypeOf(FieldDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fields: [],
      isLoading: true
    }, _this.generateOptions = function () {
      var fields = _this.state.fields;

      return fields.map(function (field) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'option',
          { key: field, value: field },
          field
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FieldDropdown, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var fields;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__helpers_fetchMethods__["a" /* getFields */])();

              case 2:
                fields = _context.sent;

                if (fields) {
                  this.setState({ fields: fields, isLoading: false });
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          field = _props.field,
          handleChange = _props.handleChange;
      var _state = this.state,
          isLoading = _state.isLoading,
          fields = _state.fields;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'select',
          { id: 'field', value: field, onChange: handleChange },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { value: '', key: 'select-field' },
            'Select Field'
          ),
          !isLoading && this.generateOptions()
        )
      );
    }
  }]);

  return FieldDropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

FieldDropdown.propTypes = {
  field: string,
  handleChange: func
};
/* harmony default export */ __webpack_exports__["a"] = (FieldDropdown);

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var string = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    func = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func;

var QueryInput = function (_PureComponent) {
  _inherits(QueryInput, _PureComponent);

  function QueryInput() {
    _classCallCheck(this, QueryInput);

    return _possibleConstructorReturn(this, (QueryInput.__proto__ || Object.getPrototypeOf(QueryInput)).apply(this, arguments));
  }

  _createClass(QueryInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          query = _props.query,
          handleQuery = _props.handleQuery;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'input' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'query', value: query, onChange: handleQuery })
      );
    }
  }]);

  return QueryInput;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

QueryInput.propType = {
  query: string,
  handleQuery: func
};
/* harmony default export */ __webpack_exports__["a"] = (QueryInput);

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var array = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
    string = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    number = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number;

var ResultsList = function (_Component) {
  _inherits(ResultsList, _Component);

  function ResultsList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResultsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResultsList.__proto__ || Object.getPrototypeOf(ResultsList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showUser: 0
    }, _this.handleClick = function (index) {
      _this.setState({ showUser: index });
    }, _this.generateResults = function () {
      var _this$props = _this.props,
          results = _this$props.results,
          field = _this$props.field;
      var showUser = _this.state.showUser;


      return results.map(function (result, index) {
        var username = result.username;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: index, className: 'result' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'expanded-detail' },
            'Username: ',
            username,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'fill' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { onClick: function onClick() {
                  return _this.handleClick(index);
                } },
              showUser === index && 'HIDE',
              showUser !== index && 'SHOW'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            'Match: ',
            result[field]
          )
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResultsList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          results = _props.results,
          hits = _props.hits;
      var showUser = this.state.showUser;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'results-list' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'results' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            'Total: ',
            hits
          ),
          results.length > 0 && this.generateResults()
        ),
        results.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'expanded-result' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            'Username: ',
            results[showUser].username
          ),
          Object.entries(results[showUser]).map(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                key = _ref3[0],
                value = _ref3[1];

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: key, className: 'expanded-detail' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                key
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'fill' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                value
              )
            );
          })
        )
      );
    }
  }]);

  return ResultsList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ResultsList.propTypes = {
  results: array,
  field: string,
  hits: number
};
/* harmony default export */ __webpack_exports__["a"] = (ResultsList);

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[142]);
//# sourceMappingURL=client.js.map