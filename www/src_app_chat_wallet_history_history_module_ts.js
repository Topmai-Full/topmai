(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_wallet_history_history_module_ts"],{

/***/ 29343:
/*!***************************************************************!*\
  !*** ./src/app/chat/wallet/history/history-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageRoutingModule": () => (/* binding */ HistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.page */ 2410);




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_0__.HistoryPage
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ 99298:
/*!*******************************************************!*\
  !*** ./src/app/chat/wallet/history/history.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageModule": () => (/* binding */ HistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-routing.module */ 29343);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page */ 2410);







let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _history_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryPageRoutingModule
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_1__.HistoryPage]
    })
], HistoryPageModule);



/***/ }),

/***/ 2410:
/*!*****************************************************!*\
  !*** ./src/app/chat/wallet/history/history.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPage": () => (/* binding */ HistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./history.page.html */ 87751);
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page.scss */ 69933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);





let HistoryPage = class HistoryPage {
    constructor(location) {
        this.location = location;
        this.chatsList = [
            {
                profilePic: '../../../../assets/sobre.jpg',
                name: 'Fin ',
                recibo: '-200',
                date: '18/06/21',
                saldoactual: 'Saldo actual $3538.86',
            },
            {
                profilePic: '../../../../assets/verifi.png',
                name: 'Han',
                recibo: '+0.07',
                date: '18/06/21',
                saldoactual: 'Saldo actual $3538.86',
            },
            {
                profilePic: '../../../../assets/verifi.png',
                name: 'Rey',
                recibo: '+200.00',
                date: '18/06/21',
                saldoactual: 'Saldo actual $3538.86',
            },
            {
                profilePic: '../../../../assets/sobre.jpg',
                name: 'Jerry',
                recibo: '-15.00',
                date: '18/06/21',
                saldoactual: 'Saldo actual $3538.86',
            },
            {
                profilePic: '../../../../assets/avatar.png',
                name: 'Tom',
                recibo: '-515.00',
                date: '18/06/21',
                saldoactual: 'Saldo actual $3538.86',
            },
            {
                profilePic: '../../../../assets/sobre.jpg',
                name: 'Luke',
                recibo: '-200.00',
                date: '18/06/21',
                saldoactual: 'Saldo actual $3538.86',
            },
            {
                profilePic: '../../../../assets/avatar.png',
                name: 'Luke',
                recibo: '+2900.00',
                date: '18/06/21',
                saldoactual: 'Saldo actual $3538.86',
            },
            {
                profilePic: '../../../../assets/avatar.png',
                name: 'Luke',
                recibo: '+2900.00',
                date: '18/06/21',
                saldoactual: 'Saldo actual $3538.86',
            },
            {
                profilePic: '../../../../assets/sobre.jpg',
                name: 'Luke',
                recibo: '+2900.00',
                date: '18/06/21',
                saldoactual: 'Saldo actual $3538.86',
            },
            {
                profilePic: '../../../../assets/verifi.png',
                name: 'Luke',
                recibo: '+2900.00',
                date: '18/06/21',
                saldoactual: 'Saldo actual $3538.86',
            },
            {
                profilePic: '../../../../assets/verifi.png',
                name: 'Luke',
                recibo: '+2900.00',
                date: '18/06/21',
                saldoactual: 'Saldo actual $3538.86',
            },
        ];
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
};
HistoryPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
HistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-history',
        template: _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HistoryPage);



/***/ }),

/***/ 69933:
/*!*******************************************************!*\
  !*** ./src/app/chat/wallet/history/history.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("hr {\n  width: calc(100% - 65px);\n  background: #d4d3d3;\n  height: 1px;\n}\n\n.profilePic {\n  display: block;\n  height: 45px;\n  width: 45px;\n  object-fit: cover;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJoaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2NXB4KTtcclxuICAgIGJhY2tncm91bmQ6ICNkNGQzZDM7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxufVxyXG5cclxuLnByb2ZpbGVQaWMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJVxyXG59Il19 */");

/***/ }),

/***/ 87751:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/wallet/history/history.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n            <ion-icon style=\"font-size: 30px; \" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Historial</ion-title>\r\n        <!-- <ion-title style=\"text-align: center;\">Monedero</ion-title> -->\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item>\r\n        <ion-label>Fecha</ion-label>\r\n        <ion-datetime mode='ios' value=\"2021-08-26\" placeholder=\"Select Date\"></ion-datetime>\r\n    </ion-item>\r\n    <div *ngFor=\"let item of chatsList\">\r\n        <div style=\"margin:10px;display: flex;align-items: stretch;justify-content: space-between\">\r\n            <img class=\"profilePic\" [src]=\"item.profilePic\">\r\n            <div style=\"width: 60%; margin-left: 10px;display: flex;align-items: center\">\r\n                <div style=\"width: 100%\">\r\n                    <div style=\"font-size: 18px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                        {{item.name}}\r\n                    </div>\r\n                    <div style=\"margin-top:5px;color: gray;font-size: 14px;width:70%;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n\r\n                        {{item.date}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div style=\"display:flex; flex-direction:column; justify-content:space-between;color: gray;width: 50%; text-align: right;font-size: 14px\">\r\n                <div>\r\n                    {{item.recibo}}\r\n                </div>\r\n                <div>\r\n                    {{item.saldoactual}}\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <hr align=\"right\">\r\n    </div>\r\n    <!-- <ion-list>\r\n        <ion-list-header>\r\n            2021\r\n            <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n        </ion-list-header>\r\n\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/sobre.jpg\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n\r\n\r\n                <h2>Finn</h2>\r\n\r\n\r\n                <p>18/06/21 - 4:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/verifi.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Han</h2>\r\n                <p>18/06/21 - 12:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/sobre.jpg\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Rey</h2>\r\n                <p>18/06/21 - 12:40pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/avatar.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Luke</h2>\r\n                <p>18/06/21 - 8:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/sobre.jpg\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Luke</h2>\r\n                <p>18/06/21 - 9:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/avatar.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Luke</h2>\r\n                <p>18/06/21 - 2:15pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/avatar.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Luke</h2>\r\n                <p>18/06/21 - 6:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/verifi.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Luke</h2>\r\n                <p>18/06/21 - 6:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/avatar.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Luke</h2>\r\n                <p>18/06/21 - 13:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/verifi.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Luke</h2>\r\n                <p>18/06/21 - 13:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/avatar.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Luke</h2>\r\n                <p>18/06/21 - 13:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/verifi.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Luke</h2>\r\n                <p>18/06/21 - 13:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/avatar.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Luke</h2>\r\n                <p>18/06/21 - 13:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/verifi.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Luke</h2>\r\n                <p>18/06/21 - 13:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/verifi.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Luke</h2>\r\n                <p>18/06/21 - 13:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img src=\"../../../../assets/avatar.png\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n                <h2>Luke</h2>\r\n                <p>18/06/21 - 13:00pm</p>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-list> -->\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_wallet_history_history_module_ts.js.map