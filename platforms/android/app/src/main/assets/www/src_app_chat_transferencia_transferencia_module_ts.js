(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_transferencia_transferencia_module_ts"],{

/***/ 59593:
/*!********************************************************************!*\
  !*** ./src/app/chat/transferencia/transferencia-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferenciaPageRoutingModule": () => (/* binding */ TransferenciaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _transferencia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transferencia.page */ 79510);




const routes = [
    {
        path: '',
        component: _transferencia_page__WEBPACK_IMPORTED_MODULE_0__.TransferenciaPage
    },
    {
        path: 'popup-model',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_transferencia_popup-model_popup-model_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./popup-model/popup-model.module */ 45211)).then(m => m.PopupModelPageModule)
    }
];
let TransferenciaPageRoutingModule = class TransferenciaPageRoutingModule {
};
TransferenciaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransferenciaPageRoutingModule);



/***/ }),

/***/ 14134:
/*!************************************************************!*\
  !*** ./src/app/chat/transferencia/transferencia.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferenciaPageModule": () => (/* binding */ TransferenciaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _transferencia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transferencia-routing.module */ 59593);
/* harmony import */ var _transferencia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transferencia.page */ 79510);







let TransferenciaPageModule = class TransferenciaPageModule {
};
TransferenciaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _transferencia_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransferenciaPageRoutingModule
        ],
        declarations: [_transferencia_page__WEBPACK_IMPORTED_MODULE_1__.TransferenciaPage]
    })
], TransferenciaPageModule);



/***/ }),

/***/ 79510:
/*!**********************************************************!*\
  !*** ./src/app/chat/transferencia/transferencia.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferenciaPage": () => (/* binding */ TransferenciaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_transferencia_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./transferencia.page.html */ 3600);
/* harmony import */ var _transferencia_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transferencia.page.scss */ 92100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _popup_model_popup_model_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup-model/popup-model.page */ 47542);







let TransferenciaPage = class TransferenciaPage {
    constructor(location, modalController) {
        this.location = location;
        this.modalController = modalController;
    }
    ngOnInit() {
        // this.presentModal();
    }
    goBack() {
        this.location.back();
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _popup_model_popup_model_page__WEBPACK_IMPORTED_MODULE_2__.PopupModelPage,
            });
            return yield modal.present();
        });
    }
};
TransferenciaPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
TransferenciaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-transferencia',
        template: _raw_loader_transferencia_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_transferencia_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TransferenciaPage);



/***/ }),

/***/ 92100:
/*!************************************************************!*\
  !*** ./src/app/chat/transferencia/transferencia.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #4cd080;\n}\nion-toolbar ion-buttons ion-back-button {\n  --color: white;\n}\nion-toolbar ion-title {\n  --color: white;\n  font-size: 2rem;\n}\nion-content {\n  --background: #4cd080;\n}\nion-content .card {\n  background: white;\n}\nion-content .card .btns-holder ion-button {\n  text-transform: none;\n}\nion-content .card .btns-holder #first {\n  --background: #48BF04;\n  --border-radius: 11px;\n  --box-shadow: none;\n  width: 150px;\n  margin: 0 auto;\n}\nion-content .card .btns-holder #second {\n  --background: transparent;\n  --box-shadow: none;\n  --color: #06672A;\n  width: 150px;\n  margin: 0 auto;\n}\nion-content .next-card {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  margin-top: 10px;\n}\nion-content .next-card ion-item {\n  --background: transparent;\n}\nion-content .next-card ion-item ion-label {\n  color: white !important;\n}\nion-content .next-card ion-item img {\n  height: 30px;\n  margin-right: 10px;\n}\n.font-mai {\n  font-family: \"Arista\";\n  font-size: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVyZW5jaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjtBQUNRO0VBQ0ksY0FBQTtBQUNaO0FBRUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUFSO0FBSUE7RUFDSSxxQkFBQTtBQURKO0FBRUk7RUFDSSxpQkFBQTtBQUFSO0FBRVk7RUFDSSxvQkFBQTtBQUFoQjtBQUVZO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBaEI7QUFFWTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQWhCO0FBSUk7RUFDSSwyQ0FBQTtFQUNBLGdCQUFBO0FBRlI7QUFHUTtFQUNJLHlCQUFBO0FBRFo7QUFFWTtFQUNJLHVCQUFBO0FBQWhCO0FBRVk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFBaEI7QUFNQTtFQUNJLHFCQUFBO0VBQ0EsMEJBQUE7QUFISiIsImZpbGUiOiJ0cmFuc2ZlcmVuY2lhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzRjZDA4MDtcclxuICAgIGlvbi1idXR0b25zIHtcclxuICAgICAgICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNGNkMDgwO1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIC5idG5zLWhvbGRlciB7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2ZpcnN0IHtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzQ4QkYwNDtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgICAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNzZWNvbmQge1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIC0tY29sb3I6ICMwNjY3MkE7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uZXh0LWNhcmQge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZm9udC1tYWkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlzdGEnO1xyXG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 3600:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/transferencia/transferencia.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n\r\n            <ion-icon style=\"font-size: 30px; color: white;\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-buttons>\r\n        <ion-title class=\"font-mai\">topmai pay</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n    <div class=\"card ion-padding ion-text-center\">\r\n        <div class=\"img-holder\">\r\n            <!-- <img src=\"assets/imgs/sheild.png\" alt=\"\"> -->\r\n            <ion-icon style=\"color: #2fdf75;font-size: 80px;\" name=\"checkmark-circle\"></ion-icon>\r\n        </div>\r\n        <p class=\"ion-text-wrap\">\r\n            Esta caracteristica es solo para pagos a proveedores. Por seguridad, no comparta el codigo de pago con otras personas.\r\n        </p>\r\n\r\n        <div class=\"btns-holder ion-text-center\">\r\n            <!--<ion-button expand=\"block\" id=\"first\">\r\n               \r\n            </ion-button>--->\r\n\r\n\r\n            <img src=\"assets/imgs/SVG/barras.png\" style=\"width: 80%;\" alt=\"\">\r\n            <img src=\"assets/imgs/SVG/qr.svg\" style=\"width: 75%;\" alt=\"\">\r\n\r\n            <!-- <ion-button expand=\"block\" id=\"second\">\r\n                Ver detalles\r\n            </ion-button> -->\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- \r\n    <div class=\"next-card\">\r\n        <ion-item lines=\"none\">\r\n\r\n\r\n            <ion-icon name=\"cash-outline\" style=\"font-size: 30px; color: rgb(255, 255, 255); \" alt=\"\">\r\n            </ion-icon>\r\n            <ion-label>Recibir Dinero</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n\r\n\r\n\r\n\r\n            <ion-icon name=\"card-outline\" style=\"font-size: 30px; color: rgb(255, 255, 255);\" alt=\"\"></ion-icon>\r\n\r\n            <ion-label>Enviar Dinero</ion-label>\r\n        </ion-item>\r\n\r\n\r\n\r\n        <ion-item (click)=\"presentModal()\" lines=\"none\">\r\n            <img src=\"assets/imgs/SVG/dinero.svg\" style=\"font-size: 30px;\" alt=\"\">\r\n            <ion-label class=\"ion-text-wrap\">Transferir a tarjeta bancana/nro de movil</ion-label>\r\n        </ion-item>\r\n    </div> -->\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_transferencia_transferencia_module_ts.js.map