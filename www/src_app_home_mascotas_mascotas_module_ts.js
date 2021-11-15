(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_home_mascotas_mascotas_module_ts"],{

/***/ 86920:
/*!**********************************************************!*\
  !*** ./src/app/home/mascotas/mascotas-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MascotasPageRoutingModule": () => (/* binding */ MascotasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mascotas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mascotas.page */ 67651);




const routes = [
    {
        path: '',
        component: _mascotas_page__WEBPACK_IMPORTED_MODULE_0__.MascotasPage
    }
];
let MascotasPageRoutingModule = class MascotasPageRoutingModule {
};
MascotasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MascotasPageRoutingModule);



/***/ }),

/***/ 90580:
/*!**************************************************!*\
  !*** ./src/app/home/mascotas/mascotas.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MascotasPageModule": () => (/* binding */ MascotasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mascotas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mascotas-routing.module */ 86920);






let MascotasPageModule = class MascotasPageModule {
};
MascotasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _mascotas_routing_module__WEBPACK_IMPORTED_MODULE_0__.MascotasPageRoutingModule
        ],
        // declarations: [MascotasPage]
    })
], MascotasPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_home_mascotas_mascotas_module_ts.js.map