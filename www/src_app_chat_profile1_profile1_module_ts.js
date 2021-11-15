(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_profile1_profile1_module_ts"],{

/***/ 69131:
/*!**********************************************************!*\
  !*** ./src/app/chat/profile1/profile1-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Profile1PageRoutingModule": () => (/* binding */ Profile1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile1.page */ 44560);




const routes = [
    {
        path: '',
        component: _profile1_page__WEBPACK_IMPORTED_MODULE_0__.Profile1Page,
    }
];
let Profile1PageRoutingModule = class Profile1PageRoutingModule {
};
Profile1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Profile1PageRoutingModule);



/***/ }),

/***/ 30166:
/*!**************************************************!*\
  !*** ./src/app/chat/profile1/profile1.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Profile1PageModule": () => (/* binding */ Profile1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile1-routing.module */ 69131);
/* harmony import */ var _profile1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile1.page */ 44560);







let Profile1PageModule = class Profile1PageModule {
};
Profile1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Profile1PageRoutingModule
        ],
        declarations: [_profile1_page__WEBPACK_IMPORTED_MODULE_1__.Profile1Page]
    })
], Profile1PageModule);



/***/ }),

/***/ 44560:
/*!************************************************!*\
  !*** ./src/app/chat/profile1/profile1.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Profile1Page": () => (/* binding */ Profile1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile1.page.html */ 73419);
/* harmony import */ var _profile1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile1.page.scss */ 40927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);






let Profile1Page = class Profile1Page {
    constructor(router, location) {
        this.router = router;
        this.location = location;
    }
    ngOnInit() {
    }
    goBackk() {
        this.location.back();
    }
};
Profile1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
Profile1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-profile1',
        template: _raw_loader_profile1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Profile1Page);



/***/ }),

/***/ 40927:
/*!**************************************************!*\
  !*** ./src/app/chat/profile1/profile1.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: white;\n}\nion-toolbar ion-title {\n  font-size: 2rem;\n}\nion-content {\n  --background: white;\n}\nion-content .top-holder {\n  background: white;\n}\nion-content .top-holder ion-avatar {\n  --border-radius: 0;\n  height: 5rem;\n  width: 5rem;\n}\nion-content .menu-list {\n  margin-bottom: 20px;\n}\n.font-mai {\n  font-family: \"Arista\";\n  font-size: 25px !important;\n}\n.cover-image {\n  width: 100%;\n  object-fit: cover;\n  height: 250px;\n}\n.img-perfil img {\n  width: 45%;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 5px solid white;\n  position: absolute;\n  top: 95%;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n.text-perfil {\n  position: absolute;\n  top: 135%;\n  right: 50%;\n  transform: translate(50%, -50%);\n  color: black;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUVBO0VBQ0ksbUJBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7QUFFUjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdaO0FBQUk7RUFDSSxtQkFBQTtBQUVSO0FBRUE7RUFDSSxxQkFBQTtFQUNBLDBCQUFBO0FBQ0o7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDSjtBQUVBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6InByb2ZpbGUxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC50b3AtaG9sZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZW51LWxpc3Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb250LW1haSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaXN0YSc7XHJcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvdmVyLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uaW1nLXBlcmZpbCBpbWcge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDk1JTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG59XHJcblxyXG4udGV4dC1wZXJmaWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMzUlO1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAvLyBsZXR0ZXItc3BhY2luZzogMS4ycHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vLyBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAtOTBweDtsZWZ0OiAxMjBweFwiIl19 */");

/***/ }),

/***/ 73419:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/profile1/profile1.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\" (click)=\"goBackk()\">\r\n\r\n            <ion-icon style=\"font-size: 30px; color: black;\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"secondary\">\r\n            <ion-button>\r\n                <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\r\n\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"font-mai\">topmai</ion-title>\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<!-- <ion-content>\r\n    <div class=\"top-holder\">\r\n        <ion-row>\r\n            <ion-col size=\"3\" class=\"flex al-center\">\r\n                <ion-avatar>\r\n                    <img src=\"assets/imgs/user.png\" />\r\n                </ion-avatar>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n                <h4>Name: Topmai</h4>\r\n                <h4>WeChat ID: <span>topmai-com-mx</span></h4>\r\n                <h4>Region: <span>Mexico City</span></h4>\r\n            </ion-col>\r\n        </ion-row>\r\n    </div>\r\n\r\n    <div class=\"menu-list\">\r\n     \r\n        <ion-item lines=\"none\" detail>\r\n            <ion-label>Privacy</ion-label>\r\n        </ion-item>\r\n    </div>\r\n\r\n    <div class=\"menu-list\">\r\n        <ion-item lines=\"none\" detail>\r\n            <ion-label>Moments</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" detail>\r\n            <ion-label>More</ion-label>\r\n        </ion-item>\r\n    </div>\r\n\r\n    <div class=\"bottom-list\">\r\n        <ion-item lines=\"none\">\r\n            <img src=\"assets/imgs/sendmsg.svg\" alt=\"\" slot=\"start\">\r\n            <ion-label>Send Message</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n            <img src=\"assets/imgs/video.svg\" alt=\"\" slot=\"start\">\r\n            <ion-label>Voice or Video Call</ion-label>\r\n        </ion-item>\r\n    </div>\r\n\r\n\r\n</ion-content> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ion-content>\r\n    <div style=\"position: relative; margin-bottom: 4rem;\">\r\n        <img class=\"cover-image\" src=\"assets/chat/discover/cover.png\">\r\n\r\n\r\n        <div class=\"img-perfil\">\r\n            <img src=\"assets/chat/contacts/1.png\">\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <ion-list lines=\"full\" class=\"ion-no-margin\">\r\n\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Nombre</ion-label>\r\n            topmai\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n            <ion-label>ID topmai</ion-label>\r\n            topmai.com.mx\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Región</ion-label>\r\n            Ciudad de méxico\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Género</ion-label>\r\n            Masculino\r\n        </ion-item>\r\n\r\n        <hr style=\"border-top: 8px solid #f6f3f3;\">\r\n\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Privacidad</ion-label>\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Momentos</ion-label>\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <hr style=\"border-top: 8px solid #f6f3f3;\">\r\n\r\n\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Envíar mensaje</ion-label>\r\n            <img src=\"assets/imgs/sendmsg.svg\" alt=\"\" slot=\"end\">\r\n            <!-- <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon>\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon> -->\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Videollamada</ion-label>\r\n            <img src=\"assets/imgs/video.svg\" alt=\"\" slot=\"end\">\r\n            <!-- <ion-icon name=\"videocam-outline\"></ion-icon>\r\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon> -->\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_profile1_profile1_module_ts.js.map