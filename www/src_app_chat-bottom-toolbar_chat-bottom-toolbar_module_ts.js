(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat-bottom-toolbar_chat-bottom-toolbar_module_ts"],{

/***/ 81877:
/*!***************************************************************************!*\
  !*** ./src/app/chat-bottom-toolbar/chat-bottom-toolbar-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatBottomToolbarPageRoutingModule": () => (/* binding */ ChatBottomToolbarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _chat_bottom_toolbar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-bottom-toolbar.page */ 92305);




const routes = [
    {
        path: '',
        component: _chat_bottom_toolbar_page__WEBPACK_IMPORTED_MODULE_0__.ChatBottomToolbarPage,
        children: [
            {
                path: 'chat-list',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_chats-list_chats-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../chat/chats-list/chats-list.module */ 39099)).then(m => m.ChatsListPageModule)
            },
            {
                path: 'contact-list',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_contact-list_contact-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../chat/contact-list/contact-list.module */ 71252)).then(m => m.ContactListPageModule)
            },
            {
                path: 'wallet',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_wallet_wallet_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../chat/wallet/wallet.module */ 64749)).then(m => m.WalletPageModule)
            },
            {
                path: '',
                redirectTo: 'chat-list',
                pathMatch: 'full'
            },
        ]
    },
];
let ChatBottomToolbarPageRoutingModule = class ChatBottomToolbarPageRoutingModule {
};
ChatBottomToolbarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatBottomToolbarPageRoutingModule);



/***/ }),

/***/ 16233:
/*!*******************************************************************!*\
  !*** ./src/app/chat-bottom-toolbar/chat-bottom-toolbar.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatBottomToolbarPageModule": () => (/* binding */ ChatBottomToolbarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _chat_bottom_toolbar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-bottom-toolbar-routing.module */ 81877);
/* harmony import */ var _chat_bottom_toolbar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-bottom-toolbar.page */ 92305);
/* harmony import */ var _chat_plus_popup_model_plus_popup_model_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat/plus-popup-model/plus-popup-model.page */ 72176);








let ChatBottomToolbarPageModule = class ChatBottomToolbarPageModule {
};
ChatBottomToolbarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _chat_bottom_toolbar_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatBottomToolbarPageRoutingModule
        ],
        declarations: [_chat_bottom_toolbar_page__WEBPACK_IMPORTED_MODULE_1__.ChatBottomToolbarPage, _chat_plus_popup_model_plus_popup_model_page__WEBPACK_IMPORTED_MODULE_2__.PlusPopupModelPage]
    })
], ChatBottomToolbarPageModule);



/***/ }),

/***/ 92305:
/*!*****************************************************************!*\
  !*** ./src/app/chat-bottom-toolbar/chat-bottom-toolbar.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatBottomToolbarPage": () => (/* binding */ ChatBottomToolbarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chat_bottom_toolbar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat-bottom-toolbar.page.html */ 16964);
/* harmony import */ var _chat_bottom_toolbar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-bottom-toolbar.page.scss */ 18180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _chat_plus_popup_model_plus_popup_model_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat/plus-popup-model/plus-popup-model.page */ 72176);
/* harmony import */ var _chat_album_model_album_model_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat/album-model/album-model.page */ 24681);








let ChatBottomToolbarPage = class ChatBottomToolbarPage {
    constructor(router, modalController) {
        this.router = router;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _chat_plus_popup_model_plus_popup_model_page__WEBPACK_IMPORTED_MODULE_2__.PlusPopupModelPage,
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    AlbumModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _chat_album_model_album_model_page__WEBPACK_IMPORTED_MODULE_3__.AlbumModelPage,
                cssClass: 'my-custom-class-Album'
            });
            return yield modal.present();
        });
    }
    gotoHome() {
        this.router.navigate([`tabs/home`]);
    }
    gotoDiscover() {
        this.router.navigate([`discover`]);
    }
    gotoWallet() {
        this.router.navigate([`chat/wallet`]);
    }
};
ChatBottomToolbarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
ChatBottomToolbarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-chat-bottom-toolbar',
        template: _raw_loader_chat_bottom_toolbar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_bottom_toolbar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatBottomToolbarPage);



/***/ }),

/***/ 72176:
/*!****************************************************************!*\
  !*** ./src/app/chat/plus-popup-model/plus-popup-model.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlusPopupModelPage": () => (/* binding */ PlusPopupModelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_plus_popup_model_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./plus-popup-model.page.html */ 73389);
/* harmony import */ var _plus_popup_model_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus-popup-model.page.scss */ 89614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let PlusPopupModelPage = class PlusPopupModelPage {
    constructor(modalController, router) {
        this.modalController = modalController;
        this.router = router;
    }
    ngOnInit() {
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true
        });
    }
    addCategory() {
        this.dismiss();
        this.router.navigate([`add-categories`]);
    }
};
PlusPopupModelPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PlusPopupModelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-plus-popup-model',
        template: _raw_loader_plus_popup_model_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_plus_popup_model_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlusPopupModelPage);



/***/ }),

/***/ 18180:
/*!*******************************************************************!*\
  !*** ./src/app/chat-bottom-toolbar/chat-bottom-toolbar.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".tab-selected {\n  color: #0ec40e !important;\n}\n\nion-badge {\n  background-color: red;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtYm90dG9tLXRvb2xiYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiY2hhdC1ib3R0b20tdG9vbGJhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLXNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDE5NiwgMTQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgICByaWdodDogLTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ 89614:
/*!******************************************************************!*\
  !*** ./src/app/chat/plus-popup-model/plus-popup-model.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbHVzLXBvcHVwLW1vZGVsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 16964:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-bottom-toolbar/chat-bottom-toolbar.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n        <ion-tab-button tab=\"contact-list\">\r\n            <ion-icon style=\"font-size: 2rem;\" name=\"people-circle-outline\"></ion-icon>\r\n            <ion-label>Contactos</ion-label>\r\n        </ion-tab-button>\r\n        <ion-tab-button tab=\"chat-list\">\r\n            <ion-icon style=\"position:relative;font-size: 1.5rem;\" name=\"chatbubble-outline\"></ion-icon>\r\n            <ion-badge style=\"position: absolute;top: 5px;font-size: 12px;width: 23px;border-radius: 9px\" id=\"notifications-badge\" color=\"danger\">10</ion-badge>\r\n            <ion-label>Chats</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button (click)=\"presentModal()\">\r\n            <ion-icon style=\"font-size: 2.2rem; color: rgb(14, 196, 14);\" name=\"add-circle-outline\"></ion-icon>\r\n            <ion-label>Súbelo</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button (click)=\"AlbumModal()\">\r\n            <!-- <ion-icon (click)=\"gotoDiscover()\" style=\"font-size: 2rem;\" src=\"assets/descubrir.svg\"></ion-icon> -->\r\n            <ion-icon style=\"font-size: 2rem;\" src=\"assets/descubrir.svg\"></ion-icon>\r\n            <ion-label>Album</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"wallet\">\r\n            <ion-icon style=\"font-size: 2rem;\" src=\"assets/bank.svg\"></ion-icon>\r\n            <ion-label>Banco</ion-label>\r\n        </ion-tab-button>\r\n    </ion-tab-bar>\r\n</ion-tabs>");

/***/ }),

/***/ 73389:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/plus-popup-model/plus-popup-model.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"border-radius:20px 20px 0px 0px;padding: 20px\">\r\n    <div style=\"display: flex; justify-content: space-between\">\r\n        <div style=\"font-size: 18px;font-weight: bold\">\r\n            Súbelo al Marketplace\r\n        </div>\r\n        <div>\r\n            <ion-icon style=\"font-size: 25px\" (click)=\"dismiss()\" name=\"close-outline\"></ion-icon>\r\n        </div>\r\n    </div>\r\n\r\n    <div (click)=\"addCategory()\" style=\"display: flex; margin-top: 12px; align-items: center\">\r\n        <div>\r\n            <img style=\"height: 40px\" src=\"assets/chat/popUp/1.png\" />\r\n        </div>\r\n        <div style=\"margin-left: 10px\">\r\n            Subelo\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"display: flex; margin-top: 12px; align-items: center\">\r\n        <div>\r\n            <img style=\"height: 40px\" src=\"assets/chat/popUp/2.png\" />\r\n        </div>\r\n        <div style=\"margin-left: 10px\">\r\n            Video de entretenimiento\r\n        </div>\r\n    </div>\r\n<!---  <div style=\"display: flex; margin-top: 12px; align-items: center\">\r\n        <div>\r\n            <img style=\"height: 40px\" src=\"assets/chat/popUp/3.png\" />\r\n        </div>\r\n        <div style=\"margin-left: 10px\">\r\n            Video Comercial\r\n        </div>\r\n    </div>--->\r\n  \r\n\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat-bottom-toolbar_chat-bottom-toolbar_module_ts.js.map