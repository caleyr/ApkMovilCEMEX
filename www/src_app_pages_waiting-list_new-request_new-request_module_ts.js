"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_waiting-list_new-request_new-request_module_ts"],{

/***/ 99323:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/waiting-list/new-request/components/request-admin-new/request-admin-new.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestAdminNewComponent": () => (/* binding */ RequestAdminNewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _request_admin_new_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-admin-new.component.html?ngResource */ 3321);
/* harmony import */ var _request_admin_new_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-admin-new.component.scss?ngResource */ 68261);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/auth/login.service */ 52876);
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../services/drivers.service */ 50774);
/* harmony import */ var _services_vehicles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../services/vehicles.service */ 66817);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/request.service */ 79854);










let RequestAdminNewComponent = class RequestAdminNewComponent {
    constructor(vehiclesService, driversService, loginService, formBuilder, requestService, navCtrl) {
        this.vehiclesService = vehiclesService;
        this.driversService = driversService;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.requestService = requestService;
        this.navCtrl = navCtrl;
        this.sourceList = [];
        this.departamentList = [];
        this.dateList = [];
        this.timeList = [];
        this.geocoder = null;
        this.data = new FormData();
        this.alertShow = false;
        this.buttonActivate = false;
    }
    ngOnInit() {
        this.formBuilderInput();
        this.loadGoogle();
        this.getListVehicles();
        this.getListDrivers();
    }
    getStatusField(field) {
        if (this.form.controls[field].errors && this.form.controls[field].touched)
            return 'error';
        return 'regular';
    }
    getMsgField(field, nameField) {
        let msgError = '';
        if (this.form.controls[field].errors && this.form.controls[field].touched) {
            msgError = `El campo ${nameField} es requerido.`;
        }
        return msgError;
    }
    formBuilderInput() {
        this.form = this.formBuilder.group({
            Origen: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            Destino: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            TimerStar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            TimerEnd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            DateTravels: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            DriverId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            VehicleId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            StatusRequest: ['1'],
            TravelsCode: ['1'],
            CodeRequest: ['1'],
            DepartamentSource: [''],
            DepartamentDestiny: ['']
        });
    }
    loadGoogle() {
        this.geocoder = new google.maps.Geocoder();
    }
    goMyRequest() {
        this.navCtrl.back();
    }
    getListVehicles() {
        this.vehiclesService.getVehicleList(this.loginService.profileUser.CompanyId).subscribe(data => {
            this.vehicleList = data.data;
        });
    }
    getListDrivers() {
        this.driversService.getDriverList(this.loginService.profileUser.CompanyId).subscribe(data => {
            this.driverList = data.data;
        });
    }
    codificacion(direccionText, tipo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                this.geocoder.geocode({
                    address: direccionText
                }).then((result) => {
                    const { results } = result;
                    if (tipo === 'Origen') {
                        this.form.get('DepartamentSource').setValue(results[0].address_components[2].long_name);
                        resolve(result);
                    }
                    else {
                        this.form.get('DepartamentDestiny').setValue(results[0].address_components[2].long_name);
                        resolve(result);
                    }
                }).catch((e) => {
                    console.log(e);
                });
            });
        });
    }
    changTimeStar(event) {
        this.form.get('TimerStar').setValue(`${event.detail.hours}:${event.detail.minutes}`);
    }
    changeTimeEnd(event) {
        this.form.get('TimerEnd').setValue(`${event.detail.hours}:${event.detail.minutes}`);
    }
    changeDateTime(event) {
        this.form.get('DateTravels').setValue(`${event.detail.getDate()}-${event.detail.getMonth()}-${event.detail.getMonth()}`);
    }
    changeDriverId(event) {
        this.form.get('DriverId').setValue(event.detail.value);
    }
    changeVehicleId(event) {
        this.form.get('VehicleId').setValue(event.detail.value);
    }
    searchTrips() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                this.form.markAllAsTouched();
                return;
            }
            yield this.codificacion(this.getOrigin(), 'Origen');
            yield this.codificacion(this.getDestino(), 'Destino');
            this.addFormData(this.form.value);
            this.requestService.createRequest(this.data).subscribe(() => {
                this.alertShow = true;
            }, (error) => {
                this.goMyRequest();
            });
        });
    }
    addFormData(objeto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            for (var key in objeto) {
                this.data.append(key, objeto[key]);
            }
        });
    }
    getOrigin() {
        return this.form.get('Origen').value;
    }
    getDestino() {
        return this.form.get('Destino').value;
    }
};
RequestAdminNewComponent.ctorParameters = () => [
    { type: _services_vehicles_service__WEBPACK_IMPORTED_MODULE_4__.VehiclesService },
    { type: _services_drivers_service__WEBPACK_IMPORTED_MODULE_3__.DriversService },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController }
];
RequestAdminNewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-request-admin-new',
        template: _request_admin_new_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_request_admin_new_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RequestAdminNewComponent);



/***/ }),

/***/ 72172:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/waiting-list/new-request/components/request-drive-new/request-drive-new.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestDriveNewComponent": () => (/* binding */ RequestDriveNewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _request_drive_new_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-drive-new.component.html?ngResource */ 83867);
/* harmony import */ var _request_drive_new_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-drive-new.component.scss?ngResource */ 2934);
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../services/drivers.service */ 50774);
/* harmony import */ var src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/login.service */ 52876);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../services/request.service */ 79854);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);









let RequestDriveNewComponent = class RequestDriveNewComponent {
    constructor(formBuilder, requestService, navCtrl, driverS, loginS) {
        this.formBuilder = formBuilder;
        this.requestService = requestService;
        this.navCtrl = navCtrl;
        this.driverS = driverS;
        this.loginS = loginS;
        this.geocoder = null;
        this.data = new FormData();
        this.loading = false;
        this.buttonActivate = false;
        this.alertShow = false;
    }
    ngOnInit() {
        this.formBuilderInput();
        this.loadGoogle();
        this.getDataUser();
    }
    getDataUser() {
        this.id = this.loginS.profileUser.id;
        this.driverS.getDriverById(this.id).subscribe(data => {
            this.form.get('DriverId').setValue(this.id);
            this.form.get('VehicleId').setValue(data.data.lisenseVehicle);
        });
    }
    getStatusField(field) {
        if (this.form.controls[field].errors && this.form.controls[field].touched)
            return 'error';
        return 'regular';
    }
    getMsgField(field, nameField) {
        let msgError = '';
        if (this.form.controls[field].errors && this.form.controls[field].touched) {
            msgError = `El campo ${nameField} es requerido.`;
        }
        return msgError;
    }
    formBuilderInput() {
        this.form = this.formBuilder.group({
            Origen: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            Destino: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            TimerStar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            TimerEnd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            DateTravels: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            DriverId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            VehicleId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            StatusRequest: ['1'],
            TravelsCode: ['1'],
            CodeRequest: ['1'],
            DepartamentSource: [''],
            DepartamentDestiny: ['']
        });
    }
    loadGoogle() {
        this.geocoder = new google.maps.Geocoder();
    }
    goMyRequest() {
        this.navCtrl.back();
    }
    changTimeStar(event) {
        this.form.get('TimerStar').setValue(`${event.detail.hours}:${event.detail.minutes}`);
    }
    changeTimeEnd(event) {
        this.form.get('TimerEnd').setValue(`${event.detail.hours}:${event.detail.minutes}`);
    }
    changeDateTime(event) {
        this.form.get('DateTravels').setValue(`${event.detail.getDate()}-${event.detail.getMonth()}-${event.detail.getMonth()}`);
    }
    codificacion(direccionText, tipo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                this.geocoder.geocode({
                    address: direccionText
                }).then((result) => {
                    const { results } = result;
                    if (tipo === 'Origen') {
                        this.form.get('DepartamentSource').setValue(results[0].address_components[2].long_name);
                        resolve(result);
                    }
                    else {
                        this.form.get('DepartamentDestiny').setValue(results[0].address_components[2].long_name);
                        resolve(result);
                    }
                }).catch((e) => {
                    console.log(e);
                });
            });
        });
    }
    searchTrips() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.form.invalid) {
                this.form.markAllAsTouched();
                return;
            }
            yield this.codificacion(this.getOrigin(), 'Origen');
            yield this.codificacion(this.getDestino(), 'Destino');
            this.addFormData(this.form.value);
            this.requestService.createRequest(this.data).subscribe(() => {
                this.alertShow = true;
            }, (error) => {
                this.goMyRequest();
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
    getOrigin() {
        return this.form.get('Origen').value;
    }
    getDestino() {
        return this.form.get('Destino').value;
    }
};
RequestDriveNewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _services_drivers_service__WEBPACK_IMPORTED_MODULE_2__.DriversService },
    { type: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService }
];
RequestDriveNewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-request-drive-new',
        template: _request_drive_new_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_request_drive_new_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RequestDriveNewComponent);



/***/ }),

/***/ 90073:
/*!******************************************************************************!*\
  !*** ./src/app/pages/waiting-list/new-request/new-request-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewRequestPageRoutingModule": () => (/* binding */ NewRequestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _new_request_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-request.page */ 21814);




const routes = [
    {
        path: '',
        component: _new_request_page__WEBPACK_IMPORTED_MODULE_0__.NewRequestPage
    }
];
let NewRequestPageRoutingModule = class NewRequestPageRoutingModule {
};
NewRequestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewRequestPageRoutingModule);



/***/ }),

/***/ 13846:
/*!**********************************************************************!*\
  !*** ./src/app/pages/waiting-list/new-request/new-request.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewRequestPageModule": () => (/* binding */ NewRequestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../layout/layout.module */ 93077);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);
/* harmony import */ var _components_request_drive_new_request_drive_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/request-drive-new/request-drive-new.component */ 72172);
/* harmony import */ var _components_request_admin_new_request_admin_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/request-admin-new/request-admin-new.component */ 99323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _new_request_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-request-routing.module */ 90073);
/* harmony import */ var _new_request_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-request.page */ 21814);











let NewRequestPageModule = class NewRequestPageModule {
};
NewRequestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _new_request_routing_module__WEBPACK_IMPORTED_MODULE_4__.NewRequestPageRoutingModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_1__.CmxWebComponentsModule.forRoot(),
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutPageModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule
        ],
        declarations: [_new_request_page__WEBPACK_IMPORTED_MODULE_5__.NewRequestPage,
            _components_request_admin_new_request_admin_new_component__WEBPACK_IMPORTED_MODULE_3__.RequestAdminNewComponent,
            _components_request_drive_new_request_drive_new_component__WEBPACK_IMPORTED_MODULE_2__.RequestDriveNewComponent]
    })
], NewRequestPageModule);



/***/ }),

/***/ 21814:
/*!********************************************************************!*\
  !*** ./src/app/pages/waiting-list/new-request/new-request.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewRequestPage": () => (/* binding */ NewRequestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_request_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-request.page.html?ngResource */ 43483);
/* harmony import */ var _new_request_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-request.page.scss?ngResource */ 98651);
/* harmony import */ var src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/login.service */ 52876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let NewRequestPage = class NewRequestPage {
    constructor(loginService, navCtrl) {
        this.loginService = loginService;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.rol = this.loginService.profileUser.Roles;
    }
    onBack() {
        this.navCtrl.back();
    }
};
NewRequestPage.ctorParameters = () => [
    { type: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
NewRequestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-new-request',
        template: _new_request_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_request_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewRequestPage);



/***/ }),

/***/ 68261:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/waiting-list/new-request/components/request-admin-new/request-admin-new.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".content-card {\n  padding-top: 0.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n.content-title {\n  padding-top: 1rem;\n  font-weight: 700;\n}\n\n.content-grid-register {\n  overflow: auto;\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtYWRtaW4tbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBRUksY0FBQTtFQUNBLGtDQUFBO0FBQUoiLCJmaWxlIjoicmVxdWVzdC1hZG1pbi1uZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtOyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuIH1cclxuXHJcbi5jb250ZW50LXRpdGxle1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY29udGVudC1ncmlkLXJlZ2lzdGVye1xyXG4gICAgLy8gZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gfSJdfQ== */";

/***/ }),

/***/ 2934:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/waiting-list/new-request/components/request-drive-new/request-drive-new.component.scss?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".content-card {\n  padding-top: 0.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n.content-title {\n  padding-top: 1rem;\n  font-weight: 700;\n}\n\n.content-grid-register {\n  overflow: auto;\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtZHJpdmUtbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBRUksY0FBQTtFQUNBLGtDQUFBO0FBQUoiLCJmaWxlIjoicmVxdWVzdC1kcml2ZS1uZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtOyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuIH1cclxuXHJcbi5jb250ZW50LXRpdGxle1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY29udGVudC1ncmlkLXJlZ2lzdGVye1xyXG4gICAgLy8gZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gfSJdfQ== */";

/***/ }),

/***/ 98651:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/waiting-list/new-request/new-request.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".header-text {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  top: 1;\n  right: 50;\n  left: 0;\n  margin-left: 1rem;\n}\n\n.attr-name {\n  padding-top: 2px;\n  font-weight: 700;\n}\n\n.content-card {\n  padding-top: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1yZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDRyxnQkFBQTtFQUNBLGdCQUFBO0FBQ0g7O0FBRUM7RUFDRyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoibmV3LXJlcXVlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10ZXh0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxO1xyXG4gICAgcmlnaHQ6IDUwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gfVxyXG5cclxuLmF0dHItbmFtZXtcclxuICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgZm9udC13ZWlnaHQ6IDcwMDsgICAgXHJcbn1cclxuXHJcbiAuY29udGVudC1jYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gfSJdfQ== */";

/***/ }),

/***/ 3321:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/waiting-list/new-request/components/request-admin-new/request-admin-new.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div slot=\"main\" class=\"content-card\">\r\n  <form [formGroup]=\"form\">\r\n    <cwc-grid class=\"demo-grid\" design-version=\"v2\" row-gap=\"5px\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 1rem;\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <cwc-input\r\n            formControlName=\"Origen\"\r\n            [status]=\"getStatusField('Origen')\"\r\n            [statusMessage]=\"getMsgField('Origen', 'origen')\"\r\n            style=\"width: 100%;\"\r\n            label='Origen (Municipio)'\r\n            design-version=\"v2\">\r\n            </cwc-input>\r\n          </cwc-cell>\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <cwc-input\r\n            formControlName=\"Destino\"\r\n            [status]=\"getStatusField('Destino')\"\r\n            [statusMessage]=\"getMsgField('Destino', 'destino')\"\r\n            style=\"width: 100%;\"\r\n            label='Destino (Municipio)'\r\n            design-version=\"v2\">\r\n            </cwc-input>\r\n        </cwc-cell>\r\n        <cwc-cell class=\"flex flex__align--bullseye\" mobile-colspan=\"12\">          \r\n          <div style=\"text-align: center; padding-bottom: 1rem; font-weight: 900;\" >Rango de Hora</div>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\" class=\"flex flex__align--center\">\r\n          <cwc-input-time\r\n            formControlName=\"TimerStar\"\r\n            label='Hora (Inicio)'\r\n            [status]=\"getStatusField('TimerStar')\"\r\n            [statusMessage]=\"getMsgField('TimerStar', 'tiempo de inicio')\"\r\n            (cwcChange)=\"changTimeStar($event)\"\r\n            placeholder=\"--:--\"\r\n            design-version=\"v2\">\r\n          </cwc-input-time>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\" class=\"flex flex__align--center\">\r\n          <cwc-input-time\r\n            formControlName=\"TimerEnd\"\r\n            label='Hora (Inicio)'\r\n            [status]=\"getStatusField('TimerEnd')\"\r\n            [statusMessage]=\"getMsgField('TimerEnd', 'tiempo final')\"\r\n            (cwcChange)=\"changeTimeEnd($event)\"\r\n            placeholder=\"--:--\"\r\n            design-version=\"v2\">\r\n          </cwc-input-time>\r\n        </cwc-cell>\r\n        <cwc-cell class=\"flex flex__align--bullseye\" mobile-colspan=\"12\">          \r\n          <div style=\"text-align: center; padding-bottom: 0.5rem; font-weight: 900;\" >Fecha</div>\r\n        </cwc-cell>\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <cwc-input-date\r\n            return-format=\"date\"\r\n            hover-range=\"multiple-week\"\r\n            formControlName=\"DateTravels\"\r\n            [status]=\"getStatusField('DateTravels')\"\r\n            (cwcChange)=\"changeDateTime($event)\"\r\n            style=\"width: 100%;\"\r\n            placeholder=\"Seleccionar fecha\"\r\n            [statusMessage]=\"getMsgField('DateTravels', 'fecha')\"\r\n            design-version=\"v2\">\r\n          </cwc-input-date>\r\n        </cwc-cell>\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <cwc-select\r\n            formControlName=\"DriverId\"\r\n            [status]=\"getStatusField('DriverId')\"\r\n            [statusMessage]=\"getMsgField('DriverId', 'conductor')\"\r\n            (cwcChange)=\"changeDriverId($event)\"\r\n            style=\"width: 100%;\"\r\n            label='Conductor'\r\n            design-version=\"v2\">\r\n            <cwc-select-option value=\"0\" selected=\"\">Seleccionar</cwc-select-option>\r\n            <cwc-select-option [value]=\"driver.id\" *ngFor=\"let driver of driverList\" >{{driver.firstLastName}}</cwc-select-option>\r\n            </cwc-select>\r\n        </cwc-cell>\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n            <cwc-select\r\n              formControlName=\"VehicleId\"\r\n              [status]=\"getStatusField('VehicleId')\"\r\n              [statusMessage]=\"getMsgField('VehicleId', 'vehiculo')\"\r\n              (cwcChange)=\"changeVehicleId($event)\" \r\n              style=\"width: 100%;\"\r\n              label='Vehiculo'\r\n              design-version=\"v2\">\r\n              <cwc-select-option value=\"0\" selected=\"\">Seleccionar</cwc-select-option>\r\n              <cwc-select-option [value]=\"vehicle.id\" *ngFor=\"let vehicle of vehicleList\" >{{vehicle.model}}</cwc-select-option>\r\n              </cwc-select>\r\n        </cwc-cell>\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"content-button\">\r\n            <cwc-button\r\n            (cwcClick)=\"searchTrips()\"\r\n            [disabled]=\"form.invalid\"\r\n            design-version=\"v1\"\r\n            variant=\"regular-block\">ENVIAR SOLICITUD</cwc-button>\r\n          </div>\r\n        </cwc-cell>        \r\n    </cwc-grid> \r\n  </form>\r\n</div>\r\n\r\n<cwc-modal id='alert-modal-succes' [open]=\"alertShow\" close-on-bd-click=\"false\" show-close-btn=\"false\" (cwcClose)=\"goMyRequest()\">\r\n  <div style='text-align: center'>\r\n      <cwc-icon name='accepted-ok' size='120px' color='bright-green'></cwc-icon>\r\n      <h4 class='modal--confirmation__message'>La solicitud ha sido enviada correctamente.</h4>\r\n  </div>\r\n  <footer slot='footer'>\r\n    <div style='text-align: center'>\r\n        <cwc-button variant='link' (click)=\"goMyRequest()\" routerLinkActive=\"router-link-active\">\r\n          <div style=\"color: #7AC943; font-size: large; padding-bottom: 1rem;\" >Regresar</div>\r\n        </cwc-button>\r\n    </div>\r\n</footer>\r\n</cwc-modal>\r\n";

/***/ }),

/***/ 83867:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/waiting-list/new-request/components/request-drive-new/request-drive-new.component.html?ngResource ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div slot=\"main\" class=\"content-card\">\r\n  <form [formGroup]=\"form\">\r\n    <cwc-grid class=\"demo-grid\" design-version=\"v2\" row-gap=\"5px\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 1rem;\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <cwc-input\r\n            formControlName=\"Origen\"\r\n            [status]=\"getStatusField('Origen')\"\r\n            [statusMessage]=\"getMsgField('Origen', 'origen')\"\r\n            style=\"width: 100%;\"\r\n            label='Origen (Municipio)'\r\n            design-version=\"v2\">\r\n            </cwc-input>\r\n          </cwc-cell>\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <cwc-input\r\n            formControlName=\"Destino\"\r\n            [status]=\"getStatusField('Destino')\"\r\n            [statusMessage]=\"getMsgField('Destino', 'destino')\"\r\n            style=\"width: 100%;\"\r\n            label='Destino (Municipio)'\r\n            design-version=\"v2\">\r\n            </cwc-input>\r\n        </cwc-cell>\r\n        <cwc-cell class=\"flex flex__align--bullseye\" mobile-colspan=\"12\">          \r\n          <div style=\"text-align: center; padding-bottom: 1rem; font-weight: 900;\" >Rango de Hora</div>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\" class=\"flex flex__align--center\">\r\n          <cwc-input-time\r\n            formControlName=\"TimerStar\"\r\n            label='Hora (Inicio)'\r\n            [status]=\"getStatusField('TimerStar')\"\r\n            [statusMessage]=\"getMsgField('TimerStar', 'tiempo de inicio')\"\r\n            (cwcChange)=\"changTimeStar($event)\"\r\n            placeholder=\"--:--\"\r\n            design-version=\"v2\">\r\n          </cwc-input-time>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\" class=\"flex flex__align--center\">\r\n          <cwc-input-time\r\n            formControlName=\"TimerEnd\"\r\n            label='Hora (Inicio)'\r\n            [status]=\"getStatusField('TimerEnd')\"\r\n            [statusMessage]=\"getMsgField('TimerEnd', 'tiempo final')\"\r\n            (cwcChange)=\"changeTimeEnd($event)\"\r\n            placeholder=\"--:--\"\r\n            design-version=\"v2\">\r\n          </cwc-input-time>\r\n        </cwc-cell>\r\n        <cwc-cell class=\"flex flex__align--bullseye\" mobile-colspan=\"12\">          \r\n          <div style=\"text-align: center; padding-bottom: 0.5rem; font-weight: 900;\" >Fecha</div>\r\n        </cwc-cell>\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <cwc-input-date\r\n            return-format=\"date\"\r\n            hover-range=\"multiple-week\"\r\n            formControlName=\"DateTravels\"\r\n            [status]=\"getStatusField('DateTravels')\"\r\n            (cwcChange)=\"changeDateTime($event)\"\r\n            style=\"width: 100%;\"\r\n            placeholder=\"Seleccionar fecha\"\r\n            [statusMessage]=\"getMsgField('DateTravels', 'fecha')\"\r\n            design-version=\"v2\">\r\n          </cwc-input-date>\r\n        </cwc-cell>\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"content-button\">\r\n            <cwc-button\r\n            (cwcClick)=\"searchTrips()\"\r\n            [disabled]=\"form.invalid\"\r\n            design-version=\"v1\"\r\n            variant=\"regular-block\">ENVIAR SOLICITUD</cwc-button>\r\n          </div>\r\n        </cwc-cell>        \r\n    </cwc-grid> \r\n  </form>\r\n</div>\r\n\r\n<cwc-modal id='alert-modal-succes' [open]=\"alertShow\" close-on-bd-click=\"false\" show-close-btn=\"false\" (cwcClose)=\"goMyRequest()\">\r\n  <div style='text-align: center'>\r\n      <cwc-icon name='accepted-ok' size='120px' color='bright-green'></cwc-icon>\r\n      <h4 class='modal--confirmation__message'>La solicitud ha sido enviada correctamente.</h4>\r\n  </div>\r\n  <footer slot='footer'>\r\n    <div style='text-align: center'>\r\n        <cwc-button variant='link' (click)=\"goMyRequest()\" routerLinkActive=\"router-link-active\">\r\n          <div style=\"color: #7AC943; font-size: large; padding-bottom: 1rem;\" >Regresar</div>\r\n        </cwc-button>\r\n    </div>\r\n  </footer>\r\n</cwc-modal>";

/***/ }),

/***/ 43483:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/waiting-list/new-request/new-request.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-header design-version=\"v2\" slot=\"header\" show-Menu-Button=\"false\" show-cemex-logo=\"false\">\r\n    <div class=\"header-text\">\r\n      <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px;\" (click)=\"onBack()\"></ion-icon>\r\n      <div class=\"attr-name\" style=\"padding-left: 1rem;\">Nueva Solicitud</div>\r\n    </div>\r\n</cwc-header>\r\n<div slot=\"main\" class=\"content-card\">\r\n    <div *ngIf=\"rol !== 'Conductor'\"><app-request-admin-new></app-request-admin-new></div>\r\n    <div *ngIf=\"rol === 'Conductor'\"><app-request-drive-new></app-request-drive-new></div>\r\n</div>\r\n\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_waiting-list_new-request_new-request_module_ts.js.map