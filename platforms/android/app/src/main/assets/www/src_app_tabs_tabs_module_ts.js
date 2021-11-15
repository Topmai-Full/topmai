(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'about-me',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about-me_about-me_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../about-me/about-me.module */ 62010)).then(m => m.AboutMePageModule)
            },
            {
                path: 'nextautos',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_item-twelve_nextautos_nextautos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/item-twelve/nextautos/nextautos.module */ 47689)).then(m => m.NextautosPageModule)
            },
            {
                path: 'topmaivideo',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_topmaivideo_topmaivideo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../topmaivideo/topmaivideo.module */ 90252)).then(m => m.TopmaivideoPageModule)
            },
            {
                path: 'order-wizard',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_order-wizard_order-wizard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../order-wizard/order-wizard.module */ 56583)).then(m => m.OrderWizardPageModule)
            },
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 97665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 24427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let TabsPage = class TabsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.cartItems = JSON.parse(localStorage.getItem('products'));
        setInterval(() => {
            this.cartItems = JSON.parse(localStorage.getItem('products'));
        }, 1000);
    }
    gotoChat() {
        this.router.navigate([`chat`]);
    }
    gotoCarrito() {
        this.router.navigate([`favorites`]);
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 24427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".tab-selected {\n  color: red !important;\n}\n\n#cartItems {\n  position: absolute;\n  top: 4px;\n  right: 5px;\n  color: white;\n  background: #fb0f3a;\n  padding: 2px 6px;\n  border-radius: 12px;\n  font-size: 12px;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItc2VsZWN0ZWQge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2NhcnRJdGVtcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNHB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICNmYjBmM2E7XHJcbiAgcGFkZGluZzogMnB4IDZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 97665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"home\">\r\n\r\n      <ion-icon style=\"font-size: 2rem;\" src=\"assets/homee.svg\"></ion-icon>\r\n      <ion-label>Marketplace</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"order-wizard\" style=\"margin-left: -20px;\">\r\n      <ion-icon name=\"car-outline\" style=\"font-size: 32px;\"></ion-icon>\r\n      <ion-label>Shipped</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button (click)=\"gotoChat()\">\r\n      <ion-icon style=\"font-size: 3rem;\" src=\"assets/topmai.svg\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button (click)=\"gotoCarrito()\" style=\"margin-right: -20px;\">\r\n      <span id=\"cartItems\" *ngIf=\"cartItems?.length > 0\">{{cartItems?.length}}</span>\r\n      <ion-icon style=\"font-size: 2rem; \" name=\"cart-outline\"></ion-icon>\r\n      <ion-label>carrito</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about-me\">\r\n      <ion-icon style=\"font-size: 2rem;\" src=\"assets/me.svg\"></ion-icon>\r\n      <ion-label>Cuenta</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n<!-- <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n        <ion-tab-button tab=\"home\">\r\n            <ion-icon style=\"font-size: 1.8rem;\" src=\"assets/homee.svg\"></ion-icon>\r\n            <ion-label style=\"font-size: 9px;\">Marcketplace</ion-label>\r\n\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"speakers\">\r\n            <ion-icon style=\"font-size: 1.8rem;\" src=\"assets/play.svg\"></ion-icon>\r\n            <ion-label style=\"font-size: 9px;\">Video</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button (click)=\"gotoChat()\">\r\n            <ion-icon style=\"font-size: 4rem; margin-right: 5px;\" src=\"assets/topmai.svg\"></ion-icon>\r\n\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"order-wizard\">\r\n            <ion-icon style=\"font-size: 1.8rem;\" name=\"compass-outline\"></ion-icon>\r\n            <ion-label style=\"font-size: 9px;\">Envío</ion-label>\r\n        </ion-tab-button>\r\n        <ion-tab-button tab=\"about-me\">\r\n            <ion-icon style=\"font-size: 1.8rem;\" src=\"assets/me.svg\"></ion-icon>\r\n            <ion-label style=\"font-size: 9px;\">Cuenta</ion-label>\r\n        </ion-tab-button>\r\n    </ion-tab-bar>\r\n</ion-tabs> -->\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map