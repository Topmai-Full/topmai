(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_vehiculos_vehiculos_module_ts"],{

/***/ 46396:
/*!*******************************************************!*\
  !*** ./src/app/vehiculos/vehiculos-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiculosPageRoutingModule": () => (/* binding */ VehiculosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _vehiculos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehiculos.page */ 31722);




const routes = [
    {
        path: '',
        component: _vehiculos_page__WEBPACK_IMPORTED_MODULE_0__.VehiculosPage
    }
];
let VehiculosPageRoutingModule = class VehiculosPageRoutingModule {
};
VehiculosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VehiculosPageRoutingModule);



/***/ }),

/***/ 18501:
/*!***********************************************!*\
  !*** ./src/app/vehiculos/vehiculos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiculosPageModule": () => (/* binding */ VehiculosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _vehiculos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehiculos-routing.module */ 46396);
/* harmony import */ var _vehiculos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehiculos.page */ 31722);







let VehiculosPageModule = class VehiculosPageModule {
};
VehiculosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vehiculos_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehiculosPageRoutingModule
        ],
        declarations: [_vehiculos_page__WEBPACK_IMPORTED_MODULE_1__.VehiculosPage]
    })
], VehiculosPageModule);



/***/ }),

/***/ 31722:
/*!*********************************************!*\
  !*** ./src/app/vehiculos/vehiculos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiculosPage": () => (/* binding */ VehiculosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_vehiculos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vehiculos.page.html */ 20713);
/* harmony import */ var _vehiculos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehiculos.page.scss */ 9807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);





let VehiculosPage = class VehiculosPage {
    constructor(location) {
        this.location = location;
        this.imageSet = [
            [{ path: 'assets/homePage/single-items/1/slider1.jpg' },
                { path: 'assets/homePage/single-items/1/slider1.jpg' },
                { path: 'assets/homePage/single-items/1/slider1.jpg' },],
            [{ path: 'assets/homePage/single-items/1/slider2.jpg' },
                { path: 'assets/homePage/single-items/1/slider2.jpg' },
                { path: 'assets/homePage/single-items/1/slider2.jpg' },],
            [{ path: 'assets/homePage/single-items/1/slider3.jpg' },
                { path: 'assets/homePage/single-items/1/slider3.jpg' },
                { path: 'assets/homePage/single-items/1/slider3.jpg' },]
        ];
        this.selectedImagesSet = this.imageSet[0];
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }
    goBack() {
        this.location.back();
    }
};
VehiculosPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
VehiculosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-vehiculos',
        template: _raw_loader_vehiculos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vehiculos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VehiculosPage);



/***/ }),

/***/ 9807:
/*!***********************************************!*\
  !*** ./src/app/vehiculos/vehiculos.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: black;\n}\n\n.card {\n  border-radius: 10px;\n  margin: 10px;\n  background: #FFFFFF;\n  padding: 10px 0px;\n}\n\n.header {\n  position: fixed;\n  top: 0px;\n  height: 45px;\n  color: #FFFFFF;\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljdWxvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBR0YiLCJmaWxlIjoidmVoaWN1bG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuLmNhcmR7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBwYWRkaW5nOiAxMHB4IDBweDtcclxufVxyXG4uaGVhZGVye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6MHB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsMSk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 20713:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vehiculos/vehiculos.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"header\" style=\"position: relative\">\r\n  <ion-icon (click)=\"goBack()\" style=\"position: absolute; top:8px; font-size: 30px;\" name=\"chevron-back-outline\"></ion-icon>\r\n  <div style=\"margin-left:40px; display: flex;justify-content: flex-start;align-items: center;height: 100%\">\r\n    <div>\r\n      <b>vehiculos</b>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ion-content>\r\n  <div class=\"card\">\r\n    <carousel [counter]=true [cellWidth]=\"innerWidth\" [loop]=true [images]=\"selectedImagesSet\" [dots]=true [arrowsOutside]=true [arrows]=false></carousel>\r\n    <ion-grid>\r\n      <ion-row style=\"margin-top: 10px\">\r\n        <ion-col style=\"color: orange; font-weight: bold; font-size: 20px\">\r\n          $300\r\n        </ion-col>\r\n        <ion-col size=\"3\" style=\"color: grey; text-align: right\">\r\n          abcedf\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          gfgdsfdsgfdsgfds\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top: 5px\">\r\n        <ion-col style=\"display: flex;justify-content: space-between; align-items: center; color: grey\">\r\n          <div style=\"display: flex; align-items: center; justify-content: center; text-align: center\">\r\n            <div style=\"font-size: 13px\">\r\n              <ion-icon style=\"font-size: 25px; display: block\" name=\"basket-outline\"></ion-icon>\r\n              abs\r\n            </div>\r\n            <div style=\"font-size: 13px; margin-left: 20px\">\r\n              <ion-icon style=\"font-size: 25px; display: block\" name=\"star-outline\"></ion-icon>\r\n              abs\r\n            </div>\r\n            <div style=\"font-size: 13px; margin-left: 20px\">\r\n              <ion-icon style=\"font-size: 25px; display: block\" name=\"chatbox-ellipses-outline\"></ion-icon>\r\n              abs\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div style=\"display: flex\">\r\n              <div style=\"width: 55px;background-image: linear-gradient(to right, #ffc501 , #fe8402);; border-bottom-left-radius: 20px;border-top-left-radius: 20px; padding: 7px; display: flex; align-items: center;justify-content: center\">\r\n                <ion-icon style=\"color:#FFFFFF;display: flex; font-size: 25px\" name=\"cart-outline\"></ion-icon>\r\n              </div>\r\n              <div style=\"width: 75px;display: flex; align-items: center;justify-content: center;background: #fe5d00; border-bottom-right-radius: 20px;border-top-right-radius: 20px;padding: 7px; color: white\">\r\n                <div>ABC</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <carousel [counter]=true [cellWidth]=\"innerWidth\" [loop]=true [images]=\"selectedImagesSet\" [dots]=true [arrowsOutside]=true [arrows]=false></carousel>\r\n    <ion-grid>\r\n      <ion-row style=\"margin-top: 10px\">\r\n        <ion-col style=\"color: orange; font-weight: bold; font-size: 20px\">\r\n          $300\r\n        </ion-col>\r\n        <ion-col size=\"3\" style=\"color: grey; text-align: right\">\r\n          abcedf\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          gfgdsfdsgfdsgfds\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top: 5px\">\r\n        <ion-col style=\"display: flex;justify-content: space-between; align-items: center; color: grey\">\r\n          <div style=\"display: flex; align-items: center; justify-content: center; text-align: center\">\r\n            <div style=\"font-size: 13px\">\r\n              <ion-icon style=\"font-size: 25px; display: block\" name=\"basket-outline\"></ion-icon>\r\n              abs\r\n            </div>\r\n            <div style=\"font-size: 13px; margin-left: 20px\">\r\n              <ion-icon style=\"font-size: 25px; display: block\" name=\"star-outline\"></ion-icon>\r\n              abs\r\n            </div>\r\n            <div style=\"font-size: 13px; margin-left: 20px\">\r\n              <ion-icon style=\"font-size: 25px; display: block\" name=\"chatbox-ellipses-outline\"></ion-icon>\r\n              abs\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div style=\"display: flex\">\r\n              <div style=\"width: 55px;background-image: linear-gradient(to right, #ffc501 , #fe8402);; border-bottom-left-radius: 20px;border-top-left-radius: 20px; padding: 7px; display: flex; align-items: center;justify-content: center\">\r\n                <ion-icon style=\"color:#FFFFFF;display: flex; font-size: 25px\" name=\"cart-outline\"></ion-icon>\r\n              </div>\r\n              <div style=\"width: 75px;display: flex; align-items: center;justify-content: center;background: #fe5d00; border-bottom-right-radius: 20px;border-top-right-radius: 20px;padding: 7px; color: white\">\r\n                <div>ABC</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_vehiculos_vehiculos_module_ts.js.map