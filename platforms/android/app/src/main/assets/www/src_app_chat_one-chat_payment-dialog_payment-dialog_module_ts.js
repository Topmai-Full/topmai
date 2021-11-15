(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_one-chat_payment-dialog_payment-dialog_module_ts"],{

/***/ 77661:
/*!*******************************************************************************!*\
  !*** ./src/app/chat/one-chat/payment-dialog/payment-dialog-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDialogPageRoutingModule": () => (/* binding */ PaymentDialogPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _payment_dialog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-dialog.page */ 79894);




const routes = [
    {
        path: '',
        component: _payment_dialog_page__WEBPACK_IMPORTED_MODULE_0__.PaymentDialogPage
    }
];
let PaymentDialogPageRoutingModule = class PaymentDialogPageRoutingModule {
};
PaymentDialogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentDialogPageRoutingModule);



/***/ }),

/***/ 27948:
/*!***********************************************************************!*\
  !*** ./src/app/chat/one-chat/payment-dialog/payment-dialog.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDialogPageModule": () => (/* binding */ PaymentDialogPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _payment_dialog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-dialog-routing.module */ 77661);
/* harmony import */ var _payment_dialog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-dialog.page */ 79894);







let PaymentDialogPageModule = class PaymentDialogPageModule {
};
PaymentDialogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_dialog_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentDialogPageRoutingModule
        ],
        declarations: [_payment_dialog_page__WEBPACK_IMPORTED_MODULE_1__.PaymentDialogPage]
    })
], PaymentDialogPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_chat_one-chat_payment-dialog_payment-dialog_module_ts.js.map