(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_album-model_album-model_module_ts"],{

/***/ 41510:
/*!****************************************************************!*\
  !*** ./src/app/chat/album-model/album-model-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumModelPageRoutingModule": () => (/* binding */ AlbumModelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _album_model_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album-model.page */ 24681);




const routes = [
    {
        path: '',
        component: _album_model_page__WEBPACK_IMPORTED_MODULE_0__.AlbumModelPage
    }
];
let AlbumModelPageRoutingModule = class AlbumModelPageRoutingModule {
};
AlbumModelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlbumModelPageRoutingModule);



/***/ }),

/***/ 15406:
/*!********************************************************!*\
  !*** ./src/app/chat/album-model/album-model.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumModelPageModule": () => (/* binding */ AlbumModelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _album_model_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./album-model-routing.module */ 41510);
/* harmony import */ var _album_model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album-model.page */ 24681);







let AlbumModelPageModule = class AlbumModelPageModule {
};
AlbumModelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _album_model_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlbumModelPageRoutingModule
        ],
        declarations: [_album_model_page__WEBPACK_IMPORTED_MODULE_1__.AlbumModelPage]
    })
], AlbumModelPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_chat_album-model_album-model_module_ts.js.map