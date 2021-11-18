(self["webpackChunktopmai"] = self["webpackChunktopmai"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2217:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 46797:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 69165);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduler/async */ 33637);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isNumeric */ 26561);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 54869);




function timer(dueTime = 0, periodOrScheduler, scheduler) {
    let period = -1;
    if ((0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!(0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
        const due = (0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period, subscriber
        });
    });
}
function dispatch(state) {
    const { index, period, subscriber } = state;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 22901:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 10826);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 401:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 22901);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 4548:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 2217);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 33637:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler),
/* harmony export */   "async": () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 401);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 4548);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 26561:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric)
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 59796);

function isNumeric(val) {
    return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ 34445:
/*!**************************************************!*\
  !*** ./src/app/home/artesania/artesania.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtesaniaPage": () => (/* binding */ ArtesaniaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_artesania_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./artesania.page.html */ 8280);
/* harmony import */ var _artesania_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artesania.page.scss */ 47659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ArtesaniaPage = class ArtesaniaPage {
    constructor(router) {
        this.router = router;
        this.items = [{
                id: 1,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/1.png',
                people: 'assets/homePage/item-two/g1.png',
                ventas: '300+ ventas'
            }, {
                id: 2,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/2.png',
                people: 'assets/homePage/item-two/g3.png',
                ventas: '300+ ventas'
            }, {
                id: 3,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/3.png',
                people: 'assets/homePage/item-two/g3.png',
                ventas: '300+ ventas'
            }, {
                id: 4,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/4.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }, {
                id: 5,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/1.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }, {
                id: 6,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/2.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }];
        this.categoriesRow1 = [
            {
                title: 'Cerámica',
                icon: 'assets/homePage/categories/artesania/ceramica.png',
            },
            {
                title: 'Madera',
                icon: 'assets/homePage/categories/artesania/madera.png',
            },
            {
                title: 'Mármol',
                icon: 'assets/homePage/categories/artesania/marmol.png',
            },
            {
                title: 'Metal',
                icon: 'assets/homePage/categories/artesania/metal.png',
            },
            {
                title: 'Piel y Cuero',
                icon: 'assets/homePage/categories/artesania/cueropiel.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Textil',
                icon: 'assets/homePage/categories/artesania/textil.png',
            },
            {
                title: 'Joyería',
                icon: 'assets/homePage/categories/artesania/joyeria.png',
            },
            {
                title: 'Instrumentos',
                icon: 'assets/homePage/categories/artesania/instrumentos.png',
            },
            {
                title: 'Otros...',
                icon: 'assets/homePage/categories/artesania/otros.png',
            },
            {
                title: '',
                icon: '',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Call Center',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Mercadotecnia',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Leyes',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Sociales',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Educación',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Turismo',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Ingeniería',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Construcción',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Ventas',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'RH',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
        this.categoriesRow5 = [
            {
                title: 'Veterinaria',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Agricultura',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Logística',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Almacén',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Construcción',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`/home/item-two/${id}`]);
    }
};
ArtesaniaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ArtesaniaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-artesania',
        template: _raw_loader_artesania_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_artesania_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ArtesaniaPage);



/***/ }),

/***/ 55292:
/*!**********************************************!*\
  !*** ./src/app/home/empleos/empleos.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleosPage": () => (/* binding */ EmpleosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_empleos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./empleos.page.html */ 46378);
/* harmony import */ var _empleos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empleos.page.scss */ 36460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let EmpleosPage = class EmpleosPage {
    constructor(router) {
        this.router = router;
        this.items = [{
                id: 1,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/1.png',
                people: 'assets/homePage/item-two/g1.png',
                ventas: '300+ ventas'
            }, {
                id: 2,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/2.png',
                people: 'assets/homePage/item-two/g3.png',
                ventas: '300+ ventas'
            }, {
                id: 3,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/3.png',
                people: 'assets/homePage/item-two/g3.png',
                ventas: '300+ ventas'
            }, {
                id: 4,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/4.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }, {
                id: 5,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/1.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }, {
                id: 6,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/2.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }];
        this.categoriesRow1 = [
            {
                title: 'Administrativo',
                icon: 'assets/homePage/categories/empleos/administrativo.png',
            },
            {
                title: 'Sistemas',
                icon: 'assets/homePage/categories/empleos/sistemas.png',
            },
            {
                title: 'Salud',
                icon: 'assets/homePage/categories/empleos/salud.png',
            },
            {
                title: 'Educación',
                icon: 'assets/homePage/categories/empleos/educacion.png',
            },
            {
                title: 'Leyes',
                icon: 'assets/homePage/categories/empleos/leyes.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Turismo',
                icon: 'assets/homePage/categories/empleos/turismo.png',
            },
            {
                title: 'Ventas',
                icon: 'assets/homePage/categories/empleos/ventas.png',
            },
            {
                title: 'RH',
                icon: 'assets/homePage/categories/empleos/rh.png',
            },
            {
                title: 'General',
                icon: 'assets/homePage/categories/empleos/general.png',
            },
            {
                title: 'Otros...',
                icon: 'assets/homePage/categories/empleos/otros.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Call Center',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Mercadotecnia',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Leyes',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Sociales',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Educación',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Turismo',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Ingeniería',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Construcción',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Ventas',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'RH',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
        this.categoriesRow5 = [
            {
                title: 'Veterinaria',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Agricultura',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Logística',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Almacén',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Construcción',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`/home/item-two/${id}`]);
    }
};
EmpleosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
EmpleosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-empleos',
        template: _raw_loader_empleos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_empleos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmpleosPage);



/***/ }),

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    },
    {
        path: 'item-two',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-two_item-two_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-two/item-two.module */ 47605)).then(m => m.ItemTwoPageModule)
    },
    {
        path: 'view-one-item',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_view-one-item_view-one-item_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view-one-item/view-one-item.module */ 15187)).then(m => m.ViewOneItemPageModule)
    },
    {
        path: 'item-three',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-three_item-three_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-three/item-three.module */ 12781)).then(m => m.ItemThreePageModule)
    },
    {
        path: 'item-four',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-four_item-four_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-four/item-four.module */ 66279)).then(m => m.ItemFourPageModule)
    },
    {
        path: 'item-five',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-five_item-five_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-five/item-five.module */ 32787)).then(m => m.ItemFivePageModule)
    },
    {
        path: 'item-six',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-six_item-six_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-six/item-six.module */ 93776)).then(m => m.ItemSixPageModule)
    },
    {
        path: 'item-seven',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-seven_item-seven_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-seven/item-seven.module */ 44319)).then(m => m.ItemSevenPageModule)
    },
    {
        path: 'item-eight',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-eight_item-eight_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-eight/item-eight.module */ 37279)).then(m => m.ItemEightPageModule)
    },
    {
        path: 'item-nine',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-nine_item-nine_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-nine/item-nine.module */ 5275)).then(m => m.ItemNinePageModule)
    },
    {
        path: 'item-ten',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-ten_item-ten_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-ten/item-ten.module */ 8216)).then(m => m.ItemTenPageModule)
    },
    {
        path: 'item-eleven',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-eleven_item-eleven_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-eleven/item-eleven.module */ 72094)).then(m => m.ItemElevenPageModule)
    },
    {
        path: 'item-twelve',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-twelve_item-twelve_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-twelve/item-twelve.module */ 50427)).then(m => m.ItemTwelvePageModule)
    },
    {
        path: 'item-thirteen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-thirteen_item-thirteen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-thirteen/item-thirteen.module */ 22009)).then(m => m.ItemThirteenPageModule)
    },
    {
        path: 'item-fourteen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-fourteen_item-fourteen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-fourteen/item-fourteen.module */ 67627)).then(m => m.ItemFourteenPageModule)
    },
    {
        path: 'item-fifteen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-fifteen_item-fifteen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-fifteen/item-fifteen.module */ 46128)).then(m => m.ItemFifteenPageModule)
    },
    {
        path: 'item-sixteen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-sixteen_item-sixteen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-sixteen/item-sixteen.module */ 86403)).then(m => m.ItemSixteenPageModule)
    },
    {
        path: 'item-seventeen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-seventeen_item-seventeen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-seventeen/item-seventeen.module */ 69300)).then(m => m.ItemSeventeenPageModule)
    },
    {
        path: 'item-eighteen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-eighteen_item-eighteen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-eighteen/item-eighteen.module */ 94850)).then(m => m.ItemEighteenPageModule)
    },
    {
        path: 'item-nighteen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-nighteen_item-nighteen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-nighteen/item-nighteen.module */ 93266)).then(m => m.ItemNighteenPageModule)
    },
    {
        path: 'item-twenty',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-twenty_item-twenty_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-twenty/item-twenty.module */ 45142)).then(m => m.ItemTwentyPageModule)
    },
    {
        path: 'item-twenty-one',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_item-twenty-one_item-twenty-one_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item-twenty-one/item-twenty-one.module */ 35316)).then(m => m.ItemTwentyOnePageModule)
    },
    {
        path: 'servicios',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_servicios_servicios_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./servicios/servicios.module */ 12966)).then(m => m.ServiciosPageModule)
    },
    {
        path: 'empleos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_empleos_empleos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./empleos/empleos.module */ 33673)).then(m => m.EmpleosPageModule)
    },
    {
        path: 'mascotas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_mascotas_mascotas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mascotas/mascotas.module */ 90580)).then(m => m.MascotasPageModule)
    },
    {
        path: 'artesania',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_artesania_artesania_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./artesania/artesania.module */ 48906)).then(m => m.ArtesaniaPageModule)
    },
    //  {
    //    path: 'seller-profile-model',
    //    loadChildren: () => import('./seller-profile-model/seller-profile-model.module').then( m => m.SellerProfileModelPageModule)
    //  },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _item_one_item_one_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-one/item-one.page */ 30402);
/* harmony import */ var _item_two_item_two_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-two/item-two.page */ 87910);
/* harmony import */ var _item_one_item_one_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-one/item-one.module */ 97819);
/* harmony import */ var _item_three_item_three_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-three/item-three.page */ 78888);
/* harmony import */ var _item_four_item_four_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-four/item-four.page */ 91617);
/* harmony import */ var _item_five_item_five_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-five/item-five.page */ 71281);
/* harmony import */ var _item_six_item_six_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-six/item-six.page */ 93942);
/* harmony import */ var _item_seven_item_seven_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-seven/item-seven.page */ 45076);
/* harmony import */ var _item_eight_item_eight_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item-eight/item-eight.page */ 44440);
/* harmony import */ var _item_nine_item_nine_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item-nine/item-nine.page */ 13246);
/* harmony import */ var _item_ten_item_ten_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./item-ten/item-ten.page */ 24664);
/* harmony import */ var _item_eleven_item_eleven_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./item-eleven/item-eleven.page */ 19027);
/* harmony import */ var _item_twelve_item_twelve_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./item-twelve/item-twelve.page */ 33280);
/* harmony import */ var _item_thirteen_item_thirteen_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./item-thirteen/item-thirteen.page */ 6395);
/* harmony import */ var _item_fourteen_item_fourteen_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./item-fourteen/item-fourteen.page */ 53018);
/* harmony import */ var _item_fifteen_item_fifteen_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./item-fifteen/item-fifteen.page */ 36943);
/* harmony import */ var _item_sixteen_item_sixteen_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./item-sixteen/item-sixteen.page */ 58820);
/* harmony import */ var _item_seventeen_item_seventeen_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./item-seventeen/item-seventeen.page */ 7591);
/* harmony import */ var _item_eighteen_item_eighteen_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./item-eighteen/item-eighteen.page */ 24303);
/* harmony import */ var _item_nighteen_item_nighteen_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./item-nighteen/item-nighteen.page */ 40945);
/* harmony import */ var _item_twenty_item_twenty_page__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./item-twenty/item-twenty.page */ 26137);
/* harmony import */ var _item_twenty_one_item_twenty_one_page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./item-twenty-one/item-twenty-one.page */ 83643);
/* harmony import */ var _servicios_servicios_page__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./servicios/servicios.page */ 58812);
/* harmony import */ var _empleos_empleos_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./empleos/empleos.page */ 55292);
/* harmony import */ var _mascotas_mascotas_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mascotas/mascotas.page */ 67651);
/* harmony import */ var _artesania_artesania_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./artesania/artesania.page */ 34445);





























// *QR




let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_28__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_29__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_32__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _item_one_item_one_module__WEBPACK_IMPORTED_MODULE_4__.ItemOnePageModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _item_one_item_one_page__WEBPACK_IMPORTED_MODULE_2__.ItemOnePage,
            _item_two_item_two_page__WEBPACK_IMPORTED_MODULE_3__.ItemTwoPage,
            _item_three_item_three_page__WEBPACK_IMPORTED_MODULE_5__.ItemThreePage,
            _item_four_item_four_page__WEBPACK_IMPORTED_MODULE_6__.ItemFourPage,
            _item_five_item_five_page__WEBPACK_IMPORTED_MODULE_7__.ItemFivePage,
            _item_six_item_six_page__WEBPACK_IMPORTED_MODULE_8__.ItemSixPage,
            _item_seven_item_seven_page__WEBPACK_IMPORTED_MODULE_9__.ItemSevenPage,
            _item_eight_item_eight_page__WEBPACK_IMPORTED_MODULE_10__.ItemEightPage,
            _item_nine_item_nine_page__WEBPACK_IMPORTED_MODULE_11__.ItemNinePage,
            _item_ten_item_ten_page__WEBPACK_IMPORTED_MODULE_12__.ItemTenPage,
            _item_eleven_item_eleven_page__WEBPACK_IMPORTED_MODULE_13__.ItemElevenPage,
            _item_twelve_item_twelve_page__WEBPACK_IMPORTED_MODULE_14__.ItemTwelvePage,
            _item_thirteen_item_thirteen_page__WEBPACK_IMPORTED_MODULE_15__.ItemThirteenPage,
            _item_fourteen_item_fourteen_page__WEBPACK_IMPORTED_MODULE_16__.ItemFourteenPage,
            _item_fifteen_item_fifteen_page__WEBPACK_IMPORTED_MODULE_17__.ItemFifteenPage,
            _item_sixteen_item_sixteen_page__WEBPACK_IMPORTED_MODULE_18__.ItemSixteenPage,
            _item_seventeen_item_seventeen_page__WEBPACK_IMPORTED_MODULE_19__.ItemSeventeenPage,
            _item_eighteen_item_eighteen_page__WEBPACK_IMPORTED_MODULE_20__.ItemEighteenPage,
            _item_nighteen_item_nighteen_page__WEBPACK_IMPORTED_MODULE_21__.ItemNighteenPage,
            _item_twenty_item_twenty_page__WEBPACK_IMPORTED_MODULE_22__.ItemTwentyPage,
            _item_twenty_one_item_twenty_one_page__WEBPACK_IMPORTED_MODULE_23__.ItemTwentyOnePage,
            _servicios_servicios_page__WEBPACK_IMPORTED_MODULE_24__.ServiciosPage,
            _empleos_empleos_page__WEBPACK_IMPORTED_MODULE_25__.EmpleosPage,
            _mascotas_mascotas_page__WEBPACK_IMPORTED_MODULE_26__.MascotasPage,
            _artesania_artesania_page__WEBPACK_IMPORTED_MODULE_27__.ArtesaniaPage
        ]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ 54655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 46797);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product.service */ 66082);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);




/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-underscore-dangle */






let HomePage = class HomePage {
    constructor(cateSrv, prodSrv, router, loadingController) {
        this.cateSrv = cateSrv;
        this.prodSrv = prodSrv;
        this.router = router;
        this.loadingController = loadingController;
        this.source = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(0, 1000);
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl;
        this._second = 1000;
        this._minute = this._second * 60;
        this._hour = this._minute * 60;
        this._day = this._hour * 24;
        this.loader = false;
        this.items = [{
                id: 1,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/1.png',
                people: 'assets/homePage/item-two/g1.png',
                ventas: '300+ ventas'
            }, {
                id: 2,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/2.png',
                people: 'assets/homePage/item-two/g3.png',
                ventas: '300+ ventas'
            }, {
                id: 3,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/3.png',
                people: 'assets/homePage/item-two/g3.png',
                ventas: '300+ ventas'
            }, {
                id: 4,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/4.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }, {
                id: 5,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/1.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }, {
                id: 6,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/2.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }];
        this.cateSrv.getAll().subscribe((resp) => {
            this.topSliderItems = resp.data;
            this.cateSrv.getAllSub(resp.data[0]._id).subscribe((resp) => {
                this.categoriesRow1 = resp.data;
            });
        });
    }
    ngOnInit() {
        this.selectedCategory = 0;
        this.clock = this.source.subscribe(t => {
            this.now = new Date();
            this.end = new Date('01/01/' + (this.now.getFullYear() + 1) + ' 00:00');
            this.showDate();
        });
    }
    selectCategory(index, id) {
        this.loader = true;
        this.loadingController.create({
            message: 'Loading...'
        }).then((response) => {
            response.present();
            this.selectedCategory = index;
            this.cateSrv.getAllSub(id).subscribe((resp) => {
                this.categoriesRow1 = resp.data;
                this.prodSrv.getAllByParentcategory(id).subscribe((resp) => {
                    this.productsByMaincategory = resp.data;
                    this.loader = false;
                    response.dismiss();
                });
            });
        });
    }
    childcategory(item) {
        console.log(item._id);
        this.prodSrv.getAllBychildcategory(item._id).subscribe((resp) => {
            console.log(resp);
            this.productsByMaincategory = resp.data;
        });
    }
    showDate() {
        const distance = this.end - this.now;
        this.day = Math.floor(distance / this._day);
        this.hours = Math.floor((distance % this._day) / this._hour);
        this.minutes = Math.floor((distance % this._hour) / this._minute);
        this.seconds = Math.floor((distance % this._minute) / this._second);
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
    gotoItem(id) {
        this.router.navigate([`/home/item-two/${id}`]);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 44440:
/*!****************************************************!*\
  !*** ./src/app/home/item-eight/item-eight.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemEightPage": () => (/* binding */ ItemEightPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_eight_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-eight.page.html */ 52219);
/* harmony import */ var _item_eight_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-eight.page.scss */ 90230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemEightPage = class ItemEightPage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Limpieza',
                icon: 'assets/homePage/categories/almacen/limpieza2.png',
            },
            {
                title: 'Cocina',
                icon: 'assets/homePage/categories/almacen/cocina.png',
            },
            {
                title: 'Regalos',
                icon: 'assets/homePage/categories/almacen/regalos.png',
            },
            {
                title: 'Jardín',
                icon: 'assets/homePage/categories/almacen/jardin.png',
            },
            {
                title: 'Libros',
                icon: 'assets/homePage/categories/almacen/libro.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Agrícola',
                icon: 'assets/homePage/categories/almacen/agricola.png',
            },
            {
                title: 'Papeleria',
                icon: 'assets/homePage/categories/almacen/papeleria.png',
            },
            {
                title: 'Personal',
                icon: 'assets/homePage/categories/almacen/personal.png',
            },
            {
                title: 'Hogar',
                icon: 'assets/homePage/categories/almacen/limpieza.png',
            },
            {
                title: 'Papel',
                icon: 'assets/homePage/categories/almacen/papel.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemEightPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemEightPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-eight',
        template: _raw_loader_item_eight_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_eight_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemEightPage);



/***/ }),

/***/ 24303:
/*!**********************************************************!*\
  !*** ./src/app/home/item-eighteen/item-eighteen.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemEighteenPage": () => (/* binding */ ItemEighteenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_eighteen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-eighteen.page.html */ 46552);
/* harmony import */ var _item_eighteen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-eighteen.page.scss */ 71882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemEighteenPage = class ItemEighteenPage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Fundas',
                icon: 'assets/homePage/categories/Casatextiles/fundas.png',
            },
            {
                title: 'edredón',
                icon: 'assets/homePage/categories/Casatextiles/edredon.png',
            },
            {
                title: 'Mosquitero',
                icon: 'assets/homePage/categories/Casatextiles/mosquitero.png',
            },
            {
                title: 'Almohada',
                icon: 'assets/homePage/categories/Casatextiles/almohada.png',
            },
            {
                title: 'Alfombra',
                icon: 'assets/homePage/categories/Casatextiles/alfombra.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Cojín',
                icon: 'assets/homePage/categories/Casatextiles/cojin.png',
            },
            {
                title: 'Cortina',
                icon: 'assets/homePage/categories/Casatextiles/cortinas.png',
            },
            {
                title: 'Toalla',
                icon: 'assets/homePage/categories/Casatextiles/toalla.png',
            },
            {
                title: 'Mantel',
                icon: 'assets/homePage/categories/Casatextiles/mantel.png',
            },
            {
                title: 'Decoración',
                icon: 'assets/homePage/categories/Casatextiles/Decoraciones.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Sombrilla',
                icon: 'assets/homePage/categories/Casatextiles/sombrilla.png',
            },
            {
                title: 'Sábanas',
                icon: 'assets/homePage/categories/Casatextiles/sabanas.png',
            },
            {
                title: 'Otros...',
                icon: 'assets/homePage/categories/Casatextiles/sabanas.png',
            },
            {
                title: '',
                icon: '',
            },
            {
                title: '',
                icon: '',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemEighteenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemEighteenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-eighteen',
        template: _raw_loader_item_eighteen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_eighteen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemEighteenPage);



/***/ }),

/***/ 19027:
/*!******************************************************!*\
  !*** ./src/app/home/item-eleven/item-eleven.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemElevenPage": () => (/* binding */ ItemElevenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_eleven_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-eleven.page.html */ 16419);
/* harmony import */ var _item_eleven_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-eleven.page.scss */ 72054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemElevenPage = class ItemElevenPage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: '+18',
                icon: 'assets/homePage/categories/medicamento/18.png',
            },
            {
                title: 'Medicinas',
                icon: 'assets/homePage/categories/medicamento/medicinas.png',
            },
            {
                title: 'Familiar',
                icon: 'assets/homePage/categories/medicamento/familiar.png',
            },
            {
                title: 'Discapacidad',
                icon: 'assets/homePage/categories/medicamento/discapacidad.png',
            },
            {
                title: 'Salud',
                icon: 'assets/homePage/categories/medicamento/salud.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Sexual',
                icon: 'assets/homePage/categories/medicamento/embarazo.png',
            },
            {
                title: 'Cuidados',
                icon: 'assets/homePage/categories/medicamento/cubrebocas.png',
            },
            {
                title: 'Hierbas',
                icon: 'assets/homePage/categories/medicamento/hierba.png',
            },
            {
                title: 'Lentes',
                icon: 'assets/homePage/categories/medicamento/lentes.png',
            },
            {
                title: 'Otros...',
                icon: 'assets/homePage/categories/medicamento/lentes.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemElevenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemElevenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-eleven',
        template: _raw_loader_item_eleven_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_eleven_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemElevenPage);



/***/ }),

/***/ 36943:
/*!********************************************************!*\
  !*** ./src/app/home/item-fifteen/item-fifteen.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemFifteenPage": () => (/* binding */ ItemFifteenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_fifteen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-fifteen.page.html */ 14770);
/* harmony import */ var _item_fifteen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-fifteen.page.scss */ 16856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ItemFifteenPage = class ItemFifteenPage {
    constructor() {
        this.categoriesRow1 = [
            {
                title: 'Equipaje',
                icon: 'assets/homePage/categories/bolsazapatos/equipaje.png',
            },
            {
                title: 'Botas',
                icon: 'assets/homePage/categories/bolsazapatos/botas.png',
            },
            {
                title: 'Gafas',
                icon: 'assets/homePage/categories/bolsazapatos/gafas.png',
            },
            {
                title: 'Sandalia',
                icon: 'assets/homePage/categories/bolsazapatos/sandalias.png',
            },
            {
                title: 'Cinturon',
                icon: 'assets/homePage/categories/bolsazapatos/cinturon.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Lona',
                icon: 'assets/homePage/categories/bolsazapatos/lona.png',
            },
            {
                title: 'Altos',
                icon: 'assets/homePage/categories/bolsazapatos/altos.png',
            },
            {
                title: 'Hombre',
                icon: 'assets/homePage/categories/bolsazapatos/hombre.png',
            },
            {
                title: 'Bolso',
                icon: 'assets/homePage/categories/bolsazapatos/bolso.png',
            },
            {
                title: 'Mujer',
                icon: 'assets/homePage/categories/bolsazapatos/mujer.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Cuero',
                icon: 'assets/homePage/categories/bolsazapatos/cuero.png',
            },
            {
                title: 'Mochila',
                icon: 'assets/homePage/categories/bolsazapatos/mochila.png',
            },
            {
                title: 'Otros...',
                icon: 'assets/homePage/categories/bolsazapatos/mochila.png',
            },
            {
                title: '',
                icon: '',
            },
            {
                title: '',
                icon: '',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
    }
    ngOnInit() {
    }
};
ItemFifteenPage.ctorParameters = () => [];
ItemFifteenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-item-fifteen',
        template: _raw_loader_item_fifteen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_fifteen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemFifteenPage);



/***/ }),

/***/ 71281:
/*!**************************************************!*\
  !*** ./src/app/home/item-five/item-five.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemFivePage": () => (/* binding */ ItemFivePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_five_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-five.page.html */ 27985);
/* harmony import */ var _item_five_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-five.page.scss */ 1353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemFivePage = class ItemFivePage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Microondas',
                icon: 'assets/homePage/categories/electrodomesticos/microondas.png',
            },
            {
                title: 'Cafeteras',
                icon: 'assets/homePage/categories/electrodomesticos/cafetera.png',
            },
            {
                title: 'Tv',
                icon: 'assets/homePage/categories/electrodomesticos/tv.png',
            },
            {
                title: 'Personal',
                icon: 'assets/homePage/categories/electrodomesticos/personal.png',
            },
            {
                title: 'Domésticos',
                icon: 'assets/homePage/categories/electrodomesticos/ventilador.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Cocina',
                icon: 'assets/homePage/categories/electrodomesticos/olla.png',
            },
            {
                title: 'Calentador',
                icon: 'assets/homePage/categories/electrodomesticos/calentador.png',
            },
            {
                title: 'Refrigerador',
                icon: 'assets/homePage/categories/electrodomesticos/refri.png',
            },
            {
                title: 'Clima',
                icon: 'assets/homePage/categories/electrodomesticos/split.png',
            },
            {
                title: 'Lavadora',
                icon: 'assets/homePage/categories/electrodomesticos/lavadora.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Lavadora',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemFivePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemFivePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-five',
        template: _raw_loader_item_five_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_five_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemFivePage);



/***/ }),

/***/ 91617:
/*!**************************************************!*\
  !*** ./src/app/home/item-four/item-four.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemFourPage": () => (/* binding */ ItemFourPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_four_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-four.page.html */ 48690);
/* harmony import */ var _item_four_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-four.page.scss */ 91090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemFourPage = class ItemFourPage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Shorts',
                // icon:'assets/homePage/categories/audio.svg',
                icon: 'assets/homePage/categories/ropaHombre/short.png',
            },
            {
                title: 'Playera',
                icon: 'assets/homePage/categories/ropaHombre/playera.png',
            },
            {
                title: 'Chaqueta',
                icon: 'assets/homePage/categories/ropaHombre/chaqueta.png',
            },
            {
                title: 'Mezclilla',
                icon: 'assets/homePage/categories/ropaHombre/mezclilla.png',
            },
            {
                title: 'Camisa',
                icon: 'assets/homePage/categories/ropaHombre/camisa.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Vestir',
                icon: 'assets/homePage/categories/ropaHombre/vestir.png',
            },
            {
                title: 'Sueter',
                icon: 'assets/homePage/categories/ropaHombre/sueter.png',
            },
            {
                title: 'Polos',
                icon: 'assets/homePage/categories/ropaHombre/polos.png',
            },
            {
                title: 'Gabardinas',
                icon: 'assets/homePage/categories/ropaHombre/gabardina.png',
            },
            {
                title: 'Chalecos',
                icon: 'assets/homePage/categories/ropaHombre/chalecos.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemFourPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemFourPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-four',
        template: _raw_loader_item_four_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_four_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemFourPage);



/***/ }),

/***/ 53018:
/*!**********************************************************!*\
  !*** ./src/app/home/item-fourteen/item-fourteen.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemFourteenPage": () => (/* binding */ ItemFourteenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_fourteen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-fourteen.page.html */ 14979);
/* harmony import */ var _item_fourteen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-fourteen.page.scss */ 6985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemFourteenPage = class ItemFourteenPage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Sujetador',
                icon: 'assets/homePage/categories/ropamujer/sujetador.png',
            },
            {
                title: 'Vestir',
                icon: 'assets/homePage/categories/ropamujer/vestidos2.png',
            },
            {
                title: 'Pantalones',
                icon: 'assets/homePage/categories/ropamujer/pantalones.png',
            },
            {
                title: 'Falda',
                icon: 'assets/homePage/categories/ropamujer/faldas.png',
            },
            {
                title: 'Chamarra',
                icon: 'assets/homePage/categories/ropamujer/chamarra1.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Viajero',
                icon: 'assets/homePage/categories/ropamujer/chamarra2.png',
            },
            {
                title: 'Sueter',
                icon: 'assets/homePage/categories/ropamujer/sueter.png',
            },
            {
                title: 'Playeras',
                icon: 'assets/homePage/categories/ropamujer/playera.png',
            },
            {
                title: 'Encaje',
                icon: 'assets/homePage/categories/ropamujer/encaje.png',
            },
            {
                title: 'Vestido',
                icon: 'assets/homePage/categories/ropamujer/vestido.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/ropamujer/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/ropamujer/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/ropamujer/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/ropamujer/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/ropamujer/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemFourteenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemFourteenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-fourteen',
        template: _raw_loader_item_fourteen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_fourteen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemFourteenPage);



/***/ }),

/***/ 40945:
/*!**********************************************************!*\
  !*** ./src/app/home/item-nighteen/item-nighteen.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemNighteenPage": () => (/* binding */ ItemNighteenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_nighteen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-nighteen.page.html */ 18743);
/* harmony import */ var _item_nighteen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-nighteen.page.scss */ 2153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemNighteenPage = class ItemNighteenPage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Mascarilla',
                icon: 'assets/homePage/categories/maquillaje/mascarilla.png',
            },
            {
                title: 'Limpieza',
                icon: 'assets/homePage/categories/maquillaje/limpieza.png',
            },
            {
                title: 'Piel',
                icon: 'assets/homePage/categories/maquillaje/piel.png',
            },
            {
                title: 'Crema',
                icon: 'assets/homePage/categories/maquillaje/crema.png',
            },
            {
                title: 'Shampoo',
                icon: 'assets/homePage/categories/maquillaje/shampoo.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Labial',
                icon: 'assets/homePage/categories/maquillaje/labial.png',
            },
            {
                title: 'Maquillaje',
                icon: 'assets/homePage/categories/maquillaje/maquillaje.png',
            },
            {
                title: 'Gel',
                icon: 'assets/homePage/categories/maquillaje/gel.png',
            },
            {
                title: 'Hombres',
                icon: 'assets/homePage/categories/maquillaje/hombres.png',
            },
            {
                title: 'Cuerpo',
                icon: 'assets/homePage/categories/maquillaje/cuerpo.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/maquillaje/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemNighteenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemNighteenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-nighteen',
        template: _raw_loader_item_nighteen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_nighteen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemNighteenPage);



/***/ }),

/***/ 13246:
/*!**************************************************!*\
  !*** ./src/app/home/item-nine/item-nine.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemNinePage": () => (/* binding */ ItemNinePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_nine_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-nine.page.html */ 77785);
/* harmony import */ var _item_nine_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-nine.page.scss */ 1222);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemNinePage = class ItemNinePage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Motos',
                icon: 'assets/homePage/categories/productosAutomovil/motos.png',
            },
            {
                title: 'Automotriz',
                icon: 'assets/homePage/categories/productosAutomovil/automotriz.png',
            },
            {
                title: 'Batería',
                icon: 'assets/homePage/categories/productosAutomovil/bateria2.png',
            },
            {
                title: 'Seguridad',
                icon: 'assets/homePage/categories/productosAutomovil/seguridad.png',
            },
            {
                title: 'Asientos',
                icon: 'assets/homePage/categories/productosAutomovil/asientos.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Tapetes',
                icon: 'assets/homePage/categories/productosAutomovil/tapetes.png',
            },
            {
                title: 'Interior',
                icon: 'assets/homePage/categories/productosAutomovil/interior.png',
            },
            {
                title: 'Limpieza',
                icon: 'assets/homePage/categories/productosAutomovil/limpieza.png',
            },
            {
                title: 'Protección',
                icon: 'assets/homePage/categories/productosAutomovil/proteccion.png',
            },
            {
                title: 'Accesorios',
                icon: 'assets/homePage/categories/productosAutomovil/accesorio.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemNinePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemNinePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-nine',
        template: _raw_loader_item_nine_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_nine_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemNinePage);



/***/ }),

/***/ 37123:
/*!******************************************************************************!*\
  !*** ./src/app/home/item-one/horizontal-items/horizontal-items.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalItemsComponent": () => (/* binding */ HorizontalItemsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_horizontal_items_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./horizontal-items.component.html */ 31568);
/* harmony import */ var _horizontal_items_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal-items.component.scss */ 69033);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let HorizontalItemsComponent = class HorizontalItemsComponent {
    constructor() {
        this.itemsVirticale = [
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
            }
        ];
    }
    ngOnInit() { }
};
HorizontalItemsComponent.ctorParameters = () => [];
HorizontalItemsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-horizontal-items',
        template: _raw_loader_horizontal_items_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_horizontal_items_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HorizontalItemsComponent);



/***/ }),

/***/ 23140:
/*!**********************************************************!*\
  !*** ./src/app/home/item-one/item-one-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemOnePageRoutingModule": () => (/* binding */ ItemOnePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _item_one_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-one.page */ 30402);




const routes = [
    {
        path: '',
        component: _item_one_page__WEBPACK_IMPORTED_MODULE_0__.ItemOnePage
    }
];
let ItemOnePageRoutingModule = class ItemOnePageRoutingModule {
};
ItemOnePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemOnePageRoutingModule);



/***/ }),

/***/ 97819:
/*!**************************************************!*\
  !*** ./src/app/home/item-one/item-one.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemOnePageModule": () => (/* binding */ ItemOnePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _item_one_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-one-routing.module */ 23140);
/* harmony import */ var _item_slider_item_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-slider/item-slider.component */ 22976);
/* harmony import */ var _virtical_items_virtical_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtical-items/virtical-items.component */ 43165);
/* harmony import */ var _horizontal_items_horizontal_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./horizontal-items/horizontal-items.component */ 37123);









let ItemOnePageModule = class ItemOnePageModule {
};
ItemOnePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _item_one_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemOnePageRoutingModule
        ],
        exports: [
            _virtical_items_virtical_items_component__WEBPACK_IMPORTED_MODULE_2__.VirticalItemsComponent,
            _horizontal_items_horizontal_items_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalItemsComponent,
            _item_slider_item_slider_component__WEBPACK_IMPORTED_MODULE_1__.ItemSliderComponent
        ],
        declarations: [_item_slider_item_slider_component__WEBPACK_IMPORTED_MODULE_1__.ItemSliderComponent, _virtical_items_virtical_items_component__WEBPACK_IMPORTED_MODULE_2__.VirticalItemsComponent, _horizontal_items_horizontal_items_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalItemsComponent]
    })
], ItemOnePageModule);



/***/ }),

/***/ 30402:
/*!************************************************!*\
  !*** ./src/app/home/item-one/item-one.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemOnePage": () => (/* binding */ ItemOnePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_one_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-one.page.html */ 7807);
/* harmony import */ var _item_one_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-one.page.scss */ 20342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 46797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ 54655);



/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable no-underscore-dangle */





let ItemOnePage = class ItemOnePage {
    constructor(router, catSrv) {
        this.router = router;
        this.catSrv = catSrv;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseUrl;
        this._second = 1000;
        this._minute = this._second * 60;
        this._hour = this._minute * 60;
        this._day = this._hour * 24;
        this.source = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(0, 1000);
        this.secetedCategory = 0;
        this.items = [
            {
                title: 'Electrónica',
                img: 'assets/homePage/items/electronica.png',
                price: '$000',
                discountPrice: '$30'
            },
            {
                title: 'Belleza',
                img: 'assets/homePage/items/3.png',
                price: '$000',
                discountPrice: '$30'
            },
            {
                title: 'Ropa',
                img: 'assets/homePage/items/ropa.jpg',
                price: '$000',
                discountPrice: '$30'
            },
            {
                title: 'Comida',
                img: 'assets/homePage/items/comida.png',
                price: '$000',
                discountPrice: '$30'
            },
            {
                title: 'Servicios',
                img: 'assets/homePage/items/servicios.jpg',
                price: '$000',
                discountPrice: '$30'
            },
        ];
        this.categoriesRow1 = [
            {
                title: 'vehículos',
                icon: 'assets/homePage/categories/PNG4/vehiculo.png',
                to: 'vehiculos'
                // icon:'assets/homePage/categories/PNG2/brillo1.png',
            },
            {
                title: 'Cámaras',
                icon: 'assets/homePage/categories/PNG4/camara.png',
            },
            {
                title: 'Celulares',
                icon: 'assets/homePage/categories/PNG4/celular.png',
                // icon:'assets/homePage/categories/PNG2/brillo4.png',
            },
            {
                title: 'PC',
                icon: 'assets/homePage/categories/PNG4/computacion.png',
                // icon:'assets/homePage/categories/PNG2/brillo3.png',
            },
            {
                title: 'Belleza',
                icon: 'assets/homePage/categories/PNG4/belleza.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Videojuegos',
                icon: 'assets/homePage/categories/PNG4/consolas.png',
            },
            {
                title: 'Servicios',
                icon: 'assets/homePage/categories/PNG4/servicios.png',
            },
            {
                title: 'Vivienda',
                icon: 'assets/homePage/categories/PNG4/construccion3.png',
            },
            {
                title: 'Libros',
                icon: 'assets/homePage/categories/PNG4/libros.png',
            },
            {
                title: 'Hogar',
                icon: 'assets/homePage/categories/PNG4/casa.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Ropa',
                icon: 'assets/homePage/categories/PNG4/ropa.png',
            },
            {
                title: 'Alimentos',
                icon: 'assets/homePage/categories/PNG4/bebidas.png',
            },
            {
                title: 'Multimedia',
                icon: 'assets/homePage/categories/PNG4/music.png',
            },
            {
                title: 'Joyas',
                icon: 'assets/homePage/categories/PNG4/joyeria.png',
            },
            {
                title: 'Deportes',
                icon: 'assets/homePage/categories/PNG4/deporte.png',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Instrumentos',
                icon: 'assets/homePage/categories/PNG4/instrumentos.png',
            },
            {
                title: 'Bebés',
                icon: 'assets/homePage/categories/PNG4/bebes.png',
            },
            {
                title: 'Audio',
                icon: 'assets/homePage/categories/PNG4/audiovideo.png',
            },
            {
                title: 'Muebles',
                icon: 'assets/homePage/categories/PNG4/muebles.png',
            },
            {
                title: 'Juguetes',
                icon: 'assets/homePage/categories/PNG4/juguetes.png',
            }
        ];
        this.topSliderItems = [
            {
                title: 'Item One',
            },
            {
                title: 'Item Two',
            },
            {
                title: 'Item Three',
            },
            {
                title: 'Item Four',
            },
            {
                title: 'Item Five',
            },
            {
                title: 'Item Six',
            },
            {
                title: 'Item Seven',
            }
        ];
    }
    ngOnInit() {
        this.clock = this.source.subscribe(t => {
            this.now = new Date();
            this.end = new Date('01/01/' + (this.now.getFullYear() + 1) + ' 00:00');
            this.showDate();
        });
        this.catSrv.getAll().subscribe((resp) => {
            console.log(resp);
            this.categories = resp.data;
            // if(resp.data.length <= 10)
            // for (let i = 0; i < resp.data.length; i++) {
            //   this.categories.push(resp.data[i]);
            // }
        });
    }
    showDate() {
        const distance = this.end - this.now;
        this.day = Math.floor(distance / this._day);
        this.hours = Math.floor((distance % this._day) / this._hour);
        this.minutes = Math.floor((distance % this._hour) / this._minute);
        this.seconds = Math.floor((distance % this._minute) / this._second);
    }
    goto(url) {
        this.router.navigate([url]);
    }
};
ItemOnePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService }
];
ItemOnePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-item-one',
        template: _raw_loader_item_one_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_one_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemOnePage);



/***/ }),

/***/ 22976:
/*!********************************************************************!*\
  !*** ./src/app/home/item-one/item-slider/item-slider.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemSliderComponent": () => (/* binding */ ItemSliderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_slider_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-slider.component.html */ 627);
/* harmony import */ var _item_slider_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-slider.component.scss */ 42574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let ItemSliderComponent = class ItemSliderComponent {
    constructor() { }
    ngOnInit() { }
};
ItemSliderComponent.ctorParameters = () => [];
ItemSliderComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ItemSliderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-item-slider',
        template: _raw_loader_item_slider_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_slider_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemSliderComponent);



/***/ }),

/***/ 43165:
/*!**************************************************************************!*\
  !*** ./src/app/home/item-one/virtical-items/virtical-items.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirticalItemsComponent": () => (/* binding */ VirticalItemsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_virtical_items_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./virtical-items.component.html */ 70940);
/* harmony import */ var _virtical_items_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./virtical-items.component.scss */ 77543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _seller_profile_model_seller_profile_model_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../seller-profile-model/seller-profile-model.page */ 14113);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);






let VirticalItemsComponent = class VirticalItemsComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.itemsVirticale = [
            {
                title: 'Refrigerador Qianku this is Qianku ',
                img: 'assets/homePage/items/virtical/coche5.png',
                profile: 'assets/homePage/items/virtical/profile.png',
                price: '$500',
                priceTag: '$700',
                upPriceTag: 'Rembolso Rápido',
                envio: 'Envío Gratis',
                ventas: '300+ ventas'
            },
            {
                title: 'Refrigerador Qianku',
                img: 'assets/homePage/items/virtical/4.jpg',
                profile: 'assets/homePage/items/virtical/profile.png',
                price: '$3000',
                priceTag: '$500',
                upPriceTag: 'Rembolso Rápido',
                envio: 'Envío Gratis',
                ventas: '300+ ventas'
            },
            {
                title: 'Refrigerador Qianku',
                img: 'assets/homePage/items/virtical/5.jpg',
                profile: 'assets/homePage/items/virtical/profile.png',
                price: '$900',
                priceTag: '$1200',
                upPriceTag: 'Rembolso Rápido',
                envio: 'Envío Gratis',
                ventas: '300+ ventas'
            }
        ];
    }
    ngOnInit() {
        //  this.openSellerProfileModel();
        //  this.openSellerProfileModel();
    }
    openSellerProfileModel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _seller_profile_model_seller_profile_model_page__WEBPACK_IMPORTED_MODULE_2__.SellerProfileModelPage,
            });
            return yield modal.present();
        });
    }
};
VirticalItemsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
VirticalItemsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-virtical-items',
        template: _raw_loader_virtical_items_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_virtical_items_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VirticalItemsComponent);



/***/ }),

/***/ 45076:
/*!****************************************************!*\
  !*** ./src/app/home/item-seven/item-seven.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemSevenPage": () => (/* binding */ ItemSevenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_seven_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-seven.page.html */ 30035);
/* harmony import */ var _item_seven_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-seven.page.scss */ 74321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemSevenPage = class ItemSevenPage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Luces',
                icon: 'assets/homePage/categories/hogar/led.png',
            },
            {
                title: 'Seguridad',
                icon: 'assets/homePage/categories/hogar/seguridad.png',
            },
            {
                title: 'Herramientas',
                icon: 'assets/homePage/categories/hogar/herramientas.png',
            },
            {
                title: 'Protección',
                icon: 'assets/homePage/categories/hogar/lentes.png',
            },
            {
                title: 'Baño',
                icon: 'assets/homePage/categories/hogar/baño.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Electrónica',
                icon: 'assets/homePage/categories/hogar/electronica.png',
            },
            {
                title: 'Cocina',
                icon: 'assets/homePage/categories/hogar/cocina.png',
            },
            {
                title: 'Pared y piso',
                icon: 'assets/homePage/categories/hogar/paredpiso.png',
            },
            {
                title: 'Herrajes',
                icon: 'assets/homePage/categories/hogar/candados.png',
            },
            {
                title: 'Otros...',
                icon: 'assets/homePage/categories/hogar/otros2.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemSevenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemSevenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-seven',
        template: _raw_loader_item_seven_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_seven_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemSevenPage);



/***/ }),

/***/ 7591:
/*!************************************************************!*\
  !*** ./src/app/home/item-seventeen/item-seventeen.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemSeventeenPage": () => (/* binding */ ItemSeventeenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_seventeen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-seventeen.page.html */ 75430);
/* harmony import */ var _item_seventeen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-seventeen.page.scss */ 94285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemSeventeenPage = class ItemSeventeenPage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Subasta',
                icon: 'assets/homePage/categories/accesorios/subasta.png',
            },
            {
                title: 'Joyas',
                icon: 'assets/homePage/categories/accesorios/joyas.png',
            },
            {
                title: 'Perlado',
                icon: 'assets/homePage/categories/accesorios/perla.png',
            },
            {
                title: 'Oro',
                icon: 'assets/homePage/categories/accesorios/oro.png',
            },
            {
                title: 'Reloj',
                icon: 'assets/homePage/categories/accesorios/reloj.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Brazalete',
                icon: 'assets/homePage/categories/accesorios/brazalete.png',
            },
            {
                title: 'Arete',
                icon: 'assets/homePage/categories/accesorios/aretes.png',
            },
            {
                title: 'Collar',
                icon: 'assets/homePage/categories/accesorios/collar.png',
            },
            {
                title: 'Lentes',
                icon: 'assets/homePage/categories/accesorios/lentes.png',
            },
            {
                title: 'Anillo',
                icon: 'assets/homePage/categories/accesorios/anillo.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Broches',
                icon: 'assets/homePage/categories/accesorios/broches.png',
            },
            {
                title: 'Decoración',
                icon: 'assets/homePage/categories/accesorios/decoracion.png',
            },
            {
                title: 'Pinturas',
                icon: 'assets/homePage/categories/accesorios/pintura.png',
            },
            {
                title: '',
                icon: '',
            },
            {
                title: '',
                icon: '',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemSeventeenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemSeventeenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-seventeen',
        template: _raw_loader_item_seventeen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_seventeen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemSeventeenPage);



/***/ }),

/***/ 93942:
/*!************************************************!*\
  !*** ./src/app/home/item-six/item-six.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemSixPage": () => (/* binding */ ItemSixPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_six_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-six.page.html */ 57823);
/* harmony import */ var _item_six_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-six.page.scss */ 63678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemSixPage = class ItemSixPage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Periféricos',
                icon: 'assets/homePage/categories/ordenador/perifericos.png',
            },
            {
                title: 'Videojuego',
                icon: 'assets/homePage/categories/ordenador/videojuego.png',
            },
            {
                title: 'Oficina',
                icon: 'assets/homePage/categories/ordenador/oficina.png',
            },
            {
                title: 'Portátil',
                icon: 'assets/homePage/categories/ordenador/portatil.png',
            },
            {
                title: 'Vigilancia',
                icon: 'assets/homePage/categories/ordenador/vigilancia.jpg',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Tabletas',
                icon: 'assets/homePage/categories/ordenador/tablet.png',
            },
            {
                title: 'PC',
                icon: 'assets/homePage/categories/ordenador/pc.png',
            },
            {
                title: 'Apple',
                icon: 'assets/homePage/categories/ordenador/apple.png',
            },
            {
                title: 'Otros...',
                icon: 'assets/homePage/categories/ordenador/otros.png',
            },
            {
                title: '',
                icon: '',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemSixPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemSixPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-six',
        template: _raw_loader_item_six_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_six_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemSixPage);



/***/ }),

/***/ 58820:
/*!********************************************************!*\
  !*** ./src/app/home/item-sixteen/item-sixteen.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemSixteenPage": () => (/* binding */ ItemSixteenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_sixteen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-sixteen.page.html */ 43700);
/* harmony import */ var _item_sixteen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-sixteen.page.scss */ 19837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemSixteenPage = class ItemSixteenPage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Hombre',
                icon: 'assets/homePage/categories/ropaInterior/hombre.png',
            },
            {
                title: 'Calcetín',
                icon: 'assets/homePage/categories/ropaInterior/calcetin.png',
            },
            {
                title: 'Sujetadores',
                icon: 'assets/homePage/categories/ropaInterior/sujetador.png',
            },
            {
                title: 'Pijamas',
                icon: 'assets/homePage/categories/ropaInterior/pijama.png',
            },
            {
                title: 'Cintura',
                icon: 'assets/homePage/categories/ropaInterior/cintura.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Mujer',
                icon: 'assets/homePage/categories/ropaInterior/mujer.png',
            },
            {
                title: 'Fundas',
                icon: 'assets/homePage/categories/ropaInterior/fundas.png',
            },
            {
                title: 'Sport',
                icon: 'assets/homePage/categories/ropaInterior/sport.png',
            },
            {
                title: 'Térmica',
                icon: 'assets/homePage/categories/ropaInterior/termica.png',
            },
            {
                title: 'Bufanda',
                icon: 'assets/homePage/categories/ropaInterior/bufanda.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Sombrero',
                icon: 'assets/homePage/categories/ropaInterior/sombrero.png',
            },
            {
                title: '',
                icon: '',
            },
            {
                title: '',
                icon: '',
            },
            {
                title: '',
                icon: '',
            },
            {
                title: '',
                icon: '',
            }
        ];
        this.categoriesRow4 = [
            {
                title: '',
                icon: '',
            },
            {
                title: '',
                icon: '',
            },
            {
                title: '',
                icon: '',
            },
            {
                title: '',
                icon: '',
            },
            {
                title: '',
                icon: '',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemSixteenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemSixteenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-sixteen',
        template: _raw_loader_item_sixteen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_sixteen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemSixteenPage);



/***/ }),

/***/ 24664:
/*!************************************************!*\
  !*** ./src/app/home/item-ten/item-ten.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTenPage": () => (/* binding */ ItemTenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_ten_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-ten.page.html */ 3132);
/* harmony import */ var _item_ten_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-ten.page.scss */ 77306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemTenPage = class ItemTenPage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Juguetes',
                icon: 'assets/homePage/categories/madrebebe/juguete.png',
            },
            {
                title: 'Carritos',
                icon: 'assets/homePage/categories/madrebebe/carrito.png',
            },
            {
                title: 'Niño',
                icon: 'assets/homePage/categories/madrebebe/niño.png',
            },
            {
                title: 'Niña',
                icon: 'assets/homePage/categories/madrebebe/niña.png',
            },
            {
                title: 'Calzado',
                icon: 'assets/homePage/categories/madrebebe/calzado.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Mamá',
                icon: 'assets/homePage/categories/madrebebe/mama.png',
            },
            {
                title: 'Pañales',
                icon: 'assets/homePage/categories/madrebebe/pañal.png',
            },
            {
                title: 'Lavado',
                icon: 'assets/homePage/categories/madrebebe/lavado.png',
            },
            {
                title: 'Alimento',
                icon: 'assets/homePage/categories/madrebebe/leche.png',
            },
            {
                title: 'Dormitorio',
                icon: 'assets/homePage/categories/madrebebe/dormitorio.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemTenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemTenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-ten',
        template: _raw_loader_item_ten_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_ten_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemTenPage);



/***/ }),

/***/ 6395:
/*!**********************************************************!*\
  !*** ./src/app/home/item-thirteen/item-thirteen.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemThirteenPage": () => (/* binding */ ItemThirteenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_thirteen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-thirteen.page.html */ 88741);
/* harmony import */ var _item_thirteen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-thirteen.page.scss */ 80803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemThirteenPage = class ItemThirteenPage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Cereales',
                icon: 'assets/homePage/categories/comida/cereales.png',
            },
            {
                title: 'Casuales',
                icon: 'assets/homePage/categories/comida/casuales.png',
            },
            {
                title: 'Nueces',
                icon: 'assets/homePage/categories/comida/nueces.png',
            },
            {
                title: 'Pasteles',
                icon: 'assets/homePage/categories/comida/pasteles.png',
            },
            {
                title: 'Lácteos',
                icon: 'assets/homePage/categories/comida/lacteos.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Nutritivo',
                icon: 'assets/homePage/categories/comida/nutritivo.png',
            },
            {
                title: 'Nutrición',
                icon: 'assets/homePage/categories/comida/nutricion.png',
            },
            {
                title: 'Agrícolas',
                icon: 'assets/homePage/categories/comida/agricola.png',
            },
            {
                title: 'Té',
                icon: 'assets/homePage/categories/comida/te.png',
            },
            {
                title: 'Vinos',
                icon: 'assets/homePage/categories/comida/vinos.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemThirteenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemThirteenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-thirteen',
        template: _raw_loader_item_thirteen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_thirteen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemThirteenPage);



/***/ }),

/***/ 78888:
/*!****************************************************!*\
  !*** ./src/app/home/item-three/item-three.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemThreePage": () => (/* binding */ ItemThreePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_three_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-three.page.html */ 5379);
/* harmony import */ var _item_three_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-three.page.scss */ 87866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemThreePage = class ItemThreePage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Computadora',
                icon: 'assets/homePage/categories/telefonos/computadora.png',
            },
            {
                title: 'Inteligente',
                icon: 'assets/homePage/categories/telefonos/inteligente.png',
            },
            {
                title: 'Audio',
                icon: 'assets/homePage/categories/telefonos/audiovideo.png',
            },
            {
                title: 'Andoid',
                icon: 'assets/homePage/categories/telefonos/android.png',
            },
            {
                title: 'Apple',
                icon: 'assets/homePage/categories/telefonos/iphone.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Carga',
                icon: 'assets/homePage/categories/telefonos/carga.png',
            },
            {
                title: 'Soportes',
                icon: 'assets/homePage/categories/telefonos/soporte.png',
            },
            {
                title: 'Bateria',
                icon: 'assets/homePage/categories/telefonos/bateria.png',
            },
            {
                title: 'Microfonos',
                icon: 'assets/homePage/categories/telefonos/microfono2.png',
            },
            {
                title: 'Cámara',
                icon: 'assets/homePage/categories/telefonos/camara.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemThreePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemThreePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-three',
        template: _raw_loader_item_three_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_three_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemThreePage);



/***/ }),

/***/ 33280:
/*!******************************************************!*\
  !*** ./src/app/home/item-twelve/item-twelve.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTwelvePage": () => (/* binding */ ItemTwelvePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_twelve_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-twelve.page.html */ 56460);
/* harmony import */ var _item_twelve_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-twelve.page.scss */ 82083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemTwelvePage = class ItemTwelvePage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Cámaras y accesorios',
                icon: 'assets/homePage/categories/autos/1.png',
            },
            {
                title: 'Autos',
                icon: 'assets/homePage/categories/autos/2.png',
            },
            {
                title: 'Celulares y Telefonia',
                icon: 'assets/homePage/categories/autos/3.png',
            },
            {
                title: 'Motos',
                icon: 'assets/homePage/categories/autos/4.png',
            },
            {
                title: 'Entrega de comida fresca',
                icon: 'assets/homePage/categories/autos/5.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/autos/6.png',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/autos/7.png',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/autos/8.png',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/autos/9.png',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/autos/10.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
    gotoNextautos() {
        this.router.navigate([`tabs/nextautos`]);
    }
};
ItemTwelvePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemTwelvePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-twelve',
        template: _raw_loader_item_twelve_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_twelve_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemTwelvePage);



/***/ }),

/***/ 83643:
/*!**************************************************************!*\
  !*** ./src/app/home/item-twenty-one/item-twenty-one.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTwentyOnePage": () => (/* binding */ ItemTwentyOnePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_twenty_one_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-twenty-one.page.html */ 70089);
/* harmony import */ var _item_twenty_one_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-twenty-one.page.scss */ 17417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemTwentyOnePage = class ItemTwentyOnePage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Casas',
                icon: 'assets/homePage/categories/Inmuebles/casa.png',
            },
            {
                title: 'Departamentos',
                icon: 'assets/homePage/categories/Inmuebles/Departamentos.png',
            },
            {
                title: 'Terrenos',
                icon: 'assets/homePage/categories/Inmuebles/terrenos.png',
            },
            {
                title: 'Oficinas',
                icon: 'assets/homePage/categories/Inmuebles/oficinas.png',
            },
            {
                title: 'Locales',
                icon: 'assets/homePage/categories/Inmuebles/locales.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Bodegas',
                icon: 'assets/homePage/categories/Inmuebles/bodega.png',
            },
            {
                title: 'Alquiler',
                icon: 'assets/homePage/categories/Inmuebles/renta.png',
            },
            {
                title: 'Garage',
                icon: 'assets/homePage/categories/Inmuebles/rancho.png',
            },
            {
                title: '',
                icon: '',
            },
            {
                title: '',
                icon: '',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemTwentyOnePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemTwentyOnePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-twenty-one',
        template: _raw_loader_item_twenty_one_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_twenty_one_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemTwentyOnePage);



/***/ }),

/***/ 26137:
/*!******************************************************!*\
  !*** ./src/app/home/item-twenty/item-twenty.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTwentyPage": () => (/* binding */ ItemTwentyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_twenty_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-twenty.page.html */ 76865);
/* harmony import */ var _item_twenty_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-twenty.page.scss */ 47358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ItemTwentyPage = class ItemTwentyPage {
    constructor(router) {
        this.router = router;
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
        this.categoriesRow1 = [
            {
                title: 'Frutas',
                icon: 'assets/homePage/categories/fruta/fruta.png',
            },
            {
                title: 'Mariscos',
                icon: 'assets/homePage/categories/fruta/mariscos.png',
            },
            {
                title: 'Verduras',
                icon: 'assets/homePage/categories/fruta/verduras.png',
            },
            {
                title: 'Carne',
                icon: 'assets/homePage/categories/fruta/carne.png',
            },
            {
                title: 'Huevos',
                icon: 'assets/homePage/categories/fruta/huevos.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Helados',
                icon: 'assets/homePage/categories/fruta/helados.png',
            },
            {
                title: 'Cítricos',
                icon: 'assets/homePage/categories/fruta/citricos.png',
            },
            {
                title: 'Tropical',
                icon: 'assets/homePage/categories/fruta/tropicales.png',
            },
            {
                title: '',
                icon: '',
            },
            {
                title: '',
                icon: '',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`tabs/home/item-two/${id}`]);
    }
};
ItemTwentyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ItemTwentyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-twenty',
        template: _raw_loader_item_twenty_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_twenty_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemTwentyPage);



/***/ }),

/***/ 87910:
/*!************************************************!*\
  !*** ./src/app/home/item-two/item-two.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTwoPage": () => (/* binding */ ItemTwoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_two_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-two.page.html */ 37205);
/* harmony import */ var _item_two_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-two.page.scss */ 5315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category.service */ 54655);






let ItemTwoPage = class ItemTwoPage {
    constructor(router, catSrv) {
        this.router = router;
        this.catSrv = catSrv;
        this.items = [{
                id: 1,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/1.png',
                people: 'assets/homePage/item-two/g1.png',
                ventas: '300+ ventas'
            }, {
                id: 2,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/2.png',
                people: 'assets/homePage/item-two/g3.png',
                ventas: '300+ ventas'
            }, {
                id: 3,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/3.png',
                people: 'assets/homePage/item-two/g3.png',
                ventas: '300+ ventas'
            }, {
                id: 4,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/4.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }, {
                id: 5,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/1.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }, {
                id: 6,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/2.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }];
        this.categoriesRow1 = [
            {
                title: 'Estudio',
                icon: 'assets/homePage/categories/muebles/estudio.png',
            },
            {
                title: 'Sillas',
                icon: 'assets/homePage/categories/muebles/sillasytaburetes.jpg',
            },
            {
                title: 'Oficina',
                icon: 'assets/homePage/categories/muebles/oficina.png',
            },
            {
                title: 'Dormitorio',
                icon: 'assets/homePage/categories/muebles/dormitorio.png',
            },
            {
                title: 'Salón',
                icon: 'assets/homePage/categories/muebles/salon.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Comedor',
                icon: 'assets/homePage/categories/muebles/comedor.png',
            },
            {
                title: 'Infantil',
                icon: 'assets/homePage/categories/muebles/infantil.png',
            },
            {
                title: 'Patio',
                icon: 'assets/homePage/categories/muebles/patio.png',
            },
            {
                title: 'Estante',
                icon: 'assets/homePage/categories/muebles/estante.png',
            },
            {
                title: 'vestibulo',
                icon: 'assets/homePage/categories/muebles/vestibulo.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
        console.log(this.cateId);
        this.catSrv.getAllSub(this.cateId).subscribe((resp) => {
            console.log(resp);
        });
    }
    gotoItem(id) {
        this.router.navigate([`/home/item-two/${id}`]);
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
};
ItemTwoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService }
];
ItemTwoPage.propDecorators = {
    cateId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ItemTwoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-two',
        template: _raw_loader_item_two_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_two_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemTwoPage);



/***/ }),

/***/ 67651:
/*!************************************************!*\
  !*** ./src/app/home/mascotas/mascotas.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MascotasPage": () => (/* binding */ MascotasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mascotas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mascotas.page.html */ 65592);
/* harmony import */ var _mascotas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mascotas.page.scss */ 6098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let MascotasPage = class MascotasPage {
    constructor(router) {
        this.router = router;
        this.items = [{
                id: 1,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/1.png',
                people: 'assets/homePage/item-two/g1.png',
                ventas: '300+ ventas'
            }, {
                id: 2,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/2.png',
                people: 'assets/homePage/item-two/g3.png',
                ventas: '300+ ventas'
            }, {
                id: 3,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/3.png',
                people: 'assets/homePage/item-two/g3.png',
                ventas: '300+ ventas'
            }, {
                id: 4,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/4.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }, {
                id: 5,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/1.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }, {
                id: 6,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/2.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }];
        this.categoriesRow1 = [
            {
                title: 'Aves',
                icon: 'assets/homePage/categories/mascota/aves.png',
            },
            {
                title: 'Conejos',
                icon: 'assets/homePage/categories/mascota/conejo.png',
            },
            {
                title: 'Equinos',
                icon: 'assets/homePage/categories/mascota/equino.png',
            },
            {
                title: 'Gatos',
                icon: 'assets/homePage/categories/mascota/gato.png',
            },
            {
                title: 'Insectos',
                icon: 'assets/homePage/categories/mascota/insectos.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Peces',
                icon: 'assets/homePage/categories/mascota/peces.png',
            },
            {
                title: 'Perros',
                icon: 'assets/homePage/categories/mascota/perro.png',
            },
            {
                title: 'Reptiles',
                icon: 'assets/homePage/categories/mascota/reptiles.png',
            },
            {
                title: 'Roedores',
                icon: 'assets/homePage/categories/mascota/roedores.png',
            },
            {
                title: 'Otros...',
                icon: 'assets/homePage/categories/mascota/animales.png',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`/home/item-two/${id}`]);
    }
};
MascotasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MascotasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-mascotas',
        template: _raw_loader_mascotas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mascotas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MascotasPage);



/***/ }),

/***/ 14113:
/*!************************************************************************!*\
  !*** ./src/app/home/seller-profile-model/seller-profile-model.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerProfileModelPage": () => (/* binding */ SellerProfileModelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_seller_profile_model_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./seller-profile-model.page.html */ 51380);
/* harmony import */ var _seller_profile_model_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seller-profile-model.page.scss */ 11825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let SellerProfileModelPage = class SellerProfileModelPage {
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
SellerProfileModelPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
SellerProfileModelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-seller-profile-model',
        template: _raw_loader_seller_profile_model_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_seller_profile_model_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SellerProfileModelPage);



/***/ }),

/***/ 58812:
/*!**************************************************!*\
  !*** ./src/app/home/servicios/servicios.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiciosPage": () => (/* binding */ ServiciosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_servicios_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./servicios.page.html */ 28613);
/* harmony import */ var _servicios_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios.page.scss */ 55138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ServiciosPage = class ServiciosPage {
    constructor(router) {
        this.router = router;
        this.items = [{
                id: 1,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/1.png',
                people: 'assets/homePage/item-two/g1.png',
                ventas: '300+ ventas'
            }, {
                id: 2,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/2.png',
                people: 'assets/homePage/item-two/g3.png',
                ventas: '300+ ventas'
            }, {
                id: 3,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/3.png',
                people: 'assets/homePage/item-two/g3.png',
                ventas: '300+ ventas'
            }, {
                id: 4,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/4.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }, {
                id: 5,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/1.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }, {
                id: 6,
                title: 'Refrigerador Qianku',
                subTitle: 'Envío Gratis',
                price: '$000',
                priceNote: '$30',
                rembolso: 'Rembolso Rápido',
                img: 'assets/homePage/item-two/2.png',
                people: 'assets/homePage/item-two/g4.png',
                ventas: '300+ ventas'
            }];
        this.categoriesRow1 = [
            {
                title: 'Belleza',
                icon: 'assets/homePage/categories/Servicios/belleza.png',
            },
            {
                title: 'Cursos',
                icon: 'assets/homePage/categories/Servicios/cursos.png',
            },
            {
                title: 'Eventos',
                icon: 'assets/homePage/categories/Servicios/eventos.png',
            },
            {
                title: 'Hogar',
                icon: 'assets/homePage/categories/Servicios/hogar.png',
            },
            {
                title: 'Imprenta',
                icon: 'assets/homePage/categories/Servicios/imprenta.png',
            }
        ];
        this.categoriesRow2 = [
            {
                title: 'Reparación',
                icon: 'assets/homePage/categories/Servicios/servicio.png',
            },
            {
                title: 'Transporte',
                icon: 'assets/homePage/categories/Servicios/transporte.png',
            },
            {
                title: 'Veterinaria',
                icon: 'assets/homePage/categories/Servicios/veterinario.png',
            },
            {
                title: '',
                icon: '',
            },
            {
                title: '',
                icon: '',
            }
        ];
        this.categoriesRow3 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/super.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/tenis.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/audio.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/camara.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/carro.svg',
            }
        ];
        this.categoriesRow4 = [
            {
                title: 'Importaciones de ultramar',
                icon: 'assets/homePage/categories/celular.svg',
            },
            {
                title: 'Medicina salud',
                icon: 'assets/homePage/categories/game.svg',
            },
            {
                title: 'Servicios domésticos',
                icon: 'assets/homePage/categories/labial.svg',
            },
            {
                title: 'Inactivo de segunda mano',
                icon: 'assets/homePage/categories/laptop.svg',
            },
            {
                title: 'Comida deliciosa',
                icon: 'assets/homePage/categories/mueble.svg',
            }
        ];
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
    }
    gotoItem(id) {
        this.router.navigate([`/home/item-two/${id}`]);
    }
};
ServiciosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ServiciosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-servicios',
        template: _raw_loader_servicios_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_servicios_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ServiciosPage);



/***/ }),

/***/ 47659:
/*!****************************************************!*\
  !*** ./src/app/home/artesania/artesania.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGVzYW5pYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKIiwiZmlsZSI6ImFydGVzYW5pYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3Qtcm93IHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnJpZ2h0LWNvbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNhdGVnb3JpZXMge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcclxufSJdfQ== */");

/***/ }),

/***/ 36460:
/*!************************************************!*\
  !*** ./src/app/home/empleos/empleos.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxlb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSiIsImZpbGUiOiJlbXBsZW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1yb3cge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLmxlZnQtY29sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtY29sIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmdyaWQtY2F0ZWdvcmllcyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xyXG59Il19 */");

/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-header {\n  background-image: url('Background.png');\n}\n\ninput {\n  padding-left: 50px;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n}\n\nion-menu-button {\n  color: #FFF;\n}\n\n::-webkit-input-placeholder {\n  text-align: left;\n}\n\nion-header::after {\n  background-image: none;\n}\n\nion-buttons::after {\n  background-image: none;\n}\n\ninput {\n  box-sizing: border-box;\n}\n\nion-grid {\n  --ion-grid-columns: 10;\n}\n\n.count-down-digit-container {\n  color: #ffff;\n  background: #bb0000;\n  text-align: center;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 21px;\n  height: 21px;\n  margin-left: 2px;\n}\n\n.count-down-dot-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2px;\n  font-weight: bold;\n}\n\n.gradient {\n  height: 27px;\n  text-align: center;\n}\n\n.top-item-slider {\n  overflow: auto;\n  white-space: nowrap;\n  display: flex;\n  -webkit-overflow-scrolling: touch;\n  color: #FFFFFF;\n  justify-content: space-between;\n}\n\n.top-item {\n  margin: 0px 10px 10px 10px;\n  padding-bottom: 5px;\n}\n\n.top-item-selected {\n  color: #fcf29b;\n  border-bottom: 3px solid white;\n}\n\n.sticky {\n  position: sticky;\n  top: 0;\n}\n\n.first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n\n#productImage {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBOzs7RUFHRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9oZWFkZXIvQmFja2dyb3VuZC5wbmcnKTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzLFxyXG5zZWxlY3Q6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW9uLWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1idXR0b25zOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xyXG59XHJcblxyXG4uY291bnQtZG93bi1kaWdpdC1jb250YWluZXIge1xyXG4gIGNvbG9yOiAjZmZmZjtcclxuICBiYWNrZ3JvdW5kOiAjYmIwMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAyMXB4O1xyXG4gIGhlaWdodDogMjFweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcblxyXG4uY291bnQtZG93bi1kb3QtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmdyYWRpZW50IHtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udG9wLWl0ZW0tc2xpZGVyIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRvcC1pdGVtIHtcclxuICBtYXJnaW46IDBweCAxMHB4IDEwcHggMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4udG9wLWl0ZW0tc2VsZWN0ZWQge1xyXG4gIGNvbG9yOiAjZmNmMjliO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnN0aWNreSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5maXJzdC1yb3cge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jb2wge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmdyaWQtY2F0ZWdvcmllcyB7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcclxufVxyXG5cclxuI3Byb2R1Y3RJbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 90230:
/*!******************************************************!*\
  !*** ./src/app/home/item-eight/item-eight.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZWlnaHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSiIsImZpbGUiOiJpdGVtLWVpZ2h0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1yb3cge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLmxlZnQtY29sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtY29sIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmdyaWQtY2F0ZWdvcmllcyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xyXG59Il19 */");

/***/ }),

/***/ 71882:
/*!************************************************************!*\
  !*** ./src/app/home/item-eighteen/item-eighteen.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZWlnaHRlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSiIsImZpbGUiOiJpdGVtLWVpZ2h0ZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1yb3cge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLmxlZnQtY29sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtY29sIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmdyaWQtY2F0ZWdvcmllcyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xyXG59Il19 */");

/***/ }),

/***/ 72054:
/*!********************************************************!*\
  !*** ./src/app/home/item-eleven/item-eleven.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZWxldmVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoiaXRlbS1lbGV2ZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubGVmdC1jb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jb2wge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jYXRlZ29yaWVzIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uczogMTA7XHJcbn0iXX0= */");

/***/ }),

/***/ 16856:
/*!**********************************************************!*\
  !*** ./src/app/home/item-fifteen/item-fifteen.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZmlmdGVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKIiwiZmlsZSI6Iml0ZW0tZmlmdGVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jYXRlZ29yaWVzIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uczogMTA7XHJcbn0iXX0= */");

/***/ }),

/***/ 1353:
/*!****************************************************!*\
  !*** ./src/app/home/item-five/item-five.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZml2ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKIiwiZmlsZSI6Iml0ZW0tZml2ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3Qtcm93IHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnJpZ2h0LWNvbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNhdGVnb3JpZXMge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcclxufSJdfQ== */");

/***/ }),

/***/ 91090:
/*!****************************************************!*\
  !*** ./src/app/home/item-four/item-four.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZm91ci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKIiwiZmlsZSI6Iml0ZW0tZm91ci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3Qtcm93IHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnJpZ2h0LWNvbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNhdGVnb3JpZXMge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcclxufSJdfQ== */");

/***/ }),

/***/ 6985:
/*!************************************************************!*\
  !*** ./src/app/home/item-fourteen/item-fourteen.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZm91cnRlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSiIsImZpbGUiOiJpdGVtLWZvdXJ0ZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1yb3cge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLmxlZnQtY29sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtY29sIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmdyaWQtY2F0ZWdvcmllcyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xyXG59Il19 */");

/***/ }),

/***/ 2153:
/*!************************************************************!*\
  !*** ./src/app/home/item-nighteen/item-nighteen.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tbmlnaHRlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSiIsImZpbGUiOiJpdGVtLW5pZ2h0ZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1yb3cge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLmxlZnQtY29sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtY29sIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmdyaWQtY2F0ZWdvcmllcyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xyXG59Il19 */");

/***/ }),

/***/ 1222:
/*!****************************************************!*\
  !*** ./src/app/home/item-nine/item-nine.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tbmluZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKIiwiZmlsZSI6Iml0ZW0tbmluZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3Qtcm93IHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnJpZ2h0LWNvbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNhdGVnb3JpZXMge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcclxufSJdfQ== */");

/***/ }),

/***/ 69033:
/*!********************************************************************************!*\
  !*** ./src/app/home/item-one/horizontal-items/horizontal-items.component.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLWl0ZW1zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 20342:
/*!**************************************************!*\
  !*** ./src/app/home/item-one/item-one.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nion-header {\n  background-image: linear-gradient(to right, #4c49de 0%, #8766ea 100%);\n}\n\ninput {\n  padding-left: 50px;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n}\n\nion-menu-button {\n  color: #FFF;\n}\n\n::-webkit-input-placeholder {\n  text-align: left;\n}\n\nion-header::after {\n  background-image: none;\n}\n\nion-buttons::after {\n  background-image: none;\n}\n\ninput {\n  box-sizing: border-box;\n}\n\nion-grid {\n  --ion-grid-columns: 10;\n}\n\n.count-down-digit-container {\n  color: #ffff;\n  background: #bb0000;\n  text-align: center;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  margin-left: 2px;\n}\n\n.count-down-dot-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 2px;\n  font-weight: bold;\n}\n\n.gradient {\n  background-image: linear-gradient(to right, #4c49de 0%, #8766ea 100%);\n  height: 27px;\n  text-align: center;\n}\n\n.top-item-slider {\n  overflow: auto;\n  white-space: nowrap;\n  display: flex;\n  -webkit-overflow-scrolling: touch;\n  color: #FFFFFF;\n  justify-content: space-between;\n}\n\n.top-item {\n  margin: 0px 10px 10px 10px;\n  padding-bottom: 5px;\n}\n\n.top-item-selected {\n  color: #fcf29b;\n  border-bottom: 3px solid #fcf29b;\n}\n\n#catImage {\n  width: 60px;\n  height: 60px;\n  border-radius: 60px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxRUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTs7O0VBR0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFFQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoiaXRlbS1vbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0YzQ5ZGUgMCUsICM4NzY2ZWEgMTAwJSk7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyxcclxuc2VsZWN0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gIGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG5pb24tYnV0dG9uczo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcclxufVxyXG5cclxuLmNvdW50LWRvd24tZGlnaXQtY29udGFpbmVyIHtcclxuICBjb2xvcjogI2ZmZmY7XHJcbiAgYmFja2dyb3VuZDogI2JiMDAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLmNvdW50LWRvd24tZG90LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ncmFkaWVudCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGM0OWRlIDAlLCAjODc2NmVhIDEwMCUpO1xyXG4gIGhlaWdodDogMjdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b3AtaXRlbS1zbGlkZXIge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udG9wLWl0ZW0ge1xyXG4gIG1hcmdpbjogMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi50b3AtaXRlbS1zZWxlY3RlZCB7XHJcbiAgY29sb3I6ICNmY2YyOWI7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmY2YyOWI7XHJcbn1cclxuXHJcbiNjYXRJbWFnZSB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 42574:
/*!**********************************************************************!*\
  !*** ./src/app/home/item-one/item-slider/item-slider.component.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  scroll-behavior: smooth;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  overflow: auto;\n  white-space: nowrap;\n  display: flex;\n  -webkit-overflow-scrolling: touch;\n  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n}\n\n.oneItem {\n  box-sizing: border-box;\n  display: inline-block;\n  background: #fcfcfc;\n  width: 100px;\n  padding: 15px 10px 10px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.img-container {\n  background: #FFFFFF;\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(14, 30, 37, 0.32) 0px 0px 10px 0px;\n}\n\nimg {\n  max-height: 80px;\n  max-width: 80px;\n  object-fit: contain;\n}\n\n.item-title-div {\n  font-weight: bold;\n  font-family: Arial;\n  margin: 5px 0;\n  padding: 1%;\n  width: 80px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsMkZBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtREFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSiIsImZpbGUiOiJpdGVtLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0LCAzMCwgMzcsIDAuMTIpIDBweCAycHggNHB4IDBweCwgcmdiYSgxNCwgMzAsIDM3LCAwLjMyKSAwcHggMnB4IDE2cHggMHB4O1xyXG59XHJcblxyXG4ub25lSXRlbSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogI2ZjZmNmYztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0LCAzMCwgMzcsIDAuMzIpIDBweCAwcHggMTBweCAwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLml0ZW0tdGl0bGUtZGl2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59Il19 */");

/***/ }),

/***/ 77543:
/*!****************************************************************************!*\
  !*** ./src/app/home/item-one/virtical-items/virtical-items.component.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXJ0aWNhbC1pdGVtcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 74321:
/*!******************************************************!*\
  !*** ./src/app/home/item-seven/item-seven.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tc2V2ZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSiIsImZpbGUiOiJpdGVtLXNldmVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1yb3cge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLmxlZnQtY29sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtY29sIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmdyaWQtY2F0ZWdvcmllcyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xyXG59Il19 */");

/***/ }),

/***/ 94285:
/*!**************************************************************!*\
  !*** ./src/app/home/item-seventeen/item-seventeen.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tc2V2ZW50ZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoiaXRlbS1zZXZlbnRlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubGVmdC1jb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jb2wge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jYXRlZ29yaWVzIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uczogMTA7XHJcbn0iXX0= */");

/***/ }),

/***/ 63678:
/*!**************************************************!*\
  !*** ./src/app/home/item-six/item-six.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tc2l4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoiaXRlbS1zaXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubGVmdC1jb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jb2wge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jYXRlZ29yaWVzIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uczogMTA7XHJcbn0iXX0= */");

/***/ }),

/***/ 19837:
/*!**********************************************************!*\
  !*** ./src/app/home/item-sixteen/item-sixteen.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tc2l4dGVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKIiwiZmlsZSI6Iml0ZW0tc2l4dGVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3Qtcm93IHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnJpZ2h0LWNvbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNhdGVnb3JpZXMge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcclxufSJdfQ== */");

/***/ }),

/***/ 77306:
/*!**************************************************!*\
  !*** ./src/app/home/item-ten/item-ten.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tdGVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoiaXRlbS10ZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubGVmdC1jb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jb2wge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jYXRlZ29yaWVzIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uczogMTA7XHJcbn0iXX0= */");

/***/ }),

/***/ 80803:
/*!************************************************************!*\
  !*** ./src/app/home/item-thirteen/item-thirteen.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tdGhpcnRlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSiIsImZpbGUiOiJpdGVtLXRoaXJ0ZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1yb3cge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLmxlZnQtY29sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtY29sIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmdyaWQtY2F0ZWdvcmllcyB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xyXG59Il19 */");

/***/ }),

/***/ 87866:
/*!******************************************************!*\
  !*** ./src/app/home/item-three/item-three.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tdGhyZWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRiIsImZpbGUiOiJpdGVtLXRocmVlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1yb3cge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jb2wge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmdyaWQtY2F0ZWdvcmllcyB7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 82083:
/*!********************************************************!*\
  !*** ./src/app/home/item-twelve/item-twelve.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tdHdlbHZlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoiaXRlbS10d2VsdmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubGVmdC1jb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jb2wge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jYXRlZ29yaWVzIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uczogMTA7XHJcbn0iXX0= */");

/***/ }),

/***/ 17417:
/*!****************************************************************!*\
  !*** ./src/app/home/item-twenty-one/item-twenty-one.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tdHdlbnR5LW9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKIiwiZmlsZSI6Iml0ZW0tdHdlbnR5LW9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3Qtcm93IHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnJpZ2h0LWNvbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNhdGVnb3JpZXMge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcclxufSJdfQ== */");

/***/ }),

/***/ 47358:
/*!********************************************************!*\
  !*** ./src/app/home/item-twenty/item-twenty.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tdHdlbnR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoiaXRlbS10d2VudHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubGVmdC1jb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jb2wge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jYXRlZ29yaWVzIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uczogMTA7XHJcbn0iXX0= */");

/***/ }),

/***/ 5315:
/*!**************************************************!*\
  !*** ./src/app/home/item-two/item-two.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tdHdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoiaXRlbS10d28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubGVmdC1jb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jb2wge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jYXRlZ29yaWVzIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uczogMTA7XHJcbn0iXX0= */");

/***/ }),

/***/ 6098:
/*!**************************************************!*\
  !*** ./src/app/home/mascotas/mascotas.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2NvdGFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoibWFzY290YXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubGVmdC1jb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jb2wge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1jYXRlZ29yaWVzIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uczogMTA7XHJcbn0iXX0= */");

/***/ }),

/***/ 11825:
/*!**************************************************************************!*\
  !*** ./src/app/home/seller-profile-model/seller-profile-model.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".color-header {\n  height: 40px;\n}\n\nion-header::after {\n  background-image: none;\n}\n\nhr {\n  background: #e7e7e7;\n  height: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGxlci1wcm9maWxlLW1vZGVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJzZWxsZXItcHJvZmlsZS1tb2RlbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItaGVhZGVyIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG5ocntcclxuICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xyXG4gIGhlaWdodDogMXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 55138:
/*!****************************************************!*\
  !*** ./src/app/home/servicios/servicios.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".first-row {\n  padding-top: 0px;\n}\n\n.left-col {\n  padding-left: 0px;\n}\n\n.right-col {\n  padding-right: 0px;\n}\n\n.grid-categories {\n  --ion-grid-columns: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2lvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKIiwiZmlsZSI6InNlcnZpY2lvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3Qtcm93IHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnJpZ2h0LWNvbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNhdGVnb3JpZXMge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcclxufSJdfQ== */");

/***/ }),

/***/ 8280:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/artesania/artesania.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n    <ion-slides pager=\"false\">\r\n        <ion-slide>\r\n            <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n                <ion-row class=\"ion-justify-content-around\">\r\n                    <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                        <div>\r\n                            <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                            <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                                {{item.title}}\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                        <div>\r\n                            <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                            <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                                {{item.title}}\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-slide>\r\n        <!-- <ion-slide>\r\n          <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n              <ion-row class=\"ion-justify-content-around\">\r\n                  <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                      <div>\r\n                          <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                          <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                              {{item.title}}\r\n                          </div>\r\n                      </div>\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                      <div>\r\n                          <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                          <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                              {{item.title}}\r\n                          </div>\r\n                      </div>\r\n                  </ion-col>\r\n              </ion-row>\r\n          </ion-grid>\r\n      </ion-slide> -->\r\n        <!-- <ion-slide>\r\n          <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n              <ion-row class=\"ion-justify-content-around\">\r\n                  <ion-col size=\"2\" *ngFor=\"let item of categoriesRow5;\">\r\n                      <div>\r\n                          <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                          <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                              {{item.title}}\r\n                          </div>\r\n                      </div>\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                      <div>\r\n                          <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                          <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                              {{item.title}}\r\n                          </div>\r\n                      </div>\r\n                  </ion-col>\r\n              </ion-row>\r\n          </ion-grid>\r\n      </ion-slide> -->\r\n\r\n    </ion-slides>\r\n\r\n    <ion-grid style=\"padding: 0px\">\r\n        <ion-row>\r\n            <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n                <img [src]=\"item.img\" />\r\n                <ion-row>\r\n                    <ion-col style=\"padding-bottom: 0px\">\r\n                        <span style=\"font-size: 16px;\">{{item.title}} </span> <br> <span style=\"color: rgb(13, 172, 13); font-size: 10px;\">{{item.subTitle}} </span> <span style=\"color:#a5a5a5; font-size: 10px; margin-left: 5px;\"> {{item.rembolso}}</span>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                    <div style=\"color: #6A7586\">\r\n                        <span style=\"color: #DF2E24; margin-right: 5px; font-size: 15px; font-weight: bold;\">{{item.price}}</span>\r\n                        <span><s>{{item.priceNote}} </s></span>\r\n                        <span style=\"margin-left: 8px;\"> {{item.ventas}}</span>\r\n                    </div>\r\n                    <div *ngIf=\"item.people\">\r\n                        <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                    </div>\r\n                </ion-row>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ 46378:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/empleos/empleos.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n    <ion-slides pager=\"false\">\r\n        <ion-slide>\r\n            <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n                <ion-row class=\"ion-justify-content-around\">\r\n                    <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                        <div>\r\n                            <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                            <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                                {{item.title}}\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                        <div>\r\n                            <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                            <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                                {{item.title}}\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-slide>\r\n        <!-- <ion-slide>\r\n            <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n                <ion-row class=\"ion-justify-content-around\">\r\n                    <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                        <div>\r\n                            <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                            <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                                {{item.title}}\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                        <div>\r\n                            <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                            <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                                {{item.title}}\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-slide> -->\r\n        <!-- <ion-slide>\r\n            <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n                <ion-row class=\"ion-justify-content-around\">\r\n                    <ion-col size=\"2\" *ngFor=\"let item of categoriesRow5;\">\r\n                        <div>\r\n                            <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                            <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                                {{item.title}}\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                        <div>\r\n                            <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                            <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                                {{item.title}}\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-slide> -->\r\n\r\n    </ion-slides>\r\n\r\n    <ion-grid style=\"padding: 0px\">\r\n        <ion-row>\r\n            <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n                <img [src]=\"item.img\" />\r\n                <ion-row>\r\n                    <ion-col style=\"padding-bottom: 0px\">\r\n                        <span style=\"font-size: 16px;\">{{item.title}} </span> <br> <span style=\"color: rgb(13, 172, 13); font-size: 10px;\">{{item.subTitle}} </span> <span style=\"color:#a5a5a5; font-size: 10px; margin-left: 5px;\"> {{item.rembolso}}</span>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                    <div style=\"color: #6A7586\">\r\n                        <span style=\"color: #DF2E24; margin-right: 5px; font-size: 15px; font-weight: bold;\">{{item.price}}</span>\r\n                        <span><s>{{item.priceNote}} </s></span>\r\n                        <span style=\"margin-left: 8px;\"> {{item.ventas}}</span>\r\n                    </div>\r\n                    <div *ngIf=\"item.people\">\r\n                        <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                    </div>\r\n                </ion-row>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <div style=\"height:65px; display: flex; align-items: center; justify-content: space-around\">\r\n    <div style=\"position:relative;margin-right: 10px;width: 80%; height: 35px; border-radius: 20px; border: 0px;\">\r\n      <input placeholder=\"Buscar\"\r\n        style=\"width: 100%; height: 35px; border-radius: 20px; border: 0px; margin-left: 10px !important;\" />\r\n      <div style=\"position: absolute; left: 25px; top: 10px\">\r\n        <img src=\"assets/homePage/searchIcon.png\" style=\"width: 13px;\" />\r\n      </div>\r\n      <div style=\"position: absolute; right: 10px;top: 10px\">\r\n        <img src=\"assets/homePage/cameraIcon.png\" style=\"width: 13px;\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"margin-right: 15px; margin-left: 10px;\">\r\n      <a href=\"\"> <img src=\"assets/homePage/scanIcon.png\" href style=\"width: 30px\" /></a>\r\n    </div>\r\n    <div style=\"margin-right: 15px\">\r\n      <img src=\"assets/homePage/plusIcon.png\" style=\"width: 30px;\" />\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"gradient sticky\" style=\"overflow-y: hidden;\">\r\n    <div class=\"top-item-slider\">\r\n      <div *ngFor=\"let item of topSliderItems;let i = index\" (click)=\"selectCategory(i,item?._id)\"\r\n        [class]=\"selectedCategory===i? 'top-item top-item-selected':'top-item'\">\r\n        {{item.name}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid *ngIf=\"selectedCategory===0\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-slides pager=\"false\">\r\n          <ion-slide>\r\n            <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\">\r\n              <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\" (click)=\"childcategory(item)\">\r\n                  <div>\r\n                    <img style=\"width: 60px; \" src=\"{{baseUrl}}/{{item?.image}}\" />\r\n                    <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                      {{item?.name}}\r\n                    </div>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-slide>\r\n        </ion-slides>\r\n        <div style=\"display: flex;justify-content: space-between;\">\r\n          <div\r\n            style=\"padding-top:1px;border-left: 10px solid #ff0000; font-weight: bold; padding-left: 5px; font-size: 15px; display: flex; align-items: center\">\r\n            <div>\r\n              Ofertas de la semana\r\n            </div>\r\n          </div>\r\n          <div style=\"color: #bb0000; display: flex; margin-right: 20px\">\r\n            <div class=\"count-down-digit-container\">{{day}}</div>\r\n            <div class=\"count-down-dot-container\">:</div>\r\n            <div class=\"count-down-digit-container\">{{hours}}</div>\r\n            <div class=\"count-down-dot-container\">:</div>\r\n            <div class=\"count-down-digit-container\">{{minutes}}</div>\r\n            <div class=\"count-down-dot-container\">:</div>\r\n            <div class=\"count-down-digit-container\">{{seconds}}</div>\r\n          </div>\r\n\r\n        </div>\r\n        <app-item-slider [items]=\"items\"></app-item-slider>\r\n        <app-virtical-items></app-virtical-items>\r\n        <app-horizontal-items></app-horizontal-items>\r\n        <app-virtical-items></app-virtical-items>\r\n        <app-horizontal-items></app-horizontal-items>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <p *ngIf=\"selectedCategory!==0 && categoriesRow1?.length < 0\"> No categories founds </p>\r\n  <ion-slides pager=\"false\" *ngIf=\"selectedCategory!==0 && !loader\">\r\n    <ion-slide>\r\n      <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n        <ion-row class=\"ion-justify-content-around\">\r\n          <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\" (click)=\"childcategory(item)\">\r\n            <div>\r\n              <img style=\"width: 50px; \" src=\"{{baseUrl}}/{{item?.image}}\" />\r\n              <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                {{item.name}}\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <!-- <p *ngIf=\"selectedCategory!==0 && productsByMaincategory?.length < 0\"> No Products founds </p> -->\r\n  <ion-row *ngIf=\"selectedCategory!==0 && !loader\">\r\n    <ion-col style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of productsByMaincategory;let i = index\"\r\n      (click)=\"gotoItem(item?._id)\" size=\"6\">\r\n      <img src=\"{{baseUrl}}/{{item?.image[0].image}}\" id=\"productImage\"/>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <span style=\"font-size: 15px;\" *ngIf=\"item.title.length >= 35\">\r\n            {{item.title.substr(0,35)}}...\r\n          </span>\r\n          <span style=\"font-size: 15px;\" *ngIf=\"item.title.length <= 34\">\r\n            {{item.title}}\r\n          </span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n        <div style=\"color: #6A7586\">\r\n          <span style=\"color: #DF2E24; margin-right: 5px;font-size: 19px;\">${{item.price}}</span>\r\n          <span class=\"pl-1\" *ngIf=\"item.oldprice\">${{item.oldprice}}</span>\r\n        </div>\r\n        <div *ngIf=\"item.people\">\r\n          <img style=\"height: 20px\" [src]=\"item.people\" />\r\n        </div>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ }),

/***/ 52219:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-eight/item-eight.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 46552:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-eighteen/item-eighteen.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <!-- <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col> -->\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 16419:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-eleven/item-eleven.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 14770:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-fifteen/item-fifteen.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <!-- <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col> -->\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n\r\n</ion-slides>\r\n\r\n\r\n\r\n<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>item-fifteen</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>");

/***/ }),

/***/ 27985:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-five/item-five.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 48690:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-four/item-four.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 14979:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-fourteen/item-fourteen.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 18743:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-nighteen/item-nighteen.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 77785:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-nine/item-nine.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 31568:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-one/horizontal-items/horizontal-items.component.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"height: 10px;background: #e8e7e7\"></div>\r\n<ion-grid>\r\n    <ion-row>\r\n        <ion-col style=\"display: flex; justify-content: space-between\">\r\n            <div style=\"display: flex; align-items: center\">\r\n                <div style=\"font-size: 15px;\">\r\n                    Productos más vistos\r\n                </div>\r\n\r\n            </div>\r\n            <div style=\"display: flex; align-items: center\">\r\n                <div style=\"font-size: 15px; color:#a5a5a5;\">\r\n                    Más\r\n                </div>\r\n                <div style=\"display: flex; align-items: center\">\r\n                    <div>\r\n                        <ion-icon style=\"font-size: 20px;color:#a5a5a5;margin-top: 3px !important;\" name=\"chevron-forward-outline\"></ion-icon>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"4\" *ngFor=\"let item of itemsVirticale;\">\r\n            <img [src]=\"item.img\">\r\n            <div style=\"display: flex; justify-content: center; margin-top: 5px\">\r\n                <div style=\"color: #e02e24; font-weight: bold\">\r\n                    {{item.price}}\r\n                </div>\r\n                <div style=\"color:#a5a5a5; text-decoration: line-through; margin-left: 5px\">\r\n                    {{item.priceTag}}\r\n                </div>\r\n            </div>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>\r\n<div style=\"height: 10px;background: #e8e7e7\"></div>");

/***/ }),

/***/ 7807:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-one/item-one.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n  <ion-slide>\r\n    <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\">\r\n      <ion-row class=\"ion-justify-content-around\">\r\n        <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n          <div (click)=\"goto(item?.to)\">\r\n            <img style=\"width: 60px; \" [src]=\"item?.icon\" />\r\n            <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n              {{item?.title}}\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"2\" *ngFor=\"let item of categories;\">\r\n          <div (click)=\"goto(item?._id)\">\r\n            <img id=\"catImage\" src=\"{{baseUrl}}/{{item?.image}}\" />\r\n            <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n              {{item?.name}}\r\n            </div>\r\n          </div>\r\n        </ion-col> -->\r\n        <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n          <div>\r\n            <img style=\"width: 60px;\" [src]=\"item?.icon\" />\r\n            <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n              {{item?.title}}\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\">\r\n      <ion-row class=\"ion-justify-content-around\">\r\n        <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n          <div>\r\n            <img style=\"width: 60px; \" [src]=\"item?.icon\" />\r\n            <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n              {{item?.title}}\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n          <div>\r\n            <img style=\"width: 60px; \" [src]=\"item?.icon\" />\r\n            <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n              {{item?.title}}\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-slide>\r\n\r\n</ion-slides>\r\n\r\n<!-- <div style=\"text-align: center; width: 90%; display: block; margin: 0 auto;\">\r\n    <img style=\"\" src=\"assets/homePage/midBanner.png\" />\r\n    <img style=\"\" src=\"assets/homePage/banner.png\" />\r\n</div> -->\r\n\r\n<div style=\"display: flex;justify-content: space-between;\">\r\n  <div\r\n    style=\"padding-top:1px;border-left: 10px solid #ff0000; font-weight: bold; padding-left: 5px; font-size: 15px; display: flex; align-items: center\">\r\n    <div>\r\n      Ofertas de la semana\r\n    </div>\r\n  </div>\r\n  <div style=\"color: #bb0000; display: flex; margin-right: 20px\">\r\n    <!-- <div style=\"margin-right: 5px;display: flex; align-items: center\">\r\n            <div>cuenta atrás</div>\r\n        </div> -->\r\n    <!-- <div class=\"count-down-digit-container\">0</div>\r\n        <div class=\"count-down-digit-container\">1</div>\r\n        <div class=\"count-down-dot-container\">:</div>\r\n        <div class=\"count-down-digit-container\">3</div>\r\n        <div class=\"count-down-digit-container\">6</div>\r\n        <div class=\"count-down-dot-container\">:</div>\r\n        <div class=\"count-down-digit-container\">1</div>\r\n        <div class=\"count-down-digit-container\">0</div> -->\r\n\r\n    <div class=\"count-down-digit-container\">{{day}}</div>\r\n    <div class=\"count-down-dot-container\">:</div>\r\n    <div class=\"count-down-digit-container\">{{hours}}</div>\r\n    <div class=\"count-down-dot-container\">:</div>\r\n    <div class=\"count-down-digit-container\">{{minutes}}</div>\r\n    <div class=\"count-down-dot-container\">:</div>\r\n    <div class=\"count-down-digit-container\">{{seconds}}</div>\r\n\r\n  </div>\r\n\r\n</div>\r\n<app-item-slider [items]=\"items\"></app-item-slider>\r\n<!-- <section>\r\n    <div class=\"coming-soon\">\r\n        <div class=\"time-countdown\">\r\n            <ul>\r\n                <li class=\"count-bg-one radius\"><span id=\"days\">{{day}}</span>Dias</li>\r\n                <li class=\"count-bg-two radius\"><span id=\"hours\">{{hours}}</span>Horas</li>\r\n                <li class=\"count-bg-three radius\"><span id=\"minutes\">{{minutes}}</span>Minutos</li>\r\n                <li class=\"count-bg-four radius\"><span id=\"seconds\">{{seconds}}</span>Segundos</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</section> -->\r\n<app-virtical-items></app-virtical-items>\r\n<app-horizontal-items></app-horizontal-items>\r\n<app-virtical-items></app-virtical-items>\r\n<app-horizontal-items></app-horizontal-items>\r\n");

/***/ }),

/***/ 627:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-one/item-slider/item-slider.component.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div *ngFor=\"let item of items;\">\r\n    <div class=\"oneItem\">\r\n      <div>\r\n        <div style=\"text-align: center; display: flex; align-items: center; justify-content: center\">\r\n          <div class=\"img-container\">\r\n            <div style=\"width: 80px;\">\r\n              <img style=\"width: 700px\" [src]='item.img' />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div style=\"text-align: center;\">\r\n          <div class=\"item-title-div\" style=\"font-size: 15px;\">\r\n            {{item.title}}\r\n          </div>\r\n          <!-- <div style=\"display: flex; justify-content: space-between\">\r\n                        <div style=\"font-size: 16px;color: #c91818; font-weight: bold;\">\r\n                            {{item.discountPrice}}\r\n                        </div>\r\n                        <div style=\"font-size: 15px;color: #969696; font-weight: 500;text-decoration: line-through;\">\r\n                            {{item.price}}\r\n                        </div>\r\n                    </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 70940:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-one/virtical-items/virtical-items.component.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid>\r\n    <ion-row *ngFor=\"let item of itemsVirticale;\">\r\n        <ion-col size=\"4\" style=\"text-align: center\">\r\n            <img [src]=\"item.img\" />\r\n        </ion-col>\r\n        <ion-col style=\"margin:5px;display: flex;justify-content: space-between;flex-direction: column\">\r\n            <div>\r\n                {{item.title}}\r\n            </div>\r\n            <div>\r\n                <!-- <div style=\"color:#a5a5a5; font-size: 10px;\">\r\n                  {{item.envio}}\r\n              </div> -->\r\n                <div style=\"color:#a5a5a5; font-size: 10px;\">\r\n                    {{item.ventas}}\r\n                </div>\r\n\r\n                <div style=\"display: flex;justify-content: space-between\">\r\n                    <div>\r\n                        <span style=\"color:#a5a5a5; font-size: 10px;margin-right: 5px; color: rgb(13, 172, 13);\">{{item.envio}} </span> <span style=\"color:#a5a5a5; font-size: 10px;\"> {{item.upPriceTag}}</span>\r\n                    </div>\r\n\r\n                </div>\r\n                <div style=\"display: flex;justify-content: space-between\">\r\n                    <div>\r\n                        <span style=\"color: #e02e24; font-weight: bold\">{{item.price}} </span> <s style=\"color:#a5a5a5; font-size: 10px;\"> {{item.priceTag}}</s>\r\n                    </div>\r\n                    <div>\r\n                         <img (click)=\"openSellerProfileModel()\" style=\"height: 20px\" [src]=\"item.profile\" />\r\n                      <!--<img style=\"height: 20px\" [src]=\"item.profile\" />-->\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n");

/***/ }),

/***/ 30035:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-seven/item-seven.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 75430:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-seventeen/item-seventeen.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <!-- <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col> -->\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 57823:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-six/item-six.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 43700:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-sixteen/item-sixteen.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 3132:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-ten/item-ten.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 88741:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-thirteen/item-thirteen.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n            <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n                <ion-row class=\"ion-justify-content-around\">\r\n                    <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                        <div>\r\n                            <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                            <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                                {{item.title}}\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                        <div>\r\n                            <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                            <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                                {{item.title}}\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 5379:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-three/item-three.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n  <ion-slide>\r\n    <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n      <ion-row class=\"ion-justify-content-around\">\r\n        <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n          <div>\r\n            <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n            <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n              {{item.title}}\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n          <div>\r\n            <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n            <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n              {{item.title}}\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-slide>\r\n  <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n  <ion-row>\r\n    <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\"\r\n      *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n      <img [src]=\"item.img\" />\r\n      <ion-row>\r\n        <ion-col style=\"padding-bottom: 0px\">\r\n          {{item.title}}<br> {{item.subTitle}}\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n        <div style=\"color: #6A7586\">\r\n          <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n          <span>{{item.priceNote}}</span>\r\n        </div>\r\n        <div *ngIf=\"item.people\">\r\n          <img style=\"height: 20px\" [src]=\"item.people\" />\r\n        </div>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n");

/***/ }),

/***/ 56460:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-twelve/item-twelve.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" (click)=\"gotoNextautos()\" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 70089:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-twenty-one/item-twenty-one.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 76865:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-twenty/item-twenty.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    {{item.title}}<br> {{item.subTitle}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px\">{{item.price}}</span>\r\n                    <span>{{item.priceNote}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 37205:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/item-two/item-two.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n  <ion-slide>\r\n    <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n      <ion-row class=\"ion-justify-content-around\">\r\n        <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n          <div>\r\n            <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n            <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n              {{item.title}}\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n          <div>\r\n            <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n            <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n              {{item.title}}\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-slide>\r\n  <!-- <ion-slide>\r\n                <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n                    <ion-row class=\"ion-justify-content-around\">\r\n                        <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                            <div>\r\n                                <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                                <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                                    {{item.title}}\r\n                                </div>\r\n                            </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                            <div>\r\n                                <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                                <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                                    {{item.title}}\r\n                                </div>\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n  <ion-row>\r\n    <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\"\r\n      *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n      <img [src]=\"item.img\" />\r\n      <ion-row>\r\n        <ion-col style=\"padding-bottom: 0px\">\r\n          <span style=\"font-size: 16px;\">{{item.title}} </span> <br> <span\r\n            style=\"color: rgb(13, 172, 13); font-size: 10px;\">{{item.subTitle}} </span> <span\r\n            style=\"color:#a5a5a5; font-size: 10px; margin-left: 5px;\"> {{item.rembolso}}</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n        <div style=\"color: #6A7586\">\r\n          <span style=\"color: #DF2E24; margin-right: 5px; font-size: 15px; font-weight: bold;\">{{item.price}}</span>\r\n          <span><s>{{item.priceNote}} </s></span>\r\n          <span style=\"margin-left: 8px;\"> {{item.ventas}}</span>\r\n        </div>\r\n        <div *ngIf=\"item.people\">\r\n          <img style=\"height: 20px\" [src]=\"item.people\" />\r\n        </div>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n");

/***/ }),

/***/ 65592:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/mascotas/mascotas.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n      <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n          <ion-row class=\"ion-justify-content-around\">\r\n              <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                  <div>\r\n                      <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                      <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                          {{item.title}}\r\n                      </div>\r\n                  </div>\r\n              </ion-col>\r\n              <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                  <div>\r\n                      <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                      <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                          {{item.title}}\r\n                      </div>\r\n                  </div>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-grid>\r\n  </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    <span style=\"font-size: 16px;\">{{item.title}} </span> <br> <span style=\"color: rgb(13, 172, 13); font-size: 10px;\">{{item.subTitle}} </span> <span style=\"color:#a5a5a5; font-size: 10px; margin-left: 5px;\"> {{item.rembolso}}</span>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px; font-size: 15px; font-weight: bold;\">{{item.price}}</span>\r\n                    <span><s>{{item.priceNote}} </s></span>\r\n                    <span style=\"margin-left: 8px;\"> {{item.ventas}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ }),

/***/ 51380:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/seller-profile-model/seller-profile-model.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\r\n  <div style=\"display: flex; justify-content: space-between;align-items: center;padding: 5px\">\r\n    <div>\r\n      <ion-icon (click)=\"dismiss()\" style=\"display: block; font-size: 25px;\" name=\"chevron-back-outline\"></ion-icon>\r\n    </div>\r\n    <div style=\"display: flex; justify-content: space-between;align-items: center\">\r\n      <ion-icon style=\"display: block; font-size: 25px;margin-right: 15px\" name=\"person-outline\"></ion-icon>\r\n      <ion-icon style=\"display: block; font-size: 25px;margin-right: 5px\" name=\"share-social-outline\"></ion-icon>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row style=\"margin-top: 5px\">\r\n      <ion-col style=\"display: block; align-items: center\">\r\n        <div>\r\n          <div style=\"font-size: 25px; font-weight: bold\">\r\n            Sandra C.\r\n          </div>\r\n          <div style=\"display: flex; align-items: center; margin-top: 5px\">\r\n            <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n            <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n            <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n            <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n            <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star-half\"></ion-icon>\r\n            <div style=\"color: gray\">(71)</div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <img style=\"border-radius: 100%; display: block\" src=\"assets/chat/chatList/1.png\"/>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div style=\"display: flex\">\r\n          <ion-icon style=\"display: block; margin-right: 5px\" name=\"stats-chart\"></ion-icon>\r\n          <div style=\"margin-right: 5px\"><b>139</b> Ventas</div>\r\n          <div style=\"margin-right: 5px\"><b>25</b> Compras</div>\r\n        </div>\r\n        <div style=\"display: flex; margin-top: 10px\">\r\n          <ion-icon style=\"display: block; margin-right: 5px\" name=\"cube-outline\"></ion-icon>\r\n          <div style=\"margin-right: 5px\">2 Envious</div>\r\n        </div>\r\n        <div style=\"display: flex; margin-top: 10px\">\r\n          <ion-icon style=\"display: block; margin-right: 5px\" name=\"location-outline\"></ion-icon>\r\n          <div style=\"margin-right: 5px\">A 25.53Km de ti <span style=\"color: #36bea3\">Ver ubicacion</span></div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <hr>\r\n    <ion-row style=\"text-align: center; margin-top: 15px; color: gray; border-bottom: 2px solid #e2e2e2; padding-bottom: 0px\">\r\n      <ion-col>\r\n        <div style=\"font-size: 20px\">103</div>\r\n        <div style=\"margin-top: 5px\">En venta</div>\r\n      </ion-col>\r\n      <ion-col style=\"border-bottom: 3px solid #36bea3; color:black;\">\r\n        <div style=\"font-size: 20px; font-weight: bold\">71</div>\r\n        <div style=\"margin-top: 5px\">Options</div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div style=\"font-size: 20px\">+</div>\r\n        <div style=\"margin-top: 5px\">Info</div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"margin-top: 10px\">\r\n      <ion-col size=\"2\">\r\n        <img style=\"border-radius: 100%; display: block\" src=\"assets/chat/chatList/1.png\"/>\r\n      </ion-col>\r\n      <ion-col style=\"color: grey; font-size: 14px\">\r\n        <div>Vendio</div>\r\n        <div style=\"color: black; font-size: 16px; font-weight: bold; margin-top: 5px\">Caja Tag Heuer</div>\r\n        <div style=\"margin-top: 5px; font-size: 16px;color: black\">Excelente, totalmente<br>recomedable.</div>\r\n        <div style=\"margin-top: 5px;\">\r\n            Por Joaquin C.\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"display: flex; flex-direction: column; justify-content: space-between\">\r\n        <div style=\"display: flex; align-items: center; margin-top: 5px\">\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star-half\"></ion-icon>\r\n        </div>\r\n        <div style=\"color: grey; font-size: 14px\">\r\n          26 jul, 2021\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <hr/>\r\n\r\n    <ion-row style=\"margin-top: 10px\">\r\n      <ion-col size=\"2\">\r\n        <img style=\"border-radius: 100%; display: block\" src=\"assets/chat/chatList/2.png\"/>\r\n      </ion-col>\r\n      <ion-col style=\"color: grey; font-size: 14px\">\r\n        <div>Vendio</div>\r\n        <div style=\"color: black; font-size: 16px; font-weight: bold; margin-top: 5px\">Caja Tag Heuer</div>\r\n        <div style=\"margin-top: 5px; font-size: 16px;color: black\">Excelente, totalmente<br>recomedable.</div>\r\n        <div style=\"margin-top: 5px;\">\r\n          Por Joaquin C.\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"display: flex; flex-direction: column; justify-content: space-between\">\r\n        <div style=\"display: flex; align-items: center; margin-top: 5px\">\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star-half\"></ion-icon>\r\n        </div>\r\n        <div style=\"color: grey; font-size: 14px\">\r\n          26 jul, 2021\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <hr/>\r\n\r\n    <ion-row style=\"margin-top: 10px\">\r\n      <ion-col size=\"2\">\r\n        <img style=\"border-radius: 100%; display: block\" src=\"assets/chat/chatList/3.png\"/>\r\n      </ion-col>\r\n      <ion-col style=\"color: grey; font-size: 14px\">\r\n        <div>Vendio</div>\r\n        <div style=\"color: black; font-size: 16px; font-weight: bold; margin-top: 5px\">Caja Tag Heuer</div>\r\n        <div style=\"margin-top: 5px; font-size: 16px;color: black\">Excelente, totalmente<br>recomedable.</div>\r\n        <div style=\"margin-top: 5px;\">\r\n          Por Joaquin C.\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"display: flex; flex-direction: column; justify-content: space-between\">\r\n        <div style=\"display: flex; align-items: center; margin-top: 5px\">\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star\"></ion-icon>\r\n          <ion-icon style=\"display: block; color: #fcc700; margin-right: 3px\" name=\"star-half\"></ion-icon>\r\n        </div>\r\n        <div style=\"color: grey; font-size: 14px\">\r\n          26 jul, 2021\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <hr/>\r\n  </ion-grid>\r\n\r\n</ion-content> -->\r\n");

/***/ }),

/***/ 28613:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/servicios/servicios.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides pager=\"false\">\r\n    <ion-slide>\r\n        <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n            <ion-row class=\"ion-justify-content-around\">\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow1;\">\r\n                    <div>\r\n                        <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                        <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" *ngFor=\"let item of categoriesRow2;\">\r\n                    <div>\r\n                        <img style=\"width: 50px;\" [src]=\"item.icon\" />\r\n                        <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                            {{item.title}}\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n        \r\n    </ion-slide>\r\n    <!-- <ion-slide>\r\n      <ion-grid style=\"margin-top: 10px; text-align: center; color: #787878; font-size: 12px\" class=\"grid-categories\">\r\n          <ion-row class=\"ion-justify-content-around\">\r\n              <ion-col size=\"2\" *ngFor=\"let item of categoriesRow3;\">\r\n                  <div>\r\n                      <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                      <div style=\"margin-top:3px;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                          {{item.title}}\r\n                      </div>\r\n                  </div>\r\n              </ion-col>\r\n              <ion-col size=\"2\" *ngFor=\"let item of categoriesRow4;\">\r\n                  <div>\r\n                      <img style=\"width: 50px; \" [src]=\"item.icon\" />\r\n                      <div style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">\r\n                          {{item.title}}\r\n                      </div>\r\n                  </div>\r\n              </ion-col>\r\n          </ion-row>\r\n      </ion-grid>\r\n  </ion-slide> -->\r\n\r\n</ion-slides>\r\n\r\n<ion-grid style=\"padding: 0px\">\r\n    <ion-row>\r\n        <ion-col (click)=\"gotoItem(item.id)\" style=\"font-size: 12px\" [class]=\"getClass(i)\" *ngFor=\"let item of items;let i = index\" size=\"6\">\r\n            <img [src]=\"item.img\" />\r\n            <ion-row>\r\n                <ion-col style=\"padding-bottom: 0px\">\r\n                    <span style=\"font-size: 16px;\">{{item.title}} </span> <br> <span style=\"color: rgb(13, 172, 13); font-size: 10px;\">{{item.subTitle}} </span> <span style=\"color:#a5a5a5; font-size: 10px; margin-left: 5px;\"> {{item.rembolso}}</span>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row style=\"display:flex;justify-content: space-between;padding-left: 5px; align-items: center\">\r\n                <div style=\"color: #6A7586\">\r\n                    <span style=\"color: #DF2E24; margin-right: 5px; font-size: 15px; font-weight: bold;\">{{item.price}}</span>\r\n                    <span><s>{{item.priceNote}} </s></span>\r\n                    <span style=\"margin-left: 8px;\"> {{item.ventas}}</span>\r\n                </div>\r\n                <div *ngIf=\"item.people\">\r\n                    <img style=\"height: 20px\" [src]=\"item.people\" />\r\n                </div>\r\n            </ion-row>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map