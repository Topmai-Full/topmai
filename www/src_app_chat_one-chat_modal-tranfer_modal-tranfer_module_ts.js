(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_one-chat_modal-tranfer_modal-tranfer_module_ts"],{

/***/ 53774:
/*!*****************************************************************************!*\
  !*** ./src/app/chat/one-chat/modal-tranfer/modal-tranfer-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalTranferPageRoutingModule": () => (/* binding */ ModalTranferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _modal_tranfer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-tranfer.page */ 2430);




const routes = [
    {
        path: '',
        component: _modal_tranfer_page__WEBPACK_IMPORTED_MODULE_0__.ModalTranferPage
    }
];
let ModalTranferPageRoutingModule = class ModalTranferPageRoutingModule {
};
ModalTranferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalTranferPageRoutingModule);



/***/ }),

/***/ 9073:
/*!*********************************************************************!*\
  !*** ./src/app/chat/one-chat/modal-tranfer/modal-tranfer.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalTranferPageModule": () => (/* binding */ ModalTranferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modal_tranfer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-tranfer-routing.module */ 53774);
/* harmony import */ var _modal_tranfer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-tranfer.page */ 2430);







let ModalTranferPageModule = class ModalTranferPageModule {
};
ModalTranferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_tranfer_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalTranferPageRoutingModule
        ],
        declarations: [_modal_tranfer_page__WEBPACK_IMPORTED_MODULE_1__.ModalTranferPage]
    })
], ModalTranferPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_chat_one-chat_modal-tranfer_modal-tranfer_module_ts.js.map