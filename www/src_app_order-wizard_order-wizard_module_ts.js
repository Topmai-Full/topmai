(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_order-wizard_order-wizard_module_ts"],{

/***/ 17569:
/*!*************************************************************!*\
  !*** ./src/app/order-wizard/order-wizard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderWizardPageRoutingModule": () => (/* binding */ OrderWizardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _order_wizard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-wizard.page */ 47631);




const routes = [
    {
        path: '',
        component: _order_wizard_page__WEBPACK_IMPORTED_MODULE_0__.OrderWizardPage
    },
    {
        path: 'form-paquete',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_order-wizard_form-paquete_form-paquete_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./form-paquete/form-paquete.module */ 25900)).then(m => m.FormPaquetePageModule)
    },
    {
        path: 'form-paqueterias',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_order-wizard_form-paqueterias_form-paqueterias_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./form-paqueterias/form-paqueterias.module */ 69118)).then(m => m.FormPaqueteriasPageModule)
    }
];
let OrderWizardPageRoutingModule = class OrderWizardPageRoutingModule {
};
OrderWizardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderWizardPageRoutingModule);



/***/ }),

/***/ 56583:
/*!*****************************************************!*\
  !*** ./src/app/order-wizard/order-wizard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderWizardPageModule": () => (/* binding */ OrderWizardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _order_wizard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-wizard-routing.module */ 17569);
/* harmony import */ var _order_wizard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-wizard.page */ 47631);







let OrderWizardPageModule = class OrderWizardPageModule {
};
OrderWizardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_wizard_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderWizardPageRoutingModule
        ],
        declarations: [_order_wizard_page__WEBPACK_IMPORTED_MODULE_1__.OrderWizardPage]
    })
], OrderWizardPageModule);



/***/ }),

/***/ 47631:
/*!***************************************************!*\
  !*** ./src/app/order-wizard/order-wizard.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderWizardPage": () => (/* binding */ OrderWizardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_order_wizard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-wizard.page.html */ 79271);
/* harmony import */ var _order_wizard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-wizard.page.scss */ 91007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let OrderWizardPage = class OrderWizardPage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    gotoFormPaquete() {
        this.router.navigate([`form-paquete`]);
    }
};
OrderWizardPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
OrderWizardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-order-wizard',
        template: _raw_loader_order_wizard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_wizard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderWizardPage);



/***/ }),

/***/ 91007:
/*!*****************************************************!*\
  !*** ./src/app/order-wizard/order-wizard.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form-input {\n  width: 100%;\n  height: 34px;\n  border-radius: 5px;\n  border: 1px solid #bdbcbc;\n  padding-left: 10px;\n  color: #444444;\n}\n\n.form-input:focus {\n  outline: none;\n  border: 1px solid #1b97f5;\n  box-shadow: 0 0 10px #9ecaed;\n}\n\nion-row {\n  margin-bottom: 18px;\n}\n\ninput[type=checkbox] {\n  transform: scale(1.2);\n  margin-right: 7px;\n  margin-top: 2px;\n}\n\n.checkbox-text {\n  font-size: 15px;\n  display: block;\n}\n\nbutton {\n  border-radius: 5px;\n  color: white;\n  background: #49ad3c;\n  height: 34px;\n  width: 100%;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-header {\n  background-image: linear-gradient(to right, #039be5 0%, #039be5 100%);\n}\n\n.topchat-title {\n  color: #fff;\n  font-size: 1.2rem;\n}\n\n.sc-ion-searchbar-md-h {\n  --border-radius: 20px !important;\n}\n\n.color-header {\n  background-image: linear-gradient(to right, #fb0f3a 0%, #fb0f3a 100%);\n}\n\n.font-mai {\n  font-family: \"Arista\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLXdpemFyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0kscUVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFQTtFQUdJLHFFQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtBQURKIiwiZmlsZSI6Im9yZGVyLXdpemFyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJjYmM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogIzQ0NDQ0NDtcclxufVxyXG5cclxuLmZvcm0taW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxYjk3ZjU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjOWVjYWVkO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4uY2hlY2tib3gtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICM0OWFkM2M7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMzliZTUgMCUsICMwMzliZTUgMTAwJSk7XHJcbn1cclxuXHJcbi50b3BjaGF0LXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5zYy1pb24tc2VhcmNoYmFyLW1kLWgge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2xvci1oZWFkZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJlNzdmMSFpbXBvcnRhbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAjMmU3N2YxICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYjBmM2EgMCUsICNmYjBmM2EgMTAwJSk7XHJcbn1cclxuXHJcbi5mb250LW1haSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaXN0YSc7XHJcbn0iXX0= */");

/***/ }),

/***/ 79271:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-wizard/order-wizard.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"color-header\">\r\n    <ion-grid style=\"height: 50px\">\r\n        <ion-row>\r\n            <ion-col size=\"1\">\r\n                <ion-icon (click)=\"goBack()\" style=\"font-size: 30px; color: white; margin: 0px 5px\" name=\"chevron-back-outline\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col class=\"font-mai\" style=\"color: #fff; margin-top: 7px; font-size: 1.5rem; margin-left: 10px;\">\r\n                topmai envío\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n                <img src=\"assets/homePage/scanIcon.png\" style=\"width: 25px\" />\r\n                <ion-icon style=\"color: white;font-size: 25px;margin-left: 10px\" name=\"ellipsis-vertical\"></ion-icon>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-grid style=\"background: #f5f4f4; margin:25px; padding: 20px 15px\">\r\n        <ion-row style=\"font-weight: bold\">\r\n            Copia y Pega\r\n        </ion-row>\r\n        <ion-item>\r\n            <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Pega la dirección completa de envío y distribuye la información\"></ion-textarea>\r\n        </ion-item>\r\n    </ion-grid>\r\n\r\n    <ion-grid style=\"background: #f5f4f4; margin:25px; padding: 20px 15px\">\r\n        <ion-row style=\"font-weight: bold\">\r\n            Direccion de origen\r\n        </ion-row>\r\n        <ion-row>\r\n            <select class=\"form-input\">\r\n          <option value=\"volvo\">Buscar en libreta de direcciones</option>\r\n          <option value=\"saab\">Mexica</option>\r\n          <option value=\"audi\">Brazil</option>\r\n          <option value=\"fiat\">Canada</option>\r\n        </select>\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Nombre de la persona\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Compania (Opcional)\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Correo electronico (Opcional)\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Telefono (10 digitos)\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <select class=\"form-input\">\r\n          <option value=\"volvo\">Selecciona  un pais</option>\r\n          <option value=\"saab\">Mexica</option>\r\n          <option value=\"audi\">Brazil</option>\r\n          <option value=\"fiat\">Canada</option>\r\n        </select>\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Codigo postal\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Direccion 1\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Direccion 2\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Ciudad\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <select class=\"form-input\">\r\n          <option value=\"volvo\">Selecciona un estado</option>\r\n          <option value=\"saab\">Mexica</option>\r\n          <option value=\"audi\">Brazil</option>\r\n          <option value=\"fiat\">Canada</option>\r\n        </select>\r\n        </ion-row>\r\n        <ion-row style=\"margin-bottom: 0px\">\r\n            <input type=\"checkbox\" id=\"form-one\" name=\"form-one\" placeholder=\"Estado\" />\r\n            <label class=\"checkbox-text\" for=\"form-one\">Agregar a mi libreta de direcciones</label>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid style=\"background: #f5f4f4; margin:25px; padding: 20px 15px\">\r\n        <ion-row style=\"font-weight: bold\">\r\n            Direccion de destino\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Buscar en libreta de direcciones\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Nombre de la persona\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Compania (Opcional)\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Correo electronico (Opcional)\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Telefono (10 digitos)\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <select class=\"form-input\">\r\n          <option value=\"volvo\">Selecciona  un pais</option>\r\n          <option value=\"saab\">Saab</option>\r\n          <option value=\"fiat\">Fiat</option>\r\n          <option value=\"audi\">Audi</option>\r\n        </select>\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Codigo postal\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Calle y numero\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <select class=\"form-input\">\r\n          <option value=\"volvo\">Selecciona un Colonia</option>\r\n          <option value=\"saab\">Saab</option>\r\n          <option value=\"fiat\">Fiat</option>\r\n          <option value=\"audi\">Audi</option>\r\n        </select>\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Ciudad\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <select class=\"form-input\">\r\n          <option value=\"volvo\">Selecciona un estado</option>\r\n          <option value=\"saab\">Saab</option>\r\n          <option value=\"fiat\">Fiat</option>\r\n          <option value=\"audi\">Audi</option>\r\n        </select>\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Referencias\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input class=\"form-input\" placeholder=\"Contenido del paquete (obligatorio)\" />\r\n        </ion-row>\r\n        <ion-row>\r\n            <input type=\"checkbox\" id=\"fill-form-one\" name=\"form-one\" placeholder=\"Estado\" />\r\n            <label class=\"checkbox-text\" for=\"fill-form-one\">Agregar a mi libreta de direcciones</label>\r\n        </ion-row>\r\n        <ion-row style=\"margin-bottom: 0px\">\r\n            <button (click)=\"gotoFormPaquete()\">\r\n          Guardar y continuar\r\n        </button>\r\n\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_order-wizard_order-wizard_module_ts.js.map