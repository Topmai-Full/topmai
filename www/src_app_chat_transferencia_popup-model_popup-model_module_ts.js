(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_transferencia_popup-model_popup-model_module_ts"],{

/***/ 56316:
/*!******************************************************************************!*\
  !*** ./src/app/chat/transferencia/popup-model/popup-model-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupModelPageRoutingModule": () => (/* binding */ PopupModelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _popup_model_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-model.page */ 47542);




const routes = [
    {
        path: '',
        component: _popup_model_page__WEBPACK_IMPORTED_MODULE_0__.PopupModelPage
    }
];
let PopupModelPageRoutingModule = class PopupModelPageRoutingModule {
};
PopupModelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PopupModelPageRoutingModule);



/***/ }),

/***/ 45211:
/*!**********************************************************************!*\
  !*** ./src/app/chat/transferencia/popup-model/popup-model.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupModelPageModule": () => (/* binding */ PopupModelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _popup_model_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-model-routing.module */ 56316);
/* harmony import */ var _popup_model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-model.page */ 47542);







let PopupModelPageModule = class PopupModelPageModule {
};
PopupModelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _popup_model_routing_module__WEBPACK_IMPORTED_MODULE_0__.PopupModelPageRoutingModule
        ],
        declarations: [_popup_model_page__WEBPACK_IMPORTED_MODULE_1__.PopupModelPage]
    })
], PopupModelPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_chat_transferencia_popup-model_popup-model_module_ts.js.map