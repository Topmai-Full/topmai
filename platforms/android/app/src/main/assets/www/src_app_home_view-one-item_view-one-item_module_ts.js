(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_home_view-one-item_view-one-item_module_ts"],{

/***/ 6995:
/*!**********************************************************************************!*\
  !*** ./src/app/home/view-one-item/one-item-buy-model/one-item-buy-model.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneItemBuyModelPage": () => (/* binding */ OneItemBuyModelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_one_item_buy_model_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./one-item-buy-model.page.html */ 28050);
/* harmony import */ var _one_item_buy_model_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one-item-buy-model.page.scss */ 69335);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ 66082);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment.prod */ 89019);



/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable max-len */




let OneItemBuyModelPage = class OneItemBuyModelPage {
    constructor(modalController, prodSrv, alertCtrl, toastController, loadingController) {
        this.modalController = modalController;
        this.prodSrv = prodSrv;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.loader = false;
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl;
        this.dummyImage = 'https://vendy.s3.me-south-1.amazonaws.com/sample-logo.png';
        this.products = [];
        this.formOj = {
            qty: 1,
            pvov: '',
            productId: ''
        };
    }
    ngOnInit() {
        this.loader = true;
        this.loadingController.create({
            message: 'Loading...'
        }).then((response) => {
            response.present();
            this.products = JSON.parse(localStorage.getItem('products'));
            this.modelId = localStorage.getItem('selectedProduct');
            this.formOj.productId = this.modelId;
            this.prodSrv.getById(this.modelId).subscribe((resp) => {
                this.product = resp.product;
                this.productVarients = resp.pvov;
                this.loader = false;
                response.dismiss();
            });
        });
    }
    presentToast(title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: title,
                duration: 2000
            });
            toast.present();
        });
    }
    plus() {
        this.formOj.qty += 1;
    }
    minus() {
        if (this.formOj.qty > 1) {
            this.formOj.qty -= 1;
        }
        else {
            this.presentToast('Minimum 1 quantity required');
        }
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.products === null) {
                this.products = [];
            }
            let local = JSON.parse(localStorage.getItem('products'));
            if (local === null) {
                local = [];
            }
            if (this.productVarients.length > 0) {
                if (this.formOj.pvov === '') {
                    this.presentToast('Please select varient');
                }
                else {
                    if (local.length < 1) {
                        this.products.push(this.formOj);
                        localStorage.setItem('products', JSON.stringify(this.products));
                        this.presentToast('Successfully Added');
                    }
                    else {
                        if (this.formOj.pvov !== '') {
                            let check = false;
                            for (let i = 0; i < local.length; i++) {
                                if (local[i].productId === this.formOj.productId && local[i].pvov === this.formOj.pvov) {
                                    check = true;
                                }
                            }
                            if (check) {
                                this.presentToast('Already exist');
                            }
                            else {
                                this.products.push(this.formOj);
                                this.presentToast('Successfully Added');
                                localStorage.setItem('products', JSON.stringify(this.products));
                                this.dismiss();
                            }
                        }
                    }
                }
            }
            else {
                let check = false;
                for (let i = 0; i < local.length; i++) {
                    if (local[i].productId === this.formOj.productId) {
                        check = true;
                    }
                }
                if (check) {
                    this.presentToast('Already exist');
                }
                else {
                    this.products.push(this.formOj);
                    this.presentToast('Successfully Added');
                    localStorage.setItem('products', JSON.stringify(this.products));
                    this.dismiss();
                }
            }
        });
    }
    extractNameFromJson(obj) {
        // obj = JSON.parse(obj);
        obj = JSON.stringify(obj);
        return JSON.parse(obj);
    }
};
OneItemBuyModelPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
OneItemBuyModelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-one-item-buy-model',
        template: _raw_loader_one_item_buy_model_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_one_item_buy_model_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OneItemBuyModelPage);



/***/ }),

/***/ 46453:
/*!********************************************************************!*\
  !*** ./src/app/home/view-one-item/view-one-item-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewOneItemPageRoutingModule": () => (/* binding */ ViewOneItemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _view_one_item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-one-item.page */ 96129);




const routes = [
    {
        path: '',
        component: _view_one_item_page__WEBPACK_IMPORTED_MODULE_0__.ViewOneItemPage
    },
    {
        path: 'one-item-buy-model',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_view-one-item_one-item-buy-model_one-item-buy-model_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./one-item-buy-model/one-item-buy-model.module */ 58047)).then(m => m.OneItemBuyModelPageModule)
    },
    {
        path: 'recipt-confirmation-model',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_view-one-item_recipt-confirmation-model_recipt-confirmation-model_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./recipt-confirmation-model/recipt-confirmation-model.module */ 32195)).then(m => m.ReciptConfirmationModelPageModule)
    }
];
let ViewOneItemPageRoutingModule = class ViewOneItemPageRoutingModule {
};
ViewOneItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewOneItemPageRoutingModule);



/***/ }),

/***/ 15187:
/*!************************************************************!*\
  !*** ./src/app/home/view-one-item/view-one-item.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewOneItemPageModule": () => (/* binding */ ViewOneItemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _view_one_item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-one-item-routing.module */ 46453);
/* harmony import */ var _view_one_item_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-one-item.page */ 96129);







let ViewOneItemPageModule = class ViewOneItemPageModule {
};
ViewOneItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_one_item_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewOneItemPageRoutingModule
        ],
        declarations: [_view_one_item_page__WEBPACK_IMPORTED_MODULE_1__.ViewOneItemPage]
    })
], ViewOneItemPageModule);



/***/ }),

/***/ 96129:
/*!**********************************************************!*\
  !*** ./src/app/home/view-one-item/view-one-item.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewOneItemPage": () => (/* binding */ ViewOneItemPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_view_one_item_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./view-one-item.page.html */ 40239);
/* harmony import */ var _view_one_item_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-one-item.page.scss */ 72447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _one_item_buy_model_one_item_buy_model_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./one-item-buy-model/one-item-buy-model.page */ 6995);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ 66082);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment.prod */ 89019);



/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */







let ViewOneItemPage = class ViewOneItemPage {
    constructor(location, route, modalController, prodSrv, _route, loadingController) {
        this.location = location;
        this.route = route;
        this.modalController = modalController;
        this.prodSrv = prodSrv;
        this._route = _route;
        this.loadingController = loadingController;
        this.loader = false;
        this.ImageArray = [];
        this.baseUrl = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__.environment.baseUrl;
        this.productImages = [];
        this.slideOptsOne = {
            speed: 2000,
            loop: true,
            autoplay: true,
        };
        this.id = this.route.snapshot.paramMap.get('id');
        this.subSliderImages = [
            'assets/homePage/single-items/1/sub-slider1.png',
            'assets/homePage/single-items/1/sub-slider1.png',
            'assets/homePage/single-items/1/sub-slider1.png',
        ];
        this.imageSet = [
            [{ path: 'assets/homePage/single-items/1/slider1.jpg' },
                { path: 'assets/homePage/single-items/1/slider1.jpg' },
                { path: 'assets/homePage/single-items/1/slider1.jpg' },],
            [{ path: 'assets/homePage/single-items/1/slider2.jpg' },
                { path: 'assets/homePage/single-items/1/slider2.jpg' },
                { path: 'assets/homePage/single-items/1/slider2.jpg' },],
            [{ path: 'assets/homePage/single-items/1/slider3.jpg' },
                { path: 'assets/homePage/single-items/1/slider3.jpg' },
                { path: 'assets/homePage/single-items/1/slider3.jpg' },]
        ];
        this.selectedImagesSet = this.imageSet[0];
        this.ImageArray = [
            { image: 'assets/homePage/single-items/1/slider3.jpg' },
            { image: 'assets/homePage/single-items/1/slider2.jpg' },
            { image: 'assets/homePage/single-items/1/slider1.jpg' }
        ];
    }
    ngOnInit() {
        this.loader = true;
        this.loadingController.create({
            message: 'Loading...'
        }).then((response) => {
            response.present();
            this.innerWidth = window.innerWidth;
            this.routeId = this._route.snapshot.params['id'];
            this.prodSrv.getById(this.routeId).subscribe((resp) => {
                this.product = resp.product;
                this.productImages = resp.product.image;
                this.loader = false;
                response.dismiss();
            });
        });
    }
    goBack() {
        this.location.back();
    }
    selectSubSlider(index) {
        this.selectedImagesSet = this.imageSet[index];
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            localStorage.setItem('selectedProduct', this.routeId);
            const modal = yield this.modalController.create({
                component: _one_item_buy_model_one_item_buy_model_page__WEBPACK_IMPORTED_MODULE_2__.OneItemBuyModelPage,
            });
            return yield modal.present();
        });
    }
};
ViewOneItemPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
ViewOneItemPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['mySlider',] }]
};
ViewOneItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-view-one-item',
        template: _raw_loader_view_one_item_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_view_one_item_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewOneItemPage);



/***/ }),

/***/ 69335:
/*!************************************************************************************!*\
  !*** ./src/app/home/view-one-item/one-item-buy-model/one-item-buy-model.page.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#category {\n  float: right;\n  color: grey;\n  font-weight: 100;\n  margin: 0px 17px;\n}\n\n#productImage {\n  width: 80px;\n  border: 0;\n  object-fit: cover;\n  height: 75px;\n}\n\n#varients {\n  color: #484848;\n  background: #efefef;\n  border-radius: 5px;\n  font-size: 16px;\n  padding: 5px 17px;\n  height: 27px;\n  margin: 0px 10px;\n}\n\n#varientImage {\n  width: 40px;\n  height: 40px;\n  border-radius: 3px;\n  object-fit: cover;\n  margin: 0px 20px 0px 0px;\n}\n\nion-list {\n  width: 100%;\n  margin: 0px 0px 30px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZS1pdGVtLWJ1eS1tb2RlbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtBQUNGIiwiZmlsZSI6Im9uZS1pdGVtLWJ1eS1tb2RlbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2F0ZWdvcnkge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIG1hcmdpbjogMHB4IDE3cHg7XHJcbn1cclxuXHJcbiNwcm9kdWN0SW1hZ2Uge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbn1cclxuXHJcbiN2YXJpZW50cyB7XHJcbiAgY29sb3I6ICM0ODQ4NDg7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAxN3B4O1xyXG4gIGhlaWdodDogMjdweDtcclxuICBtYXJnaW46IDBweCAxMHB4O1xyXG59XHJcblxyXG4jdmFyaWVudEltYWdlIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDBweDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMHB4IDBweCAzMHB4IDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 72447:
/*!************************************************************!*\
  !*** ./src/app/home/view-one-item/view-one-item.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-menu-button {\n  color: #FFF;\n}\n\nion-header::after {\n  background-image: none;\n}\n\nion-buttons::after {\n  background-image: none;\n}\n\n.sub-slider {\n  width: 50px;\n  object-fit: cover;\n  margin: 10px 5px 5px 5px;\n}\n\n.itm-col {\n  padding: 0px;\n  text-align: center;\n  font-size: 13px;\n  color: gray;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.new-grid {\n  --ion-grid-columns: 25;\n}\n\nion-toolbar {\n  --background: transparent;\n  position: absolute;\n  position: fixed;\n  top: 0;\n}\n\n.slide {\n  width: 100%;\n}\n\n.slide img {\n  height: 330px;\n  width: 100%;\n}\n\n#subtitle {\n  margin: 0px;\n  color: #adadad;\n  font-size: 13px;\n}\n\n#productDescription {\n  color: #9b9b9b;\n  font-size: 14px;\n  margin: 0px;\n}\n\nh5 {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctb25lLWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFNQTtFQUNFLFdBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtBQUhGIiwiZmlsZSI6InZpZXctb25lLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0YzQ5ZGUgMCUsICM4NzY2ZWEgMTAwJSk7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG5pb24tYnV0dG9uczo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi5zdWItc2xpZGVyIHtcclxuICB3aWR0aDogNTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXJnaW46IDEwcHggNXB4IDVweCA1cHg7XHJcbn1cclxuXHJcbi5pdG0tY29sIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogZ3JheTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXctZ3JpZCB7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAyNTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5zbGlkZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZSBpbWcge1xyXG4gIGhlaWdodDogMzMwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNzdWJ0aXRsZSB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgY29sb3I6ICNhZGFkYWQ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4jcHJvZHVjdERlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogIzliOWI5YjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 28050:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/view-one-item/one-item-buy-model/one-item-buy-model.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content *ngIf=\"!loader\">\r\n  <div style=\"background: black\">\r\n    <img src=\"{{baseUrl}}/{{product?.image[0].image}}\" style=\"opacity: 0.4;\r\n      object-fit: cover;\r\n      width: 100%;\r\n      height: 150px;\r\n      object-position: 0 0\" />\r\n  </div>\r\n  <div style=\"text-align: center; position: relative; margin-top: 6px\">\r\n    BUY THIS\r\n    <ion-icon style=\"position:absolute; right: 5px; top:0px; color: grey; font-size: 20px\" (click)=\"dismiss()\"\r\n      name=\"close-outline\"></ion-icon>\r\n  </div>\r\n  <ion-row style=\"margin-top: 10px\">\r\n    <ion-col size=\"1\" style=\"padding:0px;display: flex; align-items: center; justify-content: center\">\r\n      <ion-icon style=\"color: grey; display: block; font-size: 25px\" name=\"location-outline\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col>\r\n      <div>\r\n        Logged In User Address\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"1\" style=\"display: flex; align-items: center; justify-content: center\">\r\n      <ion-icon style=\"color: grey; display: block; font-size: 20px\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <div style=\"height: 5px;background: #efeeee\"></div>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"3\">\r\n      <img src=\"{{baseUrl}}/{{product?.image[0].image}}\" id=\"productImage\" />\r\n    </ion-col>\r\n    <ion-col style=\"display:flex;flex-direction: column; justify-content: space-between\">\r\n      <div style=\"line-height: 23px\">\r\n        <div style=\"color: #DF2E24; font-weight: bold\">\r\n          <span>\r\n            ${{product?.price}}\r\n          </span>\r\n          <span id=\"category\">\r\n            {{product?.parentcategory?.name}} > {{product?.category?.name}}\r\n          </span>\r\n        </div>\r\n        <div style=\"font-size: 17px\">\r\n          {{product?.title}}\r\n        </div>\r\n      </div>\r\n      <div style=\"display: flex\">\r\n        <div (click)=\"minus()\" style=\"padding: 2px 12px; background: #cbcaca\">\r\n          -\r\n        </div>\r\n        <div style=\"text-align: center; display: flex; align-items: center;justify-content: center\">\r\n          <div style=\"padding: 0px 15px; font-size: 14px\">{{formOj.qty}}</div>\r\n        </div>\r\n        <div (click)=\"plus()\" style=\"padding: 2px 12px; background: #cbcaca\">\r\n          +\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <ion-row *ngIf=\"productVarients?.length > 0\">\r\n    <ion-list>\r\n      <ion-radio-group name=\"rd\"  [(ngModel)]=\"formOj.pvov\">\r\n        <ion-list-header>\r\n          <ion-label style=\"font-size: 19px;\">\r\n            Product Varients\r\n          </ion-label>\r\n        </ion-list-header>\r\n\r\n        <ion-item *ngFor=\"let item of productVarients;index as i\">\r\n          <img *ngIf=\"item?.picture !== ''\" src=\"{{baseUrl}}/{{item?.picture}}\" id=\"varientImage\" alt=\"\">\r\n          <img *ngIf=\"item?.picture === ''\" src=\"{{dummyImage}}\" alt=\"\" id=\"varientImage\">\r\n          <ion-label>{{item?.data}}</ion-label>\r\n          <p style=\"position: absolute;right: 70px;\">Price: <span *ngIf=\"item?.price !== ''\">{{item?.price}}</span><span *ngIf=\"item?.price === ''\">{{product?.price}}</span></p>\r\n          <ion-radio name=\"{{item?.data}}+i\"  value=\"{{extractNameFromJson(item?._id)}}\"></ion-radio>\r\n        </ion-item>\r\n\r\n      </ion-radio-group>\r\n    </ion-list>\r\n  </ion-row>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"!loader\">\r\n  <ion-grid style=\"padding: 0\">\r\n    <ion-row style=\"height: 27px;\">\r\n      <ion-col style=\"display: flex; align-items: center; justify-content: center\">\r\n        <div>\r\n          abc\r\n        </div>\r\n        <ion-icon style=\"color: #2fdf75; display: block; font-size: 20px; margin-left: 5px; margin-right: 5px\"\r\n          name=\"checkmark-circle\">\r\n        </ion-icon>\r\n        <div>\r\n          fdsfdsfdsaf, dsafdsf\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row (click)=\"presentModal()\" style=\"height: 45px; background: #DF2E24; color: #FFFFFF\">\r\n      <ion-col style=\"display: flex; align-items: center; justify-content: center\">\r\n        <div>\r\n          BUY FOR ${{product?.price}}\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 40239:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/view-one-item/view-one-item.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content fullscreen *ngIf=\"!loader\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n      <ion-icon style=\"font-size: 30px; color: white; background-color: rgba(0, 0, 0, 0.425); border-radius: 15px;\"\r\n        name=\"chevron-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-slides pager=\"true\" [options]=\"slideOptsOne\">\r\n    <ion-slide *ngFor=\"let image of productImages\">\r\n      <div class=\"slide\">\r\n        <img src=\"{{baseUrl}}/{{image.image}}\" alt=\"\">\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <ion-list-header>\r\n    <ion-label style=\"color: red; font-size: 24px; font-weight: bold;\">${{product?.price}}\r\n      <s style=\"font-size: 17px; color: #75767763;\" *ngIf=\"product?.oldprice !== ''\">${{product?.oldprice}}</s>\r\n    </ion-label>\r\n    <ion-button color='success' expand=\"block\">Cantidad</ion-button>\r\n  </ion-list-header>\r\n\r\n  <hr style=\"border-top: 1px solid #b0b3b3;\">\r\n  <div style=\"margin: 10px\">\r\n    <h5>{{product?.title}}</h5>\r\n    <p id=\"subtitle\">{{product?.subtitle}}</p>\r\n\r\n    <ion-col>\r\n      <p style=\"margin: 0px;\">Description</p>\r\n      <p id=\"productDescription\">{{product?.description}}</p>\r\n    </ion-col>\r\n  </div>\r\n\r\n  <hr style=\"border-top: 10px solid #f6f3f3;\">\r\n\r\n  <div\r\n    style=\"margin: 10px;font-size: 12px;margin-top: 10px;display: flex; justify-content: space-between;align-items: center\">\r\n    <span style=\"display: block; width: 90%\">56 personas están haciendo un pedido y pueden participar\r\n      directamente</span>\r\n    <ion-icon style=\"width: 10%;;font-size:20px;display: block; color: #75767763;\" name=\"chevron-forward-outline\">\r\n    </ion-icon>\r\n  </div>\r\n\r\n  <hr style=\"border-top: 10px solid #f6f3f3;\">\r\n\r\n  <div style=\"margin: 10px;font-size: 16px\">\r\n    <div style=\"display: flex;justify-content: space-between\">\r\n      <div style=\"display: flex;align-items: center\">\r\n        <img style=\"display:block; border-radius: 100%; height: 50px\" src=\"assets/homePage/single-items/1/p1.png\">\r\n        <span style=\"display: block;margin-left: 5px\">Carpa</span>\r\n      </div>\r\n      <div style=\"display: flex\">\r\n        <div style=\"margin-right:15px;display: flex;align-items: center; font-size: 14px\">\r\n          <div style=\"line-height: 1.5\">\r\n            La gente de<br> Rest21:32:05.1\r\n          </div>\r\n        </div>\r\n        <div style=\"display: flex;align-items: center\">\r\n          <button\r\n            style=\"font-size:18px;height:34px;color: white;background: #ff5000;padding: 5px 15px; border-radius: 5px\">\r\n            Ordenar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"display: flex;justify-content: space-between\">\r\n      <div style=\"display: flex;align-items: center\">\r\n        <img style=\"display:block; border-radius: 100%; height: 50px\" src=\"assets/homePage/single-items/1/p2.png\">\r\n        <span style=\"display: block;margin-left: 5px\">ABC</span>\r\n      </div>\r\n      <div style=\"display: flex\">\r\n        <div style=\"margin-right:15px;display: flex;align-items: center; font-size: 14px\">\r\n          <div style=\"line-height: 1.5\">\r\n            La gente de<br> Rest00:00:00.0\r\n          </div>\r\n        </div>\r\n        <div style=\"display: flex;align-items: center\">\r\n          <button\r\n            style=\"font-size:18px;height:34px;color: white;background: #ff5000;padding: 5px 15px; border-radius: 5px\">\r\n            Ordenar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Comentarios(5)</ion-label>\r\n      <ion-button style=\"color: #65676b;\">\r\n        <ion-icon style=\"font-size:20px;display: block; color: #75767763;\" name=\"chevron-forward-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/homePage/single-items/1/p2.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Giovanni</h2>\r\n        <p>Se los recomiendo mucho, salen muy buenos y están bonitos...</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/homePage/single-items/1/p2.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Javier</h2>\r\n        <p>!Muy bueno¡</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/homePage/single-items/1/p2.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Francisco</h2>\r\n        <p>Excelentes productos</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-grid class=\"ion-padding\">\r\n    <ion-row>\r\n      <ion-col style=\"color: #65676b;\">\r\n        <ion-icon name=\"heart-outline\"></ion-icon> Me gusta\r\n      </ion-col>\r\n\r\n      <ion-col style=\"color: #65676b;\">\r\n        <ion-label>\r\n          <ion-icon name=\"chatbox-outline\"></ion-icon> Comentar\r\n        </ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col style=\"color: #65676b;\">\r\n        <ion-icon name=\"share-social-outline\"></ion-icon> Compartir\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-input id=\"coment\" placeholder=\"Escribir comentario...\" style=\"background-color: #ECF3FF; border-radius: 20px;\">\r\n    </ion-input>\r\n  </ion-grid>\r\n\r\n  <ion-item>\r\n    <ion-label>\r\n      <h3>Vendedor</h3>\r\n      <div style=\"display: flex; align-items: center; margin-top: 5px\">\r\n        <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n        <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n        <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n        <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n        <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star-half\"></ion-icon>\r\n        <div style=\"color: gray\">(71)</div>\r\n      </div>\r\n    </ion-label>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"assets/homePage/single-items/1/p2.png\">\r\n    </ion-avatar>\r\n  </ion-item>\r\n\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"!loader\">\r\n  <ion-grid style=\"padding: 0\">\r\n    <ion-row style=\"height: 50px; background-color: white;\" class=\"new-grid\">\r\n      <ion-col class=\"itm-col\" size=\"4\">\r\n        <div>\r\n          <ion-icon name=\"storefront-outline\" style=\"font-size: 1.5rem;\"></ion-icon><br> Perfil\r\n        </div>\r\n      </ion-col>\r\n      <ion-col class=\"itm-col\" size=\"4\">\r\n        <div>\r\n          <ion-icon name=\"heart-outline\" style=\"font-size: 1.5rem;\"></ion-icon><br>Favorito\r\n        </div>\r\n      </ion-col>\r\n      <ion-col class=\"itm-col\" size=\"4\">\r\n        <div>\r\n          <ion-icon name=\"chatbubble-ellipses-outline\" style=\"font-size: 1.5rem;\"></ion-icon><br> Chat\r\n        </div>\r\n      </ion-col>\r\n      <ion-col\r\n        style=\"background-image: linear-gradient(to right, #ff5000  , #ff7300); color: white; text-align: center; display: flex; align-items: center;justify-content: center; \">\r\n        <div>\r\n          Añadir al carrito\r\n        </div>\r\n      </ion-col>\r\n      <ion-col\r\n        style=\"background-image: linear-gradient(to right,#ff9c03  , #ffc602); color: white; text-align: center; display: flex; align-items: center;justify-content: center;\"\r\n        (click)=\"presentModal()\">\r\n        <div>\r\n          Comprar\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_view-one-item_view-one-item_module_ts.js.map