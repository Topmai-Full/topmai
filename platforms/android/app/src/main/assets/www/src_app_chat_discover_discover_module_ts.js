(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_discover_discover_module_ts"],{

/***/ 21228:
/*!**********************************************************!*\
  !*** ./src/app/chat/discover/discover-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPageRoutingModule": () => (/* binding */ DiscoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover.page */ 99319);




const routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_0__.DiscoverPage
    }
];
let DiscoverPageRoutingModule = class DiscoverPageRoutingModule {
};
DiscoverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DiscoverPageRoutingModule);



/***/ }),

/***/ 63363:
/*!**************************************************!*\
  !*** ./src/app/chat/discover/discover.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPageModule": () => (/* binding */ DiscoverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _discover_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover-routing.module */ 21228);
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover.page */ 99319);







let DiscoverPageModule = class DiscoverPageModule {
};
DiscoverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _discover_routing_module__WEBPACK_IMPORTED_MODULE_0__.DiscoverPageRoutingModule
        ],
        declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_1__.DiscoverPage]
    })
], DiscoverPageModule);



/***/ }),

/***/ 99319:
/*!************************************************!*\
  !*** ./src/app/chat/discover/discover.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPage": () => (/* binding */ DiscoverPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_discover_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./discover.page.html */ 37555);
/* harmony import */ var _discover_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover.page.scss */ 67117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);





let DiscoverPage = class DiscoverPage {
    constructor(location) {
        this.location = location;
        this.showHeader = false;
        this.items = [
            {
                name: 'Dany Trejo',
                profilePic: 'assets/chat/contacts/2.png',
                images: ['assets/chat/contacts/2.png', 'assets/chat/contacts/2.png', 'assets/chat/contacts/2.png', 'assets/chat/contacts/2.png']
            },
            {
                name: 'Theshan Senaviree',
                profilePic: 'assets/chat/contacts/3.png',
                images: ['assets/chat/contacts/2.png', 'assets/chat/contacts/2.png']
            },
            {
                name: 'New Person ',
                profilePic: 'assets/chat/contacts/4.png',
                images: ['assets/chat/contacts/2.png']
            },
            {
                name: 'This is Me',
                profilePic: 'assets/chat/contacts/5.png',
                images: ['assets/chat/contacts/2.png', 'assets/chat/contacts/2.png', 'assets/chat/contacts/2.png',]
            }
        ];
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    onScroll(e) {
        console.log(e.detail.currentY);
        if (e.detail.currentY > 200) {
            this.showHeader = true;
        }
        else {
            this.showHeader = false;
        }
    }
    ;
};
DiscoverPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
DiscoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-discover',
        template: _raw_loader_discover_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_discover_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DiscoverPage);



/***/ }),

/***/ 67117:
/*!**************************************************!*\
  !*** ./src/app/chat/discover/discover.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-header {\n  background-image: linear-gradient(to right, #039be5 0%, #039be5 100%);\n}\n\n.sc-ion-searchbar-md-h {\n  --border-radius: 20px !important;\n}\n\n.color-header {\n  background-image: linear-gradient(to right, #4cd080 0%, #4cd080 100%);\n  z-index: 500;\n}\n\n.cover-image {\n  width: 100%;\n  object-fit: cover;\n  height: 250px;\n}\n\n.img-perfil img {\n  width: 50%;\n  object-fit: cover;\n  border-radius: 100%;\n  border: 5px solid white;\n  position: absolute;\n  top: 95%;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n\n.text-perfil {\n  position: absolute;\n  top: 140%;\n  right: 50%;\n  transform: translate(50%, -50%);\n  color: black;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.camara-perfil {\n  color: #000000;\n  font-size: 20px;\n  position: absolute;\n  top: 120%;\n  left: 58%;\n  transform: translate(50%, -50%);\n}\n\n.camara-perfil ion-icon {\n  background-color: #e4e6eb;\n  padding-top: 7px;\n  padding-bottom: 8px;\n  padding-left: 8px;\n  padding-right: 8px;\n  border-radius: 30px;\n  border: 1px solid #d3d5da;\n}\n\n.camara-portada {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  font-size: 22px;\n}\n\n.camara-portada ion-icon {\n  background-color: #e4e6eb;\n  padding-top: 7px;\n  padding-bottom: 8px;\n  padding-left: 8px;\n  padding-right: 8px;\n  border-radius: 30px;\n  border: 1px solid #d3d5da;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxRUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLHFFQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUoiLCJmaWxlIjoiZGlzY292ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDM5YmU1IDAlLCAjMDM5YmU1IDEwMCUpO1xyXG59XHJcblxyXG4uc2MtaW9uLXNlYXJjaGJhci1tZC1oIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sb3ItaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjZDA4MCAwJSwgIzRjZDA4MCAxMDAlKTtcclxuICAgIHotaW5kZXg6IDUwMDtcclxufVxyXG5cclxuLmNvdmVyLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uaW1nLXBlcmZpbCBpbWcge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5NSU7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLnRleHQtcGVyZmlsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTQwJTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLy8gbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNhbWFyYS1wZXJmaWwge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEyMCU7XHJcbiAgICBsZWZ0OiA1OCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xyXG59XHJcblxyXG4uY2FtYXJhLXBlcmZpbCBpb24taWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNmViO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNWRhO1xyXG59XHJcblxyXG4uY2FtYXJhLXBvcnRhZGEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5jYW1hcmEtcG9ydGFkYSBpb24taWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNmViO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNWRhO1xyXG59XHJcblxyXG4vLyBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAtOTBweDtsZWZ0OiAxMjBweFwiIl19 */");

/***/ }),

/***/ 37555:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/discover/discover.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\r\n    <div style=\"position: sticky;top:0px\" *ngIf=\"showHeader\" class=\"color-header\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col style=\"margin-top: 3px\" size=\"1\">\r\n                    <ion-icon (click)=\"goBack()\" style=\"font-size: 30px; color: #e4e6eb; margin: 0px 5px\" name=\"arrow-back-outline\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size=\"9\" style=\"color: #fff; margin-top: 7px; font-size: 1.2rem; margin-left: 14px;\">\r\n                    Momentos\r\n                </ion-col>\r\n                <ion-col size=\"1\">\r\n                    <ion-icon style=\"color: #fff;font-size: 1.8rem;\" name=\"camera\"></ion-icon>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </div>\r\n\r\n    <div style=\"position: relative; margin-bottom: 9rem;\">\r\n        <img class=\"cover-image\" src=\"assets/chat/discover/cover.png\">\r\n        <div style=\"position: absolute; top: 10px\">\r\n            <ion-icon (click)=\"goBack()\" style=\"font-size: 30px; color: #ffffff; margin: 0px 5px\" name=\"arrow-back-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"camara-portada\">\r\n            <ion-icon name=\"camera\"></ion-icon>\r\n        </div>\r\n        <div class=\"img-perfil\">\r\n            <img src=\"assets/chat/contacts/1.png\">\r\n        </div>\r\n        <div class=\"camara-perfil\">\r\n            <ion-icon name=\"camera\"></ion-icon>\r\n        </div>\r\n        <div class=\"text-perfil\">\r\n            Dany Trejo\r\n        </div>\r\n    </div>\r\n\r\n    <ion-grid *ngFor=\"let item of items\" style=\"border-bottom: 1px solid rgba(194,191,191,0.38); \">\r\n        <ion-row>\r\n            <ion-col size=\"2\" style=\"display: flex; align-items: center\">\r\n                <div>\r\n                    <img style=\"width: 45px; height: 45px; object-fit: cover; border-radius: 100%\" [src]=\"item.profilePic\">\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"display: flex; flex-direction: column; justify-content: center\">\r\n                <!-- <div style=\"color: #000000; font-weight: bold; display: flex; flex-direction: row;\">\r\n                    {{item.name}}\r\n\r\n\r\n                </div>\r\n                <div style=\"margin-top: 2px;\">\r\n                    Sub title will be here\r\n                </div> -->\r\n\r\n                <div style=\"margin-top: 10px;display: flex; justify-content: space-between;align-items: center\">\r\n\r\n                    <p style=\"display: block;color: #000000; font-weight: bold;\"> {{item.name}}</p>\r\n\r\n                    <p style=\"display: block;\">17/09/2021</p>\r\n\r\n                </div>\r\n                <div style=\"margin-top: 2px;\">\r\n                    Sub title will be here\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <!-- <ion-col size=\"2\"></ion-col> -->\r\n            <ion-col>\r\n                <ion-row>\r\n                    <ion-col style=\"padding: 2px; border: 1px;\" *ngFor=\"let i of item.images\" size=\"4\">\r\n                        <img style=\"width: 100%; height: auto; object-fit: cover;\" [src]=\"i\">\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n                <!-- <a style=\"text-decoration: none; font-size: 10px;\">Eliminar</a> -->\r\n                <ion-grid>\r\n                    <ion-row>\r\n\r\n                        <ion-col style=\"color: #65676b;\">\r\n                            <ion-icon name=\"heart-outline\"></ion-icon> Me gusta\r\n                        </ion-col>\r\n\r\n                        <ion-col style=\"color: #65676b;\">\r\n\r\n                            <ion-label>\r\n                                <ion-icon name=\"chatbox-outline\"></ion-icon> Comentar\r\n                            </ion-label>\r\n                        </ion-col>\r\n\r\n                        <ion-col style=\"color: #65676b;\">\r\n                            <ion-icon name=\"share-social-outline\"></ion-icon> Compartir\r\n                        </ion-col>\r\n\r\n                    </ion-row>\r\n                    <ion-input id=\"coment\" placeholder=\"Escribir comentario...\" style=\"background-color: #ECF3FF; border-radius: 20px;\"></ion-input>\r\n                </ion-grid>\r\n                <!-- <ion-item-divider>\r\n                    <ion-label>\r\n                        Informaci??n\r\n                    </ion-label>\r\n                </ion-item-divider> -->\r\n                <!-- <p style=\"color: rgba(128, 128, 128, 0.541);\">-----------------------<span style=\"font-size: 15px;\">Informaci??n</span>----------------------</p> -->\r\n                <!-- <ion-grid style=\"white-space: nowrap;\">\r\n                    <ion-row>\r\n                        <ion-col> <span style=\"font-size: 10px;color: rgba(128, 128, 128, 0.541); padding: 0;\"> C??digo de busqueda: 187620</span></ion-col>\r\n                        <ion-col style=\"display:grid; justify-content: right;\">\r\n                            <ion-icon name=\"globe-outline\" style=\"color: rgba(128, 128, 128, 0.541);font-size: 1.3rem;\"></ion-icon>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid> -->\r\n\r\n                <!-- \r\n                <ion-item>\r\n                 \r\n                    <ion-textarea placeholder=\"Comentar...\"></ion-textarea>\r\n                </ion-item> -->\r\n                <!-- <div>\r\n                    <div style=\"margin:10px; padding:10px;text-align:center;cursor:pointer;color: white; background: #4cd080; border-radius: 30px\">\r\n                        Comentar\r\n                    </div>\r\n                </div> -->\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_discover_discover_module_ts.js.map