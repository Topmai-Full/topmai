(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_authentication_presentation_presentation_module_ts"],{

/***/ 79282:
/*!****************************************************************************!*\
  !*** ./src/app/authentication/presentation/presentation-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresentationPageRoutingModule": () => (/* binding */ PresentationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _presentation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentation.page */ 27231);




const routes = [
    {
        path: '',
        component: _presentation_page__WEBPACK_IMPORTED_MODULE_0__.PresentationPage
    }
];
let PresentationPageRoutingModule = class PresentationPageRoutingModule {
};
PresentationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PresentationPageRoutingModule);



/***/ }),

/***/ 96394:
/*!********************************************************************!*\
  !*** ./src/app/authentication/presentation/presentation.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresentationPageModule": () => (/* binding */ PresentationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _presentation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentation-routing.module */ 79282);
/* harmony import */ var _presentation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation.page */ 27231);







let PresentationPageModule = class PresentationPageModule {
};
PresentationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _presentation_routing_module__WEBPACK_IMPORTED_MODULE_0__.PresentationPageRoutingModule
        ],
        declarations: [_presentation_page__WEBPACK_IMPORTED_MODULE_1__.PresentationPage]
    })
], PresentationPageModule);



/***/ }),

/***/ 27231:
/*!******************************************************************!*\
  !*** ./src/app/authentication/presentation/presentation.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresentationPage": () => (/* binding */ PresentationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_presentation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./presentation.page.html */ 80214);
/* harmony import */ var _presentation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentation.page.scss */ 39716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.page */ 4059);
/* harmony import */ var _sign_in_sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sign-in/sign-in.page */ 28415);



/* eslint-disable @typescript-eslint/naming-convention */






let PresentationPage = class PresentationPage {
    constructor(location, modalController, router) {
        this.location = location;
        this.modalController = modalController;
        this.router = router;
    }
    ngOnInit() {
    }
    Login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _login_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage,
            });
            return yield modal.present();
        });
    }
    Register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _sign_in_sign_in_page__WEBPACK_IMPORTED_MODULE_3__.SignInPage,
            });
            return yield modal.present();
        });
    }
    goBack() {
        this.location.back();
    }
};
PresentationPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
PresentationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-presentation',
        template: _raw_loader_presentation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_presentation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PresentationPage);



/***/ }),

/***/ 39716:
/*!********************************************************************!*\
  !*** ./src/app/authentication/presentation/presentation.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  color: rgba(128, 128, 128, 0.459) !important;\n  border-radius: 15px;\n  border-color: #c9c9c9;\n  border-width: 2px;\n  border-style: solid;\n  margin-bottom: 10px;\n}\n\nion-input {\n  border: 1px solid #dddfe2;\n  border-radius: 15px;\n  margin-bottom: 10px;\n}\n\nion-button {\n  text-transform: uppercase;\n  --border-radius: 15px;\n  margin-bottom: 10px;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide img {\n  width: 70%;\n  margin-top: 4rem;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNlbnRhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJBO0VBQ0ksNENBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBeEJKOztBQTJCQTtFQUVJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXpCSjs7QUE0QkE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUF6Qko7O0FBOEJBO0VBQ0ksWUFBQTtBQTNCSjs7QUE4QkE7RUFDSSxjQUFBO0FBM0JKOztBQWtDQTtFQUdJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBakNKOztBQW9DQTtFQUNJLGdCQUFBO0FBakNKOztBQW9DQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQWpDSjs7QUFvQ0E7RUFDSSxxQ0FBQTtBQWpDSiIsImZpbGUiOiJwcmVzZW50YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmltZy1wZXJmaWwgaW1nIHtcclxuLy8gICAgIHdpZHRoOiA1MCU7XHJcbi8vICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbi8vICAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogOTUlO1xyXG4vLyAgICAgcmlnaHQ6IDUwJTtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcbi8vIH1cclxuLy8gLmltZy1wZXJmaWwge1xyXG4vLyAgICAgY29sb3I6ICMwMDAwMDA7XHJcbi8vICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDUwJTtcclxuLy8gICAgIGxlZnQ6IDUwJTtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogZGlzYWJsZWQgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyAuaW1nLXBlcmZpbCBpbWcge1xyXG4vLyAgICAgd2lkdGg6IDUwJTtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4vLyB9XHJcbmlvbi1pdGVtIHtcclxuICAgIGNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDU5KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIwMSwgMjAxLCAyMDEpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogcmdiKDIwMSwgMjAxLCAyMDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGZlMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjMzVDQTc1O1xyXG4gICAgLy8gLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSBoMiB7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyLjhyZW07XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUgaW1nIHtcclxuICAgIC8vIG1heC1oZWlnaHQ6IDUwJTtcclxuICAgIC8vIG1heC13aWR0aDogNTAlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuYiB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5wIHtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxufVxyXG5cclxucCBiIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XHJcbn0iXX0= */");

/***/ }),

/***/ 80214:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/presentation/presentation.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\r\n  <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n    <ion-icon style=\"font-size: 30px; \" name=\"chevron-back-outline\"></ion-icon>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n<ion-content class=\"ion-padding ion-text-center\">\r\n  <ion-slide>\r\n    <div class=\"slide\">\r\n      <img src=\"../../../assets/topmai.svg\" />\r\n      <h2>Bienvenido</h2>\r\n      <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of\r\n        proper code use.</p>\r\n      <ion-button style=\"--background: #35CA75;\" expand='block' (click)=\"Login()\">Ingresar</ion-button>\r\n      <ion-button style=\"--background: #35CA75;\" expand='block' (click)=\"Register()\">Registrarse</ion-button>\r\n    </div>\r\n  </ion-slide>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_authentication_presentation_presentation_module_ts.js.map