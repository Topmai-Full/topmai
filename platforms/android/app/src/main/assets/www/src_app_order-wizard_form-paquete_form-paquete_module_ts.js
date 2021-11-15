(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_order-wizard_form-paquete_form-paquete_module_ts"],{

/***/ 27289:
/*!**************************************************************************!*\
  !*** ./src/app/order-wizard/form-paquete/form-paquete-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPaquetePageRoutingModule": () => (/* binding */ FormPaquetePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _form_paquete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-paquete.page */ 48851);




const routes = [
    {
        path: '',
        component: _form_paquete_page__WEBPACK_IMPORTED_MODULE_0__.FormPaquetePage
    }
];
let FormPaquetePageRoutingModule = class FormPaquetePageRoutingModule {
};
FormPaquetePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormPaquetePageRoutingModule);



/***/ }),

/***/ 25900:
/*!******************************************************************!*\
  !*** ./src/app/order-wizard/form-paquete/form-paquete.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPaquetePageModule": () => (/* binding */ FormPaquetePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _form_paquete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-paquete-routing.module */ 27289);
/* harmony import */ var _form_paquete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-paquete.page */ 48851);







let FormPaquetePageModule = class FormPaquetePageModule {
};
FormPaquetePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_paquete_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormPaquetePageRoutingModule
        ],
        declarations: [_form_paquete_page__WEBPACK_IMPORTED_MODULE_1__.FormPaquetePage]
    })
], FormPaquetePageModule);



/***/ }),

/***/ 48851:
/*!****************************************************************!*\
  !*** ./src/app/order-wizard/form-paquete/form-paquete.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPaquetePage": () => (/* binding */ FormPaquetePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_form_paquete_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./form-paquete.page.html */ 30531);
/* harmony import */ var _form_paquete_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-paquete.page.scss */ 19599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let FormPaquetePage = class FormPaquetePage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    gotoFormPaqueterias() {
        this.router.navigate([`form-paqueterias`]);
    }
};
FormPaquetePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
FormPaquetePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-form-paquete',
        template: _raw_loader_form_paquete_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_paquete_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FormPaquetePage);



/***/ }),

/***/ 19599:
/*!******************************************************************!*\
  !*** ./src/app/order-wizard/form-paquete/form-paquete.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form-input {\n  width: 100%;\n  height: 34px;\n  border-radius: 5px;\n  border: 1px solid #bdbcbc;\n  padding-left: 10px;\n  color: #444444;\n}\n\n.form-input:focus {\n  outline: none;\n  border: 1px solid #1b97f5;\n  box-shadow: 0 0 10px #9ecaed;\n}\n\nion-row {\n  margin-bottom: 18px;\n}\n\ninput[type=checkbox] {\n  transform: scale(1.2);\n  margin-right: 7px;\n  margin-top: 2px;\n}\n\n.checkbox-text {\n  font-size: 15px;\n  display: block;\n}\n\nbutton {\n  border-radius: 5px;\n  color: white;\n  background: #49ad3c;\n  height: 34px;\n  width: 100%;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-header {\n  background-image: linear-gradient(to right, #039be5 0%, #039be5 100%);\n}\n\n.topchat-title {\n  color: #fff;\n  font-size: 1.2rem;\n}\n\n.sc-ion-searchbar-md-h {\n  --border-radius: 20px !important;\n}\n\n.color-header {\n  background-image: linear-gradient(to right, #fb0f3a 0%, #fb0f3a 100%);\n}\n\n.font-mai {\n  font-family: \"Arista\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tcGFxdWV0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0kscUVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFQTtFQUdJLHFFQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtBQURKIiwiZmlsZSI6ImZvcm0tcGFxdWV0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJjYmM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogIzQ0NDQ0NDtcclxufVxyXG5cclxuLmZvcm0taW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxYjk3ZjU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjOWVjYWVkO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICM0OWFkM2M7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMzliZTUgMCUsICMwMzliZTUgMTAwJSk7XHJcbn1cclxuXHJcbi50b3BjaGF0LXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5zYy1pb24tc2VhcmNoYmFyLW1kLWgge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2xvci1oZWFkZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJlNzdmMSFpbXBvcnRhbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAjMmU3N2YxICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYjBmM2EgMCUsICNmYjBmM2EgMTAwJSk7XHJcbn1cclxuXHJcbi5mb250LW1haSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaXN0YSc7XHJcbn0iXX0= */");

/***/ }),

/***/ 30531:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-wizard/form-paquete/form-paquete.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"color-header\">\r\n    <ion-grid style=\"height: 50px\">\r\n        <ion-row>\r\n            <ion-col size=\"1\">\r\n                <ion-icon (click)=\"goBack()\" style=\"font-size: 30px; color: white; margin: 0px 5px\" name=\"chevron-back-outline\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col class=\"font-mai\" style=\"color: #fff; margin-top: 7px; font-size: 1.5rem; margin-left: 10px;\">\r\n                topmai envío\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n                <img src=\"assets/homePage/scanIcon.png\" style=\"width: 25px\" />\r\n                <ion-icon style=\"color: white;font-size: 25px;margin-left: 10px\" name=\"ellipsis-vertical\"></ion-icon>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <!-- <ion-grid style=\"background: #f5f4f4; margin:25px; padding: 20px 15px\">\r\n        <ion-row style=\"font-weight: bold\">\r\n            Copia y Pega\r\n        </ion-row>\r\n        <ion-item>\r\n            <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Pega la dirección completa de envío y distribuye la información\"></ion-textarea>\r\n        </ion-item>\r\n    </ion-grid> -->\r\n\r\n\r\n\r\n    <ion-grid style=\"background: #f5f4f4; margin:25px; padding: 20px 15px\">\r\n        <ion-row style=\"font-weight: bold\">\r\n            Dimensiones del paquete\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Personalizado\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Largo(CM)\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Ancho(CM)\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Alto(CM)\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Peso(KG)\" />\r\n        </ion-row>\r\n        <ion-row style=\"font-weight: bold\">\r\n            Cantidad de paquetes\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Cantidad\" />\r\n        </ion-row>\r\n        <ion-row>\r\n\r\n            <label class=\"checkbox-text\" for=\"fill-form-one\">AI continuar confirmo que conozco y acepto los Terminos y Politicas</label>\r\n        </ion-row>\r\n        <ion-row style=\"margin-bottom: 0px\" (click)=\"gotoFormPaqueterias()\">\r\n            <button>\r\n        Guardar y continuar\r\n      </button>\r\n\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_order-wizard_form-paquete_form-paquete_module_ts.js.map