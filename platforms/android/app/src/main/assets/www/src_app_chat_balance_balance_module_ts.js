(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_balance_balance_module_ts"],{

/***/ 2141:
/*!********************************************************!*\
  !*** ./src/app/chat/balance/balance-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalancePageRoutingModule": () => (/* binding */ BalancePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance.page */ 1599);




const routes = [
    {
        path: '',
        component: _balance_page__WEBPACK_IMPORTED_MODULE_0__.BalancePage
    },
    {
        path: 'withdrawals-dialog',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_balance_withdrawals-dialog_withdrawals-dialog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./withdrawals-dialog/withdrawals-dialog.module */ 83292)).then(m => m.WithdrawalsDialogPageModule)
    },
    {
        path: 'recharge-dialog',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chat_balance_recharge-dialog_recharge-dialog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./recharge-dialog/recharge-dialog.module */ 56629)).then(m => m.RechargeDialogPageModule)
    }
];
let BalancePageRoutingModule = class BalancePageRoutingModule {
};
BalancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BalancePageRoutingModule);



/***/ }),

/***/ 79774:
/*!************************************************!*\
  !*** ./src/app/chat/balance/balance.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalancePageModule": () => (/* binding */ BalancePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _balance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balance-routing.module */ 2141);
/* harmony import */ var _balance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balance.page */ 1599);







let BalancePageModule = class BalancePageModule {
};
BalancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _balance_routing_module__WEBPACK_IMPORTED_MODULE_0__.BalancePageRoutingModule
        ],
        declarations: [_balance_page__WEBPACK_IMPORTED_MODULE_1__.BalancePage]
    })
], BalancePageModule);



/***/ }),

/***/ 1599:
/*!**********************************************!*\
  !*** ./src/app/chat/balance/balance.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalancePage": () => (/* binding */ BalancePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_balance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./balance.page.html */ 75294);
/* harmony import */ var _balance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./balance.page.scss */ 13094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _one_chat_payment_dialog_payment_dialog_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../one-chat/payment-dialog/payment-dialog.page */ 79894);
/* harmony import */ var _withdrawals_dialog_withdrawals_dialog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withdrawals-dialog/withdrawals-dialog.page */ 67869);
/* harmony import */ var _recharge_dialog_recharge_dialog_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recharge-dialog/recharge-dialog.page */ 24778);









let BalancePage = class BalancePage {
    constructor(location, modalController) {
        this.location = location;
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _one_chat_payment_dialog_payment_dialog_page__WEBPACK_IMPORTED_MODULE_2__.PaymentDialogPage,
            });
            return yield modal.present();
        });
    }
    withdrawals() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _withdrawals_dialog_withdrawals_dialog_page__WEBPACK_IMPORTED_MODULE_3__.WithdrawalsDialogPage,
            });
            return yield modal.present();
        });
    }
    recharges() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _recharge_dialog_recharge_dialog_page__WEBPACK_IMPORTED_MODULE_4__.RechargeDialogPage,
            });
            return yield modal.present();
        });
    }
};
BalancePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
BalancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-balance',
        template: _raw_loader_balance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_balance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BalancePage);



/***/ }),

/***/ 24778:
/*!**********************************************************************!*\
  !*** ./src/app/chat/balance/recharge-dialog/recharge-dialog.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RechargeDialogPage": () => (/* binding */ RechargeDialogPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_recharge_dialog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recharge-dialog.page.html */ 78375);
/* harmony import */ var _recharge_dialog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recharge-dialog.page.scss */ 34891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let RechargeDialogPage = class RechargeDialogPage {
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
RechargeDialogPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
RechargeDialogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-recharge-dialog',
        template: _raw_loader_recharge_dialog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recharge_dialog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RechargeDialogPage);



/***/ }),

/***/ 67869:
/*!****************************************************************************!*\
  !*** ./src/app/chat/balance/withdrawals-dialog/withdrawals-dialog.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithdrawalsDialogPage": () => (/* binding */ WithdrawalsDialogPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_withdrawals_dialog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./withdrawals-dialog.page.html */ 7639);
/* harmony import */ var _withdrawals_dialog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withdrawals-dialog.page.scss */ 81938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let WithdrawalsDialogPage = class WithdrawalsDialogPage {
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
WithdrawalsDialogPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
WithdrawalsDialogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-withdrawals-dialog',
        template: _raw_loader_withdrawals_dialog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_withdrawals_dialog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WithdrawalsDialogPage);



/***/ }),

/***/ 13094:
/*!************************************************!*\
  !*** ./src/app/chat/balance/balance.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWxhbmNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 34891:
/*!************************************************************************!*\
  !*** ./src/app/chat/balance/recharge-dialog/recharge-dialog.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".color-header {\n  height: 50px;\n  background: white;\n}\n\nion-header::after {\n  background-image: none;\n}\n\nion-content {\n  --background: white;\n}\n\nion-footer::before {\n  background-image: none;\n}\n\n.middle-part {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding: 30px;\n  margin-top: 15px;\n}\n\n.money-input:focus {\n  outline: none;\n}\n\n.money-input {\n  border: none;\n  font-size: 35px;\n  caret-color: #17c169;\n}\n\n.color-footer {\n  background: #e8e7e7;\n  height: 195px;\n  padding-top: 5px;\n}\n\n.btn-1 {\n  background: #FFFFFF;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n  padding: 0px;\n  margin: 3px;\n  height: 40px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn-rec {\n  background: #17c169;\n  color: #FFFFFF;\n  font-weight: bold;\n  font-size: 15px;\n  text-align: center;\n  padding: 0px;\n  margin: 3px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2hhcmdlLWRpYWxvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJyZWNoYXJnZS1kaWFsb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWZvb3Rlcjo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi5taWRkbGUtcGFydCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLm1vbmV5LWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5tb25leS1pbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjYXJldC1jb2xvcjogIzE3YzE2OTtcclxufVxyXG5cclxuLmNvbG9yLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlN2U3O1xyXG4gICAgaGVpZ2h0OiAxOTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5idG4tMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tcmVjIHtcclxuICAgIGJhY2tncm91bmQ6ICMxN2MxNjk7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 81938:
/*!******************************************************************************!*\
  !*** ./src/app/chat/balance/withdrawals-dialog/withdrawals-dialog.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".color-header {\n  height: 50px;\n  background: #3880ff;\n}\n\nion-header::after {\n  background-image: none;\n}\n\nion-content {\n  --background: #3880ff;\n}\n\nion-footer::before {\n  background-image: none;\n}\n\n.middle-part {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding: 30px;\n  margin-top: 150px;\n}\n\n.money-input:focus {\n  outline: none;\n}\n\n.money-input {\n  border: none;\n  font-size: 35px;\n  caret-color: #17c169;\n}\n\n.color-footer {\n  background: #e8e7e7;\n  height: 195px;\n  padding-top: 5px;\n}\n\n.btn-1 {\n  background: #FFFFFF;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n  padding: 0px;\n  margin: 3px;\n  height: 40px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn-rec {\n  background: #17c169;\n  color: #FFFFFF;\n  font-weight: bold;\n  font-size: 15px;\n  text-align: center;\n  padding: 0px;\n  margin: 3px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhkcmF3YWxzLWRpYWxvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSiIsImZpbGUiOiJ3aXRoZHJhd2Fscy1kaWFsb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG59XHJcblxyXG5pb24taGVhZGVyOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XHJcbn1cclxuXHJcbmlvbi1mb290ZXI6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG4ubWlkZGxlLXBhcnQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxufVxyXG5cclxuLm1vbmV5LWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5tb25leS1pbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBjYXJldC1jb2xvcjogIzE3YzE2OTtcclxufVxyXG5cclxuLmNvbG9yLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlN2U3O1xyXG4gICAgaGVpZ2h0OiAxOTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5idG4tMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tcmVjIHtcclxuICAgIGJhY2tncm91bmQ6ICMxN2MxNjk7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 75294:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/balance/balance.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n            <ion-icon style=\"font-size: 30px; \" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Saldo</ion-title>\r\n\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-text-center ion-padding\">\r\n\r\n\r\n    <ion-avatar style=\"display: block; margin: 0 auto; margin-top:25%;\" class=\"ion-margin-start \">\r\n        <img src=\"../../../assets/moneda.png\">\r\n        <!-- <p>Mi saldo</p>\r\n        <p>$123123123</p> -->\r\n    </ion-avatar>\r\n    <div>\r\n        <p style=\"font-size: 20px;\">Mi saldo</p>\r\n        <p style=\"font-weight: bold; font-size: 30px;\"><span>$</span> 3437.93</p>\r\n    </div>\r\n    <div style=\"margin-top: 20%;\">\r\n        <ion-button (click)=\"recharges()\" mode='ios' style=\"--background: #35CA75;\" expand=\"block\">Recargar</ion-button>\r\n        <ion-button (click)=\"withdrawals()\" mode='ios' expand=\"block\"> Retirar </ion-button>\r\n\r\n\r\n    </div>\r\n    <div></div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border ion-text-center\">\r\n    <ion-toolbar>\r\n        <ion-title style=\"font-size: 11px; color: grey;\">Proporcionado por Topmai</ion-title>\r\n    </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ 78375:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/balance/recharge-dialog/recharge-dialog.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"color-header\" style=\"position: relative\">\r\n    <ion-icon (click)=\"dismiss()\" style=\"position: absolute; top:12px; font-size: 25px; \" name=\"chevron-back-outline\"></ion-icon>\r\n    <div style=\"margin-left:40px; display: flex;justify-content: flex-start;align-items: center;height: 100%\">\r\n        <div>\r\n            <b style=\"\">Recargar</b>\r\n        </div>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content scrollY=\"false\">\r\n    <!-- <ion-grid style=\"color: white;\">\r\n        <ion-row>\r\n            <ion-col size=\"7\">\r\n                <div>Metodo de <br> recarga</div>\r\n            </ion-col>\r\n            <ion-col>\r\n                <div style=\"font-weight: bold\">ICBE (5673)</div>\r\n                <div style=\"margin-top: 5px\">Límite de transacción al día $ 500000.00</div>\r\n            </ion-col>\r\n            <ion-col size=\"1\">\r\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid> -->\r\n\r\n    <!-- <ion-item lines=\"none\" style=\"background-color: transparent !important;\">\r\n        <ion-label>Genero</ion-label>\r\n        <ion-select value=\"F\">\r\n            <ion-select-option value=\"M\">Masculino</ion-select-option>\r\n            <ion-select-option value=\"F\">Femenino</ion-select-option>\r\n        </ion-select>\r\n    </ion-item> -->\r\n\r\n    <div class=\"ion-padding\">\r\n\r\n        <div style=\"font-size: 15px;display: flex; justify-content: space-between;align-items: center; font-weight: bold;\">\r\n\r\n            <p style=\"display: block; width: 90%; margin-left: 20px; font-size: 20px; font-weight: normal;\"> Metodo de recarga</p>\r\n\r\n            <!-- <ion-icon style=\"width: 10%;font-size:20px;display: block; color: white;\" name=\"chevron-forward-outline\"></ion-icon> -->\r\n            <ion-select>\r\n                <ion-select-option value=\"M\">Credito</ion-select-option>\r\n                <ion-select-option value=\"F\">Oxxo</ion-select-option>\r\n            </ion-select>\r\n        </div>\r\n        <div style=\"margin-top: 5px\">Límite de transacción al día $500000.00</div>\r\n    </div>\r\n    <div class=\"ion-padding\">\r\n\r\n        <div style=\"height: 120px; background-image: linear-gradient(to right,#02abc0, #84cddc); border-radius: 10px; color: white\">\r\n            <div style=\"display: flex; justify-content: space-between; padding: 15px\">\r\n                <div style=\"display: flex;\">\r\n                    <div style=\"background: white; border-radius: 100%; width: 50px; height: 50px; display: flex; align-items: center;justify-content: center\">\r\n                        <img style=\"max-width: 32px; display: block\" src=\"assets/my-cards/master.png\">\r\n                    </div>\r\n                    <div style=\"font-weight: bold; margin-left: 10px;display: flex; align-items: flex-start; margin-top: 10px\">\r\n                        <div>MASTER</div>\r\n                    </div>\r\n                </div>\r\n                <div>\r\n                    <div style=\"font-weight: bold; text-align: right\">\r\n                        **** 0017\r\n                    </div>\r\n                    <div style=\"margin-top: 5px\">\r\n                        <div style=\"background: rgba(229,227,227,0.32); font-size: 10px; padding: 3px 5px; display: flex; align-items: center;justify-content: center; border-radius: 5px\">\r\n                            <div>Nota tarjeta bancaria</div>\r\n                            <ion-icon style=\"display: block; margin-left: 3px\" name=\"open-outline\"></ion-icon>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"middle-part\" style=\"background: #FFFFFF; height: 50%;\">\r\n        <div>Importe de transferencia</div>\r\n        <div style=\"margin-top: 10px; font-weight: bold; font-size: 30px;display: flex\">\r\n            <div>$</div>\r\n            <div style=\"margin-left: 10px\">\r\n                <input type=\"number\" class=\"money-input\" style=\"width: 200px\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"color-footer\">\r\n    <ion-grid style=\"padding: 0px; margin:0px;\">\r\n        <ion-row style=\"padding: 0px; margin:0px;\">\r\n            <ion-col class=\"btn-1\">\r\n                <div>1</div>\r\n            </ion-col>\r\n            <ion-col class=\"btn-1\">\r\n                <div>2</div>\r\n            </ion-col>\r\n            <ion-col class=\"btn-1\">\r\n                <div>3</div>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"btn-1\">\r\n                <div>1</div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"padding: 0px; margin:0px;\">\r\n            <ion-col style=\"padding: 0px\">\r\n                <ion-row>\r\n                    <ion-col class=\"btn-1\">\r\n                        4\r\n                    </ion-col>\r\n                    <ion-col class=\"btn-1\">\r\n                        5\r\n                    </ion-col>\r\n                    <ion-col class=\"btn-1\">\r\n                        6\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col class=\"btn-1\">\r\n                        7\r\n                    </ion-col>\r\n                    <ion-col class=\"btn-1\">\r\n                        8\r\n                    </ion-col>\r\n                    <ion-col class=\"btn-1\">\r\n                        9\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col class=\"btn-1\">\r\n                        0\r\n                    </ion-col>\r\n                    <ion-col style=\"--width: 10px\" class=\"btn-1\">\r\n                        .\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"btn-rec\">\r\n                <div>Recargar</div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ 7639:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/balance/withdrawals-dialog/withdrawals-dialog.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"color-header\" style=\"position: relative\">\r\n    <ion-icon (click)=\"dismiss()\" style=\"position: absolute; top:12px; font-size: 25px; color: white;\" name=\"chevron-back-outline\"></ion-icon>\r\n    <div style=\"margin-left:40px; display: flex;justify-content: flex-start;align-items: center;height: 100%\">\r\n        <div>\r\n            <b style=\"color: white;\">Retirar</b>\r\n        </div>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content scrollY=\"false\">\r\n    <ion-grid style=\"color: white;\">\r\n        <ion-row>\r\n            <ion-col size=\"5\">\r\n                <div>Metodo de <br> recarga</div>\r\n            </ion-col>\r\n            <ion-col>\r\n                <div style=\"font-weight: bold\">ICBE (5673)</div>\r\n                <div style=\"margin-top: 5px\">Límite de transacción al día $ 500000.00</div>\r\n            </ion-col>\r\n            <ion-col size=\"1\">\r\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <div class=\"middle-part\" style=\"background: #FFFFFF; height: 100%;\">\r\n        <div>Importe de transferencia</div>\r\n        <div style=\"margin-top: 10px; font-weight: bold; font-size: 30px;display: flex\">\r\n            <div>$</div>\r\n            <div style=\"margin-left: 10px\">\r\n                <input type=\"number\" class=\"money-input\" style=\"width: 200px\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"color-footer\">\r\n    <ion-grid style=\"padding: 0px; margin:0px;\">\r\n        <ion-row style=\"padding: 0px; margin:0px;\">\r\n            <ion-col class=\"btn-1\">\r\n                <div>1</div>\r\n            </ion-col>\r\n            <ion-col class=\"btn-1\">\r\n                <div>2</div>\r\n            </ion-col>\r\n            <ion-col class=\"btn-1\">\r\n                <div>3</div>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"btn-1\">\r\n                <div>1</div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"padding: 0px; margin:0px;\">\r\n            <ion-col style=\"padding: 0px\">\r\n                <ion-row>\r\n                    <ion-col class=\"btn-1\">\r\n                        4\r\n                    </ion-col>\r\n                    <ion-col class=\"btn-1\">\r\n                        5\r\n                    </ion-col>\r\n                    <ion-col class=\"btn-1\">\r\n                        6\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col class=\"btn-1\">\r\n                        7\r\n                    </ion-col>\r\n                    <ion-col class=\"btn-1\">\r\n                        8\r\n                    </ion-col>\r\n                    <ion-col class=\"btn-1\">\r\n                        9\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col class=\"btn-1\">\r\n                        0\r\n                    </ion-col>\r\n                    <ion-col style=\"--width: 10px\" class=\"btn-1\">\r\n                        .\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"btn-rec\">\r\n                <div>Recargar</div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_balance_balance_module_ts.js.map