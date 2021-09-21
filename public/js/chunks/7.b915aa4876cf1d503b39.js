(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./frontend/src/@core/utils/filter.js":
/*!********************************************!*\
  !*** ./frontend/src/@core/utils/filter.js ***!
  \********************************************/
/*! exports provided: kFormatter, title, avatarText, formatDate, formatDateToMonthShort, filterTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFormatter", function() { return kFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatarText", function() { return avatarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateToMonthShort", function() { return formatDateToMonthShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTags", function() { return filterTags; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./frontend/src/@core/utils/utils.js");

var kFormatter = function kFormatter(num) {
  return num > 999 ? "".concat((num / 1000).toFixed(1), "k") : num;
};
var title = function title(value) {
  var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  if (!value) return '';
  var str = value.toString();
  var arr = str.split(replacer);
  var capitalizedArray = [];
  arr.forEach(function (word) {
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedArray.push(capitalized);
  });
  return capitalizedArray.join(' ');
};
var avatarText = function avatarText(value) {
  if (!value) return '';
  var nameArray = value.split(' ');
  return nameArray.map(function (word) {
    return word.charAt(0).toUpperCase();
  }).join('');
};
/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */

var formatDate = function formatDate(value) {
  var formatting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  if (!value) return value;
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};
/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {String} value date to format
 * @param {Boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */

var formatDateToMonthShort = function formatDateToMonthShort(value) {
  var toTimeForCurrentDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var date = new Date(value);
  var formatting = {
    month: 'short',
    day: 'numeric'
  };

  if (toTimeForCurrentDay && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isToday"])(date)) {
    formatting = {
      hour: 'numeric',
      minute: 'numeric'
    };
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
}; // Strip all the tags from markup and return plain text

var filterTags = function filterTags(value) {
  return value.replace(/<\/?[^>]+(>|$)/g, '');
};

/***/ }),

/***/ "./frontend/src/@core/utils/utils.js":
/*!*******************************************!*\
  !*** ./frontend/src/@core/utils/utils.js ***!
  \*******************************************/
/*! exports provided: isObject, isToday, getRandomBsVariant, isDynamicRouteActive, useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBsVariant", function() { return getRandomBsVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicRouteActive", function() { return isDynamicRouteActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ "./frontend/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // eslint-disable-next-line object-curly-newline


var isObject = function isObject(obj) {
  return _typeof(obj) === 'object' && obj !== null;
};
var isToday = function isToday(date) {
  var today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    /* eslint-enable */

  );
};

var getRandomFromArray = function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}; // ? Light and Dark variant is not included
// prettier-ignore


var getRandomBsVariant = function getRandomBsVariant() {
  return getRandomFromArray(['primary', 'secondary', 'success', 'warning', 'danger', 'info']);
};
var isDynamicRouteActive = function isDynamicRouteActive(route) {
  var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(route),
      resolvedRoute = _router$resolve.route;

  return resolvedRoute.path === _router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.path;
}; // Thanks: https://medium.com/better-programming/reactive-vue-routes-with-the-composition-api-18c1abd878d1

var useRouter = function useRouter() {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["getCurrentInstance"])().proxy;
  var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["reactive"])({
    route: vm.$route
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(function () {
    return vm.$route;
  }, function (r) {
    state.route = r;
  });
  return _objectSpread(_objectSpread({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["toRefs"])(state)), {}, {
    router: vm.$router
  });
};
/**
 * This is just enhancement over Object.extend [Gives deep extend]
 * @param {target} a Object which contains values to be overridden
 * @param {source} b Object which contains values to override
 */
// export const objectExtend = (a, b) => {
//   // Don't touch 'null' or 'undefined' objects.
//   if (a == null || b == null) {
//     return a
//   }
//   Object.keys(b).forEach(key => {
//     if (Object.prototype.toString.call(b[key]) === '[object Object]') {
//       if (Object.prototype.toString.call(a[key]) !== '[object Object]') {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = b[key]
//       } else {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = objectExtend(a[key], b[key])
//       }
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       a[key] = b[key]
//     }
//   })
//   return a
// }

/***/ }),

/***/ "./frontend/src/assets/images/icons/apple-safari.png":
/*!***********************************************************!*\
  !*** ./frontend/src/assets/images/icons/apple-safari.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/icons/apple-safari.png";

/***/ }),

/***/ "./frontend/src/assets/images/icons/google-chrome.png":
/*!************************************************************!*\
  !*** ./frontend/src/assets/images/icons/google-chrome.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/icons/google-chrome.png";

/***/ }),

/***/ "./frontend/src/assets/images/icons/internet-explorer.png":
/*!****************************************************************!*\
  !*** ./frontend/src/assets/images/icons/internet-explorer.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/icons/internet-explorer.png";

/***/ }),

/***/ "./frontend/src/assets/images/icons/mozila-firefox.png":
/*!*************************************************************!*\
  !*** ./frontend/src/assets/images/icons/mozila-firefox.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/icons/mozila-firefox.png";

/***/ }),

/***/ "./frontend/src/assets/images/icons/opera.png":
/*!****************************************************!*\
  !*** ./frontend/src/assets/images/icons/opera.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/icons/opera.png";

/***/ }),

/***/ "./frontend/src/assets/images/illustration/badge.svg":
/*!***********************************************************!*\
  !*** ./frontend/src/assets/images/illustration/badge.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/illustration/badge.svg";

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/Ecommerce.vue":
/*!**************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/Ecommerce.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ecommerce_vue_vue_type_template_id_e2cf3eca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ecommerce.vue?vue&type=template&id=e2cf3eca& */ "./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=template&id=e2cf3eca&");
/* harmony import */ var _Ecommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ecommerce.vue?vue&type=script&lang=js& */ "./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Ecommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ecommerce.vue?vue&type=style&index=0&lang=scss& */ "./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Ecommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ecommerce_vue_vue_type_template_id_e2cf3eca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Ecommerce_vue_vue_type_template_id_e2cf3eca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/dashboard/ecommerce/Ecommerce.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ecommerce.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ecommerce.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=template&id=e2cf3eca&":
/*!*********************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=template&id=e2cf3eca& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_template_id_e2cf3eca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ecommerce.vue?vue&type=template&id=e2cf3eca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=template&id=e2cf3eca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_template_id_e2cf3eca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ecommerce_vue_vue_type_template_id_e2cf3eca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue":
/*!***************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceBrowserStates_vue_vue_type_template_id_48c3939f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceBrowserStates.vue?vue&type=template&id=48c3939f& */ "./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue?vue&type=template&id=48c3939f&");
/* harmony import */ var _EcommerceBrowserStates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceBrowserStates.vue?vue&type=script&lang=js& */ "./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceBrowserStates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceBrowserStates_vue_vue_type_template_id_48c3939f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceBrowserStates_vue_vue_type_template_id_48c3939f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceBrowserStates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceBrowserStates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceBrowserStates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue?vue&type=template&id=48c3939f&":
/*!**********************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue?vue&type=template&id=48c3939f& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceBrowserStates_vue_vue_type_template_id_48c3939f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceBrowserStates.vue?vue&type=template&id=48c3939f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue?vue&type=template&id=48c3939f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceBrowserStates_vue_vue_type_template_id_48c3939f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceBrowserStates_vue_vue_type_template_id_48c3939f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue":
/*!**************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceCompanyTable_vue_vue_type_template_id_e1a605e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceCompanyTable.vue?vue&type=template&id=e1a605e8&scoped=true& */ "./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=template&id=e1a605e8&scoped=true&");
/* harmony import */ var _EcommerceCompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceCompanyTable.vue?vue&type=script&lang=js& */ "./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EcommerceCompanyTable_vue_vue_type_style_index_0_id_e1a605e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EcommerceCompanyTable.vue?vue&type=style&index=0&id=e1a605e8&lang=scss&scoped=true& */ "./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=style&index=0&id=e1a605e8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EcommerceCompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceCompanyTable_vue_vue_type_template_id_e1a605e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceCompanyTable_vue_vue_type_template_id_e1a605e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e1a605e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceCompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceCompanyTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceCompanyTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=style&index=0&id=e1a605e8&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=style&index=0&id=e1a605e8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceCompanyTable_vue_vue_type_style_index_0_id_e1a605e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceCompanyTable.vue?vue&type=style&index=0&id=e1a605e8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=style&index=0&id=e1a605e8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceCompanyTable_vue_vue_type_style_index_0_id_e1a605e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceCompanyTable_vue_vue_type_style_index_0_id_e1a605e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceCompanyTable_vue_vue_type_style_index_0_id_e1a605e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceCompanyTable_vue_vue_type_style_index_0_id_e1a605e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=template&id=e1a605e8&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=template&id=e1a605e8&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceCompanyTable_vue_vue_type_template_id_e1a605e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceCompanyTable.vue?vue&type=template&id=e1a605e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=template&id=e1a605e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceCompanyTable_vue_vue_type_template_id_e1a605e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceCompanyTable_vue_vue_type_template_id_e1a605e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue":
/*!***************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceEarningsChart_vue_vue_type_template_id_13884b8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceEarningsChart.vue?vue&type=template&id=13884b8a& */ "./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue?vue&type=template&id=13884b8a&");
/* harmony import */ var _EcommerceEarningsChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceEarningsChart.vue?vue&type=script&lang=js& */ "./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceEarningsChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceEarningsChart_vue_vue_type_template_id_13884b8a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceEarningsChart_vue_vue_type_template_id_13884b8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceEarningsChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceEarningsChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceEarningsChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue?vue&type=template&id=13884b8a&":
/*!**********************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue?vue&type=template&id=13884b8a& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceEarningsChart_vue_vue_type_template_id_13884b8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceEarningsChart.vue?vue&type=template&id=13884b8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue?vue&type=template&id=13884b8a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceEarningsChart_vue_vue_type_template_id_13884b8a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceEarningsChart_vue_vue_type_template_id_13884b8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue":
/*!**************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceGoalOverview_vue_vue_type_template_id_18c30fe7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceGoalOverview.vue?vue&type=template&id=18c30fe7& */ "./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue?vue&type=template&id=18c30fe7&");
/* harmony import */ var _EcommerceGoalOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceGoalOverview.vue?vue&type=script&lang=js& */ "./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceGoalOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceGoalOverview_vue_vue_type_template_id_18c30fe7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceGoalOverview_vue_vue_type_template_id_18c30fe7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceGoalOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceGoalOverview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceGoalOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue?vue&type=template&id=18c30fe7&":
/*!*********************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue?vue&type=template&id=18c30fe7& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceGoalOverview_vue_vue_type_template_id_18c30fe7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceGoalOverview.vue?vue&type=template&id=18c30fe7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue?vue&type=template&id=18c30fe7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceGoalOverview_vue_vue_type_template_id_18c30fe7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceGoalOverview_vue_vue_type_template_id_18c30fe7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue":
/*!*******************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceMedal_vue_vue_type_template_id_346389cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceMedal.vue?vue&type=template&id=346389cc& */ "./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue?vue&type=template&id=346389cc&");
/* harmony import */ var _EcommerceMedal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceMedal.vue?vue&type=script&lang=js& */ "./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceMedal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceMedal_vue_vue_type_template_id_346389cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceMedal_vue_vue_type_template_id_346389cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMedal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceMedal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMedal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue?vue&type=template&id=346389cc&":
/*!**************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue?vue&type=template&id=346389cc& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMedal_vue_vue_type_template_id_346389cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceMedal.vue?vue&type=template&id=346389cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue?vue&type=template&id=346389cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMedal_vue_vue_type_template_id_346389cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMedal_vue_vue_type_template_id_346389cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue":
/*!********************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceMeetup_vue_vue_type_template_id_803b8ac6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceMeetup.vue?vue&type=template&id=803b8ac6& */ "./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue?vue&type=template&id=803b8ac6&");
/* harmony import */ var _EcommerceMeetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceMeetup.vue?vue&type=script&lang=js& */ "./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceMeetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceMeetup_vue_vue_type_template_id_803b8ac6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceMeetup_vue_vue_type_template_id_803b8ac6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMeetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceMeetup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMeetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue?vue&type=template&id=803b8ac6&":
/*!***************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue?vue&type=template&id=803b8ac6& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMeetup_vue_vue_type_template_id_803b8ac6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceMeetup.vue?vue&type=template&id=803b8ac6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue?vue&type=template&id=803b8ac6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMeetup_vue_vue_type_template_id_803b8ac6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceMeetup_vue_vue_type_template_id_803b8ac6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue":
/*!************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceOrderChart_vue_vue_type_template_id_cda523aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceOrderChart.vue?vue&type=template&id=cda523aa& */ "./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue?vue&type=template&id=cda523aa&");
/* harmony import */ var _EcommerceOrderChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceOrderChart.vue?vue&type=script&lang=js& */ "./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceOrderChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceOrderChart_vue_vue_type_template_id_cda523aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceOrderChart_vue_vue_type_template_id_cda523aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceOrderChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceOrderChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceOrderChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue?vue&type=template&id=cda523aa&":
/*!*******************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue?vue&type=template&id=cda523aa& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceOrderChart_vue_vue_type_template_id_cda523aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceOrderChart.vue?vue&type=template&id=cda523aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue?vue&type=template&id=cda523aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceOrderChart_vue_vue_type_template_id_cda523aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceOrderChart_vue_vue_type_template_id_cda523aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue":
/*!*************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceProfitChart_vue_vue_type_template_id_cc0558e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceProfitChart.vue?vue&type=template&id=cc0558e2& */ "./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue?vue&type=template&id=cc0558e2&");
/* harmony import */ var _EcommerceProfitChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceProfitChart.vue?vue&type=script&lang=js& */ "./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceProfitChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceProfitChart_vue_vue_type_template_id_cc0558e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceProfitChart_vue_vue_type_template_id_cc0558e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceProfitChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceProfitChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceProfitChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue?vue&type=template&id=cc0558e2&":
/*!********************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue?vue&type=template&id=cc0558e2& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceProfitChart_vue_vue_type_template_id_cc0558e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceProfitChart.vue?vue&type=template&id=cc0558e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue?vue&type=template&id=cc0558e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceProfitChart_vue_vue_type_template_id_cc0558e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceProfitChart_vue_vue_type_template_id_cc0558e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue":
/*!***************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceRevenueReport_vue_vue_type_template_id_34f2a9c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceRevenueReport.vue?vue&type=template&id=34f2a9c5& */ "./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue?vue&type=template&id=34f2a9c5&");
/* harmony import */ var _EcommerceRevenueReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceRevenueReport.vue?vue&type=script&lang=js& */ "./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceRevenueReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceRevenueReport_vue_vue_type_template_id_34f2a9c5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceRevenueReport_vue_vue_type_template_id_34f2a9c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceRevenueReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceRevenueReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceRevenueReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue?vue&type=template&id=34f2a9c5&":
/*!**********************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue?vue&type=template&id=34f2a9c5& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceRevenueReport_vue_vue_type_template_id_34f2a9c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceRevenueReport.vue?vue&type=template&id=34f2a9c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue?vue&type=template&id=34f2a9c5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceRevenueReport_vue_vue_type_template_id_34f2a9c5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceRevenueReport_vue_vue_type_template_id_34f2a9c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue":
/*!************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceStatistics_vue_vue_type_template_id_42552c9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceStatistics.vue?vue&type=template&id=42552c9e& */ "./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue?vue&type=template&id=42552c9e&");
/* harmony import */ var _EcommerceStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceStatistics.vue?vue&type=script&lang=js& */ "./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceStatistics_vue_vue_type_template_id_42552c9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceStatistics_vue_vue_type_template_id_42552c9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceStatistics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceStatistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue?vue&type=template&id=42552c9e&":
/*!*******************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue?vue&type=template&id=42552c9e& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceStatistics_vue_vue_type_template_id_42552c9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceStatistics.vue?vue&type=template&id=42552c9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue?vue&type=template&id=42552c9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceStatistics_vue_vue_type_template_id_42552c9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceStatistics_vue_vue_type_template_id_42552c9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue":
/*!**************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EcommerceTransactions_vue_vue_type_template_id_c7e8e1e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EcommerceTransactions.vue?vue&type=template&id=c7e8e1e0& */ "./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue?vue&type=template&id=c7e8e1e0&");
/* harmony import */ var _EcommerceTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EcommerceTransactions.vue?vue&type=script&lang=js& */ "./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EcommerceTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EcommerceTransactions_vue_vue_type_template_id_c7e8e1e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EcommerceTransactions_vue_vue_type_template_id_c7e8e1e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceTransactions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceTransactions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue?vue&type=template&id=c7e8e1e0&":
/*!*********************************************************************************************************!*\
  !*** ./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue?vue&type=template&id=c7e8e1e0& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceTransactions_vue_vue_type_template_id_c7e8e1e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceTransactions.vue?vue&type=template&id=c7e8e1e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue?vue&type=template&id=c7e8e1e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceTransactions_vue_vue_type_template_id_c7e8e1e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EcommerceTransactions_vue_vue_type_template_id_c7e8e1e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/auth/utils */ "./frontend/src/auth/utils.js");
/* harmony import */ var _EcommerceMedal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EcommerceMedal.vue */ "./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue");
/* harmony import */ var _EcommerceStatistics_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EcommerceStatistics.vue */ "./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue");
/* harmony import */ var _EcommerceRevenueReport_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EcommerceRevenueReport.vue */ "./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue");
/* harmony import */ var _EcommerceOrderChart_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EcommerceOrderChart.vue */ "./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue");
/* harmony import */ var _EcommerceProfitChart_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EcommerceProfitChart.vue */ "./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue");
/* harmony import */ var _EcommerceEarningsChart_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EcommerceEarningsChart.vue */ "./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue");
/* harmony import */ var _EcommerceCompanyTable_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EcommerceCompanyTable.vue */ "./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue");
/* harmony import */ var _EcommerceMeetup_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EcommerceMeetup.vue */ "./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue");
/* harmony import */ var _EcommerceBrowserStates_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EcommerceBrowserStates.vue */ "./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue");
/* harmony import */ var _EcommerceGoalOverview_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EcommerceGoalOverview.vue */ "./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue");
/* harmony import */ var _EcommerceTransactions_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EcommerceTransactions.vue */ "./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    EcommerceMedal: _EcommerceMedal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    EcommerceStatistics: _EcommerceStatistics_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    EcommerceRevenueReport: _EcommerceRevenueReport_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    EcommerceOrderChart: _EcommerceOrderChart_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    EcommerceProfitChart: _EcommerceProfitChart_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    EcommerceEarningsChart: _EcommerceEarningsChart_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    EcommerceCompanyTable: _EcommerceCompanyTable_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    EcommerceMeetup: _EcommerceMeetup_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    EcommerceBrowserStates: _EcommerceBrowserStates_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    EcommerceGoalOverview: _EcommerceGoalOverview_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    EcommerceTransactions: _EcommerceTransactions_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      data: {}
    };
  },
  created: function created() {
    var _this = this;

    // data
    this.$http.get('/ecommerce/data').then(function (response) {
      _this.data = response.data; // ? Your API will return name of logged in user or you might just directly get name of logged in user
      // ? This is just for demo purpose

      var userData = Object(_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getUserData"])();
      _this.data.congratulations.name = userData.fullName.split(' ')[0] || userData.username;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./frontend/node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./frontend/themeConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* eslint-disable global-require */

var $trackBgColor = '#e9ecef';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      chartData: [],
      chartClone: {},
      chartColor: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].primary, _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].warning, _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].secondary, _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].info, _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].danger],
      chartSeries: [54.4, 6.1, 14.6, 4.2, 8],
      browserData: [{
        browserImg: __webpack_require__(/*! @/assets/images/icons/google-chrome.png */ "./frontend/src/assets/images/icons/google-chrome.png"),
        name: 'Google Chrome',
        usage: '54.4%'
      }, {
        browserImg: __webpack_require__(/*! @/assets/images/icons/mozila-firefox.png */ "./frontend/src/assets/images/icons/mozila-firefox.png"),
        name: 'Mozila Firefox',
        usage: '6.1%'
      }, {
        browserImg: __webpack_require__(/*! @/assets/images/icons/apple-safari.png */ "./frontend/src/assets/images/icons/apple-safari.png"),
        name: 'Apple Safari',
        usage: '14.6%'
      }, {
        browserImg: __webpack_require__(/*! @/assets/images/icons/internet-explorer.png */ "./frontend/src/assets/images/icons/internet-explorer.png"),
        name: 'Internet Explorer',
        usage: '4.2%'
      }, {
        browserImg: __webpack_require__(/*! @/assets/images/icons/opera.png */ "./frontend/src/assets/images/icons/opera.png"),
        name: 'Opera Mini',
        usage: '8.%'
      }],
      chart: {
        series: [65],
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].primary],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: $trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    };
  },
  created: function created() {
    for (var i = 0; i < this.browserData.length; i += 1) {
      var chartClone = JSON.parse(JSON.stringify(this.chart));
      chartClone.options.colors[0] = this.chartColor[i];
      chartClone.series[0] = this.chartSeries[i];
      this.chartData.push(chartClone);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"]
  },
  props: {
    tableData: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      fields: [{
        key: 'company',
        label: 'COMPANY'
      }, {
        key: 'category',
        label: 'CATEGORY'
      }, {
        key: 'views',
        label: 'VIEWS'
      }, {
        key: 'revenue',
        label: 'REVENUE'
      }, {
        key: 'sales',
        label: 'SALES'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./frontend/node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./frontend/themeConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var $earningsStrokeColor2 = '#28c76f66';
var $earningsStrokeColor3 = '#28c76f33';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      earningsChart: {
        chartOptions: {
          chart: {
            type: 'donut',
            toolbar: {
              show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          comparedResult: [2, -3, 8],
          labels: ['App', 'Service', 'Product'],
          stroke: {
            width: 0
          },
          colors: [$earningsStrokeColor2, $earningsStrokeColor3, _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].success],
          grid: {
            padding: {
              right: -20,
              bottom: -8,
              left: -20
            }
          },
          plotOptions: {
            pie: {
              startAngle: -10,
              donut: {
                labels: {
                  show: true,
                  name: {
                    offsetY: 15
                  },
                  value: {
                    offsetY: -15,
                    formatter: function formatter(val) {
                      // eslint-disable-next-line radix
                      return "".concat(parseInt(val), "%");
                    }
                  },
                  total: {
                    show: true,
                    offsetY: 15,
                    label: 'App',
                    formatter: function formatter() {
                      return '53%';
                    }
                  }
                }
              }
            }
          },
          responsive: [{
            breakpoint: 1325,
            options: {
              chart: {
                height: 100
              }
            }
          }, {
            breakpoint: 1200,
            options: {
              chart: {
                height: 120
              }
            }
          }, {
            breakpoint: 1045,
            options: {
              chart: {
                height: 100
              }
            }
          }, {
            breakpoint: 992,
            options: {
              chart: {
                height: 120
              }
            }
          }]
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./frontend/node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./frontend/themeConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var $strokeColor = '#ebe9f1';
var $textHeadingColor = '#5e5873';
var $goalStrokeColor2 = '#51e5a8';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      goalOverviewRadialBar: {
        chart: {
          height: 245,
          type: 'radialBar',
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            blur: 3,
            left: 1,
            top: 1,
            opacity: 0.1
          }
        },
        colors: [$goalStrokeColor2],
        plotOptions: {
          radialBar: {
            offsetY: -10,
            startAngle: -150,
            endAngle: 150,
            hollow: {
              size: '77%'
            },
            track: {
              background: $strokeColor,
              strokeWidth: '50%'
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                color: $textHeadingColor,
                fontSize: '2.86rem',
                fontWeight: '600'
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].success],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        grid: {
          padding: {
            bottom: 30
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/filter */ "./frontend/src/@core/utils/filter.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  methods: {
    kFormatter: _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__["kFormatter"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BAvatarGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatarGroup"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"]
  },
  directives: {
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBTooltip"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./frontend/node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./frontend/themeConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var $barColor = '#f3f3f3';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      statisticsOrder: {
        chartOptions: {
          chart: {
            type: 'bar',
            stacked: true,
            toolbar: {
              show: false
            }
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
              top: -15,
              bottom: -15
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '20%',
              startingShape: 'rounded',
              colors: {
                backgroundBarColors: [$barColor, $barColor, $barColor, $barColor, $barColor],
                backgroundBarRadius: 5
              }
            }
          },
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].warning],
          xaxis: {
            labels: {
              show: false
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            show: false
          },
          tooltip: {
            x: {
              show: false
            }
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./frontend/node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./frontend/themeConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var $trackBgColor = '#EBEBEB';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      statisticsProfit: {
        chartOptions: {
          chart: {
            type: 'line',
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          grid: {
            borderColor: $trackBgColor,
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true
              }
            },
            yaxis: {
              lines: {
                show: false
              }
            },
            padding: {
              top: -30,
              bottom: -10
            }
          },
          stroke: {
            width: 3
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].info],
          markers: {
            size: 2,
            colors: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].info,
            strokeColors: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].info,
            strokeWidth: 2,
            strokeOpacity: 1,
            strokeDashArray: 0,
            fillOpacity: 1,
            discrete: [{
              seriesIndex: 0,
              dataPointIndex: 5,
              fillColor: '#ffffff',
              strokeColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].info,
              size: 5
            }],
            shape: 'circle',
            radius: 2,
            hover: {
              size: 3
            }
          },
          xaxis: {
            labels: {
              show: true,
              style: {
                fontSize: '0px'
              }
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            show: false
          },
          tooltip: {
            x: {
              show: false
            }
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./frontend/node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./frontend/themeConfig.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      revenue_report: {},
      revenueReport: {
        chartOptions: {
          chart: {
            stacked: true,
            type: 'bar',
            toolbar: {
              show: false
            }
          },
          grid: {
            padding: {
              top: -20,
              bottom: -10
            },
            yaxis: {
              lines: {
                show: false
              }
            }
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            labels: {
              style: {
                colors: '#6E6B7B',
                fontSize: '0.86rem',
                fontFamily: 'Montserrat'
              }
            },
            axisTicks: {
              show: false
            },
            axisBorder: {
              show: false
            }
          },
          legend: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].primary, _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].warning],
          plotOptions: {
            bar: {
              columnWidth: '17%',
              endingShape: 'rounded'
            },
            distributed: true
          },
          yaxis: {
            labels: {
              style: {
                colors: '#6E6B7B',
                fontSize: '0.86rem',
                fontFamily: 'Montserrat'
              }
            }
          }
        }
      },
      // budget chart
      budgetChart: {
        options: {
          chart: {
            height: 80,
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            },
            type: 'line',
            sparkline: {
              enabled: true
            }
          },
          stroke: {
            curve: 'smooth',
            dashArray: [0, 5],
            width: [2]
          },
          colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeColors"].primary, '#dcdae3'],
          tooltip: {
            enabled: false
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"]
  },
  props: {
    data: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"]
  },
  props: {
    data: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .card-statistics .statistics-body {\n  padding: 2rem 2.4rem !important;\n}\n@media (max-width: 991.98px) {\n[dir] .card-statistics .card-header, [dir] .card-statistics .statistics-body {\n    padding: 1.5rem !important;\n}\n}\n[dir] .card-company-table thead th {\n  border: 0;\n}\n[dir] .card-company-table td {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n[dir] .card-company-table td .avatar {\n  background-color: #f8f8f8;\n}\n[dir=ltr] .card-company-table td .avatar {\n  margin-right: 2rem;\n}\n[dir=rtl] .card-company-table td .avatar {\n  margin-left: 2rem;\n}\n[dir] .card-company-table td .avatar img {\n  border-radius: 0;\n}\n[dir] .card-browser-states .browser-states:first-child {\n  margin-top: 0;\n}\n[dir] .card-browser-states .browser-states:not(:first-child) {\n  margin-top: 1.7rem;\n}\n[dir] .card-transaction .transaction-item:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n[dir] .card-company-table td .b-avatar.badge-light-company {\n  background-color: #f8f8f8;\n}\n[dir=ltr] .card-company-table td .b-avatar.badge-light-company {\n  margin-right: 2rem;\n}\n[dir=rtl] .card-company-table td .b-avatar.badge-light-company {\n  margin-left: 2rem;\n}\n.apexcharts-canvas line[stroke=transparent] {\n  display: none;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip {\n  background: #fff;\n  border-color: #ebe9f1;\n}\n.apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  font-weight: 600;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #fff !important;\n  border-color: #ebe9f1 !important;\n}\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-label,\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #f8f8f8;\n  border-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip:after, [dir] .apexcharts-canvas .apexcharts-xaxistooltip:before, [dir] .apexcharts-canvas .apexcharts-yaxistooltip:after, [dir] .apexcharts-canvas .apexcharts-yaxistooltip:before {\n  border-bottom-color: #f8f8f8;\n}\n.apexcharts-canvas .apexcharts-text,\n.apexcharts-canvas .apexcharts-tooltip-text,\n.apexcharts-canvas .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-datalabel {\n  font-family: \"Montserrat\", Helvetica, Arial, serif !important;\n  fill: #6e6b7b;\n  font-weight: 400;\n  -webkit-filter: none;\n          filter: none;\n}\n.apexcharts-canvas .apexcharts-pie-label {\n  fill: white;\n  -webkit-filter: none;\n          filter: none;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-pie-series .apexcharts-pie-area {\n  stroke-width: 0;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-value {\n  font-size: 1.5rem;\n}\n.apexcharts-canvas .apexcharts-marker {\n  -webkit-box-shadow: none;\n}\n[dir] .apexcharts-canvas .apexcharts-marker {\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n[dir] .apexcharts-canvas .apexcharts-legend-series + .apexcharts-legend-series {\n  margin-top: 0.625rem;\n}\n.apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #6e6b7b !important;\n  font-size: 1rem !important;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-left: 0.5rem;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-right: 0.5rem;\n}\n.apexcharts-canvas .apexcharts-xcrosshairs,\n.apexcharts-canvas .apexcharts-ycrosshairs,\n.apexcharts-canvas .apexcharts-gridline {\n  stroke: #ebe9f1;\n}\n.apexcharts-legend.position-bottom {\n  bottom: 3rem;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-tick,\n.dark-layout .apexcharts-canvas line {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-heatmap .apexcharts-heatmap-rect {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radialbar .apexcharts-radialbar-track .apexcharts-radialbar-area {\n  stroke: #161d31;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radar-series polygon {\n  fill: #161d31;\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-datalabels-group .apexcharts-datalabel-value {\n  fill: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip {\n  background: #283046;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #283046 !important;\n  border-color: #3b4253 !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #161d31;\n  border-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip:after, [dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip:before, [dir] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip:after, [dir] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip:before {\n  border-bottom-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-yaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-yaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-yaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-datalabel-label {\n  fill: #b4b7bd;\n}\n.dark-layout .apexcharts-canvas .apexcharts-marker {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #b4b7bd !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xcrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-ycrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-gridline {\n  stroke: #3b4253;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=style&index=0&id=e1a605e8&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=style&index=0&id=e1a605e8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .dark-layout .card-company-table[data-v-e1a605e8]  td .b-avatar.badge-light-company {\n  background: #161d31 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Ecommerce.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=style&index=0&id=e1a605e8&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=style&index=0&id=e1a605e8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EcommerceCompanyTable.vue?vue&type=style&index=0&id=e1a605e8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=style&index=0&id=e1a605e8&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=template&id=e2cf3eca&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/Ecommerce.vue?vue&type=template&id=e2cf3eca& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { attrs: { id: "dashboard-ecommerce" } },
    [
      _c(
        "b-row",
        { staticClass: "match-height" },
        [
          _c(
            "b-col",
            { attrs: { xl: "4", md: "6" } },
            [
              _c("ecommerce-medal", {
                attrs: { data: _vm.data.congratulations }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xl: "8", md: "6" } },
            [
              _c("ecommerce-statistics", {
                attrs: { data: _vm.data.statisticsItems }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "match-height" },
        [
          _c(
            "b-col",
            { attrs: { lg: "4" } },
            [
              _c(
                "b-row",
                { staticClass: "match-height" },
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6", md: "3", cols: "6" } },
                    [
                      _c("ecommerce-order-chart", {
                        attrs: { data: _vm.data.statisticsOrder }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "6", md: "3", cols: "6" } },
                    [
                      _c("ecommerce-profit-chart", {
                        attrs: { data: _vm.data.statisticsProfit }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "12", md: "6" } },
                    [
                      _c("ecommerce-earnings-chart", {
                        attrs: { data: _vm.data.earningsChart }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "8" } },
            [
              _c("ecommerce-revenue-report", {
                attrs: { data: _vm.data.revenue }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "match-height" },
        [
          _c(
            "b-col",
            { attrs: { lg: "8" } },
            [
              _c("ecommerce-company-table", {
                attrs: { "table-data": _vm.data.companyTable }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "4", md: "6" } },
            [_c("ecommerce-meetup", { attrs: { data: _vm.data.meetup } })],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "4", md: "6" } },
            [_c("ecommerce-browser-states")],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "4", md: "6" } },
            [
              _c("ecommerce-goal-overview", {
                attrs: { data: _vm.data.goalOverview }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { lg: "4", md: "6" } },
            [
              _c("ecommerce-transactions", {
                attrs: { data: _vm.data.transactionData }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue?vue&type=template&id=48c3939f&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceBrowserStates.vue?vue&type=template&id=48c3939f& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "card-browser-states", attrs: { "no-body": "" } },
    [
      _c(
        "b-card-header",
        [
          _c(
            "div",
            [
              _c("b-card-title", [_vm._v("Browser States")]),
              _vm._v(" "),
              _c("b-card-text", { staticClass: "font-small-2" }, [
                _vm._v("\n        Counter August 2020\n      ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown",
            {
              staticClass: "chart-dropdown",
              attrs: { variant: "link", "no-caret": "", "toggle-class": "p-0" },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function() {
                    return [
                      _c("feather-icon", {
                        staticClass: "text-body cursor-pointer",
                        attrs: { icon: "MoreVerticalIcon", size: "18" }
                      })
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _vm._v("\n        Last 28 Days\n      ")
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _vm._v("\n        Last Month\n      ")
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { attrs: { href: "#" } }, [
                _vm._v("\n        Last Year\n      ")
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card-body",
        _vm._l(_vm.browserData, function(browser, index) {
          return _c(
            "div",
            { key: browser.browserImg, staticClass: "browser-states" },
            [
              _c(
                "b-media",
                { attrs: { "no-body": "" } },
                [
                  _c(
                    "b-media-aside",
                    { staticClass: "mr-1" },
                    [
                      _c("b-img", {
                        attrs: { src: browser.browserImg, alt: "browser img" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-media-body", [
                    _c("h6", { staticClass: "align-self-center my-auto" }, [
                      _vm._v(
                        "\n            " + _vm._s(browser.name) + "\n          "
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex align-items-center" },
                [
                  _c(
                    "span",
                    { staticClass: "font-weight-bold text-body-heading mr-1" },
                    [_vm._v(_vm._s(browser.usage))]
                  ),
                  _vm._v(" "),
                  _c("vue-apex-charts", {
                    attrs: {
                      type: "radialBar",
                      height: "30",
                      width: "30",
                      options: _vm.chartData[index].options,
                      series: _vm.chartData[index].series
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=template&id=e1a605e8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceCompanyTable.vue?vue&type=template&id=e1a605e8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.tableData
    ? _c(
        "b-card",
        { staticClass: "card-company-table", attrs: { "no-body": "" } },
        [
          _c("b-table", {
            staticClass: "mb-0",
            attrs: { items: _vm.tableData, responsive: "", fields: _vm.fields },
            scopedSlots: _vm._u(
              [
                {
                  key: "cell(company)",
                  fn: function(data) {
                    return [
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center" },
                        [
                          _c(
                            "b-avatar",
                            {
                              attrs: {
                                rounded: "",
                                size: "32",
                                variant: "light-company"
                              }
                            },
                            [
                              _c("b-img", {
                                attrs: {
                                  src: data.item.avatarImg,
                                  alt: "avatar img"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("div", { staticClass: "font-weight-bolder" }, [
                              _vm._v(
                                "\n            " +
                                  _vm._s(data.item.title) +
                                  "\n          "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "font-small-2 text-muted" },
                              [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(data.item.subtitle) +
                                    "\n          "
                                )
                              ]
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  }
                },
                {
                  key: "cell(category)",
                  fn: function(data) {
                    return [
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center" },
                        [
                          _c(
                            "b-avatar",
                            {
                              staticClass: "mr-1",
                              attrs: { variant: data.item.avatarColor }
                            },
                            [
                              _c("feather-icon", {
                                attrs: {
                                  size: "18",
                                  icon: data.item.avatarIcon
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(data.item.avatarTitle))])
                        ],
                        1
                      )
                    ]
                  }
                },
                {
                  key: "cell(views)",
                  fn: function(data) {
                    return [
                      _c("div", { staticClass: "d-flex flex-column" }, [
                        _c(
                          "span",
                          { staticClass: "font-weight-bolder mb-25" },
                          [_vm._v(_vm._s(data.item.viewTitle))]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "font-small-2 text-muted text-nowrap"
                          },
                          [_vm._v(_vm._s(data.item.viewsub))]
                        )
                      ])
                    ]
                  }
                },
                {
                  key: "cell(revenue)",
                  fn: function(data) {
                    return [
                      _vm._v(
                        "\n      " + _vm._s("$" + data.item.revenue) + "\n    "
                      )
                    ]
                  }
                },
                {
                  key: "cell(sales)",
                  fn: function(data) {
                    return [
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center" },
                        [
                          _c(
                            "span",
                            { staticClass: "font-weight-bolder mr-1" },
                            [_vm._v(_vm._s(data.item.sales + "%"))]
                          ),
                          _vm._v(" "),
                          _c("feather-icon", {
                            class: data.item.loss
                              ? "text-danger"
                              : "text-success",
                            attrs: {
                              icon: data.item.loss
                                ? "TrendingDownIcon"
                                : "TrendingUpIcon"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  }
                }
              ],
              null,
              false,
              3310440312
            )
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue?vue&type=template&id=13884b8a&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceEarningsChart.vue?vue&type=template&id=13884b8a& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "earnings-card" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "6" } },
                [
                  _c("b-card-title", { staticClass: "mb-1" }, [
                    _vm._v("\n        Earnings\n      ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "font-small-2" }, [
                    _vm._v("\n        This Month\n      ")
                  ]),
                  _vm._v(" "),
                  _c("h5", { staticClass: "mb-1" }, [
                    _vm._v("\n        $4055.56\n      ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-card-text",
                    { staticClass: "text-muted font-small-2" },
                    [
                      _c("span", { staticClass: "font-weight-bolder" }, [
                        _vm._v("68.2%")
                      ]),
                      _c("span", [_vm._v(" more earnings than last month.")])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "6" } },
                [
                  _c("vue-apex-charts", {
                    attrs: {
                      height: "120",
                      options: _vm.earningsChart.chartOptions,
                      series: _vm.data.series
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue?vue&type=template&id=18c30fe7&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceGoalOverview.vue?vue&type=template&id=18c30fe7& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c(
        "b-card",
        { attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            [
              _c("h4", { staticClass: "mb-0" }, [
                _vm._v("\n      Goal Overview\n    ")
              ]),
              _vm._v(" "),
              _c(
                "b-card-text",
                { staticClass: "font-medium-5 mb-0" },
                [
                  _c("feather-icon", {
                    staticClass: "text-muted cursor-pointer",
                    attrs: { icon: "HelpCircleIcon", size: "21" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("vue-apex-charts", {
            staticClass: "my-2",
            attrs: {
              type: "radialBar",
              height: "245",
              options: _vm.goalOverviewRadialBar,
              series: _vm.data.series
            }
          }),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "text-center mx-0" },
            [
              _c(
                "b-col",
                {
                  staticClass:
                    "border-top border-right d-flex align-items-between flex-column py-1",
                  attrs: { cols: "6" }
                },
                [
                  _c("b-card-text", { staticClass: "text-muted mb-0" }, [
                    _vm._v("\n        Completed\n      ")
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v(
                      "\n        " + _vm._s(_vm.data.completed) + "\n      "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass:
                    "border-top d-flex align-items-between flex-column py-1",
                  attrs: { cols: "6" }
                },
                [
                  _c("b-card-text", { staticClass: "text-muted mb-0" }, [
                    _vm._v("\n        In Progress\n      ")
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v(
                      "\n        " + _vm._s(_vm.data.inProgress) + "\n      "
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue?vue&type=template&id=346389cc&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceMedal.vue?vue&type=template&id=346389cc& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "card-congratulation-medal" },
        [
          _c("h5", [
            _vm._v("Congratulations 🎉 " + _vm._s(_vm.data.name) + "!")
          ]),
          _vm._v(" "),
          _c("b-card-text", { staticClass: "font-small-3" }, [
            _vm._v("\n    You have won gold medal\n  ")
          ]),
          _vm._v(" "),
          _c(
            "h3",
            { staticClass: "mb-75 mt-2 pt-50" },
            [
              _c("b-link", [
                _vm._v("$" + _vm._s(_vm.kFormatter(_vm.data.saleToday)))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              directives: [
                {
                  name: "ripple",
                  rawName: "v-ripple.400",
                  value: "rgba(255, 255, 255, 0.15)",
                  expression: "'rgba(255, 255, 255, 0.15)'",
                  modifiers: { "400": true }
                }
              ],
              attrs: { variant: "primary" }
            },
            [_vm._v("\n    View Sales\n  ")]
          ),
          _vm._v(" "),
          _c("b-img", {
            staticClass: "congratulation-medal",
            attrs: {
              src: __webpack_require__(/*! @/assets/images/illustration/badge.svg */ "./frontend/src/assets/images/illustration/badge.svg"),
              alt: "Medal Pic"
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue?vue&type=template&id=803b8ac6&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceMeetup.vue?vue&type=template&id=803b8ac6& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "card-developer-meetup", attrs: { "no-body": "" } },
        [
          _c(
            "div",
            { staticClass: "bg-light-primary rounded-top text-center" },
            [
              _c("b-img", {
                attrs: {
                  src: __webpack_require__(/*! @/assets/images/illustration/email.svg */ "./frontend/src/assets/images/illustration/email.svg"),
                  alt: "Meeting Pic",
                  height: "170"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c(
                "div",
                { staticClass: "meetup-header d-flex align-items-center" },
                [
                  _c("div", { staticClass: "meetup-day" }, [
                    _c("h6", { staticClass: "mb-0" }, [
                      _vm._v("\n          THU\n        ")
                    ]),
                    _vm._v(" "),
                    _c("h3", { staticClass: "mb-0" }, [
                      _vm._v("\n          24\n        ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "my-auto" },
                    [
                      _c("b-card-title", { staticClass: "mb-25" }, [
                        _vm._v("\n          Developer Meetup\n        ")
                      ]),
                      _vm._v(" "),
                      _c("b-card-text", { staticClass: "mb-0" }, [
                        _vm._v(
                          "\n          Meet world popular developers\n        "
                        )
                      ])
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _vm._l(_vm.data.mediaData, function(media) {
                return _c(
                  "b-media",
                  { key: media.avatar, attrs: { "no-body": "" } },
                  [
                    _c(
                      "b-media-aside",
                      { staticClass: "mr-1" },
                      [
                        _c(
                          "b-avatar",
                          {
                            attrs: {
                              rounded: "",
                              variant: "light-primary",
                              size: "34"
                            }
                          },
                          [
                            _c("feather-icon", {
                              attrs: { icon: media.avatar, size: "18" }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("b-media-body", [
                      _c("h6", { staticClass: "mb-0" }, [
                        _vm._v(
                          "\n          " + _vm._s(media.title) + "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("small", [_vm._v(_vm._s(media.subtitle))])
                    ])
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "b-avatar-group",
                { staticClass: "mt-2 pt-50", attrs: { size: "34px" } },
                [
                  _vm._l(_vm.data.avatars, function(avatar) {
                    return _c("b-avatar", {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover.bottom",
                          value: avatar.fullName,
                          expression: "avatar.fullName",
                          modifiers: { hover: true, bottom: true }
                        }
                      ],
                      key: avatar.avatar,
                      staticClass: "pull-up",
                      attrs: { src: avatar.avatar }
                    })
                  }),
                  _vm._v(" "),
                  _c(
                    "h6",
                    {
                      staticClass: "align-self-center cursor-pointer ml-1 mb-0"
                    },
                    [_vm._v("\n        +42\n      ")]
                  )
                ],
                2
              )
            ],
            2
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue?vue&type=template&id=cda523aa&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceOrderChart.vue?vue&type=template&id=cda523aa& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c(
        "b-card",
        { attrs: { "body-class": "pb-50" } },
        [
          _c("h6", [_vm._v("Orders")]),
          _vm._v(" "),
          _c("h2", { staticClass: "font-weight-bolder mb-1" }, [
            _vm._v("\n    2,76k\n  ")
          ]),
          _vm._v(" "),
          _c("vue-apex-charts", {
            attrs: {
              height: "70",
              options: _vm.statisticsOrder.chartOptions,
              series: _vm.data.series
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue?vue&type=template&id=cc0558e2&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceProfitChart.vue?vue&type=template&id=cc0558e2& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c(
        "b-card",
        {
          staticClass: "card-tiny-line-stats",
          attrs: { "body-class": "pb-50" }
        },
        [
          _c("h6", [_vm._v("Profit")]),
          _vm._v(" "),
          _c("h2", { staticClass: "font-weight-bolder mb-1" }, [
            _vm._v("\n    6,24k\n  ")
          ]),
          _vm._v(" "),
          _c("vue-apex-charts", {
            attrs: {
              height: "70",
              options: _vm.statisticsProfit.chartOptions,
              series: _vm.data.series
            }
          })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue?vue&type=template&id=34f2a9c5&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceRevenueReport.vue?vue&type=template&id=34f2a9c5& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "card-revenue-budget", attrs: { "no-body": "" } },
        [
          _c(
            "b-row",
            { staticClass: "mx-0" },
            [
              _c(
                "b-col",
                { staticClass: "revenue-report-wrapper", attrs: { md: "8" } },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-sm-flex justify-content-between align-items-center mb-3"
                    },
                    [
                      _c("h4", { staticClass: "card-title mb-50 mb-sm-0" }, [
                        _vm._v("\n          Revenue Report\n        ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-flex align-items-center" }, [
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center mr-2" },
                          [
                            _c("span", {
                              staticClass:
                                "bullet bullet-primary svg-font-small-3 mr-50 cursor-pointer"
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Earning")])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center ml-75" },
                          [
                            _c("span", {
                              staticClass:
                                "bullet bullet-warning svg-font-small-3 mr-50 cursor-pointer"
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Expense")])
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("vue-apex-charts", {
                    attrs: {
                      id: "revenue-report-chart",
                      type: "bar",
                      height: "230",
                      options: _vm.revenueReport.chartOptions,
                      series: _vm.data.revenueReport.series
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "budget-wrapper", attrs: { md: "4" } },
                [
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "budget-dropdown",
                      attrs: {
                        text: "2020",
                        size: "sm",
                        variant: "outline-primary"
                      }
                    },
                    _vm._l(_vm.data.years, function(year) {
                      return _c("b-dropdown-item", { key: year }, [
                        _vm._v("\n          " + _vm._s(year) + "\n        ")
                      ])
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c("h2", { staticClass: "mb-25" }, [
                    _vm._v("\n        $" + _vm._s(_vm.data.price) + "\n      ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "d-flex justify-content-center" }, [
                    _c("span", { staticClass: "font-weight-bolder mr-25" }, [
                      _vm._v("Budget:")
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("56,800")])
                  ]),
                  _vm._v(" "),
                  _c("vue-apex-charts", {
                    attrs: {
                      id: "budget-chart",
                      type: "line",
                      height: "80",
                      options: _vm.budgetChart.options,
                      series: _vm.data.budgetChart.series
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { "400": true }
                        }
                      ],
                      attrs: { variant: "primary" }
                    },
                    [_vm._v("\n        Increase Budget\n      ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue?vue&type=template&id=42552c9e&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceStatistics.vue?vue&type=template&id=42552c9e& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "card-statistics", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            [
              _c("b-card-title", [_vm._v("Statistics")]),
              _vm._v(" "),
              _c("b-card-text", { staticClass: "font-small-2 mr-25 mb-0" }, [
                _vm._v("\n      Updated 1 month ago\n    ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card-body",
            { staticClass: "statistics-body" },
            [
              _c(
                "b-row",
                _vm._l(_vm.data, function(item) {
                  return _c(
                    "b-col",
                    {
                      key: item.icon,
                      class: item.customClass,
                      attrs: { xl: "3", sm: "6" }
                    },
                    [
                      _c(
                        "b-media",
                        { attrs: { "no-body": "" } },
                        [
                          _c(
                            "b-media-aside",
                            { staticClass: "mr-2" },
                            [
                              _c(
                                "b-avatar",
                                { attrs: { size: "48", variant: item.color } },
                                [
                                  _c("feather-icon", {
                                    attrs: { size: "24", icon: item.icon }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-media-body",
                            { staticClass: "my-auto" },
                            [
                              _c(
                                "h4",
                                { staticClass: "font-weight-bolder mb-0" },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(item.title) +
                                      "\n            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-card-text",
                                { staticClass: "font-small-3 mb-0" },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(item.subtitle) +
                                      "\n            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue?vue&type=template&id=c7e8e1e0&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/dashboard/ecommerce/EcommerceTransactions.vue?vue&type=template&id=c7e8e1e0& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data
    ? _c(
        "b-card",
        { staticClass: "card-transaction", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            [
              _c("b-card-title", [_vm._v("Transactions")]),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  staticClass: "chart-dropdown",
                  attrs: {
                    variant: "link",
                    "no-caret": "",
                    "toggle-class": "p-0",
                    right: ""
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "button-content",
                        fn: function() {
                          return [
                            _c("feather-icon", {
                              staticClass: "text-body cursor-pointer",
                              attrs: { icon: "MoreVerticalIcon", size: "18" }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    false,
                    592634808
                  )
                },
                [
                  _vm._v(" "),
                  _c("b-dropdown-item", { attrs: { href: "#" } }, [
                    _vm._v("\n        Last 28 Days\n      ")
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { attrs: { href: "#" } }, [
                    _vm._v("\n        Last Month\n      ")
                  ]),
                  _vm._v(" "),
                  _c("b-dropdown-item", { attrs: { href: "#" } }, [
                    _vm._v("\n        Last Year\n      ")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card-body",
            _vm._l(_vm.data, function(transaction) {
              return _c(
                "div",
                { key: transaction.mode, staticClass: "transaction-item" },
                [
                  _c(
                    "b-media",
                    { attrs: { "no-body": "" } },
                    [
                      _c(
                        "b-media-aside",
                        [
                          _c(
                            "b-avatar",
                            {
                              attrs: {
                                rounded: "",
                                size: "42",
                                variant: transaction.avatarVariant
                              }
                            },
                            [
                              _c("feather-icon", {
                                attrs: { size: "18", icon: transaction.avatar }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-media-body", [
                        _c("h6", { staticClass: "transaction-title" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(transaction.mode) +
                              "\n          "
                          )
                        ]),
                        _vm._v(" "),
                        _c("small", [_vm._v(_vm._s(transaction.types))])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "font-weight-bolder",
                      class: transaction.deduction
                        ? "text-danger"
                        : "text-success"
                    },
                    [
                      _vm._v(
                        "\n        " + _vm._s(transaction.payment) + "\n      "
                      )
                    ]
                  )
                ],
                1
              )
            }),
            0
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);