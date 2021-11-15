(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_resolve-center_resolve-center_module_ts"],{

/***/ 35841:
/*!**********************************************************************!*\
  !*** ./src/app/chat/resolve-center/resolve-center-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResolveCenterPageRoutingModule": () => (/* binding */ ResolveCenterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _resolve_center_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolve-center.page */ 97886);




const routes = [
    {
        path: '',
        component: _resolve_center_page__WEBPACK_IMPORTED_MODULE_0__.ResolveCenterPage
    }
];
let ResolveCenterPageRoutingModule = class ResolveCenterPageRoutingModule {
};
ResolveCenterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResolveCenterPageRoutingModule);



/***/ }),

/***/ 41541:
/*!**************************************************************!*\
  !*** ./src/app/chat/resolve-center/resolve-center.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResolveCenterPageModule": () => (/* binding */ ResolveCenterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _resolve_center_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolve-center-routing.module */ 35841);
/* harmony import */ var _resolve_center_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolve-center.page */ 97886);







let ResolveCenterPageModule = class ResolveCenterPageModule {
};
ResolveCenterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _resolve_center_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResolveCenterPageRoutingModule
        ],
        declarations: [_resolve_center_page__WEBPACK_IMPORTED_MODULE_1__.ResolveCenterPage]
    })
], ResolveCenterPageModule);



/***/ }),

/***/ 97886:
/*!************************************************************!*\
  !*** ./src/app/chat/resolve-center/resolve-center.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResolveCenterPage": () => (/* binding */ ResolveCenterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_resolve_center_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./resolve-center.page.html */ 18470);
/* harmony import */ var _resolve_center_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolve-center.page.scss */ 16565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);





let ResolveCenterPage = class ResolveCenterPage {
    constructor(location) {
        this.location = location;
        this.openList = [];
    }
    ngOnInit() {
    }
    toggleFromList(n) {
        const index = this.openList.indexOf(n);
        if (index >= 0) {
            this.openList.splice(index, 1);
            console.log(this.openList);
        }
        else {
            this.openList.push(n);
            console.log(this.openList);
        }
    }
    itemInList(n) {
        const index = this.openList.indexOf(n);
        if (index >= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    goBack() {
        this.location.back();
    }
};
ResolveCenterPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
ResolveCenterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-resolve-center',
        template: _raw_loader_resolve_center_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_resolve_center_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResolveCenterPage);



/***/ }),

/***/ 16565:
/*!**************************************************************!*\
  !*** ./src/app/chat/resolve-center/resolve-center.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".color-header {\n  height: 40px;\n  border-bottom: 1px solid #eae9e9;\n}\n\nion-header::after {\n  background-image: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc29sdmUtY2VudGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRiIsImZpbGUiOiJyZXNvbHZlLWNlbnRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItaGVhZGVyIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWU5ZTk7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 18470:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/resolve-center/resolve-center.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"color-header\" style=\"position: relative\">\r\n    <ion-icon (click)=\"goBack()\" style=\"position: absolute; top:8px;left:8px; font-size: 25px;\" name=\"chevron-back-outline\"></ion-icon>\r\n    <div style=\"display: flex;justify-content: center;align-items: center;height: 100%\">\r\n        <div>\r\n            Kasun Chandika\r\n        </div>\r\n    </div>\r\n    <ion-icon style=\"position: absolute; top:10px;right:10px; font-size: 20px;\" name=\"ellipsis-horizontal\"></ion-icon>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col style=\"text-align: center;height: 70px\" size=\"3\">\r\n                <img style=\"width: 100%; height: 100%; object-fit: cover\" src=\"assets/homePage/item-two/1.png\">\r\n            </ion-col>\r\n            <ion-col style=\"display: flex;flex-direction: column; justify-content: space-between;\">\r\n                <div style=\"font-size: 14px; color: #2d2d2d\">Sea su desarrollador web full stack</div>\r\n                <div style=\"display: flex; justify-content: space-between\">\r\n                    <div style=\"font-size: 8px; padding: 5px; background: #e1e9fa; color: #013e6c\">\r\n                        EN PROCESO\r\n                    </div>\r\n                    <div style=\"font-weight: bold\">MX$80</div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <div style=\"height: 10px; background: #f3f3f3; border-top: 1px solid #e3e3e3; border-bottom: 1px solid #e3e3e3\"></div>\r\n\r\n    <ion-grid style=\"font-size: 14px; margin-top: 5px\">\r\n        <ion-row>\r\n            <ion-col size=\"1\" style=\"display: flex; justify-content: flex-start; align-items: center; flex-direction: column\">\r\n                <div>\r\n                    <ion-icon style=\"color: gray; font-size: 24px\" name=\"document-attach-outline\"></ion-icon>\r\n                </div>\r\n                <div style=\"background: #e7e7e7; height: 100%; width: 2px; margin-top: 3px\">\r\n                </div>\r\n            </ion-col>\r\n            <ion-col>\r\n                <div style=\"display: flex; align-items: center; margin-top: 4px\">\r\n                    <div style=\"font-weight: bold\">\r\n                        Entrega esperada <span style=\"color: #606060\">30 Agosto 2021</span>\r\n                    </div>\r\n                    <div style=\"font-weight: 500; position: absolute; right: 10px\">\r\n                        <ion-icon *ngIf=\"itemInList(1)\" (click)=\"toggleFromList(1)\" style=\"font-size: 20px\" name=\"chevron-up-outline\"></ion-icon>\r\n                        <ion-icon *ngIf=\"!itemInList(1)\" (click)=\"toggleFromList(1)\" style=\"font-size: 20px\" name=\"chevron-down-outline\"></ion-icon>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"itemInList(1)\">\r\n                    <div style=\"margin-top: 20px\">\r\n                        <div style=\"padding:5px 5px; background: #ececec; border-radius: 30px; text-align: center; display: flex; align-items: center; justify-content: space-around\">\r\n                            <div style=\"line-height: 1.5\">\r\n                                <span style=\"font-weight: bold; font-size: 16px\">1</span> <br>\r\n                                <span style=\"color: grey; font-size: 12px;\">Dias</span>\r\n                            </div>\r\n                            <div style=\"line-height: 1.5\">\r\n                                <span style=\"font-weight: bold; font-size: 16px\">1</span> <br>\r\n                                <span style=\"color: grey; font-size: 12px;\">Dias</span>\r\n                            </div>\r\n                            <div style=\"line-height: 1.5\">\r\n                                <span style=\"font-weight: bold; font-size: 16px\">1</span> <br>\r\n                                <span style=\"color: #b0b0b0; font-size: 12px;\">Dias</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div style=\"display: flex; align-items: center;margin-top: 20px\">\r\n                        <div style=\"display: flex; align-items: center\">\r\n                            <ion-icon style=\"font-size: 18px; display: block\" name=\"notifications\"></ion-icon>\r\n                            <div style=\"margin-left: 10px\">Notificarme</div>\r\n                        </div>\r\n                        <div style=\"display: flex; align-items: center;margin-left: 30px\">\r\n                            <ion-icon style=\"font-size: 18px; display: block\" name=\"calendar-outline\"></ion-icon>\r\n                            <div style=\"margin-left: 10px\">Añadir calendario</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr style=\"border-top: 2px solid #efefef; margin-top: 15px\">\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col size=\"1\" style=\"display: flex; justify-content: flex-start; align-items: center; flex-direction: column\">\r\n                <div>\r\n                    <ion-icon style=\"color: gray; font-size: 24px\" name=\"star-outline\"></ion-icon>\r\n                </div>\r\n                <div style=\"background: #e7e7e7; height: 100%; width: 2px; margin-top: 3px\">\r\n                </div>\r\n            </ion-col>\r\n            <ion-col>\r\n                <div style=\"display: flex; align-items: center; margin-top: 4px\">\r\n                    <div style=\"font-weight: bold\">\r\n                        Mis reseñas\r\n                    </div>\r\n                    <div style=\"font-weight: 500; position: absolute; right: 10px\">\r\n                        <ion-icon *ngIf=\"itemInList(2)\" (click)=\"toggleFromList(2)\" style=\"font-size: 20px\" name=\"chevron-up-outline\"></ion-icon>\r\n                        <ion-icon *ngIf=\"!itemInList(2)\" (click)=\"toggleFromList(2)\" style=\"font-size: 20px\" name=\"chevron-down-outline\"></ion-icon>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"itemInList(2)\">\r\n                    <div style=\"margin-top: 15px; font-size: 13px\">\r\n                        <div>Mejor cliente</div>\r\n                        <div style=\"margin-top: 10px\">Experiencia general</div>\r\n                        <div style=\"color: gold; margin-top: 10px; letter-spacing: 30px\">\r\n                            <ion-icon style=\"font-size: 25px\" name=\"star\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star-outline\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star-outline\"></ion-icon>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr style=\"border-top: 2px solid #efefef; margin-top: 15px\">\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col size=\"1\" style=\"display: flex; justify-content: flex-start; align-items: center; flex-direction: column\">\r\n                <div>\r\n                    <ion-icon style=\"color: gray; font-size: 24px\" name=\"star-outline\"></ion-icon>\r\n                </div>\r\n                <div style=\"background: #e7e7e7; height: 100%; width: 2px; margin-top: 3px\">\r\n                </div>\r\n            </ion-col>\r\n            <ion-col>\r\n                <div style=\"display: flex; align-items: center; margin-top: 4px\">\r\n                    <div style=\"font-weight: bold\">\r\n                        Revisión del comprador\r\n                    </div>\r\n                    <div style=\"font-weight: 500; position: absolute; right: 10px\">\r\n                        <ion-icon *ngIf=\"itemInList(3)\" (click)=\"toggleFromList(3)\" style=\"font-size: 20px\" name=\"chevron-up-outline\"></ion-icon>\r\n                        <ion-icon *ngIf=\"!itemInList(3)\" (click)=\"toggleFromList(3)\" style=\"font-size: 20px\" name=\"chevron-down-outline\"></ion-icon>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"itemInList(3)\">\r\n                    <div style=\"margin-top: 15px; font-size: 13px\">\r\n                        <div>Entrega rápida y excelente trabajo!</div>\r\n                        <div style=\"margin-top: 15px\">Comunicación del vendedor</div>\r\n                        <div style=\"color: gold; margin-top: 10px; letter-spacing: 30px\">\r\n                            <ion-icon style=\"font-size: 25px\" name=\"star\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star-outline\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star-outline\"></ion-icon>\r\n                        </div>\r\n\r\n                        <div style=\"margin-top: 10px\">Servicio como se describe</div>\r\n                        <div style=\"color: gold; margin-top: 10px; letter-spacing: 30px\">\r\n                            <ion-icon style=\"font-size: 25px\" name=\"star\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star-outline\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star-outline\"></ion-icon>\r\n                        </div>\r\n\r\n                        <div style=\"margin-top: 10px\">Recomendaría</div>\r\n                        <div style=\"color: gold; margin-top: 10px; letter-spacing: 30px\">\r\n                            <ion-icon style=\"font-size: 25px\" name=\"star\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star-outline\"></ion-icon>\r\n                            <ion-icon style=\"margin-left: 5px; font-size: 25px\" name=\"star-outline\"></ion-icon>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <hr style=\"border-top: 2px solid #efefef; margin-top: 15px\">\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col size=\"1\" style=\"display: flex; justify-content: flex-start; align-items: center; flex-direction: column\">\r\n                <div>\r\n                    <ion-icon style=\"color: gray; font-size: 24px\" name=\"document-text-outline\"></ion-icon>\r\n                </div>\r\n                <div style=\"background: #e7e7e7; height: 100%; width: 2px; margin-top: 3px\">\r\n                </div>\r\n            </ion-col>\r\n            <ion-col>\r\n                <div style=\"display: flex; align-items: center; margin-top: 4px\">\r\n                    <div style=\"font-weight: bold\">\r\n                        Pedido iniciado\r\n                    </div>\r\n                </div>\r\n                <hr style=\"border-top: 2px solid #efefef; margin-top: 15px\">\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row>\r\n            <ion-col size=\"1\" style=\"display: flex; justify-content: flex-start; align-items: center; flex-direction: column\">\r\n                <div>\r\n                    <ion-icon style=\"color: gray; font-size: 24px\" name=\"book-outline\"></ion-icon>\r\n                </div>\r\n                <div style=\"background: #e7e7e7; height: 100%; width: 2px; margin-top: 3px\">\r\n                </div>\r\n            </ion-col>\r\n            <ion-col>\r\n                <div style=\"display: flex; align-items: center; margin-top: 4px\">\r\n                    <div style=\"font-weight: bold\">\r\n                        Requisitos de pedido enviados\r\n                    </div>\r\n                    <div style=\"font-weight: 500; position: absolute; right: 10px\">\r\n                        <ion-icon *ngIf=\"itemInList(4)\" (click)=\"toggleFromList(4)\" style=\"font-size: 20px\" name=\"chevron-up-outline\"></ion-icon>\r\n                        <ion-icon *ngIf=\"!itemInList(4)\" (click)=\"toggleFromList(4)\" style=\"font-size: 20px\" name=\"chevron-down-outline\"></ion-icon>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"itemInList(4)\">\r\n                    <div style=\"margin-top: 15px; font-size: 13px\">\r\n                        <div>¿Me contactó antes de realizar el pedido?</div>\r\n                        <div style=\"color: grey; font-size: 12px; margin-top: 5px\">Sí</div>\r\n                    </div>\r\n                </div>\r\n                <hr style=\"border-top: 2px solid #efefef; margin-top: 15px\">\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col size=\"1\" style=\"display: flex; justify-content: flex-start; align-items: center; flex-direction: column\">\r\n                <div>\r\n                    <ion-icon style=\"color: gray; font-size: 24px\" name=\"document-text-outline\"></ion-icon>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col>\r\n                <div style=\"display: flex; align-items: center; margin-top: 4px\">\r\n                    <div style=\"font-weight: bold\">\r\n                        Orden creada\r\n                    </div>\r\n                    <div style=\"font-weight: 500; position: absolute; right: 10px\">\r\n                        <ion-icon *ngIf=\"itemInList(5)\" (click)=\"toggleFromList(5)\" style=\"font-size: 20px\" name=\"chevron-up-outline\"></ion-icon>\r\n                        <ion-icon *ngIf=\"!itemInList(5)\" (click)=\"toggleFromList(5)\" style=\"font-size: 20px\" name=\"chevron-down-outline\"></ion-icon>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"itemInList(5)\">\r\n                    <div style=\"margin-top: 15px; font-size: 13px\">\r\n                        <div>21 Agosto 2021 - Pedido #FO4CD1219C42</div>\r\n                        <hr style=\"border-top: 2px solid #efefef;\">\r\n                        <div style=\"margin-top: 5px; display: flex; justify-content: space-between;align-items: center\">\r\n                            <div style=\"display: flex; align-items: center\">\r\n                                <ion-icon style=\"color: #1ac26b; font-size: 20px; margin-right: 10px;display: block\" name=\"checkmark-outline\"></ion-icon>\r\n                                <div>Sé tu desarrolladora de pila completa</div>\r\n                            </div>\r\n                            <div>\r\n                                <hr style=\"border-top: 2px solid #efefef; margin-top: 15px\">\r\n                            </div>\r\n                            <div>\r\n                                MX$50\r\n                            </div>\r\n                        </div>\r\n                        <hr style=\"border-top: 2px solid #efefef;\">\r\n                        <div style=\"margin-top: 5px; display: flex; justify-content: space-between;\">\r\n                            <div>\r\n                                Total\r\n                            </div>\r\n                            <div>\r\n                                <hr style=\"border-top: 2px solid #efefef; margin-top: 15px\">\r\n                            </div>\r\n                            <div>\r\n                                MX$50\r\n                            </div>\r\n                        </div>\r\n                        <div style=\"margin-top: 5px; display: flex; justify-content: space-between;\">\r\n                            <div>\r\n                                Fecha de entrega\r\n                            </div>\r\n                            <div>\r\n                                <hr style=\"border-top: 2px solid #efefef; margin-top: 15px\">\r\n                            </div>\r\n                            <div>\r\n                                21 Agosto 2021\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_resolve-center_resolve-center_module_ts.js.map