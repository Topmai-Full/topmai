(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_home_item-ten_item-ten_module_ts"],{

/***/ 79729:
/*!**********************************************************!*\
  !*** ./src/app/home/item-ten/item-ten-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTenPageRoutingModule": () => (/* binding */ ItemTenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _item_ten_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-ten.page */ 24664);




const routes = [
    {
        path: '',
        component: _item_ten_page__WEBPACK_IMPORTED_MODULE_0__.ItemTenPage
    }
];
let ItemTenPageRoutingModule = class ItemTenPageRoutingModule {
};
ItemTenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemTenPageRoutingModule);



/***/ }),

/***/ 8216:
/*!**************************************************!*\
  !*** ./src/app/home/item-ten/item-ten.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTenPageModule": () => (/* binding */ ItemTenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _item_ten_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-ten-routing.module */ 79729);






let ItemTenPageModule = class ItemTenPageModule {
};
ItemTenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _item_ten_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemTenPageRoutingModule
        ],
        // declarations: [ItemTenPage]
    })
], ItemTenPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_home_item-ten_item-ten_module_ts.js.map