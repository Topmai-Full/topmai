(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_contact-list_contact-list_module_ts"],{

/***/ 31261:
/*!******************************************************************!*\
  !*** ./src/app/chat/contact-list/contact-list-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactListPageRoutingModule": () => (/* binding */ ContactListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _contact_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-list.page */ 23548);




const routes = [
    {
        path: '',
        component: _contact_list_page__WEBPACK_IMPORTED_MODULE_0__.ContactListPage
    },
    // {
    //   path: 'register',
    //   loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
    // }
];
let ContactListPageRoutingModule = class ContactListPageRoutingModule {
};
ContactListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactListPageRoutingModule);



/***/ }),

/***/ 71252:
/*!**********************************************************!*\
  !*** ./src/app/chat/contact-list/contact-list.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactListPageModule": () => (/* binding */ ContactListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _contact_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-list-routing.module */ 31261);
/* harmony import */ var _contact_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-list.page */ 23548);







let ContactListPageModule = class ContactListPageModule {
};
ContactListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contact_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactListPageRoutingModule
        ],
        declarations: [_contact_list_page__WEBPACK_IMPORTED_MODULE_1__.ContactListPage]
    })
], ContactListPageModule);



/***/ }),

/***/ 23548:
/*!********************************************************!*\
  !*** ./src/app/chat/contact-list/contact-list.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactListPage": () => (/* binding */ ContactListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contact_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact-list.page.html */ 75292);
/* harmony import */ var _contact_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-list.page.scss */ 96376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let ContactListPage = class ContactListPage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.contacts = {
            // P:[
            //   {name:'Archivos', icon: 'assets/chat/contacts/file.png'}
            // ],
            K: [
                { name: 'Kasun', icon: 'assets/chat/contacts/1.png' },
                { name: 'Kavi', icon: 'assets/chat/contacts/2.png' }
            ],
            R: [
                { name: 'Ravi', icon: 'assets/chat/contacts/3.png' },
            ],
            S: [
                { name: 'Sanduni', icon: 'assets/chat/contacts/4.png' },
                { name: 'Sahunds', icon: 'assets/chat/contacts/5.png' },
                { name: 'Sari', icon: 'assets/chat/contacts/1.png' }
            ],
            T: [
                { name: 'Tasuri', icon: 'assets/chat/contacts/2.png' },
                { name: 'Tsunami', icon: 'assets/chat/contacts/3.png' }
            ],
        };
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    keys() {
        return Object.keys(this.contacts);
    }
    gotoProfile1() {
        this.router.navigate([`profile1`]);
    }
    gotoNewContact() {
        this.router.navigate([`register`]);
    }
};
ContactListPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ContactListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-contact-list',
        template: _raw_loader_contact_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactListPage);



/***/ }),

/***/ 96376:
/*!**********************************************************!*\
  !*** ./src/app/chat/contact-list/contact-list.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-header {\n  background-image: linear-gradient(to right, #4cd080 0%, #4cd080 100%);\n}\n\ninput {\n  padding-left: 50px;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n}\n\n.sc-ion-searchbar-md-h {\n  --border-radius: 20px !important;\n}\n\nimg {\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKOztBQUVBO0VBQ0kscUVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7OztFQUdJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6ImNvbnRhY3QtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0Y2QwODAgMCUsICM0Y2QwODAgMTAwJSk7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzLFxyXG5zZWxlY3Q6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnNjLWlvbi1zZWFyY2hiYXItbWQtaCB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59Il19 */");

/***/ }),

/***/ 75292:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/contact-list/contact-list.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar color=\"red\">\r\n        <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n            <ion-icon style=\"font-size: 30px; color: white;\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\" (click)=\"goBack()\">\r\n            <ion-icon style=\"color: white;font-size: 25px;margin-left: 10px\" name=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-buttons>\r\n\r\n        <ion-title style=\"text-align: center; color: white;\">Contactos</ion-title>\r\n    </ion-toolbar>\r\n\r\n    <ion-searchbar mode='ios' style=\"margin-top: 0;\" color='light' placeholder='Buscar contacto...'></ion-searchbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n\r\n    <ion-grid>\r\n        <ion-row (click)=\"gotoNewContact()\">\r\n            <ion-col size=\"2\" style=\"display: flex; align-items: center\">\r\n                <div>\r\n                    <img style=\"width: 40px; border-radius: 50px;\" src=\"assets/chat/contacts/agregar.png\">\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"display: flex; align-items: center; border-bottom: 1px solid rgba(217,215,215,0.38)\">\r\n                <div>\r\n                    Agregar Contacto\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- <ion-row>\r\n            <ion-col size=\"2\" style=\"display: flex; align-items: center\">\r\n                <div>\r\n                    <img style=\"width: 40px;border-radius: 50px;\" src=\"assets/chat/contacts/group.png\">\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"display: flex; align-items: center; border-bottom: 1px solid rgba(217,215,215,0.38)\">\r\n                <div>\r\n                    Grupos de chat\r\n                </div>\r\n            </ion-col>\r\n        </ion-row> -->\r\n\r\n        <ion-row>\r\n            <ion-col size=\"2\" style=\"display: flex; align-items: center\">\r\n                <div>\r\n                    <img style=\"width: 40px;border-radius: 50px;\" src=\"assets/chat/contacts/etiqueta.png\">\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"display: flex; align-items: center\">\r\n                <div>\r\n                    Etiqueta\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n        <div *ngFor=\"let key of keys()\">\r\n\r\n            <ion-row style=\"display: flex; align-items: center; background: #ececec; height: 30px\">\r\n                <div style=\"color: #6d6d6d; margin-left: 10px\">\r\n                    {{key}}\r\n                </div>\r\n            </ion-row>\r\n            <ion-row *ngFor=\"let item of contacts[key]\">\r\n                <ion-col (click)=\"gotoProfile1()\" size=\"2\" style=\"display: flex; align-items: center\">\r\n                    <img style=\"width: 40px; height: 40px; border-radius: 50px; display: block\" [src]=\"item.icon\">\r\n                </ion-col>\r\n                <ion-col style=\"display: flex; align-items: center;border-bottom: 1px solid rgba(217,215,215,0.38)\">\r\n                    <div>\r\n                        {{item.name}}\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n    </ion-grid>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_contact-list_contact-list_module_ts.js.map