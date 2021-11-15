(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_about-me_confirmation-popover_confirmation-popover_module_ts"],{

/***/ 31778:
/*!**************************************************************************************!*\
  !*** ./src/app/about-me/confirmation-popover/confirmation-popover-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationPopoverPageRoutingModule": () => (/* binding */ ConfirmationPopoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _confirmation_popover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation-popover.page */ 20504);




const routes = [
    {
        path: '',
        component: _confirmation_popover_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmationPopoverPage
    }
];
let ConfirmationPopoverPageRoutingModule = class ConfirmationPopoverPageRoutingModule {
};
ConfirmationPopoverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmationPopoverPageRoutingModule);



/***/ }),

/***/ 77004:
/*!******************************************************************************!*\
  !*** ./src/app/about-me/confirmation-popover/confirmation-popover.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationPopoverPageModule": () => (/* binding */ ConfirmationPopoverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _confirmation_popover_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation-popover-routing.module */ 31778);
/* harmony import */ var _confirmation_popover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation-popover.page */ 20504);







let ConfirmationPopoverPageModule = class ConfirmationPopoverPageModule {
};
ConfirmationPopoverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _confirmation_popover_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmationPopoverPageRoutingModule
        ],
        declarations: [_confirmation_popover_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmationPopoverPage]
    })
], ConfirmationPopoverPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_about-me_confirmation-popover_confirmation-popover_module_ts.js.map