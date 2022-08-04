"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_pages_password_email_email_module_ts"],{

/***/ 61512:
/*!*******************************************************************!*\
  !*** ./src/app/auth/pages/password/email/email-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailPageRoutingModule": () => (/* binding */ EmailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.page */ 47380);




const routes = [
    {
        path: '',
        component: _email_page__WEBPACK_IMPORTED_MODULE_0__.EmailPage
    }
];
let EmailPageRoutingModule = class EmailPageRoutingModule {
};
EmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmailPageRoutingModule);



/***/ }),

/***/ 94400:
/*!***********************************************************!*\
  !*** ./src/app/auth/pages/password/email/email.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailPageModule": () => (/* binding */ EmailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.page */ 47380);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-routing.module */ 61512);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/components.module */ 45642);
/* harmony import */ var src_app_utilities_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utilities/error-messages/error-messages.component */ 38891);









let EmailPageModule = class EmailPageModule {
};
EmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _email_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmailPageRoutingModule
        ],
        declarations: [_email_page__WEBPACK_IMPORTED_MODULE_0__.EmailPage, src_app_utilities_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_3__.ErrorMessagesComponent]
    })
], EmailPageModule);



/***/ }),

/***/ 47380:
/*!*********************************************************!*\
  !*** ./src/app/auth/pages/password/email/email.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailPage": () => (/* binding */ EmailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.page.html?ngResource */ 14123);
/* harmony import */ var _email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.page.scss?ngResource */ 33290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _services_auth_forgot_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth/forgot-password.service */ 61322);
/* harmony import */ var _services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/error-messages.service */ 47486);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);









let EmailPage = class EmailPage {
    constructor(formBuilder, errorMessages, forgotPasswordService, navCtrl) {
        this.formBuilder = formBuilder;
        this.errorMessages = errorMessages;
        this.forgotPasswordService = forgotPasswordService;
        this.navCtrl = navCtrl;
        this.statusInputEmail = 'regular';
        this.statusInputMessageEmail = '';
        this.email = null;
        this.errors = [];
        this.loading = false;
        this.alertSucces = false;
    }
    ngOnInit() {
        this.formBuilderInput();
    }
    sendEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            yield this.forgotPasswordService.forgotPassword(this.form.value).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.forgotPasswordService.email = this.form.get('Email').value;
                this.loading = false;
                this.alertSucces = true;
                console.log(resp);
            }), (error) => {
                this.loading = false;
                console.log(error);
            });
        });
    }
    onBack() {
        this.navCtrl.navigateRoot('/login', { animated: true });
    }
    /*=============================================
     FORMULARIOS REACTIVOS
    =============================================*/
    formBuilderInput() {
        this.form = this.formBuilder.group({
            Email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                ]],
        });
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(350))
            .subscribe(data => {
            this.validateInput();
        });
    }
    validateInput() {
        if (this.form.get('Email').errors && this.form.get('Email').dirty) {
            this.statusInputEmail = 'error';
            this.statusInputMessageEmail = 'Este campo es requerido';
        }
        else {
            this.statusInputEmail = 'regular';
            this.statusInputMessageEmail = '';
        }
    }
};
EmailPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__.ErrorMessagesService },
    { type: _services_auth_forgot_password_service__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
EmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-email',
        template: _email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmailPage);



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

/***/ 33290:
/*!**********************************************************************!*\
  !*** ./src/app/auth/pages/password/email/email.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".content-grid-reset-password {\n  margin-top: 2rem !important;\n  display: flex !important;\n  justify-content: center !important;\n}\n\n.title-reset-password {\n  color: #002a59;\n  text-align: center;\n}\n\n.subtitle-reset-password {\n  color: #002a59;\n  text-align: center;\n}\n\n.content-form-reset-password {\n  margin-top: 6rem;\n}\n\n.input-email-reset-password {\n  width: 100%;\n  padding-bottom: 0.7rem;\n  margin-bottom: 0rem;\n}\n\n.toolbar-reset-password {\n  --background: #F4F6F9;\n  padding: 5rem !important;\n}\n\n.text-message-email {\n  color: black !important;\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtBQUtKOztBQUhBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBTUoiLCJmaWxlIjoiZW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtZ3JpZC1yZXNldC1wYXNzd29yZHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW0gIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiB9XHJcbi50aXRsZS1yZXNldC1wYXNzd29yZHtcclxuICAgIGNvbG9yOiAjMDAyYTU5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zdWJ0aXRsZS1yZXNldC1wYXNzd29yZHtcclxuICAgIGNvbG9yOiAjMDAyYTU5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250ZW50LWZvcm0tcmVzZXQtcGFzc3dvcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcbi5pbnB1dC1lbWFpbC1yZXNldC1wYXNzd29yZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuN3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn1cclxuLnRvb2xiYXItcmVzZXQtcGFzc3dvcmR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGNEY2Rjk7XHJcbiAgICBwYWRkaW5nOiA1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtbWVzc2FnZS1lbWFpbHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG59Il19 */";

/***/ }),

/***/ 14123:
/*!**********************************************************************!*\
  !*** ./src/app/auth/pages/password/email/email.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<div slot=\"main\" class=\"content-grid-reset-password content\">\r\n  <form (submit)=\"sendEmail()\" [formGroup]=\"form\">\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n        <h3 class=\"title-reset-password\">¿Olvidó su contraseña?</h3>\r\n        <div class=\"border-red\"></div>\r\n        <h6 class=\"subtitle-reset-password\">Ingrese su correo electrónico para recuperar su contraseña</h6>\r\n        <div class=\"content-form-reset-password\">\r\n          <cwc-input class=\"input-email-reset-password input\" \r\n                  design-version=\"v2\" \r\n                  [status]='statusInputEmail'\r\n                  [statusMessage]='statusInputMessageEmail'\r\n                  label='Correo electrónico'\r\n                  formControlName=\"Email\"\r\n                  ngDefaultControl\r\n                  required \r\n                  ></cwc-input>\r\n            <cwc-button class=\"btn-login\" \r\n                  [disabled]=\"form.invalid\"\r\n                  (click)=\"sendEmail()\" \r\n                  design-version=\"v1\" \r\n                  disabled=\"false\" \r\n                  variant=\"primary-block\">RECUPERAR CONTRASEÑA</cwc-button>\r\n                  <app-error-messages [errors]=\"errors\"></app-error-messages> \r\n                  <p class=\"text-message-email\">Envíaremos a su correo electrónico con un codígo para que recupere su contraseña</p>\r\n                  <div class=\"button\">\r\n                    <cwc-button variant=\"link\" (click)=\"onBack()\" leading-icon=\"arrow-left-straight\">Iniciar Sesión</cwc-button>\r\n                </div>\r\n        </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n  </form>\r\n</div>\r\n<div class=\"loading-content\" *ngIf=\"loading\">\r\n  <cwc-loader>\r\n    <span slot='loading'>Espere un momento...</span>\r\n    <span slot='delay'>Enviando correo electrónico...</span>\r\n  </cwc-loader>\r\n</div>\r\n<app-alert-success\r\n[alertShow] = \"alertSucces\"\r\ntitle = \"Existoso\" \r\nurlButton = \"/change-password\"\r\ntextButton = \"Ingresar Codigo\"\r\nmessage = \"Envíamos un correo electrónico con un codigo para que pueda reestablecer su contraseña\">\r\n</app-alert-success>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_pages_password_email_email_module_ts.js.map