(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_my-orders_my-orders_module_ts"],{

/***/ 98361:
/*!*******************************************************!*\
  !*** ./src/app/my-orders/my-orders-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyOrdersPageRoutingModule": () => (/* binding */ MyOrdersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-orders.page */ 16161);




const routes = [
    {
        path: '',
        component: _my_orders_page__WEBPACK_IMPORTED_MODULE_0__.MyOrdersPage
    }
];
let MyOrdersPageRoutingModule = class MyOrdersPageRoutingModule {
};
MyOrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyOrdersPageRoutingModule);



/***/ }),

/***/ 73424:
/*!***********************************************!*\
  !*** ./src/app/my-orders/my-orders.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyOrdersPageModule": () => (/* binding */ MyOrdersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-orders-routing.module */ 98361);
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-orders.page */ 16161);







let MyOrdersPageModule = class MyOrdersPageModule {
};
MyOrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyOrdersPageRoutingModule
        ],
        declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_1__.MyOrdersPage]
    })
], MyOrdersPageModule);



/***/ }),

/***/ 16161:
/*!*********************************************!*\
  !*** ./src/app/my-orders/my-orders.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyOrdersPage": () => (/* binding */ MyOrdersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_orders_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-orders.page.html */ 61165);
/* harmony import */ var _my_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-orders.page.scss */ 56400);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment.prod */ 89019);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/order.service */ 68132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);




/* eslint-disable no-underscore-dangle */



let MyOrdersPage = class MyOrdersPage {
    constructor(location, ordSrv) {
        this.location = location;
        this.ordSrv = ordSrv;
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl;
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    ngOnInit() {
        if (this.user) {
            this.ordSrv.getAll(this.user._id).subscribe((resp) => {
                this.orders = resp.orders;
                console.log(resp);
            });
        }
    }
    goBack() {
        this.location.back();
    }
};
MyOrdersPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_3__.OrderService }
];
MyOrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-my-orders',
        template: _raw_loader_my_orders_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyOrdersPage);



/***/ }),

/***/ 56400:
/*!***********************************************!*\
  !*** ./src/app/my-orders/my-orders.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".color-header {\n  height: 40px;\n}\n\nion-header {\n  border-bottom: 1px solid #ececec;\n}\n\nion-header::after {\n  background-image: none;\n}\n\n.selected-title {\n  border-bottom: 3px solid #DF2B26FF;\n  padding-bottom: 5px;\n}\n\n#productPrice {\n  color: red;\n  font-size: 18px;\n}\n\n#bottomRow {\n  border-bottom: 1px solid grey;\n  padding: 10px 0px 5px;\n}\n\n#productImage {\n  width: 50px;\n  height: 50px;\n  object-fit: cover;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJteS1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcclxufVxyXG5cclxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC10aXRsZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNERjJCMjZGRjtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4jcHJvZHVjdFByaWNlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI2JvdHRvbVJvdyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgcGFkZGluZzogMTBweCAwcHggNXB4O1xyXG59XHJcblxyXG4jcHJvZHVjdEltYWdlIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 61165:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"color-header\" style=\"position: relative\">\r\n  <ion-icon (click)=\"goBack()\" style=\"position: absolute; top:4px; font-size: 30px;\" name=\"chevron-back-outline\">\r\n  </ion-icon>\r\n  <div style=\"display: flex;justify-content: center;align-items: center;height: 100%\">\r\n    <div>\r\n      MY DELIVERD ORDERS\r\n    </div>\r\n  </div>\r\n  <ion-icon style=\"position: absolute; top:6px;right: 5px; font-size: 25px;\" name=\"search-outline\"></ion-icon>\r\n</ion-header>\r\n\r\n<ion-content style=\"user-select: none\">\r\n\r\n  <ion-grid *ngFor=\"let item of orders\" style=\"margin: 20px 0px;\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        ORDER ID: {{item[0].orderId}}\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"border-bottom: 1px solid #ececec;\" *ngFor=\"let items of item[1]\">\r\n      <ion-col size=\"2\">\r\n        <img src=\"{{baseUrl}}/{{items.product.image[0].image}}\" id=\"productImage\" />\r\n      </ion-col>\r\n      <ion-col style=\"line-height: 20px\">\r\n        <div></div>\r\n        <div style=\"color: grey\" *ngIf=\"items.product.name.length > 40\">{{items.product.name.substr(0,40)}}...</div>\r\n        <div style=\"color: grey\" *ngIf=\"items.product.name.length < 40\">{{items.product.name}}</div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: right\">\r\n        <div id=\"productPrice\">${{items.product.price}}</div>\r\n        <div style=\"color: grey; font-size: 14px\">\r\n          QTY {{items.quantity}}\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row id=\"bottomRow\">\r\n      <ion-col size=\"8\">\r\n        ORDER DATE {{item[0].createdAt | date : 'mediumDate'}}\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <div id=\"productPrice\">TOTAL ${{item[0].totalAmount}}</div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_my-orders_my-orders_module_ts.js.map