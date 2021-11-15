(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_privacidad_privacidad_module_ts"],{

/***/ 85481:
/*!**************************************************************!*\
  !*** ./src/app/chat/privacidad/privacidad-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacidadPageRoutingModule": () => (/* binding */ PrivacidadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _privacidad_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacidad.page */ 17600);




const routes = [
    {
        path: '',
        component: _privacidad_page__WEBPACK_IMPORTED_MODULE_0__.PrivacidadPage
    }
];
let PrivacidadPageRoutingModule = class PrivacidadPageRoutingModule {
};
PrivacidadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrivacidadPageRoutingModule);



/***/ }),

/***/ 48383:
/*!******************************************************!*\
  !*** ./src/app/chat/privacidad/privacidad.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacidadPageModule": () => (/* binding */ PrivacidadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _privacidad_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacidad-routing.module */ 85481);
/* harmony import */ var _privacidad_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacidad.page */ 17600);







let PrivacidadPageModule = class PrivacidadPageModule {
};
PrivacidadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _privacidad_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacidadPageRoutingModule
        ],
        declarations: [_privacidad_page__WEBPACK_IMPORTED_MODULE_1__.PrivacidadPage]
    })
], PrivacidadPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_chat_privacidad_privacidad_module_ts.js.map