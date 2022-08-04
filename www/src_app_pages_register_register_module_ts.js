"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 43104:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/register/components/archives-register/archives-register.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchivesRegisterComponent": () => (/* binding */ ArchivesRegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _archives_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./archives-register.component.html?ngResource */ 94729);
/* harmony import */ var _archives_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./archives-register.component.scss?ngResource */ 95984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ArchivesRegisterComponent = class ArchivesRegisterComponent {
    constructor() { }
    ngOnInit() { }
};
ArchivesRegisterComponent.ctorParameters = () => [];
ArchivesRegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-archives-register',
        template: _archives_register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_archives_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ArchivesRegisterComponent);



/***/ }),

/***/ 86271:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/register/components/document-company/document-company.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentCompanyComponent": () => (/* binding */ DocumentCompanyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _document_company_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-company.component.html?ngResource */ 80467);
/* harmony import */ var _document_company_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-company.component.scss?ngResource */ 74497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/convert-photo-camera/convert-photo-camera.service */ 25640);
/* harmony import */ var src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/conveyor/conveyor.service */ 88001);







let DocumentCompanyComponent = class DocumentCompanyComponent {
    constructor(conveyorService, convertPhotoCamera) {
        this.conveyorService = conveyorService;
        this.convertPhotoCamera = convertPhotoCamera;
        this.photoFrontal = {
            webviewPath: ''
        };
    }
    ngOnInit() {
        /*this.conveyorService.removeModalPhotoDocumentCompany.subscribe(resp =>{
          this.photoFrontal.webviewPath = '';
        });
        */
    }
    addPhotoDocumentCompany() {
        /*
        this.conveyorService.addPhotoDocumentCompany.emit();
        this.conveyorService.frontalArchiveDocumentCompany.emit(this.savePhotoFrontal);
        this.conveyorService.closeModalArchiveDocumentCompany.emit(false);
        */
    }
    openCameraOne() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
                quality: 100
            });
            this.photoFrontal = {
                webviewPath: capturedPhoto.webPath
            };
            this.savePhotoFrontal = yield this.convertPhotoCamera.savePicture(capturedPhoto);
        });
    }
    closeModalDocumentCompany() {
        if (this.photoFrontal.webviewPath) {
            //this.conveyorService.closeModalArchiveDocumentCompany.emit(false);
            return;
        }
        //this.conveyorService.closeModalArchiveDocumentCompany.emit(false);
        this.removePhotoFrontal();
    }
    removePhotoFrontal() {
        this.photoFrontal.webviewPath = '';
        //this.conveyorService.removePhotoFrontalIdentityCardDriver.emit();
    }
};
DocumentCompanyComponent.ctorParameters = () => [
    { type: src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_4__.ConveyorService },
    { type: src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__.ConvertPhotoCameraService }
];
DocumentCompanyComponent.propDecorators = {
    modalPhotoDocumentCompanyShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
DocumentCompanyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-document-company',
        template: _document_company_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_document_company_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DocumentCompanyComponent);



/***/ }),

/***/ 73031:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/register/components/photo-indentity-card/photo-indentity-card.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoIndentityCardComponent": () => (/* binding */ PhotoIndentityCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _photo_indentity_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-indentity-card.component.html?ngResource */ 43791);
/* harmony import */ var _photo_indentity_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-indentity-card.component.scss?ngResource */ 28529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/convert-photo-camera/convert-photo-camera.service */ 25640);
/* harmony import */ var src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/conveyor/conveyor.service */ 88001);







let PhotoIndentityCardComponent = class PhotoIndentityCardComponent {
    constructor(conveyorService, convertPhotoCamera) {
        this.conveyorService = conveyorService;
        this.convertPhotoCamera = convertPhotoCamera;
        this.photoFrontal = {
            webviewPath: ''
        };
        this.photoBack = {
            webviewPath: ''
        };
    }
    ngOnInit() {
        /*this.conveyorService.removeModalIdentityCardDriver.subscribe(resp =>{
          this.photoFrontal.webviewPath = '';
          this.photoBack.webviewPath = '';
        });*/
    }
    addIdentityCard() {
    }
    openCameraOne() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
                quality: 100
            });
            this.photoFrontal = {
                webviewPath: capturedPhoto.webPath
            };
            this.savePhotoFrontal = yield this.convertPhotoCamera.savePicture(capturedPhoto);
        });
    }
    openCameraTwo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
                quality: 100
            });
            this.photoBack = {
                webviewPath: capturedPhoto.webPath
            };
            this.savePhotoBack = yield this.convertPhotoCamera.savePicture(capturedPhoto);
        });
    }
    closeModalIdentityCard() {
        if (this.photoBack.webviewPath && this.photoFrontal.webviewPath) {
            //this.conveyorService.closeModalArchiveIdentityCardDriver.emit(false);
            return;
        }
        //this.conveyorService.closeModalArchiveIdentityCardDriver.emit(false);
        this.removePhotoFrontal();
        this.removePhotoBack();
    }
    removePhotoFrontal() {
        this.photoFrontal.webviewPath = '';
        //this.conveyorService.removePhotoFrontalIdentityCardDriver.emit();
    }
    removePhotoBack() {
        this.photoBack.webviewPath = '';
        //this.conveyorService.removePhotoBackIdentityCardDriver.emit();
    }
};
PhotoIndentityCardComponent.ctorParameters = () => [
    { type: src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_4__.ConveyorService },
    { type: src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__.ConvertPhotoCameraService }
];
PhotoIndentityCardComponent.propDecorators = {
    modalPhotoIdentityCardShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
PhotoIndentityCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-photo-indentity-card',
        template: _photo_indentity_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_photo_indentity_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhotoIndentityCardComponent);



/***/ }),

/***/ 27109:
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-admin-logist-third/register-admin-logist-third.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterAdminLogistThirdComponent": () => (/* binding */ RegisterAdminLogistThirdComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_admin_logist_third_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-admin-logist-third.component.html?ngResource */ 19256);
/* harmony import */ var _register_admin_logist_third_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-admin-logist-third.component.scss?ngResource */ 35831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var src_app_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/error-messages.service */ 47486);
/* harmony import */ var _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/companies/companies.service */ 46605);
/* harmony import */ var _services_adminLogist_admin_logist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/adminLogist/admin-logist.service */ 59543);









let RegisterAdminLogistThirdComponent = class RegisterAdminLogistThirdComponent {
    constructor(formBuilder, companiesService, errorMessages, adminLogistService) {
        this.formBuilder = formBuilder;
        this.companiesService = companiesService;
        this.errorMessages = errorMessages;
        this.adminLogistService = adminLogistService;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
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
        this.formBuilderInput();
        this.companiesService.getCompanies().subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.listCompanies = data.data;
        }));
    }
    ngOnInit() {
        this.alertSucces = false;
    }
    cwcChange(event) {
        this.form.get('CompanyId').setValue(`${event.detail.value}`);
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                return;
            }
            this.data = new FormData();
            this.addFormData(this.form.value);
            this.propagar.emit(true);
            yield this.adminLogistService.createAdminLogistThird(this.data).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            for (var key in objeto) {
                this.data.append(key, objeto[key]);
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
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
            CompanyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            Roles: ['Administrador Logistico Tercero', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            PhoneNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]*$')
                ]]
        });
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(350))
            .subscribe(data => {
            console.log(data);
            this.validateInput();
        });
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
RegisterAdminLogistThirdComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_3__.CompaniesService },
    { type: src_app_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__.ErrorMessagesService },
    { type: _services_adminLogist_admin_logist_service__WEBPACK_IMPORTED_MODULE_4__.AdminLogistService }
];
RegisterAdminLogistThirdComponent.propDecorators = {
    typeConveyor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    propagar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
RegisterAdminLogistThirdComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register-admin-logist-third',
        template: _register_admin_logist_third_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_admin_logist_third_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterAdminLogistThirdComponent);



/***/ }),

/***/ 21063:
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-driver/photo-driving-licence/photo-driving-licence.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoDrivingLicenceComponent": () => (/* binding */ PhotoDrivingLicenceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _photo_driving_licence_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-driving-licence.component.html?ngResource */ 1472);
/* harmony import */ var _photo_driving_licence_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-driving-licence.component.scss?ngResource */ 18109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/conveyor/conveyor.service */ 88001);
/* harmony import */ var src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/convert-photo-camera/convert-photo-camera.service */ 25640);








let PhotoDrivingLicenceComponent = class PhotoDrivingLicenceComponent {
    constructor(conveyorService, convertPhotoCamera, platform) {
        this.conveyorService = conveyorService;
        this.convertPhotoCamera = convertPhotoCamera;
        this.photoFrontal = {
            webviewPath: ''
        };
        this.photoBack = {
            webviewPath: ''
        };
        this.platform = platform;
    }
    ngOnInit() {
        /*this.conveyorService.removeModalLicenceDriver.subscribe(resp =>{
          this.photoFrontal.webviewPath = '';
          this.photoBack.webviewPath = '';
        });*/
    }
    addLicence() {
        /*this.conveyorService.addLicenceDriver.emit();
        this.conveyorService.frontalArchiveLicenceDriver.emit(this.savePhotoFrontal);
        this.conveyorService.backArchiveLicenceDriver.emit(this.savePhotoBack);
        this.conveyorService.closeModalArchiveLicenceDriver.emit(false);*/
    }
    closeModalLicence() {
        if (this.photoBack.webviewPath && this.photoFrontal.webviewPath) {
            //this.conveyorService.closeModalArchiveLicenceDriver.emit(false);
            return;
        }
        /*this.conveyorService.closeModalArchiveLicenceDriver.emit(false);
        this.removePhotoFrontal();
        this.removePhotoBack();*/
    }
    openCameraOne() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
                quality: 100
            });
            this.photoFrontal = {
                webviewPath: capturedPhoto.webPath
            };
            this.savePhotoFrontal = yield this.convertPhotoCamera.savePicture(capturedPhoto);
        });
    }
    openCameraTwo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
                quality: 100
            });
            this.photoBack = {
                webviewPath: capturedPhoto.webPath
            };
            this.savePhotoBack = yield this.convertPhotoCamera.savePicture(capturedPhoto);
        });
    }
    removePhotoFrontal() {
        this.photoFrontal.webviewPath = '';
        //this.conveyorService.removePhotoFrontalLicenceDriver.emit();
    }
    removePhotoBack() {
        this.photoBack.webviewPath = '';
        //this.conveyorService.removePhotoBackLicenceDriver.emit();
    }
};
PhotoDrivingLicenceComponent.ctorParameters = () => [
    { type: src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_3__.ConveyorService },
    { type: src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_4__.ConvertPhotoCameraService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
PhotoDrivingLicenceComponent.propDecorators = {
    modalPhotoLinceShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
PhotoDrivingLicenceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-photo-driving-licence',
        template: _photo_driving_licence_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_photo_driving_licence_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhotoDrivingLicenceComponent);



/***/ }),

/***/ 75214:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-driver/register-driver.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterDriverComponent": () => (/* binding */ RegisterDriverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_driver_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-driver.component.html?ngResource */ 59221);
/* harmony import */ var _register_driver_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-driver.component.scss?ngResource */ 84357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var src_app_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/error-messages.service */ 47486);
/* harmony import */ var _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/companies/companies.service */ 46605);
/* harmony import */ var _services_adminLogist_admin_logist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/adminLogist/admin-logist.service */ 59543);



/* eslint-disable @typescript-eslint/member-ordering */






let RegisterDriverComponent = class RegisterDriverComponent {
    constructor(formBuilder, companiesService, errorMessages, adminLogistService) {
        this.formBuilder = formBuilder;
        this.companiesService = companiesService;
        this.errorMessages = errorMessages;
        this.adminLogistService = adminLogistService;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.listCompanies = [];
        this.loadingCompanies = true;
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
        this.alertSucces = false;
        this.formBuilderInput();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.companiesService.getCompanies().subscribe(result => {
                this.listCompanies = result.data;
            });
        });
    }
    cwcChange(event) {
        this.form.get('CompanyId').setValue(`${event.detail.value}`);
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                return;
            }
            this.data = new FormData();
            this.addFormData(this.form.value);
            this.propagar.emit(true);
            yield this.adminLogistService.createDriver(this.data).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                alert(resp);
                /*
                 this.propagar.emit(false);
                 this.alertSucces = true;
                 this.addIdentityCard = false;
                 this.addDocumentCompany = false;
                 this.alertConfirm = false;
                 this.alertSucces = true;
                 this.errors = [];*/
            }), (error) => {
            });
        });
    }
    addFormData(objeto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            for (var key in objeto) {
                this.data.append(key, objeto[key]);
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
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
            CompanyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            Roles: ['Conductor', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            Document: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            SapCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            PhoneNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]*$')
                ]]
        });
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(350))
            .subscribe(data => {
            console.log(data);
            this.validateInput();
        });
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
RegisterDriverComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_3__.CompaniesService },
    { type: src_app_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__.ErrorMessagesService },
    { type: _services_adminLogist_admin_logist_service__WEBPACK_IMPORTED_MODULE_4__.AdminLogistService }
];
RegisterDriverComponent.propDecorators = {
    typeConveyor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    propagar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
RegisterDriverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register-driver',
        template: _register_driver_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_driver_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterDriverComponent);



/***/ }),

/***/ 27632:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-driver/security-card/security-card.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityCardComponent": () => (/* binding */ SecurityCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _security_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security-card.component.html?ngResource */ 24691);
/* harmony import */ var _security_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security-card.component.scss?ngResource */ 35931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/convert-photo-camera/convert-photo-camera.service */ 25640);
/* harmony import */ var src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/conveyor/conveyor.service */ 88001);







let SecurityCardComponent = class SecurityCardComponent {
    constructor(conveyorService, convertPhotoCamera) {
        this.conveyorService = conveyorService;
        this.convertPhotoCamera = convertPhotoCamera;
        this.photoFrontal = {
            webviewPath: ''
        };
    }
    ngOnInit() {
        /*
        this.conveyorService.removeModalSecurityCard.subscribe(resp =>{
          this.photoFrontal.webviewPath = '';
        });
        */
    }
    addPhotoDocumentCompany() {
        //this.conveyorService.addPhotoSecurityCard.emit();
        //this.conveyorService.frontalArchiveSecurityCard.emit(this.savePhotoFrontal);
        //this.conveyorService.closeModalArchiveSecurityCard.emit(false);
    }
    openCameraOne() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
                quality: 100
            });
            this.photoFrontal = {
                webviewPath: capturedPhoto.webPath
            };
            this.savePhotoFrontal = yield this.convertPhotoCamera.savePicture(capturedPhoto);
        });
    }
    closeModalSecurityCard() {
        if (this.photoFrontal.webviewPath) {
            //this.conveyorService.closeModalArchiveSecurityCard.emit(false);
            return;
        }
        //this.conveyorService.closeModalArchiveSecurityCard.emit(false);
        this.removePhotoFrontal();
    }
    removePhotoFrontal() {
        this.photoFrontal.webviewPath = '';
        //this.conveyorService.removePhotoFrontalSecurityCard.emit();
    }
};
SecurityCardComponent.ctorParameters = () => [
    { type: src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_4__.ConveyorService },
    { type: src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__.ConvertPhotoCameraService }
];
SecurityCardComponent.propDecorators = {
    modalPhotoSecurityCardShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
SecurityCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-security-card',
        template: _security_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_security_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SecurityCardComponent);



/***/ }),

/***/ 58172:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-mantruck/register-mantruck.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterMantruckComponent": () => (/* binding */ RegisterMantruckComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_mantruck_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-mantruck.component.html?ngResource */ 6734);
/* harmony import */ var _register_mantruck_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-mantruck.component.scss?ngResource */ 84753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var src_app_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/error-messages.service */ 47486);
/* harmony import */ var _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/companies/companies.service */ 46605);
/* harmony import */ var _services_adminLogist_admin_logist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/adminLogist/admin-logist.service */ 59543);









let RegisterMantruckComponent = class RegisterMantruckComponent {
    constructor(formBuilder, companiesService, errorMessages, adminLogistService) {
        this.formBuilder = formBuilder;
        this.companiesService = companiesService;
        this.errorMessages = errorMessages;
        this.adminLogistService = adminLogistService;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
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
        this.formBuilderInput();
        this.companiesService.getCompanies().subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.listCompanies = data.data;
        }));
    }
    ngOnInit() {
        this.alertSucces = false;
        console.log('holaa');
    }
    cwcChange(event) {
        this.form.get('CompanyId').setValue(`${event.detail.value}`);
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                return;
            }
            this.data = new FormData();
            this.addFormData(this.form.value);
            this.propagar.emit(true);
            yield this.adminLogistService.createAdminLogistThird(this.data).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            for (var key in objeto) {
                this.data.append(key, objeto[key]);
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
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
            CompanyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            Roles: ['Hombre Camion', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,]],
            PhoneNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]*$')
                ]]
        });
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(350))
            .subscribe(data => {
            console.log(data);
            this.validateInput();
        });
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
RegisterMantruckComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_3__.CompaniesService },
    { type: src_app_services_error_messages_service__WEBPACK_IMPORTED_MODULE_2__.ErrorMessagesService },
    { type: _services_adminLogist_admin_logist_service__WEBPACK_IMPORTED_MODULE_4__.AdminLogistService }
];
RegisterMantruckComponent.propDecorators = {
    typeConveyor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    propagar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
RegisterMantruckComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register-mantruck',
        template: _register_mantruck_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_mantruck_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterMantruckComponent);



/***/ }),

/***/ 81557:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 66690);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 60207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 81557);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 66690);
/* harmony import */ var _components_archives_register_archives_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/archives-register/archives-register.component */ 43104);
/* harmony import */ var _components_register_mantruck_register_mantruck_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register-mantruck/register-mantruck.component */ 58172);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _components_register_admin_logist_third_register_admin_logist_third_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register-admin-logist-third/register-admin-logist-third.component */ 27109);
/* harmony import */ var _components_register_driver_register_driver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register-driver/register-driver.component */ 75214);
/* harmony import */ var _components_register_driver_photo_driving_licence_photo_driving_licence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register-driver/photo-driving-licence/photo-driving-licence.component */ 21063);
/* harmony import */ var _components_photo_indentity_card_photo_indentity_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/photo-indentity-card/photo-indentity-card.component */ 73031);
/* harmony import */ var _components_document_company_document_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/document-company/document-company.component */ 86271);
/* harmony import */ var _components_register_driver_security_card_security_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register-driver/security-card/security-card.component */ 27632);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);

















let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_11__.CmxWebComponentsModule.forRoot(),
        ],
        declarations: [
            _register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage,
            _components_register_driver_photo_driving_licence_photo_driving_licence_component__WEBPACK_IMPORTED_MODULE_7__.PhotoDrivingLicenceComponent,
            _components_photo_indentity_card_photo_indentity_card_component__WEBPACK_IMPORTED_MODULE_8__.PhotoIndentityCardComponent,
            _components_register_driver_security_card_security_card_component__WEBPACK_IMPORTED_MODULE_10__.SecurityCardComponent,
            _components_document_company_document_company_component__WEBPACK_IMPORTED_MODULE_9__.DocumentCompanyComponent,
            _components_register_driver_register_driver_component__WEBPACK_IMPORTED_MODULE_6__.RegisterDriverComponent,
            _components_register_mantruck_register_mantruck_component__WEBPACK_IMPORTED_MODULE_3__.RegisterMantruckComponent,
            _components_archives_register_archives_register_component__WEBPACK_IMPORTED_MODULE_2__.ArchivesRegisterComponent,
            _components_register_admin_logist_third_register_admin_logist_third_component__WEBPACK_IMPORTED_MODULE_5__.RegisterAdminLogistThirdComponent,
        ]
    })
], RegisterPageModule);



/***/ }),

/***/ 66690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 46325);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 47863);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/login.service */ 52876);






let RegisterPage = class RegisterPage {
    constructor(loginService, location) {
        this.loginService = loginService;
        this.location = location;
        this.typeConveyors = [];
        this.showFormDriver = false;
        this.showFormManTruck = false;
        this.showFormAdminLogist = false;
        this.loading = false;
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        //this.cwcChange(this.loginService.rol);
    }
    cwcChange(data) {
        if (data.detail.value === '1') {
            this.loading = true;
            this.showFormManTruck = false;
            this.showFormDriver = false;
            this.showFormAdminLogist = true;
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        }
        else if (data.detail.value === '2') {
            this.loading = true;
            this.showFormAdminLogist = false;
            this.showFormDriver = false;
            this.showFormManTruck = true;
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        }
        else if (data.detail.value === '3') {
            this.loading = true;
            this.showFormManTruck = false;
            this.showFormAdminLogist = false;
            this.showFormDriver = true;
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        }
    }
    showLoading(value) {
        this.loading = value;
    }
    onBack() {
        this.location.back();
    }
};
RegisterPage.ctorParameters = () => [
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location }
];
RegisterPage.propDecorators = {
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



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

/***/ 88001:
/*!*******************************************************!*\
  !*** ./src/app/services/conveyor/conveyor.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConveyorService": () => (/* binding */ ConveyorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ 3755);




const URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.url;
let ConveyorService = class ConveyorService {
    constructor(http) {
        this.http = http;
    }
    registerManTruck(createManTruck) {
        const formData = this.formDataDriver(createManTruck);
        return this.http.doPostFormData(`${URL}/api/conveyor/register-mantruck`, formData, {});
    }
    registerAdminLogistThird(createLogistThird) {
        const formData = this.formDataAdminLogistThird(createLogistThird);
        return this.http.doPostFormData(`${URL}/api/conveyor/register-admin-logist-third`, formData, {});
    }
    registerDriver(createDriver) {
        const formData = this.formDataDriver(createDriver);
        return this.http.doPostFormData(`${URL}/api/driver/register`, formData, {});
    }
    getConveyors() {
        return this.http.doGet(`${URL}/api/conveyor/list-conveyors`, {});
    }
    formDataAdminLogistThird(createLogistThird) {
        const photoIdentityCardFrontal = createLogistThird.documentIdentityCardFrontal;
        const photoIdentityCardBack = createLogistThird.documentIdentityCardBack;
        const photoDocumentCompany = createLogistThird.documentCompany;
        const formData = new FormData();
        formData.append('firstName', createLogistThird.firstName);
        formData.append('lastName', createLogistThird.lastName);
        formData.append('document', createLogistThird.document);
        formData.append('Email', createLogistThird.email);
        formData.append('phoneNumber', createLogistThird.phoneNumber);
        formData.append('role', createLogistThird.role);
        formData.append('nameCompany', createLogistThird.nameCompany);
        formData.append('nitCompany', createLogistThird.nitCompany.toString());
        formData.append('typeConveyorId', createLogistThird.typeConveyorId.toString());
        if (photoIdentityCardFrontal && photoIdentityCardBack) {
            formData.append('documentIdentityCardFrontal', photoIdentityCardFrontal.bob, photoIdentityCardFrontal.filepath);
            formData.append('documentIdentityCardBack', photoIdentityCardBack.bob, photoIdentityCardBack.filepath);
        }
        if (photoDocumentCompany) {
            formData.append('documentCompany', photoDocumentCompany.bob, photoDocumentCompany.filepath);
        }
        return formData;
    }
    formDataDriver(createDriver) {
        const photoLicenceFrontal = createDriver.documentDrivinglicenseFrontal;
        const photoLicenceBack = createDriver.documentDrivinglicenseBack;
        const photoIdentityCardFrontal = createDriver.documentIdentityCardFrontal;
        const photoIdentityCardBack = createDriver.documentIdentityCardBack;
        const photoSecurityCard = createDriver.documentSecurityCard;
        const formData = new FormData();
        formData.append('firstName', createDriver.firstName);
        formData.append('lastName', createDriver.lastName);
        formData.append('document', createDriver.document);
        formData.append('Email', createDriver.email);
        formData.append('phoneNumber', createDriver.phoneNumber);
        formData.append('role', createDriver.role);
        formData.append('codeSap', createDriver.codeSap);
        if (createDriver.typeConveyorId === '3') {
            formData.append('conveyorId', createDriver.conveyorId.toString());
        }
        formData.append('typeConveyorId', createDriver.typeConveyorId.toString());
        if (photoLicenceFrontal && photoLicenceBack) {
            formData.append('documentDrivinglicenseFrontal', photoLicenceFrontal.bob, photoLicenceFrontal.filepath);
            formData.append('documentDrivinglicenseBack', photoLicenceBack.bob, photoLicenceBack.filepath);
        }
        if (photoIdentityCardFrontal && photoIdentityCardBack) {
            formData.append('documentIdentityCardFrontal', photoIdentityCardFrontal.bob, photoIdentityCardFrontal.filepath);
            formData.append('documentIdentityCardBack', photoIdentityCardBack.bob, photoIdentityCardBack.filepath);
        }
        if (photoSecurityCard) {
            formData.append('documentSecurityCard', photoSecurityCard.bob, photoSecurityCard.filepath);
        }
        return formData;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    startUpload(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch(file.data);
            return yield response.blob();
        });
    }
};
ConveyorService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService }
];
ConveyorService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ConveyorService);



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

/***/ 95984:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/register/components/archives-register/archives-register.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = ".section {\n  margin-bottom: 0.5rem;\n}\n\n.item-archives {\n  display: flex;\n  align-items: center;\n}\n\n.item-archives h5 {\n  margin-top: 6px;\n}\n\n.text-archive {\n  margin-left: 0.5rem;\n  color: #3FA9F5;\n}\n\n.content-archive {\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.content-archive .border {\n  border-right: 1.5px solid #3FA9F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyY2hpdmVzLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSxpQ0FBQTtBQU1KIiwiZmlsZSI6ImFyY2hpdmVzLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb257XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuLml0ZW0tYXJjaGl2ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaXRlbS1hcmNoaXZlcyBoNXtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4udGV4dC1hcmNoaXZle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIGNvbG9yOiAjM0ZBOUY1O1xyXG59XHJcbi5jb250ZW50LWFyY2hpdmV7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG4uY29udGVudC1hcmNoaXZlIC5ib3JkZXJ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICMzRkE5RjU7O1xyXG59Il19 */";

/***/ }),

/***/ 74497:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/register/components/document-company/document-company.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC1jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 28529:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/register/components/photo-indentity-card/photo-indentity-card.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = ".remove-photo-archive {\n  display: flex;\n  justify-content: center;\n  margin-top: 1vh;\n}\n\n.cwc-modal__close-button {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLWluZGVudGl0eS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtBQUVKIiwiZmlsZSI6InBob3RvLWluZGVudGl0eS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlbW92ZS1waG90by1hcmNoaXZle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXZoO1xyXG59XHJcbi5jd2MtbW9kYWxfX2Nsb3NlLWJ1dHRvbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */";

/***/ }),

/***/ 35831:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-admin-logist-third/register-admin-logist-third.component.scss?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1hZG1pbi1sb2dpc3QtdGhpcmQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 18109:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-driver/photo-driving-licence/photo-driving-licence.component.scss?ngResource ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".remove-photo-archive {\n  display: flex;\n  justify-content: center;\n  margin-top: 1vh;\n}\n\n.cwc-modal__close-button {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLWRyaXZpbmctbGljZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7QUFFSiIsImZpbGUiOiJwaG90by1kcml2aW5nLWxpY2VuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVtb3ZlLXBob3RvLWFyY2hpdmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbn1cclxuLmN3Yy1tb2RhbF9fY2xvc2UtYnV0dG9ue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */";

/***/ }),

/***/ 84357:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-driver/register-driver.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1kcml2ZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 35931:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-driver/security-card/security-card.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN1cml0eS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 84753:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-mantruck/register-mantruck.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1tYW50cnVjay5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 47863:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".header-text {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  top: 1;\n  right: 50;\n  left: 0;\n  margin-left: 1rem;\n}\n\n.attr-name {\n  font-weight: 700;\n}\n\n.content-card {\n  padding-top: 0.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n.content-title {\n  padding-top: 1rem;\n  font-weight: 700;\n  color: #002a59;\n}\n\n.content-grid-register {\n  overflow: auto;\n  justify-content: center !important;\n}\n\n.content-title-register {\n  margin-bottom: 2rem;\n}\n\n.content-title-register h2 {\n  color: #002a59;\n}\n\n.section {\n  margin-bottom: 1rem;\n}\n\n.section cwc-radio {\n  margin-bottom: 0.2rem;\n}\n\n.content-button {\n  margin-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUM7RUFDRyxnQkFBQTtBQUNKOztBQUVDO0VBQ0csbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVDO0VBQ0csaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUVJLGNBQUE7RUFDQSxrQ0FBQTtBQUFKOztBQUdDO0VBQ0csbUJBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQUk7RUFDSSxxQkFBQTtBQUVSOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRleHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDE7XHJcbiAgICByaWdodDogNTA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiB9XHJcbiBcclxuIC5hdHRyLW5hbWV7XHJcbiAgICBmb250LXdlaWdodDogNzAwOyAgICBcclxuIH1cclxuXHJcbiAuY29udGVudC1jYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtOyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuIH1cclxuXHJcbiAuY29udGVudC10aXRsZXtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMDAyYTU5O1xyXG59XHJcblxyXG4uY29udGVudC1ncmlkLXJlZ2lzdGVye1xyXG4gICAgLy8gZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmNvbnRlbnQtdGl0bGUtcmVnaXN0ZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi5jb250ZW50LXRpdGxlLXJlZ2lzdGVyIGgye1xyXG4gICAgY29sb3I6ICMwMDJhNTk7XHJcbiAgICAvLyBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5zZWN0aW9ue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGN3Yy1yYWRpb3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgICB9XHJcbn1cclxuLmNvbnRlbnQtYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 94729:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/register/components/archives-register/archives-register.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<label for=\"\">Licencia de conducir (opcional)</label>\r\n      <cwc-grid class=\"demo-grid content-archive\" >\r\n        <cwc-cell class=\"border\" colspan=\"6\" mobile-colspan=\"6\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n          </div>\r\n        </cwc-cell>\r\n        <cwc-cell colspan=\"6\" mobile-colspan=\"6\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n          </div>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n    <label for=\"\">Carné de seguridad industrial y vial (opcional)</label>\r\n      <cwc-grid class=\"demo-grid content-archive\" >\r\n        <cwc-cell class=\"border\" colspan=\"6\" mobile-colspan=\"6\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n          </div>\r\n        </cwc-cell>\r\n        <cwc-cell colspan=\"6\" mobile-colspan=\"6\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n          </div>\r\n        </cwc-cell>\r\n    </cwc-grid>\r\n\r\n    <label for=\"\">Cédula de ciudadania (opcional)</label>\r\n      <cwc-grid class=\"demo-grid content-archive\" >\r\n        <cwc-cell class=\"border\" colspan=\"6\" mobile-colspan=\"6\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n          </div>\r\n        </cwc-cell>\r\n        <cwc-cell colspan=\"6\" mobile-colspan=\"6\">\r\n          <div class=\"item-archives\">\r\n            <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n            <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n          </div>\r\n        </cwc-cell>\r\n    </cwc-grid>\r\n";

/***/ }),

/***/ 80467:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/register/components/document-company/document-company.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-modal id='modal-photo-licence-driver' [open] =\"modalPhotoDocumentCompanyShow\" class=\"modal-cemex\" (cwcClose)=\"closeModalDocumentCompany()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Agregar documento de la empresa (Opcional)</h2>\r\n  </header>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\" style=\"margin-bottom: 2rem\">\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">Tomar foto del documento</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraOne()\" style=\"margin-bottom: 0.5rem;\">\r\n\r\n          <ion-img class=\"img-photo-register\" *ngIf=\"photoFrontal.webviewPath\" [src]=\"photoFrontal.webviewPath\" style=\"object-fit: cover;\r\n          max-height: 175px !important;\"></ion-img>\r\n\r\n          <cwc-icon *ngIf=\"!photoFrontal.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n          <p *ngIf=\"!photoFrontal.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n      </div>\r\n      <div class=\"center-remove-photo-archive\">\r\n        <cwc-button (click)=\"removePhotoFrontal()\" *ngIf=\"photoFrontal.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n      </div>\r\n    </cwc-cell>\r\n    <!-- <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">2. Parte trasera de la cédula</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraTwo()\">\r\n\r\n        <ion-img class=\"img-photo-register\" *ngIf=\"photoBack.webviewPath\" [src]=\"photoBack.webviewPath\" style=\"object-fit: cover;\r\n        max-height: 175px !important;\"></ion-img>\r\n\r\n        <cwc-icon *ngIf=\"!photoBack.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n        <p *ngIf=\"!photoBack.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n    </div>\r\n    <cwc-button (click)=\"removePhotoBack()\" *ngIf=\"photoBack.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n    </cwc-cell> -->\r\n  </cwc-grid>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeModalDocumentCompany()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button *ngIf=\"photoFrontal.webviewPath\" variant='primary' (click)=\"addPhotoDocumentCompany()\">Aceptar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n\r\n";

/***/ }),

/***/ 43791:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/register/components/photo-indentity-card/photo-indentity-card.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-modal id='modal-photo-licence-driver' [open] =\"modalPhotoIdentityCardShow\" class=\"modal-cemex\" (cwcClose)=\"closeModalIdentityCard()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Agregar cédula de ciudadanía (Opcional)</h2>\r\n  </header>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\" style=\"margin-bottom: 2rem\">\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">1. Parte frontal de la cédula</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraOne()\">\r\n\r\n          <ion-img class=\"img-photo-register\" *ngIf=\"photoFrontal.webviewPath\" [src]=\"photoFrontal.webviewPath\" style=\"object-fit: cover;\r\n          max-height: 175px !important;\"></ion-img>\r\n\r\n          <cwc-icon *ngIf=\"!photoFrontal.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n          <p *ngIf=\"!photoFrontal.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n      </div>\r\n      <cwc-button (click)=\"removePhotoFrontal()\" *ngIf=\"photoFrontal.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">2. Parte trasera de la cédula</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraTwo()\">\r\n\r\n        <ion-img class=\"img-photo-register\" *ngIf=\"photoBack.webviewPath\" [src]=\"photoBack.webviewPath\" style=\"object-fit: cover;\r\n        max-height: 175px !important;\"></ion-img>\r\n\r\n        <cwc-icon *ngIf=\"!photoBack.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n        <p *ngIf=\"!photoBack.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n    </div>\r\n    <cwc-button (click)=\"removePhotoBack()\" *ngIf=\"photoBack.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeModalIdentityCard()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button *ngIf=\"photoBack.webviewPath && photoFrontal.webviewPath\" variant='primary' (click)=\"addIdentityCard()\">Aceptar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n";

/***/ }),

/***/ 19256:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-admin-logist-third/register-admin-logist-third.component.html?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<form (submit)=\"register()\" [formGroup]=\"form\">\r\n  <div style=\"display: flex;\">\r\n    <label for=\"\" style=\"font-size: 0.9rem; margin-bottom: 0.7rem;\">Selecciona la empresa\r\n      <cwc-tooltip content='Busca y selecciona la empresa o microempresa'>\r\n        <cwc-icon style=\"margin-left: 0.5rem;\" id='icon' name='information-rounded-fill' color=\"bright-blue\" size='24px'></cwc-icon>\r\n      </cwc-tooltip>\r\n    </label>\r\n  </div>\r\n    <cwc-select\r\n    [status]='statusInputConveyor'\r\n    design-version=\"v2\"\r\n    [statusMessage]='statusInputMessageConveyor' (cwcChange)=\"cwcChange($event)\" class=\"w-full select-filter\" unwrap=\"true\" label=\"\" filter-no-resultsMessage=\"No se encontraron resultados\" filter-placeholder=\"Filtrar Empresas\" placeholder=\"Seleccionar\" filter>\r\n      <cwc-select-option *ngFor=\"let companies of listCompanies\" [value]=\"companies.id\">{{companies.companyName}}</cwc-select-option>\r\n    </cwc-select>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 3rem;\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n                   label='Nombre (s)'\r\n                   [status]='statusInputName'\r\n                   [statusMessage]='statusInputMessageName'\r\n                   design-version=\"v2\" \r\n                   formControlName=\"FirstName\"\r\n                   ngDefaultControl\r\n                   required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n                   label='Apellido (s)'\r\n                   [status]='statusInputLastName'\r\n                   [statusMessage]='statusInputMessageLastName'\r\n                   formControlName=\"LastName\"\r\n                   design-version=\"v2\" \r\n                   ngDefaultControl\r\n                   required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Correo electrónico'\r\n        [status]='statusInputEmail'\r\n        [statusMessage]='statusInputMessageEmail'\r\n        formControlName=\"Email\"\r\n        ngDefaultControl\r\n        design-version=\"v2\" \r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Número de celular'\r\n        type=\"number\"\r\n        [status]='statusInputPhone'\r\n        [statusMessage]='statusInputMessagePhone'\r\n        formControlName=\"PhoneNumber\"\r\n        design-version=\"v2\"\r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Contraseña'\r\n        [status]='statusInputNit'\r\n        [statusMessage]='statusInputMessageNit'\r\n        type=\"password\"\r\n        formControlName=\"Password\"\r\n        design-version=\"v2\" \r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n   <!--=====================================\r\n      DOCUMENTO DE LA EMPRESA\r\n    ======================================-->\r\n    <label for=\"\">Licencia de conducir (opcional)</label>\r\n<div>\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoDocumentCompany()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n</cwc-grid>\r\n</div>\r\n  <div *ngIf=\"addDocumentCompany\">\r\n    <cwc-grid class=\"demo-grid content-archive\" >\r\n      <cwc-cell (click)=\"openModalPhotoDocumentCompany()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Documento agregado</h5>\r\n          <cwc-icon (click)=\"removeDocumentCompany()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n        </div>\r\n      </cwc-cell>\r\n    </cwc-grid>\r\n  </div>\r\n   <!--=====================================\r\n      CEDULA DE CIUDADANIA\r\n    ======================================-->\r\n<label for=\"\">Tarjeta de seguridad (opcional)</label>\r\n<div>\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n</cwc-grid>\r\n</div>\r\n  <div *ngIf=\"addIdentityCard\">\r\n    <cwc-grid class=\"demo-grid content-archive\" >\r\n      <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Cédula de Ciudadanía agregada </h5>\r\n          <cwc-icon (click)=\"removeIdentityCard()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n        </div>\r\n      </cwc-cell>\r\n    </cwc-grid>\r\n  </div>\r\n\r\n<label for=\"\">Cédula de ciudadanía (opcional)</label>\r\n<div>\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n</cwc-grid>\r\n</div>\r\n  <div *ngIf=\"addIdentityCard\">\r\n    <cwc-grid class=\"demo-grid content-archive\" >\r\n      <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Cédula de Ciudadanía agregada </h5>\r\n          <cwc-icon (click)=\"removeIdentityCard()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n        </div>\r\n      </cwc-cell>\r\n    </cwc-grid>\r\n  </div>\r\n    \r\n    <app-error-messages [errors]=\"errors\"></app-error-messages> \r\n  <!--=====================================\r\n    BOTON PARA GUARDAR EL REGISTRO\r\n  ======================================-->\r\n    <div class=\"content-button\">\r\n      <cwc-button \r\n      design-version=\"v1\" \r\n      [disabled]=\"form.invalid\"\r\n      (click)=\"openAlertConfirm()\" \r\n      variant=\"regular-block\">COMPLETAR REGISTRO</cwc-button>\r\n    </div>\r\n</form>\r\n\r\n<app-photo-indentity-card\r\n[modalPhotoIdentityCardShow] = \"openPhotoIdentityCard\"\r\n></app-photo-indentity-card>\r\n<app-document-company\r\n[modalPhotoDocumentCompanyShow] = \"openPhotoDocumentCompany\"\r\n></app-document-company>\r\n<!--=====================================\r\n\t\tMODAL ALERTA CONFIRMAR DATOS GUARDAR\r\n======================================-->\r\n<cwc-modal id='alert-confirm' class=\"alert-confirm\" [open] =\"alertConfirm\" (cwcClose)=\"closeAlertConfirm()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Atención</h2>\r\n  </header>\r\n  <p>¿Esta seguro que los datos registrados estan correctos?</p>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeAlertConfirm()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button variant='primary' (click)=\"register()\" >Aceptar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n<!--=====================================\r\n\t\tMODAL CONFIRMACIÓN RESPUESTA DE EXITO\r\n======================================-->\r\n<app-alert-success\r\n[alertShow] = \"alertSucces\"\r\ntitle = \"Existoso\"\r\nurlButton = \"/login\"\r\ntextButton = \"Volver al login\"\r\nmessage = \"El registro se realizó correctamente, vamos a validar sus datos y pronto daremos respuesta.\">\r\n</app-alert-success>\r\n<!--=====================================\r\n\tTOAST ALERT MENSAJE\r\n======================================-->\r\n<cwc-snackbar id='toast-message-driver' [message]=\"toastMessage\"\r\ncta-message=\"dismiss\" auto-hide-duration='5000'></cwc-snackbar>";

/***/ }),

/***/ 1472:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-driver/photo-driving-licence/photo-driving-licence.component.html?ngResource ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-modal id='modal-photo-licence-driver' [open] =\"modalPhotoLinceShow\" class=\"modal-cemex\" (cwcClose)=\"closeModalLicence()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Agregar Licencia de Conducción (Opcional)</h2>\r\n  </header>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\" style=\"margin-bottom: 2rem\">\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">1. Parte frontal de la licencia de conducción</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraOne()\">\r\n\r\n          <ion-img class=\"img-photo-register\" *ngIf=\"photoFrontal.webviewPath\" [src]=\"photoFrontal.webviewPath\" style=\"object-fit: cover;\r\n          max-height: 175px !important;\"></ion-img>\r\n\r\n          <cwc-icon *ngIf=\"!photoFrontal.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n          <p *ngIf=\"!photoFrontal.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n      </div>\r\n      <cwc-button (click)=\"removePhotoFrontal()\" *ngIf=\"photoFrontal.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">2. Parte trasera de la licencia de conducción</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraTwo()\">\r\n\r\n        <ion-img class=\"img-photo-register\" *ngIf=\"photoBack.webviewPath\" [src]=\"photoBack.webviewPath\" style=\"object-fit: cover;\r\n        max-height: 175px !important;\"></ion-img>\r\n\r\n        <cwc-icon *ngIf=\"!photoBack.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n        <p *ngIf=\"!photoBack.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n    </div>\r\n    <cwc-button (click)=\"removePhotoBack()\" *ngIf=\"photoBack.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeModalLicence()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button *ngIf=\"photoBack.webviewPath && photoFrontal.webviewPath\" variant='primary' (click)=\"addLicence()\">Aceptar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>";

/***/ }),

/***/ 59221:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-driver/register-driver.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<form (submit)=\"register()\" [formGroup]=\"form\">\r\n  <div style=\"display: flex;\">\r\n    <label for=\"\" style=\"font-size: 0.9rem; margin-bottom: 0.7rem;\">Selecciona la empresa\r\n      <cwc-tooltip content='Busca y selecciona la empresa o microempresa'>\r\n        <cwc-icon style=\"margin-left: 0.5rem;\" id='icon' name='information-rounded-fill' color=\"bright-blue\" size='24px'></cwc-icon>\r\n      </cwc-tooltip>\r\n    </label>\r\n  </div>\r\n    <cwc-select\r\n      (cwcChange)=\"cwcChange($event)\" \r\n      class=\"w-full select-filter\"\r\n      filter-no-resultsMessage=\"No se encontraron resultados\" \r\n      filter-placeholder=\"Filtrar Empresas\" \r\n      placeholder=\"Seleccionar\"\r\n      design-version=\"v2\"\r\n      filter>\r\n      <ng-container *ngFor=\"let companies of listCompanies\">\r\n        <cwc-select-option [value]=\"companies.id\">{{companies.companyName}}</cwc-select-option>\r\n      </ng-container>\r\n    </cwc-select>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 1.5rem;\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n                   label='Nombre (s)'\r\n                   [status]='statusInputName'\r\n                   [statusMessage]='statusInputMessageName'\r\n                   design-version=\"v2\" \r\n                   formControlName=\"FirstName\"\r\n                   ngDefaultControl\r\n                   required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n                   label='Apellido (s)'\r\n                   [status]='statusInputLastName'\r\n                   [statusMessage]='statusInputMessageLastName'\r\n                   formControlName=\"LastName\"\r\n                   design-version=\"v2\" \r\n                   ngDefaultControl\r\n                   required\r\n        ></cwc-input>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='N° documento'\r\n        formControlName=\"Document\"\r\n        design-version=\"v2\" \r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Código SAP'\r\n        formControlName=\"SapCode\"\r\n        design-version=\"v2\"\r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Correo electrónico'\r\n        [status]='statusInputEmail'\r\n        [statusMessage]='statusInputMessageEmail'\r\n        formControlName=\"Email\"\r\n        ngDefaultControl\r\n        design-version=\"v2\" \r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Número de celular'\r\n        type=\"number\"\r\n        [status]='statusInputPhone'\r\n        [statusMessage]='statusInputMessagePhone'\r\n        formControlName=\"PhoneNumber\"\r\n        design-version=\"v2\"\r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Contraseña'\r\n        [status]='statusInputNit'\r\n        [statusMessage]='statusInputMessageNit'\r\n        type=\"password\"\r\n        formControlName=\"Password\"\r\n        design-version=\"v2\" \r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n   <!--=====================================\r\n      DOCUMENTO DE LA EMPRESA\r\n    ======================================-->\r\n    <label for=\"\">Licencia de conducir (opcional)</label>\r\n<div>\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoDocumentCompany()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n</cwc-grid>\r\n</div>\r\n  <div *ngIf=\"addDocumentCompany\">\r\n    <cwc-grid class=\"demo-grid content-archive\" >\r\n      <cwc-cell (click)=\"openModalPhotoDocumentCompany()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Documento agregado</h5>\r\n          <cwc-icon (click)=\"removeDocumentCompany()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n        </div>\r\n      </cwc-cell>\r\n    </cwc-grid>\r\n  </div>\r\n   <!--=====================================\r\n      CEDULA DE CIUDADANIA\r\n    ======================================-->\r\n<label for=\"\">Tarjeta de seguridad (opcional)</label>\r\n<div>\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n</cwc-grid>\r\n</div>\r\n  <div *ngIf=\"addIdentityCard\">\r\n    <cwc-grid class=\"demo-grid content-archive\" >\r\n      <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Cédula de Ciudadanía agregada </h5>\r\n          <cwc-icon (click)=\"removeIdentityCard()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n        </div>\r\n      </cwc-cell>\r\n    </cwc-grid>\r\n  </div>\r\n\r\n<label for=\"\">Cédula de ciudadanía (opcional)</label>\r\n<div>\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n</cwc-grid>\r\n</div>\r\n  <div *ngIf=\"addIdentityCard\">\r\n    <cwc-grid class=\"demo-grid content-archive\" >\r\n      <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Cédula de Ciudadanía agregada </h5>\r\n          <cwc-icon (click)=\"removeIdentityCard()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n        </div>\r\n      </cwc-cell>\r\n    </cwc-grid>\r\n  </div>\r\n    \r\n    <app-error-messages [errors]=\"errors\"></app-error-messages> \r\n  <!--=====================================\r\n    BOTON PARA GUARDAR EL REGISTRO\r\n  ======================================-->\r\n    <div class=\"content-button\">\r\n      <cwc-button \r\n      design-version=\"v1\" \r\n      [disabled]=\"form.invalid\"\r\n      (click)=\"openAlertConfirm()\" \r\n      variant=\"regular-block\">COMPLETAR REGISTRO</cwc-button>\r\n    </div>\r\n</form>\r\n\r\n<app-photo-indentity-card\r\n[modalPhotoIdentityCardShow] = \"openPhotoIdentityCard\"\r\n></app-photo-indentity-card>\r\n<app-document-company\r\n[modalPhotoDocumentCompanyShow] = \"openPhotoDocumentCompany\"\r\n></app-document-company>\r\n<!--=====================================\r\n\t\tMODAL ALERTA CONFIRMAR DATOS GUARDAR\r\n======================================-->\r\n<cwc-modal id='alert-confirm' class=\"alert-confirm\" [open] =\"alertConfirm\" (cwcClose)=\"closeAlertConfirm()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Atención</h2>\r\n  </header>\r\n  <p>¿Esta seguro que los datos registrados estan correctos?</p>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeAlertConfirm()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button variant='primary' (click)=\"register()\" >Aceptar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n<!--=====================================\r\n\t\tMODAL CONFIRMACIÓN RESPUESTA DE EXITO\r\n======================================-->\r\n<app-alert-success\r\n[alertShow] = \"alertSucces\"\r\ntitle = \"Existoso\"\r\nurlButton = \"/login\"\r\ntextButton = \"Volver al login\"\r\nmessage = \"El registro se realizó correctamente, vamos a validar sus datos y pronto daremos respuesta.\">\r\n</app-alert-success>\r\n<!--=====================================\r\n\tTOAST ALERT MENSAJE\r\n======================================-->\r\n<cwc-snackbar id='toast-message-driver' [message]=\"toastMessage\"\r\ncta-message=\"dismiss\" auto-hide-duration='5000'></cwc-snackbar>";

/***/ }),

/***/ 24691:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-driver/security-card/security-card.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-modal id='modal-photo-licence-driver' [open] =\"modalPhotoSecurityCardShow\" class=\"modal-cemex\" (cwcClose)=\"closeModalSecurityCard()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Agregar carné de seguridad (Opcional)</h2>\r\n  </header>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\" style=\"margin-bottom: 2rem\">\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">Tomar foto del carné</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraOne()\" style=\"margin-bottom: 0.5rem;\">\r\n\r\n          <ion-img class=\"img-photo-register\" *ngIf=\"photoFrontal.webviewPath\" [src]=\"photoFrontal.webviewPath\" style=\"object-fit: cover;\r\n          max-height: 175px !important;\"></ion-img>\r\n\r\n          <cwc-icon *ngIf=\"!photoFrontal.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n          <p *ngIf=\"!photoFrontal.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n      </div>\r\n      <div class=\"center-remove-photo-archive\">\r\n        <cwc-button (click)=\"removePhotoFrontal()\" *ngIf=\"photoFrontal.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n      </div>\r\n    </cwc-cell>\r\n    <!-- <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">2. Parte trasera de la cédula</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraTwo()\">\r\n\r\n        <ion-img class=\"img-photo-register\" *ngIf=\"photoBack.webviewPath\" [src]=\"photoBack.webviewPath\" style=\"object-fit: cover;\r\n        max-height: 175px !important;\"></ion-img>\r\n\r\n        <cwc-icon *ngIf=\"!photoBack.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n        <p *ngIf=\"!photoBack.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n    </div>\r\n    <cwc-button (click)=\"removePhotoBack()\" *ngIf=\"photoBack.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n    </cwc-cell> -->\r\n  </cwc-grid>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeModalSecurityCard()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button *ngIf=\"photoFrontal.webviewPath\" variant='primary' (click)=\"addPhotoDocumentCompany()\">Aceptar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n\r\n";

/***/ }),

/***/ 6734:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/register/components/register-mantruck/register-mantruck.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<form (submit)=\"register()\" [formGroup]=\"form\">\r\n  <div style=\"display: flex;\">\r\n    <label for=\"\" style=\"font-size: 0.9rem; margin-bottom: 0.7rem;\">Selecciona la empresa\r\n      <cwc-tooltip content='Busca y selecciona la empresa o microempresa'>\r\n        <cwc-icon style=\"margin-left: 0.5rem;\" id='icon' name='information-rounded-fill' color=\"bright-blue\" size='24px'></cwc-icon>\r\n      </cwc-tooltip>\r\n    </label>\r\n  </div>\r\n    <cwc-select\r\n    [status]='statusInputConveyor'\r\n    design-version=\"v2\"\r\n    [statusMessage]='statusInputMessageConveyor' (cwcChange)=\"cwcChange($event)\" class=\"w-full select-filter\" unwrap=\"true\" label=\"\" filter-no-resultsMessage=\"No se encontraron resultados\" filter-placeholder=\"Filtrar Empresas\" placeholder=\"Seleccionar\" filter>\r\n      <cwc-select-option *ngFor=\"let companies of listCompanies\" [value]=\"companies.id\">{{companies.companyName}}</cwc-select-option>\r\n    </cwc-select>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 3rem;\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n                   label='Nombre (s)'\r\n                   [status]='statusInputName'\r\n                   [statusMessage]='statusInputMessageName'\r\n                   design-version=\"v2\" \r\n                   formControlName=\"FirstName\"\r\n                   ngDefaultControl\r\n                   required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n                   label='Apellido (s)'\r\n                   [status]='statusInputLastName'\r\n                   [statusMessage]='statusInputMessageLastName'\r\n                   formControlName=\"LastName\"\r\n                   design-version=\"v2\" \r\n                   ngDefaultControl\r\n                   required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Correo electrónico'\r\n        [status]='statusInputEmail'\r\n        [statusMessage]='statusInputMessageEmail'\r\n        formControlName=\"Email\"\r\n        ngDefaultControl\r\n        design-version=\"v2\" \r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Número de celular'\r\n        type=\"number\"\r\n        [status]='statusInputPhone'\r\n        [statusMessage]='statusInputMessagePhone'\r\n        formControlName=\"PhoneNumber\"\r\n        design-version=\"v2\"\r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Contraseña'\r\n        [status]='statusInputNit'\r\n        [statusMessage]='statusInputMessageNit'\r\n        type=\"password\"\r\n        formControlName=\"Password\"\r\n        design-version=\"v2\" \r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n   <!--=====================================\r\n      DOCUMENTO DE LA EMPRESA\r\n    ======================================-->\r\n    <label for=\"\">Licencia de conducir (opcional)</label>\r\n<div>\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoDocumentCompany()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n</cwc-grid>\r\n</div>\r\n  <div *ngIf=\"addDocumentCompany\">\r\n    <cwc-grid class=\"demo-grid content-archive\" >\r\n      <cwc-cell (click)=\"openModalPhotoDocumentCompany()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Documento agregado</h5>\r\n          <cwc-icon (click)=\"removeDocumentCompany()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n        </div>\r\n      </cwc-cell>\r\n    </cwc-grid>\r\n  </div>\r\n   <!--=====================================\r\n      CEDULA DE CIUDADANIA\r\n    ======================================-->\r\n<label for=\"\">Tarjeta de seguridad (opcional)</label>\r\n<div>\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n</cwc-grid>\r\n</div>\r\n  <div *ngIf=\"addIdentityCard\">\r\n    <cwc-grid class=\"demo-grid content-archive\" >\r\n      <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Cédula de Ciudadanía agregada </h5>\r\n          <cwc-icon (click)=\"removeIdentityCard()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n        </div>\r\n      </cwc-cell>\r\n    </cwc-grid>\r\n  </div>\r\n\r\n<label for=\"\">Cédula de ciudadanía (opcional)</label>\r\n<div>\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n</cwc-grid>\r\n</div>\r\n  <div *ngIf=\"addIdentityCard\">\r\n    <cwc-grid class=\"demo-grid content-archive\" >\r\n      <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Cédula de Ciudadanía agregada </h5>\r\n          <cwc-icon (click)=\"removeIdentityCard()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n        </div>\r\n      </cwc-cell>\r\n    </cwc-grid>\r\n  </div>\r\n    \r\n    <app-error-messages [errors]=\"errors\"></app-error-messages> \r\n  <!--=====================================\r\n    BOTON PARA GUARDAR EL REGISTRO\r\n  ======================================-->\r\n    <div class=\"content-button\">\r\n      <cwc-button \r\n      design-version=\"v1\" \r\n      [disabled]=\"form.invalid\"\r\n      (click)=\"openAlertConfirm()\" \r\n      variant=\"regular-block\">COMPLETAR REGISTRO</cwc-button>\r\n    </div>\r\n</form>\r\n\r\n<app-photo-indentity-card\r\n[modalPhotoIdentityCardShow] = \"openPhotoIdentityCard\"\r\n></app-photo-indentity-card>\r\n<app-document-company\r\n[modalPhotoDocumentCompanyShow] = \"openPhotoDocumentCompany\"\r\n></app-document-company>\r\n<!--=====================================\r\n\t\tMODAL ALERTA CONFIRMAR DATOS GUARDAR\r\n======================================-->\r\n<cwc-modal id='alert-confirm' class=\"alert-confirm\" [open] =\"alertConfirm\" (cwcClose)=\"closeAlertConfirm()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Atención</h2>\r\n  </header>\r\n  <p>¿Esta seguro que los datos registrados estan correctos?</p>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeAlertConfirm()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button variant='primary' (click)=\"register()\" >Aceptar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n<!--=====================================\r\n\t\tMODAL CONFIRMACIÓN RESPUESTA DE EXITO\r\n======================================-->\r\n<app-alert-success\r\n[alertShow] = \"alertSucces\"\r\ntitle = \"Existoso\"\r\nurlButton = \"/login\"\r\ntextButton = \"Volver al login\"\r\nmessage = \"El registro se realizó correctamente, vamos a validar sus datos y pronto daremos respuesta.\">\r\n</app-alert-success>\r\n<!--=====================================\r\n\tTOAST ALERT MENSAJE\r\n======================================-->\r\n<cwc-snackbar id='toast-message-driver' [message]=\"toastMessage\"\r\ncta-message=\"dismiss\" auto-hide-duration='5000'></cwc-snackbar>";

/***/ }),

/***/ 46325:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<cwc-header design-version=\"v2\" slot=\"header\" show-Menu-Button=\"false\" show-cemex-logo=\"false\">\r\n  <div class=\"header-text\">\r\n    <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px;\" (click)=\"onBack()\"></ion-icon>\r\n    <div class=\"attr-name\" style=\"padding-left: 1rem;\">Iniciar sesión</div>\r\n  </div>\r\n</cwc-header>\r\n<div slot=\"main\" class=\"content-card\">\r\n  <div class=\"content-title\">\r\n    Crear Nuevo Usuario\r\n  </div>\r\n\r\n  <cwc-picker\r\n    (cwcChange)=\"cwcChange($event)\"\r\n    class=\"select-filter\"\r\n    label=\"Rol\"\r\n    filter-no-resultsMessage=\"No se encontraron resultados\" \r\n    filter-placeholder=\"Filtrar Roles\" \r\n    placeholder=\"Seleccionar\"\r\n    design-version=\"v2\"\r\n    filter>\r\n      <option value=\"1\">Administrador Logistico Tercero</option>\r\n      <option value=\"2\">Hombre Camión</option>\r\n      <option value=\"3\">Conductor</option>\r\n  </cwc-picker>\r\n  <!--=====================================\r\n\t\tFORMULARIO DE REGISTRO HOMBRE CAMIÓN\r\n  ======================================-->\r\n  <div *ngIf=\"showFormManTruck\">\r\n    <app-register-mantruck \r\n    (propagar)=\"showLoading($event)\" \r\n    [typeConveyor]=\"selectTypeConveyor\">\r\n  </app-register-mantruck>\r\n  </div>\r\n  <!--=====================================\r\n\t\tFORMULARIO DE REGISTRO ADMINISTRADOR LOGISTICO TERCERO\r\n  ======================================-->\r\n  <div *ngIf=\"showFormAdminLogist\">\r\n    <app-register-admin-logist-third\r\n    (propagar)=\"showLoading($event)\"\r\n    [typeConveyor]=\"selectTypeConveyor\"\r\n    ></app-register-admin-logist-third>\r\n  </div>\r\n  <!--=====================================\r\n\t\tFORMULARIO DE REGISTRO CONDUCTOR\r\n  ======================================-->\r\n  <div *ngIf=\"showFormDriver\">\r\n    <app-register-driver \r\n    (propagar)=\"showLoading($event)\" \r\n    [typeConveyor]=\"selectTypeConveyor\">\r\n    </app-register-driver>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--=====================================\r\n\t\tLOANDING\r\n======================================-->\r\n<div class=\"loading-content\" *ngIf=\"loading\">\r\n  <cwc-loader>\r\n    <span slot='loading'>Espere un momento...</span>\r\n  </cwc-loader>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map