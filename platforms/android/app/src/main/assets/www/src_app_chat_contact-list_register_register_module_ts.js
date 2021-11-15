(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_contact-list_register_register_module_ts"],{

/***/ 15977:
/*!***********************************************************************!*\
  !*** ./src/app/chat/contact-list/register/register-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 3139);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 55955:
/*!***************************************************************!*\
  !*** ./src/app/chat/contact-list/register/register.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 15977);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 3139);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 3139:
/*!*************************************************************!*\
  !*** ./src/app/chat/contact-list/register/register.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 42097);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 78684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let RegisterPage = class RegisterPage {
    constructor() { }
    ngOnInit() {
    }
};
RegisterPage.ctorParameters = () => [];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 78684:
/*!***************************************************************!*\
  !*** ./src/app/chat/contact-list/register/register.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #F3F3F3;\n}\n\nion-content ion-item ion-checkbox {\n  --background-checked: #14CC9A;\n  --border-color-checked: #14CC9A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBSVE7RUFDSSw2QkFBQTtFQUNBLCtCQUFBO0FBRFoiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjNGM0YzO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgaW9uLWNoZWNrYm94IHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMxNENDOUE7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICMxNENDOUE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 42097:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/contact-list/register/register.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-title>Topmai</ion-title>\r\n        <!-- <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" color=\"dark\">\r\n                <ion-icon slot=\"start\" name=\"search\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons> -->\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" color=\"dark\">\r\n                <ion-icon slot=\"start\" name=\"add-circle\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n    <ion-searchbar mode='ios' placeholder='Busqueda rápida...'></ion-searchbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div style=\"margin: 10px\">\r\n\r\n        <div style=\"font-size: 15px;margin-top: 10px;display: flex; justify-content: space-between;align-items: center; font-weight: bold;\">\r\n            <ion-icon name=\"call\" style=\"font-size: 30px; color: green;\"></ion-icon>\r\n            <p style=\"display: block; width: 90%; margin-left: 20px; font-size: 15px; font-weight: normal;\"> Contactos de celular</p>\r\n\r\n            <ion-icon style=\"width: 10%;font-size:20px;display: block; color: #75767763;\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <hr style=\"border-top: 20px solid #f6f3f3;\"> -->\r\n    <!-- \r\n    <ion-item lines=\"none\">\r\n        <img src=\"assets/imgs/wechat.png\" alt=\"\" slot=\"start\">\r\n        <ion-label>\r\n            <h1>WeChat Team</h1>\r\n            <p class=\"ion-text-wrap\">Welcome to WeChat! You now have the most....</p>\r\n        </ion-label>\r\n        <div class=\"end-slot\" slot=\"end\">\r\n            <h6>Tue</h6>\r\n        </div>\r\n    </ion-item> -->\r\n    <hr style=\"border-top: 20px solid #f6f3f3;\">\r\n    <ion-list>\r\n        <ion-list-header>\r\n            Contactos\r\n        </ion-list-header>\r\n\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"https://ionicframework.com/docs/demos/api/avatar/avatar.svg\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Giovanni Daniel</h2>\r\n\r\n                <p>Listen, I've had a pretty messed up day...</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"https://ionicframework.com/docs/demos/api/avatar/avatar.svg\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Javier Trejo</h2>\r\n\r\n                <p>I've got enough on my plate as it is, and I...</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"https://ionicframework.com/docs/demos/api/avatar/avatar.svg\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Francisco</h2>\r\n\r\n                <p>You will remove these restraints and leave...</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n\r\n    </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_contact-list_register_register_module_ts.js.map