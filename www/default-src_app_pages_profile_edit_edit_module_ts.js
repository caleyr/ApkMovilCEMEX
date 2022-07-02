"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_profile_edit_edit_module_ts"],{

/***/ 76489:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/profile/edit/edit-admin-logis-third/edit-admin-logis-third.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAdminLogisThirdComponent": () => (/* binding */ EditAdminLogisThirdComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_admin_logis_third_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-admin-logis-third.component.html?ngResource */ 31692);
/* harmony import */ var _edit_admin_logis_third_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-admin-logis-third.component.scss?ngResource */ 82636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 80823);






let EditAdminLogisThirdComponent = class EditAdminLogisThirdComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.toastMessage = '';
        this.errors = [];
        this.statusInputName = 'regular';
        this.statusInputMessageName = '';
        this.statusInputLastName = 'regular';
        this.statusInputMessageLastName = '';
        this.statusInputEmail = 'regular';
        this.statusInputMessageEmail = '';
        this.statusInputDocument = 'regular';
        this.statusInputMessageDocument = '';
        this.statusInputSap = 'regular';
        this.statusInputMessageSap = '';
        this.statusInputPhone = 'regular';
        this.statusInputMessagePhone = '';
        this.statusInputCompany = 'regular';
        this.statusInputMessageCompany = '';
        this.statusInputNit = 'regular';
        this.statusInputMessageNit = '';
    }
    ngOnInit() {
        this.formBuilderInput();
        this.form.get('firstName').setValue(this.dataUser.firstName);
        this.form.get('lastName').setValue(this.dataUser.lastName);
        this.form.get('email').setValue(this.dataUser.email);
        this.form.get('document').setValue(this.dataUser.document);
        this.form.get('phoneNumber').setValue(this.dataUser.phoneNumber);
        this.form.get('nameCompany').setValue(this.dataUser.company.companyName);
        this.form.get('nitCompany').setValue(this.dataUser.company.companyNit);
    }
    /*=============================================
     FORMULARIO REACTIVOS
    =============================================*/
    formBuilderInput() {
        this.form = this.formBuilder.group({
            typeConveyorId: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                ]],
            firstName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                ]],
            lastName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email
                ]],
            document: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                ]],
            role: ['AdminLogis', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                ]],
            phoneNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[0-9]*$')
                ]],
            nameCompany: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                ]],
            nitCompany: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                ]],
        });
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(350))
            .subscribe(data => {
            this.validateInput();
        });
    }
    /*=============================================
     FUNCIÓN PARA VALIDAR LOS CAMPOS
    =============================================*/
    validateInput() {
        if (this.form.get('firstName').errors && this.form.get('firstName').dirty) {
            this.statusInputName = 'error';
            this.statusInputMessageName = 'Este campo es requerido';
        }
        else {
            this.statusInputName = 'regular';
            this.statusInputMessageName = '';
        }
        if (this.form.get('lastName').errors && this.form.get('lastName').dirty) {
            this.statusInputLastName = 'error';
            this.statusInputMessageLastName = 'Este campo es requerido';
        }
        else {
            this.statusInputLastName = 'regular';
            this.statusInputMessageLastName = '';
        }
        if (this.form.get('email').errors && this.form.get('email').dirty) {
            if (this.form.get('email').errors.email) {
                this.statusInputEmail = 'error';
                this.statusInputMessageEmail = 'Ingrese un correo electrónico válido';
            }
            else {
                this.statusInputEmail = 'error';
                this.statusInputMessageEmail = 'Este campo es requerido';
            }
        }
        else {
            this.statusInputEmail = 'regular';
            this.statusInputMessageEmail = '';
        }
        if (this.form.get('document').errors && this.form.get('document').dirty) {
            this.statusInputDocument = 'error';
            this.statusInputMessageDocument = 'Este campo es requerido';
        }
        else {
            this.statusInputDocument = 'regular';
            this.statusInputMessageDocument = '';
        }
        if (this.form.get('phoneNumber').errors && this.form.get('phoneNumber').dirty) {
            if (this.form.get('phoneNumber').errors.minlength || this.form.get('phoneNumber').errors.maxlength) {
                this.statusInputPhone = 'error';
                this.statusInputMessagePhone = 'Ingrese un número de celular válido';
            }
            else {
                this.statusInputPhone = 'error';
                this.statusInputMessagePhone = 'Este campo es requerido';
            }
        }
        else {
            this.statusInputPhone = 'regular';
            this.statusInputMessagePhone = '';
        }
        if (this.form.get('nameCompany').errors && this.form.get('nameCompany').dirty) {
            this.statusInputCompany = 'error';
            this.statusInputMessageCompany = 'Este campo es requerido';
        }
        else {
            this.statusInputCompany = 'regular';
            this.statusInputMessageCompany = '';
        }
        if (this.form.get('nitCompany').errors && this.form.get('nitCompany').dirty) {
            this.statusInputNit = 'error';
            this.statusInputMessageNit = 'Este campo es requerido';
        }
        else {
            this.statusInputNit = 'regular';
            this.statusInputMessageNit = '';
        }
    }
};
EditAdminLogisThirdComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
EditAdminLogisThirdComponent.propDecorators = {
    dataUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
EditAdminLogisThirdComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-edit-admin-logis-third',
        template: _edit_admin_logis_third_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_admin_logis_third_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditAdminLogisThirdComponent);



/***/ }),

/***/ 92958:
/*!***********************************************************!*\
  !*** ./src/app/pages/profile/edit/edit-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPageRoutingModule": () => (/* binding */ EditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.page */ 64532);




const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_0__.EditPage
    }
];
let EditPageRoutingModule = class EditPageRoutingModule {
};
EditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditPageRoutingModule);



/***/ }),

/***/ 84780:
/*!***************************************************!*\
  !*** ./src/app/pages/profile/edit/edit.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPageModule": () => (/* binding */ EditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-routing.module */ 92958);
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.page */ 64532);
/* harmony import */ var _edit_admin_logis_third_edit_admin_logis_third_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-admin-logis-third/edit-admin-logis-third.component */ 76489);








let EditPageModule = class EditPageModule {
};
EditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditPageRoutingModule
        ],
        declarations: [
            _edit_page__WEBPACK_IMPORTED_MODULE_1__.EditPage,
            _edit_admin_logis_third_edit_admin_logis_third_component__WEBPACK_IMPORTED_MODULE_2__.EditAdminLogisThirdComponent
        ]
    })
], EditPageModule);



/***/ }),

/***/ 64532:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/edit/edit.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPage": () => (/* binding */ EditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.page.html?ngResource */ 91315);
/* harmony import */ var _edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.page.scss?ngResource */ 87829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);
/* harmony import */ var src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile/profile.service */ 89985);






let EditPage = class EditPage {
    constructor(storage, profileService) {
        this.storage = storage;
        this.profileService = profileService;
        this.loading = false;
        this.rol = '';
        this.user = {
            firstName: '',
            lastName: '',
            document: '',
            email: '',
            status: false,
            slug: '',
            phoneNumber: '',
            roles: '',
            driver: {
                documentDrivinglicenseFrontal: '',
                documentDrivinglicenseBack: '',
                codeSap: ''
            },
            company: {
                companyNit: '',
                companyName: '',
                documentCompany: ''
            }
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.get('current_user').then(resp => {
                this.user.email = resp.user.email;
            });
            this.getDataUserProfile();
        });
    }
    getDataUserProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let urlactual = '';
            this.loading = true;
            yield this.profileService.getDataUser(this.user.email).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.rol = resp.roles.map(item => item).toString();
                this.user.firstName = resp.user.firstName;
                this.user.lastName = resp.user.lastName;
                this.user.phoneNumber = resp.user.phoneNumber;
                this.user.document = resp.user.document;
                this.user.documentIdentityCardFrontal = resp.user.documentIdentityCardFrontal;
                this.user.documentIdentityCardBack = resp.user.documentIdentityCardBack;
                this.user.driver.codeSap = resp.codeSap;
                this.user.driver.documentDrivinglicenseFrontal = resp.documentDrivinglicenseFrontal;
                this.user.driver.documentDrivinglicenseBack = resp.documentDrivinglicenseBack;
                this.user.driver.documentSecurityCard = resp.documentSecurityCard;
                this.user.company.companyName = resp.companyName;
                this.user.company.documentCompany = resp.documentCompany;
                this.user.company.companyNit = resp.companyNit;
                this.loading = false;
            }), error => {
                this.loading = false;
            });
            urlactual = this.user.driver.documentDrivinglicenseFrontal;
        });
    }
};
EditPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService }
];
EditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-edit',
        template: _edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditPage);



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

/***/ 82636:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/profile/edit/edit-admin-logis-third/edit-admin-logis-third.component.scss?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWFkbWluLWxvZ2lzLXRoaXJkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 87829:
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/edit/edit.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 31692:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/profile/edit/edit-admin-logis-third/edit-admin-logis-third.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "<form (submit)=\"register()\" [formGroup]=\"form\" style=\"margin-top: 3rem;\">\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n                   label='Nombre (s)'\r\n                   [status]='statusInputName'\r\n                   [statusMessage]='statusInputMessageName'\r\n                   design-version=\"v2\" \r\n                   formControlName=\"firstName\"\r\n                   ngDefaultControl\r\n                   required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n                   label='Apellido (s)'\r\n                   [status]='statusInputLastName'\r\n                   [statusMessage]='statusInputMessageLastName'\r\n                   formControlName=\"lastName\"\r\n                   design-version=\"v2\" \r\n                   ngDefaultControl\r\n                   required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Correo electrónico'\r\n        [status]='statusInputEmail'\r\n        [statusMessage]='statusInputMessageEmail'\r\n        formControlName=\"email\"\r\n        ngDefaultControl\r\n        design-version=\"v2\" \r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='N° documento'\r\n        [status]='statusInputDocument'\r\n        [statusMessage]='statusInputMessageDocument'\r\n        formControlName=\"document\"\r\n        design-version=\"v2\" \r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Número de celular'\r\n        type=\"number\"\r\n        [status]='statusInputPhone'\r\n        [statusMessage]='statusInputMessagePhone'\r\n        formControlName=\"phoneNumber\"\r\n        design-version=\"v2\"\r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Nombre empresa'\r\n        [status]='statusInputCompany'\r\n        [statusMessage]='statusInputMessageCompany'\r\n        formControlName=\"nameCompany\"\r\n        design-version=\"v2\"\r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='N° Nit'\r\n        [status]='statusInputNit'\r\n        [statusMessage]='statusInputMessageNit'\r\n        formControlName=\"nitCompany\"\r\n        design-version=\"v2\" \r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n    </cwc-cell>\r\n  </cwc-grid>";

/***/ }),

/***/ 91315:
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/edit/edit.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Editar datos</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <div slot=\"main\" class=\"content\">\r\n    <div class=\"content-title-register\">\r\n      <h5>Mis datos</h5>\r\n    </div>\r\n    <div>\r\n        <!--=====================================\r\n\t\t    DATOS DEL ADMINISTRADOR LOGISTICO TERCERO\r\n         ======================================-->\r\n         <div *ngIf=\"rol === 'AdminLogis'\">\r\n            <app-edit-admin-logis-third\r\n             [dataUser]=\"user\"\r\n            >\r\n            </app-edit-admin-logis-third>\r\n         </div>\r\n         \r\n    </div>\r\n  </div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_profile_edit_edit_module_ts.js.map