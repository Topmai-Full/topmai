(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_chats-list_chats-list_module_ts"],{

/***/ 80936:
/*!**************************************************************!*\
  !*** ./src/app/chat/chats-list/chats-list-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsListPageRoutingModule": () => (/* binding */ ChatsListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _chats_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats-list.page */ 62752);




const routes = [
    {
        path: '',
        component: _chats_list_page__WEBPACK_IMPORTED_MODULE_0__.ChatsListPage
    }
];
let ChatsListPageRoutingModule = class ChatsListPageRoutingModule {
};
ChatsListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatsListPageRoutingModule);



/***/ }),

/***/ 39099:
/*!******************************************************!*\
  !*** ./src/app/chat/chats-list/chats-list.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsListPageModule": () => (/* binding */ ChatsListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _chats_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats-list-routing.module */ 80936);
/* harmony import */ var _chats_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats-list.page */ 62752);







let ChatsListPageModule = class ChatsListPageModule {
};
ChatsListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chats_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatsListPageRoutingModule
        ],
        declarations: [_chats_list_page__WEBPACK_IMPORTED_MODULE_1__.ChatsListPage]
    })
], ChatsListPageModule);



/***/ }),

/***/ 62752:
/*!****************************************************!*\
  !*** ./src/app/chat/chats-list/chats-list.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsListPage": () => (/* binding */ ChatsListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chats_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chats-list.page.html */ 34483);
/* harmony import */ var _chats_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats-list.page.scss */ 71145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let ChatsListPage = class ChatsListPage {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.chatsList = [
            {
                profilePic: 'assets/chat/chatList/1.png',
                name: 'Kasun Chandika ',
                lastMsg: 'My last message',
                date: '18/06/21',
            },
            {
                profilePic: 'assets/chat/chatList/2.png',
                name: 'Chandika Rathnayake',
                lastMsg: 'New Chat',
                date: '18/06/21',
                mute: true
            },
            {
                profilePic: 'assets/chat/chatList/3.png',
                name: 'Theshan Senavirat',
                lastMsg: 'My last message',
                date: '18/06/21',
            },
            {
                profilePic: 'assets/chat/chatList/4.png',
                name: 'Tom and Jerry',
                lastMsg: 'My last message',
                date: '18/06/21',
            },
            {
                profilePic: 'assets/chat/chatList/dany.jpg',
                name: 'Giovani Brito',
                lastMsg: 'My last message',
                date: '18/06/21',
            },
            {
                profilePic: 'assets/chat/chatList/javi.jpg',
                name: 'Javier Trejo',
                lastMsg: 'My last message',
                date: '18/06/21',
            },
            {
                profilePic: 'assets/chat/chatList/topmai.png',
                name: 'Topmai',
                lastMsg: 'My last message',
                date: '18/06/21',
            },
        ];
    }
    ngOnInit() {
    }
    goBack() {
        // this.location.back();
        this.router.navigate([`tabs`]);
    }
    goChat() {
        this.router.navigate([`chat/one-chat`]);
    }
};
ChatsListPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ChatsListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-chats-list',
        template: _raw_loader_chats_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chats_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatsListPage);



/***/ }),

/***/ 71145:
/*!******************************************************!*\
  !*** ./src/app/chat/chats-list/chats-list.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-header {\n  background-image: linear-gradient(to right, #4cd080 0%, #4cd080 100%);\n}\n\ninput {\n  padding-left: 50px;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n}\n\nion-menu-button {\n  color: #FFF;\n}\n\n::-webkit-input-placeholder {\n  text-align: left;\n}\n\nion-header::after {\n  background-image: none;\n}\n\nion-buttons::after {\n  background-image: none;\n}\n\ninput {\n  box-sizing: border-box;\n}\n\nhr {\n  width: calc(100% - 65px);\n  background: #d4d3d3;\n  height: 1px;\n}\n\n.profilePic {\n  display: block;\n  height: 45px;\n  width: 45px;\n  object-fit: cover;\n  border-radius: 100%;\n}\n\n.topchat-title {\n  color: #fff;\n  font-size: 1.2rem;\n}\n\n.sc-ion-searchbar-md-h {\n  --border-radius: 20px !important;\n}\n\n.color-header {\n  background-image: linear-gradient(to right, #4cd080 0%, #4cd080 100%);\n}\n\n.font-mai {\n  font-family: \"Arista\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksK0JBQUE7QUFDUjs7QUFFSTtFQUNJLHFFQUFBO0FBQ1I7O0FBRUk7RUFDSSxrQkFBQTtBQUNSOztBQUVJOzs7RUFHSSxhQUFBO0FBQ1I7O0FBRUk7RUFDSSxXQUFBO0FBQ1I7O0FBRUs7RUFDRyxnQkFBQTtBQUNSOztBQUVJO0VBQ0ksc0JBQUE7QUFDUjs7QUFFSTtFQUNJLHNCQUFBO0FBQ1I7O0FBRUk7RUFDSSxzQkFBQTtBQUNSOztBQUVJO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDUjs7QUFFSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFFSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNSOztBQUVJO0VBQ0ksZ0NBQUE7QUFDUjs7QUFFSTtFQUdJLHFFQUFBO0FBRFI7O0FBSUk7RUFDSSxxQkFBQTtBQURSIiwiZmlsZSI6ImNoYXRzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGNkMDgwIDAlLCAjNGNkMDgwIDEwMCUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dDpmb2N1cyxcclxuICAgIHRleHRhcmVhOmZvY3VzLFxyXG4gICAgc2VsZWN0OmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tbWVudS1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24taGVhZGVyOjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWJ1dHRvbnM6OmFmdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaHIge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2NXB4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZDRkM2QzO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvZmlsZVBpYyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCVcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvcGNoYXQtdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2MtaW9uLXNlYXJjaGJhci1tZC1oIHtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbG9yLWhlYWRlciB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJlNzdmMSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogIzJlNzdmMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjZDA4MCAwJSwgIzRjZDA4MCAxMDAlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvbnQtbWFpIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0FyaXN0YSc7XHJcbiAgICB9Il19 */");

/***/ }),

/***/ 34483:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chats-list/chats-list.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header [translucent]=\"true\" style=\"height:65px; display: flex; align-items: center; justify-content: space-around\">\r\n    <ion-icon (click)=\"goBack()\" style=\"font-size: 30px; color: white; margin: 0px 5px\" name=\"chevron-back-outline\"></ion-icon>\r\n\r\n    <div style=\"position:relative;margin-right: 10px;width: 80%; height: 35px; border-radius: 20px; border: 0px;\">\r\n        <input placeholder=\"Buscar\" style=\"width: 100%; height: 35px; border-radius: 20px; border: 0px\" />\r\n        <div style=\"position: absolute; left: 15px; top: 6px\">\r\n            <img src=\"assets/homePage/searchIcon.png\" style=\"width: 23px;\" />\r\n        </div>\r\n\r\n    </div>\r\n    <div>\r\n        <img src=\"assets/homePage/scanIcon.png\" style=\"width: 30px\" />\r\n\r\n    </div>\r\n\r\n    <div style=\"text-align: center\">\r\n        <ion-icon style=\"color: white;font-size: 25px;margin-left: 10px\" name=\"ellipsis-vertical\"></ion-icon>\r\n    </div>\r\n\r\n</ion-header> -->\r\n\r\n\r\n<!-- <ion-header [translucent]=\"true\" class=\"color-header\">\r\n\r\n    <ion-grid>\r\n\r\n\r\n        <ion-row>\r\n            <ion-col size=\"1\">\r\n                <ion-icon (click)=\"goBack()\" style=\"font-size: 30px; color: white; margin: 0px 5px\" name=\"chevron-back-outline\"></ion-icon>\r\n\r\n            </ion-col>\r\n            <ion-col class=\"font-mai\" style=\"color: #fff; margin-top: 9px; font-size: 1.5rem; margin-left: 3px;\">\r\n                topmai\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n                <img src=\"assets/homePage/scanIcon.png\" style=\"width: 25px\" />\r\n                <ion-icon style=\"color: white;font-size: 25px;margin-left: 10px\" name=\"ellipsis-vertical\"></ion-icon>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-searchbar class=\"searchs\"></ion-searchbar>\r\n    </ion-grid>\r\n</ion-header> -->\r\n<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar color=\"red\">\r\n        <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n            <ion-icon style=\"font-size: 30px; color: white;\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\" (click)=\"goBack()\">\r\n            <img src=\"assets/homePage/scanIcon.png\" style=\"width: 25px\" />\r\n            <ion-icon style=\"color: white;font-size: 25px;margin-left: 10px\" name=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-buttons>\r\n\r\n        <ion-title class=\"font-mai\" style=\"text-align: center; color: white;font-size: 1.5rem;\">topmai</ion-title>\r\n    </ion-toolbar>\r\n\r\n    <ion-searchbar mode='ios' style=\"margin-top: 0;\" color='light' placeholder='Buscar...'></ion-searchbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n    <div *ngFor=\"let item of chatsList\">\r\n        <div (click)=\"goChat()\" style=\"margin:10px;display: flex;align-items: stretch;justify-content: space-between\">\r\n            <img class=\"profilePic\" [src]=\"item.profilePic\">\r\n            <div style=\"width: 60%; margin-left: 10px;display: flex;align-items: center\">\r\n                <div style=\"width: 100%\">\r\n                    <div style=\"font-size: 18px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                        {{item.name}}\r\n                    </div>\r\n                    <div style=\"margin-top:5px;color: gray;font-size: 14px;width:70%;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                        {{item.lastMsg}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div style=\"display:flex; flex-direction:column; justify-content:space-between;color: gray;width: 20%; text-align: right;font-size: 14px\">\r\n                <div>\r\n                    {{item.date}}\r\n                </div>\r\n                <div>\r\n                    <ion-icon *ngIf=\"item.mute===true\" name=\"volume-mute-outline\"></ion-icon>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <hr align=\"right\">\r\n    </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_chats-list_chats-list_module_ts.js.map