(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_add-categories_add-categories_module_ts"],{

/***/ 99805:
/*!**********************************************************************!*\
  !*** ./src/app/chat/add-categories/add-categories-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCategoriesPageRoutingModule": () => (/* binding */ AddCategoriesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-categories.page */ 60378);




const routes = [
    {
        path: '',
        component: _add_categories_page__WEBPACK_IMPORTED_MODULE_0__.AddCategoriesPage
    }
];
let AddCategoriesPageRoutingModule = class AddCategoriesPageRoutingModule {
};
AddCategoriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddCategoriesPageRoutingModule);



/***/ }),

/***/ 50136:
/*!**************************************************************!*\
  !*** ./src/app/chat/add-categories/add-categories.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCategoriesPageModule": () => (/* binding */ AddCategoriesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-categories-routing.module */ 99805);
/* harmony import */ var _add_categories_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-categories.page */ 60378);







let AddCategoriesPageModule = class AddCategoriesPageModule {
};
AddCategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddCategoriesPageRoutingModule
        ],
        declarations: [_add_categories_page__WEBPACK_IMPORTED_MODULE_1__.AddCategoriesPage]
    })
], AddCategoriesPageModule);



/***/ }),

/***/ 60378:
/*!************************************************************!*\
  !*** ./src/app/chat/add-categories/add-categories.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCategoriesPage": () => (/* binding */ AddCategoriesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_categories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-categories.page.html */ 62686);
/* harmony import */ var _add_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-categories.page.scss */ 19843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let AddCategoriesPage = class AddCategoriesPage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.items = [
            { title: 'Coches', icon: 'assets/chat/addCategory/1.png' },
            { title: 'Empleo', icon: 'assets/chat/addCategory/18.png' },
            { title: 'Motos', icon: 'assets/chat/addCategory/2.png' },
            { title: 'Hogar yJardín', icon: 'assets/chat/addCategory/12.png' },
            { title: 'Motor y Accesorios', icon: 'assets/chat/addCategory/3.png' },
            { title: 'Cine,Libros,Música', icon: 'assets/chat/addCategory/13.png' },
            { title: 'Moda y Accesorios', icon: 'assets/chat/addCategory/4.png' },
            { title: 'Inmobiliaria', icon: 'assets/chat/addCategory/5.png' },
            { title: 'TV, Audio y Foto', icon: 'assets/chat/addCategory/6.png' },
            { title: 'Informatica y Electronica', icon: 'assets/chat/addCategory/7.png' },
            { title: 'Coleccionismo', icon: 'assets/chat/addCategory/15.png' },
            { title: 'Deporte y Ocio', icon: 'assets/chat/addCategory/9.png' },
            { title: 'Bicicleta', icon: 'assets/chat/addCategory/10.png' },
            { title: 'Consolas yVideosjuegos', icon: 'assets/chat/addCategory/11.png' },
            { title: 'niños y Bebés', icon: 'assets/chat/addCategory/14.png' },
            { title: 'Industria y Agricultura', icon: 'assets/chat/addCategory/17.png' },
            { title: 'Móviles y Telefonía', icon: 'assets/chat/addCategory/8.png' },
            { title: 'Servicios', icon: 'assets/chat/addCategory/19.png' },
            { title: 'Materiales de Construcción', icon: 'assets/chat/addCategory/16.png' },
            { title: 'Other', icon: 'assets/chat/addCategory/otros.png' }
        ];
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    gotoSubmitStage() {
        this.router.navigate([`submit-stage`]);
    }
};
AddCategoriesPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AddCategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-categories',
        template: _raw_loader_add_categories_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddCategoriesPage);



/***/ }),

/***/ 19843:
/*!**************************************************************!*\
  !*** ./src/app/chat/add-categories/add-categories.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header::after {\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0YiLCJmaWxlIjoiYWRkLWNhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 62686:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/add-categories/add-categories.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon slot=\"start\" (click)=\"goBack()\" style=\"font-size: 30px;\" name=\"chevron-back-outline\"></ion-icon>\r\n    <ion-title style=\"font-size:15px;font-weight: bold;text-align: center\">Selecciona una categoria</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid (click)=\"gotoSubmitStage()\" style=\"color: #666666\">\r\n    <ion-row style=\"height: 50px;display: flex;align-items: center; border-bottom: 1px solid rgba(187,187,187,0.26)\" *ngFor=\"let item of items\">\r\n      <ion-col size=\"2\" style=\"text-align: center\">\r\n        <img style=\"object-fit: cover; height: 28px\" [src]=\"item.icon\">\r\n      </ion-col>\r\n      <ion-col>\r\n        {{item.title}}\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_add-categories_add-categories_module_ts.js.map