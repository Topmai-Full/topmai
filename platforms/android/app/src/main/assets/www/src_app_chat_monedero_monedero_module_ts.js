(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_monedero_monedero_module_ts"],{

/***/ 48526:
/*!**********************************************************!*\
  !*** ./src/app/chat/monedero/monedero-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonederoPageRoutingModule": () => (/* binding */ MonederoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _monedero_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monedero.page */ 33476);




const routes = [
    {
        path: '',
        component: _monedero_page__WEBPACK_IMPORTED_MODULE_0__.MonederoPage
    }
];
let MonederoPageRoutingModule = class MonederoPageRoutingModule {
};
MonederoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MonederoPageRoutingModule);



/***/ }),

/***/ 41539:
/*!**************************************************!*\
  !*** ./src/app/chat/monedero/monedero.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonederoPageModule": () => (/* binding */ MonederoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _monedero_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monedero-routing.module */ 48526);
/* harmony import */ var _monedero_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monedero.page */ 33476);







let MonederoPageModule = class MonederoPageModule {
};
MonederoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _monedero_routing_module__WEBPACK_IMPORTED_MODULE_0__.MonederoPageRoutingModule
        ],
        declarations: [_monedero_page__WEBPACK_IMPORTED_MODULE_1__.MonederoPage]
    })
], MonederoPageModule);



/***/ }),

/***/ 33476:
/*!************************************************!*\
  !*** ./src/app/chat/monedero/monedero.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonederoPage": () => (/* binding */ MonederoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_monedero_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./monedero.page.html */ 10256);
/* harmony import */ var _monedero_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monedero.page.scss */ 88089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _transferencia_popup_model_popup_model_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transferencia/popup-model/popup-model.page */ 47542);








let MonederoPage = class MonederoPage {
    constructor(router, location, modalController) {
        this.router = router;
        this.location = location;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    gotoBalance() {
        this.router.navigate([`balance`]);
    }
    gotoAddcard() {
        this.router.navigate([`my-cards`]);
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _transferencia_popup_model_popup_model_page__WEBPACK_IMPORTED_MODULE_2__.PopupModelPage,
            });
            return yield modal.present();
        });
    }
};
MonederoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
MonederoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-monedero',
        template: _raw_loader_monedero_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_monedero_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MonederoPage);



/***/ }),

/***/ 88089:
/*!**************************************************!*\
  !*** ./src/app/chat/monedero/monedero.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb25lZGVyby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 10256:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/monedero/monedero.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n            <ion-icon style=\"font-size: 30px; \" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Monedero</ion-title>\r\n\r\n        <!-- <ion-title style=\"text-align: center;\">Monedero</ion-title> -->\r\n\r\n    </ion-toolbar>\r\n    <!-- <ion-toolbar color=\"danger\">\r\n        <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n            <ion-button>\r\n                <ion-icon style=\"font-size: 30px; \" name=\"chevron-back-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button>\r\n                <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title style=\"text-align: center;\">Danger</ion-title>\r\n    </ion-toolbar> -->\r\n\r\n    <div style=\"margin: 10px\">\r\n\r\n        <div (click)=\"gotoBalance()\" style=\"font-size: 15px;margin-top: 10px;display: flex; justify-content: space-between;align-items: center; font-weight: bold;\">\r\n            <ion-icon name=\"wallet-outline\" style=\"font-size: 30px; color: rgb(14, 196, 14);\"></ion-icon>\r\n            <p style=\"display: block; width: 90%; margin-left: 20px; font-size: 15px; font-weight: normal;\"> Saldo</p>\r\n            $348.79\r\n            <ion-icon style=\"width: 10%;font-size:20px;display: block; color: #75767763;\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"margin: 10px\">\r\n\r\n        <div (click)=\"gotoAddcard()\" style=\"font-size: 12px;margin-top: 10px;display: flex; justify-content: space-between;align-items: center\">\r\n            <ion-icon name=\"card-outline\" style=\"font-size: 30px; color: rgb(14, 196, 14);\"></ion-icon>\r\n            <p style=\"display: block; width: 90%; margin-left: 20px; font-size: 15px;\"> Tarjetas</p>\r\n            <ion-icon style=\"width: 10%;font-size:20px;display: block; color: #75767763;\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <hr style=\"border-top: 10px solid #f6f3f3;\">\r\n\r\n\r\n    <!-- \r\n    <div style=\"margin: 10px\">\r\n\r\n        <div style=\"font-size: 12px;margin-top: 10px;display: flex; justify-content: space-between;align-items: center\">\r\n            <ion-icon name=\"cash-outline\" style=\"font-size: 30px; color: rgb(255, 255, 255); \" alt=\"\"></ion-icon>\r\n            <p style=\"display: block; width: 90%; margin-left: 20px; font-size: 15px;\"> Recibir Dinero</p>\r\n            <ion-icon style=\"width: 10%;font-size:20px;display: block; color: #75767763;\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </div>\r\n    </div>\r\n    <div style=\"margin: 10px\">\r\n\r\n        <div style=\"font-size: 12px;margin-top: 10px;display: flex; justify-content: space-between;align-items: center\">\r\n            <ion-icon name=\"card-outline\" style=\"font-size: 30px; color: rgb(255, 255, 255);\" alt=\"\"></ion-icon>\r\n            <p style=\"display: block; width: 90%; margin-left: 20px; font-size: 15px;\"> Enviar Dinero</p>\r\n            <ion-icon style=\"width: 10%;font-size:20px;display: block; color: #75767763;\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </div>\r\n    </div>\r\n    <div style=\"margin: 10px\">\r\n\r\n        <div style=\"font-size: 12px;margin-top: 10px;display: flex; justify-content: space-between;align-items: center\">\r\n            <img src=\"assets/imgs/SVG/dinero.svg\" style=\"font-size: 30px;\" alt=\"\">\r\n            <p style=\"display: block; width: 90%; margin-left: 20px; font-size: 15px;\"> Transferir a tarjeta bancana/nro de movil</p>\r\n            <ion-icon style=\"width: 10%;font-size:20px;display: block; color: #75767763;\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </div>\r\n    </div> -->\r\n    <div style=\"margin: 10px\">\r\n\r\n        <div style=\"font-size: 12px;margin-top: 10px;display: flex; justify-content: space-between;align-items: center\">\r\n            <ion-icon name=\"cash-outline\" style=\"font-size: 30px; color: rgb(14, 196, 14);\" alt=\"\"></ion-icon>\r\n            <p style=\"display: block; width: 90%; margin-left: 20px; font-size: 15px;\"> Recibir Dinero</p>\r\n            <ion-icon style=\"width: 10%;font-size:20px;display: block; color: #75767763;\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"margin: 10px\">\r\n\r\n        <div style=\"font-size: 12px;margin-top: 10px;display: flex; justify-content: space-between;align-items: center\">\r\n            <ion-icon name=\"card-outline\" style=\"font-size: 30px; color:  rgb(14, 196, 14);\" alt=\"\"></ion-icon>\r\n            <p style=\"display: block; width: 90%; margin-left: 20px; font-size: 15px;\"> Enviar Dinero</p>\r\n            <ion-icon style=\"width: 10%;font-size:20px;display: block; color: #75767763;\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"margin: 10px\">\r\n\r\n        <div (click)=\"presentModal()\" style=\"font-size: 12px;margin-top: 10px;display: flex; justify-content: space-between;align-items: center\">\r\n\r\n            <ion-icon name=\"arrow-redo-outline\" style=\"font-size: 30px; color: rgb(14, 196, 14);\"></ion-icon>\r\n            <p style=\"display: block; width: 90%; margin-left: 20px; font-size: 15px;\"> Transferir a tarjeta bancana/nro de movil</p>\r\n            <ion-icon style=\"width: 10%;font-size:20px;display: block; color: #75767763;\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"margin: 10px\">\r\n\r\n        <div style=\"font-size: 12px;margin-top: 10px;display: flex; justify-content: space-between;align-items: center\">\r\n            <ion-icon name=\"shield-checkmark-outline\" style=\"font-size: 30px; color: rgb(14, 196, 14);\"></ion-icon>\r\n            <p style=\"display: block; width: 90%; margin-left: 20px; font-size: 15px;\"> Seguridad de pagos</p>\r\n            <ion-icon style=\"width: 10%;font-size:20px;display: block; color: #75767763;\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_monedero_monedero_module_ts.js.map