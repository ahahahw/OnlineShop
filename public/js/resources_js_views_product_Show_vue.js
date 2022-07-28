"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_product_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Show.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Show.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Show',
  data: function data() {
    return {
      product: []
    };
  },
  mounted: function mounted() {
    this.getProduct();
  },
  methods: {
    getProduct: function getProduct() {
      var _this = this;

      this.$forceUpdate();
      this.axios.get("http://127.0.0.1:8000/api/products/".concat(this.$route.params.id)).then(function (res) {
        console.log(res);
        _this.product = res.data.data;
        console.log(_this.product);
      })["finally"](function (res) {
        $(document).trigger('changed');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Show.vue?vue&type=template&id=049a6388":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Show.vue?vue&type=template&id=049a6388 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mb-5"
}, null, -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "mt-5"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"shop-details-breadcrumb wow fadeInUp animated overflow-hidden mt-5\"><div class=\"container\"><div class=\"row\"><div class=\"col-xl-12\"><div class=\"shop-details-inner\"><ul class=\"shop-details-menu\"><li><a href=\"index.html\">Home</a></li><li class=\"active\">Shop Details 2</li></ul></div></div></div></div></div>", 1);

var _hoisted_4 = {
  "class": "shop-details-top"
};
var _hoisted_5 = {
  "class": "container"
};
var _hoisted_6 = {
  "class": "row mt--30"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xl-6 col-lg-6 mt-30 wow fadeInUp animated\"><div class=\"single-product-box two\"><div class=\"product-slicknav single-product-two-nav slider-nav\"><div><span class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img1.jpg\" alt=\"\"></span></div><div><span class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img2.jpg\" alt=\"\"></span></div><div><span class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img8.jpg\" alt=\"\"></span></div><div><span class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img4.jpg\" alt=\"\"></span></div><div><span class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img5.jpg\" alt=\"\"></span></div><div><span class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img6.jpg\" alt=\"\"></span></div><div><span class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img7.jpg\" alt=\"\"></span></div></div><div class=\"big-product single-product-two slider-for\"><div><div class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img1.jpg\" alt=\"\"><div class=\"ptag\"><span class=\"one\">40% off </span></div><a href=\"#0\" class=\"love\"><i class=\"flaticon-like\"></i></a></div></div><div><div class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img2.jpg\" alt=\"\"><div class=\"ptag\"><span class=\"one\">40% off </span></div><a href=\"#0\" class=\"love\"><i class=\"flaticon-like\"></i></a></div></div><div><div class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img8.jpg\" alt=\"\"><div class=\"ptag\"><span class=\"one\">40% off </span></div><a href=\"#0\" class=\"love\"><i class=\"flaticon-like\"></i></a></div></div><div><div class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img4.jpg\" alt=\"\"><div class=\"ptag\"><span class=\"one\">40% off </span></div><a href=\"#0\" class=\"love\"><i class=\"flaticon-like\"></i></a></div></div><div><div class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img5.jpg\" alt=\"\"><div class=\"ptag\"><span class=\"one\">40% off </span></div><a href=\"#0\" class=\"love\"><i class=\"flaticon-like\"></i></a></div></div><div><div class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img6.jpg\" alt=\"\"><div class=\"ptag\"><span class=\"one\">40% off </span></div><a href=\"#0\" class=\"love\"><i class=\"flaticon-like\"></i></a></div></div><div><div class=\"single-item\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img7.jpg\" alt=\"\"><div class=\"ptag\"><span class=\"one\">40% off </span></div><a href=\"#0\" class=\"love\"><i class=\"flaticon-like\"></i></a></div></div></div></div></div>", 1);

var _hoisted_8 = {
  "class": "col-xl-6 col-lg-6 mt-30 wow fadeInUp animated"
};
var _hoisted_9 = {
  "class": "shop-details-top-right two"
};
var _hoisted_10 = {
  "class": "shop-details-top-right-content-box"
};
var _hoisted_11 = {
  "class": "shop-details-top-title m-0"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"shop-details-top-review-box\"><div class=\"shop-details-top-review\"><ul><li><i class=\"flaticon-star-1\"></i></li><li><i class=\"flaticon-star-1\"></i></li><li><i class=\"flaticon-star-1\"></i></li><li><i class=\"flaticon-star-1\"></i></li><li><i class=\"flaticon-star-1\"></i></li></ul><p>(2 Reviews)</p></div></div><ul class=\"shop-details-top-info\"></ul>", 2);

var _hoisted_14 = {
  "class": "shop-details-top-price-box d-flex align-items-center flex-wrap"
};
var _hoisted_15 = {
  "class": "pe-1"
};
var _hoisted_16 = {
  "class": "shop-details-top-color-sky-box"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Color", -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "varients"
};
var _hoisted_19 = ["src"];

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<p class=\"shop-details-top-product-sale\"> 20 Products sold in last 12 hours </p><ul class=\"shop-details-top-ask-question\"><li><a href=\"#0\"><div class=\"icon\"><i class=\"flaticon-left-and-right-arrows\"></i></div><div class=\"text\"><p>Add to Compare</p></div></a></li><li><a href=\"#0\"><div class=\"icon\"><i class=\"flaticon-chat-bubble\"></i></div><div class=\"text\"><p>Ask Question</p></div></a></li></ul><div class=\"product-quantity m-0\"><h4>Quantity</h4><div class=\"product-quantity-box d-flex align-items-center flex-wrap\"><div class=\"qty mr-2\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"> <span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div></div><div class=\"product-quantity-check\"><i class=\"flaticon-select\"></i><p>Only 10 Left ! </p></div></div></div><p class=\"people-searce\"> There are <span>50</span> peoples are cureently looking at this product </p><div class=\"shop-details-top-cart-box-btn\"><button class=\"btn--primary style2\" type=\"submit\">Add to Cart</button></div><div class=\"shop-details-top-buy-now-btn\"><a href=\"cart.html\" class=\"btn--primary\">Buy It Now</a></div><div class=\"shop-details-top-social-box\"><p>Share:</p><ul class=\"ps-1 social_link d-flex align-items-center\"><li><a href=\"https://www.facebook.com/\" target=\"_blank\" class=\"active\"><i class=\"flaticon-facebook-app-symbol\"></i></a></li><li><a href=\"https://www.youtube.com/\" target=\"_blank\"><i class=\"flaticon-youtube\"></i></a></li><li><a href=\"https://twitter.com/\" target=\"_blank\"><i class=\"flaticon-twitter\"></i></a></li><li><a href=\"https://www.instagram.com/\" target=\"_blank\"><i class=\"flaticon-instagram\"></i></a></li></ul></div><div class=\"shop-details-top-safe-checkout\"><h4 class=\"text-center\">Guranteed Safe Checkout</h4><ul class=\"shop-details-top-safe-checkout-list\"><li><div class=\"shop-details-top-safe-checkout-img\"><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/shop/shop-details-top-safe-checkout-img-3.jpg\" alt=\"\"></a></div></li><li><div class=\"shop-details-top-safe-checkout-img\"><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/shop/shop-details-top-safe-checkout-img-4.jpg\" alt=\"\"></a></div></li><li><div class=\"shop-details-top-safe-checkout-img\"><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/shop/shop-details-top-safe-checkout-img-5.jpg\" alt=\"\"></a></div></li><li><div class=\"shop-details-top-safe-checkout-img\"><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/shop/shop-details-top-safe-checkout-img-6.jpg\" alt=\"\"></a></div></li><li><div class=\"shop-details-top-safe-checkout-img\"><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/shop/shop-details-top-safe-checkout-img-7.jpg\" alt=\"\"></a></div></li></ul></div>", 8);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
  "class": "product pt-60 pb-120 wow fadeInUp overflow-hidden"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12 wow fadeInUp animated"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav product-details-nav nav-two nav-pills justify-content-center",
  id: "pills-tab-two",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link active",
  id: "pills-description-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-description",
  type: "button",
  role: "tab",
  "aria-controls": "pills-description",
  "aria-selected": "true"
}, " Description ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "pills-additional-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-additional",
  type: "button",
  role: "tab",
  "aria-controls": "pills-additional",
  "aria-selected": "false"
}, " Additional ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "pills-sizechart-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-sizechart",
  type: "button",
  role: "tab",
  "aria-controls": "pills-sizechart",
  "aria-selected": "false"
}, " Size Chart ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "nav-item",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "nav-link",
  id: "pills-review-tab",
  "data-bs-toggle": "pill",
  "data-bs-target": "#pills-review",
  type: "button",
  role: "tab",
  "aria-controls": "pills-review",
  "aria-selected": "false"
}, " Review ")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row wow fadeInUp animated"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content",
  id: "pills-tabContent-two"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade show active",
  id: "pills-description",
  role: "tabpanel",
  "aria-labelledby": "pills-description-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-drescription"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, " Product Details:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Assertively conceptualize parallel process improvements through user friendly colighue to action items. Interactively antidos cultivate interdependent customer service without clicks-and-mortar e-services. Proactively cultivate go forward testing procedures with accurate quality vectors. Globally aiembrace ethical functionalities via empowered scenarios. Phosfluorescently restore highly efficient opportunities and client-focused infomediaries. Enthusiastically transition multidisciplinary outside the box thinking without premium networks. Progressive supply clicks-and-mortar human capital through enterprise-wide web services. Objectivey bester provide access to extensible processes better than more qulification dumber there stoaling through 24/365 solutions. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row align-items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-4 mt-30"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "thumb"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "http://localhost:5173/src/assets/images/shop/shop-details-tab-content-specification-img-1.jpg",
  alt: ""
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-8 mt-30"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Specification:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "drescription-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 1. Adipiscing hac cubilia, fermentum ipsum auctor parturient tempus lobortis fermentum. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 2. Euismod disagree soler imperdiet vehicula pede eros ipsum cras mi feugiat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 3. Rhoncus consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor turpis. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 4. Consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor turpis. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 5. Consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor ")])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "pills-additional",
  role: "tabpanel",
  "aria-labelledby": "pills-additional-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-drescription"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "pt-0"
}, " Assertively conceptualize parallel process improvements through user friendly colighue to action items. Interactively antidos cultivate interdependent customer service without clicks-and-mortar e-services. Proactively cultivate go forward testing procedures with accurate quality vectors. Globally aiembrace ethical functionalities via empowered scenarios. Phosfluorescently restore highly efficient opportunities and client-focused infomediaries. Enthusiastically transition multidisciplinary outside the box thinking without premium networks. Progressive supply clicks-and-mortar human capital through enterprise-wide web services. Objectivey bester provide access to extensible processes better than more qulification dumber there stoaling through 24/365 solutions. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "drescription-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 1. Adipiscing hac cubilia, fermentum ipsum auctor parturient tempus lobortis fermentum. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 2. Euismod disagree soler imperdiet vehicula pede eros ipsum cras mi feugiat. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 3. Rhoncus consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor turpis. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 4. Consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor turpis. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, " 5. Consequat phasellus donec suspendisse scelerisque facilisis gravida porttitor ")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "pills-sizechart",
  role: "tabpanel",
  "aria-labelledby": "pills-sizechart-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-drescription"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "size-chirt"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Size Guide"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "pt-0"
}, " Assertively conceptualize parallel process improvements through user friendly colighue to action items. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "size-tabble"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Size"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "XXS - XS"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "XS - S"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "S - M"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "M - L"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "L - XL"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "XL - XXL")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "ARGENTINA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "7"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "8"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "9"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "11"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "12")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "BOLIVIA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "8"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "9"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "11"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "12"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "13")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "COLOMBIA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "26"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "28"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "30"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "32"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "34"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "36")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "China"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "34"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "36"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "38"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "40"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "42"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "44")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "MEXICO"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "32"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "34"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "36"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "38"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "40"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "42")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "JAMAICA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "40"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "42"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "44"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "46"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "48"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "50")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "MEXICO"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "32"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "34"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "36"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "38"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "40"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "42")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "Australia"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "6"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "8"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "12"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "14"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "16")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "USA"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "33"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "44"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "55"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "66"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "77"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "88")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "UK"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "6"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "8"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "10"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "12"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "14"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "16")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Pant")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "22-23 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "24-25"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "26-27"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "28-29"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "30-31"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, "32-33")])])])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane fade",
  id: "pills-review",
  role: "tabpanel",
  "aria-labelledby": "pills-review-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "product-drescription"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "review-single pt-0 hed"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "ps-2"
}, "BASED ON 100 REVIEW")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "review-single"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Vary Good quality Theme "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Raul Bates on January 28, 2022")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Assertively conceptualize parallel process improvements through user friendly colighue to action items. Interactively antidos cultivate interdependent customer service without clicks-and-mortar e-services. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#0",
  "class": "right-box"
}, " Report this Comments ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "review-single"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "left"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Amazing Theme "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Kurt Morgan on January 28, 2022")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " Assertively conceptualize parallel process improvements through user friendly colighue to action items. Interactively antidos cultivate interdependent customer service without clicks-and-mortar e-services. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#0",
  "class": "right-box"
}, "Report this Comments ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "review-from-box mt-30"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Write a Review"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  action: "#",
  "class": "review-from"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " RATING "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ratting"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "flaticon-star-1"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name"
}, "NAME"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "name",
  "class": "form-control",
  placeholder: "David Warner"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "number"
}, "Number"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "number",
  "class": "form-control",
  placeholder: "Phone Number"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email"
}, " Email "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "email",
  "class": "form-control",
  placeholder: "support@gmail.com"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "namee"
}, " REVIEW TITLE"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "namee",
  "class": "form-control",
  placeholder: "Give your review title"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "form-group m-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email"
}, "BODY OF REVIEW (1500) "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  placeholder: "Write Your Comments Here"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "btn--primary style2"
}, "Submit Review ")])])])])])])])], -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"video-one pt-120 pb-120 overflow-hidden\"><div class=\"container\"><div class=\"row align-items-center justify-content-between flex-lg-row flex-column-reverse mt--30\"><div class=\"col-lg-6 mt-30 wow fadeInLeft animated\"><!--Start Video One Img--><div class=\"video-one__img\"><div class=\"video-one__img-inner\"><img src=\"http://localhost:5173/src/assets/images/home-two/video-v1-img1.jpg\" alt=\"\"><div class=\"icon wow zoomIn animated\" data-wow-delay=\"300ms\" data-wow-duration=\"1500ms\"><a class=\"video-popup\" title=\"Video Gallery\" href=\"ttps://www.youtube.com/watch?v=4DCTTrGjGU4\"><i class=\"flaticon-play\"></i></a></div></div></div><!--End Video One Img--></div><div class=\"col-lg-6 mt-30\"><!--Start Video One Content--><div class=\"video-one__content\"><div class=\"section-header wow fadeInUp animated\"><p>Our Core Values</p><h2 class=\"t40\">Live Peace, Smooth Comfort Safety Everything</h2></div><div class=\"video-one__content-list pt-2 wow fadeInUp animated\"><ul><li> Super Easy To Maintenance Everything </li><li> Luxurious Living Feeling For All </li><li> Extra Comfort For Body </li><li> More Effective Lifestyle For All </li></ul></div><div class=\"btn-box\"><a href=\"shop-grid.html\" class=\"btn--primary wow fadeInUp animated\">Start Shopping</a></div></div><!--End Video One Content--></div></div></div></section>", 1);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"recent-products pt-120 pb-120 overflow-hidden wow fadeInUp\"><div class=\"container\"><div class=\"row\"><div class=\"col-12 wow fadeInUp animated\"><div class=\"section-head text-center\"><h2>Related Products </h2></div></div></div><div class=\"row mt-30 wow fadeInUp animated\"><div class=\"catagory-slider\"><div class=\"product-grid-two mt-30\"><div class=\"product-grid-two__img\"><a href=\"shop-details-2.html\" class=\"d-block\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img9.jpg\" alt=\"\"></a><div class=\"products-grid-one__badge-box\"><span class=\"badge discount\">Best</span></div><div class=\"product-grid-two__overlay-box\"><div class=\"title\"><h6><a href=\"cart.html\">Add To Cart</a></h6></div><div class=\"icon\"><ul><li><a href=\"#popupl\" class=\"popup_link\"><i class=\"flaticon-eye\"></i></a></li><li><a href=\"wishlist.html\"><i class=\"flaticon-heart\"></i></a></li></ul></div></div></div><div id=\"popupl\" class=\"product-gird__quick-view-popup mfp-hide\"><div class=\"container\"><div class=\"row justify-content-between align-items-center\"><div class=\"col-lg-6\"><div class=\"quick-view__left-content\"><div class=\"tabs\"><div class=\"popup-product-thumb-box\"><ul><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab7111111l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img1.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab8111111l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img2.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab9111111l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img3.jpg\" alt=\"\"></a></li></ul></div><div class=\"popup-product-main-image-box\"><div id=\"tab7111111l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img1.jpg\" alt=\"\"></div></div><div id=\"tab8111111l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img2.jpg\" alt=\"\"></div></div><div id=\"tab9111111l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img3.jpg\" alt=\"\"></div></div> <button class=\"prev\"><i class=\"flaticon-back\"></i></button> <button class=\"next\"><i class=\"flaticon-next\"></i></button></div></div></div></div><div class=\"col-lg-6\"><div class=\"popup-right-content\"><h3>Vintage Table</h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(123)</span></div><p class=\"text\"> Wooden Tables to Brighten Your Dining Room </p><div class=\"price\"><h2> $50 USD <del> $105 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\"><span>Black</span></a></div><div class=\"add-product\"><h6>Qty:</h6><div class=\"button-group\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> <button class=\"btn--primary\"> Add to Cart </button></div></div><div class=\"payment-method\"><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_4.png\" alt=\"\"></a></div></div></div></div></div></div><div class=\"product-grid-two-content text-center\"><span>Modern</span><h5><a href=\"shop-details-2.html\">Vintage Table</a></h5><p><del>$200</del> $159.00</p></div></div><div class=\"product-grid-two mt-30\"><div class=\"product-grid-two__img\"><a href=\"shop-details-2.html\" class=\"d-block\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img2.jpg\" class=\"first-img\" alt=\"\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img3.jpg\" alt=\"\" class=\"hover-img\"></a><div class=\"product-grid-two__overlay-box\"><div class=\"title\"><h6><a href=\"cart.html\">Add To Cart</a></h6></div><div class=\"icon\"><ul><li><a href=\"#popup2l\" class=\"popup_link\"><i class=\"flaticon-eye\"></i></a></li><li><a href=\"wishlist.html\"><i class=\"flaticon-heart\"></i></a></li></ul></div></div></div><div id=\"popup2l\" class=\"product-gird__quick-view-popup mfp-hide\"><div class=\"container\"><div class=\"row justify-content-between align-items-center\"><div class=\"col-lg-6\"><div class=\"quick-view__left-content\"><div class=\"tabs\"><div class=\"popup-product-thumb-box\"><ul><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab1l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img3.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab2l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img2.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab3l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img1.jpg\" alt=\"\"></a></li></ul></div><div class=\"popup-product-main-image-box\"><div id=\"tab1l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img3.jpg\" alt=\"\"></div></div><div id=\"tab2l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img2.jpg\" alt=\"\"></div></div><div id=\"tab3l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img1.jpg\" alt=\"\"></div></div> <button class=\"prev\"><i class=\"flaticon-back\"></i></button> <button class=\"next\"><i class=\"flaticon-next\"></i></button></div></div></div></div><div class=\"col-lg-6\"><div class=\"popup-right-content\"><h3>Small Round Table </h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(123)</span></div><p class=\"text\"> Wooden Tables to Brighten Your Dining Room </p><div class=\"price\"><h2> $50 USD <del> $105 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\"><span>Black</span></a></div><div class=\"add-product\"><h6>Qty:</h6><div class=\"button-group\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> <button class=\"btn--primary\"> Add to Cart </button></div></div><div class=\"payment-method\"><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_4.png\" alt=\"\"></a></div></div></div></div></div></div><div class=\"product-grid-two-content text-center\"><span>Modern</span><h5><a href=\"shop-details-2.html\">Wooden Style Chair</a></h5><p>$159.00</p></div></div><div class=\"product-grid-two mt-30\"><div class=\"product-grid-two__img\"><a href=\"shop-details-2.html\" class=\"d-block\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img3.jpg\" class=\"first-img\" alt=\"\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img4.jpg\" alt=\"\" class=\"hover-img\"></a><div class=\"products-grid-one__badge-box\"><span class=\"bg_base badge new\">New</span></div><div class=\"product-grid-two__overlay-box\"><div class=\"title\"><h6><a href=\"cart.html\">Add To Cart</a></h6></div><div class=\"icon\"><ul><li><a href=\"#popup3l\" class=\"popup_link\"><i class=\"flaticon-eye\"></i></a></li><li><a href=\"wishlist.html\"><i class=\"flaticon-heart\"></i></a></li></ul></div></div></div><div id=\"popup3l\" class=\"product-gird__quick-view-popup mfp-hide\"><div class=\"container\"><div class=\"row justify-content-between align-items-center\"><div class=\"col-lg-6\"><div class=\"quick-view__left-content\"><div class=\"tabs\"><div class=\"popup-product-thumb-box\"><ul><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab4l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img4.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab5l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img5.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab6l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img6.jpg\" alt=\"\"></a></li></ul></div><div class=\"popup-product-main-image-box\"><div id=\"tab4l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img4.jpg\" alt=\"\"></div></div><div id=\"tab5l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img5.jpg\" alt=\"\"></div></div><div id=\"tab6l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img6.jpg\" alt=\"\"></div></div> <button class=\"prev\"><i class=\"flaticon-back\"></i></button> <button class=\"next\"><i class=\"flaticon-next\"></i></button></div></div></div></div><div class=\"col-lg-6\"><div class=\"popup-right-content\"><h3>Small Round Table </h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(123)</span></div><p class=\"text\"> Wooden Tables to Brighten Your Dining Room </p><div class=\"price\"><h2> $50 USD <del> $105 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\"><span>Black</span></a></div><div class=\"add-product\"><h6>Qty:</h6><div class=\"button-group\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> <button class=\"btn--primary\"> Add to Cart </button></div></div><div class=\"payment-method\"><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_4.png\" alt=\"\"></a></div></div></div></div></div></div><div class=\"product-grid-two-content text-center\"><span>Modern</span><h5><a href=\"shop-details-2.html\">Small Round Table</a></h5><p><del>$200</del> $159.00</p></div></div><div class=\"product-grid-two mt-30\"><div class=\"product-grid-two__img\"><a href=\"shop-details-2.html\" class=\"d-block\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img4.jpg\" alt=\"\"></a><div class=\"products-grid-one__badge-box\"><span class=\"badge discount\">-30%</span></div><div class=\"product-grid-two__overlay-box\"><div class=\"title\"><h6><a href=\"cart.html\">Add To Cart</a></h6></div><div class=\"icon\"><ul><li><a href=\"#popup4l\" class=\"popup_link\"><i class=\"flaticon-eye\"></i></a></li><li><a href=\"wishlist.html\"><i class=\"flaticon-heart\"></i></a></li></ul></div></div></div><div id=\"popup4l\" class=\"product-gird__quick-view-popup mfp-hide\"><div class=\"container\"><div class=\"row justify-content-between align-items-center\"><div class=\"col-lg-6\"><div class=\"quick-view__left-content\"><div class=\"tabs\"><div class=\"popup-product-thumb-box\"><ul><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab44l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img4.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab55l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img5.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab66l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img6.jpg\" alt=\"\"></a></li></ul></div><div class=\"popup-product-main-image-box\"><div id=\"tab44l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img4.jpg\" alt=\"\"></div></div><div id=\"tab55l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img5.jpg\" alt=\"\"></div></div><div id=\"tab66l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img6.jpg\" alt=\"\"></div></div> <button class=\"prev\"><i class=\"flaticon-back\"></i></button> <button class=\"next\"><i class=\"flaticon-next\"></i></button></div></div></div></div><div class=\"col-lg-6\"><div class=\"popup-right-content\"><h3>Comfort Cool Sofa </h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(123)</span></div><p class=\"text\"> Wooden Tables to Brighten Your Dining Room </p><div class=\"price\"><h2> $50 USD <del> $105 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\"><span>Black</span></a></div><div class=\"add-product\"><h6>Qty:</h6><div class=\"button-group\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> <button class=\"btn--primary\"> Add to Cart </button></div></div><div class=\"payment-method\"><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_4.png\" alt=\"\"></a></div></div></div></div></div></div><div class=\"product-grid-two-content text-center\"><span>Modern</span><h5><a href=\"shop-details-2.html\">Comfort Cool Sofa</a></h5><p><del>$200</del> $159.00</p></div></div><div class=\"product-grid-two mt-30\"><div class=\"product-grid-two__img\"><a href=\"shop-details-2.html\" class=\"d-block\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img5.jpg\" class=\"first-img\" alt=\"\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img6.jpg\" alt=\"\" class=\"hover-img\"></a><div class=\"products-grid-one__badge-box\"><span class=\"badge bg_base new\">Hot</span></div><div class=\"product-grid-two__overlay-box\"><div class=\"title\"><h6><a href=\"cart.html\">Add To Cart</a></h6></div><div class=\"icon\"><ul><li><a href=\"#popup5l\" class=\"popup_link\"><i class=\"flaticon-eye\"></i></a></li><li><a href=\"wishlist.html\"><i class=\"flaticon-heart\"></i></a></li></ul></div></div></div><div id=\"popup5l\" class=\"product-gird__quick-view-popup mfp-hide\"><div class=\"container\"><div class=\"row justify-content-between align-items-center\"><div class=\"col-lg-6\"><div class=\"quick-view__left-content\"><div class=\"tabs\"><div class=\"popup-product-thumb-box\"><ul><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab444l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img5.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab555l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img6.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab666l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img7.jpg\" alt=\"\"></a></li></ul></div><div class=\"popup-product-main-image-box\"><div id=\"tab444l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img5.jpg\" alt=\"\"></div></div><div id=\"tab555l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img6.jpg\" alt=\"\"></div></div><div id=\"tab666l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img7.jpg\" alt=\"\"></div></div> <button class=\"prev\"><i class=\"flaticon-back\"></i></button> <button class=\"next\"><i class=\"flaticon-next\"></i></button></div></div></div></div><div class=\"col-lg-6\"><div class=\"popup-right-content\"><h3>Wooden TV Table </h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(123)</span></div><p class=\"text\"> Wooden Tables to Brighten Your Dining Room </p><div class=\"price\"><h2> $40 USD <del> $99 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\"><span>Black</span></a></div><div class=\"add-product\"><h6>Qty:</h6><div class=\"button-group\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> <button class=\"btn--primary\"> Add to Cart </button></div></div><div class=\"payment-method\"><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_4.png\" alt=\"\"></a></div></div></div></div></div></div><div class=\"product-grid-two-content text-center\"><span>Modern</span><h5><a href=\"shop-details-2.html\">Wooden TV Table</a></h5><p><del>$200</del> $159.00</p></div></div><div class=\"product-grid-two mt-30\"><div class=\"product-grid-two__img\"><a href=\"shop-details-2.html\" class=\"d-block\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img6.jpg\" class=\"first-img\" alt=\"\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img7.jpg\" alt=\"\" class=\"hover-img\"></a><div class=\"product-grid-two__overlay-box\"><div class=\"title\"><h6><a href=\"cart.html\">Add To Cart</a></h6></div><div class=\"icon\"><ul><li><a href=\"#popup6l\" class=\"popup_link\"><i class=\"flaticon-eye\"></i></a></li><li><a href=\"wishlist.html\"><i class=\"flaticon-heart\"></i></a></li></ul></div></div></div><div id=\"popup6l\" class=\"product-gird__quick-view-popup mfp-hide\"><div class=\"container\"><div class=\"row justify-content-between align-items-center\"><div class=\"col-lg-6\"><div class=\"quick-view__left-content\"><div class=\"tabs\"><div class=\"popup-product-thumb-box\"><ul><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab12l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img5.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab13l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img6.jpg\" alt=\"\"></a></li><li class=\"tab-nav popup-product-thumb\"><a href=\"#tab14l\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img7.jpg\" alt=\"\"></a></li></ul></div><div class=\"popup-product-main-image-box\"><div id=\"tab12l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img5.jpg\" alt=\"\"></div></div><div id=\"tab13l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img6.jpg\" alt=\"\"></div></div><div id=\"tab14l\" class=\"tab-item popup-product-image\"><div class=\"popup-product-single-image\"><img src=\"http://localhost:5173/src/assets/images/home-two/products-v5-img7.jpg\" alt=\"\"></div></div> <button class=\"prev\"><i class=\"flaticon-back\"></i></button> <button class=\"next\"><i class=\"flaticon-next\"></i></button></div></div></div></div><div class=\"col-lg-6\"><div class=\"popup-right-content\"><h3>Wooden TV Table </h3><div class=\"ratting\"><i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i> <i class=\"flaticon-star\"></i><span>(123)</span></div><p class=\"text\"> Wooden Tables to Brighten Your Dining Room </p><div class=\"price\"><h2> $40 USD <del> $99 USD</del></h2><h6> In stuck</h6></div><div class=\"color-varient\"><a href=\"#0\" class=\"color-name pink\"><span>Pink</span></a> <a href=\"#0\" class=\"color-name red\"><span>Red</span></a> <a href=\"#0\" class=\"color-name yellow\"><span>Yellow</span></a> <a href=\"#0\" class=\"color-name blue\"><span>Blue</span></a> <a href=\"#0\" class=\"color-name black\"><span>Black</span></a></div><div class=\"add-product\"><h6>Qty:</h6><div class=\"button-group\"><div class=\"qtySelector text-center\"><span class=\"decreaseQty\"><i class=\"flaticon-minus\"></i></span> <input type=\"number\" class=\"qtyValue\" value=\"1\"><span class=\"increaseQty\"><i class=\"flaticon-plus\"></i></span></div> <button class=\"btn--primary\"> Add to Cart </button></div></div><div class=\"payment-method\"><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_1.png\" alt=\"\"></a><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_2.png\" alt=\"\"></a> <a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_3.png\" alt=\"\"></a><a href=\"#0\"><img src=\"http://localhost:5173/src/assets/images/payment_method/method_4.png\" alt=\"\"></a></div></div></div></div></div></div><div class=\"product-grid-two-content text-center\"><span>Modern</span><h5><a href=\"shop-details-2.html\">Office Leather Chair</a></h5><p><del>$200</del> $159.00</p></div></div></div></div></div></section>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Shop Details Breadcrumb"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Shop Details Breadcrumb"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Shop Details Top"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.title), 1
  /* TEXT */
  )]), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_15, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.price), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [_hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_18, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.product.group_id, function (parentProducts) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'product.show',
        params: {
          id: parentProducts.id
        }
      },
      onClick: function onClick($event) {
        return _this.$route.params.id = parentProducts.id, $options.getProduct();
      },
      "class": "first-img",
      style: {
        "height": "20px",
        "width": "20px"
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: parentProducts.image_url
        }, null, 8
        /* PROPS */
        , _hoisted_19)];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to", "onClick"])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]), _hoisted_20])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Shop Details Top"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" productdrescription-tabStart "), _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" productdrescription-tab End "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Start Video One"), _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("End Video One"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Categories tab Start "), _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Categories tab End ")])]);
}

/***/ }),

/***/ "./resources/js/views/product/Show.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/product/Show.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_049a6388__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=049a6388 */ "./resources/js/views/product/Show.vue?vue&type=template&id=049a6388");
/* harmony import */ var _Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js */ "./resources/js/views/product/Show.vue?vue&type=script&lang=js");
/* harmony import */ var D_Games_laravel_project1_shop_3_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Games_laravel_project1_shop_3_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Show_vue_vue_type_template_id_049a6388__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/product/Show.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/product/Show.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/views/product/Show.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Show.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/product/Show.vue?vue&type=template&id=049a6388":
/*!***************************************************************************!*\
  !*** ./resources/js/views/product/Show.vue?vue&type=template&id=049a6388 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_049a6388__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_049a6388__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=template&id=049a6388 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/product/Show.vue?vue&type=template&id=049a6388");


/***/ })

}]);