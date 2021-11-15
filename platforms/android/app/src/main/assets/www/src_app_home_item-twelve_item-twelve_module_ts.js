(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_home_item-twelve_item-twelve_module_ts"],{

/***/ 55295:
/*!****************************************************************!*\
  !*** ./src/app/home/item-twelve/item-twelve-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTwelvePageRoutingModule": () => (/* binding */ ItemTwelvePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _item_twelve_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-twelve.page */ 33280);




const routes = [
    {
        path: '',
        component: _item_twelve_page__WEBPACK_IMPORTED_MODULE_0__.ItemTwelvePage
    },
    {
        path: 'nextautos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_item-twelve_nextautos_nextautos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./nextautos/nextautos.module */ 47689)).then(m => m.NextautosPageModule)
    },
    {
        path: 'modal-precio-auto',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_item-twelve_modal-precio-auto_modal-precio-auto_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modal-precio-auto/modal-precio-auto.module */ 72869)).then(m => m.ModalPrecioAutoPageModule)
    }
];
let ItemTwelvePageRoutingModule = class ItemTwelvePageRoutingModule {
};
ItemTwelvePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemTwelvePageRoutingModule);



/***/ }),

/***/ 50427:
/*!********************************************************!*\
  !*** ./src/app/home/item-twelve/item-twelve.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTwelvePageModule": () => (/* binding */ ItemTwelvePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _item_twelve_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-twelve-routing.module */ 55295);






let ItemTwelvePageModule = class ItemTwelvePageModule {
};
ItemTwelvePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _item_twelve_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemTwelvePageRoutingModule
        ],
        // declarations: [ItemTwelvePage]
    })
], ItemTwelvePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_home_item-twelve_item-twelve_module_ts.js.map