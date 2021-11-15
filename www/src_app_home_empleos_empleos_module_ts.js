(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_home_empleos_empleos_module_ts"],{

/***/ 18186:
/*!********************************************************!*\
  !*** ./src/app/home/empleos/empleos-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleosPageRoutingModule": () => (/* binding */ EmpleosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _empleos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empleos.page */ 55292);




const routes = [
    {
        path: '',
        component: _empleos_page__WEBPACK_IMPORTED_MODULE_0__.EmpleosPage
    }
];
let EmpleosPageRoutingModule = class EmpleosPageRoutingModule {
};
EmpleosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmpleosPageRoutingModule);



/***/ }),

/***/ 33673:
/*!************************************************!*\
  !*** ./src/app/home/empleos/empleos.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleosPageModule": () => (/* binding */ EmpleosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _empleos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empleos-routing.module */ 18186);






let EmpleosPageModule = class EmpleosPageModule {
};
EmpleosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _empleos_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmpleosPageRoutingModule
        ],
        // declarations: [EmpleosPage]
    })
], EmpleosPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_home_empleos_empleos_module_ts.js.map