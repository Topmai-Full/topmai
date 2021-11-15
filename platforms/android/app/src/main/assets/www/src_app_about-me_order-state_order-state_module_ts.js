(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_about-me_order-state_order-state_module_ts"],{

/***/ 1523:
/*!********************************************************************!*\
  !*** ./src/app/about-me/order-state/order-state-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderStatePageRoutingModule": () => (/* binding */ OrderStatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _order_state_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-state.page */ 15514);




const routes = [
    {
        path: '',
        component: _order_state_page__WEBPACK_IMPORTED_MODULE_0__.OrderStatePage
    }
];
let OrderStatePageRoutingModule = class OrderStatePageRoutingModule {
};
OrderStatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderStatePageRoutingModule);



/***/ }),

/***/ 34727:
/*!************************************************************!*\
  !*** ./src/app/about-me/order-state/order-state.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderStatePageModule": () => (/* binding */ OrderStatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _order_state_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-state-routing.module */ 1523);
/* harmony import */ var _order_state_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-state.page */ 15514);







let OrderStatePageModule = class OrderStatePageModule {
};
OrderStatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_state_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderStatePageRoutingModule
        ],
        declarations: [_order_state_page__WEBPACK_IMPORTED_MODULE_1__.OrderStatePage]
    })
], OrderStatePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_about-me_order-state_order-state_module_ts.js.map