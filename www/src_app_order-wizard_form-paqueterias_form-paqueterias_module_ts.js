(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_order-wizard_form-paqueterias_form-paqueterias_module_ts"],{

/***/ 43366:
/*!**********************************************************************************!*\
  !*** ./src/app/order-wizard/form-paqueterias/form-paqueterias-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPaqueteriasPageRoutingModule": () => (/* binding */ FormPaqueteriasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _form_paqueterias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-paqueterias.page */ 54859);




const routes = [
    {
        path: '',
        component: _form_paqueterias_page__WEBPACK_IMPORTED_MODULE_0__.FormPaqueteriasPage
    }
];
let FormPaqueteriasPageRoutingModule = class FormPaqueteriasPageRoutingModule {
};
FormPaqueteriasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormPaqueteriasPageRoutingModule);



/***/ }),

/***/ 69118:
/*!**************************************************************************!*\
  !*** ./src/app/order-wizard/form-paqueterias/form-paqueterias.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPaqueteriasPageModule": () => (/* binding */ FormPaqueteriasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _form_paqueterias_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-paqueterias-routing.module */ 43366);
/* harmony import */ var _form_paqueterias_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-paqueterias.page */ 54859);







let FormPaqueteriasPageModule = class FormPaqueteriasPageModule {
};
FormPaqueteriasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_paqueterias_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormPaqueteriasPageRoutingModule
        ],
        declarations: [_form_paqueterias_page__WEBPACK_IMPORTED_MODULE_1__.FormPaqueteriasPage]
    })
], FormPaqueteriasPageModule);



/***/ }),

/***/ 54859:
/*!************************************************************************!*\
  !*** ./src/app/order-wizard/form-paqueterias/form-paqueterias.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPaqueteriasPage": () => (/* binding */ FormPaqueteriasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_form_paqueterias_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./form-paqueterias.page.html */ 55782);
/* harmony import */ var _form_paqueterias_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-paqueterias.page.scss */ 56677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let FormPaqueteriasPage = class FormPaqueteriasPage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
};
FormPaqueteriasPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
FormPaqueteriasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-form-paqueterias',
        template: _raw_loader_form_paqueterias_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_paqueterias_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FormPaqueteriasPage);



/***/ }),

/***/ 56677:
/*!**************************************************************************!*\
  !*** ./src/app/order-wizard/form-paqueterias/form-paqueterias.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #F3F3F3;\n}\n\nion-content ion-item ion-checkbox {\n  --background-checked: #14CC9A;\n  --border-color-checked: #14CC9A;\n}\n\n.color-header {\n  background-image: linear-gradient(to right, #fb0f3a 0%, #fb0f3a 100%);\n}\n\n.font-mai {\n  font-family: \"Arista\";\n}\n\nbutton {\n  border-radius: 5px;\n  color: white;\n  background: #49ad3c;\n  height: 34px;\n  width: 100%;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tcGFxdWV0ZXJpYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFJUTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7QUFEWjs7QUFNQTtFQUdJLHFFQUFBO0FBTEo7O0FBUUE7RUFDSSxxQkFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTEoiLCJmaWxlIjoiZm9ybS1wYXF1ZXRlcmlhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGM0YzRjM7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBpb24tY2hlY2tib3gge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzE0Q0M5QTtcclxuICAgICAgICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogIzE0Q0M5QTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb2xvci1oZWFkZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJlNzdmMSFpbXBvcnRhbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAjMmU3N2YxICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYjBmM2EgMCUsICNmYjBmM2EgMTAwJSk7XHJcbn1cclxuXHJcbi5mb250LW1haSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaXN0YSc7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDlhZDNjO1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59Il19 */");

/***/ }),

/***/ 55782:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-wizard/form-paqueterias/form-paqueterias.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"color-header\">\r\n    <ion-grid style=\"height: 50px\">\r\n        <ion-row>\r\n            <ion-col size=\"1\">\r\n                <ion-icon (click)=\"goBack()\" style=\"font-size: 30px; color: white; margin: 0px 5px\" name=\"chevron-back-outline\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col class=\"font-mai\" style=\"color: #fff; margin-top: 7px; font-size: 1.5rem; margin-left: 10px;\">\r\n                topmai envío\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n                <img src=\"assets/homePage/scanIcon.png\" style=\"width: 25px\" />\r\n                <ion-icon style=\"color: white;font-size: 25px;margin-left: 10px\" name=\"ellipsis-vertical\"></ion-icon>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item lines=\"none\">\r\n        <ion-checkbox slot=\"start\" checked></ion-checkbox>\r\n        <ion-label>\r\n\r\n            <img src=\"assets/imgs/dhl.png\" alt=\"\">\r\n        </ion-label>\r\n\r\n        <p slot=\"end\">$146.00</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-checkbox slot=\"start\"></ion-checkbox>\r\n        <ion-label>\r\n\r\n            <img src=\"assets/imgs/estafeta.png\" alt=\"\">\r\n        </ion-label>\r\n\r\n        <p slot=\"end\">$148.00</p>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-checkbox slot=\"start\"></ion-checkbox>\r\n        <ion-label>\r\n\r\n            <img src=\"assets/imgs/fedex.png\" alt=\"\">\r\n        </ion-label>\r\n\r\n        <p slot=\"end\">$167.00</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-checkbox slot=\"start\"></ion-checkbox>\r\n        <ion-label>\r\n\r\n            <img src=\"assets/imgs/redpack.png\" alt=\"\">\r\n        </ion-label>\r\n\r\n        <p slot=\"end\">$167.00</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-checkbox slot=\"start\"></ion-checkbox>\r\n        <ion-label>\r\n\r\n            <img src=\"assets/imgs/ups.png\" alt=\"\">\r\n        </ion-label>\r\n\r\n        <p slot=\"end\">$167.00</p>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-checkbox slot=\"start\"></ion-checkbox>\r\n        <ion-label>\r\n\r\n            <img src=\"assets/imgs/fedex.png\" alt=\"\">\r\n        </ion-label>\r\n\r\n        <p slot=\"end\">$167.00</p>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-checkbox slot=\"start\"></ion-checkbox>\r\n        <ion-label>\r\n\r\n            <img src=\"assets/imgs/redpack.png\" alt=\"\">\r\n        </ion-label>\r\n\r\n        <p slot=\"end\">$167.00</p>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-checkbox slot=\"start\"></ion-checkbox>\r\n        <ion-label>\r\n\r\n            <img src=\"assets/imgs/ups.png\" alt=\"\">\r\n        </ion-label>\r\n\r\n        <p slot=\"end\">$167.00</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n        <ion-checkbox slot=\"start\"></ion-checkbox>\r\n        <ion-label>\r\n\r\n            <img src=\"assets/imgs/estafeta.png\" alt=\"\">\r\n        </ion-label>\r\n\r\n        <p slot=\"end\">$148.00</p>\r\n    </ion-item>\r\n    <ion-row style=\"margin-bottom: 0px\">\r\n        <button>\r\n  Guardar y continuar\r\n</button>\r\n\r\n    </ion-row>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_order-wizard_form-paqueterias_form-paqueterias_module_ts.js.map