(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_about-me_profile-model_profile-model_module_ts"],{

/***/ 69995:
/*!************************************************************************!*\
  !*** ./src/app/about-me/profile-model/profile-model-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModelPageRoutingModule": () => (/* binding */ ProfileModelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_model_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-model.page */ 66775);




const routes = [
    {
        path: '',
        component: _profile_model_page__WEBPACK_IMPORTED_MODULE_0__.ProfileModelPage
    }
];
let ProfileModelPageRoutingModule = class ProfileModelPageRoutingModule {
};
ProfileModelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileModelPageRoutingModule);



/***/ }),

/***/ 36743:
/*!****************************************************************!*\
  !*** ./src/app/about-me/profile-model/profile-model.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModelPageModule": () => (/* binding */ ProfileModelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_model_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-model-routing.module */ 69995);
/* harmony import */ var _profile_model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-model.page */ 66775);







let ProfileModelPageModule = class ProfileModelPageModule {
};
ProfileModelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_model_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileModelPageRoutingModule
        ],
        declarations: [_profile_model_page__WEBPACK_IMPORTED_MODULE_1__.ProfileModelPage]
    })
], ProfileModelPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_about-me_profile-model_profile-model_module_ts.js.map