"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_vehicles_new-vehicle_new-vehicle_module_ts"],{

/***/ 80696:
/*!**************************************************************************!*\
  !*** ./src/app/pages/vehicles/new-vehicle/new-vehicle-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewVehiclePageRoutingModule": () => (/* binding */ NewVehiclePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _new_vehicle_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-vehicle.page */ 74833);




const routes = [
    {
        path: '',
        component: _new_vehicle_page__WEBPACK_IMPORTED_MODULE_0__.NewVehiclePage
    }
];
let NewVehiclePageRoutingModule = class NewVehiclePageRoutingModule {
};
NewVehiclePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewVehiclePageRoutingModule);



/***/ }),

/***/ 7460:
/*!******************************************************************!*\
  !*** ./src/app/pages/vehicles/new-vehicle/new-vehicle.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewVehiclePageModule": () => (/* binding */ NewVehiclePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _new_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-vehicle-routing.module */ 80696);
/* harmony import */ var _new_vehicle_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-vehicle.page */ 74833);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);









let NewVehiclePageModule = class NewVehiclePageModule {
};
NewVehiclePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _new_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewVehiclePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__.CmxWebComponentsModule.forRoot(),
        ],
        declarations: [_new_vehicle_page__WEBPACK_IMPORTED_MODULE_1__.NewVehiclePage]
    })
], NewVehiclePageModule);



/***/ }),

/***/ 74833:
/*!****************************************************************!*\
  !*** ./src/app/pages/vehicles/new-vehicle/new-vehicle.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewVehiclePage": () => (/* binding */ NewVehiclePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_vehicle_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-vehicle.page.html?ngResource */ 55320);
/* harmony import */ var _new_vehicle_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-vehicle.page.scss?ngResource */ 54641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _interfaces_companies_companies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../interfaces/companies/companies */ 81098);
/* harmony import */ var _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/companies/companies.service */ 46605);
/* harmony import */ var _services_error_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/error-messages.service */ 47486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _services_vehicles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/vehicles.service */ 66817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth/login.service */ 52876);












let NewVehiclePage = class NewVehiclePage {
    constructor(formBuilder, loginService, companiesService, errorMessages, vehiclesService, location) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.companiesService = companiesService;
        this.errorMessages = errorMessages;
        this.vehiclesService = vehiclesService;
        this.location = location;
        this.company = new _interfaces_companies_companies__WEBPACK_IMPORTED_MODULE_2__.Companies();
        this.alertSucces = true;
        this.alertConfirm = false;
        this.addIdentityCard = false;
        this.addDocumentCompany = false;
        this.toastMessage = '';
        this.errors = [];
        this.formBuilderInput(loginService.profileUser.CompanyId);
        this.companiesService.getCompany(loginService.profileUser.CompanyId).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.company = data.data;
        }));
    }
    ngOnInit() {
        this.alertSucces = false;
    }
    createVehicle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                this.alertSucces = false;
                return;
            }
            alert('Entro');
            this.data = new FormData();
            this.addFormData(this.form.value);
            yield this.vehiclesService.createVehicle(this.data).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                alert(resp);
                this.alertSucces = true;
                this.errors = [];
            }), (error) => {
                this.errors = this.errorMessages.parsearErroresAPI(error);
            });
        });
    }
    addFormData(objeto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
            Model: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            LicenseVehiculo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            TypeTrailer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            CompanyId: [id, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            Soat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            SoatDocument: [''],
            TechnomechanicsDocument: [''],
            PolicyDocument: [''],
            CardPropertyDocument: [''],
            StatusVehicle: ['1'],
            StatusTravel: ['1'],
            UserId: [this.loginService.profileUser.id],
            term: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.requiredTrue]]
        });
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(350))
            .subscribe(data => {
            console.log(data);
            //this.validateInput();
        });
    }
};
NewVehiclePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService },
    { type: _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_3__.CompaniesService },
    { type: _services_error_messages_service__WEBPACK_IMPORTED_MODULE_4__.ErrorMessagesService },
    { type: _services_vehicles_service__WEBPACK_IMPORTED_MODULE_5__.VehiclesService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location }
];
NewVehiclePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-new-vehicle',
        template: _new_vehicle_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_vehicle_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewVehiclePage);



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

/***/ 54641:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/vehicles/new-vehicle/new-vehicle.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".header-text {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  top: 1;\n  right: 50;\n  left: 0;\n  margin-left: 1rem;\n}\n\n.attr-name {\n  font-weight: 700;\n}\n\n.content-card {\n  padding-top: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n.content-grid-register {\n  overflow: auto;\n  justify-content: center !important;\n}\n\n.content-title {\n  padding-top: 1rem;\n  padding-bottom: 1.5rem;\n  font-weight: 700;\n}\n\n.content-picker {\n  padding-bottom: 1.5rem;\n}\n\n.input-check {\n  font-size: small;\n  padding-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy12ZWhpY2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBQ0g7O0FBRUE7RUFDRyxnQkFBQTtBQUNIOztBQUVBO0VBQ0csbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNIOztBQUVBO0VBRUksY0FBQTtFQUNBLGtDQUFBO0FBQUo7O0FBSUM7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFESDs7QUFJQztFQUNFLHNCQUFBO0FBREg7O0FBSUM7RUFDRyxnQkFBQTtFQUNBLG9CQUFBO0FBREoiLCJmaWxlIjoibmV3LXZlaGljbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10ZXh0e1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgIHRvcDogMTtcclxuICAgcmlnaHQ6IDUwO1xyXG4gICBsZWZ0OiAwO1xyXG4gICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLmF0dHItbmFtZXtcclxuICAgZm9udC13ZWlnaHQ6IDcwMDsgICAgXHJcbn1cclxuXHJcbi5jb250ZW50LWNhcmR7XHJcbiAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgcGFkZGluZy1yaWdodDogMXJlbTsgXHJcbiAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICBmbGV4OiAxIDEgYXV0bztcclxuICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5jb250ZW50LWdyaWQtcmVnaXN0ZXJ7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmNvbnRlbnQtdGl0bGV7XHJcbiAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG4gICBmb250LXdlaWdodDogNzAwO1xyXG4gfVxyXG5cclxuIC5jb250ZW50LXBpY2tlcntcclxuICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuIH1cclxuXHJcbiAuaW5wdXQtY2hlY2t7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn0iXX0= */";

/***/ }),

/***/ 55320:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/vehicles/new-vehicle/new-vehicle.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-header design-version=\"v2\" slot=\"header\" show-Menu-Button=\"false\" show-cemex-logo=\"false\">\r\n  <div class=\"header-text\">\r\n    <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px;\" (click)=\"onBack()\"></ion-icon>\r\n    <div class=\"attr-name\" style=\"padding-left: 1rem;\">Agregar vehículo</div>\r\n  </div>\r\n</cwc-header>\r\n<div slot=\"main\" class=\"content-card\">\r\n  <div class=\"content-title\">\r\n    Nuevo vehículo\r\n  </div>\r\n  <form (submit)=\"createVehicle()\" [formGroup]=\"form\">\r\n    <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\">\r\n      <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n        <div>\r\n          <cwc-input class=\"input\" \r\n            label='Medelo de vehículo'\r\n            placeholder=\"Agrega el tipo de camión\"\r\n            design-version=\"v1\" \r\n            formControlName=\"Model\"\r\n            required\r\n          ></cwc-input>\r\n        </div>\r\n        <div>\r\n          <cwc-input class=\"input\" \r\n            label='Placa'\r\n            formControlName=\"LicenseVehiculo\"\r\n            design-version=\"v1\"\r\n            placeholder=\"Agrega número de serie\"\r\n            required\r\n          ></cwc-input>\r\n        </div>\r\n        <div>\r\n          <cwc-input class=\"input\" \r\n            label='Tipo de trailer'\r\n            formControlName=\"TypeTrailer\"\r\n            placeholder=\"Características especiales del vehículo\"\r\n            design-version=\"v1\" \r\n            required\r\n          ></cwc-input>\r\n        </div>\r\n        <div class=\"content-picker\">\r\n          <cwc-picker\r\n            class=\"w-full select-filter\"\r\n            label=\"Empresa\"\r\n            filter-no-resultsMessage=\"No se encontraron resultados\" \r\n            filter-placeholder=\"Filtrar Empresas\"\r\n            [placeholder]=\"company.companyName\" \r\n            mobile=\"false\"\r\n            string-values=\"true\"\r\n            disabled=\"true\"\r\n            filter>\r\n          </cwc-picker>\r\n        </div>\r\n        <div>\r\n          <cwc-input class=\"input\" \r\n          label='Número de SOAT (opcional)'\r\n          type=\"text\"\r\n          formControlName=\"Soat\"\r\n          placeholder=\"Agregar los 20 dígitos de su número de SOAT\"\r\n          design-version=\"v1\" \r\n          ngDefaultControl\r\n          required\r\n          ></cwc-input>\r\n        </div>\r\n      </cwc-cell>\r\n    </cwc-grid>\r\n    <!--=====================================\r\n        DOCUMENTO DE LA EMPRESA\r\n      ======================================-->\r\n    <label for=\"\"> Documento de SOAT</label>\r\n    <div>\r\n      <cwc-grid class=\"demo-grid content-archive\" >\r\n        <cwc-cell class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <div class=\"text-archive\">Tomar fotografía</div>\r\n          </div>\r\n        </cwc-cell>\r\n        <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <div class=\"text-archive\">Seleccionar archivo</div>\r\n          </div>\r\n        </cwc-cell>\r\n    </cwc-grid>\r\n    </div>\r\n\r\n\r\n    <label for=\"\"> Certificado de revisión tecno mecánica</label>\r\n    <div>\r\n      <cwc-grid class=\"demo-grid content-archive\" >\r\n        <cwc-cell class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <div class=\"text-archive\">Tomar fotografía</div>\r\n          </div>\r\n        </cwc-cell>\r\n        <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <div class=\"text-archive\">Seleccionar archivo</div>\r\n          </div>\r\n        </cwc-cell>\r\n    </cwc-grid>\r\n    </div>\r\n\r\n    <label for=\"\"> Póliza </label>\r\n    <div>\r\n      <cwc-grid class=\"demo-grid content-archive\" >\r\n        <cwc-cell class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <div class=\"text-archive\">Tomar fotografía</div>\r\n          </div>\r\n        </cwc-cell>\r\n        <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <div class=\"text-archive\">Seleccionar archivo</div>\r\n          </div>\r\n        </cwc-cell>\r\n    </cwc-grid>\r\n    </div>\r\n\r\n    <label for=\"\"> Tarjeta de propiedad</label>\r\n    <div>\r\n      <cwc-grid class=\"demo-grid content-archive\" >\r\n        <cwc-cell class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <div class=\"text-archive\">Tomar fotografía</div>\r\n          </div>\r\n        </cwc-cell>\r\n        <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <div class=\"text-archive\">Seleccionar archivo</div>\r\n          </div>\r\n        </cwc-cell>\r\n    </cwc-grid>\r\n    </div>\r\n\r\n    <cwc-checkbox\r\n      formControlName=\"term\"\r\n      mobile=\"true\"\r\n      class='m-end-sm'>          \r\n      <div class=\"input-check\">Confirmo que la siguiente información es verdadera.</div>\r\n    </cwc-checkbox>\r\n\r\n    <app-error-messages [errors]=\"errors\"></app-error-messages> \r\n    <!--=====================================\r\n      BOTON PARA GUARDAR EL REGISTRO\r\n    ======================================-->\r\n    <div class=\"content-button\">\r\n      <cwc-button \r\n        design-version=\"v1\" \r\n        [disabled]=\"form.invalid\"\r\n        (click)=\"openAlertConfirm()\" \r\n        variant=\"regular-block\">AGREGAR VEHÍCULO</cwc-button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--=====================================\r\n\t\tMODAL ALERTA CONFIRMAR DATOS GUARDAR\r\n======================================-->\r\n<cwc-modal id='alert-confirm' class=\"alert-confirm\" [open] =\"alertConfirm\" (cwcClose)=\"closeAlertConfirm()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Atención</h2>\r\n  </header>\r\n  <p>¿Esta seguro que los datos registrados estan correctos?</p>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (cwcClick)=\"closeAlertConfirm()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button variant='primary' (cwcClick)=\"createVehicle()\" >Aceptar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n<!--=====================================\r\n\t\tMODAL CONFIRMACIÓN RESPUESTA DE EXITO\r\n======================================-->\r\n<app-alert-success\r\n  [alertShow] = \"alertSucces\"\r\n  title = \"Sun informacion ha sido guardada\"\r\n  urlButton = \"/app/vehiculos\"\r\n  textButton = \"OK\"\r\n  message = \"Los datos se están procesando, y al ser aprobado su vehículo recibirá una notificación.\">\r\n</app-alert-success>\r\n<!--=====================================\r\n\tTOAST ALERT MENSAJE\r\n======================================-->\r\n<cwc-snackbar id='toast-message-driver' [message]=\"toastMessage\"\r\ncta-message=\"dismiss\" auto-hide-duration='5000'></cwc-snackbar>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vehicles_new-vehicle_new-vehicle_module_ts.js.map