(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_home_item-twelve_nextautos_nextautos_module_ts"],{

/***/ 9313:
/*!************************************************************************!*\
  !*** ./src/app/home/item-twelve/nextautos/nextautos-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NextautosPageRoutingModule": () => (/* binding */ NextautosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _nextautos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextautos.page */ 87525);




const routes = [
    {
        path: '',
        component: _nextautos_page__WEBPACK_IMPORTED_MODULE_0__.NextautosPage
    }
];
let NextautosPageRoutingModule = class NextautosPageRoutingModule {
};
NextautosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NextautosPageRoutingModule);



/***/ }),

/***/ 47689:
/*!****************************************************************!*\
  !*** ./src/app/home/item-twelve/nextautos/nextautos.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NextautosPageModule": () => (/* binding */ NextautosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _nextautos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextautos-routing.module */ 9313);
/* harmony import */ var _nextautos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nextautos.page */ 87525);







let NextautosPageModule = class NextautosPageModule {
};
NextautosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _nextautos_routing_module__WEBPACK_IMPORTED_MODULE_0__.NextautosPageRoutingModule
        ],
        declarations: [_nextautos_page__WEBPACK_IMPORTED_MODULE_1__.NextautosPage]
    })
], NextautosPageModule);



/***/ }),

/***/ 87525:
/*!**************************************************************!*\
  !*** ./src/app/home/item-twelve/nextautos/nextautos.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NextautosPage": () => (/* binding */ NextautosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_nextautos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./nextautos.page.html */ 39969);
/* harmony import */ var _nextautos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nextautos.page.scss */ 27464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modal_precio_auto_modal_precio_auto_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-precio-auto/modal-precio-auto.page */ 30188);









let NextautosPage = class NextautosPage {
    constructor(location, router, modalController) {
        this.location = location;
        this.router = router;
        this.modalController = modalController;
        this.slideOpts = {};
        this.slides = [];
        this.activeTab = 0;
        this.activities = [];
        this.selectedCategory = 0;
        this.topSliderItems = [
            {
                title: 'Precio',
            },
            {
                title: 'Marca y Modelo',
            },
            {
                title: 'Año',
            },
            {
                title: 'Km',
            },
            {
                title: 'Ubicación',
            }
        ];
        this.items = [{
                id: 1,
                title: 'Refrigerador Qianku',
                subTitle: 'SubTitle',
                price: '€000',
                priceNote: '€30',
                img: 'assets/homePage/item-two/coche1.jpg',
                people: 'assets/homePage/item-two/g1.png',
            }, {
                id: 2,
                title: 'Refrigerador Qianku',
                subTitle: 'SubTitle',
                price: '€000',
                priceNote: '€30',
                img: 'assets/homePage/item-two/coche2.jpg',
                people: 'assets/homePage/item-two/g3.png',
            }, {
                id: 3,
                title: 'Refrigerador Qianku',
                subTitle: 'SubTitle',
                price: '€000',
                priceNote: '€30',
                img: 'assets/homePage/item-two/coche3.jpg',
            }, {
                id: 4,
                title: 'Refrigerador Qianku',
                subTitle: 'SubTitle',
                price: '€000',
                priceNote: '€30',
                img: 'assets/homePage/item-two/coche4.jpg',
                people: 'assets/homePage/item-two/g4.png',
            }, {
                id: 5,
                title: 'Refrigerador Qianku',
                subTitle: 'SubTitle',
                price: '€000',
                priceNote: '€30',
                img: 'assets/homePage/item-two/coche5.png',
            }, {
                id: 6,
                title: 'Refrigerador Qianku',
                subTitle: 'SubTitle',
                price: '€000',
                priceNote: '€30',
                img: 'assets/homePage/item-two/coche6.jpg',
            }];
    }
    selectCategory(index) {
        this.selectedCategory = index;
    }
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
    ngOnInit() {
        this.slides = [
            { id: 1, name: 'All activity' },
            { id: 2, name: 'Likes', notifications: 32 },
            { id: 3, name: 'Comments', notifications: 13 },
            { id: 4, name: 'Mentions' },
        ];
        this.slideOpts = {
            slidesPerView: this.checkScreen(),
            slideShadows: true
        };
    }
    checkScreen() {
        let innerWidth = window.innerWidth;
        console.log(innerWidth);
        switch (true) {
            case 340 > innerWidth:
                return this.checkLength(3.6);
            case 340 <= innerWidth && innerWidth <= 400:
                return this.checkLength(3.6);
            case 401 <= innerWidth && innerWidth <= 700:
                return this.checkLength(4.6);
            case 701 <= innerWidth && innerWidth <= 900:
                return this.checkLength(5.6);
            case 901 <= innerWidth:
                return this.checkLength(6.6);
        }
    }
    checkLength(val) {
        let length = this.slides.length;
        return val < length ? val : length;
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
    goBack() {
        this.location.back();
    }
    AutoPrecio() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_precio_auto_modal_precio_auto_page__WEBPACK_IMPORTED_MODULE_2__.ModalPrecioAutoPage,
                cssClass: 'my-custom-class-AutoPrecio'
            });
            return yield modal.present();
        });
    }
};
NextautosPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
NextautosPage.propDecorators = {
    ionSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSlides,] }]
};
NextautosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-nextautos',
        template: _raw_loader_nextautos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_nextautos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NextautosPage);



/***/ }),

/***/ 27464:
/*!****************************************************************!*\
  !*** ./src/app/home/item-twelve/nextautos/nextautos.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  background-image: linear-gradient(to right, #fb0f3a 0%, #fb0f3a 100%);\n}\n\n.top-item-slider {\n  overflow: auto;\n  white-space: nowrap;\n  display: flex;\n  -webkit-overflow-scrolling: touch;\n  color: #0000008c;\n  justify-content: space-between;\n}\n\n.top-item {\n  margin: 10px 6px 10px 2px;\n  padding-bottom: 5px;\n}\n\n.top-item-selected {\n  color: #0000008c;\n}\n\n.top-span-selected {\n  background-color: rgba(0, 0, 0, 0.048) !important;\n}\n\n.sticky {\n  position: sticky;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5leHRhdXRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxRUFBQTtBQUFKOztBQVFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7QUFMSjs7QUFTQTtFQUNJLGlEQUFBO0FBTko7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLE1BQUE7QUFQSiIsImZpbGUiOiJuZXh0YXV0b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKCB0b29sYmFybWFpOiAjZmIwZjNhLCApO1xyXG5pb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZiMGYzYSAwJSwgI2ZiMGYzYSAxMDAlKTtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2hvbWVQYWdlL2h1ZWxsYTMuc3ZnJyk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9ob21lUGFnZS9iYW5uZXIucG5nJykgIWltcG9ydGFudDtcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLnRvcC1pdGVtLXNsaWRlciB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgY29sb3I6ICMwMDAwMDA4YztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRvcC1pdGVtIHtcclxuICAgIG1hcmdpbjogMTBweCA2cHggMTBweCAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4udG9wLWl0ZW0tc2VsZWN0ZWQge1xyXG4gICAgY29sb3I6ICMwMDAwMDA4YztcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwMDAwO1xyXG59XHJcblxyXG4udG9wLXNwYW4tc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0OCkgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwMDAwO1xyXG59XHJcblxyXG4uc3RpY2t5IHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi8vIGlvbi1zbGlkZXMge1xyXG4vLyAgICAgaW9uLXNsaWRlIHtcclxuLy8gICAgICAgICBpb24tZmFiIHtcclxuLy8gICAgICAgICAgICAgbWFyZ2luOiAtMTFweCAwIDAgLTZweDtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuLy8gICAgICAgICAgICAgaW9uLWZhYi1idXR0b24ge1xyXG4vLyAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbi8vICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpb24tYnV0dG9uIHtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiAyLjJlbTtcclxuLy8gICAgICAgICAgICAgaW9uLXRleHQge1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLmFjdGl2ZS10YWI6YWN0aXZlIHtcclxuLy8gICAgICAgICAgICAgaW9uLXRleHQge1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuLy8gICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAxLCAxKTtcclxuLy8gICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbi8vICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcclxuLy8gICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4vLyAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDIsIDAsIDAuNTgsIDEpO1xyXG4vLyAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuLy8gICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQyLCAwLCAxLCAxKTtcclxuLy8gICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4vLyAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuNTgsIDEpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBpb24tbGlzdCB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4vLyAgICAgcGFkZGluZzogMDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbi8vICAgICBpb24taXRlbSB7XHJcbi8vICAgICAgICAgd2lkdGg6IDk1JTtcclxuLy8gICAgICAgICBtYXJnaW46IGF1dG87XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41dmg7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA1cHg7XHJcbi8vICAgICAgICAgaW9uLXRodW1ibmFpbC5waG90byB7XHJcbi8vICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICAgICAgbWluLXdpZHRoOiAycmVtO1xyXG4vLyAgICAgICAgICAgICBtaW4taGVpZ2h0OiAycmVtO1xyXG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgICAgICAgICAgIGltZyB7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlvbi10aHVtYm5haWwucGhvdG86OmJlZm9yZSB7XHJcbi8vICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgdG9wOiAwO1xyXG4vLyAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgICAgICAgICByaWdodDogMDtcclxuLy8gICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNDMTM1ODQsICNFMTMwNkMsICNGRDFEMUQsICNGNTYwNDAsICNGNzc3MzcsICNGQ0FGNDUsICNGRkRDODApO1xyXG4vLyAgICAgICAgICAgICAtd2Via2l0LW1hc2s6IGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCkgY29udGVudC1ib3gsIGxpbmVhci1ncmFkaWVudCgjZmZmIDAgMCk7XHJcbi8vICAgICAgICAgICAgIC13ZWJraXQtbWFzay1jb21wb3NpdGU6IGRlc3RpbmF0aW9uLW91dDtcclxuLy8gICAgICAgICAgICAgbWFzay1jb21wb3NpdGU6IGV4Y2x1ZGU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlvbi1sYWJlbCB7XHJcbi8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuLy8gICAgICAgICAgICAgcCB7XHJcbi8vICAgICAgICAgICAgICAgICBpb24tdGV4dCB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAudGltZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBpb24tcm93IHtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIC5saWtlOmFjdGl2ZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogM2VtO1xyXG4vLyAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpb24tdGh1bWJuYWlsLnBvc3Qge1xyXG4vLyAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4vLyAgICAgICAgICAgICBtaW4td2lkdGg6IDRyZW07XHJcbi8vICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDRyZW07XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbi8vICAgICAgICAgICAgIGltZyB7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9Il19 */");

/***/ }),

/***/ 39969:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-twelve/nextautos/nextautos.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar color=\"red\">\r\n        <ion-buttons slot=\"start\" (click)=\"goBack()\">\r\n\r\n            <ion-icon style=\"font-size: 30px; color: white;\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-buttons>\r\n        <ion-title class=\"font-mai\" style=\"color: white;\">Autos</ion-title>\r\n    </ion-toolbar>\r\n    <!-- <ion-row>\r\n        <ion-slides [options]=\"slideOpts\" *ngIf=\"slides?.length > 0\">\r\n            <ion-slide *ngFor=\"let item of slides; let i = index\">\r\n                <ion-col>\r\n                                        <ion-button [class.active-tab]=\"activeTab == i\" [color]=\"activeTab == i ? 'dark' : 'white'\" expand=\"block\" mode=\"ios\" shape=\"round\">\r\n                        <ion-text>{{item?.name}}</ion-text>\r\n                    </ion-button>\r\n                </ion-col>\r\n            </ion-slide>\r\n        </ion-slides>\r\n    </ion-row> -->\r\n\r\n</ion-header>\r\n\r\n<div class=\"gradient sticky\" style=\"margin-top: 10px;\">\r\n    <div class=\"top-item-slider\">\r\n        <div (click)=\"AutoPrecio()\" (click)=\"selectCategory(i)\" [class]=\"selectedCategory===i? 'top-item top-item-selected':'top-item'\" *ngFor=\"let item of topSliderItems;let i = index\">\r\n            <span (click)=\"selectCategory(i)\" [class]=\"selectedCategory===i? 'top-item top-span-selected':'top-item'\" style=\"padding: 5px 10px 5px 10px; border: 1px solid rgba(128, 128, 128, 0.267); border-radius: 20px; font-size: 1.2rem;\">{{item.title}} <ion-icon name=\"chevron-down-outline\" style=\"font-size: 1rem;\" ></ion-icon></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <ion-content>\r\n\r\n</ion-content> -->\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_item-twelve_nextautos_nextautos_module_ts.js.map