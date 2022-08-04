"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 24509:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/profile/modal-document-company/document-company/document-company.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentCompanyComponent": () => (/* binding */ DocumentCompanyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _document_company_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-company.component.html?ngResource */ 1371);
/* harmony import */ var _document_company_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-company.component.scss?ngResource */ 66771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let DocumentCompanyComponent = class DocumentCompanyComponent {
    constructor() {
        this.urlDocumentCompanyFrontal = String;
        this.closeModalDocumentCompany = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    closeModalDocumentModalApp() {
        this.closeModalDocumentCompany.emit();
    }
};
DocumentCompanyComponent.ctorParameters = () => [];
DocumentCompanyComponent.propDecorators = {
    urlDocumentCompanyFrontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    showModalArchiveDocumentCompany: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    closeModalDocumentCompany: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
DocumentCompanyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-document-company',
        template: _document_company_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_document_company_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DocumentCompanyComponent);



/***/ }),

/***/ 88950:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/modal-document-driving-licence/document-driving-licence/document-driving-licence.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentDrivingLicenceComponent": () => (/* binding */ DocumentDrivingLicenceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _document_driving_licence_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-driving-licence.component.html?ngResource */ 59126);
/* harmony import */ var _document_driving_licence_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-driving-licence.component.scss?ngResource */ 67504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let DocumentDrivingLicenceComponent = class DocumentDrivingLicenceComponent {
    constructor() {
        this.urlLicenceFrontal = String;
        this.urlLicenceBack = String;
        this.closeModalLicence = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    closeModalDrivingLicence() {
        this.closeModalLicence.emit();
    }
};
DocumentDrivingLicenceComponent.ctorParameters = () => [];
DocumentDrivingLicenceComponent.propDecorators = {
    urlLicenceFrontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    urlLicenceBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    showModalDrivingLicence: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    closeModalLicence: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
DocumentDrivingLicenceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-document-driving-licence',
        template: _document_driving_licence_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_document_driving_licence_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DocumentDrivingLicenceComponent);



/***/ }),

/***/ 51631:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/profile/modal-document-identity-card/document-identity-card/document-identity-card.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentIdentityCardComponent": () => (/* binding */ DocumentIdentityCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _document_identity_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-identity-card.component.html?ngResource */ 70149);
/* harmony import */ var _document_identity_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-identity-card.component.scss?ngResource */ 68662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let DocumentIdentityCardComponent = class DocumentIdentityCardComponent {
    constructor() {
        this.urlIdentityCardFrontal = String;
        this.urlIdentityCardBack = String;
        this.closeModalIdentity = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    closeModalIdentityCard() {
        this.closeModalIdentity.emit();
    }
};
DocumentIdentityCardComponent.ctorParameters = () => [];
DocumentIdentityCardComponent.propDecorators = {
    urlIdentityCardFrontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    urlIdentityCardBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    showModalIdentityCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    closeModalIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
DocumentIdentityCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-document-identity-card',
        template: _document_identity_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_document_identity_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DocumentIdentityCardComponent);



/***/ }),

/***/ 3828:
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/profile/modal-security-card/document-security-card/document-security-card.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentSecurityCardComponent": () => (/* binding */ DocumentSecurityCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _document_security_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-security-card.component.html?ngResource */ 86174);
/* harmony import */ var _document_security_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-security-card.component.scss?ngResource */ 93259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let DocumentSecurityCardComponent = class DocumentSecurityCardComponent {
    constructor() {
        this.urlSecurityCardFrontal = String;
        this.closeModalSecurityCard = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    closeModalDocumentModalApp() {
        this.closeModalSecurityCard.emit();
    }
};
DocumentSecurityCardComponent.ctorParameters = () => [];
DocumentSecurityCardComponent.propDecorators = {
    urlSecurityCardFrontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    showModalArchiveSecurityCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    closeModalSecurityCard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
DocumentSecurityCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-document-security-card',
        template: _document_security_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_document_security_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DocumentSecurityCardComponent);



/***/ }),

/***/ 41474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 64629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    },
    {
        path: 'update-archives',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_convert-photo-camera_convert-photo-camera_service_ts-node_modules_ca-b1e384"), __webpack_require__.e("src_app_pages_profile_update-archives_update-archives_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./update-archives/update-archives.module */ 56769)).then(m => m.UpdateArchivesPageModule)
    },
    {
        path: 'edit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_profile_edit_edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit/edit.module */ 84780)).then(m => m.EditPageModule)
    },
    {
        path: 'edit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_profile_edit_edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit/edit.module */ 84780)).then(m => m.EditPageModule)
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 88558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 41474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 64629);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _modal_document_identity_card_document_identity_card_document_identity_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-document-identity-card/document-identity-card/document-identity-card.component */ 51631);
/* harmony import */ var _modal_document_driving_licence_document_driving_licence_document_driving_licence_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-document-driving-licence/document-driving-licence/document-driving-licence.component */ 88950);
/* harmony import */ var _modal_document_company_document_company_document_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-document-company/document-company/document-company.component */ 24509);
/* harmony import */ var _modal_security_card_document_security_card_document_security_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-security-card/document-security-card/document-security-card.component */ 3828);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/layout.module */ 93077);









// eslint-disable-next-line max-len




let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__.LayoutPageModule
        ],
        declarations: [
            _profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage,
            _modal_document_company_document_company_document_company_component__WEBPACK_IMPORTED_MODULE_5__.DocumentCompanyComponent,
            _modal_document_identity_card_document_identity_card_document_identity_card_component__WEBPACK_IMPORTED_MODULE_3__.DocumentIdentityCardComponent,
            _modal_document_driving_licence_document_driving_licence_document_driving_licence_component__WEBPACK_IMPORTED_MODULE_4__.DocumentDrivingLicenceComponent,
            _modal_security_card_document_security_card_document_security_card_component__WEBPACK_IMPORTED_MODULE_6__.DocumentSecurityCardComponent,
        ]
    })
], ProfilePageModule);



/***/ }),

/***/ 64629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 67364);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 62581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_app_models_profile_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/profile.model */ 22574);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/login.service */ 52876);
/* harmony import */ var _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/companies/companies.service */ 46605);



/* eslint-disable @typescript-eslint/no-unused-expressions */






let ProfilePage = class ProfilePage {
    constructor(router, loginService, companiesService) {
        this.router = router;
        this.loginService = loginService;
        this.companiesService = companiesService;
        this.profile = new src_app_models_profile_model__WEBPACK_IMPORTED_MODULE_2__.Profile();
        this.showModalArchiveDocumentCompany = false;
        this.showModalIndentityCard = false;
        this.showModalLicence = false;
        this.showModalSecurityCardApp = false;
        this.loading = false;
        this.titleSubs = this.getTitleRuote().subscribe(event => {
            if (event === '/app/profile') {
                this.loading = true;
                this.profile = this.loginService.profileUser;
                this.loading = false;
            }
        });
    }
    ngOnDestroy() {
        this.titleSubs.unsubscribe();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            this.profile = this.loginService.profileUser;
            this.companiesService.getCompany(this.profile.CompanyId).subscribe(data => {
                this.profile.CompanyName = data.data.datacompanyName;
                this.loading = false;
            });
            //this.getDataUserProfile();
        });
    }
    getTitleRuote() {
        return this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((event) => event.snapshot.firstChild === null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((event) => event.snapshot['_routerState'].url));
    }
    /*
    async getDataUserProfile(){
      let urlactual = '';
      this.loading = true;
      await this.profileService.getDataUser(this.user.email).subscribe(async resp=>{
        const rol =  resp.roles.map(item =>  item);
        this.user.firstName = resp.user.firstName;
        this.user.lastName = resp.user.lastName;
        this.user.document = resp.user.document;
        this.user.roles = rol.toString();
        this.user.documentIdentityCardFrontal = resp.user.documentIdentityCardFrontal;
        this.user.documentIdentityCardBack = resp.user.documentIdentityCardBack;
  
        this.user.driver.codeSap = resp.codeSap;
        this.user.driver.documentDrivinglicenseFrontal = resp.documentDrivinglicenseFrontal;
        this.user.driver.documentDrivinglicenseBack = resp.documentDrivinglicenseBack;
        this.user.driver.documentSecurityCard = resp.documentSecurityCard;
  
        this.user.company.companyName = resp.companyName;
        this.user.company.documentCompany = resp.documentCompany;
  
        this.loading = false;
     }, error =>{
        this.loading = false;
     });
        urlactual = this.user.driver.documentDrivinglicenseFrontal;
    }*/
    showModalIndentity() {
        if (this.profile.DocumentIdentityCard) {
            this.showModalIndentityCard = true;
        }
    }
    showModalDocumentCompany() {
        if (this.profile.SapCode) {
            this.showModalArchiveDocumentCompany = true;
        }
    }
    showModalDrivingLicence() {
        if (this.profile.Drivinglicense) {
            this.showModalLicence = true;
        }
    }
    showModalSecurityCard() {
        if (this.profile.SecurityCard) {
            this.showModalSecurityCardApp = true;
        }
    }
    closeModalIdentity() {
        this.showModalIndentityCard = false;
    }
    closeModalLicence() {
        this.showModalLicence = false;
    }
    closeModalDocumentCompany() {
        this.showModalArchiveDocumentCompany = false;
    }
    closeModalSecurityCard() {
        this.showModalSecurityCardApp = false;
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService },
    { type: _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__.CompaniesService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 66771:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/profile/modal-document-company/document-company/document-company.component.scss?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC1jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 67504:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/modal-document-driving-licence/document-driving-licence/document-driving-licence.component.scss?ngResource ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC1kcml2aW5nLWxpY2VuY2UuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 68662:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/modal-document-identity-card/document-identity-card/document-identity-card.component.scss?ngResource ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC1pZGVudGl0eS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 93259:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/modal-security-card/document-security-card/document-security-card.component.scss?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC1zZWN1cml0eS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 62581:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".card-size {\n  padding: 0;\n}\n\nspan.number-phone {\n  padding-left: 8px;\n  padding-right: 10px;\n}\n\nspan.style-name {\n  margin-left: 0.2rem;\n  font-size: small;\n  font-weight: 700;\n}\n\n.attr-user {\n  font-size: x-small;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.attr-document {\n  font-size: smaller;\n  font-weight: 700;\n  padding-bottom: 0.5rem;\n}\n\n.center-cell {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.text-info {\n  font-size: small;\n}\n\nspan.text-archive {\n  font-size: small;\n  color: black;\n}\n\n.cell-button {\n  padding-top: 2rem;\n  text-align: right;\n}\n\n.button-cell {\n  font-size: small;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBREoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zaXple1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcbnNwYW4ubnVtYmVyLXBob25lIHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuc3Bhbi5zdHlsZS1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmF0dHItdXNlciB7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmF0dHItZG9jdW1lbnQge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jZW50ZXItY2VsbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi50ZXh0LWluZm97XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5zcGFuLnRleHQtYXJjaGl2ZXtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jZWxsLWJ1dHRvbntcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBcclxufVxyXG5cclxuLmJ1dHRvbi1jZWxse1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59Il19 */";

/***/ }),

/***/ 1371:
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/profile/modal-document-company/document-company/document-company.component.html?ngResource ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-modal id='modal-show-document-identity' [open] =\"showModalArchiveDocumentCompany\" class=\"modal-cemex\" (cwcClose)=\"closeModalDocumentModalApp()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Documento de la empresa</h2>\r\n  </header>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\" style=\"margin-bottom: 2rem\">\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n       <label for=\"\">Documento</label>\r\n        <div class=\"contend-upload-camera\">\r\n          <ion-img class=\"img-photo-register\" [src]=\"urlDocumentCompanyFrontal\" style=\"object-fit: cover; max-height: 175px !important;\"></ion-img>\r\n        </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n  <!--=====================================\r\n\t\tCONTENEDOR SI HAY UN ERROR O NO HAY ARCHIVOS\r\n======================================-->\r\n<div style=\"width: 100%;\" *ngIf=\"!urlDocumentCompanyFrontal\">\r\n  <div class=\"p-all-reg\" style=\"background: #F4F6F9\">\r\n    <cwc-empty-result header=\"Error al mostra el documento\" icon=\"error-rounded-fill\">\r\n        Parece que no tiene registrado el documento de la empresa. Por favor consulte a <a [routerLink]=\"['/help']\" routerLinkActive=\"router-link-active\" >ayuda</a> de Cemex.\r\n    </cwc-empty-result>\r\n  </div>\r\n</div>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeModalDocumentModalApp()\" style=\"margin-right: 1rem;\">Cerrar</cwc-button>\r\n        <!-- <cwc-button variant='primary'>Editar</cwc-button> -->\r\n      </div>\r\n  </footer>\r\n</cwc-modal>";

/***/ }),

/***/ 59126:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/modal-document-driving-licence/document-driving-licence/document-driving-licence.component.html?ngResource ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-modal id='modal-show-document-identity' [open] =\"showModalDrivingLicence\" class=\"modal-cemex\" (cwcClose)=\"closeModalDrivingLicence()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Licencia de Conducción</h2>\r\n  </header>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\" style=\"margin-bottom: 2rem\">\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n       <label for=\"\">1. Parte frontal de la licencia de conducción</label>\r\n        <div class=\"contend-upload-camera\">\r\n          <ion-img class=\"img-photo-register\" [src]=\"urlLicenceFrontal\" style=\"object-fit: cover; max-height: 175px !important;\"></ion-img>\r\n        </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 0.5rem;\">\r\n      <label for=\"\">2. Parte trasera de la licencia de conducción</label>\r\n       <div class=\"contend-upload-camera\">\r\n         <ion-img class=\"img-photo-register\" [src]=\"urlLicenceBack\" style=\"object-fit: cover; max-height: 175px !important;\"></ion-img>\r\n       </div>\r\n   </cwc-cell>\r\n  </cwc-grid>\r\n  <!--=====================================\r\n\t\tCONTENEDOR SI HAY UN ERROR O NO HAY ARCHIVOS\r\n======================================-->\r\n<div style=\"width: 100%;\" *ngIf=\"!urlLicenceFrontal && !urlLicenceBack\">\r\n  <div class=\"p-all-reg\" style=\"background: #F4F6F9\">\r\n    <cwc-empty-result header=\"Error al mostra el documento\" icon=\"error-rounded-fill\">\r\n        Parece que no tiene registrado el archivo de la licencia de conducción.\r\n        Por favor consulte con el administrador o <a [routerLink]=\"['/help']\" routerLinkActive=\"router-link-active\" >ayuda</a> de Cemex.\r\n    </cwc-empty-result>\r\n  </div>\r\n</div>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeModalDrivingLicence()\" style=\"margin-right: 1rem;\">Cerrar</cwc-button>\r\n        <!-- <cwc-button variant='primary'>Editar</cwc-button> -->\r\n      </div>\r\n  </footer>\r\n</cwc-modal>";

/***/ }),

/***/ 70149:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/modal-document-identity-card/document-identity-card/document-identity-card.component.html?ngResource ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-modal id='modal-show-document-identity' [open] =\"showModalIdentityCard\" class=\"modal-cemex\" (cwcClose)=\"closeModalIdentityCard()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Cédula de Ciudadanía</h2>\r\n  </header>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\" style=\"margin-bottom: 2rem\">\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n       <label for=\"\">1. Parte frontal de la cédula</label>\r\n        <div class=\"contend-upload-camera\">\r\n          <ion-img class=\"img-photo-register\" [src]=\"urlIdentityCardFrontal\" style=\"object-fit: cover; max-height: 175px !important;\"></ion-img>\r\n        </div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 0.5rem;\">\r\n      <label for=\"\">2. Parte trasera de la cédula</label>\r\n       <div class=\"contend-upload-camera\">\r\n         <ion-img class=\"img-photo-register\" [src]=\"urlIdentityCardBack\" style=\"object-fit: cover; max-height: 175px !important;\"></ion-img>\r\n       </div>\r\n   </cwc-cell>\r\n  </cwc-grid>\r\n  <!--=====================================\r\n\t\tCONTENEDOR SI HAY UN ERROR O NO HAY ARCHIVOS\r\n======================================-->\r\n<div style=\"width: 100%;\" *ngIf=\"!urlIdentityCardFrontal && !urlIdentityCardBack\">\r\n  <div class=\"p-all-reg\" style=\"background: #F4F6F9\">\r\n    <cwc-empty-result header=\"Error al mostra el documento\" icon=\"error-rounded-fill\">\r\n        Parece que no tiene registrado el archivo de la cédula de ciudadanía.\r\n        Por favor consulte con el administrador o <a [routerLink]=\"['/help']\" routerLinkActive=\"router-link-active\" >ayuda</a> de Cemex.\r\n    </cwc-empty-result>\r\n  </div>\r\n</div>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeModalIdentityCard()\" style=\"margin-right: 1rem;\">Cerrar</cwc-button>\r\n        <!-- <cwc-button variant='primary'>Editar</cwc-button> -->\r\n      </div>\r\n  </footer>\r\n</cwc-modal>";

/***/ }),

/***/ 86174:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/profile/modal-security-card/document-security-card/document-security-card.component.html?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-modal id='modal-show-security-card' [open] =\"showModalArchiveSecurityCard\" class=\"modal-cemex\" (cwcClose)=\"closeModalDocumentModalApp()\">\r\n  <header slot='header'>\r\n      <h2 style='margin:0;'>Carné de seguridad industrial y vial</h2>\r\n  </header>\r\n  <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 2rem;\" style=\"margin-bottom: 2rem\">\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\" style=\"cursor: pointer; margin-top: 1rem;\">\r\n       <label for=\"\">Carné de seguridad</label>\r\n        <div class=\"contend-upload-camera\">\r\n          <ion-img class=\"img-photo-register\" [src]=\"urlSecurityCardFrontal\" style=\"object-fit: cover; max-height: 175px !important;\"></ion-img>\r\n        </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n  <!--=====================================\r\n\t\tCONTENEDOR SI HAY UN ERROR O NO HAY ARCHIVOS\r\n======================================-->\r\n<div style=\"width: 100%;\" *ngIf=\"!urlSecurityCardFrontal\">\r\n  <div class=\"p-all-reg\" style=\"background: #F4F6F9\">\r\n    <cwc-empty-result header=\"Error al mostra el documento\" icon=\"error-rounded-fill\">\r\n        Parece que no tiene registrado el documento de la empresa. Por favor consulte a <a [routerLink]=\"['/help']\" routerLinkActive=\"router-link-active\" >ayuda</a> de Cemex.\r\n    </cwc-empty-result>\r\n  </div>\r\n</div>\r\n  <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n        <cwc-button variant='support' (click)=\"closeModalDocumentModalApp()\" style=\"margin-right: 1rem;\">Cerrar</cwc-button>\r\n        <!-- <cwc-button variant='primary'>Editar</cwc-button> -->\r\n      </div>\r\n  </footer>\r\n</cwc-modal>";

/***/ }),

/***/ 67364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<app-layout class=\"card-size\">\r\n  <cwc-card class=\"m-all-xs\">\r\n        <div class=\"card-content\">\r\n          <div class=\"content-avatar-menu\" style=\"margin-left: 0.2rem; margin-right: 0.1rem; display: flex; justify-content: space-between;\">\r\n            <div style=\"display: flex;\">\r\n              <div>\r\n                <cwc-avatar size=\"small\" variant=\"negative\" [name]=\" profile.FirstName +' '+ profile.LastName \" class=\"m-h-xs\" style=\"width: 6%; padding: 1.3rem\"></cwc-avatar>\r\n              </div>\r\n              <div>\r\n                  <span class=\"style-name\">{{profile.FirstName +' '+ profile.LastName}}</span>\r\n                  <br>\r\n                  <cwc-icon name=\"phone\" size=\"14px\" color=\"true-black\">\r\n                  </cwc-icon>\r\n                  <span class=\"number-phone\">{{profile.PhoneNumber}}</span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <cwc-button variant=\"link\" class=\"m-h-reg link-cwc\" [routerLink]=\"['/app/edit']\" routerLinkActive=\"router-link-active\" >EDITAR</cwc-button>\r\n            </div>\r\n          </div>\r\n\r\n          <div>\r\n\r\n            <cwc-grid style=\"padding-top: 1rem; padding-bottom: 1rem;\">\r\n              <cwc-cell mobile-colspan=\"12\">   \r\n                <cwc-icon name='check-rounded-active-fill' size=\"12px\" color='bright-green'></cwc-icon>\r\n                <span class=\"text-archive\">Disponible</span>\r\n              </cwc-cell>\r\n            </cwc-grid>\r\n\r\n            <cwc-grid class=\"demo-grid\" >\r\n              <cwc-cell colspan=\"12\" mobile-colspan=\"12\">   \r\n                  <div class=\"attr-user\">Correo electrónico</div>\r\n                  <span class=\"text-info\">{{profile.Email}}</span>\r\n              </cwc-cell>\r\n            </cwc-grid>\r\n\r\n            <div *ngIf=\"profile.Roles === 'Conductor'\">\r\n              <cwc-grid class=\"demo-grid center-cell\" >\r\n                <cwc-cell mobile-colspan=\"4\">\r\n                    <div class=\"attr-user\">Código Sap</div>\r\n                    <span class=\"text-info\">{{profile.SapCode}}</span>\r\n                </cwc-cell>\r\n                <cwc-cell mobile-colspan=\"5\">   \r\n                    <div class=\"attr-user\">Cédula o NIT</div>\r\n                    <span class=\"text-info\">{{profile.Document}}</span>\r\n                </cwc-cell>\r\n              </cwc-grid>\r\n            </div>\r\n            \r\n\r\n            <cwc-grid class=\"demo-grid center-cell\" >\r\n              <cwc-cell colspan=\"12\" mobile-colspan=\"12\">   \r\n                  <div class=\"attr-user\">Empresa</div>\r\n                  <span class=\"text-info\">{{profile.CompanyName}}</span>\r\n              </cwc-cell>\r\n            </cwc-grid>\r\n          </div>\r\n          \r\n          <div class=\"attr-document\" >Documentación</div>\r\n          <div style=\" border: 0.1px solid #d1d1d1; background: #d1d1d1; margin-bottom: 0.5rem;\"></div>\r\n\r\n          <cwc-grid column-gap=\"5px\">\r\n            <cwc-cell mobile-colspan=\"6\">   \r\n              <cwc-icon name='check-rounded-active-fill' size=\"12px\" color='bright-green'></cwc-icon>\r\n              <span class=\"text-archive\">Licencia de conducción</span>\r\n            </cwc-cell>\r\n            <cwc-cell mobile-colspan=\"6\">   \r\n              <cwc-icon name='check-rounded-active-fill' size=\"12px\" color='bright-green'></cwc-icon>\r\n              <span class=\"text-archive\">Cédula de ciudadanía</span>\r\n            </cwc-cell>\r\n          </cwc-grid>\r\n          <cwc-grid>\r\n            <cwc-cell mobile-colspan=\"12\">   \r\n              <cwc-icon name='check-rounded-active-fill' size=\"12px\" color='bright-green'></cwc-icon>\r\n              <span class=\"text-archive\">Carné de seguridad</span>\r\n            </cwc-cell>\r\n          </cwc-grid>\r\n          <cwc-grid>\r\n            <cwc-cell mobile-colspan=\"12\" class=\"cell-button\">        \r\n              <cwc-button (click)=\"updateDocumentsUser()\" variant=\"link\" class=\"m-h-reg link-cwc\">ACTUALIZAR DOCUMENTOS</cwc-button>\r\n              </cwc-cell>\r\n          </cwc-grid>\r\n        </div>\r\n    </cwc-card>\r\n    <cwc-card class=\"m-all-xs\" style=\"margin-top: 1rem;\">\r\n      <div class=\"card-content\">\r\n       <h6 style=\"text-align: center;\">Accede a tu cuenta Clever</h6>\r\n       <p style=\"text-align: center;\">Revisa tus datos y manten tu perfil actualizado para un mejor seguimiento</p>\r\n       <div>\r\n        <cwc-button variant=\"regular-block\">CLEVER GLOBAL</cwc-button>\r\n       </div>\r\n      </div>\r\n    </cwc-card>\r\n</app-layout>\r\n<!--=====================================\r\n\t\tLOADING\r\n======================================-->\r\n<div class=\"loading-content\" *ngIf=\"loading\">\r\n  <cwc-loader>\r\n    <span slot='loading'>Espere un momento...</span>\r\n  </cwc-loader>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map