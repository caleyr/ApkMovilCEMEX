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
        this.conveyorService.removeModalPhotoDocumentCompany.subscribe(resp => {
            this.photoFrontal.webviewPath = '';
        });
    }
    addPhotoDocumentCompany() {
        this.conveyorService.addPhotoDocumentCompany.emit();
        this.conveyorService.frontalArchiveDocumentCompany.emit(this.savePhotoFrontal);
        this.conveyorService.closeModalArchiveDocumentCompany.emit(false);
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
            this.conveyorService.closeModalArchiveDocumentCompany.emit(false);
            return;
        }
        this.conveyorService.closeModalArchiveDocumentCompany.emit(false);
        this.removePhotoFrontal();
    }
    removePhotoFrontal() {
        this.photoFrontal.webviewPath = '';
        this.conveyorService.removePhotoFrontalIdentityCardDriver.emit();
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
        this.conveyorService.removeModalIdentityCardDriver.subscribe(resp => {
            this.photoFrontal.webviewPath = '';
            this.photoBack.webviewPath = '';
        });
    }
    addIdentityCard() {
        this.conveyorService.addIdentityCardDriver.emit();
        this.conveyorService.frontalArchiveIdentityCardDriver.emit(this.savePhotoFrontal);
        this.conveyorService.backArchiveIdentityCardDriver.emit(this.savePhotoBack);
        this.conveyorService.closeModalArchiveIdentityCardDriver.emit(false);
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
            this.conveyorService.closeModalArchiveIdentityCardDriver.emit(false);
            return;
        }
        this.conveyorService.closeModalArchiveIdentityCardDriver.emit(false);
        this.removePhotoFrontal();
        this.removePhotoBack();
    }
    removePhotoFrontal() {
        this.photoFrontal.webviewPath = '';
        this.conveyorService.removePhotoFrontalIdentityCardDriver.emit();
    }
    removePhotoBack() {
        this.photoBack.webviewPath = '';
        this.conveyorService.removePhotoBackIdentityCardDriver.emit();
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_admin_logist_third_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-admin-logist-third.component.html?ngResource */ 19256);
/* harmony import */ var _register_admin_logist_third_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-admin-logist-third.component.scss?ngResource */ 35831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/conveyor/conveyor.service */ 88001);
/* harmony import */ var src_app_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/error-messages.service */ 47486);








let RegisterAdminLogistThirdComponent = class RegisterAdminLogistThirdComponent {
    constructor(formBuilder, conveyorService, errorMessages) {
        this.formBuilder = formBuilder;
        this.conveyorService = conveyorService;
        this.errorMessages = errorMessages;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
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
    }
    ngOnInit() {
        this.alertSucces = false;
        this.formBuilderInput();
        this.form.get('typeConveyorId').setValue(this.typeConveyor);
        this.conveyorService.closeModalArchiveDocumentCompany.subscribe(resp => {
            this.openPhotoDocumentCompany = resp;
        });
        this.conveyorService.frontalArchiveDocumentCompany.subscribe(resp => {
            this.form.get('documentCompany').setValue(resp);
        });
        this.conveyorService.addPhotoDocumentCompany.subscribe(resp => {
            this.addDocumentCompany = true;
            this.toastMessage = 'Documento de la empresa agregado';
            const element = document.getElementById('toast-message-driver');
            element.classList.remove('hide');
        });
        this.conveyorService.closeModalArchiveIdentityCardDriver.subscribe(resp => {
            this.openPhotoIdentityCard = resp;
        });
        this.conveyorService.frontalArchiveIdentityCardDriver.subscribe(resp => {
            this.form.get('documentIdentityCardFrontal').setValue(resp);
        });
        this.conveyorService.backArchiveIdentityCardDriver.subscribe(resp => {
            this.form.get('documentIdentityCardBack').setValue(resp);
        });
        this.conveyorService.removePhotoBackIdentityCardDriver.subscribe(resp => {
            this.form.get('documentIdentityCardFrontal').setValue('');
        });
        this.conveyorService.removePhotoBackIdentityCardDriver.subscribe(resp => {
            this.form.get('documentIdentityCardBack').setValue('');
        });
        this.conveyorService.addIdentityCardDriver.subscribe(resp => {
            this.addIdentityCard = true;
            this.toastMessage = 'Cédula de ciudadanía agregada';
            const element = document.getElementById('toast-message-driver');
            element.classList.remove('hide');
        });
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                return;
            }
            this.propagar.emit(true);
            yield this.conveyorService.registerAdminLogistThird(this.form.value).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.propagar.emit(false);
                this.form.reset();
                this.conveyorService.removeModalIdentityCardDriver.emit();
                this.conveyorService.removeModalPhotoDocumentCompany.emit();
                this.alertSucces = true;
                this.addIdentityCard = false;
                this.addDocumentCompany = false;
                this.alertConfirm = false;
                this.alertSucces = true;
                this.errors = [];
            }), (error) => {
                this.propagar.emit(false);
                this.errors = this.errorMessages.parsearErroresAPI(error);
            });
        });
    }
    removeDocumentCompany() {
        this.form.get('documentCompany').setValue('');
        this.conveyorService.removeModalPhotoDocumentCompany.emit();
        this.addDocumentCompany = false;
        this.toastMessage = 'Se eliminó el documento de la empresa';
        const element = document.getElementById('toast-message-driver');
        element.classList.remove('hide');
    }
    removeIdentityCard() {
        this.form.get('documentIdentityCardFrontal').setValue('');
        this.form.get('documentIdentityCardBack').setValue('');
        this.conveyorService.removeModalIdentityCardDriver.emit();
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
        this.openPhotoIdentityCard = true;
    }
    openModalPhotoDocumentCompany() {
        this.openPhotoDocumentCompany = true;
    }
    /*=============================================
     FORMULARIO REACTIVOS
    =============================================*/
    formBuilderInput() {
        this.form = this.formBuilder.group({
            typeConveyorId: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            firstName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            lastName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email
                ]],
            document: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            role: ['AdminLogis', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            phoneNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]*$')
                ]],
            nameCompany: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            nitCompany: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            documentCompany: '',
            documentIdentityCardFrontal: '',
            documentIdentityCardBack: '',
        });
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(350))
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
RegisterAdminLogistThirdComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_2__.ConveyorService },
    { type: src_app_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__.ErrorMessagesService }
];
RegisterAdminLogistThirdComponent.propDecorators = {
    typeConveyor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    propagar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
RegisterAdminLogistThirdComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
        this.conveyorService.removeModalLicenceDriver.subscribe(resp => {
            this.photoFrontal.webviewPath = '';
            this.photoBack.webviewPath = '';
        });
    }
    addLicence() {
        this.conveyorService.addLicenceDriver.emit();
        this.conveyorService.frontalArchiveLicenceDriver.emit(this.savePhotoFrontal);
        this.conveyorService.backArchiveLicenceDriver.emit(this.savePhotoBack);
        this.conveyorService.closeModalArchiveLicenceDriver.emit(false);
    }
    closeModalLicence() {
        if (this.photoBack.webviewPath && this.photoFrontal.webviewPath) {
            this.conveyorService.closeModalArchiveLicenceDriver.emit(false);
            return;
        }
        this.conveyorService.closeModalArchiveLicenceDriver.emit(false);
        this.removePhotoFrontal();
        this.removePhotoBack();
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
        this.conveyorService.removePhotoFrontalLicenceDriver.emit();
    }
    removePhotoBack() {
        this.photoBack.webviewPath = '';
        this.conveyorService.removePhotoBackLicenceDriver.emit();
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_driver_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-driver.component.html?ngResource */ 59221);
/* harmony import */ var _register_driver_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-driver.component.scss?ngResource */ 84357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/conveyor/conveyor.service */ 88001);
/* harmony import */ var src_app_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/error-messages.service */ 47486);



/* eslint-disable @typescript-eslint/member-ordering */





let RegisterDriverComponent = class RegisterDriverComponent {
    constructor(formBuilder, conveyorService, errorMessages) {
        this.formBuilder = formBuilder;
        this.conveyorService = conveyorService;
        this.errorMessages = errorMessages;
        this.listConveyors = [];
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.alertSucces = false;
        this.alertConfirm = false;
        this.addLicence = false;
        this.addSecurityCard = false;
        this.addIdentityCard = false;
        this.toastMessage = '';
        this.openPhotoDrivingLicence = false;
        this.openPhotoIdentityCard = false;
        this.openPhotoSecurityCard = false;
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
        this.statusInputConveyor = 'regular';
        this.statusInputMessageConveyor = '';
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnDestroy() {
        this.listConveyors = [];
        this.form = null;
    }
    ngOnInit() {
        this.formBuilderInput();
        this.getConveyors();
        this.form.get('typeConveyorId').setValue(this.typeConveyor);
        this.conveyorService.closeModalArchiveSecurityCard.subscribe(resp => {
            this.openPhotoSecurityCard = resp;
        });
        this.conveyorService.frontalArchiveSecurityCard.subscribe(resp => {
            this.form.get('documentSecurityCard').setValue(resp);
        });
        this.conveyorService.removePhotoFrontalSecurityCard.subscribe(resp => {
            this.form.get('documentSecurityCard').setValue('');
        });
        this.conveyorService.addPhotoSecurityCard.subscribe(resp => {
            this.addSecurityCard = true;
            this.toastMessage = 'Carné de seguridad agregado';
            const element = document.getElementById('toast-message-driver');
            element.classList.remove('hide');
        });
        this.conveyorService.closeModalArchiveLicenceDriver.subscribe(resp => {
            this.openPhotoDrivingLicence = resp;
        });
        this.conveyorService.frontalArchiveLicenceDriver.subscribe(resp => {
            this.form.get('documentDrivinglicenseFrontal').setValue(resp);
        });
        this.conveyorService.backArchiveLicenceDriver.subscribe(resp => {
            this.form.get('documentDrivinglicenseBack').setValue(resp);
        });
        this.conveyorService.removePhotoFrontalLicenceDriver.subscribe(resp => {
            this.form.get('documentDrivinglicenseFrontal').setValue('');
        });
        this.conveyorService.removePhotoBackLicenceDriver.subscribe(resp => {
            this.form.get('documentDrivinglicenseBack').setValue('');
        });
        this.conveyorService.addLicenceDriver.subscribe(resp => {
            this.addLicence = true;
            this.toastMessage = 'Licencia de conducción agregada';
            const element = document.getElementById('toast-message-driver');
            element.classList.remove('hide');
        });
        this.conveyorService.closeModalArchiveIdentityCardDriver.subscribe(resp => {
            this.openPhotoIdentityCard = resp;
        });
        this.conveyorService.frontalArchiveIdentityCardDriver.subscribe(resp => {
            this.form.get('documentIdentityCardFrontal').setValue(resp);
        });
        this.conveyorService.backArchiveIdentityCardDriver.subscribe(resp => {
            this.form.get('documentIdentityCardBack').setValue(resp);
        });
        this.conveyorService.removePhotoBackIdentityCardDriver.subscribe(resp => {
            this.form.get('documentIdentityCardFrontal').setValue('');
        });
        this.conveyorService.removePhotoBackIdentityCardDriver.subscribe(resp => {
            this.form.get('documentIdentityCardBack').setValue('');
        });
        this.conveyorService.addIdentityCardDriver.subscribe(resp => {
            this.addIdentityCard = true;
            this.toastMessage = 'Cédula de ciudadanía agregada';
            const element = document.getElementById('toast-message-driver');
            element.classList.remove('hide');
        });
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                return;
            }
            this.propagar.emit(true);
            if (this.form.get('conveyorId').errors && this.form.get('conveyorId').dirty) {
                this.statusInputConveyor = 'error';
                this.statusInputMessageConveyor = 'Debe seleccionar un transportador';
                this.propagar.emit(false);
                return;
            }
            else {
                this.statusInputConveyor = 'regular';
                this.statusInputMessageConveyor = '';
            }
            yield this.conveyorService.registerDriver(this.form.value).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.propagar.emit(false);
                this.form.reset();
                this.conveyorService.removeModalLicenceDriver.emit();
                this.conveyorService.removeModalIdentityCardDriver.emit();
                this.conveyorService.removeModalSecurityCard.emit();
                this.addLicence = false;
                this.addIdentityCard = false;
                this.addSecurityCard = false;
                this.alertConfirm = false;
                this.alertSucces = true;
                this.errors = [];
            }), (error) => {
                this.propagar.emit(false);
                this.errors = this.errorMessages.parsearErroresAPI(error);
                this.alertConfirm = false;
            });
        });
    }
    getConveyors() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.conveyorService.getConveyors().subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.listConveyors = resp;
            }), (error) => {
                this.errorMessages.parsearErroresAPI(error);
            });
        });
    }
    openModalPhotoLicence() {
        this.openPhotoDrivingLicence = true;
    }
    openModalPhotoIdentityCard() {
        this.openPhotoIdentityCard = true;
    }
    openModalPhotoSecurityCard() {
        this.openPhotoSecurityCard = true;
    }
    removeLicence() {
        this.form.get('documentDrivinglicenseFrontal').setValue('');
        this.form.get('documentDrivinglicenseBack').setValue('');
        this.conveyorService.removeModalLicenceDriver.emit();
        this.addLicence = false;
        this.toastMessage = 'Se eliminó la licencia de conducción';
        const element = document.getElementById('toast-message-driver');
        element.classList.remove('hide');
    }
    removeSecurityCard() {
        this.form.get('documentSecurityCard').setValue('');
        this.conveyorService.removeModalSecurityCard.emit();
        this.addSecurityCard = false;
        this.toastMessage = 'Se eliminó el carné de seguridad';
        const element = document.getElementById('toast-message-driver');
        element.classList.remove('hide');
    }
    removeIdentityCard() {
        this.form.get('documentIdentityCardFrontal').setValue('');
        this.form.get('documentIdentityCardBack').setValue('');
        this.conveyorService.removeModalIdentityCardDriver.emit();
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
    cwcChange(data) {
        if (data) {
            // eslint-disable-next-line radix
            const conveyorId = parseInt(data.detail.value);
            this.form.get('conveyorId').setValue(conveyorId);
        }
    }
    /*=============================================
     FORMULARIO REACTIVOS
    =============================================*/
    formBuilderInput() {
        this.form = this.formBuilder.group({
            typeConveyorId: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            conveyorId: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            firstName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            lastName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email
                ]],
            document: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            role: ['Driver', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            codeSap: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            phoneNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]*$')
                ]],
            documentDrivinglicenseFrontal: '',
            documentDrivinglicenseBack: '',
            documentIdentityCardFrontal: '',
            documentIdentityCardBack: '',
            documentSecurityCard: '',
        });
        this.form.patchValue(this.modelo);
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(350))
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
        if (this.form.get('codeSap').errors && this.form.get('codeSap').dirty) {
            this.statusInputSap = 'error';
            this.statusInputMessageSap = 'Este campo es requerido';
        }
        else {
            this.statusInputSap = 'regular';
            this.statusInputMessageSap = '';
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
        if (this.form.get('conveyorId').errors && this.form.get('conveyorId').dirty) {
            this.statusInputConveyor = 'error';
            this.statusInputMessageConveyor = 'Debe seleccionar un transportador';
        }
        else {
            this.statusInputConveyor = 'regular';
            this.statusInputMessageConveyor = '';
        }
    }
};
RegisterDriverComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_2__.ConveyorService },
    { type: src_app_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__.ErrorMessagesService }
];
RegisterDriverComponent.propDecorators = {
    typeConveyor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    propagar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
RegisterDriverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
        this.conveyorService.removeModalSecurityCard.subscribe(resp => {
            this.photoFrontal.webviewPath = '';
        });
    }
    addPhotoDocumentCompany() {
        this.conveyorService.addPhotoSecurityCard.emit();
        this.conveyorService.frontalArchiveSecurityCard.emit(this.savePhotoFrontal);
        this.conveyorService.closeModalArchiveSecurityCard.emit(false);
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
            this.conveyorService.closeModalArchiveSecurityCard.emit(false);
            return;
        }
        this.conveyorService.closeModalArchiveSecurityCard.emit(false);
        this.removePhotoFrontal();
    }
    removePhotoFrontal() {
        this.photoFrontal.webviewPath = '';
        this.conveyorService.removePhotoFrontalSecurityCard.emit();
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_mantruck_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-mantruck.component.html?ngResource */ 6734);
/* harmony import */ var _register_mantruck_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-mantruck.component.scss?ngResource */ 84753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/conveyor/conveyor.service */ 88001);
/* harmony import */ var src_app_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/error-messages.service */ 47486);








let RegisterMantruckComponent = class RegisterMantruckComponent {
    constructor(formBuilder, conveyorService, errorMessages) {
        this.formBuilder = formBuilder;
        this.conveyorService = conveyorService;
        this.errorMessages = errorMessages;
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.alertSucces = false;
        this.alertConfirm = false;
        this.addLicence = false;
        this.addSecurityCard = false;
        this.addIdentityCard = false;
        this.toastMessage = '';
        this.openPhotoDrivingLicence = false;
        this.openPhotoIdentityCard = false;
        this.openPhotoSecurityCard = false;
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
    }
    ngOnInit() {
        this.alertSucces = false;
        this.formBuilderInput();
        this.form.get('typeConveyorId').setValue(this.typeConveyor);
        this.conveyorService.closeModalArchiveSecurityCard.subscribe(resp => {
            this.openPhotoSecurityCard = resp;
        });
        this.conveyorService.frontalArchiveSecurityCard.subscribe(resp => {
            this.form.get('documentSecurityCard').setValue(resp);
        });
        this.conveyorService.removePhotoFrontalSecurityCard.subscribe(resp => {
            this.form.get('documentSecurityCard').setValue('');
        });
        this.conveyorService.addPhotoSecurityCard.subscribe(resp => {
            this.addSecurityCard = true;
            this.toastMessage = 'Carné de seguridad agregado';
            const element = document.getElementById('toast-message-driver');
            element.classList.remove('hide');
        });
        this.conveyorService.closeModalArchiveLicenceDriver.subscribe(resp => {
            this.openPhotoDrivingLicence = resp;
        });
        this.conveyorService.frontalArchiveLicenceDriver.subscribe(resp => {
            this.form.get('documentDrivinglicenseFrontal').setValue(resp);
        });
        this.conveyorService.backArchiveLicenceDriver.subscribe(resp => {
            this.form.get('documentDrivinglicenseBack').setValue(resp);
        });
        this.conveyorService.removePhotoFrontalLicenceDriver.subscribe(resp => {
            this.form.get('documentDrivinglicenseFrontal').setValue('');
        });
        this.conveyorService.removePhotoBackLicenceDriver.subscribe(resp => {
            this.form.get('documentDrivinglicenseBack').setValue('');
        });
        this.conveyorService.addLicenceDriver.subscribe(resp => {
            this.addLicence = true;
            this.toastMessage = 'Licencia de conducción agregada';
            const element = document.getElementById('toast-message-driver');
            element.classList.remove('hide');
        });
        this.conveyorService.closeModalArchiveIdentityCardDriver.subscribe(resp => {
            this.openPhotoIdentityCard = resp;
        });
        this.conveyorService.frontalArchiveIdentityCardDriver.subscribe(resp => {
            this.form.get('documentIdentityCardFrontal').setValue(resp);
        });
        this.conveyorService.backArchiveIdentityCardDriver.subscribe(resp => {
            this.form.get('documentIdentityCardBack').setValue(resp);
        });
        this.conveyorService.removePhotoBackIdentityCardDriver.subscribe(resp => {
            this.form.get('documentIdentityCardFrontal').setValue('');
        });
        this.conveyorService.removePhotoBackIdentityCardDriver.subscribe(resp => {
            this.form.get('documentIdentityCardBack').setValue('');
        });
        this.conveyorService.addIdentityCardDriver.subscribe(resp => {
            this.addIdentityCard = true;
            this.toastMessage = 'Cédula de ciudadanía agregada';
            const element = document.getElementById('toast-message-driver');
            element.classList.remove('hide');
        });
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                return;
            }
            this.propagar.emit(true);
            yield this.conveyorService.registerManTruck(this.form.value).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.propagar.emit(false);
                this.form.reset();
                this.conveyorService.removeModalLicenceDriver.emit();
                this.conveyorService.removeModalIdentityCardDriver.emit();
                this.conveyorService.removeModalSecurityCard.emit();
                this.alertSucces = true;
                this.addLicence = false;
                this.addIdentityCard = false;
                this.addSecurityCard = false;
                this.alertConfirm = false;
                this.alertSucces = true;
                this.errors = [];
            }), (error) => {
                this.propagar.emit(false);
                this.errors = this.errorMessages.parsearErroresAPI(error);
            });
        });
    }
    removeLicence() {
        this.form.get('documentDrivinglicenseFrontal').setValue('');
        this.form.get('documentDrivinglicenseBack').setValue('');
        this.conveyorService.removeModalLicenceDriver.emit();
        this.addLicence = false;
        this.toastMessage = 'Se eliminó la licencia de conducción';
        const element = document.getElementById('toast-message-driver');
        element.classList.remove('hide');
    }
    removeIdentityCard() {
        this.form.get('documentIdentityCardFrontal').setValue('');
        this.form.get('documentIdentityCardBack').setValue('');
        this.conveyorService.removeModalIdentityCardDriver.emit();
        this.addIdentityCard = false;
        this.toastMessage = 'Se eliminó la cédula de ciudadanía';
        const element = document.getElementById('toast-message-driver');
        element.classList.remove('hide');
    }
    removeSecurityCard() {
        this.form.get('documentSecurityCard').setValue('');
        this.conveyorService.removeModalSecurityCard.emit();
        this.addSecurityCard = false;
        this.toastMessage = 'Se eliminó el carné de seguridad';
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
    openModalPhotoLicence() {
        this.openPhotoDrivingLicence = true;
    }
    openModalPhotoSecurityCard() {
        this.openPhotoSecurityCard = true;
    }
    openModalPhotoIdentityCard() {
        this.openPhotoIdentityCard = true;
    }
    /*=============================================
     FORMULARIO REACTIVOS
    =============================================*/
    formBuilderInput() {
        this.form = this.formBuilder.group({
            typeConveyorId: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            firstName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            lastName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email
                ]],
            document: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            role: ['ManTruck', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            codeSap: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                ]],
            phoneNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]*$')
                ]],
            documentSecurityCard: '',
            documentDrivinglicenseFrontal: '',
            documentDrivinglicenseBack: '',
            documentIdentityCardFrontal: '',
            documentIdentityCardBack: '',
        });
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(350))
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
        if (this.form.get('codeSap').errors && this.form.get('codeSap').dirty) {
            this.statusInputSap = 'error';
            this.statusInputMessageSap = 'Este campo es requerido';
        }
        else {
            this.statusInputSap = 'regular';
            this.statusInputMessageSap = '';
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
    }
};
RegisterMantruckComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_conveyor_conveyor_service__WEBPACK_IMPORTED_MODULE_2__.ConveyorService },
    { type: src_app_services_error_messages_service__WEBPACK_IMPORTED_MODULE_3__.ErrorMessagesService }
];
RegisterMantruckComponent.propDecorators = {
    typeConveyor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    propagar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
RegisterMantruckComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
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
















let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 46325);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 47863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var src_app_services_type_conveyor_type_conveyor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/type-conveyor/type-conveyor.service */ 12119);







let RegisterPage = class RegisterPage {
    constructor(formBuilder, typeConveyorService) {
        this.formBuilder = formBuilder;
        this.typeConveyorService = typeConveyorService;
        this.typeConveyors = [];
        this.showFormDriver = false;
        this.showFormManTruck = false;
        this.showFormAdminLogist = false;
        this.loading = false;
        this.showError = false;
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.formBuilderInput();
        this.getTypeConveyors();
    }
    /*=============================================
     OBTENER LOS TIPOS TRANSPORTADORES
    =============================================*/
    getTypeConveyors() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            yield this.typeConveyorService.getTypeConveyor().subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.typeConveyors = resp;
                setTimeout(() => {
                    this.loading = false;
                }, 1500);
            }), (error) => {
                this.loading = false;
                this.showError = true;
            });
        });
    }
    formBuilderInput() {
        this.formTypeConveyor = this.formBuilder.group({
            typeConveyorId: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                ]],
        });
        this.formTypeConveyor.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(100))
            .subscribe(data => {
        });
    }
    cwcChange(data) {
        if (data) {
            this.selectTypeConveyor = data.detail;
            if (data.detail === '1') {
                this.showFormManTruck = false;
                this.showFormDriver = false;
                this.showFormAdminLogist = true;
            }
            else if (data.detail === '2') {
                this.showFormAdminLogist = false;
                this.showFormDriver = false;
                this.showFormManTruck = true;
            }
            else if (data.detail === '3') {
                this.loading = true;
                this.showFormManTruck = false;
                this.showFormAdminLogist = false;
                this.showFormDriver = true;
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
            }
        }
    }
    showLoading(value) {
        this.loading = value;
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_type_conveyor_type_conveyor_service__WEBPACK_IMPORTED_MODULE_2__.TypeConveyorService }
];
RegisterPage.propDecorators = {
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




const URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
let ConveyorService = class ConveyorService {
    constructor(http) {
        this.http = http;
        this.listConveyors = [];
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.closeModalArchiveLicenceDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.frontalArchiveLicenceDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.backArchiveLicenceDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removePhotoFrontalLicenceDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removePhotoBackLicenceDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removeModalLicenceDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.addLicenceDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.closeModalArchiveIdentityCardDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.frontalArchiveIdentityCardDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.backArchiveIdentityCardDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removePhotoFrontalIdentityCardDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removePhotoBackIdentityCardDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removeModalIdentityCardDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.addIdentityCardDriver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.closeModalArchiveSecurityCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.addPhotoSecurityCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.frontalArchiveSecurityCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removePhotoFrontalSecurityCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removeModalSecurityCard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.closeModalArchiveDocumentCompany = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.frontalArchiveDocumentCompany = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.addPhotoDocumentCompany = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removeModalPhotoDocumentCompany = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    registerManTruck(createManTruck) {
        const formData = this.formDataDriver(createManTruck);
        return this.http.post(`${URL}/api/conveyor/register-mantruck`, formData);
    }
    registerAdminLogistThird(createLogistThird) {
        const formData = this.formDataAdminLogistThird(createLogistThird);
        return this.http.post(`${URL}/api/conveyor/register-admin-logist-third`, formData);
    }
    registerDriver(createDriver) {
        const formData = this.formDataDriver(createDriver);
        return this.http.post(`${URL}/api/driver/register`, formData);
    }
    getConveyors() {
        return this.http.get(`${URL}/api/conveyor/list-conveyors`);
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
ConveyorService.propDecorators = {
    closeModalArchiveLicenceDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    frontalArchiveLicenceDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    backArchiveLicenceDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    removePhotoFrontalLicenceDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    removePhotoBackLicenceDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    removeModalLicenceDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    addLicenceDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    closeModalArchiveIdentityCardDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    frontalArchiveIdentityCardDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    backArchiveIdentityCardDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    removePhotoFrontalIdentityCardDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    removePhotoBackIdentityCardDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    removeModalIdentityCardDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    addIdentityCardDriver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    closeModalArchiveSecurityCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    addPhotoSecurityCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    frontalArchiveSecurityCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    removePhotoFrontalSecurityCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    removeModalSecurityCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    closeModalArchiveDocumentCompany: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    frontalArchiveDocumentCompany: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    addPhotoDocumentCompany: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    removeModalPhotoDocumentCompany: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }]
};
ConveyorService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], ConveyorService);



/***/ }),

/***/ 12119:
/*!*****************************************************************!*\
  !*** ./src/app/services/type-conveyor/type-conveyor.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeConveyorService": () => (/* binding */ TypeConveyorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




const URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
let TypeConveyorService = class TypeConveyorService {
    constructor(http) {
        this.http = http;
    }
    getTypeConveyor() {
        return this.http.get(`${URL}/api/type-conveyor/list-type-conveyors`);
    }
};
TypeConveyorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
TypeConveyorService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], TypeConveyorService);



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

module.exports = ".content-grid-register {\n  overflow: auto;\n  justify-content: center !important;\n}\n\n.content-title-register {\n  margin-bottom: 2rem;\n}\n\n.content-title-register h2 {\n  color: #002a59;\n}\n\n.section {\n  margin-bottom: 1rem;\n}\n\n.content-button {\n  margin-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQUE7RUFDQSxrQ0FBQTtBQUFKOztBQUdDO0VBQ0csbUJBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWdyaWQtcmVnaXN0ZXJ7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuY29udGVudC10aXRsZS1yZWdpc3RlcntcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLmNvbnRlbnQtdGl0bGUtcmVnaXN0ZXIgaDJ7XHJcbiAgICBjb2xvcjogIzAwMmE1OTtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnNlY3Rpb257XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi5jb250ZW50LWJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuIl19 */";

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

module.exports = "<form (submit)=\"register()\" [formGroup]=\"form\">\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n                   label='Nombre (s)'\r\n                   [status]='statusInputName'\r\n                   [statusMessage]='statusInputMessageName'\r\n                   design-version=\"v2\" \r\n                   formControlName=\"firstName\"\r\n                   ngDefaultControl\r\n                   required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n                   label='Apellido (s)'\r\n                   [status]='statusInputLastName'\r\n                   [statusMessage]='statusInputMessageLastName'\r\n                   formControlName=\"lastName\"\r\n                   design-version=\"v2\" \r\n                   ngDefaultControl\r\n                   required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Correo electrónico'\r\n        [status]='statusInputEmail'\r\n        [statusMessage]='statusInputMessageEmail'\r\n        formControlName=\"email\"\r\n        ngDefaultControl\r\n        design-version=\"v2\" \r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='N° documento'\r\n        [status]='statusInputDocument'\r\n        [statusMessage]='statusInputMessageDocument'\r\n        formControlName=\"document\"\r\n        design-version=\"v2\" \r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Número de celular'\r\n        type=\"number\"\r\n        [status]='statusInputPhone'\r\n        [statusMessage]='statusInputMessagePhone'\r\n        formControlName=\"phoneNumber\"\r\n        design-version=\"v2\"\r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='Nombre empresa'\r\n        [status]='statusInputCompany'\r\n        [statusMessage]='statusInputMessageCompany'\r\n        formControlName=\"nameCompany\"\r\n        design-version=\"v2\"\r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n      <div class=\"section\">\r\n        <cwc-input class=\"input\" \r\n        label='N° Nit'\r\n        [status]='statusInputNit'\r\n        [statusMessage]='statusInputMessageNit'\r\n        formControlName=\"nitCompany\"\r\n        design-version=\"v2\" \r\n        ngDefaultControl\r\n        required\r\n        ></cwc-input>\r\n      </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n   <!--=====================================\r\n      DOCUMENTO DE LA EMPRESA\r\n    ======================================-->\r\n    <label for=\"\">Documento de la empresa (opcional)</label>\r\n<div *ngIf=\"!form.get('documentCompany').value\">\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoDocumentCompany()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n</cwc-grid>\r\n</div>\r\n  <div *ngIf=\"addDocumentCompany\">\r\n    <cwc-grid class=\"demo-grid content-archive\" >\r\n      <cwc-cell (click)=\"openModalPhotoDocumentCompany()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Documento agregado</h5>\r\n          <cwc-icon (click)=\"removeDocumentCompany()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n        </div>\r\n      </cwc-cell>\r\n    </cwc-grid>\r\n  </div>\r\n   <!--=====================================\r\n      CEDULA DE CIUDADANIA\r\n    ======================================-->\r\n<label for=\"\">Cédula de ciudadania (opcional)</label>\r\n<div *ngIf=\"!form.get('documentIdentityCardFrontal').value && !form.get('documentIdentityCardBack').value\">\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n</cwc-grid>\r\n</div>\r\n  <div *ngIf=\"addIdentityCard\">\r\n    <cwc-grid class=\"demo-grid content-archive\" >\r\n      <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Cédula de Ciudadanía agregada </h5>\r\n          <cwc-icon (click)=\"removeIdentityCard()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n        </div>\r\n      </cwc-cell>\r\n    </cwc-grid>\r\n  </div>\r\n    \r\n    <app-error-messages [errors]=\"errors\"></app-error-messages> \r\n  <!--=====================================\r\n    BOTON PARA GUARDAR EL REGISTRO\r\n  ======================================-->\r\n    <div class=\"content-button\">\r\n      <cwc-button \r\n      design-version=\"v1\" \r\n      [disabled]=\"form.invalid\"\r\n      (click)=\"openAlertConfirm()\" \r\n      variant=\"regular-block\">COMPLETAR REGISTRO</cwc-button>\r\n    </div>\r\n</form>\r\n\r\n<app-photo-indentity-card\r\n[modalPhotoIdentityCardShow] = \"openPhotoIdentityCard\"\r\n></app-photo-indentity-card>\r\n<app-document-company\r\n[modalPhotoDocumentCompanyShow] = \"openPhotoDocumentCompany\"\r\n></app-document-company>\r\n<!--=====================================\r\n\t\tMODAL ALERTA CONFIRMAR DATOS GUARDAR\r\n======================================-->\r\n<cwc-modal id='alert-confirm' class=\"alert-confirm\" [open] =\"alertConfirm\" (cwcClose)=\"closeAlertConfirm()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Atención</h2>\r\n  </header>\r\n  <p>¿Esta seguro que los datos registrados estan correctos?</p>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeAlertConfirm()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button variant='primary' (click)=\"register()\" >Aceptar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n<!--=====================================\r\n\t\tMODAL CONFIRMACIÓN RESPUESTA DE EXITO\r\n======================================-->\r\n<app-alert-success\r\n[alertShow] = \"alertSucces\"\r\ntitle = \"Existoso\"\r\nurlButton = \"/login\"\r\ntextButton = \"Volver al login\"\r\nmessage = \"El registro se realizó correctamente, vamos a validar sus datos y pronto daremos respuesta.\">\r\n</app-alert-success>\r\n<!--=====================================\r\n\tTOAST ALERT MENSAJE\r\n======================================-->\r\n<cwc-snackbar id='toast-message-driver' [message]=\"toastMessage\"\r\ncta-message=\"dismiss\" auto-hide-duration='5000'></cwc-snackbar>";

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

module.exports = "<form (submit)=\"register()\" [formGroup]=\"form\">\r\n  <div style=\"display: flex;\">\r\n    <label for=\"\" style=\"font-size: 0.9rem; margin-bottom: 0.7rem;\">Selecciona el transportador\r\n      <cwc-tooltip content='Busca y selecciona la empresa o microempresa (administrador logístico tercero o hombre camión)'>\r\n        <cwc-icon style=\"margin-left: 0.5rem;\" id='icon' name='information-rounded-fill' color=\"bright-blue\" size='24px'></cwc-icon>\r\n      </cwc-tooltip>\r\n    </label>\r\n  </div>\r\n    <cwc-picker  \r\n    [status]='statusInputConveyor'\r\n    [statusMessage]='statusInputMessageConveyor' (cwcChange)=\"cwcChange($event)\" class=\"w-full select-filter\" unwrap=\"true\" label=\"\" filter-no-resultsMessage=\"No se encontraron resultados\" filter-placeholder=\"Filtrar transportadores\" placeholder=\"Seleccione una opción\" filter=\"true\">\r\n      <option *ngFor=\"let conveyor of listConveyors\" [value]=\"conveyor.idConveyor\">{{ conveyor.company ? conveyor.company.nameCompany : conveyor.user.firstName +' '+conveyor.user.lastName }}</option>\r\n      <!-- <option *ngFor=\"let conveyor of listConveyors\" [value]=\"conveyor.idConveyor\">mao</option> -->\r\n    </cwc-picker>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"section\">\r\n            <cwc-input class=\"input\" \r\n                      label='Nombre (s)'\r\n                      [status]='statusInputName'\r\n                      [statusMessage]='statusInputMessageName'\r\n                      design-version=\"v2\" \r\n                      formControlName=\"firstName\"\r\n                      ngDefaultControl\r\n                      required\r\n            ></cwc-input>\r\n          </div>\r\n          <div class=\"section\">\r\n            <cwc-input class=\"input\" \r\n                      label='Apellido (s)'\r\n                      [status]='statusInputLastName'\r\n                      [statusMessage]='statusInputMessageLastName'\r\n                      formControlName=\"lastName\"\r\n                      design-version=\"v2\" \r\n                      ngDefaultControl\r\n                      required\r\n            ></cwc-input>\r\n          </div>\r\n          <div class=\"section\">\r\n            <cwc-input class=\"input\" \r\n            label='Correo electrónico'\r\n            [status]='statusInputEmail'\r\n            [statusMessage]='statusInputMessageEmail'\r\n            formControlName=\"email\"\r\n            ngDefaultControl\r\n            design-version=\"v2\" \r\n            required\r\n            ></cwc-input>\r\n          </div>\r\n          <div class=\"section\">\r\n            <cwc-input class=\"input\" \r\n            label='N° documento'\r\n            [status]='statusInputDocument'\r\n            [statusMessage]='statusInputMessageDocument'\r\n            formControlName=\"document\"\r\n            design-version=\"v2\" \r\n            ngDefaultControl\r\n            required\r\n            ></cwc-input>\r\n          </div>\r\n          <div class=\"section\">\r\n            <cwc-input class=\"input\" \r\n            label='Código SAP'\r\n            [status]='statusInputSap'\r\n            [statusMessage]='statusInputMessageSap'\r\n            formControlName=\"codeSap\"\r\n            design-version=\"v2\"\r\n            ngDefaultControl\r\n            required\r\n            ></cwc-input>\r\n          </div>\r\n          <div class=\"section\">\r\n            <cwc-input class=\"input\" \r\n            label='Número de celular'\r\n            type=\"number\"\r\n            [status]='statusInputPhone'\r\n            [statusMessage]='statusInputMessagePhone'\r\n            formControlName=\"phoneNumber\"\r\n            design-version=\"v2\"\r\n            ngDefaultControl\r\n            required\r\n            ></cwc-input>\r\n          </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n\r\n\r\n  <!--=====================================\r\n    COMPONENTE PARA SUBIR ARCHIVOS\r\n  ======================================-->\r\n  <label for=\"\">Licencia de conducir (opcional)</label>\r\n <div *ngIf=\"!form.get('documentDrivinglicenseFrontal').value && !form.get('documentDrivinglicenseBack').value\">\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoLicence()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n</div>\r\n<div *ngIf=\"addLicence\">\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoLicence()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Licencia de conducción agregada </h5>\r\n        <cwc-icon (click)=\"removeLicence()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n      </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n</div>\r\n\r\n<label for=\"\">Carné de seguridad industrial y vial (opcional)</label>\r\n<div *ngIf=\"!form.get('documentSecurityCard').value\">\r\n    <cwc-grid class=\"demo-grid content-archive\" >\r\n      <cwc-cell (click)=\"openModalPhotoSecurityCard()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n        </div>\r\n      </cwc-cell>\r\n      <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n        </div>\r\n      </cwc-cell>\r\n  </cwc-grid>\r\n</div>\r\n<div *ngIf=\"addSecurityCard\">\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoSecurityCard()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Carné de seguridad industrial y vial agregado </h5>\r\n        <cwc-icon (click)=\"removeSecurityCard()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n      </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n</div>\r\n\r\n<label for=\"\">Cédula de ciudadania (opcional)</label>\r\n<div *ngIf=\"!form.get('documentIdentityCardFrontal').value && !form.get('documentIdentityCardBack').value\">\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n</cwc-grid>\r\n</div>\r\n<div *ngIf=\"addIdentityCard\">\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Cédula de Ciudadanía agregada </h5>\r\n        <cwc-icon (click)=\"removeIdentityCard()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n      </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n</div>\r\n\r\n<!--=====================================\r\n    MENSAJES DE ERROR\r\n  ======================================-->\r\n  <app-error-messages [errors]=\"errors\"></app-error-messages> \r\n  <!--=====================================\r\n    BOTON PARA GUARDAR EL REGISTRO\r\n  ======================================-->\r\n      <div class=\"content-button\">\r\n        <cwc-button \r\n        design-version=\"v1\" \r\n        [disabled]=\"form.invalid\"\r\n        (click)=\"openAlertConfirm()\" \r\n        variant=\"regular-block\">COMPLETAR REGISTRO</cwc-button>\r\n      </div>\r\n</form>\r\n<!--=====================================\r\n\t\tSi NO EXISTEN TRANSPORTADORES\r\n======================================-->\r\n<div *ngIf=\"!listConveyors.length\">\r\n  <div class=\"p-all-reg\" style=\"background: #F4F6F9\">\r\n    <cwc-empty-result header=\"Error al generar el formulario\" icon=\"error-rounded-fill\">\r\n        No hay transportadores registrados, actualice e intente nuevamente o consulte <a [routerLink]=\"['/help']\" routerLinkActive=\"router-link-active\" >ayuda</a> de Cemex.\r\n    </cwc-empty-result>\r\n  </div>\r\n</div>\r\n<!--=====================================\r\n\t\tMODAL AGREGAR FOTOGRAFICA LICENCIA\r\n======================================-->\r\n<app-photo-driving-licence\r\n[modalPhotoLinceShow] = \"openPhotoDrivingLicence\"\r\n></app-photo-driving-licence>\r\n\r\n<!--=====================================\r\n\t\tMODAL AGREGAR FOTOGRAFIA CEDULA\r\n======================================-->\r\n<app-photo-indentity-card\r\n[modalPhotoIdentityCardShow] = \"openPhotoIdentityCard\"\r\n></app-photo-indentity-card>\r\n\r\n<!--=====================================\r\n\t\tMODAL AGREGAR FOTOGRAFIA CARNE DE SEGURIDAD\r\n======================================-->\r\n<app-security-card\r\n[modalPhotoSecurityCardShow] = \"openPhotoSecurityCard\"\r\n></app-security-card>\r\n\r\n<!--=====================================\r\n\t\tMODAL ALERTA CONFIRMAR DATOS GUARDAR\r\n======================================-->\r\n<cwc-modal id='alert-confirm' class=\"alert-confirm\" [open] =\"alertConfirm\" (cwcClose)=\"closeAlertConfirm()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Atención</h2>\r\n  </header>\r\n  <p>¿Esta seguro que los datos registrados estan correctos?</p>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeAlertConfirm()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button variant='primary' (click)=\"register()\" >Aceptar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n<!--=====================================\r\n\tMODAL CONFIRMACIÓN RESPUESTA DE EXITO\r\n======================================-->\r\n<app-alert-success\r\n[alertShow] = \"alertSucces\"\r\ntitle = \"Existoso\"\r\nurlButton = \"/login\"\r\ntextButton = \"Volver al login\"\r\nmessage = \"El registro se realizó correctamente, vamos a validar sus datos y pronto daremos respuesta.\">\r\n</app-alert-success>\r\n\r\n<!--=====================================\r\n\tTOAST ALERT MENSAJE\r\n======================================-->\r\n<cwc-snackbar id='toast-message-driver' [message]=\"toastMessage\"\r\ncta-message=\"dismiss\" auto-hide-duration='5000'></cwc-snackbar>";

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

module.exports = "<form (submit)=\"register()\" [formGroup]=\"form\">\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"section\">\r\n            <cwc-input class=\"input\" \r\n                      label='Nombre (s)'\r\n                      [status]='statusInputName'\r\n                      [statusMessage]='statusInputMessageName'\r\n                      design-version=\"v2\" \r\n                      formControlName=\"firstName\"\r\n                      ngDefaultControl\r\n                      required\r\n            ></cwc-input>\r\n          </div>\r\n          <div class=\"section\">\r\n            <cwc-input class=\"input\" \r\n                      label='Apellido (s)'\r\n                      [status]='statusInputLastName'\r\n                      [statusMessage]='statusInputMessageLastName'\r\n                      formControlName=\"lastName\"\r\n                      design-version=\"v2\" \r\n                      ngDefaultControl\r\n                      required\r\n            ></cwc-input>\r\n          </div>\r\n          <div class=\"section\">\r\n            <cwc-input class=\"input\" \r\n            label='Correo electrónico'\r\n            [status]='statusInputEmail'\r\n            [statusMessage]='statusInputMessageEmail'\r\n            formControlName=\"email\"\r\n            ngDefaultControl\r\n            design-version=\"v2\" \r\n            required\r\n            ></cwc-input>\r\n          </div>\r\n          <div class=\"section\">\r\n            <cwc-input class=\"input\" \r\n            label='N° documento'\r\n            [status]='statusInputDocument'\r\n            [statusMessage]='statusInputMessageDocument'\r\n            formControlName=\"document\"\r\n            design-version=\"v2\" \r\n            ngDefaultControl\r\n            required\r\n            ></cwc-input>\r\n          </div>\r\n          <div class=\"section\">\r\n            <cwc-input class=\"input\" \r\n            label='Código SAP'\r\n            [status]='statusInputSap'\r\n            [statusMessage]='statusInputMessageSap'\r\n            formControlName=\"codeSap\"\r\n            design-version=\"v2\"\r\n            ngDefaultControl\r\n            required\r\n            ></cwc-input>\r\n          </div>\r\n          <div class=\"section\">\r\n            <cwc-input class=\"input\" \r\n            label='Número de celular'\r\n            [status]='statusInputPhone'\r\n            type=\"number\"\r\n            [statusMessage]='statusInputMessagePhone'\r\n            formControlName=\"phoneNumber\"\r\n            design-version=\"v2\"\r\n            ngDefaultControl\r\n            required\r\n            ></cwc-input>\r\n          </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n  \r\n\r\n<!--=====================================\r\n    COMPONENTE PARA SUBIR ARCHIVOS\r\n  ======================================-->\r\n  <label for=\"\">Licencia de conducir (opcional)</label>\r\n <div *ngIf=\"!form.get('documentDrivinglicenseFrontal').value && !form.get('documentDrivinglicenseBack').value\">\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoLicence()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n</div>\r\n<div *ngIf=\"addLicence\">\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoLicence()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Licencia de conducción agregada </h5>\r\n        <cwc-icon (click)=\"removeLicence()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n      </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n</div>\r\n\r\n<label for=\"\">Carné de seguridad industrial y vial (opcional)</label>\r\n<div *ngIf=\"!form.get('documentSecurityCard').value\">\r\n    <cwc-grid class=\"demo-grid content-archive\" >\r\n      <cwc-cell (click)=\"openModalPhotoSecurityCard()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n        </div>\r\n      </cwc-cell>\r\n      <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n        <div class=\"item-archives\">\r\n          <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n          <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n        </div>\r\n      </cwc-cell>\r\n    </cwc-grid>\r\n</div>\r\n<div *ngIf=\"addSecurityCard\">\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoSecurityCard()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Carné de seguridad industrial y vial agregado </h5>\r\n        <cwc-icon (click)=\"removeSecurityCard()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n      </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n</div>\r\n\r\n<label for=\"\">Cédula de ciudadania (opcional)</label>\r\n<div *ngIf=\"!form.get('documentIdentityCardFrontal').value && !form.get('documentIdentityCardBack').value\">\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n      </div>\r\n    </cwc-cell>\r\n</cwc-grid>\r\n</div>\r\n<div *ngIf=\"addIdentityCard\">\r\n  <cwc-grid class=\"demo-grid content-archive\" >\r\n    <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"\" colspan=\"12\" mobile-colspan=\"12\">\r\n      <div class=\"item-archives\">\r\n        <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n        <h5 class=\"text-archive\">Cédula de Ciudadanía agregada </h5>\r\n        <cwc-icon (click)=\"removeIdentityCard()\" name=\"close\" size=\"20px\" color=\"bright-blue\" style=\"margin-left: 1rem; cursor: pointer;\"></cwc-icon>\r\n      </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n</div>\r\n  \r\n  <app-error-messages [errors]=\"errors\"></app-error-messages> \r\n  <!--=====================================\r\n    BOTON PARA GUARDAR EL REGISTRO\r\n  ======================================-->\r\n      <div class=\"content-button\">\r\n        <cwc-button \r\n        design-version=\"v1\" \r\n        [disabled]=\"form.invalid\"\r\n        (click)=\"openAlertConfirm()\" \r\n        variant=\"regular-block\">COMPLETAR REGISTRO</cwc-button>\r\n      </div>\r\n</form>\r\n<!--=====================================\r\n\t\tMODAL AGREGAR FOTOGRAFIA LICENCIA\r\n======================================-->\r\n<app-photo-driving-licence\r\n[modalPhotoLinceShow] = \"openPhotoDrivingLicence\"\r\n></app-photo-driving-licence>\r\n\r\n<!--=====================================\r\n\t\tMODAL AGREGAR FOTOGRAFIA CARNE DE SEGURIDAD\r\n======================================-->\r\n<app-security-card\r\n[modalPhotoSecurityCardShow] = \"openPhotoSecurityCard\"\r\n></app-security-card>\r\n\r\n<!--=====================================\r\n\t\tMODAL AGREGAR FOTOGRAFIA CÉDULA\r\n======================================-->\r\n<app-photo-indentity-card\r\n[modalPhotoIdentityCardShow] = \"openPhotoIdentityCard\"\r\n></app-photo-indentity-card>\r\n<!--=====================================\r\n\t\tMODAL ALERTA CONFIRMAR DATOS GUARDAR\r\n======================================-->\r\n<cwc-modal id='alert-confirm' class=\"alert-confirm\" [open] =\"alertConfirm\" (cwcClose)=\"closeAlertConfirm()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Atención</h2>\r\n  </header>\r\n  <p>¿Esta seguro que los datos registrados estan correctos?</p>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeAlertConfirm()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button variant='primary' (click)=\"register()\" >Aceptar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n<!--=====================================\r\n\t\tMODAL CONFIRMACIÓN RESPUESTA DE EXITO\r\n======================================-->\r\n<app-alert-success\r\n[alertShow] = \"alertSucces\"\r\ntitle = \"Existoso\"\r\nurlButton = \"/login\"\r\ntextButton = \"Volver al login\"\r\nmessage = \"El registro se realizó correctamente, vamos a validar sus datos y pronto daremos respuesta.\">\r\n</app-alert-success>\r\n<!--=====================================\r\n\tTOAST ALERT MENSAJE\r\n======================================-->\r\n<cwc-snackbar id='toast-message-driver' [message]=\"toastMessage\"\r\ncta-message=\"dismiss\" auto-hide-duration='5000'></cwc-snackbar>";

/***/ }),

/***/ 46325:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div slot=\"main\" class=\"content-grid-register content\" *ngIf=\"!showError\">\r\n  <div class=\"content-title-register\">\r\n    <h2>Crear solicitud</h2>\r\n  </div>\r\n  <div class=\"section\">\r\n    <form [formGroup]=\"formTypeConveyor\">\r\n        <cwc-radio-group  ngDefaultControl formControlName=\"typeConveyorId\"  (cwcChange)=\"cwcChange($event)\" label='Actuará como'>\r\n          <div *ngFor=\"let typeConveyor of typeConveyors\">\r\n            <cwc-radio  [value]='typeConveyor.idTypeConveyor'>\r\n              <p *ngIf=\"typeConveyor.nameTypeConveyor === 'AdminLogis'\">Admin. Logístico Tercero</p>\r\n              <p *ngIf=\"typeConveyor.nameTypeConveyor === 'ManTruck'\">Hombre Camión</p>\r\n              <p *ngIf=\"typeConveyor.nameTypeConveyor === 'Driver'\">Conductor</p>\r\n              <cwc-tooltip [content]='typeConveyor.descriptionTypeConveyor'>\r\n                 <cwc-icon style=\"margin-left: 0.5rem;\" id='icon' name='information-rounded-fill' color=\"bright-blue\" size='24px'></cwc-icon>\r\n              </cwc-tooltip>\r\n           </cwc-radio>\r\n           <br/>\r\n           <br/>\r\n          </div>\r\n        </cwc-radio-group>\r\n      </form>\r\n    </div>\r\n  <!--=====================================\r\n\t\tFORMULARIO DE REGISTRO HOMBRE CAMIÓN\r\n  ======================================-->\r\n  <div *ngIf=\"showFormManTruck\">\r\n    <app-register-mantruck \r\n    (propagar)=\"showLoading($event)\" \r\n    [typeConveyor]=\"selectTypeConveyor\">\r\n  </app-register-mantruck>\r\n  </div>\r\n  <!--=====================================\r\n\t\tFORMULARIO DE REGISTRO ADMINISTRADOR LOGISTICO TERCERO\r\n  ======================================-->\r\n  <div *ngIf=\"showFormAdminLogist\">\r\n    <app-register-admin-logist-third\r\n    (propagar)=\"showLoading($event)\"\r\n    [typeConveyor]=\"selectTypeConveyor\"\r\n    ></app-register-admin-logist-third>\r\n  </div>\r\n  <!--=====================================\r\n\t\tFORMULARIO DE REGISTRO CONDUCTOR\r\n  ======================================-->\r\n  <div *ngIf=\"showFormDriver\">\r\n    <app-register-driver \r\n    (propagar)=\"showLoading($event)\" \r\n    [typeConveyor]=\"selectTypeConveyor\">\r\n    </app-register-driver>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--=====================================\r\n\t\tLOANDING\r\n======================================-->\r\n<div class=\"loading-content\" *ngIf=\"loading\">\r\n  <cwc-loader>\r\n    <span slot='loading'>Espere un momento...</span>\r\n  </cwc-loader>\r\n</div>\r\n<!--=====================================\r\n\t\tCONTENEDOR SI HAY UN ERROR DE SERVIDOR\r\n======================================-->\r\n<div class=\"content-empty-result\" *ngIf=\"showError\">\r\n  <div class=\"p-all-reg\" style=\"background: #F4F6F9\">\r\n    <cwc-empty-result header=\"Error al generar el formulario\" icon=\"error-rounded-fill\">\r\n        Error en el servidor, \r\n        por favor consulte con el administrador o <a [routerLink]=\"['/help']\" routerLinkActive=\"router-link-active\" >ayuda</a> de Cemex.\r\n    </cwc-empty-result>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map