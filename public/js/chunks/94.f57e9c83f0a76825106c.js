(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1351:function(e,t,r){"use strict";r.r(t);var i=r(90),o=r(13),a=r(8),n=r(1609),s=r(264),c=r(1606),p=r(268),l=r(174),d=r(1607),m=r(55),u=r(77),w=r(455),b=r(1637),f=r(1612),g=r(9),x={},h=r(0),v=Object(h.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"item-features"},[r("div",{staticClass:"row text-center"},[r("div",{staticClass:"col-12 col-md-4 mb-4 mb-md-0"},[r("div",{staticClass:"w-75 mx-auto"},[r("feather-icon",{attrs:{icon:"AwardIcon",size:"35"}}),e._v(" "),r("h4",{staticClass:"mt-2 mb-1"},[e._v("\n          100% Original\n        ")]),e._v(" "),r("p",{staticClass:"card-text"},[e._v("\n          Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah.\n        ")])],1)]),e._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-4 mb-md-0"},[r("div",{staticClass:"w-75 mx-auto"},[r("feather-icon",{attrs:{icon:"ClockIcon",size:"35"}}),e._v(" "),r("h4",{staticClass:"mt-2 mb-1"},[e._v("\n          10 Day Replacement\n        ")]),e._v(" "),r("p",{staticClass:"card-text"},[e._v("\n          Marshmallow biscuit donut dragée fruitcake. Jujubes wafer cupcake.\n        ")])],1)]),e._v(" "),r("div",{staticClass:"col-12 col-md-4 mb-4 mb-md-0"},[r("div",{staticClass:"w-75 mx-auto"},[r("feather-icon",{attrs:{icon:"ShieldIcon",size:"35"}}),e._v(" "),r("h4",{staticClass:"mt-2 mb-1"},[e._v("\n          1 Year Warranty\n        ")]),e._v(" "),r("p",{staticClass:"card-text"},[e._v("\n          Cotton candy gingerbread cake I love sugar plum I love sweet croissant.\n        ")])],1)])])])}),[],!1,null,null,null).exports,k=r(42),C={components:{BCardBody:s.a,BCardText:d.a,BImg:l.a,BLink:m.a,Swiper:k.Swiper,SwiperSlide:k.SwiperSlide},setup:function(){return{swiperOptions:{slidesPerView:5,spaceBetween:55,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1600:{slidesPerView:4,spaceBetween:55},1300:{slidesPerView:3,spaceBetween:55},768:{slidesPerView:2,spaceBetween:55},320:{slidesPerView:1,spaceBetween:55}}},relatedProducts:[{name:"Apple Watch Series 6",brand:"Apple",price:399.98,rating:4,image:r(971)},{name:"Apple MacBook Pro - Silver",brand:"Apple",price:2449.49,rating:2,image:r(972)},{name:"Apple HomePod (Space Grey)",brand:"Apple",price:229.29,rating:3,image:r(973)},{name:"Magic Mouse 2 - Black",brand:"Apple",price:90.98,rating:5,image:r(974)},{name:"iPhone 12 Pro",brand:"Apple",price:1559.99,rating:4,image:r(975)}]}}},y=(r(976),Object(h.a)(C,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-body",[r("div",{staticClass:"mt-4 mb-2 text-center"},[r("h4",[e._v("Related Products")]),e._v(" "),r("b-card-text",[e._v("People also search for this items")])],1),e._v(" "),r("swiper",{staticClass:"swiper-responsive-breakpoints px-4 py-2",attrs:{options:e.swiperOptions}},[e._l(e.relatedProducts,(function(t,i){return r("swiper-slide",{key:i},[r("b-link",[r("div",{staticClass:"item-heading"},[r("h5",{staticClass:"text-truncate mb-0"},[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),r("small",{staticClass:"text-body"},[e._v("by "+e._s(t.brand))])]),e._v(" "),r("div",{staticClass:"img-container w-50 mx-auto py-75"},[r("b-img",{attrs:{src:t.image,fluid:""}})],1),e._v(" "),r("div",{staticClass:"item-meta"},[r("ul",{staticClass:"unstyled-list list-inline mb-25"},e._l(5,(function(e){return r("li",{key:e,staticClass:"ratings-list-item"},[r("feather-icon",{staticClass:"mr-25",class:[{"fill-current":e<=t.rating},e<=t.rating?"text-warning":"text-muted"],attrs:{icon:"StarIcon",size:"18"}})],1)})),0),e._v(" "),r("p",{staticClass:"card-text text-primary mb-0"},[e._v("\n            $"+e._s(t.price)+"\n          ")])])])],1)})),e._v(" "),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}),e._v(" "),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"})],2)],1)}),[],!1,null,null,null).exports),_=r(144),I={directives:{Ripple:g.a},components:{BCard:n.a,BCardBody:s.a,BRow:c.a,BCol:p.a,BImg:l.a,BCardText:d.a,BLink:m.a,BButton:u.a,BDropdown:w.a,BDropdownItem:b.a,BAlert:f.a,ECommerceProductDetailsItemFeatures:v,ECommerceProductDetailsRelatedProducts:y},setup:function(){var e,t,r=Object(_.b)(),n=r.handleCartActionClick,s=r.toggleProductInWishlist,c=Object(a.ref)(null),p=Object(a.ref)(null);return e=Object(i.d)().route.value.params.slug,t=e.substring(e.lastIndexOf("-")+1),o.a.dispatch("app-ecommerce/fetchProduct",{productId:t}).then((function(e){c.value=e.data.product})).catch((function(e){404===e.response.status&&(c.value=void 0)})),{product:c,selectedColor:p,handleCartActionClick:n,toggleProductInWishlist:s}}},E=(r(979),Object(h.a)(I,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"app-ecommerce-details"},[r("b-alert",{attrs:{variant:"danger",show:void 0===e.product}},[r("h4",{staticClass:"alert-heading"},[e._v("\n      Error fetching product data\n    ")]),e._v(" "),r("div",{staticClass:"alert-body"},[e._v("\n      No item found with this item slug. Check\n      "),r("b-link",{staticClass:"alert-link",attrs:{to:{name:"apps-e-commerce-shop"}}},[e._v("\n        Shop\n      ")]),e._v("\n      for other items.\n    ")],1)]),e._v(" "),e.product?r("b-card",{attrs:{"no-body":""}},[r("b-card-body",[r("b-row",{staticClass:"my-2"},[r("b-col",{staticClass:"d-flex align-items-center justify-content-center mb-2 mb-md-0",attrs:{cols:"12",md:"5"}},[r("div",{staticClass:"d-flex align-items-center justify-content-center"},[r("b-img",{staticClass:"product-img",attrs:{src:e.product.image,alt:"Image of "+e.product.name,fluid:""}})],1)]),e._v(" "),r("b-col",{attrs:{cols:"12",md:"7"}},[r("h4",[e._v(e._s(e.product.name))]),e._v(" "),r("b-card-text",{staticClass:"item-company mb-0"},[r("span",[e._v("by")]),e._v(" "),r("b-link",{staticClass:"company-name"},[e._v("\n              "+e._s(e.product.brand)+"\n            ")])],1),e._v(" "),r("div",{staticClass:"ecommerce-details-price d-flex flex-wrap mt-1"},[r("h4",{staticClass:"item-price mr-1"},[e._v("\n              $"+e._s(e.product.price)+"\n            ")]),e._v(" "),r("ul",{staticClass:"unstyled-list list-inline pl-1 border-left"},e._l(5,(function(t){return r("li",{key:t,staticClass:"ratings-list-item mr-25"},[r("feather-icon",{class:[{"fill-current":t<=e.product.rating},t<=e.product.rating?"text-warning":"text-muted"],attrs:{icon:"StarIcon",size:"18"}})],1)})),0)]),e._v(" "),r("b-card-text",[e._v("Available - "),r("span",{staticClass:"text-success"},[e._v("In stock")])]),e._v(" "),r("b-card-text",[e._v(e._s(e.product.description))]),e._v(" "),r("ul",{staticClass:"product-features list-unstyled"},[e.product.hasFreeShipping?r("li",[r("feather-icon",{attrs:{icon:"ShoppingCartIcon"}}),e._v(" "),r("span",[e._v("Free Shipping")])],1):e._e(),e._v(" "),r("li",[r("feather-icon",{attrs:{icon:"DollarSignIcon"}}),e._v(" "),r("span",[e._v("EMI options available")])],1)]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"product-color-options"},[r("h6",[e._v("Colors")]),e._v(" "),r("ul",{staticClass:"list-unstyled mb-0"},e._l(e.product.colorOptions,(function(t){return r("li",{key:t,staticClass:"d-inline-block",class:{selected:e.selectedColor===t},on:{click:function(r){e.selectedColor=t}}},[r("div",{staticClass:"color-option",class:"b-"+t},[r("div",{staticClass:"filloption",class:"bg-"+t})])])})),0)]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"d-flex flex-column flex-sm-row pt-1"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0",attrs:{variant:"primary"},on:{click:function(t){return e.handleCartActionClick(e.product)}}},[r("feather-icon",{staticClass:"mr-50",attrs:{icon:"ShoppingCartIcon"}}),e._v(" "),r("span",[e._v(e._s(e.product.isInCart?"View In Cart":"Add to Cart"))])],1),e._v(" "),r("b-button",{staticClass:"btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0",attrs:{variant:"outline-secondary"},on:{click:function(t){return e.toggleProductInWishlist(e.product)}}},[r("feather-icon",{staticClass:"mr-50",class:{"text-danger":e.product.isInWishlist},attrs:{icon:"HeartIcon"}}),e._v(" "),r("span",[e._v("Wishlist")])],1),e._v(" "),r("b-dropdown",{staticClass:"btn-share",attrs:{variant:"outline-secondary","no-caret":"","toggle-class":"btn-icon",right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("feather-icon",{attrs:{icon:"Share2Icon"}})]},proxy:!0}],null,!1,4254340102)},[e._v(" "),e._l(["FacebookIcon","TwitterIcon","YoutubeIcon","InstagramIcon"],(function(e){return r("b-dropdown-item",{key:e},[r("feather-icon",{attrs:{icon:e}})],1)}))],2)],1)],1)],1)],1),e._v(" "),r("e-commerce-product-details-item-features"),e._v(" "),r("e-commerce-product-details-related-products")],1):e._e()],1)}),[],!1,null,null,null));t.default=E.exports},144:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var i=r(13),o=r(90),a=function(){return{addProductInWishlist:function(e){return i.a.dispatch("app-ecommerce/addProductInWishlist",{productId:e})},removeProductFromWishlist:function(e){return i.a.dispatch("app-ecommerce/removeProductFromWishlist",{productId:e})},addProductInCart:function(e){return i.a.dispatch("app-ecommerce/addProductInCart",{productId:e})},removeProductFromCart:function(e){return i.a.dispatch("app-ecommerce/removeProductFromCart",{productId:e})}}},n=function(){var e=Object(o.d)().router;return{toggleProductInWishlist:function(e){var t=a(),r=t.addProductInWishlist,i=t.removeProductFromWishlist;e.isInWishlist?i(e.id).then((function(){e.isInWishlist=!1})):r(e.id).then((function(){e.isInWishlist=!0}))},handleCartActionClick:function(t){var r=a().addProductInCart;t.isInCart?e.push({name:"apps-e-commerce-checkout"}):r(t.id).then((function(){t.isInCart=!0,i.a.commit("app-ecommerce/UPDATE_CART_ITEMS_COUNT",i.a.state["app-ecommerce"].cartItemsCount+1)}))},handleWishlistCartActionClick:function(t,r){var o=a(),n=o.addProductInCart,s=o.removeProductFromWishlist;t.isInCart?e.push({name:"apps-e-commerce-checkout"}):n(t.id).then((function(){t.isInCart=!0,s(t.id),i.a.commit("app-ecommerce/UPDATE_CART_ITEMS_COUNT",i.a.state["app-ecommerce"].cartItemsCount+1)})).then((function(){t.isInWishlist=!1,r(t)}))}}}},484:function(e,t,r){var i=r(977);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(23)(i,o);i.locals&&(e.exports=i.locals)},485:function(e,t,r){var i=r(980);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(23)(i,o);i.locals&&(e.exports=i.locals)},90:function(e,t,r){"use strict";r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return d})),r.d(t,"d",(function(){return m}));var i=r(74),o=r(8);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e){return"object"===c(e)&&null!==e},l=function(e){var t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()},d=function(e){return i.a.resolve(e).route.path===i.a.currentRoute.path},m=function(){var e=Object(o.getCurrentInstance)().proxy,t=Object(o.reactive)({route:e.$route});return Object(o.watch)((function(){return e.$route}),(function(e){t.route=e})),n(n({},Object(o.toRefs)(t)),{},{router:e.$router})}},971:function(e,t){e.exports="/images/elements/apple-watch.png"},972:function(e,t){e.exports="/images/elements/macbook-pro.png"},973:function(e,t){e.exports="/images/elements/homepod.png"},974:function(e,t){e.exports="/images/elements/magic-mouse.png"},975:function(e,t){e.exports="/images/elements/iphone-x.png"},976:function(e,t,r){"use strict";r(484)},977:function(e,t,r){(t=e.exports=r(21)(!1)).i(r(978),""),t.push([e.i,"[dir=ltr] .swiper-container .swiper-shadow{-webkit-box-shadow:2px 8px 10px 0 rgba(25,42,70,.13)!important;box-shadow:2px 8px 10px 0 rgba(25,42,70,.13)!important}[dir=rtl] .swiper-container .swiper-shadow{-webkit-box-shadow:-2px 8px 10px 0 rgba(25,42,70,.13)!important;box-shadow:-2px 8px 10px 0 rgba(25,42,70,.13)!important}.swiper-pagination .swiper-pagination-bullet:focus{outline:none}[dir] .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active,[dir] .swiper-pagination.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background-color:#7367f0}.swiper-centered-slides.swiper-container .swiper-slide{font-weight:500;height:auto;width:auto!important}[dir] .swiper-centered-slides.swiper-container .swiper-slide{text-align:center;background-color:#fff;padding:2rem 5.5rem;cursor:pointer}[dir] .swiper-centered-slides.swiper-container .swiper-slide.swiper-slide-active{border:2px solid #7367f0}.swiper-centered-slides.swiper-container .swiper-slide.swiper-slide-active i,.swiper-centered-slides.swiper-container .swiper-slide.swiper-slide-active svg{color:#7367f0}[dir] .swiper-centered-slides .swiper-button-next:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E\")}[dir] .swiper-centered-slides .swiper-button-prev:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpath d='M15 18l-6-6 6-6'/%3E%3C/svg%3E\")}.swiper-centered-slides .swiper-button-next,.swiper-centered-slides .swiper-button-prev{height:40px!important;width:40px!important}.swiper-centered-slides .swiper-button-next:after,.swiper-centered-slides .swiper-button-prev:after{-webkit-box-shadow:0 2px 4px 0 rgba(34,41,47,.5)!important;height:40px!important;width:40px!important}[dir] .swiper-centered-slides .swiper-button-next:after,[dir] .swiper-centered-slides .swiper-button-prev:after{border-radius:50%;background-color:#7367f0;-webkit-box-shadow:0 2px 4px 0 rgba(34,41,47,.5)!important;box-shadow:0 2px 4px 0 rgba(34,41,47,.5)!important;background-size:24px!important}[dir] .swiper-centered-slides.swiper-container-rtl .swiper-button-next:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpath d='M15 18l-6-6 6-6'/%3E%3C/svg%3E\")}[dir] .swiper-centered-slides.swiper-container-rtl .swiper-button-prev:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E\")}.swiper-centered-slides-2.swiper-container .swiper-slide{font-weight:500;height:auto;width:auto!important}[dir] .swiper-centered-slides-2.swiper-container .swiper-slide{background-color:#f2f4f4;cursor:pointer}.swiper-centered-slides-2.swiper-container .swiper-slide.swiper-slide-active{color:#fff;-webkit-box-shadow:0 3px 6px 0 rgba(115,103,240,.5)!important}[dir] .swiper-centered-slides-2.swiper-container .swiper-slide.swiper-slide-active{background-color:#7367f0!important;-webkit-box-shadow:0 3px 6px 0 rgba(115,103,240,.5)!important;box-shadow:0 3px 6px 0 rgba(115,103,240,.5)!important}.swiper-cube-effect.swiper-container{width:300px}[dir] .swiper-cube-effect.swiper-container{margin-top:-12px}[dir=ltr] .swiper-cube-effect.swiper-container{left:50%;margin-left:-150px}[dir=rtl] .swiper-cube-effect.swiper-container{right:50%;margin-right:-150px}.swiper-coverflow.swiper-container .swiper-slide{width:300px}[dir] .gallery-thumbs{padding:10px 0;background:#22292f}.gallery-thumbs .swiper-slide{opacity:.4}.gallery-thumbs .swiper-slide-thumb-active{opacity:1}[dir] .swiper-parallax .swiper-slide{padding:2.67rem 4rem}.swiper-parallax .swiper-slide .title{font-size:1.07rem}[dir] .swiper-parallax .swiper-slide .title{padding:.5rem 0}.swiper-parallax .swiper-slide .text{font-size:1rem}.swiper-parallax .parallax-bg{position:absolute;width:130%}.swiper-virtual.swiper-container{height:300px}.swiper-virtual.swiper-container .swiper-slide{font-size:1.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}[dir] .swiper-virtual.swiper-container .swiper-slide{background-color:#eee}.swiper-button-next,.swiper-button-prev,.swiper-container-rtl .swiper-button-next,.swiper-container-rtl .swiper-button-prev{color:#fff;width:38px;font-size:2rem}[dir] .swiper-button-next,[dir] .swiper-button-prev,[dir] .swiper-container-rtl .swiper-button-next,[dir] .swiper-container-rtl .swiper-button-prev{background-image:none}.swiper-button-next:focus,.swiper-button-prev:focus,.swiper-container-rtl .swiper-button-next:focus,.swiper-container-rtl .swiper-button-prev:focus{outline:none}.swiper-button-prev:after{color:#6e6b7b;width:44px;height:44px;content:\"\"}[dir] .swiper-button-prev:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpath d='M15 18l-6-6 6-6'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50%;background-size:44px}[dir=ltr] .swiper-button-prev:after{padding-right:1px}[dir=rtl] .swiper-button-prev:after{padding-left:1px}.swiper-button-next:after{color:#6e6b7b;width:44px;height:44px;content:\"\"}[dir] .swiper-button-next:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50%;background-size:44px}[dir=ltr] .swiper-button-next:after{padding-right:2px}[dir=rtl] .swiper-button-next:after{padding-left:2px}.swiper-container-rtl .swiper-button-prev:after{color:#6e6b7b;width:44px;height:44px;content:\"\"}[dir] .swiper-container-rtl .swiper-button-prev:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50%;background-size:44px}.swiper-container-rtl .swiper-button-next:after{color:#6e6b7b;width:44px;height:44px;content:\"\"}[dir] .swiper-container-rtl .swiper-button-next:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpath d='M15 18l-6-6 6-6'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50%;background-size:44px}@media only screen and (max-width:768px){.swiper-button-prev{font-size:1.286rem;top:55%}.swiper-button-prev:after{height:28px;width:28px}[dir] .swiper-button-prev:after{background-size:24px}.swiper-button-next{font-size:1.286rem;top:55%}[dir] .swiper-button-next:after{background-size:24px}.swiper-centered-slides .swiper-button-next:after,.swiper-centered-slides .swiper-button-prev:after{height:28px;width:28px}[dir] .swiper-centered-slides .swiper-button-next:after,[dir] .swiper-centered-slides .swiper-button-prev:after{background-size:18px}[dir] .swiper-parallax .swiper-slide{padding:1rem 1.2rem}.swiper-parallax img{height:100%!important}}@media only screen and (max-width:576px){[dir] .swiper-centered-slides.swiper-container .swiper-slide{padding:1.6rem 2.5rem}.swiper-centered-slides.swiper-container .swiper-slide i,.swiper-centered-slides.swiper-container .swiper-slide svg{height:1.07rem!important;width:1.07rem!important;font-size:1.07rem!important}.swiper-cube-effect.swiper-container{width:150px}[dir=ltr] .swiper-cube-effect.swiper-container{left:70%}[dir=rtl] .swiper-cube-effect.swiper-container{right:70%}[dir] .swiper-parallax .swiper-slide{padding:1rem 1.3rem}.swiper-virtual.swiper-container .swiper-slide{font-size:1rem}}[dir] .dark-layout .swiper-container:not(.swiper-parallax) .swiper-slide{background-color:#161d31}[dir] .dark-layout .swiper-container.swiper-centered-slides .swiper-slide{background-color:#283046}.dark-layout .swiper-container.swiper-parallax .swiper-slide *{color:#6e6b7b}.swiper-slide.swiper-slide-active{opacity:1}",""])},979:function(e,t,r){"use strict";r(485)},980:function(e,t,r){(e.exports=r(21)(!1)).push([e.i,".ecommerce-application .app-ecommerce-details .product-img{width:600px}.ecommerce-application .app-ecommerce-details .ratings-list-item i,.ecommerce-application .app-ecommerce-details .ratings-list-item svg{font-size:1.286rem;height:1.286rem;width:1.286rem}.ecommerce-application .app-ecommerce-details .filled-star{fill:#ff9f43;stroke:#ff9f43;color:#ff9f43}.ecommerce-application .app-ecommerce-details .unfilled-star{stroke:#babfc7;color:#babfc7}.ecommerce-application .app-ecommerce-details .item-price{color:#7367f0}.ecommerce-application .app-ecommerce-details .item-company{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-weight:400;font-size:.875rem}.ecommerce-application .app-ecommerce-details .item-company .company-name{font-weight:600}[dir=ltr] .ecommerce-application .app-ecommerce-details .item-company .company-name{margin-left:.25rem}[dir=rtl] .ecommerce-application .app-ecommerce-details .item-company .company-name{margin-right:.25rem}[dir] .ecommerce-application .app-ecommerce-details .product-features{margin-top:1.5rem;margin-bottom:1.5rem}.ecommerce-application .app-ecommerce-details .product-features li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}[dir] .ecommerce-application .app-ecommerce-details .product-features li{margin-bottom:1rem}.ecommerce-application .app-ecommerce-details .product-features li i,.ecommerce-application .app-ecommerce-details .product-features li svg{height:1.4rem;width:1.4rem;font-size:1.4rem}[dir=ltr] .ecommerce-application .app-ecommerce-details .product-features li i,[dir=ltr] .ecommerce-application .app-ecommerce-details .product-features li svg{margin-right:.75rem}[dir=rtl] .ecommerce-application .app-ecommerce-details .product-features li i,[dir=rtl] .ecommerce-application .app-ecommerce-details .product-features li svg{margin-left:.75rem}.ecommerce-application .app-ecommerce-details .product-features li span{font-weight:600}[dir] .ecommerce-application .app-ecommerce-details .product-color-options{margin-top:1.5rem;margin-bottom:1.2rem}.ecommerce-application .app-ecommerce-details .btn-wishlist .text-danger{color:#ea5455;fill:#ea5455}.ecommerce-application .app-ecommerce-details .btn-share .btn-icon~.dropdown-menu{min-width:3rem}[dir] .ecommerce-application .app-ecommerce-details .item-features{background-color:#f8f8f8;padding-top:5.357rem;padding-bottom:5.357rem}.ecommerce-application .app-ecommerce-details .item-features i,.ecommerce-application .app-ecommerce-details .item-features svg{font-size:2.5rem;height:2.5rem;width:2.5rem;color:#7367f0}[dir] .ecommerce-application .swiper-responsive-breakpoints.swiper-container .swiper-slide{text-align:center;background-color:#f8f8f8;padding:1.5rem 3rem;border-radius:.428rem}.ecommerce-application .swiper-responsive-breakpoints.swiper-container .swiper-slide .img-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:250px}.ecommerce-application .swiper-button-next,.ecommerce-application .swiper-button-prev,.ecommerce-application .swiper-container-rtl .swiper-button-next,.ecommerce-application .swiper-container-rtl .swiper-button-prev{width:35px;font-size:2rem}[dir] .ecommerce-application .swiper-button-next,[dir] .ecommerce-application .swiper-button-prev,[dir] .ecommerce-application .swiper-container-rtl .swiper-button-next,[dir] .ecommerce-application .swiper-container-rtl .swiper-button-prev{background-image:none}.ecommerce-application .swiper-button-next:focus,.ecommerce-application .swiper-button-prev:focus,.ecommerce-application .swiper-container-rtl .swiper-button-next:focus,.ecommerce-application .swiper-container-rtl .swiper-button-prev:focus{outline:none}[dir=ltr] .ecommerce-application .swiper-button-prev{left:0}[dir=rtl] .ecommerce-application .swiper-button-prev{right:0}.ecommerce-application .swiper-button-prev:after{color:#6e6b7b;width:44px;height:44px;content:\"\"}[dir] .ecommerce-application .swiper-button-prev:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpath d='M15 18l-6-6 6-6'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50%;background-size:44px}[dir=ltr] .ecommerce-application .swiper-button-next{right:0}[dir=rtl] .ecommerce-application .swiper-button-next{left:0}.ecommerce-application .swiper-button-next:after{color:#6e6b7b;width:44px;height:44px;content:\"\"}[dir] .ecommerce-application .swiper-button-next:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50%;background-size:44px}.ecommerce-application .swiper-container-rtl .swiper-button-prev:after{color:#6e6b7b;width:44px;height:44px;content:\"\"}[dir] .ecommerce-application .swiper-container-rtl .swiper-button-prev:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50%;background-size:44px}.ecommerce-application .swiper-container-rtl .swiper-button-next:after{color:#6e6b7b;width:44px;height:44px;content:\"\"}[dir] .ecommerce-application .swiper-container-rtl .swiper-button-next:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpath d='M15 18l-6-6 6-6'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50%;background-size:44px}.ecommerce-application .product-color-options .color-option{position:relative}[dir] .ecommerce-application .product-color-options .color-option{border:1px solid transparent;border-radius:50%;cursor:pointer;padding:3px}.ecommerce-application .product-color-options .color-option .filloption{height:18px;width:18px}[dir] .ecommerce-application .product-color-options .color-option .filloption{border-radius:50%}[dir] .ecommerce-application .product-color-options .selected .b-primary{border-color:#7367f0}.ecommerce-application .product-color-options .selected .b-primary .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(115,103,240,.4)}[dir] .ecommerce-application .product-color-options .selected .b-primary .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(115,103,240,.4);box-shadow:0 2px 4px 0 rgba(115,103,240,.4)}[dir] .ecommerce-application .product-color-options .selected .b-success{border-color:#28c76f}.ecommerce-application .product-color-options .selected .b-success .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(40,199,111,.4)}[dir] .ecommerce-application .product-color-options .selected .b-success .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(40,199,111,.4);box-shadow:0 2px 4px 0 rgba(40,199,111,.4)}[dir] .ecommerce-application .product-color-options .selected .b-danger{border-color:#ea5455}.ecommerce-application .product-color-options .selected .b-danger .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(234,84,85,.4)}[dir] .ecommerce-application .product-color-options .selected .b-danger .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(234,84,85,.4);box-shadow:0 2px 4px 0 rgba(234,84,85,.4)}[dir] .ecommerce-application .product-color-options .selected .b-warning{border-color:#ff9f43}.ecommerce-application .product-color-options .selected .b-warning .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(255,159,67,.4)}[dir] .ecommerce-application .product-color-options .selected .b-warning .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(255,159,67,.4);box-shadow:0 2px 4px 0 rgba(255,159,67,.4)}[dir] .ecommerce-application .product-color-options .selected .b-info{border-color:#00cfe8}.ecommerce-application .product-color-options .selected .b-info .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(0,207,232,.4)}[dir] .ecommerce-application .product-color-options .selected .b-info .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(0,207,232,.4);box-shadow:0 2px 4px 0 rgba(0,207,232,.4)}.ecommerce-application .product-color-options .b-primary .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(115,103,240,.4)}[dir] .ecommerce-application .product-color-options .b-primary .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(115,103,240,.4);box-shadow:0 2px 4px 0 rgba(115,103,240,.4)}.ecommerce-application .product-color-options .b-success .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(40,199,111,.4)}[dir] .ecommerce-application .product-color-options .b-success .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(40,199,111,.4);box-shadow:0 2px 4px 0 rgba(40,199,111,.4)}.ecommerce-application .product-color-options .b-danger .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(234,84,85,.4)}[dir] .ecommerce-application .product-color-options .b-danger .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(234,84,85,.4);box-shadow:0 2px 4px 0 rgba(234,84,85,.4)}.ecommerce-application .product-color-options .b-warning .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(255,159,67,.4)}[dir] .ecommerce-application .product-color-options .b-warning .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(255,159,67,.4);box-shadow:0 2px 4px 0 rgba(255,159,67,.4)}.ecommerce-application .product-color-options .b-info .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(0,207,232,.4)}[dir] .ecommerce-application .product-color-options .b-info .filloption{-webkit-box-shadow:0 2px 4px 0 rgba(0,207,232,.4);box-shadow:0 2px 4px 0 rgba(0,207,232,.4)}@media (max-width:767.98px){[dir] .ecommerce-application .swiper-responsive-breakpoints.swiper-container .swiper-slide{padding:1rem}}@media (max-width:767.98px){.ecommerce-application .app-ecommerce-details .ratings-list-item i,.ecommerce-application .app-ecommerce-details .ratings-list-item svg{font-size:1rem;height:1rem;width:1rem}}",""])}}]);