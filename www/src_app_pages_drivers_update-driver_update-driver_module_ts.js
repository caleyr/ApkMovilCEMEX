"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_drivers_update-driver_update-driver_module_ts"],{

/***/ 4651:
/*!*******************************************************!*\
  !*** ./src/app/pages/drivers/models/driver-update.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverUpdate": () => (/* binding */ DriverUpdate)
/* harmony export */ });
class DriverUpdate {
}


/***/ }),

/***/ 45143:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/drivers/update-driver/update-driver-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateDriverPageRoutingModule": () => (/* binding */ UpdateDriverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _update_driver_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-driver.page */ 33025);




const routes = [
    {
        path: '',
        component: _update_driver_page__WEBPACK_IMPORTED_MODULE_0__.UpdateDriverPage
    }
];
let UpdateDriverPageRoutingModule = class UpdateDriverPageRoutingModule {
};
UpdateDriverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateDriverPageRoutingModule);



/***/ }),

/***/ 14451:
/*!*********************************************************************!*\
  !*** ./src/app/pages/drivers/update-driver/update-driver.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateDriverPageModule": () => (/* binding */ UpdateDriverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _update_driver_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-driver-routing.module */ 45143);
/* harmony import */ var _update_driver_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-driver.page */ 33025);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);









let UpdateDriverPageModule = class UpdateDriverPageModule {
};
UpdateDriverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _update_driver_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateDriverPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__.CmxWebComponentsModule.forRoot(),
        ],
        declarations: [_update_driver_page__WEBPACK_IMPORTED_MODULE_1__.UpdateDriverPage]
    })
], UpdateDriverPageModule);



/***/ }),

/***/ 33025:
/*!*******************************************************************!*\
  !*** ./src/app/pages/drivers/update-driver/update-driver.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateDriverPage": () => (/* binding */ UpdateDriverPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_driver_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-driver.page.html?ngResource */ 98592);
/* harmony import */ var _update_driver_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-driver.page.scss?ngResource */ 14044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _interfaces_companies_companies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/companies/companies */ 81098);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth/login.service */ 52876);
/* harmony import */ var _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/companies/companies.service */ 46605);
/* harmony import */ var _services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/error-messages.service */ 47486);
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/drivers.service */ 50774);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _models_driver_update__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/driver-update */ 4651);













let UpdateDriverPage = class UpdateDriverPage {
    constructor(formBuilder, loginService, companiesService, errorMessages, driversService, location) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.companiesService = companiesService;
        this.errorMessages = errorMessages;
        this.driversService = driversService;
        this.location = location;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.driver = new _models_driver_update__WEBPACK_IMPORTED_MODULE_7__.DriverUpdate();
        this.company = new _interfaces_companies_companies__WEBPACK_IMPORTED_MODULE_2__.Companies();
        this.alertSucces = true;
        this.alertConfirm = false;
        this.addIdentityCard = false;
        this.addDocumentCompany = false;
        this.toastMessage = '';
        this.errors = [];
        this.driver = driversService.driverUpdate;
        this.formBuilderInput(loginService.profileUser.CompanyId);
        this.companiesService.getCompany(loginService.profileUser.CompanyId).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.company = data.data;
        }));
    }
    ngOnInit() {
        this.alertSucces = false;
    }
    createVehicle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                return;
            }
            this.data = new FormData();
            this.addFormData(this.form.value);
            this.propagar.emit(true);
            yield this.driversService.createDriver(this.data).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                this.propagar.emit(false);
                this.alertSucces = true;
                this.errors = [];
            }), (error) => {
                this.propagar.emit(false);
                this.errors = this.errorMessages.parsearErroresAPI(error);
            });
        });
    }
    addFormData(objeto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            for (var key in objeto) {
                if (key !== 'term') {
                    this.data.append(key, objeto[key]);
                }
            }
        });
    }
    removeDocumentCompany() {
        this.form.get('documentCompany').setValue('');
        //this.conveyorService.removeModalPhotoDocumentCompany.emit();
        this.addDocumentCompany = false;
        this.toastMessage = 'Se eliminó el documento de la empresa';
        const element = document.getElementById('toast-message-driver');
        element.classList.remove('hide');
    }
    removeIdentityCard() {
        this.form.get('documentIdentityCardFrontal').setValue('');
        this.form.get('documentIdentityCardBack').setValue('');
        //this.conveyorService.removeModalIdentityCardDriver.emit();
        this.addIdentityCard = false;
        this.toastMessage = 'Se eliminó la cédula de ciudadanía';
        const element = document.getElementById('toast-message-driver');
        element.classList.remove('hide');
    }
    openAlertConfirm() {
        if (this.form.invalid) {
            return;
        }
        this.alertConfirm = true;
    }
    closeAlertConfirm() {
        this.alertConfirm = false;
    }
    onBack() {
        this.location.back();
    }
    /*=============================================
     FORMULARIO REACTIVOS
    =============================================*/
    formBuilderInput(id) {
        this.form = this.formBuilder.group({
            FirstName: [this.driver.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            LastName: [this.driver.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            Password: ['Cemex_2022', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            Email: [this.driver.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            CompanyId: [id, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            Roles: ['Conductor'],
            Document: [this.driver.document, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            SapCode: [this.driver.sapCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            PhoneNumber: [this.driver.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            term: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.requiredTrue]]
        });
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(350))
            .subscribe(data => {
            console.log(data);
            //this.validateInput();
        });
    }
};
UpdateDriverPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService },
    { type: _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__.CompaniesService },
    { type: _services_error_messages_service__WEBPACK_IMPORTED_MODULE_5__.ErrorMessagesService },
    { type: _services_drivers_service__WEBPACK_IMPORTED_MODULE_6__.DriversService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location }
];
UpdateDriverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-update-driver',
        template: _update_driver_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_driver_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateDriverPage);



/***/ }),

/***/ 47486:
/*!****************************************************!*\
  !*** ./src/app/services/error-messages.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorMessagesService": () => (/* binding */ ErrorMessagesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let ErrorMessagesService = class ErrorMessagesService {
    constructor() { }
    parsearErroresAPI(response) {
        const resultado = [];
        if (response.status === 500) {
            resultado.push('Ha ocurrido un error en el servidor. Favor intentar más tarde');
            return resultado;
        }
        if (response.error) {
            if (typeof response.error === 'string') {
                resultado.push(response.error);
            }
            else {
                const mapaErrores = response.error.errors;
                const entradas = Object.entries(mapaErrores);
                entradas.forEach((arreglo) => {
                    const campo = arreglo[0];
                    arreglo[1].forEach((mensajeError) => {
                        resultado.push(`${campo}: ${mensajeError}`);
                    });
                });
            }
        }
        return resultado;
    }
};
ErrorMessagesService.ctorParameters = () => [];
ErrorMessagesService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], ErrorMessagesService);



/***/ }),

/***/ 71925:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ 80823:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 60014);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 10328);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}


/***/ }),

/***/ 25353:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 32425);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}


/***/ }),

/***/ 3670:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 25353);

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


/***/ }),

/***/ 52901:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 71925);

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


/***/ }),

/***/ 10328:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler),
/* harmony export */   "async": () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 3670);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 52901);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;


/***/ }),

/***/ 14044:
/*!********************************************************************************!*\
  !*** ./src/app/pages/drivers/update-driver/update-driver.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".header-text {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  top: 1;\n  right: 50;\n  left: 0;\n  margin-left: 1rem;\n}\n\n.attr-name {\n  font-weight: 700;\n}\n\n.content-card {\n  padding-top: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n.content-grid-register {\n  overflow: auto;\n  justify-content: center !important;\n}\n\n.content-title {\n  padding-top: 1rem;\n  padding-bottom: 1.5rem;\n  font-weight: 700;\n}\n\n.content-picker {\n  padding-bottom: 1.5rem;\n}\n\n.input-check {\n  font-size: small;\n  padding-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1kcml2ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQztFQUNHLGdCQUFBO0FBQ0o7O0FBRUM7RUFDRyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUM7RUFFSSxjQUFBO0VBQ0Esa0NBQUE7QUFBTDs7QUFJRTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBQ0csc0JBQUE7QUFETDs7QUFJRTtFQUNHLGdCQUFBO0VBQ0Esb0JBQUE7QUFETCIsImZpbGUiOiJ1cGRhdGUtZHJpdmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdGV4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTtcclxuICAgIHJpZ2h0OiA1MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuIH1cclxuIFxyXG4gLmF0dHItbmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7ICAgIFxyXG4gfVxyXG4gXHJcbiAuY29udGVudC1jYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gfVxyXG4gXHJcbiAuY29udGVudC1ncmlkLXJlZ2lzdGVye1xyXG4gICAgIC8vIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiBcclxuICAuY29udGVudC10aXRsZXtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gXHJcbiAgLmNvbnRlbnQtcGlja2Vye1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG4gXHJcbiAgLmlucHV0LWNoZWNre1xyXG4gICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiB9Il19 */";

/***/ }),

/***/ 98592:
/*!********************************************************************************!*\
  !*** ./src/app/pages/drivers/update-driver/update-driver.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-header design-version=\"v2\" slot=\"header\" show-Menu-Button=\"false\" show-cemex-logo=\"false\">\n  <div class=\"header-text\">\n    <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px;\" (click)=\"onBack()\"></ion-icon>\n    <div class=\"attr-name\" style=\"padding-left: 1rem;\">Editar conductor</div>\n  </div>\n</cwc-header>\n<div slot=\"main\" class=\"content-card\">  \n  <div class=\"content-title\">\n    Editar conductor\n  </div>\n  <form (submit)=\"createVehicle()\" [formGroup]=\"form\">\n    <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\">\n      <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\n        <div>\n          <cwc-input class=\"input\" \n            label='Nombre(s)'\n            placeholder=\"Escribe el nombre aquí\"\n            design-version=\"v1\" \n            formControlName=\"FirstName\"\n            required\n          ></cwc-input>\n        </div>\n        <div>\n          <cwc-input class=\"input\" \n            label='Apellido'\n            formControlName=\"LastName\"\n            design-version=\"v1\"\n            placeholder=\"Apellido paterno y materno\"\n            required\n          ></cwc-input>\n        </div>\n        <div>\n          <cwc-input class=\"input\" \n            label='Número de celular'\n            formControlName=\"PhoneNumber\"\n            placeholder=\"Agregar un número de teléfono\"\n            design-version=\"v1\" \n            required\n          ></cwc-input>\n        </div>\n        <div>\n          <cwc-input class=\"input\" \n            label='Código SAP'\n            formControlName=\"SapCode\"\n            placeholder=\"Escribe los 12 dígitos de tu código SAP\"\n            design-version=\"v1\" \n            required\n          ></cwc-input>\n        </div>\n        <div>\n          <cwc-input class=\"input\" \n            label='Número de Cédula o NIT'\n            formControlName=\"Document\"\n            placeholder=\"Escribe los 12 dígitos de tu cédula\"\n            design-version=\"v1\" \n            required\n          ></cwc-input>\n        </div>\n        <div>\n          <cwc-input class=\"input\" \n            label='Correo electrónico'\n            formControlName=\"Email\"\n            placeholder=\"Agregar un correo electrónico\"\n            design-version=\"v1\" \n            required\n          ></cwc-input>\n        </div>\n        <div class=\"content-picker\">\n          <cwc-picker\n            class=\"w-full select-filter\"\n            label=\"Empresa\"\n            filter-no-resultsMessage=\"No se encontraron resultados\" \n            filter-placeholder=\"Filtrar Empresas\"\n            [placeholder]=\"company.companyName\" \n            mobile=\"false\"\n            string-values=\"true\"\n            disabled=\"true\"\n            filter>\n          </cwc-picker>\n        </div>\n      </cwc-cell>\n    </cwc-grid>\n    \n    <cwc-checkbox\n      formControlName=\"term\"\n      mobile=\"true\"\n      class='m-end-sm'>          \n      <div class=\"input-check\">Confirmo que la siguiente información es verdadera.</div>\n    </cwc-checkbox>\n\n    <app-error-messages [errors]=\"errors\"></app-error-messages> \n    <!--=====================================\n      BOTON PARA GUARDAR EL REGISTRO\n    ======================================-->\n    <div class=\"content-button\">\n      <cwc-button \n        design-version=\"v1\" \n        [disabled]=\"form.invalid\"\n        (click)=\"openAlertConfirm()\" \n        variant=\"regular-block\">GUARDAR CAMBIOS</cwc-button>\n    </div>\n  </form>\n</div>\n<!--=====================================\n\t\tMODAL ALERTA CONFIRMAR DATOS GUARDAR\n======================================-->\n<cwc-modal id='alert-confirm' class=\"alert-confirm\" [open] =\"alertConfirm\" (cwcClose)=\"closeAlertConfirm()\">\n  <header slot='header'>\n      <h2 style='margin:0;'>Atención</h2>\n  </header>\n  <p>¿Esta seguro que los datos registrados estan correctos?</p>\n  <footer slot='footer'>\n      <div style='text-align: end'>\n        <cwc-button variant='support' (click)=\"closeAlertConfirm()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\n          <cwc-button variant='primary' (click)=\"createVehicle()\" >Aceptar</cwc-button>\n      </div>\n  </footer>\n</cwc-modal>\n<!--=====================================\n\t\tMODAL CONFIRMACIÓN RESPUESTA DE EXITO\n======================================-->\n<app-alert-success\n  [alertShow] = \"alertSucces\"\n  title = \"Su información ha sido guardada exitosamente\"\n  urlButton = \"/app/conductores/detalles\"\n  textButton = \"OK\"\n  message = \" \">\n</app-alert-success>\n<!--=====================================\n\tTOAST ALERT MENSAJE\n======================================-->\n<cwc-snackbar id='toast-message-driver' [message]=\"toastMessage\"\ncta-message=\"dismiss\" auto-hide-duration='5000'></cwc-snackbar>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_drivers_update-driver_update-driver_module_ts.js.map