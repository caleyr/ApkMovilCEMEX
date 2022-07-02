"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_pages_login_login_module_ts"],{

/***/ 74754:
/*!**********************************************************!*\
  !*** ./src/app/auth/pages/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 56488);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 77694:
/*!**************************************************!*\
  !*** ./src/app/auth/pages/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 74754);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 56488);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_0__.CmxWebComponentsModule.forRoot(),
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 56488:
/*!************************************************!*\
  !*** ./src/app/auth/pages/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 23442);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 46853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth/login.service */ 52876);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/error-messages.service */ 47486);



/* eslint-disable @typescript-eslint/dot-notation */






let LoginPage = class LoginPage {
    constructor(formBuilder, loginService, errorMessages, navCtrl) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.errorMessages = errorMessages;
        this.navCtrl = navCtrl;
        this.statusInputEmail = 'regular';
        this.statusInputMessageEmail = '';
        this.statusInputPassword = 'regular';
        this.statusInputMessagePassword = '';
        this.error = null;
        this.errors = [];
        this.message = null;
        this.roles = [];
        this.isDriver = true;
        this.loading = false;
    }
    ngOnInit() {
        this.formBuilderInput();
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                return;
            }
            this.loading = true;
            yield this.loginService.login(this.form.value).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield this.loginService.saveToken(resp['token'], resp['expiracion'], resp, resp['roles']);
                this.errors = [];
                this.roles = resp['roles'];
                this.roles.map((role) => {
                    if (role !== 'Driver') {
                        this.isDriver = false;
                    }
                });
                this.navCtrl.navigateRoot('/app/home', { animated: true });
                this.loading = false;
            }), (error) => {
                this.errors = this.errorMessages.parsearErroresAPI(error);
                this.statusInputEmail = 'error';
                this.statusInputPassword = 'error';
                this.loading = false;
            });
        });
    }
    /*=============================================
     FORMULARIOS REACTIVOS
    =============================================*/
    formBuilderInput() {
        this.form = this.formBuilder.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    // Validators.email
                ]],
        });
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(350))
            .subscribe(data => {
            this.validateInput();
        });
    }
    /*=============================================
     FUNCIÓN PARA VALIDAR LOS CAMPOS
    =============================================*/
    validateInput() {
        if (this.form.get('email').errors && this.form.get('email').dirty) {
            this.statusInputEmail = 'error';
            this.statusInputMessageEmail = 'Este campo es requerido';
        }
        else {
            this.statusInputEmail = 'regular';
            this.statusInputMessageEmail = '';
        }
        if (this.form.get('password').errors && this.form.get('password').dirty) {
            this.statusInputPassword = 'error';
            this.statusInputMessagePassword = 'Este campo es requerido';
        }
        else {
            this.statusInputPassword = 'regular';
            this.statusInputMessagePassword = '';
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__.ErrorMessagesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



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

/***/ 46853:
/*!*************************************************************!*\
  !*** ./src/app/auth/pages/login/login.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".content-grid-login {\n  display: flex !important;\n  justify-content: center !important;\n  overflow: auto;\n  margin-bottom: 2rem;\n}\n\n.input-login {\n  width: 100%;\n  padding-bottom: 0.7rem;\n  margin-bottom: 0rem;\n}\n\n.content-title-login {\n  margin-bottom: 2rem;\n}\n\n.content-title-login h4 {\n  color: #002a59;\n}\n\nspan.cwc-status-message {\n  font-size: 0.9rem;\n  color: red;\n}\n\n.content-message-error-login {\n  margin-top: -1rem;\n  margin-bottom: 1.3rem;\n}\n\n@font-face {\n  font-family: \"Roboto-medium\";\n  src: url('Roboto-Medium.ttf');\n}\n\n.link-forgot-password {\n  font-family: \"Roboto-medium\" !important;\n  margin-top: 1rem;\n  font-weight: bold !important;\n}\n\n.content-title-welcome h1 {\n  color: #002a59;\n  font-size: 2.5rem !important;\n}\n\n.content-title-welcome {\n  padding-top: 1rem;\n  padding-bottom: 3rem;\n}\n\n.toolbar-login {\n  --background: #F4F6F9;\n  padding: 5rem !important;\n}\n\n.content-line-login {\n  padding-top: 1.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.text-not-account {\n  color: #002a59 !important;\n}\n\n.text-not-account span {\n  color: #3FA9F5 !important;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0FBS0o7O0FBSEE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0FBTUo7O0FBSkE7RUFDSSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtBQU9KOztBQUxBO0VBQ0ssaUJBQUE7RUFDQSxvQkFBQTtBQVFMOztBQU5BO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtBQVNKOztBQVBBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQVVKOztBQVJBO0VBQ0kseUJBQUE7QUFXSjs7QUFUQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFZSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1ncmlkLWxvZ2lue1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuIH1cclxuLmlucHV0LWxvZ2lue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxufVxyXG4uY29udGVudC10aXRsZS1sb2dpbntcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLmNvbnRlbnQtdGl0bGUtbG9naW4gaDR7XHJcbiAgICBjb2xvcjogIzAwMmE1OTtcclxufVxyXG5zcGFuLmN3Yy1zdGF0dXMtbWVzc2FnZXtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uY29udGVudC1tZXNzYWdlLWVycm9yLWxvZ2lue1xyXG4gICAgbWFyZ2luLXRvcDogLTFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjNyZW07XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1tZWRpdW0nO1xyXG4gICAgc3JjOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZicpO1xyXG4gIH1cclxuLmxpbmstZm9yZ290LXBhc3N3b3Jke1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tbWVkaXVtJyAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRlbnQtdGl0bGUtd2VsY29tZSBoMXtcclxuICAgIGNvbG9yOiAjMDAyYTU5O1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4uY29udGVudC10aXRsZS13ZWxjb21le1xyXG4gICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG59XHJcbi50b29sYmFyLWxvZ2lue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjRGNkY5O1xyXG4gICAgcGFkZGluZzogNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5jb250ZW50LWxpbmUtbG9naW57XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxufVxyXG4udGV4dC1ub3QtYWNjb3VudHtcclxuICAgIGNvbG9yOiAjMDAyYTU5ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtbm90LWFjY291bnQgc3BhbntcclxuICAgIGNvbG9yOiAjM0ZBOUY1ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59Il19 */";

/***/ }),

/***/ 23442:
/*!*************************************************************!*\
  !*** ./src/app/auth/pages/login/login.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<div slot=\"main\" class=\"content-grid-login content\">\r\n  <form  (submit)=\"login()\" [formGroup]=\"form\">\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"content-title-welcome\">\r\n        <h1>Bienvenido</h1>\r\n        <div class=\"border-red\"></div>\r\n      </div>\r\n      <div class=\"content-title-login\">\r\n        <h4>Iniciar Sesión</h4>\r\n      </div>\r\n        <cwc-input class=\"input-login input\" \r\n                   [status]='statusInputEmail'\r\n                   [statusMessage]='statusInputMessageEmail'\r\n                   label='Correo electrónico'\r\n                   formControlName=\"email\"\r\n                   design-version=\"v2\" \r\n                   required\r\n                   ></cwc-input>\r\n        <cwc-input class=\"input-login input\"\r\n                   [status]=\"statusInputPassword\"\r\n                   [statusMessage]='statusInputMessagePassword'\r\n                   design-version=\"v2\" \r\n                   formControlName=\"password\"\r\n                   type='password' \r\n                   label='Contraseña'\r\n                   allow-password-show='true'\r\n                   required \r\n                   ></cwc-input>\r\n                   <div class=\"content-message-error-login\">\r\n                    <span class=\"cwc-status-message\" aria-live=\"assertive\" id=\"cwc-input-1-error\">{{message}}</span>\r\n                   </div>\r\n        <cwc-button class=\"btn-login\" \r\n                    [disabled]=\"form.invalid\"\r\n                    (click)=\"login()\" \r\n                    design-version=\"v1\" \r\n                    variant=\"primary-block\">INICIAR SESIÓN</cwc-button>\r\n                  \r\n        <app-error-messages [errors]=\"errors\"></app-error-messages>  \r\n        <cwc-button variant=\"link\" class=\"link-forgot-password\" [routerLink]=\"['/reset-password-email']\" routerLinkActive=\"router-link-active\" >¿Olvidó su contraseña?</cwc-button>           \r\n    </cwc-cell>\r\n  </cwc-grid>\r\n<cwc-grid>\r\n<cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n  <div class=\"content-line-login\">\r\n    <div class=\"border-gray\"></div>\r\n  </div>\r\n  <div>\r\n    <h6 class=\"text-not-account\">¿Aún no tienes cuenta? <span [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\" >Registrate</span></h6>\r\n  </div>\r\n</cwc-cell>\r\n</cwc-grid>\r\n</form>\r\n<cwc-snackbar id='snackbar' message=\"{{message}}\" cta-message=\"dismiss\" auto-hide-duration='5000'></cwc-snackbar>\r\n</div>\r\n<div class=\"loading-content\" *ngIf=\"loading\">\r\n  <cwc-loader>\r\n    <span slot='loading'>Espere un momento...</span>\r\n  </cwc-loader>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_pages_login_login_module_ts.js.map