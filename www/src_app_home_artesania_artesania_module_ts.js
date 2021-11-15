(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_home_artesania_artesania_module_ts"],{

/***/ 24963:
/*!************************************************************!*\
  !*** ./src/app/home/artesania/artesania-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtesaniaPageRoutingModule": () => (/* binding */ ArtesaniaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _artesania_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artesania.page */ 34445);




const routes = [
    {
        path: '',
        component: _artesania_page__WEBPACK_IMPORTED_MODULE_0__.ArtesaniaPage
    }
];
let ArtesaniaPageRoutingModule = class ArtesaniaPageRoutingModule {
};
ArtesaniaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArtesaniaPageRoutingModule);



/***/ }),

/***/ 48906:
/*!****************************************************!*\
  !*** ./src/app/home/artesania/artesania.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtesaniaPageModule": () => (/* binding */ ArtesaniaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _artesania_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artesania-routing.module */ 24963);






let ArtesaniaPageModule = class ArtesaniaPageModule {
};
ArtesaniaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _artesania_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArtesaniaPageRoutingModule
        ],
        // declarations: [ArtesaniaPage]
    })
], ArtesaniaPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_home_artesania_artesania_module_ts.js.map