(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

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

/***/ "./frontend/src/views/pages/profile/Profile.vue":
/*!******************************************************!*\
  !*** ./frontend/src/views/pages/profile/Profile.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_71410a5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=71410a5d& */ "./frontend/src/views/pages/profile/Profile.vue?vue&type=template&id=71410a5d&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./frontend/src/views/pages/profile/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&lang=scss& */ "./frontend/src/views/pages/profile/Profile.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_71410a5d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_71410a5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/pages/profile/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/pages/profile/Profile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/Profile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/pages/profile/Profile.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/Profile.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/Profile.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/pages/profile/Profile.vue?vue&type=template&id=71410a5d&":
/*!*************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/Profile.vue?vue&type=template&id=71410a5d& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_71410a5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=71410a5d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/Profile.vue?vue&type=template&id=71410a5d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_71410a5d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_71410a5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileAbout.vue":
/*!***********************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileAbout.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileAbout_vue_vue_type_template_id_b333ba40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileAbout.vue?vue&type=template&id=b333ba40& */ "./frontend/src/views/pages/profile/ProfileAbout.vue?vue&type=template&id=b333ba40&");
/* harmony import */ var _ProfileAbout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileAbout.vue?vue&type=script&lang=js& */ "./frontend/src/views/pages/profile/ProfileAbout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileAbout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileAbout_vue_vue_type_template_id_b333ba40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileAbout_vue_vue_type_template_id_b333ba40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/pages/profile/ProfileAbout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileAbout.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileAbout.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileAbout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileAbout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileAbout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileAbout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileAbout.vue?vue&type=template&id=b333ba40&":
/*!******************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileAbout.vue?vue&type=template&id=b333ba40& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileAbout_vue_vue_type_template_id_b333ba40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileAbout.vue?vue&type=template&id=b333ba40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileAbout.vue?vue&type=template&id=b333ba40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileAbout_vue_vue_type_template_id_b333ba40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileAbout_vue_vue_type_template_id_b333ba40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileHeader.vue":
/*!************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileHeader.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileHeader_vue_vue_type_template_id_499812ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileHeader.vue?vue&type=template&id=499812ca& */ "./frontend/src/views/pages/profile/ProfileHeader.vue?vue&type=template&id=499812ca&");
/* harmony import */ var _ProfileHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileHeader.vue?vue&type=script&lang=js& */ "./frontend/src/views/pages/profile/ProfileHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileHeader_vue_vue_type_template_id_499812ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileHeader_vue_vue_type_template_id_499812ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/pages/profile/ProfileHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileHeader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileHeader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileHeader.vue?vue&type=template&id=499812ca&":
/*!*******************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileHeader.vue?vue&type=template&id=499812ca& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileHeader_vue_vue_type_template_id_499812ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileHeader.vue?vue&type=template&id=499812ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileHeader.vue?vue&type=template&id=499812ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileHeader_vue_vue_type_template_id_499812ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileHeader_vue_vue_type_template_id_499812ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileLatestPhotos.vue":
/*!******************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileLatestPhotos.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileLatestPhotos_vue_vue_type_template_id_6061c436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileLatestPhotos.vue?vue&type=template&id=6061c436& */ "./frontend/src/views/pages/profile/ProfileLatestPhotos.vue?vue&type=template&id=6061c436&");
/* harmony import */ var _ProfileLatestPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileLatestPhotos.vue?vue&type=script&lang=js& */ "./frontend/src/views/pages/profile/ProfileLatestPhotos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileLatestPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileLatestPhotos_vue_vue_type_template_id_6061c436___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileLatestPhotos_vue_vue_type_template_id_6061c436___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/pages/profile/ProfileLatestPhotos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileLatestPhotos.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileLatestPhotos.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileLatestPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileLatestPhotos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileLatestPhotos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileLatestPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileLatestPhotos.vue?vue&type=template&id=6061c436&":
/*!*************************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileLatestPhotos.vue?vue&type=template&id=6061c436& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileLatestPhotos_vue_vue_type_template_id_6061c436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileLatestPhotos.vue?vue&type=template&id=6061c436& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileLatestPhotos.vue?vue&type=template&id=6061c436&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileLatestPhotos_vue_vue_type_template_id_6061c436___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileLatestPhotos_vue_vue_type_template_id_6061c436___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfilePolls.vue":
/*!***********************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfilePolls.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfilePolls_vue_vue_type_template_id_2288f732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfilePolls.vue?vue&type=template&id=2288f732& */ "./frontend/src/views/pages/profile/ProfilePolls.vue?vue&type=template&id=2288f732&");
/* harmony import */ var _ProfilePolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePolls.vue?vue&type=script&lang=js& */ "./frontend/src/views/pages/profile/ProfilePolls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfilePolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfilePolls_vue_vue_type_template_id_2288f732___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfilePolls_vue_vue_type_template_id_2288f732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/pages/profile/ProfilePolls.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfilePolls.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfilePolls.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfilePolls.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfilePolls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePolls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfilePolls.vue?vue&type=template&id=2288f732&":
/*!******************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfilePolls.vue?vue&type=template&id=2288f732& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePolls_vue_vue_type_template_id_2288f732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfilePolls.vue?vue&type=template&id=2288f732& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfilePolls.vue?vue&type=template&id=2288f732&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePolls_vue_vue_type_template_id_2288f732___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePolls_vue_vue_type_template_id_2288f732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfilePost.vue":
/*!**********************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfilePost.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfilePost_vue_vue_type_template_id_5c3166c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfilePost.vue?vue&type=template&id=5c3166c6& */ "./frontend/src/views/pages/profile/ProfilePost.vue?vue&type=template&id=5c3166c6&");
/* harmony import */ var _ProfilePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePost.vue?vue&type=script&lang=js& */ "./frontend/src/views/pages/profile/ProfilePost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfilePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfilePost_vue_vue_type_template_id_5c3166c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfilePost_vue_vue_type_template_id_5c3166c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/pages/profile/ProfilePost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfilePost.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfilePost.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfilePost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfilePost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfilePost.vue?vue&type=template&id=5c3166c6&":
/*!*****************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfilePost.vue?vue&type=template&id=5c3166c6& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePost_vue_vue_type_template_id_5c3166c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfilePost.vue?vue&type=template&id=5c3166c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfilePost.vue?vue&type=template&id=5c3166c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePost_vue_vue_type_template_id_5c3166c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePost_vue_vue_type_template_id_5c3166c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileSuggestedPages.vue":
/*!********************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileSuggestedPages.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileSuggestedPages_vue_vue_type_template_id_2331f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileSuggestedPages.vue?vue&type=template&id=2331f8c4& */ "./frontend/src/views/pages/profile/ProfileSuggestedPages.vue?vue&type=template&id=2331f8c4&");
/* harmony import */ var _ProfileSuggestedPages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileSuggestedPages.vue?vue&type=script&lang=js& */ "./frontend/src/views/pages/profile/ProfileSuggestedPages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileSuggestedPages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileSuggestedPages_vue_vue_type_template_id_2331f8c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileSuggestedPages_vue_vue_type_template_id_2331f8c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/pages/profile/ProfileSuggestedPages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileSuggestedPages.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileSuggestedPages.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSuggestedPages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileSuggestedPages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileSuggestedPages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSuggestedPages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileSuggestedPages.vue?vue&type=template&id=2331f8c4&":
/*!***************************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileSuggestedPages.vue?vue&type=template&id=2331f8c4& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSuggestedPages_vue_vue_type_template_id_2331f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileSuggestedPages.vue?vue&type=template&id=2331f8c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileSuggestedPages.vue?vue&type=template&id=2331f8c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSuggestedPages_vue_vue_type_template_id_2331f8c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSuggestedPages_vue_vue_type_template_id_2331f8c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileSuggestion.vue":
/*!****************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileSuggestion.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileSuggestion_vue_vue_type_template_id_db28677e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileSuggestion.vue?vue&type=template&id=db28677e& */ "./frontend/src/views/pages/profile/ProfileSuggestion.vue?vue&type=template&id=db28677e&");
/* harmony import */ var _ProfileSuggestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileSuggestion.vue?vue&type=script&lang=js& */ "./frontend/src/views/pages/profile/ProfileSuggestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileSuggestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileSuggestion_vue_vue_type_template_id_db28677e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileSuggestion_vue_vue_type_template_id_db28677e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/pages/profile/ProfileSuggestion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileSuggestion.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileSuggestion.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSuggestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileSuggestion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileSuggestion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSuggestion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileSuggestion.vue?vue&type=template&id=db28677e&":
/*!***********************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileSuggestion.vue?vue&type=template&id=db28677e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSuggestion_vue_vue_type_template_id_db28677e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileSuggestion.vue?vue&type=template&id=db28677e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileSuggestion.vue?vue&type=template&id=db28677e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSuggestion_vue_vue_type_template_id_db28677e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSuggestion_vue_vue_type_template_id_db28677e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileTwitterFeed.vue":
/*!*****************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileTwitterFeed.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileTwitterFeed_vue_vue_type_template_id_05827078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileTwitterFeed.vue?vue&type=template&id=05827078& */ "./frontend/src/views/pages/profile/ProfileTwitterFeed.vue?vue&type=template&id=05827078&");
/* harmony import */ var _ProfileTwitterFeed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileTwitterFeed.vue?vue&type=script&lang=js& */ "./frontend/src/views/pages/profile/ProfileTwitterFeed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileTwitterFeed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileTwitterFeed_vue_vue_type_template_id_05827078___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileTwitterFeed_vue_vue_type_template_id_05827078___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/pages/profile/ProfileTwitterFeed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileTwitterFeed.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileTwitterFeed.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileTwitterFeed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileTwitterFeed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileTwitterFeed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileTwitterFeed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/pages/profile/ProfileTwitterFeed.vue?vue&type=template&id=05827078&":
/*!************************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/ProfileTwitterFeed.vue?vue&type=template&id=05827078& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileTwitterFeed_vue_vue_type_template_id_05827078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileTwitterFeed.vue?vue&type=template&id=05827078& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileTwitterFeed.vue?vue&type=template&id=05827078&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileTwitterFeed_vue_vue_type_template_id_05827078___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileTwitterFeed_vue_vue_type_template_id_05827078___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/pages/profile/profileBottom.vue":
/*!************************************************************!*\
  !*** ./frontend/src/views/pages/profile/profileBottom.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profileBottom_vue_vue_type_template_id_f6a8e8f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileBottom.vue?vue&type=template&id=f6a8e8f0& */ "./frontend/src/views/pages/profile/profileBottom.vue?vue&type=template&id=f6a8e8f0&");
/* harmony import */ var _profileBottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profileBottom.vue?vue&type=script&lang=js& */ "./frontend/src/views/pages/profile/profileBottom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profileBottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profileBottom_vue_vue_type_template_id_f6a8e8f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profileBottom_vue_vue_type_template_id_f6a8e8f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/pages/profile/profileBottom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/pages/profile/profileBottom.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/profileBottom.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileBottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profileBottom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/profileBottom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileBottom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/pages/profile/profileBottom.vue?vue&type=template&id=f6a8e8f0&":
/*!*******************************************************************************************!*\
  !*** ./frontend/src/views/pages/profile/profileBottom.vue?vue&type=template&id=f6a8e8f0& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileBottom_vue_vue_type_template_id_f6a8e8f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profileBottom.vue?vue&type=template&id=f6a8e8f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/profileBottom.vue?vue&type=template&id=f6a8e8f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileBottom_vue_vue_type_template_id_f6a8e8f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileBottom_vue_vue_type_template_id_f6a8e8f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/Profile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/Profile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _ProfileHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileHeader.vue */ "./frontend/src/views/pages/profile/ProfileHeader.vue");
/* harmony import */ var _ProfileAbout_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileAbout.vue */ "./frontend/src/views/pages/profile/ProfileAbout.vue");
/* harmony import */ var _ProfileSuggestedPages_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileSuggestedPages.vue */ "./frontend/src/views/pages/profile/ProfileSuggestedPages.vue");
/* harmony import */ var _ProfileTwitterFeed_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileTwitterFeed.vue */ "./frontend/src/views/pages/profile/ProfileTwitterFeed.vue");
/* harmony import */ var _ProfilePost_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfilePost.vue */ "./frontend/src/views/pages/profile/ProfilePost.vue");
/* harmony import */ var _ProfileLatestPhotos_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProfileLatestPhotos.vue */ "./frontend/src/views/pages/profile/ProfileLatestPhotos.vue");
/* harmony import */ var _ProfileSuggestion_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProfileSuggestion.vue */ "./frontend/src/views/pages/profile/ProfileSuggestion.vue");
/* harmony import */ var _ProfilePolls_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProfilePolls.vue */ "./frontend/src/views/pages/profile/ProfilePolls.vue");
/* harmony import */ var _profileBottom_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profileBottom.vue */ "./frontend/src/views/pages/profile/profileBottom.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    ProfileHeader: _ProfileHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProfileAbout: _ProfileAbout_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ProfileSuggestedPages: _ProfileSuggestedPages_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ProfileTwitterFeed: _ProfileTwitterFeed_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ProfilePost: _ProfilePost_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    ProfileLatestPhotos: _ProfileLatestPhotos_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    ProfileSuggestion: _ProfileSuggestion_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    ProfilePolls: _ProfilePolls_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    profileBottom: _profileBottom_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      profileData: {}
    };
  },
  created: function created() {
    var _this = this;

    this.$http.get('/profile/data').then(function (res) {
      _this.profileData = res.data;
    });
  }
});
/* eslint-disable global-require */

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileAbout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfileAbout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  props: {
    aboutData: {
      type: Object,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileHeader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfileHeader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTabs"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItem"],
    BNavbar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavbar"],
    BNavbarToggle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavbarToggle"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCollapse"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    headerData: {
      type: Object,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileLatestPhotos.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfileLatestPhotos.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"]
  },
  props: {
    latestImages: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfilePolls.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfilePolls.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"],
    BProgress: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BProgress"],
    BAvatarGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatarGroup"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"]
  },
  directives: {
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBTooltip"]
  },
  props: {
    pollsData: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      Selected: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfilePost.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfilePost.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BAvatarGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatarGroup"],
    BEmbed: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BEmbed"]
  },
  directives: {
    'b-tooltip': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBTooltip"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    posts: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  methods: {
    kFormatter: _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__["kFormatter"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileSuggestedPages.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfileSuggestedPages.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"]
  },
  props: {
    pagesData: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileSuggestion.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfileSuggestion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    suggestions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileTwitterFeed.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfileTwitterFeed.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  props: {
    twitterFeed: {
      type: Array,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/profileBottom.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/profileBottom.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BOverlay: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BOverlay"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    onClick: function onClick() {
      var _this = this;

      this.show = true; // Simulate an async request

      setTimeout(function () {
        _this.show = false;
      }, 5000);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/Profile.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/Profile.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#user-profile {\n  /*-------------profile header section---------*/\n  /*-------- profile info section --------*/\n}\n#user-profile .profile-header {\n  overflow: hidden;\n}\n#user-profile .profile-header .profile-img-container {\n  position: absolute;\n  bottom: -2rem;\n  z-index: 2;\n}\n[dir=ltr] #user-profile .profile-header .profile-img-container {\n  left: 2.14rem;\n}\n[dir=rtl] #user-profile .profile-header .profile-img-container {\n  right: 2.14rem;\n}\n#user-profile .profile-header .profile-img-container .profile-img {\n  height: 8.92rem;\n  width: 8.92rem;\n  -webkit-box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] #user-profile .profile-header .profile-img-container .profile-img {\n  border: 0.357rem solid #fff;\n  background-color: #fff;\n  border-radius: 0.428rem;\n          -webkit-box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n                  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] #user-profile .profile-header .profile-header-nav .navbar {\n  padding: 0.8rem 1rem;\n}\n#user-profile .profile-header .profile-header-nav .navbar .navbar-toggler {\n  line-height: 0;\n}\n[dir=ltr] #user-profile .profile-header .profile-header-nav .navbar .profile-tabs .nav-item i, [dir=ltr] #user-profile .profile-header .profile-header-nav .navbar .profile-tabs .nav-item svg {\n  margin-right: 0;\n}\n[dir=rtl] #user-profile .profile-header .profile-header-nav .navbar .profile-tabs .nav-item i, [dir=rtl] #user-profile .profile-header .profile-header-nav .navbar .profile-tabs .nav-item svg {\n  margin-left: 0;\n}\n#user-profile #profile-info .profile-star {\n  color: #babfc7;\n}\n#user-profile #profile-info .profile-star i.profile-favorite,\n#user-profile #profile-info .profile-star svg.profile-favorite {\n  fill: #ff9f43;\n  stroke: #ff9f43;\n}\n#user-profile #profile-info .profile-likes {\n  fill: #ea5455;\n  stroke: #ea5455;\n}\n#user-profile #profile-info .profile-polls-info .progress {\n  height: 0.42rem;\n}\n#user-profile .profile-latest-img {\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n[dir] #user-profile .profile-latest-img {\n  -webkit-transition: all 0.2s ease-in-out;\n}\n#user-profile .profile-latest-img:hover {\n  -webkit-transform: translateY(-4px) scale(1.2);\n  z-index: 10;\n}\n[dir] #user-profile .profile-latest-img:hover {\n          -webkit-transform: translateY(-4px) scale(1.2);\n                  transform: translateY(-4px) scale(1.2);\n}\n[dir] #user-profile .profile-latest-img img {\n  margin-top: 1.28rem;\n}\n[dir] #user-profile .block-element .spinner-border {\n  border-width: 0.14rem;\n}\n@media (max-width: 991.98px) {\n#user-profile .profile-latest-img img {\n    width: 100%;\n}\n}\n@media (min-width: 768px) {\n.profile-header-nav .profile-tabs {\n    width: 100%;\n}\n[dir=ltr] .profile-header-nav .profile-tabs {\n    margin-left: 13.2rem;\n}\n[dir=rtl] .profile-header-nav .profile-tabs {\n    margin-right: 13.2rem;\n}\n}\n@media (max-width: 575.98px) {\n#user-profile .profile-header .profile-img-container .profile-img {\n    height: 100px;\n    width: 100px;\n}\n#user-profile .profile-header .profile-img-container .profile-title h2 {\n    font-size: 1.5rem;\n}\n}\n[dir] #user-profile .profile-header .profile-header-nav .navbar .navbar-toggler {\n  border: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/Profile.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/Profile.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/Profile.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/Profile.vue?vue&type=template&id=71410a5d&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/Profile.vue?vue&type=template&id=71410a5d& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return Object.keys(_vm.profileData).length
    ? _c(
        "div",
        { attrs: { id: "user-profile" } },
        [
          _c("profile-header", {
            attrs: { "header-data": _vm.profileData.header }
          }),
          _vm._v(" "),
          _c(
            "section",
            { attrs: { id: "profile-info" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      attrs: {
                        lg: "3",
                        cols: "12",
                        order: "2",
                        "order-lg": "1"
                      }
                    },
                    [
                      _c("profile-about", {
                        attrs: { "about-data": _vm.profileData.userAbout }
                      }),
                      _vm._v(" "),
                      _c("profile-suggested-pages", {
                        attrs: { "pages-data": _vm.profileData.suggestedPages }
                      }),
                      _vm._v(" "),
                      _c("profile-twitter-feed", {
                        attrs: { "twitter-feed": _vm.profileData.twitterFeeds }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      attrs: {
                        lg: "6",
                        cols: "12",
                        order: "1",
                        "order-lg": "2"
                      }
                    },
                    [
                      _c("profile-post", {
                        attrs: { posts: _vm.profileData.post }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "3", cols: "12", order: "3" } },
                    [
                      _c("profile-latest-photos", {
                        attrs: { "latest-images": _vm.profileData.latestPhotos }
                      }),
                      _vm._v(" "),
                      _c("profile-suggestion", {
                        attrs: { suggestions: _vm.profileData.suggestions }
                      }),
                      _vm._v(" "),
                      _c("profile-polls", {
                        attrs: { "polls-data": _vm.profileData.polls }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "12", order: "4" } },
                    [_c("profile-bottom")],
                    1
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileAbout.vue?vue&type=template&id=b333ba40&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfileAbout.vue?vue&type=template&id=b333ba40& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    _vm._l(_vm.aboutData, function(data, key, index) {
      return _c(
        "div",
        { key: data.title, class: index ? "mt-2" : "" },
        [
          _c("h5", { staticClass: "text-capitalize mb-75" }, [
            _vm._v("\n      " + _vm._s(key) + "\n    ")
          ]),
          _vm._v(" "),
          _c("b-card-text", [_vm._v("\n      " + _vm._s(data) + "\n    ")])
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileHeader.vue?vue&type=template&id=499812ca&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfileHeader.vue?vue&type=template&id=499812ca& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "profile-header mb-2",
      attrs: {
        "img-src": _vm.headerData.coverImg,
        "img-top": "",
        alt: "cover photo",
        "body-class": "p-0"
      }
    },
    [
      _c("div", { staticClass: "position-relative" }, [
        _c(
          "div",
          { staticClass: "profile-img-container d-flex align-items-center" },
          [
            _c(
              "div",
              { staticClass: "profile-img" },
              [
                _c("b-img", {
                  attrs: {
                    src: _vm.headerData.avatar,
                    rounded: "",
                    fluid: "",
                    alt: "profile photo"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "profile-title ml-3" }, [
              _c("h2", { staticClass: "text-white" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.headerData.username) +
                    "\n        "
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-white" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.headerData.designation) +
                    "\n        "
                )
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "profile-header-nav" },
        [
          _c(
            "b-navbar",
            { attrs: { toggleable: "md", type: "light" } },
            [
              _c(
                "b-navbar-toggle",
                {
                  staticClass: "ml-auto",
                  attrs: { target: "nav-text-collapse" }
                },
                [
                  _c("feather-icon", {
                    attrs: { icon: "AlignJustifyIcon", size: "21" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-collapse",
                { attrs: { id: "nav-text-collapse", "is-nav": "" } },
                [
                  _c("b-tabs", {
                    staticClass: "profile-tabs mt-1 mt-md-0",
                    attrs: { pills: "", "nav-class": "mb-0" },
                    scopedSlots: _vm._u([
                      {
                        key: "tabs-start",
                        fn: function() {
                          return [
                            _c(
                              "b-nav-item",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { role: "presentation", active: "" }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "d-none d-md-block" },
                                  [_vm._v("Feed")]
                                ),
                                _vm._v(" "),
                                _c("feather-icon", {
                                  staticClass: "d-block d-md-none",
                                  attrs: { icon: "RssIcon" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-nav-item",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { role: "presentation" }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "d-none d-md-block" },
                                  [_vm._v("About")]
                                ),
                                _vm._v(" "),
                                _c("feather-icon", {
                                  staticClass: "d-block d-md-none",
                                  attrs: { icon: "InfoIcon" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-nav-item",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { role: "presentation" }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "d-none d-md-block" },
                                  [_vm._v("Photos")]
                                ),
                                _vm._v(" "),
                                _c("feather-icon", {
                                  staticClass: "d-block d-md-none",
                                  attrs: { icon: "ImageIcon" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-nav-item",
                              {
                                staticClass: "font-weight-bold",
                                attrs: { role: "presentation" }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "d-none d-md-block" },
                                  [_vm._v("Friends")]
                                ),
                                _vm._v(" "),
                                _c("feather-icon", {
                                  staticClass: "d-block d-md-none",
                                  attrs: { icon: "UsersIcon" }
                                })
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "tabs-end",
                        fn: function() {
                          return [
                            _c(
                              "b-button",
                              {
                                staticClass: "ml-auto",
                                attrs: { variant: "primary" }
                              },
                              [
                                _c("feather-icon", {
                                  staticClass: "d-block d-md-none",
                                  attrs: { icon: "EditIcon" }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "font-weight-bold d-none d-md-block"
                                  },
                                  [_vm._v("Edit")]
                                )
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
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
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileLatestPhotos.vue?vue&type=template&id=6061c436&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfileLatestPhotos.vue?vue&type=template&id=6061c436& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    [
      _c("h5", { staticClass: "mb-0" }, [_vm._v("\n    Latest Photos\n  ")]),
      _vm._v(" "),
      _c(
        "b-row",
        _vm._l(_vm.latestImages, function(data) {
          return _c(
            "b-col",
            {
              key: data.img,
              staticClass: "profile-latest-img",
              attrs: { md: "4", cols: "6" }
            },
            [
              _c(
                "b-link",
                [
                  _c("b-img", {
                    attrs: {
                      fluid: "",
                      rounded: "",
                      src: data.img,
                      alt: data.img.slice(5)
                    }
                  })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfilePolls.vue?vue&type=template&id=2288f732&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfilePolls.vue?vue&type=template&id=2288f732& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    [
      _c("h5", { staticClass: "mb-1" }, [_vm._v("\n    Polls\n  ")]),
      _vm._v(" "),
      _c("b-card-text", [
        _vm._v("Who is the best actor in Marvel Cinematic Universe?")
      ]),
      _vm._v(" "),
      _vm._l(_vm.pollsData, function(data) {
        return _c(
          "div",
          { key: data.name, staticClass: "polls-info mt-2" },
          [
            _c(
              "div",
              { staticClass: "d-flex justify-content-between" },
              [
                _c(
                  "b-form-radio",
                  {
                    staticClass: "mb-25",
                    attrs: { name: "polls", value: data.username },
                    model: {
                      value: _vm.Selected,
                      callback: function($$v) {
                        _vm.Selected = $$v
                      },
                      expression: "Selected"
                    }
                  },
                  [_vm._v("\n        " + _vm._s(data.name) + "\n      ")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _vm._v("\n        " + _vm._s(data.result) + "\n      ")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("b-progress", {
              staticClass: "my-50",
              attrs: { value: data.result, max: "100", height: "6px" }
            }),
            _vm._v(" "),
            _c(
              "b-avatar-group",
              { staticClass: "mt-1", attrs: { size: "26" } },
              _vm._l(data.votedUser, function(avatar) {
                return _c("b-avatar", {
                  directives: [
                    {
                      name: "b-tooltip",
                      rawName: "v-b-tooltip.hover.bottom",
                      value: avatar.username,
                      expression: "avatar.username",
                      modifiers: { hover: true, bottom: true }
                    }
                  ],
                  key: avatar.img,
                  staticClass: "pull-up",
                  attrs: { src: avatar.img }
                })
              }),
              1
            )
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfilePost.vue?vue&type=template&id=5c3166c6&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfilePost.vue?vue&type=template&id=5c3166c6& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "div",
    _vm._l(_vm.posts, function(data) {
      return _c(
        "b-card",
        { key: data.avatar },
        [
          _c(
            "div",
            {
              staticClass:
                "d-flex justify-content-start align-items-center mb-1"
            },
            [
              _c("b-avatar", {
                staticClass: "mr-1",
                attrs: { src: data.avatar, size: "50" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "profile-user-info" }, [
                _c("h6", { staticClass: "mb-0" }, [
                  _vm._v("\n          " + _vm._s(data.username) + "\n        ")
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v(_vm._s(data.postTime))
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("b-card-text", [
            _vm._v("\n      " + _vm._s(data.postText) + "\n    ")
          ]),
          _vm._v(" "),
          data.postImg
            ? _c("b-img", {
                staticClass: "mb-25",
                attrs: { fluid: "", rounded: "", src: data.postImg }
              })
            : _vm._e(),
          _vm._v(" "),
          data.postVid
            ? _c("b-embed", {
                staticClass: "rounded mb-50",
                attrs: {
                  type: "iframe",
                  src: data.postVid,
                  allowfullscreen: ""
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "pb-50 mt-50" },
            [
              _c(
                "b-col",
                {
                  staticClass:
                    "d-flex justify-content-between justify-content-sm-start mb-2",
                  attrs: { sm: "8" }
                },
                [
                  _c(
                    "b-link",
                    {
                      staticClass:
                        "d-flex align-items-center text-muted text-nowrap"
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-50",
                        class: data.youLiked ? "profile-likes" : "profile-icon",
                        attrs: { icon: "HeartIcon", size: "18" }
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.kFormatter(data.likes)))])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex align-item-center" },
                    [
                      _c(
                        "b-avatar-group",
                        { staticClass: "ml-1", attrs: { size: "26" } },
                        _vm._l(data.likedUsers, function(avatarData, i) {
                          return _c("b-avatar", {
                            directives: [
                              {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover.bottom",
                                value: avatarData.username,
                                expression: "avatarData.username",
                                modifiers: { hover: true, bottom: true }
                              }
                            ],
                            key: i,
                            staticClass: "pull-up",
                            attrs: { src: avatarData.avatar }
                          })
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-link",
                        { staticClass: "text-muted text-nowrap mt-50 ml-50" },
                        [
                          _vm._v(
                            "\n            +" +
                              _vm._s(data.likedCount) +
                              " more\n          "
                          )
                        ]
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
                {
                  staticClass:
                    "d-flex justify-content-between justify-content-sm-end align-items-center mb-2",
                  attrs: { sm: "4" }
                },
                [
                  _c(
                    "b-link",
                    { staticClass: "text-body text-nowrap" },
                    [
                      _c("feather-icon", {
                        staticClass: "profile-icon mr-50",
                        attrs: { icon: "MessageSquareIcon", size: "18" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted mr-1" }, [
                        _vm._v(_vm._s(_vm.kFormatter(data.comments)))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-link",
                    { staticClass: "text-body text-nowrap" },
                    [
                      _c("feather-icon", {
                        staticClass: "profile-icon mr-50",
                        attrs: { icon: "Share2Icon", size: "18" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v(_vm._s(_vm.kFormatter(data.share)))
                      ])
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
          _vm._l(data.detailedComments, function(comment, ind) {
            return _c(
              "div",
              { key: ind, staticClass: "d-flex align-items-start mb-1" },
              [
                _c("b-avatar", {
                  staticClass: "mt-25 mr-75",
                  attrs: { src: comment.avatar, size: "34" }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "profile-user-info w-100" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-between"
                    },
                    [
                      _c("h6", { staticClass: "mb-0" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(comment.username) +
                            "\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-link",
                        { staticClass: "text-body" },
                        [
                          _c("feather-icon", {
                            staticClass: "mr-25",
                            class: comment.youLiked
                              ? "profile-likes"
                              : "profile-icon",
                            attrs: { icon: "HeartIcon", size: "18" }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "text-muted align-middle" },
                            [_vm._v(_vm._s(comment.commentsLikes))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("small", [_vm._v(_vm._s(comment.comment))])
                ])
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "b-form-group",
            [
              _c("b-form-textarea", {
                attrs: { rows: "3", placeholder: "Add Comment" }
              })
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
              attrs: { size: "sm", variant: "primary" }
            },
            [_vm._v("\n      Post Comment\n    ")]
          )
        ],
        2
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileSuggestedPages.vue?vue&type=template&id=2331f8c4&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfileSuggestedPages.vue?vue&type=template&id=2331f8c4& ***!
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
  return _c(
    "b-card",
    [
      _c("h5", { staticClass: "mb-2" }, [_vm._v("\n    Suggested Pages\n  ")]),
      _vm._v(" "),
      _vm._l(_vm.pagesData, function(data, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "d-flex justify-content-start align-items-center mt-1"
          },
          [
            _c(
              "div",
              { staticClass: "mr-1" },
              [_c("b-avatar", { attrs: { size: "40", src: data.avatar } })],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "profile-user-info" }, [
              _c("h6", { staticClass: "mb-0" }, [
                _vm._v("\n        " + _vm._s(data.username) + "\n      ")
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(_vm._s(data.subtitle))
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "profile-star ml-auto" },
              [
                _c("feather-icon", {
                  class: data.favorite ? "profile-favorite" : "",
                  attrs: { icon: "StarIcon", size: "18" }
                })
              ],
              1
            )
          ]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileSuggestion.vue?vue&type=template&id=db28677e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfileSuggestion.vue?vue&type=template&id=db28677e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    [
      _c("h5", [_vm._v("Suggestions")]),
      _vm._v(" "),
      _vm._l(_vm.suggestions, function(data, index) {
        return _c(
          "div",
          {
            key: data.avatar,
            staticClass: "d-flex justify-content-start align-items-center",
            class: index == 0 ? "mt-2" : "mt-1"
          },
          [
            _c("b-avatar", {
              staticClass: "mr-50",
              attrs: { src: data.avatar, size: "40" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "user-page-info" }, [
              _c("h6", { staticClass: "mb-0" }, [
                _vm._v("\n        " + _vm._s(data.name) + "\n      ")
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "text-muted" }, [
                _vm._v(_vm._s(data.mutualFriend))
              ])
            ]),
            _vm._v(" "),
            _c(
              "b-button",
              {
                directives: [
                  {
                    name: "ripple",
                    rawName: "v-ripple.400",
                    value: "rgba(186, 191, 199, 0.15)",
                    expression: "'rgba(186, 191, 199, 0.15)'",
                    modifiers: { "400": true }
                  }
                ],
                staticClass: "btn-icon ml-auto",
                attrs: { variant: "primary", size: "sm" }
              },
              [_c("feather-icon", { attrs: { icon: "UserPlusIcon" } })],
              1
            )
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/ProfileTwitterFeed.vue?vue&type=template&id=05827078&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/ProfileTwitterFeed.vue?vue&type=template&id=05827078& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    [
      _c("h5", [_vm._v("Twitter Feeds")]),
      _vm._v(" "),
      _vm._l(_vm.twitterFeed, function(data, index) {
        return _c(
          "div",
          {
            key: data.avatar,
            staticClass: "profile-twitter-feed",
            class: index != 0 ? "mt-2" : "mt-1"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "d-flex justify-content-start align-items-center mb-1"
              },
              [
                _c("b-avatar", {
                  staticClass: "mr-1",
                  attrs: { size: "40", src: data.imgUrl }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "profile-user-info" },
                  [
                    _c("h6", { staticClass: "mb-0" }, [
                      _vm._v("\n          " + _vm._s(data.title) + "\n        ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-link",
                      [
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v("@" + _vm._s(data.id))
                        ]),
                        _vm._v(" "),
                        _c("feather-icon", {
                          attrs: { icon: "CheckCircleIcon" }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "profile-star ml-auto" },
                  [
                    _c("feather-icon", {
                      class: data.favorite ? "profile-favorite" : "",
                      attrs: { icon: "StarIcon", size: "18" }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("b-card-text", { staticClass: "mb-50" }, [
              _vm._v("\n      " + _vm._s(data.desc) + "\n    ")
            ]),
            _vm._v(" "),
            _c("b-link", [
              _c("small", [
                _vm._v("\n        " + _vm._s(data.tags) + "\n      ")
              ])
            ])
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/pages/profile/profileBottom.vue?vue&type=template&id=f6a8e8f0&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/pages/profile/profileBottom.vue?vue&type=template&id=f6a8e8f0& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "text-center mb-2" },
    [
      _c(
        "b-overlay",
        {
          staticClass: "d-inline-block",
          attrs: {
            show: _vm.show,
            rounded: "sm",
            "spinner-variant": "primary",
            "spinner-small": ""
          }
        },
        [
          _c(
            "b-button",
            {
              directives: [
                {
                  name: "ripple",
                  rawName: "v-ripple.400",
                  value: "rgba(186, 191, 199, 0.15)",
                  expression: "'rgba(186, 191, 199, 0.15)'",
                  modifiers: { "400": true }
                }
              ],
              attrs: { variant: "primary", size: "sm" },
              on: { click: _vm.onClick }
            },
            [_vm._v("\n      Load More\n    ")]
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



/***/ })

}]);