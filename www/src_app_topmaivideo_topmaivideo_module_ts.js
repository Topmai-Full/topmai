(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_topmaivideo_topmaivideo_module_ts"],{

/***/ 39623:
/*!***********************************************************!*\
  !*** ./src/app/topmaivideo/topmaivideo-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopmaivideoPageRoutingModule": () => (/* binding */ TopmaivideoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _topmaivideo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topmaivideo.page */ 61267);




const routes = [
    {
        path: '',
        component: _topmaivideo_page__WEBPACK_IMPORTED_MODULE_0__.TopmaivideoPage
    }
];
let TopmaivideoPageRoutingModule = class TopmaivideoPageRoutingModule {
};
TopmaivideoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TopmaivideoPageRoutingModule);



/***/ }),

/***/ 90252:
/*!***************************************************!*\
  !*** ./src/app/topmaivideo/topmaivideo.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopmaivideoPageModule": () => (/* binding */ TopmaivideoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _topmaivideo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topmaivideo-routing.module */ 39623);
/* harmony import */ var _topmaivideo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topmaivideo.page */ 61267);







let TopmaivideoPageModule = class TopmaivideoPageModule {
};
TopmaivideoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _topmaivideo_routing_module__WEBPACK_IMPORTED_MODULE_0__.TopmaivideoPageRoutingModule
        ],
        declarations: [_topmaivideo_page__WEBPACK_IMPORTED_MODULE_1__.TopmaivideoPage]
    })
], TopmaivideoPageModule);



/***/ }),

/***/ 61267:
/*!*************************************************!*\
  !*** ./src/app/topmaivideo/topmaivideo.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopmaivideoPage": () => (/* binding */ TopmaivideoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_topmaivideo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./topmaivideo.page.html */ 78550);
/* harmony import */ var _topmaivideo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topmaivideo.page.scss */ 34976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);





let TopmaivideoPage = class TopmaivideoPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
};
TopmaivideoPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
TopmaivideoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-topmaivideo',
        template: _raw_loader_topmaivideo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_topmaivideo_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TopmaivideoPage);



/***/ }),

/***/ 34976:
/*!***************************************************!*\
  !*** ./src/app/topmaivideo/topmaivideo.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: transparent;\n}\n\n.imgmai {\n  height: 49px;\n  margin-left: -1px;\n  margin-top: -1px;\n  object-fit: cover;\n  width: 49px;\n}\n\nion-content {\n  --background: url(\"/assets/jirafa.jpg\") no-repeat center/cover fixed;\n}\n\n.icon1 {\n  color: #000000;\n  font-size: 20px;\n  position: absolute;\n  top: 40%;\n  left: 77%;\n  transform: translate(50%, -50%);\n}\n\n.icon1 img {\n  border-radius: 50px;\n  border: 1px solid #d3d5da;\n}\n\n.icon2 {\n  color: white;\n  font-size: 40px;\n  position: absolute;\n  top: 50%;\n  left: 79%;\n  transform: translate(50%, -50%);\n}\n\n.icon3 {\n  color: white;\n  font-size: 40px;\n  position: absolute;\n  top: 60%;\n  left: 79%;\n  transform: translate(50%, -50%);\n}\n\n.icon4 {\n  color: white;\n  font-size: 40px;\n  position: absolute;\n  top: 70%;\n  left: 79%;\n  transform: translate(50%, -50%);\n}\n\nion-segment-button {\n  --background-checked: rgba(0, 0, 0, 0.089);\n  --color-checked: var(--ion-color-dark-contrast);\n  --border-radius: 15px;\n  --indicator-color: transparent;\n  --background: transparent ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcG1haXZpZGVvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUtBO0VBRUksb0VBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0FBSEo7O0FBTUE7RUFDSSxtQkFBQTtFQUVBLHlCQUFBO0FBSko7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtBQUpKOztBQU9BO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7QUFKSjs7QUFPQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0FBSko7O0FBT0E7RUFDSSwwQ0FBQTtFQUNBLCtDQUFBO0VBQ0EscUJBQUE7RUFHQSw4QkFBQTtFQUNBLDBCQUFBO0FBTkoiLCJmaWxlIjoidG9wbWFpdmlkZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWhlYWRlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYjBmM2EgMCUsICNmYjBmM2EgMTAwJSk7XHJcbi8vIH1cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmltZ21haSB7XHJcbiAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiA0OXB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9qaXJhZmEuanBnJykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcclxufVxyXG5cclxuLmljb24xIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiA3NyU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG59XHJcblxyXG4uaWNvbjEgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAvLyBib3JkZXI6ICM2NTY3NmI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNWRhO1xyXG59XHJcblxyXG4uaWNvbjIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA3OSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG59XHJcblxyXG4uaWNvbjMge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2MCU7XHJcbiAgICBsZWZ0OiA3OSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG59XHJcblxyXG4uaWNvbjQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3MCU7XHJcbiAgICBsZWZ0OiA3OSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYmEoMCwgMCwgMCwgMC4wODkpO1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAvLyAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgLy8gLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCk7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbn0iXX0= */");

/***/ }),

/***/ 78550:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/topmaivideo/topmaivideo.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n            <ion-icon style=\"font-size: 30px; color: #65676b;\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-buttons>\r\n        <ion-title class=\"font-mai\" style=\"color: #65676b; text-align: center;\">TopmaiVideos</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button>\r\n                <ion-icon style=\"font-size: 30px; color: #65676b;\" name='camera-outline'></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n\r\n</ion-header> -->\r\n\r\n<!-- <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n  <ion-infinite-scroll-content\r\n    loadingSpinner=\"bubbles\"\r\n    loadingText=\"Loading more data...\">\r\n  </ion-infinite-scroll-content>\r\n</ion-infinite-scroll> -->\r\n\r\n<ion-content class=\"ion-padding ion-text-center\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n            <ion-icon style=\"font-size: 30px; color: white;\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-buttons>\r\n        <ion-title class=\"font-mai\">\r\n            <ion-segment value=\"all\">\r\n                <ion-segment-button value=\"all\">\r\n                    <ion-label>Siguiendo</ion-label>\r\n                </ion-segment-button>\r\n                <ion-segment-button value=\"favorites\">\r\n                    <ion-label>Para ti</ion-label>\r\n                </ion-segment-button>\r\n            </ion-segment>\r\n        </ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button>\r\n                <ion-icon style=\"font-size: 30px; color: white;\" name='camera-outline'></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n\r\n    <div class=\"icon1\">\r\n        <img class=\"imgmai\" src=\"assets/dog.jpg\">\r\n    </div>\r\n    <div class=\"icon2\">\r\n        <ion-icon name=\"heart\"></ion-icon>\r\n    </div>\r\n    <div class=\"icon3\">\r\n        <ion-icon name=\"chatbubble-ellipses\"></ion-icon>\r\n    </div>\r\n    <div class=\"icon4\">\r\n        <ion-icon name=\"arrow-redo\"></ion-icon>\r\n    </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_topmaivideo_topmaivideo_module_ts.js.map