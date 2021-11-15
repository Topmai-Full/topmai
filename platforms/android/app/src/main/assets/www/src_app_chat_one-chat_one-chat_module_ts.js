(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_one-chat_one-chat_module_ts"],{

/***/ 2430:
/*!*******************************************************************!*\
  !*** ./src/app/chat/one-chat/modal-tranfer/modal-tranfer.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalTranferPage": () => (/* binding */ ModalTranferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_modal_tranfer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal-tranfer.page.html */ 38123);
/* harmony import */ var _modal_tranfer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-tranfer.page.scss */ 60618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _payment_dialog_payment_dialog_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payment-dialog/payment-dialog.page */ 79894);







let ModalTranferPage = class ModalTranferPage {
    constructor(location, modalController) {
        this.location = location;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    close() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss();
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _payment_dialog_payment_dialog_page__WEBPACK_IMPORTED_MODULE_2__.PaymentDialogPage,
            });
            return yield modal.present();
        });
    }
};
ModalTranferPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
ModalTranferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-modal-tranfer',
        template: _raw_loader_modal_tranfer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_tranfer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalTranferPage);



/***/ }),

/***/ 35694:
/*!**********************************************************!*\
  !*** ./src/app/chat/one-chat/one-chat-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneChatPageRoutingModule": () => (/* binding */ OneChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _one_chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-chat.page */ 63297);




const routes = [
    {
        path: '',
        component: _one_chat_page__WEBPACK_IMPORTED_MODULE_0__.OneChatPage
    },
    {
        path: 'payment-dialog',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_one-chat_payment-dialog_payment-dialog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payment-dialog/payment-dialog.module */ 27948)).then(m => m.PaymentDialogPageModule)
    },
    {
        path: 'modal-tranfer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_one-chat_modal-tranfer_modal-tranfer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modal-tranfer/modal-tranfer.module */ 9073)).then(m => m.ModalTranferPageModule)
    }
];
let OneChatPageRoutingModule = class OneChatPageRoutingModule {
};
OneChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OneChatPageRoutingModule);



/***/ }),

/***/ 23336:
/*!**************************************************!*\
  !*** ./src/app/chat/one-chat/one-chat.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneChatPageModule": () => (/* binding */ OneChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _one_chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-chat-routing.module */ 35694);
/* harmony import */ var _one_chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one-chat.page */ 63297);







let OneChatPageModule = class OneChatPageModule {
};
OneChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _one_chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.OneChatPageRoutingModule
        ],
        declarations: [_one_chat_page__WEBPACK_IMPORTED_MODULE_1__.OneChatPage]
    })
], OneChatPageModule);



/***/ }),

/***/ 63297:
/*!************************************************!*\
  !*** ./src/app/chat/one-chat/one-chat.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneChatPage": () => (/* binding */ OneChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_one_chat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./one-chat.page.html */ 70415);
/* harmony import */ var _one_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one-chat.page.scss */ 84984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _payment_dialog_payment_dialog_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-dialog/payment-dialog.page */ 79894);
/* harmony import */ var _modal_tranfer_modal_tranfer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-tranfer/modal-tranfer.page */ 2430);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);









let OneChatPage = class OneChatPage {
    // seeMore;
    // seeMore2;
    constructor(location, modalController, router) {
        this.location = location;
        this.modalController = modalController;
        this.router = router;
        this.mostrar = false;
        this.mostrarr = false;
        // this.seeMore='height: 40px';
        // this.seeMore2='height: 40px';
    }
    ngOnInit() {
        // this.presentModal();
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _payment_dialog_payment_dialog_page__WEBPACK_IMPORTED_MODULE_2__.PaymentDialogPage,
            });
            return yield modal.present();
        });
    }
    goBack() {
        this.location.back();
    }
    goToPage(url) {
        this.router.navigate([url]);
    }
    // expand() {
    //   if(this.seeMore==='height: 40px'){
    //     this.seeMore='height: 235px';
    //   } else{
    //     this.seeMore='height: 40px';
    //   }
    // }
    // expand2() {
    //   if(this.seeMore2==='height: 40px'){
    //     this.seeMore2='height: 235px';
    //   } else{
    //     this.seeMore2='height: 40px';
    //   }
    // }
    AutoPrecio() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_tranfer_modal_tranfer_page__WEBPACK_IMPORTED_MODULE_3__.ModalTranferPage,
                cssClass: 'modal-chat-transferencia'
            });
            return yield modal.present();
        });
    }
};
OneChatPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
OneChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-one-chat',
        template: _raw_loader_one_chat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_one_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OneChatPage);



/***/ }),

/***/ 60618:
/*!*********************************************************************!*\
  !*** ./src/app/chat/one-chat/modal-tranfer/modal-tranfer.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC10cmFuZmVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 84984:
/*!**************************************************!*\
  !*** ./src/app/chat/one-chat/one-chat.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".chat-input {\n  width: 100%;\n  height: 30px;\n  padding-left: 5px;\n  border: none;\n}\n\n.chat-input:focus {\n  outline: none;\n}\n\nion-grid {\n  padding: 0px;\n  --ion-grid-columns: 20;\n}\n\nion-col {\n  padding: 3px;\n}\n\nion-footer {\n  background: #f6f6f6;\n}\n\n.color-header {\n  background-image: linear-gradient(to right, #4cd080 0%, #4cd080 100%);\n  height: 42px;\n}\n\nion-content {\n  --ion-background-color: #eeeded;\n}\n\n.chat-left {\n  position: relative;\n  border-radius: 5px;\n  background: white;\n  padding: 13px;\n  max-width: calc(100vw - 124px);\n}\n\n.chat-left:after {\n  content: \"\";\n  position: absolute;\n  left: -8px;\n  top: 11px;\n  width: 0;\n  height: 0;\n  border-top: 9px solid transparent;\n  border-bottom: 9px solid transparent;\n  border-right: 9px solid white;\n}\n\n.chat-right {\n  position: relative;\n  max-width: calc(100vw - 124px);\n  margin-right: 8px;\n  border-radius: 5px;\n  background: #4CD080FF;\n  padding: 13px;\n}\n\n.chat-right:after {\n  content: \"\";\n  position: absolute;\n  right: -8px;\n  top: 11px;\n  width: 0;\n  height: 0;\n  border-top: 9px solid transparent;\n  border-bottom: 9px solid transparent;\n  border-left: 9px solid #4CD080FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZS1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXhCSjs7QUEyQkE7RUFDSSxhQUFBO0FBeEJKOztBQTJCQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxZQUFBO0FBeEJKOztBQTJCQTtFQUNJLG1CQUFBO0FBeEJKOztBQTJCQTtFQUNJLHFFQUFBO0VBQ0EsWUFBQTtBQXhCSjs7QUEyQkE7RUFDSSwrQkFBQTtBQXhCSjs7QUEyQkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFyRUEsUUFBQTtFQUNBLFNBQUE7RUFpQkksaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBOEJSOztBQXVCQTtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBcEJKOztBQXVCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBdEZBLFFBQUE7RUFDQSxTQUFBO0VBWUksaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FBd0RSIiwiZmlsZSI6Im9uZS1jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiB0cmlhbmdsZSgkY29sb3IsICRzaXplLCAkZGlyZWN0aW9uKSB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIEBpZiAkZGlyZWN0aW9uPT1cInVwXCIge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogKCRzaXplICsgcHgpIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAoJHNpemUgKyBweCkgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogKCRzaXplICsgcHgpIHNvbGlkICRjb2xvcjtcclxuICAgIH1cclxuICAgIEBpZiAkZGlyZWN0aW9uPT1cImRvd25cIiB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAoJHNpemUgKyBweCkgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICgkc2l6ZSArIHB4KSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItdG9wOiAoJHNpemUgKyBweCkgc29saWQgJGNvbG9yO1xyXG4gICAgfVxyXG4gICAgQGlmICRkaXJlY3Rpb249PVwicmlnaHRcIiB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogKCRzaXplICsgcHgpIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206ICgkc2l6ZSArIHB4KSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItbGVmdDogKCRzaXplICsgcHgpIHNvbGlkICRjb2xvcjtcclxuICAgIH1cclxuICAgIEBpZiAkZGlyZWN0aW9uPT1cImxlZnRcIiB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogKCRzaXplICsgcHgpIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206ICgkc2l6ZSArIHB4KSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6ICgkc2l6ZSArIHB4KSBzb2xpZCAkY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGF0LWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGF0LWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uczogMjA7XHJcbn1cclxuXHJcbmlvbi1jb2wge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjZcclxufVxyXG5cclxuLmNvbG9yLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0Y2QwODAgMCUsICM0Y2QwODAgMTAwJSk7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNlZWVkZWQ7XHJcbn1cclxuXHJcbi5jaGF0LWxlZnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxM3B4O1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMTI0cHgpO1xyXG59XHJcblxyXG4uY2hhdC1sZWZ0OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLThweDtcclxuICAgIHRvcDogMTFweDtcclxuICAgIEBpbmNsdWRlIHRyaWFuZ2xlKHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksIDksIGxlZnQpO1xyXG59XHJcblxyXG4uY2hhdC1yaWdodCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAxMjRweCk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICM0Q0QwODBGRjtcclxuICAgIHBhZGRpbmc6IDEzcHhcclxufVxyXG5cclxuLmNoYXQtcmlnaHQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLThweDtcclxuICAgIHRvcDogMTFweDtcclxuICAgIEBpbmNsdWRlIHRyaWFuZ2xlKCM0Q0QwODBGRiwgOSwgcmlnaHQpO1xyXG59Il19 */");

/***/ }),

/***/ 38123:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/one-chat/modal-tranfer/modal-tranfer.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent>\r\n    <ion-toolbar>\r\n        <!-- <ion-buttons slot=\"start\">\r\n\r\n            <ion-icon style=\"font-size: 25px\" name=\"refresh-outline\"></ion-icon>\r\n\r\n        </ion-buttons> -->\r\n        <ion-buttons slot=\"end\">\r\n\r\n            <ion-icon style=\"font-size: 25px\" (click)=\"close()\" name=\"close-outline\"></ion-icon>\r\n\r\n        </ion-buttons>\r\n\r\n        <ion-title style=\"text-align: center;\">Transferencia</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-list>\r\n        <!-- <ion-list-header style=\"font-size: 1rem;\">\r\n            Pago en efectivo\r\n            <ion-icon name=\"information-circle-outline\" style=\"font-size: 20px; margin-left: 5px; color: green;\"></ion-icon>\r\n            Pago en efectivo\r\n            <ion-icon name=\"information-circle-outline\" style=\"font-size: 20px; margin-left: 5px; color: green;\"></ion-icon>\r\n        </ion-list-header> -->\r\n        <!-- <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-input style=\" border: 2px solid rgba(128, 128, 128, 0.267); border-radius: 5px;\" placeholder=\"Mínimo\"></ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-input style=\" border: 2px solid rgba(128, 128, 128, 0.267); border-radius: 5px;\" placeholder=\"Máximo\"></ion-input>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid> -->\r\n        <ion-item (click)=\"presentModal()\">\r\n            <ion-label>Pago en efectivo</ion-label>\r\n            <ion-icon name=\"information-circle-outline\" style=\"font-size: 20px; margin-left: 5px; color: green;\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item (click)=\"presentModal()\">\r\n            <ion-label>Pago Online</ion-label>\r\n            <ion-icon name=\"information-circle-outline\" style=\"font-size: 20px; margin-left: 5px; color: green;\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item (click)=\"presentModal()\">\r\n            <ion-label>Pago Dropshipping Avión</ion-label>\r\n            <ion-icon name=\"information-circle-outline\" style=\"font-size: 20px; margin-left: 5px; color: green;\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item (click)=\"presentModal()\">\r\n            <ion-label>Pago Dropshipping Barco</ion-label>\r\n            <ion-icon name=\"information-circle-outline\" style=\"font-size: 20px; margin-left: 5px; color: green;\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item (click)=\"presentModal()\">\r\n            <ion-label>Pago de Servicios</ion-label>\r\n            <ion-icon name=\"information-circle-outline\" style=\"font-size: 20px; margin-left: 5px; color: green;\"></ion-icon>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content>");

/***/ }),

/***/ 70415:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/one-chat/one-chat.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"color-header\" style=\"position: relative\">\r\n    \r\n    <ion-icon (click)=\"goBack()\" style=\"position: absolute; top:4px; font-size: 30px; color: white;\" name=\"chevron-back-outline\"></ion-icon>\r\n    \r\n    <div style=\"display: flex;justify-content: center;align-items: center;color:#FFF;height: 100%\">\r\n        <div>\r\n            Kasun Chandika\r\n        </div>\r\n        \r\n        <ion-icon style=\"color: white;font-size: 25px;margin-left: 390px\" name=\"ellipsis-vertical\"></ion-icon>\r\n    </div>\r\n    \r\n    </ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid style=\"margin-left: 5px;\">\r\n        <ion-row style=\"flex-wrap: nowrap;margin-top: 10px; display: flex; justify-content: flex-start\">\r\n            <div style=\"width: 55px\">\r\n                <img style=\"width: 45px; height: 45px; object-fit: cover; border-radius: 100%\" src=\"assets/chat/contacts/1.png\" />\r\n            </div>\r\n            <div style=\"display: flex; margin-left: 3px;\">\r\n                <div class=\"chat-left\">\r\n                    fdsfsdsfds fds fds fds fds fds fds fds afd safds\r\n                </div>\r\n            </div>\r\n        </ion-row>\r\n\r\n        <ion-row style=\"flex-wrap: nowrap;margin-top: 10px; display: flex; justify-content: flex-end\">\r\n            <div style=\"display: flex; margin-right: 3px\">\r\n                <div class=\"chat-right\">\r\n                    fdsfsds dsfdsfdsf ds fds fds f dsafdsaf dsa fdsaf ds afdsa fdsa fds a\r\n                </div>\r\n            </div>\r\n            <div style=\"text-align: right; margin-right: 5px\">\r\n                <img style=\"width: 45px;  height: 45px; object-fit: cover;border-radius: 100%\" src=\"assets/chat/contacts/2.png\" />\r\n            </div>\r\n        </ion-row>\r\n\r\n        <ion-row style=\"text-align: center; margin: 25px; color: grey; font-size: 13px\">\r\n            <ion-col>\r\n                4/7/21 10:24\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row style=\"flex-wrap: nowrap;margin-top: 10px; display: flex; justify-content: flex-start\">\r\n            <div style=\"width: 55px\">\r\n                <img style=\"width: 45px; height: 45px; object-fit: cover; border-radius: 100%\" src=\"assets/chat/contacts/1.png\" />\r\n            </div>\r\n            <div style=\"display: flex; margin-left: 3px;\">\r\n                <div class=\"chat-left\">\r\n                    fdsfsdsfds fds fds fds fds fds fds fds afd safds\r\n                </div>\r\n            </div>\r\n        </ion-row>\r\n        <ion-row style=\"flex-wrap: nowrap;margin-top: 10px; display: flex; justify-content: flex-end\">\r\n            <div style=\"display: flex; margin-right: 3px\">\r\n                <div class=\"chat-right\">\r\n                    fdsfsds\r\n                </div>\r\n            </div>\r\n            <div style=\"text-align: right; margin-right: 5px\">\r\n                <img style=\"width: 45px;  height: 45px; object-fit: cover;border-radius: 100%\" src=\"assets/chat/contacts/2.png\" />\r\n            </div>\r\n        </ion-row>\r\n        <ion-row style=\"flex-wrap: nowrap;margin-top: 10px; display: flex; justify-content: flex-start\">\r\n            <div style=\"width: 55px\">\r\n                <img style=\"width: 45px; height: 45px; object-fit: cover; border-radius: 100%\" src=\"assets/chat/contacts/1.png\" />\r\n            </div>\r\n            <div style=\"display: flex; margin-left: 3px;\">\r\n                <div class=\"chat-left\">\r\n                    fdsfsd\r\n                </div>\r\n            </div>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col size=\"2\" style=\"display: flex;align-items: center; font-size: 30px; justify-content: center;\">\r\n\r\n                <ion-icon (click)=\"mostrar = !mostrar\" style=\"display: block\" name=\"happy-outline\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col>\r\n                <input class=\"chat-input\" />\r\n            </ion-col>\r\n            <ion-col size=\"2\" style=\"display: flex;align-items: center;font-size: 25px;justify-content: center;\">\r\n                <!-- <ion-icon style=\"display: block\" name=\"ellipsis-vertical-circle-outline\"></ion-icon> -->\r\n                <ion-icon style=\"display: block\" name=\"send-outline\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col size=\"2\" style=\"display: flex;align-items: center;font-size: 30px;justify-content: center;\">\r\n                <ion-icon (click)=\"mostrarr = !mostrarr\" style=\"display: block\" name=\"add-circle-outline\"></ion-icon>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n\r\n    <!----text-decoration: none; display:inline-block; height: 1.5em;=======< !----text-decoration: none; display:inline-block; height: 1.5em;>>>>>>> b2d4355db5d6c5032abe96badc286698e50701be width: 1.5em; ---->\r\n    <ion-content pager=\"false\" *ngIf=\"mostrar\">\r\n\r\n        <ion-grid style=\"margin-top: 3px\">\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px;\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/1.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/2.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/3.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/4.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/5.png\" />\r\n                </ion-col>\r\n\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/6.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/7.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/8.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/9.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/10.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/11.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/12.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/13.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/14.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/15.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/16.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/17.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/18.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/19.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/20.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/21.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/22.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/23.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/24.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/25.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/26.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/27.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/28.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/29.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/30.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/31.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/32.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/33.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/34.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/35.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/36.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/37.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/38.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/39.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/40.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/41.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/42.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/43.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/44.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/45.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/46.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/47.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/48.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/49.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/50.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n        =======\r\n        <ion-grid style=\"margin-top: 3px\">\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px;\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/1.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/2.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/3.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/4.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/5.png\" />\r\n                </ion-col>\r\n\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/6.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/7.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/8.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/9.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/10.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/11.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/12.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/13.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/14.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/15.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/16.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/17.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/18.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/19.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/20.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/21.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/22.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/23.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/24.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/25.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/26.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/27.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/28.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/29.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/30.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/31.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/32.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/33.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/34.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/35.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/36.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/37.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/38.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/39.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/40.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/41.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/42.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/43.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/44.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/45.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"text-align:center; font-size:12px\">\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/46.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/47.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/48.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/49.png\" />\r\n                </ion-col>\r\n                <ion-col size=\"4\" style=\"padding: 5px 5px 0px\">\r\n                    <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/emojis/50.png\" />\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n\r\n\r\n\r\n\r\n    </ion-content>\r\n\r\n\r\n\r\n    <ion-slides pager=\"false\" *ngIf=\"mostrarr\">\r\n        <ion-slide>\r\n            <ion-grid style=\"margin-top: 3px\">\r\n                <ion-row style=\"text-align:center; font-size:12px\">\r\n                    <ion-col size=\"5\" style=\"padding: 20px 20px 0px;\">\r\n                        <img style=\"margin-bottom: 3px; width: 50px;\" src=\"assets/chat/one-chat/1.png\" /> Camara\r\n                    </ion-col>\r\n                    <ion-col size=\"5\" style=\"padding: 20px 20px 0px\">\r\n                        <img style=\"margin-bottom: 3px; width: 50px;\" src=\"assets/chat/one-chat/2.png\" /> Contacto\r\n                    </ion-col>\r\n                  \r\n                    <!-- <ion-col size=\"5\" style=\"padding: 20px 20px 0px\">\r\n                        <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/3.png\" />\r\n                    </ion-col> -->\r\n                    <ion-col size=\"5\" style=\"padding: 20px 20px 0px\" (click)=\"AutoPrecio()\">\r\n                        <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/8.png\" /> Transferir\r\n                    </ion-col>\r\n                    <!-- <ion-col size=\"5\" style=\"padding: 20px 20px 0px\" (click)=\"presentModal()\">\r\n                        <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/8.png\" /> Transferir\r\n                    </ion-col> -->\r\n                    <ion-col size=\"5\" style=\"padding: 20px 20px 0px\" (click)=\"goToPage('chat/resolve-center')\">\r\n                        <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/4.png\" /> Archivos\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row style=\"text-align:center; font-size:12px\">\r\n                    <ion-col size=\"5\" style=\"padding: 20px 20px 0px\">\r\n                        <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/5.png\" /> Locación\r\n                    </ion-col>\r\n                    <ion-col size=\"5\" style=\"padding: 20px 20px 0px\">\r\n                        <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/6.png\" /> Fotos\r\n                    </ion-col>\r\n                    <ion-col size=\"5\" style=\"padding: 20px 20px 0px\">\r\n                        <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/7.png\" /> Audio\r\n                    </ion-col>\r\n                    <ion-col size=\"5\" style=\"padding: 20px 20px 0px\">\r\n                        <img style=\"margin-bottom: 3px;width: 50px;\" src=\"assets/chat/one-chat/9.png\" /> Regalo\r\n                    </ion-col>\r\n                   \r\n                </ion-row>\r\n                 \r\n\r\n            </ion-grid>\r\n        </ion-slide>\r\n        <ion-slide>\r\n           \r\n                <ion-grid style=\"margin-top: 3px\">\r\n                 <ion-row>\r\n            <ion-col size=\"5\" style=\"padding: 10px 10px 0px\">\r\n                <img style=\"margin-bottom: 3px;width: 40px;\" src=\"assets/chat/one-chat/1x/ofertar.png\" />ofertar\r\n            </ion-col>\r\n            </ion-row>\r\n                </ion-grid>\r\n       \r\n            \r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_one-chat_one-chat_module_ts.js.map