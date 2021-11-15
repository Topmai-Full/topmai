(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_home_item-nine_item-nine_module_ts"],{

/***/ 37819:
/*!************************************************************!*\
  !*** ./src/app/home/item-nine/item-nine-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemNinePageRoutingModule": () => (/* binding */ ItemNinePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _item_nine_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-nine.page */ 13246);




const routes = [
    {
        path: '',
        component: _item_nine_page__WEBPACK_IMPORTED_MODULE_0__.ItemNinePage
    }
];
let ItemNinePageRoutingModule = class ItemNinePageRoutingModule {
};
ItemNinePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemNinePageRoutingModule);



/***/ }),

/***/ 5275:
/*!****************************************************!*\
  !*** ./src/app/home/item-nine/item-nine.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemNinePageModule": () => (/* binding */ ItemNinePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _item_nine_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-nine-routing.module */ 37819);






let ItemNinePageModule = class ItemNinePageModule {
};
ItemNinePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _item_nine_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemNinePageRoutingModule
        ],
        // declarations: [ItemNinePage]
    })
], ItemNinePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_home_item-nine_item-nine_module_ts.js.map