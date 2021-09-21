(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ "./frontend/src/@core/comp-functions/ui/app.js":
/*!*****************************************************!*\
  !*** ./frontend/src/@core/comp-functions/ui/app.js ***!
  \*****************************************************/
/*! exports provided: useResponsiveAppLeftSidebarVisibility, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResponsiveAppLeftSidebarVisibility", function() { return useResponsiveAppLeftSidebarVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");


var useResponsiveAppLeftSidebarVisibility = function useResponsiveAppLeftSidebarVisibility() {
  var mqShallShowLeftSidebar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false); // Close Active Sidebars and other stuff when going in large device

  var currentBreakPoint = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['app/currentBreakPoint'];
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(currentBreakPoint, function (val, oldVal) {
    // Reset chats & contacts left sidebar
    if (oldVal === 'md' && val === 'lg') mqShallShowLeftSidebar.value = false;
  });
  return {
    mqShallShowLeftSidebar: mqShallShowLeftSidebar
  };
};
var _ = {};

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

/***/ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue":
/*!******************************************************************************!*\
  !*** ./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ECommerceShop_vue_vue_type_template_id_4ce46a7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECommerceShop.vue?vue&type=template&id=4ce46a7d&scoped=true& */ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=template&id=4ce46a7d&scoped=true&");
/* harmony import */ var _ECommerceShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECommerceShop.vue?vue&type=script&lang=js& */ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ECommerceShop.vue?vue&type=style&index=0&lang=scss& */ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _ECommerceShop_vue_vue_type_style_index_1_id_4ce46a7d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ECommerceShop.vue?vue&type=style&index=1&id=4ce46a7d&lang=scss&scoped=true& */ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=4ce46a7d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ECommerceShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ECommerceShop_vue_vue_type_template_id_4ce46a7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ECommerceShop_vue_vue_type_template_id_4ce46a7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4ce46a7d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=4ce46a7d&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************!*\
  !*** ./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=4ce46a7d&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_1_id_4ce46a7d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=style&index=1&id=4ce46a7d&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=4ce46a7d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_1_id_4ce46a7d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_1_id_4ce46a7d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_1_id_4ce46a7d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_style_index_1_id_4ce46a7d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=template&id=4ce46a7d&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=template&id=4ce46a7d&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_template_id_4ce46a7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=template&id=4ce46a7d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=template&id=4ce46a7d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_template_id_4ce46a7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShop_vue_vue_type_template_id_4ce46a7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue":
/*!***********************************************************************************************!*\
  !*** ./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ECommerceShopLeftFilterSidebar_vue_vue_type_template_id_3037beb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=3037beb0&scoped=true& */ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=3037beb0&scoped=true&");
/* harmony import */ var _ECommerceShopLeftFilterSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js& */ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss& */ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_1_id_3037beb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=3037beb0&lang=scss&scoped=true& */ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=3037beb0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ECommerceShopLeftFilterSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ECommerceShopLeftFilterSidebar_vue_vue_type_template_id_3037beb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ECommerceShopLeftFilterSidebar_vue_vue_type_template_id_3037beb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3037beb0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************!*\
  !*** ./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=3037beb0&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=3037beb0&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_1_id_3037beb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=3037beb0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=3037beb0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_1_id_3037beb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_1_id_3037beb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_1_id_3037beb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_style_index_1_id_3037beb0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=3037beb0&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=3037beb0&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_template_id_3037beb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=3037beb0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=3037beb0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_template_id_3037beb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceShopLeftFilterSidebar_vue_vue_type_template_id_3037beb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/apps/e-commerce/e-commerce-shop/useECommerceShop.js":
/*!********************************************************************************!*\
  !*** ./frontend/src/views/apps/e-commerce/e-commerce-shop/useECommerceShop.js ***!
  \********************************************************************************/
/*! exports provided: useShopFiltersSortingAndPagination, useShopUi, useShopRemoteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShopFiltersSortingAndPagination", function() { return useShopFiltersSortingAndPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShopUi", function() { return useShopUi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShopRemoteData", function() { return useShopRemoteData; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");


var useShopFiltersSortingAndPagination = function useShopFiltersSortingAndPagination() {
  var filters = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
    q: '',
    priceRangeDefined: 'all',
    priceRange: [0, 100],
    categories: [],
    brands: [],
    ratings: null,
    page: 1,
    perPage: 9
  });
  var filterOptions = {
    priceRangeDefined: [{
      text: 'All',
      value: 'all'
    }, {
      text: '<= $10',
      value: '<=10'
    }, {
      text: '$10 - $100',
      value: '10-100'
    }, {
      text: '$100 - $500',
      value: '100-500'
    }, {
      text: '>= $500',
      value: '>=500'
    }],
    categories: ['Appliances', 'Audio', 'Cameras & Camcorders', 'Car Electronics & GPS', 'Cell Phones', 'Computers & Tablets', 'Health, Fitness & Beauty', 'Office & School Supplies', 'TV & Home Theater', 'Video Games'],
    brands: ['Insignia™', 'Samsung', 'Metra', 'HP', 'Apple', 'GE', 'Sony', 'Incipio', 'KitchenAid', 'Whirlpool'],
    ratings: [{
      rating: 4,
      count: 160
    }, {
      rating: 3,
      count: 176
    }, {
      rating: 2,
      count: 291
    }, {
      rating: 1,
      count: 190
    }]
  }; // Sorting

  var sortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
    text: 'Featured',
    value: 'featured'
  });
  var sortByOptions = [{
    text: 'Featured',
    value: 'featured'
  }, {
    text: 'Lowest',
    value: 'price-asc'
  }, {
    text: 'Highest',
    value: 'price-desc'
  }];
  return {
    // Filter
    filters: filters,
    filterOptions: filterOptions,
    // Sort
    sortBy: sortBy,
    sortByOptions: sortByOptions
  };
};
var useShopUi = function useShopUi() {
  var itemView = 'grid-view';
  var itemViewOptions = [{
    icon: 'GridIcon',
    value: 'grid-view'
  }, {
    icon: 'ListIcon',
    value: 'list-view'
  }]; // Pagination count <= required by pagination component

  var totalProducts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  return {
    itemView: itemView,
    itemViewOptions: itemViewOptions,
    totalProducts: totalProducts
  };
};
var useShopRemoteData = function useShopRemoteData() {
  var products = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])([]);

  var fetchProducts = function fetchProducts() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch.apply(_store__WEBPACK_IMPORTED_MODULE_1__["default"], ['app-ecommerce/fetchProducts'].concat(args));
  };

  return {
    products: products,
    fetchProducts: fetchProducts
  };
};

/***/ }),

/***/ "./frontend/src/views/apps/e-commerce/useEcommerce.js":
/*!************************************************************!*\
  !*** ./frontend/src/views/apps/e-commerce/useEcommerce.js ***!
  \************************************************************/
/*! exports provided: useEcommerce, useEcommerceUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEcommerce", function() { return useEcommerce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEcommerceUi", function() { return useEcommerceUi; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _core_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/utils */ "./frontend/src/@core/utils/utils.js");


var useEcommerce = function useEcommerce() {
  // eslint-disable-next-line arrow-body-style
  var addProductInWishlist = function addProductInWishlist(productId) {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-ecommerce/addProductInWishlist', {
      productId: productId
    });
  }; // eslint-disable-next-line arrow-body-style


  var removeProductFromWishlist = function removeProductFromWishlist(productId) {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-ecommerce/removeProductFromWishlist', {
      productId: productId
    });
  }; // eslint-disable-next-line arrow-body-style


  var addProductInCart = function addProductInCart(productId) {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-ecommerce/addProductInCart', {
      productId: productId
    });
  }; // eslint-disable-next-line arrow-body-style


  var removeProductFromCart = function removeProductFromCart(productId) {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-ecommerce/removeProductFromCart', {
      productId: productId
    });
  };

  return {
    addProductInWishlist: addProductInWishlist,
    removeProductFromWishlist: removeProductFromWishlist,
    addProductInCart: addProductInCart,
    removeProductFromCart: removeProductFromCart
  };
};
var useEcommerceUi = function useEcommerceUi() {
  var _useRouter = Object(_core_utils_utils__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(),
      router = _useRouter.router;

  var toggleProductInWishlist = function toggleProductInWishlist(product) {
    var _useEcommerce = useEcommerce(),
        addProductInWishlist = _useEcommerce.addProductInWishlist,
        removeProductFromWishlist = _useEcommerce.removeProductFromWishlist;

    if (product.isInWishlist) {
      removeProductFromWishlist(product.id).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInWishlist = false;
      });
    } else {
      addProductInWishlist(product.id).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInWishlist = true;
      });
    }
  };

  var handleCartActionClick = function handleCartActionClick(product) {
    var _useEcommerce2 = useEcommerce(),
        addProductInCart = _useEcommerce2.addProductInCart;

    if (product.isInCart) {
      router.push({
        name: 'apps-e-commerce-checkout'
      });
    } else {
      addProductInCart(product.id).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInCart = true; // Update cart items count

        _store__WEBPACK_IMPORTED_MODULE_0__["default"].commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', _store__WEBPACK_IMPORTED_MODULE_0__["default"].state['app-ecommerce'].cartItemsCount + 1);
      });
    }
  };

  var handleWishlistCartActionClick = function handleWishlistCartActionClick(product, removeProductFromWishlistUi) {
    var _useEcommerce3 = useEcommerce(),
        addProductInCart = _useEcommerce3.addProductInCart,
        removeProductFromWishlist = _useEcommerce3.removeProductFromWishlist;

    if (product.isInCart) {
      router.push({
        name: 'apps-e-commerce-checkout'
      });
    } else {
      addProductInCart(product.id).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInCart = true;
        removeProductFromWishlist(product.id); // Update cart items count

        _store__WEBPACK_IMPORTED_MODULE_0__["default"].commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', _store__WEBPACK_IMPORTED_MODULE_0__["default"].state['app-ecommerce'].cartItemsCount + 1);
      }).then(function () {
        // eslint-disable-next-line no-param-reassign
        product.isInWishlist = false;
        removeProductFromWishlistUi(product);
      });
    }
  };

  return {
    toggleProductInWishlist: toggleProductInWishlist,
    handleCartActionClick: handleCartActionClick,
    handleWishlistCartActionClick: handleWishlistCartActionClick
  };
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _core_comp_functions_ui_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/comp-functions/ui/app */ "./frontend/src/@core/comp-functions/ui/app.js");
/* harmony import */ var _ECommerceShopLeftFilterSidebar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ECommerceShopLeftFilterSidebar.vue */ "./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue");
/* harmony import */ var _useECommerceShop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useECommerceShop */ "./frontend/src/views/apps/e-commerce/e-commerce-shop/useECommerceShop.js");
/* harmony import */ var _useEcommerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useEcommerce */ "./frontend/src/views/apps/e-commerce/useEcommerce.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  components: {
    // BSV
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadioGroup"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BInputGroupAppend"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    // SFC
    ShopLeftFilterSidebar: _ECommerceShopLeftFilterSidebar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  setup: function setup() {
    var _useShopFiltersSortin = Object(_useECommerceShop__WEBPACK_IMPORTED_MODULE_5__["useShopFiltersSortingAndPagination"])(),
        filters = _useShopFiltersSortin.filters,
        filterOptions = _useShopFiltersSortin.filterOptions,
        sortBy = _useShopFiltersSortin.sortBy,
        sortByOptions = _useShopFiltersSortin.sortByOptions;

    var _useEcommerceUi = Object(_useEcommerce__WEBPACK_IMPORTED_MODULE_6__["useEcommerceUi"])(),
        handleCartActionClick = _useEcommerceUi.handleCartActionClick,
        toggleProductInWishlist = _useEcommerceUi.toggleProductInWishlist;

    var _useShopUi = Object(_useECommerceShop__WEBPACK_IMPORTED_MODULE_5__["useShopUi"])(),
        itemView = _useShopUi.itemView,
        itemViewOptions = _useShopUi.itemViewOptions,
        totalProducts = _useShopUi.totalProducts;

    var _useShopRemoteData = Object(_useECommerceShop__WEBPACK_IMPORTED_MODULE_5__["useShopRemoteData"])(),
        products = _useShopRemoteData.products,
        fetchProducts = _useShopRemoteData.fetchProducts;

    var _useResponsiveAppLeft = Object(_core_comp_functions_ui_app__WEBPACK_IMPORTED_MODULE_3__["useResponsiveAppLeftSidebarVisibility"])(),
        mqShallShowLeftSidebar = _useResponsiveAppLeft.mqShallShowLeftSidebar; // Wrapper Function for `fetchProducts` which can be triggered initially and upon changes of filters


    var fetchShopProducts = function fetchShopProducts() {
      fetchProducts({
        q: filters.value.q,
        sortBy: sortBy.value.value,
        page: filters.value.page,
        perPage: filters.value.perPage
      }).then(function (response) {
        products.value = response.data.products;
        totalProducts.value = response.data.total;
      });
    };

    fetchShopProducts();
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])([filters, sortBy], function () {
      fetchShopProducts();
    }, {
      deep: true
    });
    return {
      // useShopFiltersSortingAndPagination
      filters: filters,
      filterOptions: filterOptions,
      sortBy: sortBy,
      sortByOptions: sortByOptions,
      // useShopUi
      itemView: itemView,
      itemViewOptions: itemViewOptions,
      totalProducts: totalProducts,
      toggleProductInWishlist: toggleProductInWishlist,
      handleCartActionClick: handleCartActionClick,
      // useShopRemoteData
      products: products,
      // mqShallShowLeftSidebar
      mqShallShowLeftSidebar: mqShallShowLeftSidebar
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slider-component */ "./frontend/node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadioGroup"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    // 3rd Party
    VueSlider: vue_slider_component__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    filters: {
      type: Object,
      required: true
    },
    filterOptions: {
      type: Object,
      required: true
    },
    mqShallShowLeftSidebar: {
      type: Boolean,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ecommerce-application .content-body {\n  position: relative;\n}\n.ecommerce-application .body-content-overlay {\n  position: fixed !important;\n  z-index: 12 !important;\n}\n.ecommerce-application .sidebar-shop {\n  width: 260px;\n  z-index: 14;\n}\n[dir] .ecommerce-application .sidebar-shop {\n  margin-top: 0.85rem;\n}\n[dir] .ecommerce-application .sidebar-shop .filter-heading {\n  margin-bottom: 1.75rem;\n}\n[dir] .ecommerce-application .sidebar-shop .filter-title {\n  margin-bottom: 1rem;\n  margin-top: 2.5rem;\n}\n[dir] .ecommerce-application .sidebar-shop .price-range li:not(:last-child), [dir] .ecommerce-application .sidebar-shop .categories-list li:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.ecommerce-application .sidebar-shop .brand-list li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[dir] .ecommerce-application .sidebar-shop .brand-list li {\n  margin-bottom: 0.75rem;\n}\n.ecommerce-application .sidebar-shop .range-slider.noUi-horizontal .noUi-handle .noUi-tooltip {\n  opacity: 0;\n}\n[dir=ltr] .ecommerce-application .sidebar-shop .range-slider.noUi-horizontal .noUi-handle .noUi-tooltip {\n  -webkit-transform: translate(-50%, -15%);\n  transform: translate(-50%, -15%);\n}\n[dir=rtl] .ecommerce-application .sidebar-shop .range-slider.noUi-horizontal .noUi-handle .noUi-tooltip {\n  -webkit-transform: translate(50%, -15%);\n          transform: translate(50%, -15%);\n}\n.ecommerce-application .sidebar-shop .range-slider.noUi-horizontal .noUi-handle .noUi-tooltip:before {\n  content: \"$ \";\n}\n.ecommerce-application .sidebar-shop .range-slider.noUi-horizontal .noUi-handle:active .noUi-tooltip {\n  opacity: 1;\n}\n.ecommerce-application .sidebar-shop .ratings-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n[dir] .ecommerce-application .sidebar-shop .ratings-list {\n  margin-bottom: 0.5rem;\n}\n[dir] .ecommerce-application .sidebar-shop .ratings-list:last-child {\n  margin-bottom: 2.5rem;\n}\n[dir] .ecommerce-application .sidebar-shop .ratings-list ul {\n  margin-bottom: 0;\n}\n.ecommerce-application .sidebar-shop .ratings-list ul .ratings-list-item svg,\n.ecommerce-application .sidebar-shop .ratings-list ul .ratings-list-item i {\n  width: 1.25rem;\n  height: 1.25rem;\n  font-size: 1.25rem;\n}\n.ecommerce-application .filled-star {\n  fill: #ff9f43;\n  stroke: #ff9f43;\n  color: #ff9f43;\n}\n.ecommerce-application .unfilled-star {\n  stroke: #babfc7;\n  color: #babfc7;\n}\n.ecommerce-application .ecommerce-header-items {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.ecommerce-application .ecommerce-header-items .result-toggler {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[dir=ltr] .ecommerce-application .ecommerce-header-items .result-toggler .shop-sidebar-toggler {\n  padding-left: 0;\n}\n[dir=rtl] .ecommerce-application .ecommerce-header-items .result-toggler .shop-sidebar-toggler {\n  padding-right: 0;\n}\n.ecommerce-application .ecommerce-header-items .result-toggler .shop-sidebar-toggler:active, .ecommerce-application .ecommerce-header-items .result-toggler .shop-sidebar-toggler:focus {\n  outline: 0;\n}\n.ecommerce-application .ecommerce-header-items .result-toggler .shop-sidebar-toggler .navbar-toggler-icon {\n  height: auto;\n}\n.ecommerce-application .ecommerce-header-items .result-toggler .shop-sidebar-toggler .navbar-toggler-icon i,\n.ecommerce-application .ecommerce-header-items .result-toggler .shop-sidebar-toggler .navbar-toggler-icon svg {\n  color: #6e6b7b;\n  height: 1.5rem;\n  width: 1.5rem;\n  font-size: 1.5rem;\n}\n.ecommerce-application .ecommerce-header-items .result-toggler .search-results {\n  font-weight: 500;\n  color: #5e5873;\n}\n.ecommerce-application .ecommerce-searchbar .input-group {\n  -webkit-box-shadow: 0 2px 8px 0 rgba(34, 41, 47, 0.14);\n}\n[dir] .ecommerce-application .ecommerce-searchbar .input-group {\n          -webkit-box-shadow: 0 2px 8px 0 rgba(34, 41, 47, 0.14);\n                  box-shadow: 0 2px 8px 0 rgba(34, 41, 47, 0.14);\n  border-radius: 0.3rem;\n}\n.ecommerce-application .search-product,\n.ecommerce-application .input-group-text {\n  height: 48px;\n  font-size: 0.95rem;\n}\n[dir] .ecommerce-application .search-product, [dir] .ecommerce-application .input-group-text {\n  border: none;\n}\n[dir=ltr] .ecommerce-application .search-product, [dir=ltr] .ecommerce-application .input-group-text {\n  padding-left: 1.25rem;\n}\n[dir=rtl] .ecommerce-application .search-product, [dir=rtl] .ecommerce-application .input-group-text {\n  padding-right: 1.25rem;\n}\n.ecommerce-application .search-product::-webkit-input-placeholder, .ecommerce-application .input-group-text::-webkit-input-placeholder {\n  font-size: 0.95rem;\n}\n.ecommerce-application .search-product::-moz-placeholder, .ecommerce-application .input-group-text::-moz-placeholder {\n  font-size: 0.95rem;\n}\n.ecommerce-application .search-product:-ms-input-placeholder, .ecommerce-application .input-group-text:-ms-input-placeholder {\n  font-size: 0.95rem;\n}\n.ecommerce-application .search-product::-ms-input-placeholder, .ecommerce-application .input-group-text::-ms-input-placeholder {\n  font-size: 0.95rem;\n}\n.ecommerce-application .search-product::placeholder,\n.ecommerce-application .input-group-text::placeholder {\n  font-size: 0.95rem;\n}\n.ecommerce-application .ecommerce-card:hover {\n  -webkit-transform: translateY(-5px);\n  -webkit-box-shadow: 0 4px 25px 0 rgba(34, 41, 47, 0.25);\n}\n[dir] .ecommerce-application .ecommerce-card:hover {\n          -webkit-transform: translateY(-5px);\n                  transform: translateY(-5px);\n          -webkit-box-shadow: 0 4px 25px 0 rgba(34, 41, 47, 0.25);\n                  box-shadow: 0 4px 25px 0 rgba(34, 41, 47, 0.25);\n}\n[dir] .ecommerce-application .ecommerce-card .item-rating ul {\n  margin-bottom: 0;\n}\n.ecommerce-application .ecommerce-card .item-rating svg,\n.ecommerce-application .ecommerce-card .item-rating i {\n  height: 1.143rem;\n  width: 1.143rem;\n  font-size: 1.143rem;\n}\n[dir] .ecommerce-application .ecommerce-card .item-name {\n  margin-bottom: 0;\n}\n.ecommerce-application .ecommerce-card .item-name a {\n  font-weight: 600;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ecommerce-application .ecommerce-card .item-description {\n  font-size: 0.875rem;\n}\n.ecommerce-application .ecommerce-card .btn-wishlist span,\n.ecommerce-application .ecommerce-card .btn-cart span {\n  vertical-align: text-top;\n}\n.ecommerce-application .ecommerce-card .btn-wishlist i,\n.ecommerce-application .ecommerce-card .btn-wishlist svg,\n.ecommerce-application .ecommerce-card .btn-cart i,\n.ecommerce-application .ecommerce-card .btn-cart svg {\n  vertical-align: text-top;\n}\n[dir=ltr] .ecommerce-application .ecommerce-card .btn-wishlist i, [dir=ltr] .ecommerce-application .ecommerce-card .btn-wishlist svg, [dir=ltr] .ecommerce-application .ecommerce-card .btn-cart i, [dir=ltr] .ecommerce-application .ecommerce-card .btn-cart svg {\n  margin-right: 0.25rem;\n}\n[dir=rtl] .ecommerce-application .ecommerce-card .btn-wishlist i, [dir=rtl] .ecommerce-application .ecommerce-card .btn-wishlist svg, [dir=rtl] .ecommerce-application .ecommerce-card .btn-cart i, [dir=rtl] .ecommerce-application .ecommerce-card .btn-cart svg {\n  margin-left: 0.25rem;\n}\n.ecommerce-application .ecommerce-card .btn-wishlist i.text-danger,\n.ecommerce-application .ecommerce-card .btn-wishlist svg.text-danger,\n.ecommerce-application .ecommerce-card .btn-cart i.text-danger,\n.ecommerce-application .ecommerce-card .btn-cart svg.text-danger {\n  fill: #ea5455;\n}\n[dir] .ecommerce-application .grid-view:not(.wishlist-items), [dir] .ecommerce-application .list-view:not(.wishlist-items) {\n  margin-top: 2rem;\n}\n.ecommerce-application .grid-view {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  -webkit-column-gap: 2rem;\n     -moz-column-gap: 2rem;\n          column-gap: 2rem;\n}\n.ecommerce-application .grid-view.wishlist-items {\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n}\n.ecommerce-application .grid-view .ecommerce-card {\n  overflow: hidden;\n}\n.ecommerce-application .grid-view .ecommerce-card .item-img {\n  min-height: 15.85rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[dir] .ecommerce-application .grid-view .ecommerce-card .item-img {\n  padding-top: 0.5rem;\n}\n.ecommerce-application .grid-view .ecommerce-card .item-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n}\n.ecommerce-application .grid-view .ecommerce-card .shipping,\n.ecommerce-application .grid-view .ecommerce-card .item-company,\n.ecommerce-application .grid-view .ecommerce-card .item-options .item-price {\n  display: none;\n}\n.ecommerce-application .grid-view .ecommerce-card .item-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.ecommerce-application .grid-view .ecommerce-card .item-options .btn-cart,\n.ecommerce-application .grid-view .ecommerce-card .item-options .btn-wishlist {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n[dir] .ecommerce-application .grid-view .ecommerce-card .item-options .btn-cart, [dir] .ecommerce-application .grid-view .ecommerce-card .item-options .btn-wishlist {\n  border-radius: 0;\n}\n[dir] .ecommerce-application .grid-view .ecommerce-card .item-name {\n  margin-top: 0.75rem;\n}\n.ecommerce-application .grid-view .ecommerce-card .item-description {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n[dir] .ecommerce-application .grid-view .ecommerce-card .item-description {\n  margin-top: 0.2rem;\n}\n.ecommerce-application .grid-view .ecommerce-card .item-price {\n  font-weight: 600;\n}\n[dir] .ecommerce-application .grid-view .ecommerce-card .card-body {\n  padding: 1rem;\n}\n.ecommerce-application .list-view {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n.ecommerce-application .list-view .ecommerce-card {\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n}\n.ecommerce-application .list-view .ecommerce-card .item-img {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n}\n.ecommerce-application .list-view .ecommerce-card .card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n[dir] .ecommerce-application .list-view .ecommerce-card .card-body {\n  padding: 1.5rem 1rem;\n}\n[dir=ltr] .ecommerce-application .list-view .ecommerce-card .card-body {\n  border-right: 1px solid #ebe9f1;\n}\n[dir=rtl] .ecommerce-application .list-view .ecommerce-card .card-body {\n  border-left: 1px solid #ebe9f1;\n}\n.ecommerce-application .list-view .ecommerce-card .card-body .item-wrapper {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n.ecommerce-application .list-view .ecommerce-card .card-body .item-name {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.ecommerce-application .list-view .ecommerce-card .card-body .item-description {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ecommerce-application .list-view .ecommerce-card .card-body .item-price {\n  display: none;\n}\n[dir] .ecommerce-application .list-view .ecommerce-card .card-body .item-rating {\n  margin-bottom: 0.3rem;\n}\n.ecommerce-application .list-view .ecommerce-card .item-company {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-weight: 400;\n  font-size: 0.875rem;\n}\n[dir] .ecommerce-application .list-view .ecommerce-card .item-company {\n  margin: 0.3rem 0 0.5rem;\n}\n.ecommerce-application .list-view .ecommerce-card .item-company .company-name {\n  font-weight: 600;\n}\n[dir=ltr] .ecommerce-application .list-view .ecommerce-card .item-company .company-name {\n  margin-left: 0.25rem;\n}\n[dir=rtl] .ecommerce-application .list-view .ecommerce-card .item-company .company-name {\n  margin-right: 0.25rem;\n}\n.ecommerce-application .list-view .ecommerce-card .item-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n[dir] .ecommerce-application .list-view .ecommerce-card .item-options {\n  padding: 1rem;\n}\n.ecommerce-application .list-view .ecommerce-card .item-options .item-wrapper {\n  position: relative;\n}\n.ecommerce-application .list-view .ecommerce-card .item-options .item-wrapper .item-cost .item-price {\n  color: #7367f0;\n}\n[dir] .ecommerce-application .list-view .ecommerce-card .item-options .item-wrapper .item-cost .item-price {\n  margin-bottom: 0;\n}\n[dir] .ecommerce-application .list-view .ecommerce-card .item-options .shipping {\n  margin-top: 0.75rem;\n}\n[dir] .ecommerce-application .list-view .ecommerce-card .item-options .btn-wishlist, [dir] .ecommerce-application .list-view .ecommerce-card .item-options .btn-cart {\n  margin-top: 1rem;\n}\n[dir] .ecommerce-application .checkout-tab-steps .bs-stepper-header, [dir] .ecommerce-application .checkout-tab-steps .bs-stepper-content {\n  padding: 0;\n  margin: 0;\n}\n.ecommerce-application .checkout-items .ecommerce-card .item-img img {\n  width: 200px;\n}\n.ecommerce-application .checkout-items .ecommerce-card .item-name {\n  -webkit-box-ordinal-group: 1 !important;\n      -ms-flex-order: 0 !important;\n          order: 0 !important;\n}\n[dir] .ecommerce-application .checkout-items .ecommerce-card .item-company, [dir] .ecommerce-application .checkout-items .ecommerce-card .item-rating {\n  margin-bottom: 0.4rem !important;\n}\n.ecommerce-application .checkout-items .ecommerce-card .item-quantity {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[dir] .ecommerce-application .checkout-items .ecommerce-card .delivery-date {\n  margin-top: 1.2rem;\n  margin-bottom: 0.25rem;\n}\n.ecommerce-application .checkout-items .ecommerce-card .item-options .btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.ecommerce-application .checkout-options .coupons:focus-within {\n  -webkit-box-shadow: none;\n}\n[dir] .ecommerce-application .checkout-options .coupons:focus-within {\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n.ecommerce-application .checkout-options .coupons input {\n  color: #6e6b7b;\n  font-weight: 600;\n}\n[dir] .ecommerce-application .checkout-options .coupons input {\n  border: none;\n}\n[dir=ltr] .ecommerce-application .checkout-options .coupons input {\n  padding-left: 0;\n}\n[dir=rtl] .ecommerce-application .checkout-options .coupons input {\n  padding-right: 0;\n}\n.ecommerce-application .checkout-options .coupons input::-webkit-input-placeholder {\n  color: #6e6b7b;\n  font-weight: 600;\n}\n.ecommerce-application .checkout-options .coupons input::-moz-placeholder {\n  color: #6e6b7b;\n  font-weight: 600;\n}\n.ecommerce-application .checkout-options .coupons input:-ms-input-placeholder {\n  color: #6e6b7b;\n  font-weight: 600;\n}\n.ecommerce-application .checkout-options .coupons input::-ms-input-placeholder {\n  color: #6e6b7b;\n  font-weight: 600;\n}\n.ecommerce-application .checkout-options .coupons input::placeholder {\n  color: #6e6b7b;\n  font-weight: 600;\n}\n[dir] .ecommerce-application .checkout-options .coupons .input-group-append {\n  margin: 0;\n}\n.ecommerce-application .checkout-options .coupons .input-group-text {\n  height: auto;\n  font-weight: 600;\n}\n[dir] .ecommerce-application .checkout-options .coupons .input-group-text {\n  padding: inherit;\n}\n.ecommerce-application .checkout-options .price-details .price-title {\n  font-weight: 600;\n}\n[dir] .ecommerce-application .checkout-options .price-details .price-title {\n  margin-bottom: 0.75rem;\n  margin-top: 1.5rem;\n}\n.ecommerce-application .checkout-options .price-details .price-detail {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n[dir] .ecommerce-application .checkout-options .price-details .price-detail {\n  margin-bottom: 0.75rem;\n}\n.ecommerce-application .checkout-options .price-details .price-detail .detail-title.detail-total {\n  font-weight: 600;\n}\n[dir] .ecommerce-application .payment-type .gift-card {\n  cursor: pointer;\n}\n.ecommerce-application .checkout-tab-steps {\n  -webkit-box-shadow: none !important;\n}\n[dir] .ecommerce-application .checkout-tab-steps {\n  background-color: transparent !important;\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n}\n[dir] .ecommerce-application .checkout-tab-steps .bs-stepper-header {\n  border: none;\n}\n@media (min-width: 992px) {\n.ecommerce-application .ecommerce-header-items .shop-sidebar-toggler {\n    display: none;\n}\n.ecommerce-application .product-checkout.list-view {\n    grid-template-columns: 2fr 1fr;\n    -webkit-column-gap: 2rem;\n       -moz-column-gap: 2rem;\n            column-gap: 2rem;\n}\n}\n@media (max-width: 1199.98px) {\n.ecommerce-application .ecommerce-header-items .btn-group {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n[dir] .ecommerce-application .ecommerce-header-items .btn-group .btn-icon {\n    padding: 0.6rem 0.736rem;\n}\n.ecommerce-application .grid-view.wishlist-items {\n    grid-template-columns: 1fr 1fr 1fr;\n}\n.ecommerce-application .body-content-overlay {\n    position: fixed;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    bottom: 0;\n}\n[dir=ltr] .ecommerce-application .body-content-overlay {\n    left: 0;\n    right: 0;\n}\n[dir=rtl] .ecommerce-application .body-content-overlay {\n    right: 0;\n    left: 0;\n}\n.ecommerce-application .body-content-overlay.show {\n    opacity: 1;\n}\n.ecommerce-application.horizontal-layout .body-content-overlay {\n    z-index: 998 !important;\n}\n.ecommerce-application.horizontal-layout .sidebar-shop {\n    z-index: 999 !important;\n}\n}\n@media (max-width: 991.98px) {\n[dir] .ecommerce-application .sidebar-left .sidebar .card {\n    border-radius: 0;\n    margin: 0;\n}\n.ecommerce-application .sidebar-left .sidebar .sidebar-shop {\n    -webkit-transition: all 0.25s ease;\n    transition: all 0.25s ease;\n    position: fixed;\n    top: 0;\n    height: 100%;\n    overflow-y: scroll;\n}\n[dir] .ecommerce-application .sidebar-left .sidebar .sidebar-shop {\n    -webkit-transition: all 0.25s ease;\n    margin: 0;\n}\n[dir=ltr] .ecommerce-application .sidebar-left .sidebar .sidebar-shop {\n    -webkit-transform: translateX(-112%);\n    transform: translateX(-112%);\n    left: 0;\n}\n[dir=rtl] .ecommerce-application .sidebar-left .sidebar .sidebar-shop {\n    -webkit-transform: translateX(112%);\n            transform: translateX(112%);\n    right: 0;\n}\n.ecommerce-application .sidebar-left .sidebar .sidebar-shop.show {\n    -webkit-transition: all 0.25s ease;\n    transition: all 0.25s ease;\n    -webkit-transform: translateX(0);\n}\n[dir] .ecommerce-application .sidebar-left .sidebar .sidebar-shop.show {\n    -webkit-transition: all 0.25s ease;\n            -webkit-transform: translateX(0);\n                    transform: translateX(0);\n}\n.ecommerce-application .grid-view {\n    grid-template-columns: 1fr 1fr;\n}\n.ecommerce-application .ecommerce-header-items .result-toggler .search-results {\n    display: none;\n}\n}\n@media (max-width: 767.98px) {\n.ecommerce-application .grid-view.wishlist-items {\n    grid-template-columns: 1fr 1fr;\n}\n.ecommerce-application .list-view .ecommerce-card {\n    grid-template-columns: 1fr;\n}\n[dir] .ecommerce-application .list-view .ecommerce-card .item-img {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n}\n[dir] .ecommerce-application .list-view .ecommerce-card .card-body {\n    border: none;\n}\n}\n@media (max-width: 575.98px) {\n.ecommerce-application .grid-view,\n.ecommerce-application .grid-view.wishlist-items {\n    grid-template-columns: 1fr;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=4ce46a7d&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=4ce46a7d&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item-view-radio-group[data-v-4ce46a7d]  .btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Set the theme color of the component */\n/* import theme style */\n/* component style */\n.vue-slider-disabled {\n  opacity: 0.5;\n}\n[dir] .vue-slider-disabled {\n  cursor: not-allowed;\n}\n\n/* rail style */\n[dir] .vue-slider-rail {\n  background-color: rgba(115, 103, 240, 0.12);\n  border-radius: 15px;\n}\n\n/* process style */\n[dir] .vue-slider-process {\n  background-color: #7367f0;\n  border-radius: 15px;\n}\n\n/* mark style */\n.vue-slider-mark {\n  z-index: 4;\n}\n.vue-slider-mark:first-child .vue-slider-mark-step, .vue-slider-mark:last-child .vue-slider-mark-step {\n  display: none;\n}\n.vue-slider-mark-step {\n  width: 100%;\n  height: 100%;\n}\n[dir] .vue-slider-mark-step {\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.16);\n}\n.vue-slider-mark-label {\n  font-size: 14px;\n  white-space: nowrap;\n}\n\n/* dot style */\n.vue-slider-dot-handle {\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-shadow: none;\n}\n[dir] .vue-slider-dot-handle {\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: #fff;\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n.vue-slider-dot-handle-focus {\n  -webkit-box-shadow: 0px 0px 1px 2px rgba(115, 103, 240, 0.36);\n}\n[dir] .vue-slider-dot-handle-focus {\n          -webkit-box-shadow: 0px 0px 1px 2px rgba(115, 103, 240, 0.36);\n                  box-shadow: 0px 0px 1px 2px rgba(115, 103, 240, 0.36);\n}\n[dir] .vue-slider-dot-handle-disabled {\n  cursor: not-allowed;\n  background-color: #ccc;\n}\n.vue-slider-dot-tooltip-inner {\n  font-size: 14px;\n  white-space: nowrap;\n  min-width: 20px;\n  color: #fff;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n[dir] .vue-slider-dot-tooltip-inner {\n  padding: 2px 5px;\n  text-align: center;\n  border-radius: 5px;\n  border-color: #7367f0;\n  background-color: #7367f0;\n}\n.vue-slider-dot-tooltip-inner::after {\n  content: \"\";\n  position: absolute;\n}\n.vue-slider-dot-tooltip-inner-top::after {\n  top: 100%;\n  height: 0;\n  width: 0;\n}\n[dir] .vue-slider-dot-tooltip-inner-top::after {\n  border-color: transparent;\n  border-style: solid;\n  border-width: 5px;\n  border-top-color: inherit;\n}\n[dir=ltr] .vue-slider-dot-tooltip-inner-top::after {\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n}\n[dir=rtl] .vue-slider-dot-tooltip-inner-top::after {\n  right: 50%;\n  -webkit-transform: translate(50%, 0);\n          transform: translate(50%, 0);\n}\n.vue-slider-dot-tooltip-inner-bottom::after {\n  bottom: 100%;\n  height: 0;\n  width: 0;\n}\n[dir] .vue-slider-dot-tooltip-inner-bottom::after {\n  border-color: transparent;\n  border-style: solid;\n  border-width: 5px;\n  border-bottom-color: inherit;\n}\n[dir=ltr] .vue-slider-dot-tooltip-inner-bottom::after {\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n}\n[dir=rtl] .vue-slider-dot-tooltip-inner-bottom::after {\n  right: 50%;\n  -webkit-transform: translate(50%, 0);\n          transform: translate(50%, 0);\n}\n.vue-slider-dot-tooltip-inner-left::after {\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  height: 0;\n  width: 0;\n}\n[dir] .vue-slider-dot-tooltip-inner-left::after {\n          -webkit-transform: translate(0, -50%);\n                  transform: translate(0, -50%);\n  border-color: transparent;\n  border-style: solid;\n  border-width: 5px;\n}\n[dir=ltr] .vue-slider-dot-tooltip-inner-left::after {\n  left: 100%;\n  border-left-color: inherit;\n}\n[dir=rtl] .vue-slider-dot-tooltip-inner-left::after {\n  right: 100%;\n  border-right-color: inherit;\n}\n.vue-slider-dot-tooltip-inner-right::after {\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  height: 0;\n  width: 0;\n}\n[dir] .vue-slider-dot-tooltip-inner-right::after {\n          -webkit-transform: translate(0, -50%);\n                  transform: translate(0, -50%);\n  border-color: transparent;\n  border-style: solid;\n  border-width: 5px;\n}\n[dir=ltr] .vue-slider-dot-tooltip-inner-right::after {\n  right: 100%;\n  border-right-color: inherit;\n}\n[dir=rtl] .vue-slider-dot-tooltip-inner-right::after {\n  left: 100%;\n  border-left-color: inherit;\n}\n.vue-slider-dot-tooltip-wrapper {\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n[dir] .vue-slider-dot-tooltip-wrapper {\n  -webkit-transition: all 0.3s;\n}\n.vue-slider-dot-tooltip-wrapper-show {\n  opacity: 1;\n}\n[dir] .vue-slider-dot-handle {\n  border: 2px solid #7367f0;\n}\n[dir] .vue-slider-dot-tooltip-inner {\n  background-color: #7367f0;\n  border-color: #7367f0;\n}\n\n/* Generate:\n*  Border color according to event class\n*/\n[dir] .vue-slider-white .vue-slider-dot-handle {\n  border: 2px solid #ffffff;\n}\n.vue-slider-white .vue-slider-dot-handle-focus {\n  -webkit-box-shadow: 0px 0px 1px 2px rgba(255, 255, 255, 0.36);\n}\n[dir] .vue-slider-white .vue-slider-dot-handle-focus {\n          -webkit-box-shadow: 0px 0px 1px 2px rgba(255, 255, 255, 0.36);\n                  box-shadow: 0px 0px 1px 2px rgba(255, 255, 255, 0.36);\n}\n[dir] .vue-slider-white .vue-slider-process {\n  background-color: #ffffff;\n}\n[dir] .vue-slider-white .vue-slider-rail {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n[dir] .vue-slider-white .vue-slider-dot-tooltip-inner {\n  background-color: #ffffff;\n  border-color: #ffffff;\n}\n[dir] .vue-slider-black .vue-slider-dot-handle {\n  border: 2px solid #000000;\n}\n.vue-slider-black .vue-slider-dot-handle-focus {\n  -webkit-box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.36);\n}\n[dir] .vue-slider-black .vue-slider-dot-handle-focus {\n          -webkit-box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.36);\n                  box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.36);\n}\n[dir] .vue-slider-black .vue-slider-process {\n  background-color: #000000;\n}\n[dir] .vue-slider-black .vue-slider-rail {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n[dir] .vue-slider-black .vue-slider-dot-tooltip-inner {\n  background-color: #000000;\n  border-color: #000000;\n}\n[dir] .vue-slider-dark .vue-slider-dot-handle {\n  border: 2px solid #4b4b4b;\n}\n.vue-slider-dark .vue-slider-dot-handle-focus {\n  -webkit-box-shadow: 0px 0px 1px 2px rgba(75, 75, 75, 0.36);\n}\n[dir] .vue-slider-dark .vue-slider-dot-handle-focus {\n          -webkit-box-shadow: 0px 0px 1px 2px rgba(75, 75, 75, 0.36);\n                  box-shadow: 0px 0px 1px 2px rgba(75, 75, 75, 0.36);\n}\n[dir] .vue-slider-dark .vue-slider-process {\n  background-color: #4b4b4b;\n}\n[dir] .vue-slider-dark .vue-slider-rail {\n  background-color: rgba(75, 75, 75, 0.12);\n}\n[dir] .vue-slider-dark .vue-slider-dot-tooltip-inner {\n  background-color: #4b4b4b;\n  border-color: #4b4b4b;\n}\n[dir] .vue-slider-light .vue-slider-dot-handle {\n  border: 2px solid #f6f6f6;\n}\n.vue-slider-light .vue-slider-dot-handle-focus {\n  -webkit-box-shadow: 0px 0px 1px 2px rgba(246, 246, 246, 0.36);\n}\n[dir] .vue-slider-light .vue-slider-dot-handle-focus {\n          -webkit-box-shadow: 0px 0px 1px 2px rgba(246, 246, 246, 0.36);\n                  box-shadow: 0px 0px 1px 2px rgba(246, 246, 246, 0.36);\n}\n[dir] .vue-slider-light .vue-slider-process {\n  background-color: #f6f6f6;\n}\n[dir] .vue-slider-light .vue-slider-rail {\n  background-color: rgba(246, 246, 246, 0.12);\n}\n[dir] .vue-slider-light .vue-slider-dot-tooltip-inner {\n  background-color: #f6f6f6;\n  border-color: #f6f6f6;\n}\n[dir] .vue-slider-primary .vue-slider-dot-handle {\n  border: 2px solid #7367f0;\n}\n.vue-slider-primary .vue-slider-dot-handle-focus {\n  -webkit-box-shadow: 0px 0px 1px 2px rgba(115, 103, 240, 0.36);\n}\n[dir] .vue-slider-primary .vue-slider-dot-handle-focus {\n          -webkit-box-shadow: 0px 0px 1px 2px rgba(115, 103, 240, 0.36);\n                  box-shadow: 0px 0px 1px 2px rgba(115, 103, 240, 0.36);\n}\n[dir] .vue-slider-primary .vue-slider-process {\n  background-color: #7367f0;\n}\n[dir] .vue-slider-primary .vue-slider-rail {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n[dir] .vue-slider-primary .vue-slider-dot-tooltip-inner {\n  background-color: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .vue-slider-secondary .vue-slider-dot-handle {\n  border: 2px solid #82868b;\n}\n.vue-slider-secondary .vue-slider-dot-handle-focus {\n  -webkit-box-shadow: 0px 0px 1px 2px rgba(130, 134, 139, 0.36);\n}\n[dir] .vue-slider-secondary .vue-slider-dot-handle-focus {\n          -webkit-box-shadow: 0px 0px 1px 2px rgba(130, 134, 139, 0.36);\n                  box-shadow: 0px 0px 1px 2px rgba(130, 134, 139, 0.36);\n}\n[dir] .vue-slider-secondary .vue-slider-process {\n  background-color: #82868b;\n}\n[dir] .vue-slider-secondary .vue-slider-rail {\n  background-color: rgba(130, 134, 139, 0.12);\n}\n[dir] .vue-slider-secondary .vue-slider-dot-tooltip-inner {\n  background-color: #82868b;\n  border-color: #82868b;\n}\n[dir] .vue-slider-success .vue-slider-dot-handle {\n  border: 2px solid #28c76f;\n}\n.vue-slider-success .vue-slider-dot-handle-focus {\n  -webkit-box-shadow: 0px 0px 1px 2px rgba(40, 199, 111, 0.36);\n}\n[dir] .vue-slider-success .vue-slider-dot-handle-focus {\n          -webkit-box-shadow: 0px 0px 1px 2px rgba(40, 199, 111, 0.36);\n                  box-shadow: 0px 0px 1px 2px rgba(40, 199, 111, 0.36);\n}\n[dir] .vue-slider-success .vue-slider-process {\n  background-color: #28c76f;\n}\n[dir] .vue-slider-success .vue-slider-rail {\n  background-color: rgba(40, 199, 111, 0.12);\n}\n[dir] .vue-slider-success .vue-slider-dot-tooltip-inner {\n  background-color: #28c76f;\n  border-color: #28c76f;\n}\n[dir] .vue-slider-info .vue-slider-dot-handle {\n  border: 2px solid #00cfe8;\n}\n.vue-slider-info .vue-slider-dot-handle-focus {\n  -webkit-box-shadow: 0px 0px 1px 2px rgba(0, 207, 232, 0.36);\n}\n[dir] .vue-slider-info .vue-slider-dot-handle-focus {\n          -webkit-box-shadow: 0px 0px 1px 2px rgba(0, 207, 232, 0.36);\n                  box-shadow: 0px 0px 1px 2px rgba(0, 207, 232, 0.36);\n}\n[dir] .vue-slider-info .vue-slider-process {\n  background-color: #00cfe8;\n}\n[dir] .vue-slider-info .vue-slider-rail {\n  background-color: rgba(0, 207, 232, 0.12);\n}\n[dir] .vue-slider-info .vue-slider-dot-tooltip-inner {\n  background-color: #00cfe8;\n  border-color: #00cfe8;\n}\n[dir] .vue-slider-warning .vue-slider-dot-handle {\n  border: 2px solid #ff9f43;\n}\n.vue-slider-warning .vue-slider-dot-handle-focus {\n  -webkit-box-shadow: 0px 0px 1px 2px rgba(255, 159, 67, 0.36);\n}\n[dir] .vue-slider-warning .vue-slider-dot-handle-focus {\n          -webkit-box-shadow: 0px 0px 1px 2px rgba(255, 159, 67, 0.36);\n                  box-shadow: 0px 0px 1px 2px rgba(255, 159, 67, 0.36);\n}\n[dir] .vue-slider-warning .vue-slider-process {\n  background-color: #ff9f43;\n}\n[dir] .vue-slider-warning .vue-slider-rail {\n  background-color: rgba(255, 159, 67, 0.12);\n}\n[dir] .vue-slider-warning .vue-slider-dot-tooltip-inner {\n  background-color: #ff9f43;\n  border-color: #ff9f43;\n}\n[dir] .vue-slider-danger .vue-slider-dot-handle {\n  border: 2px solid #ea5455;\n}\n.vue-slider-danger .vue-slider-dot-handle-focus {\n  -webkit-box-shadow: 0px 0px 1px 2px rgba(234, 84, 85, 0.36);\n}\n[dir] .vue-slider-danger .vue-slider-dot-handle-focus {\n          -webkit-box-shadow: 0px 0px 1px 2px rgba(234, 84, 85, 0.36);\n                  box-shadow: 0px 0px 1px 2px rgba(234, 84, 85, 0.36);\n}\n[dir] .vue-slider-danger .vue-slider-process {\n  background-color: #ea5455;\n}\n[dir] .vue-slider-danger .vue-slider-rail {\n  background-color: rgba(234, 84, 85, 0.12);\n}\n[dir] .vue-slider-danger .vue-slider-dot-tooltip-inner {\n  background-color: #ea5455;\n  border-color: #ea5455;\n}\n[dir] body.dark-layout .vue-slider-dot-handle {\n  background-color: #161d31;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=3037beb0&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=3037beb0&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .categories-radio-group[data-v-3037beb0]  > .custom-control, [dir] .brands-radio-group[data-v-3037beb0]  > .custom-control, [dir] .price-range-defined-radio-group[data-v-3037beb0]  > .custom-control {\n  margin-bottom: 0.75rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=4ce46a7d&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=4ce46a7d&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShop.vue?vue&type=style&index=1&id=4ce46a7d&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=style&index=1&id=4ce46a7d&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=3037beb0&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=3037beb0&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=3037beb0&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=style&index=1&id=3037beb0&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=template&id=4ce46a7d&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue?vue&type=template&id=4ce46a7d&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { height: "inherit" } },
    [
      _c("section", { attrs: { id: "ecommerce-header" } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-12" }, [
            _c("div", { staticClass: "ecommerce-header-items" }, [
              _c(
                "div",
                { staticClass: "result-toggler" },
                [
                  _c("feather-icon", {
                    staticClass: "d-block d-lg-none",
                    attrs: { icon: "MenuIcon", size: "21" },
                    on: {
                      click: function($event) {
                        _vm.mqShallShowLeftSidebar = true
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "search-results" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.totalProducts) +
                        " results found\n            "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "view-options d-flex" },
                [
                  _c(
                    "b-dropdown",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(113, 102, 240, 0.15)",
                          expression: "'rgba(113, 102, 240, 0.15)'",
                          modifiers: { "400": true }
                        }
                      ],
                      attrs: {
                        text: _vm.sortBy.text,
                        right: "",
                        variant: "outline-primary"
                      }
                    },
                    _vm._l(_vm.sortByOptions, function(sortOption) {
                      return _c(
                        "b-dropdown-item",
                        {
                          key: sortOption.value,
                          on: {
                            click: function($event) {
                              _vm.sortBy = sortOption
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(sortOption.text) +
                              "\n              "
                          )
                        ]
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio-group",
                    {
                      staticClass: "ml-1 list item-view-radio-group",
                      attrs: {
                        buttons: "",
                        size: "sm",
                        "button-variant": "outline-primary"
                      },
                      model: {
                        value: _vm.itemView,
                        callback: function($$v) {
                          _vm.itemView = $$v
                        },
                        expression: "itemView"
                      }
                    },
                    _vm._l(_vm.itemViewOptions, function(option) {
                      return _c(
                        "b-form-radio",
                        { key: option.value, attrs: { value: option.value } },
                        [
                          _c("feather-icon", {
                            attrs: { icon: option.icon, size: "18" }
                          })
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "body-content-overlay" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "ecommerce-searchbar mt-1" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-input-group",
                    { staticClass: "input-group-merge" },
                    [
                      _c("b-form-input", {
                        staticClass: "search-product",
                        attrs: { placeholder: "Search Product" },
                        model: {
                          value: _vm.filters.q,
                          callback: function($$v) {
                            _vm.$set(_vm.filters, "q", $$v)
                          },
                          expression: "filters.q"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        { attrs: { "is-text": "" } },
                        [
                          _c("feather-icon", {
                            staticClass: "text-muted",
                            attrs: { icon: "SearchIcon" }
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
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { class: _vm.itemView },
        _vm._l(_vm.products, function(product) {
          return _c(
            "b-card",
            {
              key: product.id,
              staticClass: "ecommerce-card",
              attrs: { "no-body": "" }
            },
            [
              _c(
                "div",
                { staticClass: "item-img text-center" },
                [
                  _c(
                    "b-link",
                    {
                      attrs: {
                        to: {
                          name: "apps-e-commerce-product-details",
                          params: { slug: product.slug }
                        }
                      }
                    },
                    [
                      _c("b-img", {
                        staticClass: "card-img-top",
                        attrs: {
                          alt: product.name + "-" + product.id,
                          fluid: "",
                          src: product.image
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-card-body",
                [
                  _c("div", { staticClass: "item-wrapper" }, [
                    _c("div", { staticClass: "item-rating" }, [
                      _c(
                        "ul",
                        { staticClass: "unstyled-list list-inline" },
                        _vm._l(5, function(star) {
                          return _c(
                            "li",
                            {
                              key: star,
                              staticClass: "ratings-list-item",
                              class: { "ml-25": star - 1 }
                            },
                            [
                              _c("feather-icon", {
                                class: [
                                  { "fill-current": star <= product.rating },
                                  star <= product.rating
                                    ? "text-warning"
                                    : "text-muted"
                                ],
                                attrs: { icon: "StarIcon", size: "16" }
                              })
                            ],
                            1
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("h6", { staticClass: "item-price" }, [
                        _vm._v(
                          "\n              $" +
                            _vm._s(product.price) +
                            "\n            "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "h6",
                    { staticClass: "item-name" },
                    [
                      _c(
                        "b-link",
                        {
                          staticClass: "text-body",
                          attrs: {
                            to: {
                              name: "apps-e-commerce-product-details",
                              params: { slug: product.slug }
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(product.name) +
                              "\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-card-text",
                        { staticClass: "item-company" },
                        [
                          _vm._v("\n            By "),
                          _c("b-link", { staticClass: "ml-25" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(product.brand) +
                                "\n            "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-card-text", { staticClass: "item-description" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(product.description) +
                        "\n        "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "item-options text-center" },
                [
                  _c("div", { staticClass: "item-wrapper" }, [
                    _c("div", { staticClass: "item-cost" }, [
                      _c("h4", { staticClass: "item-price" }, [
                        _vm._v(
                          "\n              $" +
                            _vm._s(product.price) +
                            "\n            "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "btn-wishlist",
                      attrs: { variant: "light", tag: "a" },
                      on: {
                        click: function($event) {
                          return _vm.toggleProductInWishlist(product)
                        }
                      }
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-50",
                        class: { "text-danger": product.isInWishlist },
                        attrs: { icon: "HeartIcon" }
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Wishlist")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "btn-cart",
                      attrs: { variant: "primary", tag: "a" },
                      on: {
                        click: function($event) {
                          return _vm.handleCartActionClick(product)
                        }
                      }
                    },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-50",
                        attrs: { icon: "ShoppingCartIcon" }
                      }),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          _vm._s(
                            product.isInCart ? "View In Cart" : "Add to Cart"
                          )
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
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c("b-pagination", {
                    attrs: {
                      "total-rows": _vm.totalProducts,
                      "per-page": _vm.filters.perPage,
                      "first-number": "",
                      align: "center",
                      "last-number": "",
                      "prev-class": "prev-item",
                      "next-class": "next-item"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "prev-text",
                        fn: function() {
                          return [
                            _c("feather-icon", {
                              attrs: { icon: "ChevronLeftIcon", size: "18" }
                            })
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "next-text",
                        fn: function() {
                          return [
                            _c("feather-icon", {
                              attrs: { icon: "ChevronRightIcon", size: "18" }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ]),
                    model: {
                      value: _vm.filters.page,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "page", $$v)
                      },
                      expression: "filters.page"
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
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "content-renderer-sidebar-detached-left" } },
        [
          _c("shop-left-filter-sidebar", {
            attrs: {
              filters: _vm.filters,
              "filter-options": _vm.filterOptions,
              "mq-shall-show-left-sidebar": _vm.mqShallShowLeftSidebar
            },
            on: {
              "update:mqShallShowLeftSidebar": function($event) {
                _vm.mqShallShowLeftSidebar = $event
              },
              "update:mq-shall-show-left-sidebar": function($event) {
                _vm.mqShallShowLeftSidebar = $event
              }
            }
          })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=3037beb0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/e-commerce/e-commerce-shop/ECommerceShopLeftFilterSidebar.vue?vue&type=template&id=3037beb0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "sidebar-detached sidebar-left" }, [
    _c("div", { staticClass: "sidebar" }, [
      _c(
        "div",
        {
          staticClass: "sidebar-shop",
          class: { show: _vm.mqShallShowLeftSidebar }
        },
        [
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { cols: "12" } }, [
                _c("h6", { staticClass: "filter-heading d-none d-lg-block" }, [
                  _vm._v("\n            Filters\n          ")
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("b-card", [
            _c(
              "div",
              { staticClass: "multi-range-price" },
              [
                _c("h6", { staticClass: "filter-title mt-0" }, [
                  _vm._v("\n            Multi Range\n          ")
                ]),
                _vm._v(" "),
                _c("b-form-radio-group", {
                  staticClass: "price-range-defined-radio-group",
                  attrs: {
                    stacked: "",
                    options: _vm.filterOptions.priceRangeDefined
                  },
                  model: {
                    value: _vm.filters.priceRangeDefined,
                    callback: function($$v) {
                      _vm.$set(_vm.filters, "priceRangeDefined", $$v)
                    },
                    expression: "filters.priceRangeDefined"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "price-slider" },
              [
                _c("h6", { staticClass: "filter-title" }, [
                  _vm._v("\n            Price Range\n          ")
                ]),
                _vm._v(" "),
                _c("vue-slider", {
                  attrs: {
                    direction: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr"
                  },
                  model: {
                    value: _vm.filters.priceRange,
                    callback: function($$v) {
                      _vm.$set(_vm.filters, "priceRange", $$v)
                    },
                    expression: "filters.priceRange"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "product-categories" },
              [
                _c("h6", { staticClass: "filter-title" }, [
                  _vm._v("\n            Categories\n          ")
                ]),
                _vm._v(" "),
                _c("b-form-radio-group", {
                  staticClass: "categories-radio-group",
                  attrs: { stacked: "", options: _vm.filterOptions.categories },
                  model: {
                    value: _vm.filters.categories,
                    callback: function($$v) {
                      _vm.$set(_vm.filters, "categories", $$v)
                    },
                    expression: "filters.categories"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "brands" },
              [
                _c("h6", { staticClass: "filter-title" }, [
                  _vm._v("\n            Brands\n          ")
                ]),
                _vm._v(" "),
                _c("b-form-radio-group", {
                  staticClass: "brands-radio-group",
                  attrs: { stacked: "", options: _vm.filterOptions.brands },
                  model: {
                    value: _vm.filters.brands,
                    callback: function($$v) {
                      _vm.$set(_vm.filters, "brands", $$v)
                    },
                    expression: "filters.brands"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "ratings" },
              [
                _c("h6", { staticClass: "filter-title" }, [
                  _vm._v("\n            Ratings\n          ")
                ]),
                _vm._v(" "),
                _vm._l(_vm.filterOptions.ratings, function(rating) {
                  return _c(
                    "div",
                    { key: rating.rating, staticClass: "ratings-list" },
                    [
                      _c("b-link", [
                        _c(
                          "div",
                          { staticClass: "d-flex" },
                          [
                            _vm._l(5, function(star) {
                              return _c("feather-icon", {
                                key: star,
                                class: [
                                  { "fill-current": star <= rating.rating },
                                  star <= rating.rating
                                    ? "text-warning"
                                    : "text-muted"
                                ],
                                attrs: { icon: "StarIcon", size: "17" }
                              })
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "ml-25" }, [
                              _vm._v("& up")
                            ])
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "stars-received" }, [
                        _c("span", [_vm._v(_vm._s(rating.count))])
                      ])
                    ],
                    1
                  )
                })
              ],
              2
            )
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", {
      staticClass: "body-content-overlay",
      class: { show: _vm.mqShallShowLeftSidebar },
      on: {
        click: function($event) {
          return _vm.$emit("update:mq-shall-show-left-sidebar", false)
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);