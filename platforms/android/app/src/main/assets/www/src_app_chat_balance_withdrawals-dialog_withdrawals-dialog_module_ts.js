(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_balance_withdrawals-dialog_withdrawals-dialog_module_ts"],{

/***/ 70167:
/*!**************************************************************************************!*\
  !*** ./src/app/chat/balance/withdrawals-dialog/withdrawals-dialog-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawalsDialogPageRoutingModule": () => (/* binding */ WithdrawalsDialogPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _withdrawals_dialog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withdrawals-dialog.page */ 67869);




const routes = [
    {
        path: '',
        component: _withdrawals_dialog_page__WEBPACK_IMPORTED_MODULE_0__.WithdrawalsDialogPage
    }
];
let WithdrawalsDialogPageRoutingModule = class WithdrawalsDialogPageRoutingModule {
};
WithdrawalsDialogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WithdrawalsDialogPageRoutingModule);



/***/ }),

/***/ 83292:
/*!******************************************************************************!*\
  !*** ./src/app/chat/balance/withdrawals-dialog/withdrawals-dialog.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawalsDialogPageModule": () => (/* binding */ WithdrawalsDialogPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _withdrawals_dialog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withdrawals-dialog-routing.module */ 70167);
/* harmony import */ var _withdrawals_dialog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withdrawals-dialog.page */ 67869);







let WithdrawalsDialogPageModule = class WithdrawalsDialogPageModule {
};
WithdrawalsDialogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _withdrawals_dialog_routing_module__WEBPACK_IMPORTED_MODULE_0__.WithdrawalsDialogPageRoutingModule
        ],
        declarations: [_withdrawals_dialog_page__WEBPACK_IMPORTED_MODULE_1__.WithdrawalsDialogPage]
    })
], WithdrawalsDialogPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_chat_balance_withdrawals-dialog_withdrawals-dialog_module_ts.js.map