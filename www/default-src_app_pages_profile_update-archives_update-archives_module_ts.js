"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_profile_update-archives_update-archives_module_ts"],{

/***/ 22950:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/components/photo-document-company/photo-document-company.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoDocumentCompanyComponent": () => (/* binding */ PhotoDocumentCompanyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _photo_document_company_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-document-company.component.html?ngResource */ 86740);
/* harmony import */ var _photo_document_company_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-document-company.component.scss?ngResource */ 29402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/convert-photo-camera/convert-photo-camera.service */ 25640);
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/profile/profile.service */ 89985);







let PhotoDocumentCompanyComponent = class PhotoDocumentCompanyComponent {
    constructor(profileService, convertPhotoCamera) {
        this.profileService = profileService;
        this.convertPhotoCamera = convertPhotoCamera;
        this.errors = '';
        this.email = '';
        this.photoFrontal = {
            webviewPath: ''
        };
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removePhotoDocumentCompanyFrontal = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.closeModalArchiveDocumentCompany = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.showLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.hidenLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.showAlertSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    ngOnInit() { }
    savePhotoDocumentCompany() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.savePhotoFrontal) {
                return;
            }
            const data = {
                documentCompanyFrontal: this.savePhotoFrontal,
            };
            this.showLoading.emit();
            yield this.profileService.updatePhotoDocumentCompany(this.getDataUser, data).subscribe(resp => {
                this.hidenLoading.emit();
                this.closeModalArchiveDocumentCompany.emit();
                this.showAlertSuccess.emit();
                this.photoFrontal.webviewPath = '';
            }, error => {
                this.hidenLoading.emit();
                // this.errors = this.errorMessages.parsearErroresAPI(error);
                this.errors = 'Error al actualizar la cédula de ciudadanía';
            });
        });
    }
    openCameraOne() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
            this.closeModalArchiveDocumentCompany.emit(false);
            this.removePhotoFrontal();
            return;
        }
        this.closeModalArchiveDocumentCompany.emit(false);
        this.removePhotoFrontal();
    }
    removePhotoFrontal() {
        this.photoFrontal.webviewPath = '';
        this.removePhotoDocumentCompanyFrontal.emit();
    }
};
PhotoDocumentCompanyComponent.ctorParameters = () => [
    { type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__.ProfileService },
    { type: src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__.ConvertPhotoCameraService }
];
PhotoDocumentCompanyComponent.propDecorators = {
    modalPhotoDocumentCompanyShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    getDataUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    removePhotoDocumentCompanyFrontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    closeModalArchiveDocumentCompany: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    showLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    hidenLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    showAlertSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
PhotoDocumentCompanyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-photo-document-company',
        template: _photo_document_company_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_photo_document_company_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhotoDocumentCompanyComponent);



/***/ }),

/***/ 59729:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/components/photo-identity-card/photo-identity-card.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoIdentityCardComponent": () => (/* binding */ PhotoIdentityCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _photo_identity_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-identity-card.component.html?ngResource */ 64168);
/* harmony import */ var _photo_identity_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-identity-card.component.scss?ngResource */ 99212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);
/* harmony import */ var src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/convert-photo-camera/convert-photo-camera.service */ 25640);
/* harmony import */ var src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile/profile.service */ 89985);








let PhotoIdentityCardComponent = class PhotoIdentityCardComponent {
    constructor(storage, profileService, convertPhotoCamera) {
        this.storage = storage;
        this.profileService = profileService;
        this.convertPhotoCamera = convertPhotoCamera;
        this.errors = '';
        this.email = '';
        this.photoFrontal = {
            webviewPath: ''
        };
        this.photoBack = {
            webviewPath: ''
        };
        this.user = {
            firstName: '',
            lastName: '',
            document: '',
            email: '',
            documentIdentityCardFrontal: '',
            documentIdentityCardBack: ''
        };
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removePhotoIdentityCardFrontal = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removePhotoIdentityCardBack = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.closeModalArchiveIdentityCard = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.showLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.hidenLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.showAlertSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            yield this.storage.get('current_user').then(resp => {
                this.email = resp.user.email;
            });
            this.profileService.getDataUser(this.email).subscribe(resp => {
                this.user.firstName = resp.user.firstName;
                this.user.lastName = resp.user.lastName;
                this.user.document = resp.user.document;
                this.user.documentIdentityCardFrontal = resp.user.documentIdentityCardFrontal;
                this.user.documentIdentityCardBack = resp.user.documentIdentityCardBack;
            });
        });
    }
    openCameraOne() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    savePhotoIdentityCard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.savePhotoFrontal || !this.savePhotoBack) {
                return;
            }
            const data = {
                documentIdentityCardFrontal: this.savePhotoFrontal,
                documentIdentityCardBack: this.savePhotoBack,
            };
            this.showLoading.emit();
            yield this.profileService.updatePhotoIdentityCard(data, this.user, this.email).subscribe(resp => {
                this.hidenLoading.emit();
                this.closeModalArchiveIdentityCard.emit();
                this.showAlertSuccess.emit();
                this.photoFrontal.webviewPath = '';
                this.photoBack.webviewPath = '';
            }, error => {
                this.hidenLoading.emit();
                // this.errors = this.errorMessages.parsearErroresAPI(error);
                this.errors = 'Error al actualizar la cédula de ciudadanía';
            });
        });
    }
    closeModalIdentityCard() {
        if (this.photoBack.webviewPath && this.photoFrontal.webviewPath) {
            this.closeModalArchiveIdentityCard.emit(false);
            this.removePhotoFrontal();
            this.removePhotoBack();
            return;
        }
        this.closeModalArchiveIdentityCard.emit(false);
        this.removePhotoFrontal();
        this.removePhotoBack();
    }
    removePhotoFrontal() {
        this.photoFrontal.webviewPath = '';
        this.removePhotoIdentityCardFrontal.emit();
    }
    removePhotoBack() {
        this.photoBack.webviewPath = '';
        this.removePhotoIdentityCardBack.emit();
    }
};
PhotoIdentityCardComponent.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__.ProfileService },
    { type: src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__.ConvertPhotoCameraService }
];
PhotoIdentityCardComponent.propDecorators = {
    modalPhotoIdentityCardShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    removePhotoIdentityCardFrontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    removePhotoIdentityCardBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    closeModalArchiveIdentityCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    showLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    hidenLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    showAlertSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
PhotoIdentityCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-photo-identity-card',
        template: _photo_identity_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_photo_identity_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhotoIdentityCardComponent);



/***/ }),

/***/ 86770:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/components/photo-licence-document/photo-licence-document.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoLicenceDocumentComponent": () => (/* binding */ PhotoLicenceDocumentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _photo_licence_document_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-licence-document.component.html?ngResource */ 79161);
/* harmony import */ var _photo_licence_document_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-licence-document.component.scss?ngResource */ 3177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/convert-photo-camera/convert-photo-camera.service */ 25640);
/* harmony import */ var src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile/profile.service */ 89985);







let PhotoLicenceDocumentComponent = class PhotoLicenceDocumentComponent {
    constructor(profileService, convertPhotoCamera) {
        this.profileService = profileService;
        this.convertPhotoCamera = convertPhotoCamera;
        this.errors = '';
        this.photoFrontal = {
            webviewPath: ''
        };
        this.photoBack = {
            webviewPath: ''
        };
        this.user = {
            idDriver: null,
            firstName: '',
            lastName: '',
            document: '',
            email: '',
            documentDrivinglicenseFrontal: '',
            documentDrivinglicenseBack: ''
        };
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removePhotoLicenceFrontal = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removePhotoLicenceBack = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.closeModalArchiveLicence = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.showLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.hidenLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.showAlertSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    ngOnInit() {
        this.profileService.getDataUser(this.email).subscribe(resp => {
            this.user.idDriver = resp.idDriver;
            this.user.firstName = resp.user.firstName;
            this.user.lastName = resp.user.lastName;
            this.user.documentDrivinglicenseFrontal = resp.documentDrivinglicenseFrontal;
            this.user.documentDrivinglicenseBack = resp.documentDrivinglicenseBack;
        });
    }
    openCameraOne() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
                quality: 100
            });
            this.photoBack = {
                webviewPath: capturedPhoto.webPath
            };
            this.errors = '';
            this.savePhotoBack = yield this.convertPhotoCamera.savePicture(capturedPhoto);
        });
    }
    savePhotoLicence() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.savePhotoFrontal || !this.savePhotoBack) {
                return;
            }
            const data = {
                documentDrivinglicenseFrontal: this.savePhotoFrontal,
                documentDrivinglicenseBack: this.savePhotoBack,
            };
            this.showLoading.emit();
            yield this.profileService.updatePhotoLicence(this.user, data).subscribe(resp => {
                this.hidenLoading.emit();
                this.closeModalArchiveLicence.emit();
                this.showAlertSuccess.emit();
                this.photoFrontal = {
                    webviewPath: ''
                };
                this.photoBack = {
                    webviewPath: ''
                };
            }, error => {
                this.hidenLoading.emit();
                // this.errors = this.errorMessages.parsearErroresAPI(error);
                this.errors = 'Error al actualizar la licencia de conducción';
            });
        });
    }
    closeModalLicence() {
        if (this.photoBack.webviewPath && this.photoFrontal.webviewPath) {
            this.closeModalArchiveLicence.emit(false);
            this.removePhotoFrontal();
            this.removePhotoBack();
            return;
        }
        this.closeModalArchiveLicence.emit(false);
        this.removePhotoFrontal();
        this.removePhotoBack();
    }
    removePhotoFrontal() {
        this.photoFrontal.webviewPath = '';
        this.removePhotoLicenceFrontal.emit();
    }
    removePhotoBack() {
        this.photoBack.webviewPath = '';
        this.removePhotoLicenceBack.emit();
    }
};
PhotoLicenceDocumentComponent.ctorParameters = () => [
    { type: src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__.ProfileService },
    { type: src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__.ConvertPhotoCameraService }
];
PhotoLicenceDocumentComponent.propDecorators = {
    modalPhotoLinceShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    removePhotoLicenceFrontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    removePhotoLicenceBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    closeModalArchiveLicence: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    showLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    hidenLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    showAlertSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
PhotoLicenceDocumentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-photo-licence-document',
        template: _photo_licence_document_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_photo_licence_document_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhotoLicenceDocumentComponent);



/***/ }),

/***/ 92594:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/components/photo-security-card/photo-security-card.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoSecurityCardComponent": () => (/* binding */ PhotoSecurityCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _photo_security_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo-security-card.component.html?ngResource */ 44710);
/* harmony import */ var _photo_security_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo-security-card.component.scss?ngResource */ 50136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/convert-photo-camera/convert-photo-camera.service */ 25640);
/* harmony import */ var src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile/profile.service */ 89985);







let PhotoSecurityCardComponent = class PhotoSecurityCardComponent {
    constructor(profileService, convertPhotoCamera) {
        this.profileService = profileService;
        this.convertPhotoCamera = convertPhotoCamera;
        this.errors = '';
        this.photoFrontal = {
            webviewPath: ''
        };
        this.user = {
            idDriver: null,
            firstName: '',
            lastName: '',
            document: '',
            email: '',
            documentDrivinglicenseFrontal: '',
            documentDrivinglicenseBack: ''
        };
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.removePhotoSecurityCard = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.closeModalArchiveSecurityCard = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.showLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.hidenLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.showAlertSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.profileService.getDataUser(this.email).subscribe(resp => {
                this.user.idDriver = resp.idDriver;
                this.user.firstName = resp.user.firstName;
                this.user.lastName = resp.user.lastName;
                this.user.documentSecurityCard = resp.documentSecurityCard;
            });
        });
    }
    savePhotoSecurityCard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.savePhotoFrontal) {
                return;
            }
            const data = {
                documentSecurityCardFrontal: this.savePhotoFrontal,
            };
            this.showLoading.emit();
            yield this.profileService.updatePhotoSecurityCard(this.user, data).subscribe(resp => {
                this.hidenLoading.emit();
                this.closeModalArchiveSecurityCard.emit();
                this.showAlertSuccess.emit();
                this.photoFrontal = {
                    webviewPath: ''
                };
            }, error => {
                this.hidenLoading.emit();
                // this.errors = this.errorMessages.parsearErroresAPI(error);
                this.errors = 'Error al actualizar la licencia de conducción';
            });
        });
    }
    openCameraOne() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
            this.closeModalArchiveSecurityCard.emit(false);
            this.removePhotoFrontal();
            return;
        }
        this.closeModalArchiveSecurityCard.emit(false);
        this.removePhotoFrontal();
    }
    removePhotoFrontal() {
        this.photoFrontal.webviewPath = '';
        this.removePhotoSecurityCard.emit();
    }
};
PhotoSecurityCardComponent.ctorParameters = () => [
    { type: src_app_services_profile_profile_service__WEBPACK_IMPORTED_MODULE_4__.ProfileService },
    { type: src_app_services_convert_photo_camera_convert_photo_camera_service__WEBPACK_IMPORTED_MODULE_3__.ConvertPhotoCameraService }
];
PhotoSecurityCardComponent.propDecorators = {
    modalPhotoSecurityCardShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    removePhotoSecurityCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    closeModalArchiveSecurityCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    showLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    hidenLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    showAlertSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
PhotoSecurityCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-photo-security-card',
        template: _photo_security_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_photo_security_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PhotoSecurityCardComponent);



/***/ }),

/***/ 25283:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/update-archives-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateArchivesPageRoutingModule": () => (/* binding */ UpdateArchivesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _update_archives_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-archives.page */ 56069);




const routes = [
    {
        path: '',
        component: _update_archives_page__WEBPACK_IMPORTED_MODULE_0__.UpdateArchivesPage
    }
];
let UpdateArchivesPageRoutingModule = class UpdateArchivesPageRoutingModule {
};
UpdateArchivesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateArchivesPageRoutingModule);



/***/ }),

/***/ 56769:
/*!*************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/update-archives.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateArchivesPageModule": () => (/* binding */ UpdateArchivesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _update_archives_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-archives-routing.module */ 25283);
/* harmony import */ var _update_archives_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-archives.page */ 56069);
/* harmony import */ var _components_photo_licence_document_photo_licence_document_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/photo-licence-document/photo-licence-document.component */ 86770);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _components_photo_identity_card_photo_identity_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/photo-identity-card/photo-identity-card.component */ 59729);
/* harmony import */ var _components_photo_document_company_photo_document_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/photo-document-company/photo-document-company.component */ 22950);
/* harmony import */ var _components_photo_security_card_photo_security_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/photo-security-card/photo-security-card.component */ 92594);












let UpdateArchivesPageModule = class UpdateArchivesPageModule {
};
UpdateArchivesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _update_archives_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateArchivesPageRoutingModule
        ],
        declarations: [
            _update_archives_page__WEBPACK_IMPORTED_MODULE_1__.UpdateArchivesPage,
            _components_photo_licence_document_photo_licence_document_component__WEBPACK_IMPORTED_MODULE_2__.PhotoLicenceDocumentComponent,
            _components_photo_identity_card_photo_identity_card_component__WEBPACK_IMPORTED_MODULE_4__.PhotoIdentityCardComponent,
            _components_photo_document_company_photo_document_company_component__WEBPACK_IMPORTED_MODULE_5__.PhotoDocumentCompanyComponent,
            _components_photo_security_card_photo_security_card_component__WEBPACK_IMPORTED_MODULE_6__.PhotoSecurityCardComponent
        ]
    })
], UpdateArchivesPageModule);



/***/ }),

/***/ 56069:
/*!***********************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/update-archives.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateArchivesPage": () => (/* binding */ UpdateArchivesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _update_archives_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-archives.page.html?ngResource */ 61913);
/* harmony import */ var _update_archives_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-archives.page.scss?ngResource */ 30847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/profile/profile.service */ 89985);








let UpdateArchivesPage = class UpdateArchivesPage {
    constructor(storage, profileService, formBuilder) {
        this.storage = storage;
        this.profileService = profileService;
        this.formBuilder = formBuilder;
        this.rol = '';
        this.email = '';
        this.loading = false;
        this.alertSucces = false;
        this.showFormLicence = false;
        this.showFormDocumentCompany = false;
        this.showFormIdentityCard = false;
        this.showFormCardSecurity = false;
        this.openPhotoDrivingLicence = false;
        this.openPhotoIdentityCard = false;
        this.openPhotoDocumentCompany = false;
        this.openPhotoSecurityCard = false;
        this.user = {
            user: {
                firstName: '',
                lastName: '',
                email: ''
            },
            idDriver: null,
            companyId: null,
            companyName: '',
            documentCompany: ''
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.formBuilderInput();
            yield this.storage.get('current_user').then(resp => {
                console.log(resp);
                this.email = resp.user.email;
            });
            this.getDataUserProfile();
        });
    }
    getDataUserProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            yield this.profileService.getDataUser(this.email).subscribe((resp) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.rol = resp.roles.map(item => item).toString();
                this.user.user.firstName = resp.user.firstName;
                this.user.user.email = resp.user.email;
                this.user.user.lastName = resp.user.lastName;
                this.user.companyId = resp.companyId;
                this.user.companyName = resp.companyName;
                this.user.documentCompany = resp.documentCompany;
                this.loading = false;
            }), error => {
                this.loading = false;
            });
        });
    }
    formBuilderInput() {
        this.formTypeArchive = this.formBuilder.group({
            typeArchive: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                ]],
        });
        this.formTypeArchive.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(100))
            .subscribe(data => {
        });
    }
    /*=============================================
    FUNCIONES PARA EL ARCHIVO DE LA EMPRESA
  =============================================*/
    openModalDocumentCompany() {
        this.openPhotoDocumentCompany = true;
    }
    closeModalDocumentCompany() {
        this.openPhotoDocumentCompany = false;
    }
    /*=============================================
      FUNCIONES PARA LINCENCIA DE CONDUCCIÓN
    =============================================*/
    openModalPhotoLicence() {
        this.openPhotoDrivingLicence = true;
    }
    closeModalLicence() {
        this.openPhotoDrivingLicence = false;
    }
    /*=============================================
      FUNCIONES PARA LA CÉDULA DE CIUDADANÍA
    =============================================*/
    openModalPhotoIdentityCard() {
        this.openPhotoIdentityCard = true;
    }
    closeModalIdentityCard() {
        this.openPhotoIdentityCard = false;
    }
    /*=============================================
      FUNCIONES PARA EL CARNE DE SEGURIDAD
    =============================================*/
    openModalPhotoSecurityCard() {
        this.openPhotoSecurityCard = true;
    }
    closeModalSecurityCard() {
        this.openPhotoSecurityCard = false;
    }
    showAlertSuccess() {
        this.alertSucces = true;
    }
    showLoading() {
        this.loading = true;
    }
    hidenLoading() {
        this.loading = false;
    }
    cwcChange(data) {
        if (data) {
            if (data.detail === '1') {
                this.showFormCardSecurity = false;
                this.showFormDocumentCompany = false;
                this.showFormIdentityCard = false;
                this.showFormLicence = true;
            }
            else if (data.detail === '2') {
                this.showFormLicence = false;
                this.showFormDocumentCompany = false;
                this.showFormIdentityCard = false;
                this.showFormCardSecurity = true;
            }
            else if (data.detail === '3') {
                this.showFormLicence = false;
                this.showFormDocumentCompany = false;
                this.showFormCardSecurity = false;
                this.showFormIdentityCard = true;
            }
            else if (data.detail === '4') {
                this.showFormLicence = false;
                this.showFormCardSecurity = false;
                this.showFormIdentityCard = false;
                this.showFormDocumentCompany = true;
            }
        }
    }
};
UpdateArchivesPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _services_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
UpdateArchivesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-update-archives',
        template: _update_archives_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_update_archives_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UpdateArchivesPage);



/***/ }),

/***/ 29402:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/components/photo-document-company/photo-document-company.component.scss?ngResource ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by1kb2N1bWVudC1jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 99212:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/components/photo-identity-card/photo-identity-card.component.scss?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by1pZGVudGl0eS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3177:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/components/photo-licence-document/photo-licence-document.component.scss?ngResource ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by1saWNlbmNlLWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 50136:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/components/photo-security-card/photo-security-card.component.scss?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by1zZWN1cml0eS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 30847:
/*!************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/update-archives.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtYXJjaGl2ZXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 86740:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/components/photo-document-company/photo-document-company.component.html?ngResource ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-modal id='modal-photo-licence-driver' [open] =\"modalPhotoDocumentCompanyShow\" class=\"modal-cemex\" (cwcClose)=\"closeModalDocumentCompany()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Actualizar documento de la empresa</h2>\r\n  </header>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\" style=\"margin-bottom: 2rem\">\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">Tomar foto del documento</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraOne()\" style=\"margin-bottom: 0.5rem;\">\r\n\r\n          <ion-img class=\"img-photo-register\" *ngIf=\"photoFrontal.webviewPath\" [src]=\"photoFrontal.webviewPath\" style=\"object-fit: cover;\r\n          max-height: 175px !important;\"></ion-img>\r\n\r\n          <cwc-icon *ngIf=\"!photoFrontal.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n          <p *ngIf=\"!photoFrontal.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n      </div>\r\n      <div class=\"center-remove-photo-archive\">\r\n        <cwc-button (click)=\"removePhotoFrontal()\" *ngIf=\"photoFrontal.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n      </div>\r\n    </cwc-cell>\r\n    <!-- <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">2. Parte trasera de la cédula</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraTwo()\">\r\n\r\n        <ion-img class=\"img-photo-register\" *ngIf=\"photoBack.webviewPath\" [src]=\"photoBack.webviewPath\" style=\"object-fit: cover;\r\n        max-height: 175px !important;\"></ion-img>\r\n\r\n        <cwc-icon *ngIf=\"!photoBack.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n        <p *ngIf=\"!photoBack.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n    </div>\r\n    <cwc-button (click)=\"removePhotoBack()\" *ngIf=\"photoBack.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n    </cwc-cell> -->\r\n  </cwc-grid>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeModalDocumentCompany()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button *ngIf=\"photoFrontal.webviewPath\" variant='primary' (click)=\"savePhotoDocumentCompany()\">Actualizar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n\r\n";

/***/ }),

/***/ 64168:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/components/photo-identity-card/photo-identity-card.component.html?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-modal id='modal-photo-licence-driver' [open] =\"modalPhotoIdentityCardShow\" class=\"modal-cemex\" (cwcClose)=\"closeModalIdentityCard()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Actualizar cédula de ciudadanía</h2>\r\n  </header>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\" style=\"margin-bottom: 2rem\">\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">1. Parte frontal de la cédula</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraOne()\">\r\n\r\n          <ion-img class=\"img-photo-register\" *ngIf=\"photoFrontal.webviewPath\" [src]=\"photoFrontal.webviewPath\" style=\"object-fit: cover;\r\n          max-height: 175px !important;\"></ion-img>\r\n\r\n          <cwc-icon *ngIf=\"!photoFrontal.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n          <p *ngIf=\"!photoFrontal.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n      </div>\r\n      <cwc-button (click)=\"removePhotoFrontal()\" *ngIf=\"photoFrontal.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">2. Parte trasera de la cédula</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraTwo()\">\r\n\r\n        <ion-img class=\"img-photo-register\" *ngIf=\"photoBack.webviewPath\" [src]=\"photoBack.webviewPath\" style=\"object-fit: cover;\r\n        max-height: 175px !important;\"></ion-img>\r\n\r\n        <cwc-icon *ngIf=\"!photoBack.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n        <p *ngIf=\"!photoBack.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n    </div>\r\n    <cwc-button (click)=\"removePhotoBack()\" *ngIf=\"photoBack.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeModalIdentityCard()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button *ngIf=\"photoBack.webviewPath && photoFrontal.webviewPath\" variant='primary' (click)=\"savePhotoIdentityCard()\">Actualizar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n\r\n";

/***/ }),

/***/ 79161:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/components/photo-licence-document/photo-licence-document.component.html?ngResource ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-modal id='modal-photo-licence-driver' [open] =\"modalPhotoLinceShow\" class=\"modal-cemex\" (cwcClose)=\"closeModalLicence()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Actualizar licencia de conducción</h2>\r\n      <!--=====================================\r\n ALERTA CON MENSAJES DESDE EL SERVIDOR\r\n======================================-->\r\n<div style=\"margin-top: 1rem; margin-bottom: 1rem;\" *ngIf=\"errors\">\r\n  <cwc-alert variant=\"error\" [message]=\"errors\" keep-open></cwc-alert>\r\n</div> \r\n  </header>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\" style=\"margin-bottom: 2rem\">\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">1. Parte frontal de la licencia de conducción</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraOne()\">\r\n\r\n          <ion-img class=\"img-photo-register\" *ngIf=\"photoFrontal.webviewPath\" [src]=\"photoFrontal.webviewPath\" style=\"object-fit: cover;\r\n          max-height: 175px !important;\"></ion-img>\r\n\r\n          <cwc-icon *ngIf=\"!photoFrontal.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n          <p *ngIf=\"!photoFrontal.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n      </div>\r\n      <div class=\"center-remove-photo-archive\">\r\n        <cwc-button (click)=\"removePhotoFrontal()\" *ngIf=\"photoFrontal.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\" style=\"margin-top: 0.7rem;\">Quitar Foto</cwc-button>\r\n      </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">2. Parte trasera de la licencia de conducción</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraTwo()\">\r\n\r\n        <ion-img class=\"img-photo-register\" *ngIf=\"photoBack.webviewPath\" [src]=\"photoBack.webviewPath\" style=\"object-fit: cover;\r\n        max-height: 175px !important;\"></ion-img>\r\n\r\n        <cwc-icon *ngIf=\"!photoBack.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n        <p *ngIf=\"!photoBack.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n    </div>\r\n    <div class=\"center-remove-photo-archive\">\r\n      <cwc-button  (click)=\"removePhotoBack()\" *ngIf=\"photoBack.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\" style=\"margin-top: 0.7rem;\">Quitar Foto</cwc-button>\r\n    </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeModalLicence()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button *ngIf=\"photoBack.webviewPath && photoFrontal.webviewPath\" variant='primary' (click)=\"savePhotoLicence()\">Actualizar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>";

/***/ }),

/***/ 44710:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/components/photo-security-card/photo-security-card.component.html?ngResource ***!
  \****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-modal id='modal-photo-licence-driver' [open] =\"modalPhotoSecurityCardShow\" class=\"modal-cemex\" (cwcClose)=\"closeModalSecurityCard()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Actualizar carné de seguridad</h2>\r\n  </header>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\" style=\"margin-bottom: 2rem\">\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">Tomar foto del carné</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraOne()\" style=\"margin-bottom: 0.5rem;\">\r\n\r\n          <ion-img class=\"img-photo-register\" *ngIf=\"photoFrontal.webviewPath\" [src]=\"photoFrontal.webviewPath\" style=\"object-fit: cover;\r\n          max-height: 175px !important;\"></ion-img>\r\n\r\n          <cwc-icon *ngIf=\"!photoFrontal.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n          <p *ngIf=\"!photoFrontal.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n      </div>\r\n      <div class=\"center-remove-photo-archive\">\r\n        <cwc-button (click)=\"removePhotoFrontal()\" *ngIf=\"photoFrontal.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n      </div>\r\n    </cwc-cell>\r\n    <!-- <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n      <label for=\"\">2. Parte trasera de la cédula</label>\r\n      <div class=\"contend-upload-camera\" (click)=\"openCameraTwo()\">\r\n\r\n        <ion-img class=\"img-photo-register\" *ngIf=\"photoBack.webviewPath\" [src]=\"photoBack.webviewPath\" style=\"object-fit: cover;\r\n        max-height: 175px !important;\"></ion-img>\r\n\r\n        <cwc-icon *ngIf=\"!photoBack.webviewPath\" name=\"camera\" color=\"bright-blue\" size=\"30px\" style=\"margin-right: 1rem;\"></cwc-icon>\r\n        <p *ngIf=\"!photoBack.webviewPath\">Abrir cámara del dispositivo</p>\r\n\r\n    </div>\r\n    <cwc-button (click)=\"removePhotoBack()\" *ngIf=\"photoBack.webviewPath\" variant=\"link\" class=\"m-h-reg remove-photo-archive\">Quitar Foto</cwc-button>\r\n    </cwc-cell> -->\r\n  </cwc-grid>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeModalSecurityCard()\" style=\"margin-right: 1rem;\">Cancelar</cwc-button>\r\n          <cwc-button *ngIf=\"photoFrontal.webviewPath\" variant='primary' (click)=\"savePhotoSecurityCard()\">Actualizar</cwc-button>\r\n      </div>\r\n  </footer>\r\n</cwc-modal>\r\n\r\n\r\n";

/***/ }),

/***/ 61913:
/*!************************************************************************************!*\
  !*** ./src/app/pages/profile/update-archives/update-archives.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Actualizar documentos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<div slot=\"main\" class=\"content\">\r\n  <div class=\"content-title-register\">\r\n    <h6>Seleccione el documento que desea actualizar</h6>\r\n  </div>\r\n  <div>\r\n    <form [formGroup]=\"formTypeArchive\">\r\n        <cwc-radio-group ngDefaultControl formControlName=\"typeArchive\" required name='Required'\r\n            label='' style='min-width: 160px'  (cwcChange)=\"cwcChange($event)\">\r\n            <cwc-radio value='3' style=\"margin-bottom: 0.5rem;\">Cédula de Ciudadanía</cwc-radio><br>\r\n            <cwc-radio value='4' style=\"margin-bottom: 0.5rem;\" *ngIf=\"rol === 'AdminLogis'\">Documento Empresa</cwc-radio>\r\n            <cwc-radio value='1' style=\"margin-bottom: 0.5rem;\" *ngIf=\"rol !== 'AdminLogis'\">Licencia de Conducción</cwc-radio><br/>\r\n            <cwc-radio value='2' style=\"margin-bottom: 0.5rem;\" *ngIf=\"rol !== 'AdminLogis'\">Carné de Seguridad</cwc-radio><br/>\r\n        </cwc-radio-group>\r\n    </form>\r\n\r\n    <!--=====================================\r\n        ARCHIVO DE DOCUMENTO DE LA EMPERSA\r\n      ======================================-->\r\n      <div *ngIf=\"showFormDocumentCompany\">\r\n        <h6>Adjunte los archivos seleccionados</h6>\r\n        <label for=\"\">Documento de la empresa </label>\r\n          <div>\r\n            <cwc-grid class=\"demo-grid content-archive\" >\r\n              <cwc-cell (click)=\"openModalDocumentCompany()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n                <div class=\"item-archives\">\r\n                  <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n                  <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n                </div>\r\n              </cwc-cell>\r\n              <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n                <div class=\"item-archives\">\r\n                  <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n                  <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n                </div>\r\n              </cwc-cell>\r\n            </cwc-grid>\r\n          </div>\r\n          <app-photo-document-company\r\n          [modalPhotoDocumentCompanyShow]=\"openPhotoDocumentCompany\"\r\n          [getDataUser]=\"user\"\r\n          (closeModalArchiveDocumentCompany)=\"closeModalDocumentCompany($event)\"\r\n          (showLoading)=\"showLoading($event)\"\r\n          (hidenLoading)=\"hidenLoading($event)\"\r\n          (showAlertSuccess)=\"showAlertSuccess($event)\"\r\n          >\r\n        </app-photo-document-company>\r\n      </div>\r\n      <!--=====================================\r\n        ARCHIVO CARNE DE SEGURIDAD\r\n      ======================================-->\r\n      <div *ngIf=\"showFormCardSecurity\">\r\n        <h6>Adjunte los archivos seleccionados</h6>\r\n        <label for=\"\">Carné de seguridad industrial y vial</label>\r\n          <div>\r\n            <cwc-grid class=\"demo-grid content-archive\" >\r\n              <cwc-cell (click)=\"openModalPhotoSecurityCard()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n                <div class=\"item-archives\">\r\n                  <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n                  <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n                </div>\r\n              </cwc-cell>\r\n              <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n                <div class=\"item-archives\">\r\n                  <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n                  <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n                </div>\r\n              </cwc-cell>\r\n            </cwc-grid>\r\n          </div>\r\n          <app-photo-security-card\r\n          [modalPhotoSecurityCardShow]=\"openPhotoSecurityCard\"\r\n          [email]=\"user.user.email\"\r\n          (closeModalArchiveSecurityCard)=\"closeModalSecurityCard($event)\"\r\n          (showLoading)=\"showLoading($event)\"\r\n          (hidenLoading)=\"hidenLoading($event)\"\r\n          (showAlertSuccess)=\"showAlertSuccess($event)\"\r\n          >\r\n        </app-photo-security-card>\r\n      </div>\r\n        <!--=====================================\r\n        ARCHIVO DE LICENCIA DE CONDUCIR\r\n      ======================================-->\r\n      <div *ngIf=\"showFormLicence\">\r\n        <h6>Adjunte los archivos seleccionados</h6>\r\n        <label for=\"\">Licencia de conducir</label>\r\n          <div>\r\n            <cwc-grid class=\"demo-grid content-archive\" >\r\n              <cwc-cell (click)=\"openModalPhotoLicence()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n                <div class=\"item-archives\">\r\n                  <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n                  <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n                </div>\r\n              </cwc-cell>\r\n              <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n                <div class=\"item-archives\">\r\n                  <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n                  <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n                </div>\r\n              </cwc-cell>\r\n            </cwc-grid>\r\n          </div>\r\n          <app-photo-licence-document \r\n          [modalPhotoLinceShow]=\"openPhotoDrivingLicence\"\r\n          [email]=\"user.user.email\"\r\n          (closeModalArchiveLicence)=\"closeModalLicence($event)\"\r\n          (showLoading)=\"showLoading($event)\"\r\n          (hidenLoading)=\"hidenLoading($event)\"\r\n          (showAlertSuccess)=\"showAlertSuccess($event)\"\r\n          >\r\n        </app-photo-licence-document>\r\n      </div>\r\n      <!--=====================================\r\n        ARCHIVO DE CÉDULA DE CIUDADANÍA\r\n      ======================================-->\r\n      <div *ngIf=\"showFormIdentityCard\">\r\n        <h6>Adjunte los archivos seleccionados</h6>\r\n        <label for=\"\">Cédula de ciudadanía</label>\r\n          <div>\r\n            <cwc-grid class=\"demo-grid content-archive\" >\r\n              <cwc-cell (click)=\"openModalPhotoIdentityCard()\" class=\"border\" colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n                <div class=\"item-archives\">\r\n                  <cwc-icon name=\"camera\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n                  <h5 class=\"text-archive\">Tomar fotografía</h5>\r\n                </div>\r\n              </cwc-cell>\r\n              <cwc-cell colspan=\"6\" mobile-colspan=\"6\" style=\"cursor: pointer;\">\r\n                <div class=\"item-archives\">\r\n                  <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\r\n                  <h5 class=\"text-archive\">Seleccionar archivo</h5>\r\n                </div>\r\n              </cwc-cell>\r\n            </cwc-grid>\r\n          </div>\r\n          <app-photo-identity-card\r\n          [modalPhotoIdentityCardShow]=\"openPhotoIdentityCard\"\r\n          (closeModalArchiveIdentityCard)=\"closeModalIdentityCard($event)\"\r\n          (showLoading)=\"showLoading($event)\"\r\n          (hidenLoading)=\"hidenLoading($event)\"\r\n          (showAlertSuccess)=\"showAlertSuccess($event)\"\r\n          >\r\n          </app-photo-identity-card>\r\n      </div>\r\n  </div>\r\n</div>\r\n<!--=====================================\r\n\t\tALERTA SUBIO CORRECTAMENTE\r\n======================================-->\r\n<app-alert-success\r\n[alertShow] = \"alertSucces\"\r\ntitle = \"Existoso\" \r\nurlButton = \"/app/profile\"\r\ntextButton = \"Volver al perfil\"\r\nmessage = \"El archivo se actualizó correctamente\">\r\n</app-alert-success>\r\n<!--=====================================\r\n\t\tLOADING\r\n======================================-->\r\n<div class=\"loading-content\" *ngIf=\"loading\">\r\n  <cwc-loader>\r\n    <span slot='loading'>Espere un momento...</span>\r\n  </cwc-loader>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_profile_update-archives_update-archives_module_ts.js.map