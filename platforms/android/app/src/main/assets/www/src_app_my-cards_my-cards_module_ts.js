(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_my-cards_my-cards_module_ts"],{

/***/ 8340:
/*!*****************************************************!*\
  !*** ./src/app/my-cards/my-cards-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCardsPageRoutingModule": () => (/* binding */ MyCardsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_cards_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-cards.page */ 48026);




const routes = [
    {
        path: '',
        component: _my_cards_page__WEBPACK_IMPORTED_MODULE_0__.MyCardsPage
    }
];
let MyCardsPageRoutingModule = class MyCardsPageRoutingModule {
};
MyCardsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyCardsPageRoutingModule);



/***/ }),

/***/ 73369:
/*!*********************************************!*\
  !*** ./src/app/my-cards/my-cards.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCardsPageModule": () => (/* binding */ MyCardsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_cards_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-cards-routing.module */ 8340);
/* harmony import */ var _my_cards_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-cards.page */ 48026);







let MyCardsPageModule = class MyCardsPageModule {
};
MyCardsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_cards_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyCardsPageRoutingModule
        ],
        declarations: [_my_cards_page__WEBPACK_IMPORTED_MODULE_1__.MyCardsPage]
    })
], MyCardsPageModule);



/***/ }),

/***/ 48026:
/*!*******************************************!*\
  !*** ./src/app/my-cards/my-cards.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyCardsPage": () => (/* binding */ MyCardsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_cards_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-cards.page.html */ 14783);
/* harmony import */ var _my_cards_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-cards.page.scss */ 56042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let MyCardsPage = class MyCardsPage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    goToPage(url) {
        this.router.navigate([url]);
    }
};
MyCardsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
MyCardsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-my-cards',
        template: _raw_loader_my_cards_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_cards_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyCardsPage);



/***/ }),

/***/ 56042:
/*!*********************************************!*\
  !*** ./src/app/my-cards/my-cards.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".color-header {\n  height: 40px;\n  border-bottom: 1px solid #eae9e9;\n}\n\nion-header::after {\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNhcmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRiIsImZpbGUiOiJteS1jYXJkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItaGVhZGVyIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWU5ZTk7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 14783:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-cards/my-cards.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"color-header\" style=\"position: relative\">\r\n    <ion-icon (click)=\"goBack()\" style=\"position: absolute; top:8px;left:8px; font-size: 25px;\" name=\"chevron-back-outline\"></ion-icon>\r\n    <div style=\"display: flex;justify-content: center;align-items: center;height: 100%\">\r\n        <div>\r\n            Tarjetas bancarias\r\n        </div>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n        <ion-row style=\"margin-top: 10px\">\r\n            <ion-col style=\"display:flex;align-items: center;justify-content: space-between\">\r\n                <div style=\"font-weight: bold\">\r\n                    Mi tarjeta <span style=\"color: grey; font-weight: normal\">(4)</span>\r\n                </div>\r\n                <div style=\"font-size: 12px\">\r\n                    <div (click)=\"goToPage('addcard')\" style=\"background: #f3f3f3; border-radius: 20px; padding: 5px 10px\">\r\n                        <span style=\"color: #0f7bcd\">+</span> Agregar tarjeta bancaria\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top: 10px\">\r\n            <ion-col>\r\n                <div style=\"height: 160px; background-image: linear-gradient(to right,#d3dbde, #a7aeb8); border-radius: 10px; color: white\">\r\n                    <div style=\"display: flex; justify-content: space-between; padding: 15px\">\r\n                        <div style=\"display: flex;\">\r\n                        </div>\r\n                        <div>\r\n                            <div style=\"margin-top: 5px\">\r\n                                <div style=\"background: rgba(229,227,227,0.32); font-size: 10px; padding: 3px 5px; display: flex; align-items: center;justify-content: center; border-radius: 5px\">\r\n                                    <div>Nota tarjeta bancaria</div>\r\n                                    <ion-icon style=\"display: block; margin-left: 3px\" name=\"open-outline\"></ion-icon>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"margin-left: 35px\">\r\n                        <div><img style=\"max-width: 32px;\" src=\"assets/my-cards/chip.png\"></div>\r\n                        <div style=\"font-weight: bold;margin-top:15px; letter-spacing: 2px; font-size: 18px \">**** **** **** 0017</div>\r\n                    </div>\r\n                </div>\r\n                <img style=\"max-width: 60px; position: absolute; bottom: 20px; right: 20px\" src=\"assets/my-cards/visa.png\">\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row style=\"margin-top: 10px\">\r\n            <ion-col>\r\n                <div style=\"height: 150px; background-image: linear-gradient(to right,#02abc0, #84cddc); border-radius: 10px; color: white\">\r\n                    <div style=\"display: flex; justify-content: space-between; padding: 15px\">\r\n                        <div style=\"display: flex;\">\r\n                            <div style=\"background: white; border-radius: 100%; width: 50px; height: 50px; display: flex; align-items: center;justify-content: center\">\r\n                                <img style=\"max-width: 32px; display: block\" src=\"assets/my-cards/master.png\">\r\n                            </div>\r\n                            <div style=\"font-weight: bold; margin-left: 10px;display: flex; align-items: flex-start; margin-top: 10px\">\r\n                                <div>MASTER</div>\r\n                            </div>\r\n                        </div>\r\n                        <div>\r\n                            <div style=\"font-weight: bold; text-align: right\">\r\n                                **** 0017\r\n                            </div>\r\n                            <div style=\"margin-top: 5px\">\r\n                                <div style=\"background: rgba(229,227,227,0.32); font-size: 10px; padding: 3px 5px; display: flex; align-items: center;justify-content: center; border-radius: 5px\">\r\n                                    <div>Nota tarjeta bancaria</div>\r\n                                    <ion-icon style=\"display: block; margin-left: 3px\" name=\"open-outline\"></ion-icon>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row style=\"margin-top: 10px\">\r\n            <ion-col>\r\n                <div style=\"height: 150px; background-image: linear-gradient(to right,#ff7661, #fb5561); border-radius: 10px; color: white\">\r\n                    <div style=\"display: flex; justify-content: space-between; padding: 15px\">\r\n                        <div style=\"display: flex;\">\r\n                            <div style=\"background: white; border-radius: 100%; width: 50px; height: 50px; display: flex; align-items: center;justify-content: center\">\r\n                                <img style=\"max-width: 32px; display: block\" src=\"assets/my-cards/visa.png\">\r\n                            </div>\r\n                            <div style=\"margin-left: 10px; display: flex; flex-direction: column; justify-content: center\">\r\n                                <div style=\"font-weight: bold;\">ICBC Tarjeta de débito</div>\r\n                                <div style=\"margin-top: 3px; font-size: 12px\">\r\n                                    Transferir, consultar facturas\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div>\r\n                            <div style=\"font-weight: bold; text-align: right\">\r\n                                **** 0017\r\n                            </div>\r\n                            <div style=\"margin-top: 5px\">\r\n                                <div style=\"background: rgba(229,227,227,0.32); font-size: 10px; padding: 3px 5px; display: flex; align-items: center;justify-content: center; border-radius: 5px\">\r\n                                    <div>Nota tarjeta bancaria</div>\r\n                                    <ion-icon style=\"display: block; margin-left: 3px\" name=\"open-outline\"></ion-icon>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_my-cards_my-cards_module_ts.js.map