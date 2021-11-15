(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_wallet_wallet_module_ts"],{

/***/ 47355:
/*!******************************************************!*\
  !*** ./src/app/chat/wallet/wallet-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletPageRoutingModule": () => (/* binding */ WalletPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet.page */ 81367);




const routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_0__.WalletPage
    },
    // {
    //   path: 'history',
    //   loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
    // },
];
let WalletPageRoutingModule = class WalletPageRoutingModule {
};
WalletPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WalletPageRoutingModule);



/***/ }),

/***/ 64749:
/*!**********************************************!*\
  !*** ./src/app/chat/wallet/wallet.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletPageModule": () => (/* binding */ WalletPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet-routing.module */ 47355);
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.page */ 81367);







let WalletPageModule = class WalletPageModule {
};
WalletPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__.WalletPageRoutingModule
        ],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_1__.WalletPage]
    })
], WalletPageModule);



/***/ }),

/***/ 81367:
/*!********************************************!*\
  !*** ./src/app/chat/wallet/wallet.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletPage": () => (/* binding */ WalletPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./wallet.page.html */ 71836);
/* harmony import */ var _wallet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet.page.scss */ 55111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);






let WalletPage = class WalletPage {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.slidesItems = ['assets/chat/wallet/banner1.png', 'assets/chat/wallet/banner1.png', 'assets/chat/wallet/banner1.png'];
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    gotoWallet() {
        this.router.navigate([`tabs/wallet`]);
    }
    gotoTransferencia() {
        this.router.navigate([`transferencia`]);
    }
    gotoMonedero() {
        this.router.navigate([`monedero`]);
    }
    gotoHistory() {
        this.router.navigate([`history`]);
    }
    gotoSettings() {
        this.router.navigate([`settings`]);
    }
};
WalletPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location }
];
WalletPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-wallet',
        template: _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_wallet_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WalletPage);



/***/ }),

/***/ 55111:
/*!**********************************************!*\
  !*** ./src/app/chat/wallet/wallet.page.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header::after {\n  background-image: none;\n}\n\n.green-card {\n  margin-top: 9px;\n  color: white;\n  background: #4cd080;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-around;\n  margin-left: 10px;\n  margin-right: 10px;\n  align-items: center;\n  text-align: center;\n}\n\n.text {\n  border-right: 5px solid red;\n}\n\n.right-border {\n  border-right: 1px solid rgba(255, 255, 255, 0.23);\n}\n\n.img-card {\n  margin-bottom: 5px;\n  padding: 10px;\n  width: 55px;\n  background: #f6fafd;\n  border-radius: 5px;\n}\n\nion-slides {\n  --bullet-background: #797878;\n  --bullet-background-active: #4cd080;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpREFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0EsbUNBQUE7QUFDSiIsImZpbGUiOiJ3YWxsZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLmdyZWVuLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzRjZDA4MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLnJpZ2h0LWJvcmRlciB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjMpXHJcbn1cclxuXHJcbi5pbWctY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmYWZkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzc5Nzg3ODtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjNGNkMDgwO1xyXG59Il19 */");

/***/ }),

/***/ 71836:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/wallet/wallet.page.html ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <div style=\"padding-left: '10px';padding-right: '10px';display: flex; align-items: center; justify-content: space-between\">\r\n            <div style=\"display: flex; align-items: center; justify-content: space-between\">\r\n                <ion-icon (click)=\"goBack()\" style=\"font-size:30px\" name=\"chevron-back-outline\"></ion-icon>\r\n                <!-- <p style=\"padding-left: 20px; font-weight: 800;\">topmai pay</p> -->\r\n                <!-- <img style=\"width: 40px;display: block;margin-left: 10px\" src=\"assets/chat/wallet/icon.png\"/> -->\r\n            </div>\r\n            <img (click)=\"gotoSettings()\" style=\"width: 30px;display: block\" src=\"assets/chat/wallet/settings.png\" />\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"green-card\">\r\n        <div class=\"right-border\" (click)=\"gotoTransferencia()\" style=\"margin-top: 10px;margin-bottom: 10px;width: 33%;\">\r\n            <div>\r\n                <img style=\"width: 25px;\" src=\"assets/chat/wallet/transfer.png\" />\r\n            </div>\r\n            <span style=\"margin-top: 5px;display: inline-block\">Pagos</span>\r\n        </div>\r\n\r\n        <div (click)=\"gotoMonedero()\" class=\"right-border\" style=\"margin-top: 10px;margin-bottom: 10px;width: 33%\">\r\n            <div style=\"margin-top: 21px\">\r\n                <img style=\"width: 25px;\" src=\"assets/chat/wallet/card.png\" />\r\n            </div>\r\n            <span style=\"margin-top: 5px;display: block\">Monedero</span>\r\n            <span style=\"color:rgba(255,255,255,0.74);font-size:15px;margin-top: 3px;display: inline-block\">$30</span>\r\n        </div>\r\n        <div>\r\n\r\n        </div>\r\n        <div (click)=\"gotoHistory()\" style=\"margin-top: 10px;margin-bottom: 10px;width: 33%\">\r\n            <div>\r\n                <img style=\"width: 25px;\" src=\"assets/chat/wallet/time.png\" />\r\n            </div>\r\n            <span style=\"margin-top: 5px;display: inline-block\">Historial</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"padding-left: 10px;padding-right: 10px; margin-top: 20px; font-weight: bold\">\r\n        Lista de pagos\r\n    </div>\r\n\r\n    <div style=\"color:#808080; font-size:15px; display: flex; justify-content: space-around; padding-left: 10px;padding-right: 10px; margin-top: 20px;text-align: center\">\r\n        <div style=\"width: 25%\">\r\n            <img class=\"img-card\" src=\"assets/chat/wallet/icons/1.png\" />\r\n            <div>Electricidad</div>\r\n        </div>\r\n        <div style=\"width: 25%\">\r\n            <img class=\"img-card\" src=\"assets/chat/wallet/icons/2.png\" />\r\n            <div>Internet</div>\r\n        </div>\r\n        <div style=\"width: 25%\">\r\n            <img class=\"img-card\" src=\"assets/chat/wallet/icons/3.png\" />\r\n            <div>Vales</div>\r\n        </div>\r\n        <div style=\"width: 25%\">\r\n            <img class=\"img-card\" src=\"assets/chat/wallet/icons/4.png\" />\r\n            <div>Seguros</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"color:#808080; font-size:15px; display: flex; justify-content: space-around; padding-left: 10px;padding-right: 10px; margin-top: 20px;text-align: center\">\r\n        <div style=\"width: 25%\">\r\n            <img class=\"img-card\" src=\"assets/chat/wallet/icons/5.png\" />\r\n            <div>Compras</div>\r\n        </div>\r\n        <div style=\"width: 25%\">\r\n            <img class=\"img-card\" src=\"assets/chat/wallet/icons/6.png\" />\r\n            <div>Recargas</div>\r\n        </div>\r\n        <div style=\"width: 25%\">\r\n            <img class=\"img-card\" src=\"assets/chat/wallet/icons/7.png\" />\r\n            <div>Factura</div>\r\n        </div>\r\n        <div style=\"width: 25%\">\r\n            <img class=\"img-card\" src=\"assets/chat/wallet/icons/8.png\" />\r\n            <div>Más</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"padding-left: 10px;padding-right: 10px; margin-top: 20px; font-weight: bold;justify-content: space-between; display: flex\">\r\n        <div>Promociones & descuentos</div>\r\n        <div style=\"color: #274b35\">Ver más</div>\r\n    </div>\r\n\r\n    <ion-slides pager=\"true\">\r\n        <ion-slide *ngFor=\"let item of slidesItems\">\r\n            <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\">\r\n                <ion-row class=\"ion-justify-content-around\">\r\n                    <ion-col>\r\n                        <div>\r\n                            <img style=\"width: 95%; margin-bottom: 20px \" [src]=\"item\" />\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_wallet_wallet_module_ts.js.map