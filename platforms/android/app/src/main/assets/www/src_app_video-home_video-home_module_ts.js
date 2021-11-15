(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_video-home_video-home_module_ts"],{

/***/ 17755:
/*!*********************************************************!*\
  !*** ./src/app/video-home/video-home-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoHomePageRoutingModule": () => (/* binding */ VideoHomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _video_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-home.page */ 37183);




const routes = [
    {
        path: '',
        component: _video_home_page__WEBPACK_IMPORTED_MODULE_0__.VideoHomePage
    }
];
let VideoHomePageRoutingModule = class VideoHomePageRoutingModule {
};
VideoHomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VideoHomePageRoutingModule);



/***/ }),

/***/ 63961:
/*!*************************************************!*\
  !*** ./src/app/video-home/video-home.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoHomePageModule": () => (/* binding */ VideoHomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _video_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-home-routing.module */ 17755);
/* harmony import */ var _video_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-home.page */ 37183);







let VideoHomePageModule = class VideoHomePageModule {
};
VideoHomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _video_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.VideoHomePageRoutingModule
        ],
        declarations: [_video_home_page__WEBPACK_IMPORTED_MODULE_1__.VideoHomePage]
    })
], VideoHomePageModule);



/***/ }),

/***/ 37183:
/*!***********************************************!*\
  !*** ./src/app/video-home/video-home.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoHomePage": () => (/* binding */ VideoHomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_video_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./video-home.page.html */ 13877);
/* harmony import */ var _video_home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-home.page.scss */ 60553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let VideoHomePage = class VideoHomePage {
    constructor() {
        this.selectedCategory = 0;
        this.topSliderItems = [
            {
                title: 'Todo',
            },
            {
                title: 'gracioso',
            },
            {
                title: 'Película',
            },
            {
                title: 'Romántico',
            },
            {
                title: 'Aaaaa',
            },
            {
                title: 'Cbbb',
            },
            {
                title: 'Dbbb',
            },
            {
                title: 'Ebbb',
            }
        ];
        this.items = [
            {
                title: 'Refrigerador Qianku this is Qianku',
                img: 'assets/homePage/items/virtical/8.jpg',
                profile: 'assets/homePage/items/virtical/profile.png',
                price: '$100',
                priceTag: '$200',
                upPriceTag: 'Price Up description'
            },
            {
                title: 'Refrigerador Qianku',
                img: 'assets/homePage/items/virtical/6.jpg',
                profile: 'assets/homePage/items/virtical/profile.png',
                price: '$200',
                priceTag: '$300',
                upPriceTag: 'Price Up description'
            },
            {
                title: 'Refrigerador Qianku',
                img: 'assets/homePage/items/virtical/9.jpg',
                profile: 'assets/homePage/items/virtical/profile.png',
                price: '$300',
                priceTag: '$400',
                upPriceTag: 'Price Up description'
            },
            {
                title: 'Refrigerador Qianku',
                img: 'assets/homePage/items/virtical/9.jpg',
                profile: 'assets/homePage/items/virtical/profile.png',
                price: '$300',
                priceTag: '$400',
                upPriceTag: 'Price Up description'
            },
            {
                title: 'Refrigerador Qianku',
                img: 'assets/homePage/items/virtical/9.jpg',
                profile: 'assets/homePage/items/virtical/profile.png',
                price: '$300',
                priceTag: '$400',
                upPriceTag: 'Price Up description'
            }
        ];
    }
    ngOnInit() {
    }
    selectCategory(index) {
        this.selectedCategory = index;
    }
};
VideoHomePage.ctorParameters = () => [];
VideoHomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-video-home',
        template: _raw_loader_video_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_video_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VideoHomePage);



/***/ }),

/***/ 60553:
/*!*************************************************!*\
  !*** ./src/app/video-home/video-home.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-header {\n  background-image: url('Background.png');\n}\n\ninput {\n  padding-left: 50px;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n}\n\nion-menu-button {\n  color: #FFF;\n}\n\n::-webkit-input-placeholder {\n  text-align: left;\n}\n\nion-header::after {\n  background-image: none;\n}\n\nion-buttons::after {\n  background-image: none;\n}\n\ninput {\n  box-sizing: border-box;\n}\n\n.count-down-digit-container {\n  color: #ffff;\n  background: #bb0000;\n  text-align: center;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 21px;\n  height: 21px;\n  margin-left: 2px;\n}\n\n.count-down-dot-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2px;\n  font-weight: bold;\n}\n\n.gradient {\n  height: 27px;\n  text-align: center;\n}\n\n.top-item-slider {\n  overflow: auto;\n  white-space: nowrap;\n  display: flex;\n  -webkit-overflow-scrolling: touch;\n  color: #FFFFFF;\n  justify-content: space-between;\n}\n\n.top-item {\n  margin: 0px 10px 10px 10px;\n  padding-bottom: 5px;\n}\n\n.top-item-selected {\n  color: #fcf29b;\n  border-bottom: 3px solid white;\n}\n\n.sticky {\n  position: sticky;\n  top: 0;\n}\n\n.container {\n  scroll-behavior: smooth;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  overflow: auto;\n  white-space: nowrap;\n  display: flex;\n  -webkit-overflow-scrolling: touch;\n}\n\n.oneItem {\n  box-sizing: border-box;\n  display: inline-block;\n  background: #fcfcfc;\n  padding: 15px 0px 10px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.img-container {\n  background: #FFFFFF;\n  height: 113px;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.img-container-two {\n  background: #FFFFFF;\n  height: 142px;\n  width: 224px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.slider-img {\n  height: 113px;\n  width: 100px;\n  object-fit: cover;\n}\n\n.slider-img-two {\n  height: 142px;\n  width: 244px;\n  object-fit: cover;\n}\n\n.item-title-div {\n  font-weight: bold;\n  font-family: Arial;\n  margin: 5px 0;\n  padding: 1%;\n  width: 80px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUVFLHVDQUFBO0FBQUY7O0FBT0E7RUFDRSxrQkFBQTtBQUpGOztBQU9BOzs7RUFHRSxhQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGOztBQU9BO0VBQ0Usc0JBQUE7QUFKRjs7QUFPQTtFQUNFLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxzQkFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFRRSxZQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQVhGOztBQWNBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQVhGOztBQWNBO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0FBWEY7O0FBY0E7RUFDRSxnQkFBQTtFQUNBLE1BQUE7QUFYRjs7QUFhQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FBVkY7O0FBYUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBVkY7O0FBYUE7RUFDRSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFYRjs7QUFjQTtFQUNFLG1CQUFBO0VBRUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVpGOztBQWVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVpGOztBQWVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVpGOztBQWVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVpGIiwiZmlsZSI6InZpZGVvLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYjBmM2EgMCUsICNmYjBmM2EgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaGVhZGVyL0JhY2tncm91bmQucG5nJyk7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvaG9tZVBhZ2UvYmFubmVyLnBuZycpICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyxcclxuc2VsZWN0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gIGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG5pb24tYnV0dG9uczo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY291bnQtZG93bi1kaWdpdC1jb250YWluZXIge1xyXG4gIGNvbG9yOiAjZmZmZjtcclxuICBiYWNrZ3JvdW5kOiAjYmIwMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAyMXB4O1xyXG4gIGhlaWdodDogMjFweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcblxyXG4uY291bnQtZG93bi1kb3QtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmdyYWRpZW50IHtcclxuICAvLyAjZDcwMDAwXHJcbiAgLy8gI2Y0NDMzNlxyXG4gIC8vICNmYTY4NWVcclxuICAvLyAjZGYzMzMzXHJcbiAgLy8gI2Y0NDMzNlxyXG4gIC8vICNmZjNiMzBcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYjBmM2EgMCUsICNmYjBmM2EgMTAwJSk7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRvcC1pdGVtLXNsaWRlciB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50b3AtaXRlbSB7XHJcbiAgbWFyZ2luOiAwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnRvcC1pdGVtLXNlbGVjdGVkIHtcclxuICBjb2xvcjogI2ZjZjI5YjtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5zdGlja3kge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbn1cclxuXHJcbi5vbmVJdGVtIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xyXG4gIHBhZGRpbmc6IDE1cHggMHB4IDEwcHggMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGhlaWdodDogMTEzcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmltZy1jb250YWluZXItdHdvIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGhlaWdodDogMTQycHg7XHJcbiAgd2lkdGg6IDIyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlci1pbWcge1xyXG4gIGhlaWdodDogMTEzcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uc2xpZGVyLWltZy10d28ge1xyXG4gIGhlaWdodDogMTQycHg7XHJcbiAgd2lkdGg6IDI0NHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uaXRlbS10aXRsZS1kaXYge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICBtYXJnaW46IDVweCAwO1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 13877:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-home/video-home.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n    <div style=\"height:65px; display: flex; align-items: center; justify-content: space-around\">\r\n\r\n        <div style=\"position:relative;margin-right: 10px;width: 80%; height: 35px; border-radius: 20px; border: 0px;\">\r\n            <input placeholder=\"Buscar\" style=\"width: 100%; height: 35px; border-radius: 20px; border: 0px; margin-left: 10px !important;\" />\r\n            <div style=\"position: absolute; left: 25px; top: 10px\">\r\n                <img src=\"assets/homePage/searchIcon.png\" style=\"width: 13px;\" />\r\n            </div>\r\n            <div style=\"position: absolute; right: 10px;top: 10px\">\r\n\r\n                <img src=\"assets/homePage/cameraIcon.png\" style=\"width: 13px;\" />\r\n            </div>\r\n        </div>\r\n\r\n        <div style=\"margin-right: 15px; margin-left: 10px;\">\r\n            <a href=\"\"> <img src=\"assets/homePage/scanIcon.png\" href style=\"width: 30px\" /></a>\r\n        </div>\r\n        <div style=\"margin-right: 15px\">\r\n            <img src=\"assets/homePage/plusIcon.png\" style=\"width: 30px;\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"gradient sticky\">\r\n        <div class=\"top-item-slider\">\r\n            <div (click)=\"selectCategory(i)\" [class]=\"selectedCategory===i? 'top-item top-item-selected':'top-item'\" *ngFor=\"let item of topSliderItems;let i = index\">\r\n                {{item.title}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid style=\"margin-top: 10px\">\r\n        <ion-row>\r\n            <ion-col style=\"font-weight: bold\">\r\n                Videos en Tendencia\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <div class=\"container\">\r\n        <div *ngFor=\"let item of items;\">\r\n            <div class=\"oneItem\">\r\n                <div>\r\n                    <div style=\"text-align: center; display: flex; align-items: center; justify-content: center\">\r\n                        <div class=\"img-container\">\r\n                            <div style=\"position: relative\">\r\n                                <ion-icon style=\"position: absolute; top: 42px; left: 35px; color: white; font-size: 30px\" name=\"play\"></ion-icon>\r\n                                <img class=\"slider-img\" [src]='item.img' />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <ion-grid style=\"margin-top: 10px\">\r\n        <ion-row>\r\n            <ion-col style=\"font-weight: bold\">\r\n                Video popular\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <div class=\"container\">\r\n        <div *ngFor=\"let item of items;\">\r\n            <div class=\"oneItem\">\r\n                <div>\r\n                    <div style=\"text-align: center; display: flex; align-items: center; justify-content: center\">\r\n                        <div class=\"img-container\">\r\n                            <div style=\"position: relative\">\r\n                                <ion-icon style=\"position: absolute; top: 42px; left: 35px; color: white; font-size: 30px\" name=\"play\"></ion-icon>\r\n                                <img class=\"slider-img\" [src]='item.img' />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <ion-grid style=\"margin-top: 10px\">\r\n        <ion-row>\r\n            <ion-col style=\"font-weight: bold\">\r\n                Video mejor calificado\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n    <div class=\"container\">\r\n        <div *ngFor=\"let item of items;\">\r\n            <div class=\"oneItem\">\r\n                <div>\r\n                    <div style=\"text-align: center; display: flex; align-items: center; justify-content: center\">\r\n                        <div class=\"img-container-two\">\r\n                            <div style=\"position: relative\">\r\n                                <ion-icon style=\"position: absolute; top: 55px; left: 95px; color: white; font-size: 30px\" name=\"play\"></ion-icon>\r\n                                <img class=\"slider-img-two\" [src]='item.img' />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_video-home_video-home_module_ts.js.map