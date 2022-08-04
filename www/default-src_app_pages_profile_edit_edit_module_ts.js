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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_admin_logis_third_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-admin-logis-third.component.html?ngResource */ 31692);
/* harmony import */ var _edit_admin_logis_third_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-admin-logis-third.component.scss?ngResource */ 82636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/companies/companies.service */ 46605);
/* harmony import */ var _services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/error-messages.service */ 47486);
/* harmony import */ var _services_adminLogist_admin_logist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/adminLogist/admin-logist.service */ 59543);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/auth/login.service */ 52876);
/* harmony import */ var src_app_models_profile_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/profile.model */ 22574);












let EditAdminLogisThirdComponent = class EditAdminLogisThirdComponent {
    constructor(formBuilder, companiesService, errorMessages, adminLogistService, navCtrl, loginServices) {
        this.formBuilder = formBuilder;
        this.companiesService = companiesService;
        this.errorMessages = errorMessages;
        this.adminLogistService = adminLogistService;
        this.navCtrl = navCtrl;
        this.loginServices = loginServices;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.profile = new src_app_models_profile_model__WEBPACK_IMPORTED_MODULE_6__.Profile();
        this.loading = false;
        this.alertSucces = true;
        this.alertConfirm = false;
        this.addIdentityCard = false;
        this.addDocumentCompany = false;
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
        this.openPhotoIdentityCard = false;
        this.openPhotoDocumentCompany = false;
        this.profile = loginServices.profileUser;
        this.previusMail = loginServices.profileUser.Email;
        this.formBuilderInput();
    }
    ngOnInit() {
        this.alertSucces = false;
    }
    updateData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                return;
            }
            this.data = new FormData();
            this.addFormData(this.form.value);
            this.propagar.emit(true);
            yield this.adminLogistService.updateAdminLogistThird(this.data, this.previusMail).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                this.propagar.emit(false);
                this.alertSucces = true;
                this.addIdentityCard = false;
                this.addDocumentCompany = false;
                this.alertConfirm = false;
                this.alertSucces = true;
                this.errors = [];
            }), (error) => {
                console.log(error);
                this.propagar.emit(false);
                this.errors = this.errorMessages.parsearErroresAPI(error);
            });
        });
    }
    addFormData(objeto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            for (var key in objeto) {
                if (key !== 'term') {
                    this.data.append(key, objeto[key]);
                }
            }
        });
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
    buttonBack() {
        this.navCtrl.navigateRoot('/dashboard/perfil', { animated: true });
    }
    openModalPhotoIdentityCard() {
        if (this.openPhotoIdentityCard = true) {
            this.openPhotoIdentityCard = false;
        }
        else {
            this.openPhotoIdentityCard = true;
        }
    }
    openModalPhotoDocumentCompany() {
        this.openPhotoDocumentCompany = true;
    }
    /*=============================================
     FORMULARIO REACTIVOS
    =============================================*/
    formBuilderInput() {
        this.form = this.formBuilder.group({
            FirstName: [this.profile.FirstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,]],
            LastName: [this.profile.LastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,]],
            Email: [this.profile.Email, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email]],
            PhoneNumber: [this.profile.PhoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]*$')
                ]],
            term: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.requiredTrue]]
        });
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(350))
            .subscribe(data => {
            console.log(data);
            this.validateInput();
        });
    }
    cwcChangeTerm(event) {
        this.form.get('term').setValue(event.detail);
    }
    clickUpdate() {
        if (this.form.invalid) {
            return;
        }
        this.alertConfirm = true;
    }
    getStatusField(field) {
        if (this.form.controls[field].errors && this.form.controls[field].touched)
            return 'error';
        return 'regular';
    }
    /*=============================================
    FUNCIÓN PARA VALIDAR LOS CAMPOS
   =============================================*/
    validateInput() {
        if (this.form.get('FirstName').errors && this.form.get('FirstName').dirty) {
            this.statusInputName = 'error';
            this.statusInputMessageName = 'Este campo es requerido';
        }
        else {
            this.statusInputName = 'regular';
            this.statusInputMessageName = '';
        }
        if (this.form.get('LastName').errors && this.form.get('LastName').dirty) {
            this.statusInputLastName = 'error';
            this.statusInputMessageLastName = 'Este campo es requerido';
        }
        else {
            this.statusInputLastName = 'regular';
            this.statusInputMessageLastName = '';
        }
        if (this.form.get('Email').errors && this.form.get('Email').dirty) {
            if (this.form.get('Email').errors.email) {
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
        if (this.form.get('PhoneNumber').errors && this.form.get('PhoneNumber').dirty) {
            if (this.form.get('PhoneNumber').errors.minlength || this.form.get('PhoneNumber').errors.maxlength) {
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
    }
};
EditAdminLogisThirdComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_2__.CompaniesService },
    { type: _services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__.ErrorMessagesService },
    { type: _services_adminLogist_admin_logist_service__WEBPACK_IMPORTED_MODULE_4__.AdminLogistService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService }
];
EditAdminLogisThirdComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-admin-logis-third',
        template: _edit_admin_logis_third_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_admin_logis_third_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditAdminLogisThirdComponent);



/***/ }),

/***/ 99735:
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/edit/edit-driver/edit-driver.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditDriverComponent": () => (/* binding */ EditDriverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _edit_driver_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-driver.component.html?ngResource */ 81290);
/* harmony import */ var _edit_driver_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-driver.component.scss?ngResource */ 86151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/companies/companies.service */ 46605);
/* harmony import */ var _services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/error-messages.service */ 47486);
/* harmony import */ var _services_adminLogist_admin_logist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/adminLogist/admin-logist.service */ 59543);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/auth/login.service */ 52876);
/* harmony import */ var src_app_models_profile_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/profile.model */ 22574);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);












let EditDriverComponent = class EditDriverComponent {
    constructor(formBuilder, companiesService, errorMessages, adminLogistService, navCtrl, loginServices) {
        this.formBuilder = formBuilder;
        this.companiesService = companiesService;
        this.errorMessages = errorMessages;
        this.adminLogistService = adminLogistService;
        this.navCtrl = navCtrl;
        this.loginServices = loginServices;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.profile = new src_app_models_profile_model__WEBPACK_IMPORTED_MODULE_6__.Profile();
        this.loading = false;
        this.alertSucces = true;
        this.alertConfirm = false;
        this.addIdentityCard = false;
        this.addDocumentCompany = false;
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
        this.openPhotoIdentityCard = false;
        this.openPhotoDocumentCompany = false;
        this.profile = loginServices.profileUser;
        this.previusMail = loginServices.profileUser.Email;
        this.formBuilderInput();
    }
    ngOnInit() {
        this.alertSucces = false;
    }
    updateData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                return;
            }
            this.data = new FormData();
            this.addFormData(this.form.value);
            this.propagar.emit(true);
            yield this.adminLogistService.updateDriver(this.data, this.previusMail).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                this.propagar.emit(false);
                this.alertSucces = true;
                this.addIdentityCard = false;
                this.addDocumentCompany = false;
                this.alertConfirm = false;
                this.alertSucces = true;
                this.errors = [];
            }), (error) => {
                console.log(error);
                this.propagar.emit(false);
                this.errors = this.errorMessages.parsearErroresAPI(error);
            });
        });
    }
    addFormData(objeto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.data.append('SapCode', this.profile.SapCode);
            this.data.append('Document', this.profile.Document);
            for (var key in objeto) {
                if (key !== 'term') {
                    this.data.append(key, objeto[key]);
                }
            }
        });
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
    buttonBack() {
        this.navCtrl.navigateRoot('/dashboard/perfil', { animated: true });
    }
    openModalPhotoIdentityCard() {
        if (this.openPhotoIdentityCard = true) {
            this.openPhotoIdentityCard = false;
        }
        else {
            this.openPhotoIdentityCard = true;
        }
    }
    openModalPhotoDocumentCompany() {
        this.openPhotoDocumentCompany = true;
    }
    /*=============================================
     FORMULARIO REACTIVOS
    =============================================*/
    formBuilderInput() {
        this.form = this.formBuilder.group({
            FirstName: [this.profile.FirstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,]],
            LastName: [this.profile.LastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,]],
            Email: [this.profile.Email, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email]],
            Document: [{ value: this.profile.Document, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            SapCode: [{ value: this.profile.SapCode, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            PhoneNumber: [this.profile.PhoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9]*$')
                ]],
            term: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.requiredTrue]]
        });
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(350))
            .subscribe(data => {
            console.log(data);
            this.validateInput();
        });
    }
    cwcChangeTerm(event) {
        this.form.get('term').setValue(event.detail);
    }
    clickUpdate() {
        if (this.form.invalid) {
            return;
        }
        this.alertConfirm = true;
    }
    getStatusField(field) {
        if (this.form.controls[field].errors && this.form.controls[field].touched)
            return 'error';
        return 'regular';
    }
    /*=============================================
    FUNCIÓN PARA VALIDAR LOS CAMPOS
   =============================================*/
    validateInput() {
        if (this.form.get('FirstName').errors && this.form.get('FirstName').dirty) {
            this.statusInputName = 'error';
            this.statusInputMessageName = 'Este campo es requerido';
        }
        else {
            this.statusInputName = 'regular';
            this.statusInputMessageName = '';
        }
        if (this.form.get('LastName').errors && this.form.get('LastName').dirty) {
            this.statusInputLastName = 'error';
            this.statusInputMessageLastName = 'Este campo es requerido';
        }
        else {
            this.statusInputLastName = 'regular';
            this.statusInputMessageLastName = '';
        }
        if (this.form.get('Email').errors && this.form.get('Email').dirty) {
            if (this.form.get('Email').errors.email) {
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
        if (this.form.get('PhoneNumber').errors && this.form.get('PhoneNumber').dirty) {
            if (this.form.get('PhoneNumber').errors.minlength || this.form.get('PhoneNumber').errors.maxlength) {
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
    }
};
EditDriverComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_2__.CompaniesService },
    { type: _services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__.ErrorMessagesService },
    { type: _services_adminLogist_admin_logist_service__WEBPACK_IMPORTED_MODULE_4__.AdminLogistService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService }
];
EditDriverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-driver',
        template: _edit_driver_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_driver_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditDriverComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-routing.module */ 92958);
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.page */ 64532);
/* harmony import */ var _edit_admin_logis_third_edit_admin_logis_third_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-admin-logis-third/edit-admin-logis-third.component */ 76489);
/* harmony import */ var _edit_driver_edit_driver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-driver/edit-driver.component */ 99735);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);











let EditPageModule = class EditPageModule {
};
EditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_5__.CmxWebComponentsModule.forRoot(),
        ],
        declarations: [
            _edit_page__WEBPACK_IMPORTED_MODULE_1__.EditPage,
            _edit_admin_logis_third_edit_admin_logis_third_component__WEBPACK_IMPORTED_MODULE_2__.EditAdminLogisThirdComponent,
            _edit_driver_edit_driver_component__WEBPACK_IMPORTED_MODULE_3__.EditDriverComponent
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth/login.service */ 52876);






let EditPage = class EditPage {
    constructor(loginService, location) {
        this.loginService = loginService;
        this.location = location;
        this.loading = false;
        this.rol = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.rol = this.loginService.profileUser.Roles;
        });
    }
    onBack() {
        this.location.back();
    }
};
EditPage.ctorParameters = () => [
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location }
];
EditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-edit',
        template: _edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditPage);



/***/ }),

/***/ 59543:
/*!**************************************************************!*\
  !*** ./src/app/services/adminLogist/admin-logist.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLogistService": () => (/* binding */ AdminLogistService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/http.service */ 3755);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);




const URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.url;
let AdminLogistService = class AdminLogistService {
    constructor(http) {
        this.http = http;
    }
    createAdminLogistThird(data) {
        return this.http.doPostFormData(`${URL}/api/authentication/CreateUserTPLMTruckMan`, data, { responseType: 'text' });
    }
    createDriver(data) {
        return this.http.doPostFormData(`${URL}/api/authentication/CreateUserDriver`, data, { responseType: 'text' });
    }
    updateAdminLogistThird(data, email) {
        return this.http.doPutFormData(`${URL}/api/authentication/UpdateTPLM_TruckMan/${email}`, data, { responseType: 'text' });
    }
    updateDriver(data, email) {
        return this.http.doPutFormData(`${URL}/api/authentication/UpdateUserDriver/${email}`, data, { responseType: 'text' });
    }
};
AdminLogistService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService }
];
AdminLogistService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AdminLogistService);



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

/***/ 82636:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/profile/edit/edit-admin-logis-third/edit-admin-logis-third.component.scss?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = ".input-check-user {\n  font-size: small;\n  padding-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYWRtaW4tbG9naXMtdGhpcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdC1hZG1pbi1sb2dpcy10aGlyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1jaGVjay11c2Vye1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG59Il19 */";

/***/ }),

/***/ 86151:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/profile/edit/edit-driver/edit-driver.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = ".input-check-user {\n  font-size: small;\n  padding-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtZHJpdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQUNKIiwiZmlsZSI6ImVkaXQtZHJpdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWNoZWNrLXVzZXJ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn0iXX0= */";

/***/ }),

/***/ 87829:
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/edit/edit.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".header-text {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  top: 1;\n  right: 50;\n  left: 0;\n  margin-left: 1rem;\n}\n\n.attr-name {\n  font-weight: 700;\n}\n\n.content-card {\n  padding-top: 0.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n.content-title {\n  padding-top: 1rem;\n  font-weight: 700;\n}\n\n.content-grid-register {\n  overflow: auto;\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQztFQUNHLGdCQUFBO0FBQ0o7O0FBRUM7RUFDRyxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFFSSxjQUFBO0VBQ0Esa0NBQUE7QUFBSiIsImZpbGUiOiJlZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdGV4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTtcclxuICAgIHJpZ2h0OiA1MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuIH1cclxuIFxyXG4gLmF0dHItbmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7ICAgIFxyXG4gfVxyXG5cclxuIC5jb250ZW50LWNhcmR7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gfVxyXG5cclxuLmNvbnRlbnQtdGl0bGV7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWdyaWQtcmVnaXN0ZXJ7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiB9Il19 */";

/***/ }),

/***/ 31692:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/profile/edit/edit-admin-logis-third/edit-admin-logis-third.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "<form (submit)=\"register()\" [formGroup]=\"form\">\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"section\">\r\n        <cwc-input \r\n          class=\"input\" \r\n          label='Nombre (s)'\r\n          [status]='statusInputName'\r\n          [statusMessage]='statusInputMessageName'\r\n          design-version=\"v2\" \r\n          formControlName=\"FirstName\"\r\n          ngDefaultControl\r\n          required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input \r\n          class=\"input\" \r\n          label='Apellido (s)'\r\n          [status]='statusInputLastName'\r\n          [statusMessage]='statusInputMessageLastName'\r\n          formControlName=\"LastName\"\r\n          design-version=\"v2\" \r\n          ngDefaultControl\r\n          required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n          label='Número de celular'\r\n          type=\"number\"\r\n          [status]='statusInputPhone'\r\n          [statusMessage]='statusInputMessagePhone'\r\n          formControlName=\"PhoneNumber\"\r\n          design-version=\"v2\"\r\n          ngDefaultControl\r\n          required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\"\r\n          label='Correo electrónico'\r\n          [status]='statusInputEmail'\r\n          [statusMessage]='statusInputMessageEmail'\r\n          formControlName=\"Email\"\r\n          ngDefaultControl\r\n          design-version=\"v2\" \r\n          required\r\n        ></cwc-input>\r\n      </div>\r\n        <cwc-checkbox\r\n          (cwcChange)=\"cwcChangeTerm($event)\"\r\n          checked=\"true\"\r\n          mobile=\"true\"\r\n          class='m-end-sm'>          \r\n          <div class=\"input-check-user\">Confirmo que la siguiente información es verdadera.</div>\r\n        </cwc-checkbox>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n  <div class=\"content-button\">\r\n    <cwc-button \r\n    design-version=\"v1\" \r\n    [disabled]=\"form.invalid\"\r\n    (click)=\"clickUpdate()\"\r\n    variant=\"regular-block\">GUARDAR CAMBIOS</cwc-button>\r\n  </div>\r\n</form>\r\n\r\n<cwc-modal id='alert-confirm' class=\"alert-confirm\" [open] =\"alertConfirm\" (cwcClose)=\"closeAlertConfirm()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Atención</h2>\r\n  </header>\r\n  <p>¿Esta seguro que los datos registrados estan correctos?</p>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeAlertConfirm()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button variant='primary' (click)=\"updateData()\" >Aceptar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n<!--=====================================\r\n\t\tMODAL CONFIRMACIÓN RESPUESTA DE EXITO\r\n======================================-->\r\n<app-alert-success\r\n[alertShow] = \"alertSucces\"\r\ntitle = \"Existoso\"\r\nurlButton = \"/app/profile\"\r\ntextButton = \"Volver al perfil\"\r\nmessage = \"Tus datos se actualizaron correctamente.\">\r\n</app-alert-success>\r\n<!--=====================================\r\n\tTOAST ALERT MENSAJE\r\n======================================-->\r\n<cwc-snackbar id='toast-message-driver' [message]=\"toastMessage\"\r\ncta-message=\"dismiss\" auto-hide-duration='5000'></cwc-snackbar>\r\n\r\n\r\n<!-- Content loanding -->\r\n<div *ngIf=\"loading\" class=\"loading-content\">\r\n  <cwc-loader>\r\n      <span slot='loading'>Espere un momento...</span>\r\n  </cwc-loader>\r\n</div>";

/***/ }),

/***/ 81290:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/profile/edit/edit-driver/edit-driver.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<form (submit)=\"register()\" [formGroup]=\"form\">\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"section\">\r\n        <cwc-input \r\n          class=\"input\" \r\n          label='Nombre (s)'\r\n          [status]='statusInputName'\r\n          [statusMessage]='statusInputMessageName'\r\n          design-version=\"v2\" \r\n          formControlName=\"FirstName\"\r\n          ngDefaultControl\r\n          required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input \r\n          class=\"input\" \r\n          label='Apellido (s)'\r\n          [status]='statusInputLastName'\r\n          [statusMessage]='statusInputMessageLastName'\r\n          formControlName=\"LastName\"\r\n          design-version=\"v2\" \r\n          ngDefaultControl\r\n          required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n          label='Número de celular'\r\n          type=\"number\"\r\n          [status]='statusInputPhone'\r\n          [statusMessage]='statusInputMessagePhone'\r\n          formControlName=\"PhoneNumber\"\r\n          design-version=\"v2\"\r\n          ngDefaultControl\r\n          required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n          label='Código SAP'\r\n          type=\"number\"\r\n          formControlName=\"SapCode\"\r\n          design-version=\"v2\"\r\n          ngDefaultControl\r\n          required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n          label='Número de Cédula o NIT'\r\n          type=\"number\"\r\n          formControlName=\"Document\"\r\n          design-version=\"v2\"\r\n          ngDefaultControl\r\n          required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\"\r\n          label='Correo electrónico'\r\n          [status]='statusInputEmail'\r\n          [statusMessage]='statusInputMessageEmail'\r\n          formControlName=\"Email\"\r\n          ngDefaultControl\r\n          design-version=\"v2\" \r\n          required\r\n        ></cwc-input>\r\n      </div>\r\n        <cwc-checkbox\r\n          (cwcChange)=\"cwcChangeTerm($event)\"\r\n          checked=\"true\"\r\n          mobile=\"true\"\r\n          class='m-end-sm'>          \r\n          <div class=\"input-check-user\">Confirmo que la siguiente información es verdadera.</div>\r\n        </cwc-checkbox>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n  <div class=\"content-button\">\r\n    <cwc-button \r\n    design-version=\"v1\" \r\n    [disabled]=\"form.invalid\"\r\n    (click)=\"clickUpdate()\"\r\n    variant=\"regular-block\">GUARDAR CAMBIOS</cwc-button>\r\n  </div>\r\n</form>\r\n\r\n<cwc-modal id='alert-confirm' class=\"alert-confirm\" [open] =\"alertConfirm\" (cwcClose)=\"closeAlertConfirm()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Atención</h2>\r\n  </header>\r\n  <p>¿Esta seguro que los datos registrados estan correctos?</p>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeAlertConfirm()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button variant='primary' (click)=\"updateData()\" >Aceptar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n<!--=====================================\r\n\t\tMODAL CONFIRMACIÓN RESPUESTA DE EXITO\r\n======================================-->\r\n<app-alert-success\r\n[alertShow] = \"alertSucces\"\r\ntitle = \"Existoso\"\r\nurlButton = \"/app/profile\"\r\ntextButton = \"Volver al perfil\"\r\nmessage = \"Tus datos se actualizarón correctamente.\">\r\n</app-alert-success>\r\n<!--=====================================\r\n\tTOAST ALERT MENSAJE\r\n======================================-->\r\n<cwc-snackbar id='toast-message-driver' [message]=\"toastMessage\"\r\ncta-message=\"dismiss\" auto-hide-duration='5000'></cwc-snackbar>\r\n\r\n\r\n<!-- Content loanding -->\r\n<div *ngIf=\"loading\" class=\"loading-content\">\r\n  <cwc-loader>\r\n      <span slot='loading'>Espere un momento...</span>\r\n  </cwc-loader>\r\n</div>";

/***/ }),

/***/ 91315:
/*!**************************************************************!*\
  !*** ./src/app/pages/profile/edit/edit.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<cwc-header design-version=\"v2\" slot=\"header\" show-Menu-Button=\"false\" show-cemex-logo=\"false\">\r\n  <div class=\"header-text\">\r\n    <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px;\" (click)=\"onBack()\"></ion-icon>\r\n    <div class=\"attr-name\" style=\"padding-left: 1rem;\">Editar datos</div>\r\n  </div>\r\n</cwc-header>\r\n  <div slot=\"main\" class=\"content-card\">\r\n    <div class=\"content-title\">\r\n      Mis datos\r\n    </div>\r\n    <div>\r\n        <!--=====================================\r\n\t\t    DATOS DEL ADMINISTRADOR LOGISTICO TERCERO\r\n         ======================================-->\r\n        <div *ngIf=\"rol === 'Administrador Logistico Tercero' || rol === 'Hombre Camion'\">\r\n          <app-edit-admin-logis-third>\r\n          </app-edit-admin-logis-third>\r\n        </div>\r\n        <div *ngIf=\"rol === 'Conductor'\">\r\n          <app-edit-driver>\r\n          </app-edit-driver>\r\n        </div>\r\n         \r\n    </div>\r\n  </div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_profile_edit_edit_module_ts.js.map