(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_home_view-one-item_recipt-confirmation-model_recipt-confirmation-model_module_ts"],{

/***/ 82159:
/*!**********************************************************************************************************!*\
  !*** ./src/app/home/view-one-item/recipt-confirmation-model/recipt-confirmation-model-routing.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReciptConfirmationModelPageRoutingModule": () => (/* binding */ ReciptConfirmationModelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _recipt_confirmation_model_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipt-confirmation-model.page */ 28800);




const routes = [
    {
        path: '',
        component: _recipt_confirmation_model_page__WEBPACK_IMPORTED_MODULE_0__.ReciptConfirmationModelPage
    }
];
let ReciptConfirmationModelPageRoutingModule = class ReciptConfirmationModelPageRoutingModule {
};
ReciptConfirmationModelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReciptConfirmationModelPageRoutingModule);



/***/ }),

/***/ 32195:
/*!**************************************************************************************************!*\
  !*** ./src/app/home/view-one-item/recipt-confirmation-model/recipt-confirmation-model.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReciptConfirmationModelPageModule": () => (/* binding */ ReciptConfirmationModelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _recipt_confirmation_model_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipt-confirmation-model-routing.module */ 82159);
/* harmony import */ var _recipt_confirmation_model_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipt-confirmation-model.page */ 28800);







let ReciptConfirmationModelPageModule = class ReciptConfirmationModelPageModule {
};
ReciptConfirmationModelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recipt_confirmation_model_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReciptConfirmationModelPageRoutingModule
        ],
        declarations: [_recipt_confirmation_model_page__WEBPACK_IMPORTED_MODULE_1__.ReciptConfirmationModelPage]
    })
], ReciptConfirmationModelPageModule);



/***/ }),

/***/ 28800:
/*!************************************************************************************************!*\
  !*** ./src/app/home/view-one-item/recipt-confirmation-model/recipt-confirmation-model.page.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReciptConfirmationModelPage": () => (/* binding */ ReciptConfirmationModelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_recipt_confirmation_model_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recipt-confirmation-model.page.html */ 61432);
/* harmony import */ var _recipt_confirmation_model_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipt-confirmation-model.page.scss */ 35253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let ReciptConfirmationModelPage = class ReciptConfirmationModelPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
};
ReciptConfirmationModelPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ReciptConfirmationModelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-recipt-confirmation-model',
        template: _raw_loader_recipt_confirmation_model_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recipt_confirmation_model_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReciptConfirmationModelPage);



/***/ }),

/***/ 35253:
/*!**************************************************************************************************!*\
  !*** ./src/app/home/view-one-item/recipt-confirmation-model/recipt-confirmation-model.page.scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header::after {\n  background-image: none;\n}\n\nhr {\n  background: #e0dede;\n  height: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwdC1jb25maXJtYXRpb24tbW9kZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InJlY2lwdC1jb25maXJtYXRpb24tbW9kZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbmhyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTBkZWRlO1xyXG4gIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 61432:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/view-one-item/recipt-confirmation-model/recipt-confirmation-model.page.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" style=\"position: relative; height: 40px;\">\r\n  <ion-icon (click)=\"dismiss()\" style=\"position: absolute; top:6px; left: 10px; font-size: 25px;\" name=\"close-outline\"></ion-icon>\r\n  <div style=\"display: flex;justify-content: flex-start;align-items: center;height: 100%\">\r\n    <div style=\"margin-left: 45px; font-weight: bold\">\r\n      Pago y envio\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"background: #c1f2ef; font-size: 13px; padding: 10px\">\r\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error exercitationem id iest.\r\n  </div>\r\n  <div style=\"font-size: 16px; font-weight: bold; padding: 10px\">\r\n    Vendedor: eftnetworks\r\n  </div>\r\n  <ion-row style=\"margin-top: 10px\">\r\n    <ion-col size=\"3\">\r\n      <img src=\"assets/homePage/item-two/1.png\"/>\r\n    </ion-col>\r\n    <ion-col style=\"font-size: 14px; line-height: 20px\">\r\n      <div>Apple 2021 MAC MINI</div>\r\n      <div>A1347 2.3GHZ CORE</div>\r\n      <div>i7 SSD 8GB 256GB SSD</div>\r\n      <div>MOJAVE 10.14 T7-B3</div>\r\n      <div style=\"color: grey; font-size: 10px; margin-top: 5px\">Cantidad 1</div>\r\n    </ion-col>\r\n    <ion-col size=\"3\" style=\"font-weight: bold\">\r\n      $175.00\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"3\" style=\"display: flex;align-items: center;justify-content: center\">\r\n      <input checked name=\"fav_language\" style=\"display: block\" type=\"radio\"/>\r\n    </ion-col>\r\n    <ion-col style=\"font-size: 14px; line-height: 16px\">\r\n      <div>Entrega</div>\r\n      <div style=\"color:grey; font-size: 12px\">A1347 2.3GHZ CORE</div>\r\n      <div style=\"color:grey;font-size: 12px\">Standard Shipping</div>\r\n      <div style=\"color:grey;font-size: 12px; margin-top: 3px\">$15.00</div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"3\" style=\"display: flex;align-items: center;justify-content: center\">\r\n      <input name=\"fav_language\" style=\"display: block\" type=\"radio\"/>\r\n    </ion-col>\r\n    <ion-col style=\"font-size: 14px; line-height: 16px\">\r\n      <div>Recogida</div>\r\n      <div style=\"color:grey; font-size: 12px\">A1347 2.3GHZ CORE</div>\r\n      <div style=\"color:grey;font-size: 12px\">Local Pickup</div>\r\n      <div style=\"color:grey;font-size: 12px; margin-top: 3px\">$15.00</div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <hr/>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      Mensaje al vendedor\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n      <ion-icon name=\"chevron-forward-outline\" style=\"color: grey\"></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n  <hr/>\r\n\r\n  <ion-row style=\"font-size: 14px\">\r\n    <ion-col size=\"2\">\r\n      Envio a\r\n    </ion-col>\r\n    <ion-col style=\"color: grey; font-size: 12px\">\r\n      <div>Mensaje al vendedor</div>\r\n      <div>Mensaje al vendedor</div>\r\n      <div>Mensaje al vendedor</div>\r\n      <div>Mensaje al vendedor</div>\r\n      <div>Mensaje al vendedor</div>\r\n      <div>Mensaje al vendedor</div>\r\n    </ion-col>\r\n    <ion-col size=\"1\" style=\"display: flex; align-items: center\">\r\n      <ion-icon  name=\"chevron-forward-outline\" style=\"color: grey; display: block\"></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"font-size: 14px; margin-top: 5px\">\r\n    <ion-col size=\"2\">\r\n      Envio a\r\n    </ion-col>\r\n    <ion-col style=\"color: #c92016; font-size: 12px\">\r\n      <div>Mensaje al vendedor</div>\r\n    </ion-col>\r\n    <ion-col size=\"1\" style=\"display: flex; align-items: center\">\r\n      <ion-icon  name=\"chevron-forward-outline\" style=\"color: grey; display: block\"></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"font-size: 14px;margin-top: 5px\">\r\n    <ion-col>\r\n      <div>Tarjets regalo, cupoesn y dfsfsdafad de eBay</div>\r\n    </ion-col>\r\n    <ion-col size=\"1\" style=\"display: flex; align-items: center\">\r\n      <ion-icon  name=\"chevron-forward-outline\" style=\"color: grey; display: block\"></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row style=\"font-size: 14px;margin-top: 5px\">\r\n    <ion-col>\r\n      <div>Tarjets regalo, cupoesn y </div>\r\n      <div>Tarjets (Special)</div>\r\n    </ion-col>\r\n    <ion-col size=\"1\" style=\"display: flex; align-items: center\">\r\n      <ion-icon  name=\"chevron-forward-outline\" style=\"color: grey; display: block\"></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n  <hr/>\r\n\r\n  <ion-row style=\"font-size: 14px;margin-top: 5px\">\r\n    <ion-col style=\"color: grey\">\r\n      Subtotal (1 articulo)\r\n    </ion-col>\r\n    <ion-col size=\"3\" style=\"text-align: right\">\r\n      $175.00\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row style=\"font-size: 14px\">\r\n    <ion-col style=\"color: grey\">\r\n      Envio\r\n    </ion-col>\r\n    <ion-col size=\"3\" style=\"text-align: right\">\r\n      $15.00\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row style=\"font-size: 14px\">\r\n    <ion-col style=\"color: grey\">\r\n      Impuestos*\r\n    </ion-col>\r\n    <ion-col size=\"3\" style=\"text-align: right\">\r\n      $15.68\r\n    </ion-col>\r\n  </ion-row>\r\n  <hr/>\r\n\r\n  <ion-row style=\"font-size: 16px;margin-top: 5px\">\r\n    <ion-col style=\"color: grey\">\r\n      Total del pedido\r\n    </ion-col>\r\n    <ion-col size=\"3\" style=\"text-align: right; font-weight: bold\">\r\n      $205.68\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"font-size: 12px; color: grey; margin-top: 10px\">\r\n    <ion-col>\r\n      <div>\r\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aperiam autem consequatur corporis deserunt eaque earum, eligendi\r\n      </div>\r\n      <div style=\"color: #0f7bcd\">More information</div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"font-size: 14px; color: grey; margin-top: 10px; text-align: center\">\r\n    <ion-col>\r\n        Lorem ipsum dolor sit amet\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"font-size: 14px; color: grey; margin-top: 0px;text-align: center\">\r\n    <ion-col>\r\n      <div style=\"color: #0f7bcd\">More information</div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"font-size:14px; color: white; margin-top: 10px;text-align: center; font-weight: bold\">\r\n    <ion-col>\r\n      <div style=\"background: #b4b3b3; border-radius: 20px; padding: 10px 0px; justify-content: center;align-items: center;display: flex\">\r\n        <ion-icon style=\"display: block\" name=\"lock-closed\"></ion-icon>\r\n        <div style=\"margin-left: 5px\">More information</div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_view-one-item_recipt-confirmation-model_recipt-confirmation-model_module_ts.js.map