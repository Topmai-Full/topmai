(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_about-me_about-me_module_ts"],{

/***/ 12586:
/*!*****************************************************!*\
  !*** ./src/app/about-me/about-me-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutMePageRoutingModule": () => (/* binding */ AboutMePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _about_me_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-me.page */ 95228);




const routes = [
    {
        path: '',
        component: _about_me_page__WEBPACK_IMPORTED_MODULE_0__.AboutMePage
    },
    {
        path: 'shipping-address-model',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about-me_shipping-address-model_shipping-address-model_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shipping-address-model/shipping-address-model.module */ 52654)).then(m => m.ShippingAddressModelPageModule)
    },
    {
        path: 'confirmation-popover',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about-me_confirmation-popover_confirmation-popover_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./confirmation-popover/confirmation-popover.module */ 77004)).then(m => m.ConfirmationPopoverPageModule)
    },
    {
        path: 'profile-model',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about-me_profile-model_profile-model_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile-model/profile-model.module */ 36743)).then(m => m.ProfileModelPageModule)
    },
    {
        path: 'order-state',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about-me_order-state_order-state_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./order-state/order-state.module */ 34727)).then(m => m.OrderStatePageModule)
    },
];
let AboutMePageRoutingModule = class AboutMePageRoutingModule {
};
AboutMePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutMePageRoutingModule);



/***/ }),

/***/ 62010:
/*!*********************************************!*\
  !*** ./src/app/about-me/about-me.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutMePageModule": () => (/* binding */ AboutMePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _about_me_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-me-routing.module */ 12586);
/* harmony import */ var _about_me_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-me.page */ 95228);
/* harmony import */ var _items_list_items_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items-list/items-list.component */ 88931);








let AboutMePageModule = class AboutMePageModule {
};
AboutMePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _about_me_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutMePageRoutingModule
        ],
        declarations: [_about_me_page__WEBPACK_IMPORTED_MODULE_1__.AboutMePage, _items_list_items_list_component__WEBPACK_IMPORTED_MODULE_2__.ItemsListComponent]
    })
], AboutMePageModule);



/***/ }),

/***/ 95228:
/*!*******************************************!*\
  !*** ./src/app/about-me/about-me.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutMePage": () => (/* binding */ AboutMePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_about_me_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./about-me.page.html */ 94179);
/* harmony import */ var _about_me_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-me.page.scss */ 38172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_about_me_shipping_address_model_shipping_address_model_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/about-me/shipping-address-model/shipping-address-model.page */ 31428);
/* harmony import */ var _profile_model_profile_model_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-model/profile-model.page */ 66775);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _order_state_order_state_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-state/order-state.page */ 15514);









let AboutMePage = class AboutMePage {
    constructor(modalController, router, alertCtrl) {
        this.modalController = modalController;
        this.router = router;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
        //this.openOrderStateModal();
    }
    goMyOrders() {
        this.router.navigate([`my-orders`]);
    }
    goMyFavorites() {
        this.router.navigate([`favorites`]);
    }
    gotoEnvios() {
        this.router.navigate([`order-wizard`]);
    }
    gotoSesion() {
        this.router.navigate([`presentation`]);
    }
    ionViewWillEnter() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Are you sure',
                message: 'You want to logout',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Cancel');
                        }
                    },
                    {
                        text: 'Okay',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            this.user = JSON.parse(localStorage.getItem('user'));
                            localStorage.clear();
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    openProfileModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _profile_model_profile_model_page__WEBPACK_IMPORTED_MODULE_3__.ProfileModelPage,
            });
            return yield modal.present();
        });
    }
    openOrderStateModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _order_state_order_state_page__WEBPACK_IMPORTED_MODULE_4__.OrderStatePage,
            });
            return yield modal.present();
        });
    }
    shippingModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _app_about_me_shipping_address_model_shipping_address_model_page__WEBPACK_IMPORTED_MODULE_2__.ShippingAddressModelPage,
            });
            return yield modal.present();
        });
    }
};
AboutMePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
AboutMePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-about-me',
        template: _raw_loader_about_me_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_me_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutMePage);



/***/ }),

/***/ 20504:
/*!****************************************************************************!*\
  !*** ./src/app/about-me/confirmation-popover/confirmation-popover.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationPopoverPage": () => (/* binding */ ConfirmationPopoverPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_confirmation_popover_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./confirmation-popover.page.html */ 75469);
/* harmony import */ var _confirmation_popover_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation-popover.page.scss */ 21755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_shipping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shipping.service */ 52117);



/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */



let ConfirmationPopoverPage = class ConfirmationPopoverPage {
    constructor(modalController, shippingSrv, toastController, alertCtrl) {
        this.modalController = modalController;
        this.shippingSrv = shippingSrv;
        this.toastController = toastController;
        this.alertCtrl = alertCtrl;
        this.action = false;
        this.formObj = {
            name: '',
            address: '',
            zip: '',
            user: '',
            id: ''
        };
    }
    ngOnInit() {
        this.single();
    }
    ionViewWillEnter() {
        this.single();
    }
    single() {
        if (this.routeId === 'new') {
            this.action = false;
        }
        else {
            this.action = true;
            this.shippingSrv.getById(this.routeId).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.log(resp);
                this.formObj.address = resp.data.address;
                this.formObj.name = resp.data.name;
                this.formObj.zip = resp.data.zip;
                this.formObj.id = resp.data._id;
            }));
        }
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
    presentToast(title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: title,
                duration: 2000
            });
            toast.present();
        });
    }
    create() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.formObj.user = user._id;
        if (this.formObj.name === '' ||
            this.formObj.address === '' ||
            this.formObj.zip === '') {
            this.presentToast('Please fill all fields');
        }
        else {
            this.shippingSrv.create(this.formObj).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                if (resp.message === 'success') {
                    this.presentToast('Shipping registerd successfully');
                    const alert = yield this.alertCtrl.create({
                        header: 'Note',
                        message: 'You want to go',
                        buttons: [
                            {
                                text: 'HOME',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: (blah) => {
                                    this.dismiss();
                                }
                            },
                            {
                                text: 'ADD MORE SHIPPING',
                                handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                                    console.log('ok');
                                    this.formObj.name = '';
                                    this.formObj.address = '';
                                    this.formObj.zip = '';
                                })
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    console.log('something went wrong');
                }
            }));
        }
    }
    update() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.formObj.user = user._id;
        if (this.formObj.name === '' ||
            this.formObj.address === '' ||
            this.formObj.zip === '') {
            this.presentToast('Please fill all fields');
        }
        else {
            this.shippingSrv.update(this.formObj).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                if (resp.message === 'success') {
                    this.presentToast('Updated successfully');
                    this.dismiss();
                }
                else {
                    console.log('something went wrong');
                }
            }));
        }
    }
};
ConfirmationPopoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_shipping_service__WEBPACK_IMPORTED_MODULE_2__.ShippingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
ConfirmationPopoverPage.propDecorators = {
    routeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ConfirmationPopoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-confirmation-popover',
        template: _raw_loader_confirmation_popover_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_confirmation_popover_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfirmationPopoverPage);



/***/ }),

/***/ 88931:
/*!*************************************************************!*\
  !*** ./src/app/about-me/items-list/items-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsListComponent": () => (/* binding */ ItemsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_items_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./items-list.component.html */ 7096);
/* harmony import */ var _items_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-list.component.scss */ 31998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ItemsListComponent = class ItemsListComponent {
    constructor() {
        this.items = [{
                id: 1,
                title: 'Refrigerador Qianku',
                subTitle: 'SubTitle',
                price: '€000',
                priceNote: '€30',
                img: 'assets/homePage/item-two/1.png',
                people: 'assets/homePage/item-two/g1.png',
            }, {
                id: 2,
                title: 'Refrigerador Qianku',
                subTitle: 'SubTitle',
                price: '€000',
                priceNote: '€30',
                img: 'assets/homePage/item-two/2.png',
                people: 'assets/homePage/item-two/g3.png',
            }, {
                id: 3,
                title: 'Refrigerador Qianku',
                subTitle: 'SubTitle',
                price: '€000',
                priceNote: '€30',
                img: 'assets/homePage/item-two/3.png',
            }, {
                id: 4,
                title: 'Refrigerador Qianku',
                subTitle: 'SubTitle',
                price: '€000',
                priceNote: '€30',
                img: 'assets/homePage/item-two/4.png',
                people: 'assets/homePage/item-two/g4.png',
            }, {
                id: 5,
                title: 'Refrigerador Qianku',
                subTitle: 'SubTitle',
                price: '€000',
                priceNote: '€30',
                img: 'assets/homePage/item-two/1.png',
            }, {
                id: 6,
                title: 'Refrigerador Qianku',
                subTitle: 'SubTitle',
                price: '€000',
                priceNote: '€30',
                img: 'assets/homePage/item-two/2.png',
            }];
    }
    ngOnInit() { }
    getClass(i) {
        if (i === 0) {
            {
                return 'left-col first-row';
            }
        }
        else if (i === 1) {
            {
                return 'right-col first-row';
            }
        }
        else if (i % 2 === 0) {
            return 'left-col';
        }
        else {
            return 'right-col';
        }
    }
};
ItemsListComponent.ctorParameters = () => [];
ItemsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-items-list',
        template: _raw_loader_items_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_items_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemsListComponent);



/***/ }),

/***/ 15514:
/*!**********************************************************!*\
  !*** ./src/app/about-me/order-state/order-state.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderStatePage": () => (/* binding */ OrderStatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_order_state_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-state.page.html */ 68359);
/* harmony import */ var _order_state_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-state.page.scss */ 66903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/order.service */ 68132);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 92340);



/* eslint-disable no-underscore-dangle */




let OrderStatePage = class OrderStatePage {
    constructor(modalController, orderSrv, loadingController) {
        this.modalController = modalController;
        this.orderSrv = orderSrv;
        this.loadingController = loadingController;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl;
        this.loader = false;
    }
    ngOnInit() {
        this.loader = true;
        this.loadingController.create({
            message: 'Loading...'
        }).then((response) => {
            response.present();
            if (this.user) {
                this.orderSrv.notcompletedOrders(this.user._id).subscribe((resp) => {
                    console.log(resp);
                    this.orders = resp.orders;
                    this.loader = false;
                    response.dismiss();
                });
            }
        });
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
};
OrderStatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
OrderStatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-order-state',
        template: _raw_loader_order_state_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_state_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderStatePage);



/***/ }),

/***/ 66775:
/*!**************************************************************!*\
  !*** ./src/app/about-me/profile-model/profile-model.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModelPage": () => (/* binding */ ProfileModelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_model_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile-model.page.html */ 9546);
/* harmony import */ var _profile_model_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-model.page.scss */ 72969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let ProfileModelPage = class ProfileModelPage {
    constructor(modalController, router) {
        this.modalController = modalController;
        this.router = router;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
    gotoSesion() {
        this.router.navigate([`presentation`]);
    }
};
ProfileModelPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ProfileModelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-profile-model',
        template: _raw_loader_profile_model_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_model_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfileModelPage);



/***/ }),

/***/ 31428:
/*!********************************************************************************!*\
  !*** ./src/app/about-me/shipping-address-model/shipping-address-model.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingAddressModelPage": () => (/* binding */ ShippingAddressModelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_shipping_address_model_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shipping-address-model.page.html */ 56894);
/* harmony import */ var _shipping_address_model_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipping-address-model.page.scss */ 15418);
/* harmony import */ var _services_shipping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shipping.service */ 52117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _confirmation_popover_confirmation_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmation-popover/confirmation-popover.page */ 20504);



/* eslint-disable no-underscore-dangle */




let ShippingAddressModelPage = class ShippingAddressModelPage {
    constructor(modalController, shiipingSrv, alertCtrl, toastController) {
        this.modalController = modalController;
        this.shiipingSrv = shiipingSrv;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.shiipingSrv.getAllByuser(this.user._id).subscribe((resp) => {
            this.shippings = resp.data;
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
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
    presentModal(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _confirmation_popover_confirmation_popover_page__WEBPACK_IMPORTED_MODULE_3__.ConfirmationPopoverPage,
                cssClass: 'my-model-class',
                componentProps: {
                    routeId: id
                }
            });
            return yield modal.present();
        });
    }
    ionViewWillEnter() {
        this.getAll();
    }
    delete(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Are you sure',
                message: 'You want to delete it',
                buttons: [
                    {
                        text: 'NO',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.dismiss();
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            this.shiipingSrv.delete(id).subscribe((resp) => {
                                if (resp.message === 'success') {
                                    this.presentToast('Delete successfully');
                                    this.getAll();
                                }
                            });
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ShippingAddressModelPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _services_shipping_service__WEBPACK_IMPORTED_MODULE_2__.ShippingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
ShippingAddressModelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-shipping-address-model',
        template: _raw_loader_shipping_address_model_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shipping_address_model_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShippingAddressModelPage);



/***/ }),

/***/ 38172:
/*!*********************************************!*\
  !*** ./src/app/about-me/about-me.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-grid {\n  --ion-grid-columns: 10;\n}\n\n#userName {\n  margin-bottom: 2px;\n  font-size: 20px;\n  color: #838383;\n}\n\n#userEmail {\n  margin-bottom: 2px;\n  font-size: 20px;\n  color: #838383;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoiYWJvdXQtbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xyXG4gIC0taW9uLWdyaWQtY29sdW1uczogMTA7XHJcbn1cclxuXHJcbiN1c2VyTmFtZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzgzODM4MztcclxufVxyXG5cclxuI3VzZXJFbWFpbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzgzODM4MztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 21755:
/*!******************************************************************************!*\
  !*** ./src/app/about-me/confirmation-popover/confirmation-popover.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("input {\n  border: none;\n}\n\ninput:focus {\n  outline: none;\n}\n\n#checkButton {\n  margin-top: 15px;\n  border-radius: 5px;\n  background: #df2626;\n  color: #FFFFFF;\n  display: flex;\n  align-items: center;\n  height: 40px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi1wb3BvdmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFDRiIsImZpbGUiOiJjb25maXJtYXRpb24tcG9wb3Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2NoZWNrQnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjZGYyNjI2O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 31998:
/*!***************************************************************!*\
  !*** ./src/app/about-me/items-list/items-list.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGIiwiZmlsZSI6Iml0ZW1zLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3Qtcm93IHtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubGVmdC1jb2wge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtY29sIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNhdGVnb3JpZXMge1xyXG4gIC0taW9uLWdyaWQtY29sdW1uczogMTA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 66903:
/*!************************************************************!*\
  !*** ./src/app/about-me/order-state/order-state.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".color-header {\n  height: 45px;\n}\n\n#hr {\n  display: block;\n  color: #20af3b;\n  font-size: 30px;\n}\n\n#ion-icon {\n  display: block;\n  color: #20af3b;\n  font-size: 30px;\n}\n\n#productImage {\n  border-radius: 5px;\n  height: 65px;\n  width: 65px;\n  object-fit: cover;\n}\n\n#order-grid {\n  margin: 0px 0px 20px 0px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border: 1px solid #e1e1e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLXN0YXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBQUNGIiwiZmlsZSI6Im9yZGVyLXN0YXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1oZWFkZXIge1xyXG4gIGhlaWdodDogNDVweDtcclxufVxyXG5cclxuI2hyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzIwYWYzYjtcclxuICBmb250LXNpemU6IDMwcHhcclxufVxyXG5cclxuI2lvbi1pY29uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzIwYWYzYjtcclxuICBmb250LXNpemU6IDMwcHhcclxufVxyXG5cclxuI3Byb2R1Y3RJbWFnZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGhlaWdodDogNjVweDtcclxuICB3aWR0aDogNjVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuI29yZGVyLWdyaWQge1xyXG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 72969:
/*!****************************************************************!*\
  !*** ./src/app/about-me/profile-model/profile-model.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".color-header {\n  height: 40px;\n}\n\nion-header::after {\n  background-image: none;\n}\n\nion-col {\n  padding: 10px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtbW9kZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoicHJvZmlsZS1tb2RlbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItaGVhZGVyIHtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxufSJdfQ== */");

/***/ }),

/***/ 15418:
/*!**********************************************************************************!*\
  !*** ./src/app/about-me/shipping-address-model/shipping-address-model.page.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".color-header {\n  height: 40px;\n}\n\nion-content {\n  --ion-background-color: #efeeee;\n}\n\ndiv {\n  line-height: 22px;\n}\n\n#EmptyShipping {\n  margin: 40px auto;\n  display: block;\n  text-align: center;\n  font-size: 25px;\n}\n\n#name {\n  font-size: 20px;\n  padding: 5px 10px;\n}\n\n#address {\n  font-size: 16px;\n  color: #818181;\n  padding: 5px 10px;\n}\n\n.actionIcon {\n  float: right;\n  padding: 0px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nLWFkZHJlc3MtbW9kZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy1tb2RlbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItaGVhZGVyIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZWVlO1xyXG59XHJcblxyXG5kaXYge1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4jRW1wdHlTaGlwcGluZyB7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuI25hbWUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuI2FkZHJlc3Mge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzgxODE4MTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuLmFjdGlvbkljb24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOiAwcHggNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 94179:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-me/about-me.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-grid style=\"margin-top: 10px\">\r\n    <ion-row>\r\n      <ion-col size=\"2\" style=\"display: flex; align-items: center; justify-content: center\">\r\n        <img style=\"display:block;border-radius: 50px; width: 70%;\"\r\n          src=\"https://ionicframework.com/docs/demos/api/avatar/avatar.svg\">\r\n      </ion-col>\r\n      <ion-col size=\"6\" *ngIf=\"user !== null\" style=\"display: flex; flex-direction:column;justify-content: center;\">\r\n        <div id=\"userName\">\r\n          <span *ngIf=\"user !== null\">\r\n            {{user?.name}}\r\n          </span>\r\n        </div>\r\n        <div id=\"userEmail\" >\r\n          <div style=\"margin-left: 0px; padding-bottom: 3px\" >\r\n            <span *ngIf=\"user !== null\">\r\n              {{user?.email}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" *ngIf=\"user === null\" style=\"display: flex; flex-direction:column;justify-content: center;\">\r\n        <div id=\"userName\">\r\n          <span>\r\n            example Name\r\n          </span>\r\n        </div>\r\n        <div id=\"userEmail\">\r\n          <div style=\"margin-left: 0px; padding-bottom: 3px\">\r\n            <span>\r\n              example@mail.com\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"display: flex; flex-direction: column; \">\r\n        <div style=\"color:#a5a4a4;align-items:center;text-align: right; display: flex; justify-content:flex-end; \">\r\n          <img src=\"assets/chat/wallet/settings.png\" alt=\"\" style=\"width: 50%;\" (click)=\"openProfileModal()\">\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-button *ngIf=\"user === null\" (click)=\"gotoSesion()\" style=\"--background: #35CA75;\" expand='block'>INICIAR SESIÓN\r\n  </ion-button>\r\n  <ion-button *ngIf=\"user !== null\" (click)=\"logout()\" style=\"--background: #35CA75;\" expand='block'>Se déconnecter\r\n  </ion-button>\r\n  <ion-grid style=\"padding: 10px\">\r\n\r\n    <ion-row>\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/pago_pendiente.png\">\r\n        </div>\r\n        <div (click)=\"gotoEnvios()\" style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          venta guìas\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/notificaciones.png\">\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          notificaciones\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" (click)=\"openOrderStateModal()\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/envio_pendiente.png\">\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          historial\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/gana_cupones.png\">\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\" (click)=\"goMyOrders()\">\r\n          cupones\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/favoritos.png\">\r\n\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          favoritos\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n\r\n  <div style=\"height: 10px;background: #efeeee\"></div>\r\n  <ion-row>\r\n    <ion-col size=\"5\" style=\"display: flex;align-items: center\">\r\n      <div>\r\n        Mis pedidos\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"5\"\r\n      style=\"color:#a5a4a4;align-items:center;text-align: right; display: flex; justify-content:flex-end\">\r\n      <div>\r\n        Ver todos\r\n      </div>\r\n      <div>\r\n        <ion-icon style=\"font-size: 20px\" name=\"chevron-forward-outline\"></ion-icon>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <ion-grid style=\"padding: 10px\">\r\n    <ion-row>\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/pendiente_pago.png\">\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          pendiente de pago\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/productos_comprados_resientes.png\">\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          pendiente de envio\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/e_nviado.png\">\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          enviado\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/pendiente_valoracion.png\">\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          pendiente de valoracion\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/monedero.png\">\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          monedero\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div style=\"height: 10px;background: #efeeee\"></div>\r\n  <ion-row>\r\n    <ion-col size=\"5\" style=\"display: flex;align-items: center\">\r\n      <div>\r\n        servicios\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"5\"\r\n      style=\"color:#a5a4a4;align-items:right;text-align: right; display: flex; justify-content:flex-end\">\r\n      <div>\r\n        Ver todos\r\n      </div>\r\n      <div>\r\n        <ion-icon style=\"font-size: 20px\" name=\"chevron-forward-outline\"></ion-icon>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <ion-grid style=\"padding: 10px\">\r\n    <ion-row>\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/direccion_entrega.png\">\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          Direccion de entrega\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/7.png\">\r\n        </div>\r\n        <div (click)=\"goMyFavorites()\" style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          monedero\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/centro_ayuda.png\">\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          centro de ayuda\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/preguntas.png\">\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          pregunta y respuesta\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/sujerencias.png\">\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          sujerencias\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" (click)=\"shippingModal()\">\r\n        <div style=\"text-align: center\">\r\n          <img style=\"width: 30px; height: 30px\" src=\"assets/about-me/1x/centro_ayuda.png\">\r\n        </div>\r\n        <div style=\"font-size: 13px;text-align: center; color: #666666\">\r\n          Direccion de entregado\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div style=\"height: 10px;background: #efeeee\"></div>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col style=\"display: flex; align-items: center; justify-content: center\">\r\n        <div>\r\n          <img style=\"width: 20px; height: 20px\" src=\"assets/about-me/1x/destacado2.png\">\r\n\r\n        </div>\r\n        <div style=\"margin-left: 8px; color: #9e0101\">\r\n          Destacados\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-items-list></app-items-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 75469:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-me/confirmation-popover/confirmation-popover.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content style=\"position: relative\">\r\n  <div (click)=\"dismiss()\" style=\"position: fixed; top: 10px; right: 5px; z-index: 4\">\r\n    <ion-icon style=\"font-size:30px; color: #c6c5c5\" name=\"close-circle\"></ion-icon>\r\n  </div>\r\n\r\n  <div style=\"padding: 20px 10px;\">\r\n    <div style=\"text-align: center;\" *ngIf=\"!action\">\r\n      Add shipping\r\n    </div>\r\n    <div style=\"text-align: center;\" *ngIf=\"action\">\r\n      Update shipping\r\n    </div>\r\n\r\n    <ion-row style=\"margin-top: 20px\">\r\n      <ion-col size=\"3\" style=\"display: flex;align-items: center\">\r\n        <div>NAME</div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <input type=\"text\" name=\"name\" [(ngModel)]=\"formObj.name\" placeholder=\"NAME\" style=\"width: 100%\" />\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"margin-top: 10px\">\r\n      <ion-col size=\"3\" style=\"display: flex;align-items: center\">\r\n        <div>ADDRE</div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <input type=\"text\" name=\"address\" [(ngModel)]=\"formObj.address\" placeholder=\"ADDRESS\" style=\"width: 100%\" />\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"margin-top: 10px\">\r\n      <ion-col size=\"3\" style=\"display: flex;align-items: center\">\r\n        <div>ZIP</div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <input type=\"number\" name=\"zip\" [(ngModel)]=\"formObj.zip\" placeholder=\"ZIP CODE\" style=\"width: 100%\" />\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <div id=\"checkButton\" *ngIf=\"!action\" (click)=\"create()\">\r\n      CREATE\r\n    </div>\r\n\r\n    <div id=\"checkButton\" *ngIf=\"action\" (click)=\"update()\">\r\n      UPDATE\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 7096:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-me/items-list/items-list.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid style=\"padding: 0px\">\r\n  <ion-row>\r\n    <ion-col style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n      <img [src]=\"item.img\" />\r\n      <ion-row>\r\n        <ion-col style=\"padding-bottom: 0px\">\r\n          {{item.title}}<br> {{item.subTitle}}\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n        <div style=\"color: #6A7586\">\r\n          <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n          <span>{{item.priceNote}}</span>\r\n        </div>\r\n        <div *ngIf=\"item.people\">\r\n          <img style=\"height: 20px\" [src]=\"item.people\" />\r\n        </div>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n");

/***/ }),

/***/ 68359:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-me/order-state/order-state.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"color-header\" style=\"position: relative\">\r\n  <ion-icon (click)=\"dismiss()\" style=\"position: absolute; top:8px; font-size: 30px;\" name=\"chevron-back-outline\">\r\n  </ion-icon>\r\n  <div style=\"margin-left:40px; display: flex;justify-content: flex-start;align-items: center;height: 100%\">\r\n    <div>\r\n      <b>Order Details</b>\r\n    </div>\r\n  </div>\r\n  <ion-icon style=\"position: absolute; top:8px; right:10px; font-size: 30px;\" name=\"cart-outline\"></ion-icon>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!loader\">\r\n  <ion-grid *ngFor=\"let item of orders\" id=\"order-grid\">\r\n    <ion-grid *ngFor=\"let items of item[1]\">\r\n      <ion-row style=\"background: #e8f1fa; border-radius: 5px; padding: 8px\">\r\n        <ion-col size=\"3\">\r\n          <img style=\"border-radius: 5px\" src=\"{{baseUrl}}/{{items.product.image[0].image}}\" />\r\n        </ion-col>\r\n        <ion-col>\r\n          <div><b>It's on the way.</b></div>\r\n          <div style=\"margin-top: 5px; font-size: 14px\">STATUS: {{item[0]?.status}}</div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"font-size: 14px; line-height: 25px; margin-top: 10px\">\r\n        <ion-col size=\"4\" style=\"color: grey\">\r\n          <div>\r\n            Time placed\r\n          </div>\r\n          <div>\r\n            Order Number\r\n          </div>\r\n          <div>\r\n            Total\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <div>\r\n            {{item[0]?.createdAt | date: 'medium'}}\r\n          </div>\r\n          <div>\r\n            {{item[0]?.orderId}}\r\n          </div>\r\n          <div>\r\n            ${{item[0]?.totalAmount}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top: 15px;\">\r\n        <ion-col>\r\n          <div style=\"display: flex; align-items: center; justify-content: center\"\r\n            *ngIf=\"item[0].status === 'Payment Pending'\">\r\n            <ion-icon id=\"ion-icon\" name=\"checkmark-circle\"></ion-icon>\r\n            <hr style=\"height: 2px; width: 85px;background: #20af3b;margin:0px; display: block\" />\r\n            <ion-icon id=\"ion-icon\" name=\"ellipse-outline\"></ion-icon>\r\n            <hr style=\"height: 2px; width: 85px;background: #20af3b;margin:0px; display: block\" />\r\n            <ion-icon id=\"ion-icon\" name=\"ellipse-outline\"></ion-icon>\r\n          </div>\r\n\r\n          <div style=\"display: flex; align-items: center; justify-content: center\"\r\n            *ngIf=\"item[0].status === 'Shipped'\">\r\n            <ion-icon id=\"ion-icon\" name=\"checkmark-circle\"></ion-icon>\r\n            <hr style=\"height: 2px; width: 85px;background: #20af3b;margin:0px; display: block\" />\r\n            <ion-icon id=\"ion-icon\" name=\"checkmark-circle\"></ion-icon>\r\n            <hr style=\"height: 2px; width: 85px;background: #20af3b;margin:0px; display: block\" />\r\n            <ion-icon id=\"ion-icon\" name=\"ellipse-outline\"></ion-icon>\r\n          </div>\r\n\r\n          <div style=\"display: flex; align-items: center; justify-content: center\" *ngIf=\"item[0].status === 'Delivered'\">\r\n            <ion-icon id=\"ion-icon\" name=\"checkmark-circle\"></ion-icon>\r\n            <hr style=\"height: 2px; width: 85px;background: #20af3b;margin:0px; display: block\" />\r\n            <ion-icon id=\"ion-icon\" name=\"checkmark-circle\"></ion-icon>\r\n            <hr style=\"height: 2px; width: 85px;background: #20af3b;margin:0px; display: block\" />\r\n            <ion-icon id=\"ion-icon\" name=\"checkmark-circle\"></ion-icon>\r\n          </div>\r\n          <div\r\n            style=\"margin-top:5px;font-size:14px;display: flex; align-items: center; justify-content: space-around; text-align: center;\">\r\n            <div style=\"width: 65px\"><b>Paid</b> <br /></div>\r\n            <div style=\"width: 65px\"><b>Shipped</b> <br /></div>\r\n            <div style=\"width: 65px\"><b>Delivered</b></div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"margin-top: 10px\">\r\n        <ion-col>\r\n          <div\r\n            style=\"padding:5px; border-radius: 5px; border: 1px solid #dedddd; width: 100%; display: flex; align-items: center\">\r\n            <div style=\"display: flex\">\r\n              <img id=\"productImage\"\r\n                src=\"{{baseUrl}}/{{items.product.image[0].image}}\" />\r\n              <div style=\"margin-left: 10px; font-size: 14px\">\r\n                {{items.product.name}}<br />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-grid>\r\n        <ion-row style=\"margin-top: 10px\">\r\n          <ion-col>\r\n            <div style=\"font-size:14px; margin-top: 10px;\">\r\n              indigo Power <br />\r\n              7917 McPherson ED STE fsdgfdsg gf sgfds fdg<br>\r\n              Santos<br>\r\n              Laredo, TExas<br>\r\n              Estados Unidos\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <hr style=\"background: #e3e2e2; height: 1px\">\r\n        <ion-row style=\"margin-top: 10px\">\r\n          <ion-col>\r\n            <div style=\"font-size: 20px; font-weight: bold\">Payment Info</div>\r\n            <div style=\"font-size:14px; margin-top: 10px; display: flex; justify-content: space-between\">\r\n              <div style=\"display: flex\">\r\n                <img style=\"width: 45px;height: 30px; display: block\" src=\"assets/about-me/visa.png\" />\r\n                <div style=\"margin-left: 10px\">\r\n                  Ending in 2686\r\n                  <br><span style=\"font-size: 12px;\">indigo power</span>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                USD 205.68<br><span style=\"font-size: 12px; color: grey\">3 ago, at 0:09</span>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <hr style=\"background: #e3e2e2; height: 1px\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <div style=\"font-size: 20px; font-weight: bold\">Payment Info</div>\r\n            <div style=\"font-size:14px; margin-top: 10px; display: flex; justify-content: space-between\">\r\n              <div style=\"color: gray\">\r\n                1 item\r\n              </div>\r\n              <div>\r\n                USD 205.68\r\n              </div>\r\n            </div>\r\n            <div style=\"font-size:14px; margin-top: 5px; display: flex; justify-content: space-between\">\r\n              <div style=\"color: gray\">\r\n                Shipping\r\n              </div>\r\n              <div>\r\n                USD 205.68\r\n              </div>\r\n            </div>\r\n            <div style=\"font-size:14px; margin-top: 5px; display: flex; justify-content: space-between\">\r\n              <div style=\"color: gray\">\r\n                Tax\r\n              </div>\r\n              <div>\r\n                USD 205.68\r\n              </div>\r\n            </div>\r\n            <hr style=\"background: #dedcdc; height: 1px; width: 100px; margin-right: 0px\">\r\n            <div style=\"font-size:16px; margin-top: 5px; display: flex; justify-content: space-between\">\r\n              <div style=\"color: gray\">\r\n                Order total\r\n              </div>\r\n              <div>\r\n                USD 205.68\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n    </ion-grid>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 9546:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-me/profile-model/profile-model.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode='ios'>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" (click)=\"dismiss()\">\r\n      <ion-icon style=\"font-size: 30px; \" name=\"chevron-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Configuración</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list lines=\"full\" class=\"ion-no-margin\">\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"end\">\r\n        <img src=\"assets/chat/chatList/1.png\">\r\n      </ion-avatar>\r\n      <ion-label>Foto de perfil </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-label>Nombre</ion-label>\r\n      Indigo import agency ❤\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>ID topmai</ion-label>\r\n      12345678\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Genero</ion-label>\r\n      <ion-select value=\"F\">\r\n        <ion-select-option value=\"M\">Masculino</ion-select-option>\r\n        <ion-select-option value=\"F\">Femenino</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Zona</ion-label>\r\n      <ion-select value=\"Mexico\">\r\n        <ion-select-option value=\"Mexico\">México</ion-select-option>\r\n        <ion-select-option value=\"Brasil\">Brasil</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Cumpleaños</ion-label>\r\n      <ion-datetime value=\"1990-02-19\" placeholder=\"Select Date\"></ion-datetime>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-label>Vincular Teléfono</ion-label>\r\n      <ion-input placeholder=\"Sin llenar\" maxlength='10' inputmode=\"tel\"></ion-input>\r\n      <ion-icon name=\"call-outline\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <hr style=\"border-top: 8px solid #f6f3f3;\">\r\n\r\n    <ion-item>\r\n      <ion-label>Código Qr</ion-label>\r\n      <ion-icon style=\"color: grey; margin-left: 5px;display: block\" name=\"qr-code\"></ion-icon>\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Mi medalla</ion-label>\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-label>Asistente de facturas</ion-label>\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n\r\n\r\n    <hr style=\"border-top: 8px solid #f6f3f3;\">\r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-label>Verificado</ion-label>\r\n      No verificado\r\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 56894:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-me/shipping-address-model/shipping-address-model.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"color-header\" style=\"position: relative\">\r\n  <ion-icon (click)=\"dismiss()\" style=\"position: absolute; top:4px; font-size: 30px;\" name=\"chevron-back-outline\">\r\n  </ion-icon>\r\n  <div style=\"display: flex;justify-content: center;align-items: center;height: 100%;font-size: 20px;\">\r\n    <div>\r\n      Shipping address\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid *ngIf=\"shippings?.length > 0\">\r\n    <ion-row style=\"background: #FFFFFF; font-size: 15px; margin: 10px 0px;\" *ngFor=\"let item of shippings;index as i\">\r\n      <ion-col>\r\n        <div id=\"name\">\r\n          {{item?.name}}\r\n          <span>\r\n            <ion-icon class=\"actionIcon\" (click)=\"delete(item?._id)\" name=\"trash-outline\"></ion-icon>\r\n            <ion-icon class=\"actionIcon\" (click)=\"presentModal(item?._id)\" name=\"create-outline\"></ion-icon>\r\n          </span>\r\n        </div>\r\n        <div id=\"address\">\r\n          {{item?.address}}\r\n        </div>\r\n        <div style=\"color: grey;display: flex; justify-content: space-between; margin-top: 15px\">\r\n          <div style=\"display: flex; align-items: center\">\r\n            <ion-icon style=\"display: block; margin-right: 5px\" name=\"ellipse-outline\"></ion-icon>\r\n            Zip Code\r\n          </div>\r\n          <div style=\"display: flex\">\r\n            <div style=\"margin-right: 10px\">\r\n              {{item?.zip}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"shippings?.length < 1\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <p id=\"EmptyShipping\">Your Shipping is Empty!</p>\r\n      </ion-col>\r\n      <ion-col>\r\n        <img src=\"../../../assets/shipping.png\" alt=\"\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div style=\"margin-top: 15px; padding: 10px\">\r\n    <div (click)=\"presentModal('new')\"\r\n      style=\"border-radius:5px; background: #df2b26; color: #FFFFFF; display: flex; align-items: center; height :40px; justify-content: center\">\r\n      <ion-icon style=\"display: block; margin-right: 5px\" name=\"add-circle\"></ion-icon>\r\n      CLICK THIS\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_about-me_about-me_module_ts.js.map