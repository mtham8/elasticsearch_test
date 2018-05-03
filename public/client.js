webpackJsonp([0],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIELD_TYPE_CONDITIONS; });
/* harmony export (immutable) */ __webpack_exports__["b"] = buildQuery;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FIELD_TYPE_CONDITIONS = {
  text: [{ label: 'is', value: 'match' }, { label: 'is not', value: 'matchExclude' }, { label: 'contains', value: 'match' }, { label: 'is not null', value: 'nullExists' }, { label: 'is null', value: 'nullMissing' }],
  float: [{ label: 'is', value: 'match' }, { label: 'is greater than or after', value: 'floatGte' }, { label: 'is less than or before', value: 'floatLte' }, { label: 'is between', value: 'floatBetween' }, { label: 'is not null', value: 'nullExists' }, { label: 'is null', value: 'nullMissing' }],
  boolean: [{ label: 'is', value: 'boolean' }, { label: 'is not null', value: 'nullExists' }, { label: 'is null', value: 'nullMissing' }]
};

var matchHandler = function matchHandler(_ref) {
  var field = _ref.field,
      query1 = _ref.query1;
  return field.search('mac_id') > 0 || field === 'gbc_cisr_id' || field.search('uid') > 0 ? {
    query_type: 'must',
    query: {
      match_phrase_prefix: _defineProperty({}, field, query1)
    }
  } : {
    query_type: 'must',
    query: {
      match: _defineProperty({}, field, query1)
    }
  };
};

var excludeHandler = function excludeHandler(_ref2) {
  var field = _ref2.field,
      query1 = _ref2.query1;
  return {
    query_type: 'must_not',
    query: {
      match: _defineProperty({}, field, query1)
    }
  };
};

var existsHandler = function existsHandler(_ref3) {
  var field = _ref3.field;
  return {
    query_type: 'filter',
    query: {
      exists: {
        field: field
      }
    }
  };
};

var missingHandler = function missingHandler(_ref4) {
  var field = _ref4.field;
  return {
    query_type: 'must_not',
    query: {
      exists: {
        field: field
      }
    }
  };
};

var greaterThanHandler = function greaterThanHandler(_ref5) {
  var field = _ref5.field,
      query1 = _ref5.query1;
  return {
    query_type: 'filter',
    query: {
      range: _defineProperty({}, field, {
        gte: query1
      })
    }
  };
};

var lessThanHandler = function lessThanHandler(_ref6) {
  var field = _ref6.field,
      query1 = _ref6.query1;
  return {
    query_type: 'filter',
    query: {
      range: _defineProperty({}, field, {
        lte: query1
      })
    }
  };
};

var betweenHandler = function betweenHandler(_ref7) {
  var field = _ref7.field,
      query1 = _ref7.query1,
      query2 = _ref7.query2;
  return {
    query_type: 'filter',
    query: {
      range: _defineProperty({}, field, {
        gte: query1,
        lte: query2
      })
    }
  };
};

var booleanHandler = function booleanHandler(_ref8) {
  var field = _ref8.field,
      query1 = _ref8.query1;
  return {
    query_type: 'filter',
    query: {
      term: _defineProperty({}, field, query1)
    }
  };
};

var queryTypeMap = {
  match: matchHandler,
  matchExclude: excludeHandler,
  nullExists: existsHandler,
  nullMissing: missingHandler,
  floatGte: greaterThanHandler,
  floatLte: lessThanHandler,
  floatBetween: betweenHandler,
  boolean: booleanHandler
};

function buildQuery(queries) {
  return queries.length !== 0 ? queries.map(function (queryParams) {
    var query1 = queryParams.query1,
        query2 = queryParams.query2,
        field = queryParams.field,
        queryCondition = queryParams.queryCondition;

    return query1 ? queryTypeMap[queryCondition]({
      field: field,
      query1: query1,
      query2: query2
    }) : null;
  }) : [];
}

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_scss__ = __webpack_require__(386);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ResultsList__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_QueryForm__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_fetchMethods__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_queryHelpers__ = __webpack_require__(136);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      fields: {},
      results: [],
      hits: 0,
      isLoading: true,
      queries: [{
        field: 'utility_company.raw',
        queryCondition: 'match',
        fieldType: 'text',
        query1: 'sce'
      }]
    }, _this.handleQueryFormChange = function (index, stateObj) {
      var queries = [].concat(_toConsumableArray(_this.state.queries));
      queries[index] = _extends({}, queries[index], stateObj);
      _this.setState({ queries: queries });
    }, _this.addQueryForm = function () {
      var queries = [].concat(_toConsumableArray(_this.state.queries), [{}]);
      _this.setState({ queries: queries });
    }, _this.submitQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var queries, builtQuery, results;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              queries = _this.state.queries;
              builtQuery = Object(__WEBPACK_IMPORTED_MODULE_4__helpers_queryHelpers__["b" /* buildQuery */])(queries);

              console.log('builtQuery --> ', builtQuery);
              _context.next = 5;
              return Object(__WEBPACK_IMPORTED_MODULE_3__helpers_fetchMethods__["b" /* search */])({ queries: builtQuery });

            case 5:
              results = _context.sent;

              if (results) {
                console.log('results --> ', results);
                _this.setState({ results: results });
              }

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var fields;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__helpers_fetchMethods__["a" /* getFields */])();

              case 2:
                fields = _context2.sent;

                if (fields) {
                  this.setState({ fields: fields, isLoading: false });
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()

    // handleQuery = async event => {
    //   this.handleChange(event)
    //   const { target: { value } } = event
    //   const { field } = this.state

    //   const results = await search({ field, query: value })
    //   if (results) {
    //     const { data, hits } = results
    //     this.setState({ results: data, hits })
    //   }
    // }

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          fields = _state.fields,
          isLoading = _state.isLoading,
          queries = _state.queries;

      console.log('state --> ', this.state);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'search' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.addQueryForm },
          'Add Query'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.submitQuery },
          'Submit Query'
        ),
        queries.length > 0 && queries.map(function (query, index) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_QueryForm__["a" /* default */], _extends({
            key: index,
            index: index,
            fields: fields,
            isLoading: isLoading,
            handleQueryFormChange: _this3.handleQueryFormChange
          }, query));
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(51);
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
/* unused harmony default export */ var _unused_webpack_default_export = (ResultsList);

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_FieldDropdown__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_QueryConditionDropdown__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_QueryInput__ = __webpack_require__(364);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var object = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    bool = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    func = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    number = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number;

var QueryForm = function (_Component) {
  _inherits(QueryForm, _Component);

  function QueryForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, QueryForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = QueryForm.__proto__ || Object.getPrototypeOf(QueryForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (_ref2) {
      var _ref2$target = _ref2.target,
          id = _ref2$target.id,
          value = _ref2$target.value;
      var _this$props = _this.props,
          handleQueryFormChange = _this$props.handleQueryFormChange,
          index = _this$props.index;

      handleQueryFormChange(index, _defineProperty({}, id, value));
    }, _this.handleFieldChange = function (_ref3) {
      var _handleQueryFormChang2;

      var _ref3$target = _ref3.target,
          id = _ref3$target.id,
          value = _ref3$target.value;
      var _this$props2 = _this.props,
          fields = _this$props2.fields,
          handleQueryFormChange = _this$props2.handleQueryFormChange,
          index = _this$props2.index;

      handleQueryFormChange(index, (_handleQueryFormChang2 = {}, _defineProperty(_handleQueryFormChang2, id, value), _defineProperty(_handleQueryFormChang2, 'fieldType', fields[value].type), _handleQueryFormChang2));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(QueryForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          fields = _props.fields,
          isLoading = _props.isLoading,
          field = _props.field,
          queryCondition = _props.queryCondition,
          query1 = _props.query1,
          fieldType = _props.fieldType;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'query-form' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_FieldDropdown__["a" /* default */], {
          field: field || '',
          fields: fields,
          isLoading: isLoading,
          handleChange: this.handleFieldChange
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_QueryConditionDropdown__["a" /* default */], {
          fieldType: fieldType || '',
          queryCondition: queryCondition || '',
          handleChange: this.handleChange
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_QueryInput__["a" /* default */], {
          id: 'query1',
          value: query1 || '',
          handleQuery: this.handleChange
        })
      );
    }
  }]);

  return QueryForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

QueryForm.propTypes = {
  fields: object,
  isLoading: bool,
  handleQueryFormChange: func,
  index: number
};
/* harmony default export */ __webpack_exports__["a"] = (QueryForm);

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var string = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    func = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    object = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object;

var FieldDropdown = function (_PureComponent) {
  _inherits(FieldDropdown, _PureComponent);

  function FieldDropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FieldDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FieldDropdown.__proto__ || Object.getPrototypeOf(FieldDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.generateOptions = function () {
      var fields = _this.props.fields;

      return Object.keys(fields).map(function (field) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'option',
          { key: field, value: field },
          field
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FieldDropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          field = _props.field,
          handleChange = _props.handleChange,
          isLoading = _props.isLoading;


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
  handleChange: func,
  fields: object
};
/* harmony default export */ __webpack_exports__["a"] = (FieldDropdown);

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_queryHelpers__ = __webpack_require__(136);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var string = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    func = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func;




var QueryConditionDropdown = function (_PureComponent) {
  _inherits(QueryConditionDropdown, _PureComponent);

  function QueryConditionDropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, QueryConditionDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = QueryConditionDropdown.__proto__ || Object.getPrototypeOf(QueryConditionDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.generateOptions = function () {
      var fieldType = _this.props.fieldType;

      return __WEBPACK_IMPORTED_MODULE_2__helpers_queryHelpers__["a" /* FIELD_TYPE_CONDITIONS */][fieldType].map(function (fieldType) {
        var label = fieldType.label,
            value = fieldType.value;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'option',
          { key: label, value: value },
          label
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(QueryConditionDropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          queryCondition = _props.queryCondition,
          handleChange = _props.handleChange,
          fieldType = _props.fieldType;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'select' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'select',
          {
            id: 'queryCondition',
            value: queryCondition,
            onChange: handleChange
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { value: '', key: 'select-field' },
            'Select Condition'
          ),
          fieldType !== '' && this.generateOptions()
        )
      );
    }
  }]);

  return QueryConditionDropdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

QueryConditionDropdown.propTypes = {
  fieldType: string,
  queryCondition: string,
  handleChange: func
};
/* harmony default export */ __webpack_exports__["a"] = (QueryConditionDropdown);

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(51);
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
          value = _props.value,
          handleQuery = _props.handleQuery,
          id = _props.id;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'input' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: id, value: value, onChange: handleQuery })
      );
    }
  }]);

  return QueryInput;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

QueryInput.propType = {
  value: string,
  id: string,
  handleQuery: func
};
/* harmony default export */ __webpack_exports__["a"] = (QueryInput);

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(366);
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
            return _context.abrupt('return', response.data.mapping);

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
    var queries = _ref3.queries;
    var url, body, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = BASE_URL + '/query';
            body = {
              queries: queries
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

/***/ 386:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[142]);
//# sourceMappingURL=client.js.map