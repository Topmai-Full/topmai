(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_addcard_addcard_module_ts"],{

/***/ 3654:
/*!********************************************************!*\
  !*** ./src/app/chat/addcard/addcard-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddcardPageRoutingModule": () => (/* binding */ AddcardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _addcard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addcard.page */ 12422);




const routes = [
    {
        path: '',
        component: _addcard_page__WEBPACK_IMPORTED_MODULE_0__.AddcardPage
    }
];
let AddcardPageRoutingModule = class AddcardPageRoutingModule {
};
AddcardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddcardPageRoutingModule);



/***/ }),

/***/ 72584:
/*!************************************************!*\
  !*** ./src/app/chat/addcard/addcard.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddcardPageModule": () => (/* binding */ AddcardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _addcard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addcard-routing.module */ 3654);
/* harmony import */ var _addcard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addcard.page */ 12422);







let AddcardPageModule = class AddcardPageModule {
};
AddcardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addcard_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddcardPageRoutingModule
        ],
        declarations: [_addcard_page__WEBPACK_IMPORTED_MODULE_1__.AddcardPage]
    })
], AddcardPageModule);



/***/ }),

/***/ 12422:
/*!**********************************************!*\
  !*** ./src/app/chat/addcard/addcard.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddcardPage": () => (/* binding */ AddcardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_addcard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addcard.page.html */ 6089);
/* harmony import */ var _addcard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addcard.page.scss */ 81256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);





let AddcardPage = class AddcardPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
};
AddcardPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
AddcardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-addcard',
        template: _raw_loader_addcard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addcard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddcardPage);



/***/ }),

/***/ 81256:
/*!************************************************!*\
  !*** ./src/app/chat/addcard/addcard.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRjYXJkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 6089:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/addcard/addcard.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n            <ion-icon style=\"font-size: 30px; \" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Tarjeta bancaria</ion-title>\r\n\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\r\n        <ion-list-header class=\"ion-text-center\">\r\n\r\n            <ion-label style=\"font-weight: bold;\">\r\n                Agregar tarjeta bancaria\r\n            </ion-label>\r\n        </ion-list-header>\r\n        <ion-item>\r\n            <ion-label>Titular</ion-label>\r\n            <ion-input placeholder=\"Nombre\"></ion-input>\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Número de tarjeta</ion-label>\r\n            <ion-input placeholder=\"Número de tarjeta\"></ion-input>\r\n            <ion-icon name=\"camera-outline\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Tipo de tarjeta</ion-label>\r\n            <ion-select placeholder='seleccionar'>\r\n                <ion-select-option value=\"MASTERCARD credit card\">Mastercard</ion-select-option>\r\n                <ion-select-option value=\"BBVA\">Visa</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n\r\n\r\n\r\n\r\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\r\n        <ion-list-header>\r\n\r\n            <ion-label style=\"color: grey;\">\r\n                Información de tarjeta\r\n            </ion-label>\r\n        </ion-list-header>\r\n        <ion-item>\r\n            <ion-label>Validación</ion-label>\r\n            <ion-input placeholder=\"mes/año\"></ion-input>\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Código CCV</ion-label>\r\n            <ion-input placeholder=\"Código de seguridad\"></ion-input>\r\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\r\n        <ion-list-header>\r\n\r\n            <ion-label style=\"color: grey;\">\r\n                Dirección de facturación\r\n            </ion-label>\r\n        </ion-list-header>\r\n\r\n        <ion-item>\r\n            <ion-label>Región</ion-label>\r\n            <ion-select placeholder='seleccionar'>\r\n                <ion-select-option value=\"cat\">México</ion-select-option>\r\n                <ion-select-option value=\"dog\">Brasil</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Dirección</ion-label>\r\n            <ion-input placeholder=\"Ingresar dirección\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Teléfono</ion-label>\r\n            <ion-input placeholder=\"Número de telefono\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Email</ion-label>\r\n            <ion-input placeholder=\"Correo electrónico\"></ion-input>\r\n        </ion-item>\r\n\r\n    </ion-list>\r\n\r\n\r\n    <div style=\"margin-top: 10%;\">\r\n        <ion-button mode='ios' style=\"--background: #35CA75;\" expand=\"block\">Guardar</ion-button>\r\n    </div>\r\n    <ion-footer class=\"ion-no-border ion-text-center\">\r\n        <ion-toolbar>\r\n            <ion-title style=\"font-size: 11px; color: grey;\">Proporcionado por Topmaipay</ion-title>\r\n        </ion-toolbar>\r\n    </ion-footer>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_addcard_addcard_module_ts.js.map