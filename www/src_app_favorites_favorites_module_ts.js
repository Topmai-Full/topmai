(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_favorites_favorites_module_ts"],{

/***/ 89528:
/*!*******************************************************!*\
  !*** ./src/app/favorites/favorites-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageRoutingModule": () => (/* binding */ FavoritesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.page */ 56130);




const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_0__.FavoritesPage
    }
];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {
};
FavoritesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavoritesPageRoutingModule);



/***/ }),

/***/ 75407:
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageModule": () => (/* binding */ FavoritesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites-routing.module */ 89528);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page */ 56130);







let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesPageRoutingModule
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_1__.FavoritesPage]
    })
], FavoritesPageModule);



/***/ }),

/***/ 56130:
/*!*********************************************!*\
  !*** ./src/app/favorites/favorites.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPage": () => (/* binding */ FavoritesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./favorites.page.html */ 38796);
/* harmony import */ var _favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page.scss */ 87662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ 66082);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_shipping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shipping.service */ 52117);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/order.service */ 68132);



/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/prefer-for-of */







let FavoritesPage = class FavoritesPage {
    constructor(router, prodSrv, toastController, shiipingSrv, orderSrv, loadingController) {
        this.router = router;
        this.prodSrv = prodSrv;
        this.toastController = toastController;
        this.shiipingSrv = shiipingSrv;
        this.orderSrv = orderSrv;
        this.loadingController = loadingController;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.totalAmount = 0;
        this.shippingCharges = 20;
        this.loader = false;
        this.formOj = {
            shipping: '',
            user: '',
            products: [],
            totalAmount: 0,
            shippingtax: 20
        };
    }
    ionViewWillEnter() {
        this.get();
    }
    ngOnInit() {
        this.get();
    }
    get() {
        this.loader = true;
        this.loadingController.create({
            message: 'Loading...'
        }).then((response) => {
            response.present();
            this.totalAmount = 0;
            const ar = JSON.parse(localStorage.getItem('products'));
            this.prodSrv.findCartProducts(ar).subscribe((resp) => {
                this.cartItems = resp.data;
                for (let i = 0; i < this.cartItems.length; i++) {
                    this.totalAmount += this.cartItems[i].product.price * this.cartItems[i].qty;
                }
            });
            const user = JSON.parse(localStorage.getItem('user'));
            if (user != null) {
                this.shiipingSrv.getAllByuser(user._id).subscribe((resp) => {
                    this.shippings = resp.data;
                    this.loader = false;
                    response.dismiss();
                });
            }
        });
    }
    presentToast(title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: title,
                duration: 3000
            });
            toast.present();
        });
    }
    goBack() {
        this.router.navigate([`tabs/about-me`]);
    }
    minus(index) {
        this.totalAmount = 0;
        if (this.cartItems[index].qty > 1) {
            this.cartItems[index].qty -= 1;
        }
        else {
            this.presentToast('Minimum 1 quantity required');
        }
        for (let i = 0; i < this.cartItems.length; i++) {
            this.totalAmount += this.cartItems[i].product.price * this.cartItems[i].qty;
        }
    }
    plus(index) {
        this.totalAmount = 0;
        this.cartItems[index].qty += 1;
        for (let i = 0; i < this.cartItems.length; i++) {
            this.totalAmount += this.cartItems[i].product.price * this.cartItems[i].qty;
        }
    }
    Order() {
        this.formOj.totalAmount = this.totalAmount;
        this.formOj.user = this.user._id;
        this.formOj.products = this.cartItems;
        if (this.formOj.shipping === '') {
            this.presentToast('Please select Shipping Address');
        }
        else {
            this.orderSrv.create(this.formOj).subscribe((resp) => {
                if (resp.message === 'success') {
                    this.presentToast('Order Registered successfully');
                    localStorage.removeItem('products');
                    localStorage.removeItem('selectedProduct');
                    this.router.navigate(['/tabs/about-me']);
                }
                else {
                    console.log('something went wrong');
                }
            });
        }
    }
};
FavoritesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _services_shipping_service__WEBPACK_IMPORTED_MODULE_4__.ShippingService },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__.OrderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
FavoritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-favorites',
        template: _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FavoritesPage);



/***/ }),

/***/ 87662:
/*!***********************************************!*\
  !*** ./src/app/favorites/favorites.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".color-header {\n  height: 50px;\n}\n\nion-header::after {\n  background-image: none;\n}\n\nhr {\n  height: 1px;\n  background: #e5e5e5;\n}\n\n.top-item-slider {\n  overflow: auto;\n  white-space: nowrap;\n  display: flex;\n  -webkit-overflow-scrolling: touch;\n  justify-content: space-between;\n  margin-left: 10px;\n}\n\n.top-item-slider::-webkit-scrollbar {\n  display: none;\n}\n\n.one-item {\n  font-size: 14px;\n  background: #efefef;\n  padding: 5px 10px;\n  border-radius: 15px;\n  margin-left: 10px;\n}\n\n.selected-one-item {\n  font-size: 14px;\n  background: #e1e6fd;\n  padding: 5px 10px;\n  border-radius: 15px;\n  margin-left: 10px;\n}\n\n#cartItems {\n  position: absolute;\n  top: 4px;\n  right: 5px;\n  color: white;\n  background: #fb0f3a;\n  padding: 2px 6px;\n  border-radius: 12px;\n  font-size: 12px;\n  z-index: 100;\n}\n\n#title {\n  font-size: 15px;\n}\n\n#subtitle {\n  font-size: 12px;\n  display: block;\n}\n\n#qtyButton {\n  padding: 5px 8px;\n  background: #cbcaca;\n  line-height: 12px;\n  font-size: 24px;\n}\n\n#subtotal {\n  font-size: 18px;\n  font-weight: 600;\n  color: #585858;\n}\n\n#totalAmount {\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  float: right;\n  margin: 0px 20px 0px 0px;\n}\n\n#qtySection {\n  display: flex;\n  margin: 15px 0px 0px 0px;\n}\n\n#varient {\n  position: absolute;\n  right: 5px;\n}\n\n#cartEmpty {\n  margin: 40px auto;\n  display: block;\n  text-align: center;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJmYXZvcml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5pb24taGVhZGVyOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuaHIge1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuXHJcbi50b3AtaXRlbS1zbGlkZXIge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4udG9wLWl0ZW0tc2xpZGVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm9uZS1pdGVtIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtb25lLWl0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kOiAjZTFlNmZkO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbiNjYXJ0SXRlbXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDRweDtcclxuICByaWdodDogNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjZmIwZjNhO1xyXG4gIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuI3N1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNxdHlCdXR0b24ge1xyXG4gIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2NiY2FjYTtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbiNzdWJ0b3RhbCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM1ODU4NTg7XHJcbn1cclxuXHJcbiN0b3RhbEFtb3VudCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDBweDtcclxufVxyXG5cclxuI3F0eVNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxNXB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4jdmFyaWVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiNjYXJ0RW1wdHkge1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 38796:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content *ngIf=\"!loader\">\r\n  <ion-header [translucent]=\"true\" class=\"color-header\" style=\"position: relative\">\r\n    <ion-icon (click)=\"goBack()\" style=\"position: absolute; top:12px; font-size: 25px;\" name=\"chevron-back-outline\">\r\n    </ion-icon>\r\n    <span id=\"cartItems\" *ngIf=\"cartItems?.length > 0\">{{cartItems?.length}}</span>\r\n    <div style=\"display: flex;justify-content: flex-start;align-items: center;height: 100%\">\r\n      <div style=\"margin-left: 40px; font-weight: bold; font-size: 18px\">\r\n        Order Summary\r\n      </div>\r\n    </div>\r\n    <ion-icon style=\"position: absolute; top:12px;right: 15px; font-size: 25px;\" name=\"cart-outline\">12</ion-icon>\r\n  </ion-header>\r\n  <hr>\r\n\r\n  <ion-grid *ngIf=\"cartItems?.length > 0\">\r\n    <ion-row *ngFor=\"let item of cartItems;index as i\">\r\n      <ion-col size=\"4\" style=\"display: flex;justify-content: center;align-items: center\">\r\n        <img src=\"{{baseUrl}}/{{item?.product?.image[0]?.image}}\" style=\"height: 100px; width: 100px; display: block\" />\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <span id=\"title\" *ngIf=\"item?.product?.title?.length > 25\">{{item?.product?.title.substr(0,25)}}\r\n          ..</span>\r\n        <span id=\"title\" *ngIf=\"item?.product?.title?.length < 25\">{{item?.product?.title}}</span>\r\n        <span id=\"subtitle\">{{item?.product?.subtitle}}</span>\r\n        <div style=\"justify-content: space-between; margin-top: 8px\">\r\n          <div style=\"width: 50%;display: contents;\">\r\n            US ${{item?.product?.price * item?.qty}}\r\n          </div>\r\n          <div style=\"width: 50%;float: right;\">\r\n            Qty: {{item?.qty}}\r\n          </div>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <div id=\"qtySection\">\r\n                <div (click)=\"minus(i)\" id=\"qtyButton\">\r\n                  -\r\n                </div>\r\n                <div style=\"text-align: center; display: flex; align-items: center;justify-content: center\">\r\n                  <div style=\"padding: 0px 15px; font-size: 14px\">{{item?.qty}}</div>\r\n                </div>\r\n                <div (click)=\"plus(i)\" id=\"qtyButton\">\r\n                  +\r\n                </div>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <div id=\"qtySection\">\r\n                <span id=\"varient\" *ngIf=\"item?.pvov\">{{item?.pvov?.data}}</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"mb-1\">\r\n        <span id=\"subtotal\">Sub Total</span>\r\n        <span id=\"totalAmount\">${{totalAmount}}</span>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"mb-1\">\r\n        <span id=\"subtotal\">Shipping Charges</span>\r\n        <span id=\"totalAmount\">${{shippingCharges}}</span>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"mb-1\">\r\n        <span id=\"subtotal\">Total</span>\r\n        <span id=\"totalAmount\">${{totalAmount+shippingCharges}}</span>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"cartItems?.length < 1\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <p id=\"cartEmpty\">Your Cart is Empty!</p>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <img src=\"../../assets/imgs/emptyCart.png\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-row *ngIf=\"shippings?.length > 0 && cartItems?.length > 0\">\r\n    <ion-list style=\"width: 100%;\">\r\n      <ion-radio-group name=\"rd\" [(ngModel)]=\"formOj.shipping\">\r\n        <ion-list-header>\r\n          <ion-label style=\"font-size: 19px;\">\r\n            Addresses\r\n          </ion-label>\r\n        </ion-list-header>\r\n\r\n        <ion-item *ngFor=\"let item of shippings;index as i\">\r\n          <!-- <p>{{item?.name}} | </p> -->\r\n          <ion-label>{{item?.address}}</ion-label>\r\n          <ion-radio name=\"{{item?.data}}+i\" value=\"{{item?._id}}\"></ion-radio>\r\n        </ion-item>\r\n\r\n      </ion-radio-group>\r\n    </ion-list>\r\n  </ion-row>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"cartItems?.length > 0 && !loader\">\r\n  <ion-grid style=\"padding: 0\">\r\n    <ion-row style=\"height: 50px; background-color: white;\" class=\"new-grid\">\r\n      <ion-col class=\"itm-col\" size=\"12\">\r\n        <ion-button style=\"--background: #35CA75;margin: 0px ;\" (click)=\"Order()\" expand='block'>Create Order</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_favorites_favorites_module_ts.js.map