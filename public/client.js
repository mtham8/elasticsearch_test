webpackJsonp([0],{132:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u});var a=n(355),o=n.n(a),i=function(){var e=r(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://localhost:5000/get_fields",e.prev=1,e.next=4,o.a.get(t);case 4:return n=e.sent,console.log("field response --\x3e ",n),e.abrupt("return",n.data.sort());case 9:return e.prev=9,e.t0=e.catch(1),console.log("error --\x3e ",e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}},e,this,[[1,9]])}));return function(){return e.apply(this,arguments)}}(),u=function(){var e=r(regeneratorRuntime.mark(function e(t){var n,r,a,i=t.field,u=t.query;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://localhost:5000/search",r={field:i,query:u},e.prev=2,e.next=5,o.a.post(n,r);case 5:return a=e.sent,console.log("search response --\x3e ",a.data),e.abrupt("return",a.data);case 10:return e.prev=10,e.t0=e.catch(2),console.log("error --\x3e ",e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}},e,this,[[2,10]])}));return function(t){return e.apply(this,arguments)}}()},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(139),a=(n.n(r),n(47)),o=n.n(a),i=n(342),u=n.n(i),c=n(350),s=n(377);n.n(s);(function(){var e=function(e){for(var t in console)e.iteratee(t)},t=function(){};return{logs:function(n){var n=void 0!==n&&n;e({iteratee:function(e){!0===n?console[e]=t:!1===n&&delete console[e]}})}}})().logs(!0),u.a.render(o.a.createElement(c.a,null),document.getElementById("client"))},350:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(47),s=n.n(c),l=n(351),f=n(375),p=n(376),h=n(132),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(){var e,n,u,c,s=this;o(this,t);for(var l=arguments.length,f=Array(l),p=0;p<l;p++)f[p]=arguments[p];return n=u=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),u.state={field:"",query:"",results:[],hits:0},u.handleChange=function(e){var t=e.target,n=t.id,r=t.value;u.setState(a({},n,r))},u.handleQuery=function(){var e=r(regeneratorRuntime.mark(function e(t){var n,r,a,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u.handleChange(t),n=t.target.value,r=u.state.field,e.next=5,Object(h.b)({field:r,query:n});case 5:a=e.sent,a&&(o=a.data,i=a.hits,u.setState({results:o,hits:i}));case 7:case"end":return e.stop()}},e,s)}));return function(t){return e.apply(this,arguments)}}(),c=n,i(u,c)}return u(t,e),y(t,[{key:"render",value:function(){var e=this.state,t=e.field,n=e.query,r=e.results,a=e.hits;return s.a.createElement("div",{className:"search"},s.a.createElement(l.a,{field:t,handleChange:this.handleChange}),s.a.createElement(f.a,{query:n,handleQuery:this.handleQuery}),s.a.createElement(p.a,{results:r,field:t,hits:a}))}}]),t}(c.PureComponent);t.a=d},351:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,o){try{var i=t[a](o),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(47),c=n.n(u),s=n(93),l=n.n(s),f=n(132),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=l.a.string,y=l.a.func,d=function(e){function t(){var e,n,r,i;a(this,t);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={fields:[],isLoading:!0},r.generateOptions=function(){return r.state.fields.map(function(e){return c.a.createElement("option",{key:e,value:e},e)})},i=n,o(r,i)}return i(t,e),p(t,[{key:"componentDidMount",value:function(){function e(){return t.apply(this,arguments)}var t=r(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)();case 2:t=e.sent,t&&this.setState({fields:t,isLoading:!1});case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.props,t=e.field,n=e.handleChange,r=this.state,a=r.isLoading;r.fields;return c.a.createElement("div",null,c.a.createElement("select",{id:"field",value:t,onChange:n},c.a.createElement("option",{value:"",key:"select-field"},"Select Field"),!a&&this.generateOptions()))}}]),t}(u.PureComponent);d.propTypes={field:h,handleChange:y},t.a=d},375:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(47),u=n.n(i),c=n(93),s=n.n(c),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=s.a.string,p=s.a.func,h=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.query,n=e.handleQuery;return u.a.createElement("div",{className:"input"},u.a.createElement("input",{id:"query",value:t,onChange:n}))}}]),t}(i.PureComponent);h.propType={query:f,handleQuery:p},t.a=h},376:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(47),u=n.n(i),c=n(93),s=n.n(c),l=function(){function e(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=s.a.array,h=s.a.string,y=s.a.number,d=function(e){function t(){var e,n,o,i;r(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={showUser:0},o.handleClick=function(e){o.setState({showUser:e})},o.generateResults=function(){var e=o.props,t=e.results,n=e.field,r=o.state.showUser;return t.map(function(e,t){var a=e.username;return u.a.createElement("div",{key:t,className:"result"},u.a.createElement("div",{className:"expanded-detail"},"Username: ",a,u.a.createElement("div",{className:"fill"}),u.a.createElement("button",{onClick:function(){return o.handleClick(t)}},r===t&&"HIDE",r!==t&&"SHOW")),u.a.createElement("div",null,"Match: ",e[n]))})},i=n,a(o,i)}return o(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.results,n=e.hits,r=this.state.showUser;return u.a.createElement("div",{className:"results-list"},u.a.createElement("div",{className:"results"},u.a.createElement("div",null,"Total: ",n),t.length>0&&this.generateResults()),t.length>0&&u.a.createElement("div",{className:"expanded-result"},u.a.createElement("div",null,"Username: ",t[r].username),Object.entries(t[r]).map(function(e){var t=l(e,2),n=t[0],r=t[1];return u.a.createElement("div",{key:n,className:"expanded-detail"},u.a.createElement("div",null,n),u.a.createElement("div",{className:"fill"}),u.a.createElement("div",null,r))})))}}]),t}(i.Component);d.propTypes={results:p,field:h,hits:y},t.a=d},377:function(e,t){}},[138]);
//# sourceMappingURL=client.js.map