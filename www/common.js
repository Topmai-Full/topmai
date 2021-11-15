(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["common"],{

/***/ 68225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 23150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 52954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 39461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 77330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 52377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 52954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 60408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 61269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 4059:
/*!****************************************************!*\
  !*** ./src/app/authentication/login/login.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 11460);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 39500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 73071);








let LoginPage = class LoginPage {
    constructor(modalController, userSrv, toastController, router) {
        this.modalController = modalController;
        this.userSrv = userSrv;
        this.toastController = toastController;
        this.router = router;
        this.formObj = {
            email: '',
            password: '',
            role: 'user'
        };
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
    ngOnInit() {
    }
    logn() {
        console.log(this.formObj);
        if (this.formObj.email === '' || this.formObj.password === '') {
            this.presentToast('Please fill felds');
        }
        else {
            this.userSrv.signin(this.formObj).subscribe((resp) => {
                if (resp.message === 'success') {
                    localStorage.setItem('user', JSON.stringify(resp.data));
                    this.dismiss();
                    this.presentToast('Successfully Registered');
                    this.router.navigate(['/tabs']);
                }
                else if (resp.message === 'Un Authorized') {
                    this.presentToast('Invalid credentials');
                }
                else {
                    console.log('something went wrong');
                }
            });
        }
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['mySlider',] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 28415:
/*!********************************************************!*\
  !*** ./src/app/authentication/sign-in/sign-in.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPage": () => (/* binding */ SignInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-in.page.html */ 4198);
/* harmony import */ var _sign_in_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.page.scss */ 29446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 73071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);







let SignInPage = class SignInPage {
    constructor(modalController, userSrv, toastController, router) {
        this.modalController = modalController;
        this.userSrv = userSrv;
        this.toastController = toastController;
        this.router = router;
        this.formObj = {
            name: '',
            email: '',
            password: '',
            role: 'user'
        };
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
    ngOnInit() {
    }
    create() {
        if (this.formObj.email === '' || this.formObj.name === '' || this.formObj.password === '') {
            this.presentToast('Please fill felds');
        }
        else {
            this.userSrv.register(this.formObj).subscribe((resp) => {
                if (resp.message === 'success') {
                    localStorage.setItem('user', JSON.stringify(resp.data));
                    this.dismiss();
                    this.presentToast('Successfully Registered');
                    this.router.navigate(['/tabs']);
                }
                else if (resp.message === 'Already Exist') {
                    this.presentToast('Email is already exist');
                }
                else {
                    console.log('something went wrong');
                }
            });
        }
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
};
SignInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
SignInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sign-in',
        template: _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sign_in_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignInPage);



/***/ }),

/***/ 24681:
/*!******************************************************!*\
  !*** ./src/app/chat/album-model/album-model.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumModelPage": () => (/* binding */ AlbumModelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_album_model_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./album-model.page.html */ 65842);
/* harmony import */ var _album_model_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./album-model.page.scss */ 81183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let AlbumModelPage = class AlbumModelPage {
    constructor(modalController, router) {
        this.modalController = modalController;
        this.router = router;
    }
    ngOnInit() {
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true,
        });
    }
    addCategory() {
        this.dismiss();
        this.router.navigate([`add-categories`]);
    }
    gotoDiscover() {
        this.router.navigate([`discover`]);
    }
    gotoDiscovertwo() {
        this.router.navigate([`discovertwo`]);
    }
};
AlbumModelPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AlbumModelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-album-model',
        template: _raw_loader_album_model_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_album_model_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlbumModelPage);



/***/ }),

/***/ 79894:
/*!*********************************************************************!*\
  !*** ./src/app/chat/one-chat/payment-dialog/payment-dialog.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDialogPage": () => (/* binding */ PaymentDialogPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_payment_dialog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payment-dialog.page.html */ 95987);
/* harmony import */ var _payment_dialog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-dialog.page.scss */ 4680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let PaymentDialogPage = class PaymentDialogPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
};
PaymentDialogPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
PaymentDialogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-payment-dialog',
        template: _raw_loader_payment_dialog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_dialog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentDialogPage);



/***/ }),

/***/ 17600:
/*!****************************************************!*\
  !*** ./src/app/chat/privacidad/privacidad.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacidadPage": () => (/* binding */ PrivacidadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_privacidad_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./privacidad.page.html */ 71739);
/* harmony import */ var _privacidad_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacidad.page.scss */ 84489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let PrivacidadPage = class PrivacidadPage {
    constructor(modalController, router) {
        this.modalController = modalController;
        this.router = router;
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true,
        });
    }
    ngOnInit() {
    }
};
PrivacidadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PrivacidadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-privacidad',
        template: _raw_loader_privacidad_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_privacidad_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrivacidadPage);



/***/ }),

/***/ 47542:
/*!********************************************************************!*\
  !*** ./src/app/chat/transferencia/popup-model/popup-model.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupModelPage": () => (/* binding */ PopupModelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_popup_model_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./popup-model.page.html */ 84592);
/* harmony import */ var _popup_model_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-model.page.scss */ 65097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let PopupModelPage = class PopupModelPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
};
PopupModelPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
PopupModelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-popup-model',
        template: _raw_loader_popup_model_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_popup_model_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PopupModelPage);



/***/ }),

/***/ 30188:
/*!******************************************************************************!*\
  !*** ./src/app/home/item-twelve/modal-precio-auto/modal-precio-auto.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPrecioAutoPage": () => (/* binding */ ModalPrecioAutoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_modal_precio_auto_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal-precio-auto.page.html */ 82804);
/* harmony import */ var _modal_precio_auto_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-precio-auto.page.scss */ 28943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let ModalPrecioAutoPage = class ModalPrecioAutoPage {
    constructor(modalController, router) {
        this.modalController = modalController;
        this.router = router;
    }
    ngOnInit() {
    }
    close() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss();
    }
};
ModalPrecioAutoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ModalPrecioAutoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-modal-precio-auto',
        template: _raw_loader_modal_precio_auto_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_precio_auto_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalPrecioAutoPage);



/***/ }),

/***/ 89019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    // baseUrl: "http://localhost/plugindev/wp-json/v2/",
    // baseUrl: 'http://192.168.43.3:3006',
    // baseUrl: 'http://192.168.100.4:3006',
    baseUrl: 'https://topmainodeapi.herokuapp.com',
};


/***/ }),

/***/ 39500:
/*!******************************************************!*\
  !*** ./src/app/authentication/login/login.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  color: rgba(128, 128, 128, 0.459) !important;\n  border-radius: 15px;\n  border-color: #c9c9c9;\n  border-width: 2px;\n  border-style: solid;\n  margin-bottom: 10px;\n}\n\nion-input {\n  border: 1px solid #dddfe2;\n  border-radius: 15px;\n  margin-bottom: 10px;\n}\n\nion-button {\n  text-transform: uppercase;\n  --border-radius: 15px;\n  margin-bottom: 10px;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide img {\n  width: 70%;\n  margin-top: 4rem;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBRUkseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFLQTtFQUNJLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7QUFGSjs7QUFTQTtFQUdJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBUko7O0FBV0E7RUFDSSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBUko7O0FBV0E7RUFDSSxxQ0FBQTtBQVJKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIGNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDU5KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIwMSwgMjAxLCAyMDEpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogcmdiKDIwMSwgMjAxLCAyMDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGZlMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjMzVDQTc1O1xyXG4gICAgLy8gLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSBoMiB7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyLjhyZW07XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUgaW1nIHtcclxuICAgIC8vIG1heC1oZWlnaHQ6IDUwJTtcclxuICAgIC8vIG1heC13aWR0aDogNTAlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuYiB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5wIHtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxufVxyXG5cclxucCBiIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XHJcbn0iXX0= */");

/***/ }),

/***/ 29446:
/*!**********************************************************!*\
  !*** ./src/app/authentication/sign-in/sign-in.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  color: rgba(128, 128, 128, 0.459) !important;\n  border-radius: 15px;\n  border-color: #c9c9c9;\n  border-width: 2px;\n  border-style: solid;\n  margin-bottom: 10px;\n}\n\nion-input {\n  border: 1px solid #dddfe2;\n  border-radius: 15px;\n  margin-bottom: 10px;\n}\n\nion-button {\n  text-transform: uppercase;\n  --border-radius: 15px;\n  margin-bottom: 10px;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide img {\n  width: 70%;\n  margin-top: 4rem;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFFSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtBQUZKOztBQVNBO0VBR0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUFSSjs7QUFXQTtFQUNJLHFDQUFBO0FBUkoiLCJmaWxlIjoic2lnbi1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICBjb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQ1OSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYigyMDEsIDIwMSwgMjAxKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRmZTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIC8vIC0tYmFja2dyb3VuZDogIzM1Q0E3NTtcclxuICAgIC8vIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUgaDIge1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMi44cmVtO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgICAvLyBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDUwJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbmIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxucCB7XHJcbiAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XHJcbn1cclxuXHJcbnAgYiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xyXG59Il19 */");

/***/ }),

/***/ 81183:
/*!********************************************************!*\
  !*** ./src/app/chat/album-model/album-model.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGJ1bS1tb2RlbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 4680:
/*!***********************************************************************!*\
  !*** ./src/app/chat/one-chat/payment-dialog/payment-dialog.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".color-header {\n  height: 50px;\n  background: #e8e7e7;\n}\n\nion-header::after {\n  background-image: none;\n}\n\nion-content {\n  --background: #e8e7e7;\n}\n\nion-footer::before {\n  background-image: none;\n}\n\n.middle-part {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding: 30px;\n  margin-top: 15px;\n}\n\n.money-input:focus {\n  outline: none;\n}\n\n.money-input {\n  border: none;\n  font-size: 35px;\n  caret-color: #17c169;\n}\n\n.color-footer {\n  background: #e8e7e7;\n  height: 195px;\n  padding-top: 5px;\n}\n\n.btn-1 {\n  background: #FFFFFF;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n  padding: 0px;\n  margin: 3px;\n  height: 40px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn-rec {\n  background: #17c169;\n  color: #FFFFFF;\n  font-weight: bold;\n  font-size: 15px;\n  text-align: center;\n  padding: 0px;\n  margin: 3px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZGlhbG9nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InBheW1lbnQtZGlhbG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZTdlNztcclxufVxyXG5cclxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZThlN2U3O1xyXG59XHJcblxyXG5pb24tZm9vdGVyOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLm1pZGRsZS1wYXJ0IHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ubW9uZXktaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1vbmV5LWlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGNhcmV0LWNvbG9yOiAjMTdjMTY5O1xyXG59XHJcblxyXG4uY29sb3ItZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOGU3ZTc7XHJcbiAgICBoZWlnaHQ6IDE5NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLmJ0bi0xIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1yZWMge1xyXG4gICAgYmFja2dyb3VuZDogIzE3YzE2OTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ 84489:
/*!******************************************************!*\
  !*** ./src/app/chat/privacidad/privacidad.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWNpZGFkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 65097:
/*!**********************************************************************!*\
  !*** ./src/app/chat/transferencia/popup-model/popup-model.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".color-header {\n  height: 50px;\n  background: #e8e7e7;\n}\n\nion-header::after {\n  background-image: none;\n}\n\nion-content {\n  --background: #e8e7e7;\n}\n\ninput {\n  border: none;\n}\n\ninput:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLW1vZGVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0FBSUYiLCJmaWxlIjoicG9wdXAtbW9kZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU3ZTc7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2U4ZTdlNztcclxufVxyXG5pbnB1dHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 28943:
/*!********************************************************************************!*\
  !*** ./src/app/home/item-twelve/modal-precio-auto/modal-precio-auto.page.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1wcmVjaW8tYXV0by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 11460:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\r\n  <ion-buttons slot=\"start\" (click)=\"dismiss()\">\r\n    <ion-icon style=\"font-size: 30px; \" name=\"close-outline\"></ion-icon>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n<ion-content>\r\n\r\n\r\n  <ion-content class=\"ion-padding ion-text-center\">\r\n    <ion-slide>\r\n      <div class=\"img-perfil\">\r\n        <img src=\"../../../assets/topmai.svg\">\r\n      </div>\r\n      <ion-input type=\"text\" placeholder=\"E-mail\" name=\"email\" [(ngModel)]=\"formObj.email\"></ion-input>\r\n      <ion-input type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"formObj.password\"></ion-input>\r\n      <ion-button style=\"--background: #35CA75;\" (click)=\"logn()\" expand='block'>Ingresar</ion-button>\r\n      <ion-button fill='clear'>¿Eres nuevo? Registrate</ion-button>\r\n    </ion-slide>\r\n  </ion-content>\r\n");

/***/ }),

/***/ 4198:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/sign-in/sign-in.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\r\n  <ion-buttons slot=\"start\" (click)=\"dismiss()\">\r\n\r\n    <ion-icon style=\"font-size: 30px; \" name=\"close-outline\"></ion-icon>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n<ion-content class=\"ion-padding ion-text-center\">\r\n  <ion-slide>\r\n    <div class=\"img-perfil\">\r\n      <img src=\"../../../assets/topmai.svg\">\r\n    </div>\r\n    <ion-input type=\"text\" placeholder=\"Nom\" name=\"name\" [(ngModel)]=\"formObj.name\"></ion-input>\r\n    <ion-input type=\"text\" placeholder=\"Número telefónico\" name=\"email\" [(ngModel)]=\"formObj.email\"></ion-input>\r\n    <ion-input type=\"password\" placeholder=\"Contraseña\" name=\"password\" [(ngModel)]=\"formObj.password\"></ion-input>\r\n    <ion-button style=\"--background: #35CA75;\" (click)=\"create()\" expand='block'>Registrarse</ion-button>\r\n  </ion-slide>\r\n</ion-content>\r\n");

/***/ }),

/***/ 65842:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/album-model/album-model.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"border-radius:20px 20px 0px 0px;padding: 20px\" class=\"s\">\r\n    <div style=\"display: flex; justify-content: space-between\">\r\n        <div style=\"font-size: 18px;font-weight: bold\">\r\n            Album\r\n        </div>\r\n        <div>\r\n            <ion-icon style=\"font-size: 25px\" (click)=\"dismiss()\" name=\"close-outline\"></ion-icon>\r\n        </div>\r\n    </div>\r\n\r\n    <div (click)=\"gotoDiscovertwo()\" style=\"display: flex; margin-top: 12px; align-items: center\">\r\n        <div>\r\n            <img style=\"width: 30px;\" src=\"assets/chat/popUp/imagenesfotos.png\" />\r\n        </div>\r\n        <div style=\"margin-left: 10px\">\r\n            Mis Publicaciones\r\n        </div>\r\n    </div>\r\n\r\n    <div (click)=\"gotoDiscover()\" style=\"display: flex; margin-top: 12px; align-items: center\">\r\n        <div>\r\n            <img style=\"width: 30px;;\" src=\"assets/chat/popUp/img.png\" />\r\n        </div>\r\n        <div style=\"margin-left: 10px\">\r\n            Momentos\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <div style=\"display: flex; margin-top: 12px; align-items: center\">\r\n        <div>\r\n            <img style=\"height: 40px\" src=\"assets/chat/popUp/3.png\" />\r\n        </div>\r\n        <div style=\"margin-left: 10px\">\r\n            Video ventas\r\n        </div>\r\n    </div> -->\r\n\r\n</div>");

/***/ }),

/***/ 95987:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/one-chat/payment-dialog/payment-dialog.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"color-header\" style=\"position: relative\">\r\n    <ion-icon (click)=\"dismiss()\" style=\"position: absolute; top:12px; font-size: 25px;\" name=\"chevron-back-outline\"></ion-icon>\r\n    <div style=\"margin-left:40px; display: flex;justify-content: flex-start;align-items: center;height: 100%\">\r\n        <div>\r\n            <b>Detalles</b>\r\n        </div>\r\n    </div>\r\n</ion-header>\r\n\r\n<ion-content scrollY=\"false\">\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col size=\"5\">\r\n                <div>Metodo de <br> pago</div>\r\n            </ion-col>\r\n            <ion-col>\r\n                <div style=\"font-weight: bold\">ICBE (5673)</div>\r\n                <div style=\"margin-top: 5px\">fdsfdsfds $ 500000.00</div>\r\n            </ion-col>\r\n            <ion-col size=\"1\">\r\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <div class=\"middle-part\" style=\"background: #FFFFFF; height: 100%;\">\r\n        <div>Importe de transferencia</div>\r\n        <div style=\"margin-top: 10px; font-weight: bold; font-size: 30px;display: flex\">\r\n            <div>$</div>\r\n            <div style=\"margin-left: 10px\">\r\n                <input type=\"number\" autofocus class=\"money-input\" style=\"width: 200px\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"color-footer\">\r\n    <ion-grid style=\"padding: 0px; margin:0px;\">\r\n        <ion-row style=\"padding: 0px; margin:0px;\">\r\n            <ion-col class=\"btn-1\">\r\n                <div>1</div>\r\n            </ion-col>\r\n            <ion-col class=\"btn-1\">\r\n                <div>2</div>\r\n            </ion-col>\r\n            <ion-col class=\"btn-1\">\r\n                <div>3</div>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"btn-1\">\r\n                <div>1</div>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"padding: 0px; margin:0px;\">\r\n            <ion-col style=\"padding: 0px\">\r\n                <ion-row>\r\n                    <ion-col class=\"btn-1\">\r\n                        4\r\n                    </ion-col>\r\n                    <ion-col class=\"btn-1\">\r\n                        5\r\n                    </ion-col>\r\n                    <ion-col class=\"btn-1\">\r\n                        6\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col class=\"btn-1\">\r\n                        7\r\n                    </ion-col>\r\n                    <ion-col class=\"btn-1\">\r\n                        8\r\n                    </ion-col>\r\n                    <ion-col class=\"btn-1\">\r\n                        9\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col class=\"btn-1\">\r\n                        0\r\n                    </ion-col>\r\n                    <ion-col style=\"--width: 10px\" class=\"btn-1\">\r\n                        .\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"btn-rec\">\r\n                <div>Recargar</div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-footer>");

/***/ }),

/***/ 71739:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/privacidad/privacidad.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"border-radius:20px 20px 0px 0px;padding: 20px\" class=\"s\">\r\n    <div style=\"display: flex; justify-content: space-between\">\r\n        <div style=\"font-size: 18px;font-weight: bold\">\r\n            Privacidad\r\n        </div>\r\n        <div>\r\n            <ion-icon style=\"font-size: 25px\" (click)=\"dismiss()\" name=\"close-outline\"></ion-icon>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"display: flex; margin-top: 12px; align-items: center\">\r\n        <div>\r\n            <img style=\"width: 25px;\" src=\"assets/chat/contacts/mundo.png\" />\r\n        </div>\r\n        <div style=\"margin-left: 10px\">\r\n            Público\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"display: flex; margin-top: 12px; align-items: center\">\r\n        <div>\r\n            <img style=\"width: 25px;;\" src=\"assets/chat/contacts/mundo.png\" />\r\n        </div>\r\n        <div style=\"margin-left: 10px\">\r\n            No Listado\r\n        </div>\r\n    </div>\r\n    <div style=\"display: flex; margin-top: 12px; align-items: center\">\r\n        <div>\r\n            <img style=\"width: 25px;;\" src=\"assets/chat/contacts/privado.png\" />\r\n        </div>\r\n        <div style=\"margin-left: 10px\">\r\n            Privado\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <div style=\"display: flex; margin-top: 12px; align-items: center\">\r\n      <div>\r\n          <img style=\"height: 40px\" src=\"assets/chat/popUp/3.png\" />\r\n      </div>\r\n      <div style=\"margin-left: 10px\">\r\n          Video ventas\r\n      </div>\r\n  </div> -->\r\n\r\n</div>");

/***/ }),

/***/ 84592:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/transferencia/popup-model/popup-model.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"color-header\" style=\"position: relative\">\r\n  <ion-icon (click)=\"dismiss()\" style=\"position: absolute; top:12px; font-size: 25px;\" name=\"chevron-back-outline\"></ion-icon>\r\n  <div style=\"display: flex;justify-content: center;align-items: center;height: 100%\">\r\n    <div>\r\n      <b>Transferir a tarrjeta</b>\r\n    </div>\r\n  </div>\r\n  <ion-icon style=\"position: absolute; top:12px; font-size: 25px;  right: 15px\" name=\"ellipsis-horizontal\"></ion-icon>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid style=\"background: #FFFFFF; margin: 10px; border-radius: 5px; padding: 10px 5px\">\r\n    <ion-row>\r\n      <ion-col size=\"4\">Nombre</ion-col>\r\n      <ion-col size=\"7\"><input placeholder=\"Nombre\"/></ion-col>\r\n      <ion-col size=\"1\"><ion-icon style=\"color: #1ac26b\" name=\"time-outline\"></ion-icon></ion-col>\r\n    </ion-row>\r\n    <hr style=\"height: 1px; background: #ecebeb\">\r\n    <ion-row>\r\n      <ion-col size=\"4\">N.de tarjeta</ion-col>\r\n      <ion-col><input placeholder=\"N.de tarjeta\"/></ion-col>\r\n    </ion-row>\r\n    <hr style=\"height: 1px; background: #eae9e9\">\r\n    <ion-row>\r\n      <ion-col size=\"4\">Banco</ion-col>\r\n      <ion-col><input placeholder=\"Banco\"/></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid style=\"background: #c7c6c6; margin: 30px 10px; border-radius: 5px; padding: 10px 5px\">\r\n    <ion-row>\r\n      <ion-col style=\"text-align: center; color: gray; font-weight: bold\">\r\n        Siguiente\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 82804:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-twelve/modal-precio-auto/modal-precio-auto.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n\r\n            <ion-icon style=\"font-size: 25px\" name=\"refresh-outline\"></ion-icon>\r\n\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n\r\n            <ion-icon style=\"font-size: 25px\" (click)=\"close()\" name=\"close-outline\"></ion-icon>\r\n\r\n        </ion-buttons>\r\n\r\n        <ion-title style=\"text-align: center;\">Filtro</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-list>\r\n        <ion-list-header style=\"font-size: 1rem;\">\r\n            Precio\r\n        </ion-list-header>\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-input style=\" border: 2px solid rgba(128, 128, 128, 0.267); border-radius: 5px;\" placeholder=\"Mínimo\"></ion-input>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <ion-input style=\" border: 2px solid rgba(128, 128, 128, 0.267); border-radius: 5px;\" placeholder=\"Máximo\"></ion-input>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=common.js.map