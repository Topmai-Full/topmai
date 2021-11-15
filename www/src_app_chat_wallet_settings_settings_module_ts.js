(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_wallet_settings_settings_module_ts"],{

/***/ 65225:
/*!*****************************************************************!*\
  !*** ./src/app/chat/wallet/settings/settings-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 46851);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 19274:
/*!*********************************************************!*\
  !*** ./src/app/chat/wallet/settings/settings.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 65225);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 46851);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 46851:
/*!*******************************************************!*\
  !*** ./src/app/chat/wallet/settings/settings.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./settings.page.html */ 3860);
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss */ 85017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);





let SettingsPage = class SettingsPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingsPage);



/***/ }),

/***/ 85017:
/*!*********************************************************!*\
  !*** ./src/app/chat/wallet/settings/settings.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3860:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/wallet/settings/settings.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode='ios'>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n            <ion-icon style=\"font-size: 30px; \" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Configuración</ion-title>\r\n\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\r\n\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Seguridad de cuenta</ion-label>\r\n\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n\r\n        <hr style=\"border-top: 8px solid #f6f3f3;\">\r\n\r\n        <ion-item>\r\n            <ion-label>General</ion-label>\r\n\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Privacidad</ion-label>\r\n\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>Chats</ion-label>\r\n\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>No molestar</ion-label>\r\n\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Notificaciones</ion-label>\r\n\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n\r\n        <hr style=\"border-top: 8px solid #f6f3f3;\">\r\n\r\n        <ion-item>\r\n            <ion-label>Acerca de</ion-label>\r\n\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Ayuda y comentarios</ion-label>\r\n\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n        <hr style=\"border-top: 8px solid #f6f3f3;\">\r\n\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Topmai Services</ion-label>\r\n\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n\r\n\r\n\r\n    </ion-list>\r\n\r\n\r\n\r\n\r\n    <div class=\"ion-padding\">\r\n        <ion-button mode='ios' expand=\"block\">Cambiar de cuenta</ion-button>\r\n        <ion-button mode='ios' style=\"--background: #fb0f3a;\" expand=\"block\">Cerrar sesión</ion-button>\r\n\r\n    </div>\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_wallet_settings_settings_module_ts.js.map