(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_chat_submit-stage_submit-stage_module_ts"],{

/***/ 24120:
/*!******************************************************************!*\
  !*** ./src/app/chat/submit-stage/submit-stage-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitStagePageRoutingModule": () => (/* binding */ SubmitStagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _submit_stage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit-stage.page */ 79678);




const routes = [
    {
        path: '',
        component: _submit_stage_page__WEBPACK_IMPORTED_MODULE_0__.SubmitStagePage
    }
];
let SubmitStagePageRoutingModule = class SubmitStagePageRoutingModule {
};
SubmitStagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubmitStagePageRoutingModule);



/***/ }),

/***/ 75684:
/*!**********************************************************!*\
  !*** ./src/app/chat/submit-stage/submit-stage.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitStagePageModule": () => (/* binding */ SubmitStagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _submit_stage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit-stage-routing.module */ 24120);
/* harmony import */ var _submit_stage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-stage.page */ 79678);







let SubmitStagePageModule = class SubmitStagePageModule {
};
SubmitStagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _submit_stage_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubmitStagePageRoutingModule
        ],
        declarations: [_submit_stage_page__WEBPACK_IMPORTED_MODULE_1__.SubmitStagePage]
    })
], SubmitStagePageModule);



/***/ }),

/***/ 79678:
/*!********************************************************!*\
  !*** ./src/app/chat/submit-stage/submit-stage.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitStagePage": () => (/* binding */ SubmitStagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_submit_stage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./submit-stage.page.html */ 80889);
/* harmony import */ var _submit_stage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-stage.page.scss */ 27325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let SubmitStagePage = class SubmitStagePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    gotoHome() {
        this.router.navigate([`chat/chat-list`]);
    }
};
SubmitStagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SubmitStagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-submit-stage',
        template: _raw_loader_submit_stage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_submit_stage_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SubmitStagePage);



/***/ }),

/***/ 27325:
/*!**********************************************************!*\
  !*** ./src/app/chat/submit-stage/submit-stage.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header::after {\n  background-image: none;\n}\n\nion-grid {\n  padding: 0px;\n  --ion-grid-columns: 20;\n}\n\nhr {\n  color: red;\n  border-top: 1px solid #efefef;\n}\n\ninput {\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #efefef;\n  color: grey;\n  padding-bottom: 5px;\n  padding-left: 5px;\n}\n\ninput:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Ym1pdC1zdGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtBQUtGIiwiZmlsZSI6InN1Ym1pdC1zdGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5pb24tZ3JpZCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC0taW9uLWdyaWQtY29sdW1uczogMjA7XHJcbn1cclxuaHIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWY7XHJcbn1cclxuaW5wdXR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 80889:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/submit-stage/submit-stage.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-icon slot=\"start\" (click)=\"gotoHome()\" style=\"font-size: 30px;\" name=\"close-outline\"></ion-icon>\r\n        <ion-title style=\"font-size:15px;font-weight: bold;text-align: center\">Detalles del producto</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col style=\"display: flex; justify-content: center\">\r\n                <div style=\"border-radius: 15px; border: 1px solid #4cd080; padding: 5px\">\r\n                    <ion-icon style=\"font-size: 30px; color: #4cd080; display: block\" size=\"4\" name=\"camera\"></ion-icon>\r\n                    \r\n                </div>\r\n            </ion-col>\r\n           \r\n            \r\n            <ion-col style=\"display: flex; justify-content: center\">\r\n                <div style=\"border-radius: 15px; border: 1px solid #4cd080; padding: 5px\">\r\n                    <ion-icon style=\"font-size: 30px; color: #4cd080; display: block\" size=\"4\" name=\"camera\"></ion-icon>\r\n                    \r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"display: flex; justify-content: center\">\r\n                <div style=\"border-radius: 15px; border: 1px solid #4cd080; padding: 5px\">\r\n                    <ion-icon style=\"font-size: 30px; color: #4cd080; display: block\" size=\"4\" name=\"camera\"></ion-icon>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"display: flex; justify-content: center\">\r\n                <div style=\"border-radius: 15px; border: 1px solid #4cd080; padding: 5px\">\r\n                    <ion-icon style=\"font-size: 30px; color: #4cd080; display: block\" size=\"4\" name=\"camera\"></ion-icon>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"display: flex; justify-content: center\">\r\n                <div style=\"border-radius: 15px; border: 1px solid #4cd080; padding: 5px\">\r\n                    <ion-icon style=\"font-size: 30px; color: #4cd080; display: block\" size=\"4\" name=\"camera\"></ion-icon>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top: 10px\">\r\n            <ion-col style=\"display: flex; justify-content: center\">\r\n                <div style=\"border-radius: 15px; border: 1px solid #4cd080; padding: 5px\">\r\n                    <ion-icon style=\"font-size: 30px; color: #4cd080; display: block\" size=\"4\" name=\"camera\"></ion-icon>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"display: flex; justify-content: center\">\r\n                <div style=\"border-radius: 15px; border: 1px solid #4cd080; padding: 5px\">\r\n                    <ion-icon style=\"font-size: 30px; color: #4cd080; display: block\" size=\"4\" name=\"camera\"></ion-icon>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"display: flex; justify-content: center\">\r\n                <div style=\"border-radius: 15px; border: 1px solid #4cd080; padding: 5px\">\r\n                    <ion-icon style=\"font-size: 30px; color: #4cd080; display: block\" size=\"4\" name=\"camera\"></ion-icon>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"display: flex; justify-content: center\">\r\n                <div style=\"border-radius: 15px; border: 1px solid #4cd080; padding: 5px\">\r\n                    <ion-icon style=\"font-size: 30px; color: #4cd080; display: block\" size=\"4\" name=\"camera\"></ion-icon>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"display: flex; justify-content: center\">\r\n                <div style=\"border-radius: 15px; border: 1px solid #4cd080; padding: 5px\">\r\n                    <ion-icon style=\"font-size: 30px; color: #4cd080; display: block\" size=\"4\" name=\"camera\"></ion-icon>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <hr/>\r\n        <ion-row style=\"margin-top: 20px\">\r\n            <ion-col>\r\n                <input placeholder=\"Titulo*\" />\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top: 20px\">\r\n            <ion-col>\r\n                <input placeholder=\"Descripcion*\" />\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top: 20px\">\r\n            <ion-col>\r\n                <div style=\"position: absolute; right: 10px;top: 33px;display:flex;; align-items: center\">\r\n                    <span style=\"display: block;margin-left: 5px; color: #4cd080; padding-right: 20px\" >Editar</span>\r\n                    <ion-icon style=\"color: #c1c0c0; display: block\" name=\"chevron-forward-outline\"></ion-icon>\r\n                </div>\r\n                <div style=\"font-size: 14px; color: #656464\">Categoria*</div>\r\n                <div style=\"margin-top: 5px; display: flex; align-items: center\">\r\n                    \r\n                    <div style=\"margin-left: 5px;\">Electrodomesticos</div> \r\n                </div>  \r\n            </ion-col>\r\n           \r\n           \r\n        </ion-row>\r\n        <ion-row style=\"margin-top: 20px\">\r\n            <ion-col>\r\n                <ion-icon style=\"position: absolute; right: 10px; color: #c1c0c0\" name=\"chevron-forward-outline\"></ion-icon>\r\n                <input placeholder=\"Subcategoria\" />\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top: 20px\">\r\n            <ion-col>\r\n                <ion-icon style=\"position: absolute; right: 10px; color: #c1c0c0\" name=\"chevron-forward-outline\"></ion-icon>\r\n                <input placeholder=\"Estado del producto\" />\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top: 20px\">\r\n            <ion-col>\r\n                <ion-icon style=\"position: absolute; right: 10px; color: #c1c0c0\" name=\"chevron-forward-outline\"></ion-icon>\r\n                <input placeholder=\"Hashtags\" />\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top: 20px\">\r\n            <ion-col>\r\n                <input placeholder=\"Precio*\" />\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top: 20px;\">\r\n            <ion-col>\r\n                <div style=\"font-weight: bold; display: flex; justify-content: space-between\">\r\n                    <div>\r\n                        Envios\r\n                    </div>\r\n                    <div style=\"color: #4cd080\">\r\n                        + info\r\n                    </div>\r\n                </div>\r\n                <div style=\"color: #d2d1d1; margin-top: 10px\">\r\n                    Indicar tramo de peso:\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row style=\"margin-top: 5px\">\r\n            <ion-col style=\"text-align: center; display: flex; justify-content: center\" size=\"4\">\r\n                <div>\r\n                    <div>\r\n                        <ion-icon style=\"font-size: 30px;\" name=\"cube-outline\"></ion-icon>\r\n                    </div>\r\n                    <div>\r\n                        de 0<br>a 2kg\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"text-align: center; display: flex; justify-content: center\" size=\"4\">\r\n                <div>\r\n                    <div>\r\n                        <ion-icon style=\"font-size: 30px;\" name=\"cube-outline\"></ion-icon>\r\n                    </div>\r\n                    <div>\r\n                        de 2<br>a 5kg\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"text-align: center; display: flex; justify-content: center\" size=\"4\">\r\n                <div>\r\n                    <div>\r\n                        <ion-icon style=\"font-size: 30px;\" name=\"cube-outline\"></ion-icon>\r\n                    </div>\r\n                    <div>\r\n                        de 5<br>a 10kg\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"text-align: center; display: flex; justify-content: center\" size=\"4\">\r\n                <div>\r\n                    <div>\r\n                        <ion-icon style=\"font-size: 30px;\" name=\"cube-outline\"></ion-icon>\r\n                    </div>\r\n                    <div>\r\n                        de 10<br>a 20kg\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col style=\"text-align: center; display: flex; justify-content: center\" size=\"4\">\r\n                <div>\r\n                    <div>\r\n                        <ion-icon style=\"font-size: 30px;\" name=\"cube-outline\"></ion-icon>\r\n                    </div>\r\n                    <div>\r\n                        de 20<br>a 30kg\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-bottom: 30px\">\r\n            <ion-col>\r\n                <div style=\"color: #d2d1d1; margin-top: 10px\">\r\n                    gfdsgfdsgfdsgfdsg fds gfds gfd sgfds gfd sgfds gfds gfds gfds gfdsg fdsgfdsgfdsgfdsg fdsg fd\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n    <div>\r\n        <div style=\"margin:10px; padding:10px;text-align:center;cursor:pointer;color: white; background: #4cd080; border-radius: 30px\">\r\n            Subir producto\r\n        </div>\r\n    </div>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_chat_submit-stage_submit-stage_module_ts.js.map