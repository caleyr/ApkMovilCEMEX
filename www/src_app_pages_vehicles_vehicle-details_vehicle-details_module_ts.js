"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_vehicles_vehicle-details_vehicle-details_module_ts"],{

/***/ 53240:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/vehicles/vehicle-details/vehicle-details-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleDetailsPageRoutingModule": () => (/* binding */ VehicleDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _vehicle_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-details.page */ 58891);




const routes = [
    {
        path: '',
        component: _vehicle_details_page__WEBPACK_IMPORTED_MODULE_0__.VehicleDetailsPage
    }
];
let VehicleDetailsPageRoutingModule = class VehicleDetailsPageRoutingModule {
};
VehicleDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VehicleDetailsPageRoutingModule);



/***/ }),

/***/ 92761:
/*!**************************************************************************!*\
  !*** ./src/app/pages/vehicles/vehicle-details/vehicle-details.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleDetailsPageModule": () => (/* binding */ VehicleDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _vehicle_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-details-routing.module */ 53240);
/* harmony import */ var _vehicle_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-details.page */ 58891);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);








let VehicleDetailsPageModule = class VehicleDetailsPageModule {
};
VehicleDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _vehicle_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehicleDetailsPageRoutingModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__.CmxWebComponentsModule.forRoot(),
        ],
        declarations: [_vehicle_details_page__WEBPACK_IMPORTED_MODULE_1__.VehicleDetailsPage]
    })
], VehicleDetailsPageModule);



/***/ }),

/***/ 58891:
/*!************************************************************************!*\
  !*** ./src/app/pages/vehicles/vehicle-details/vehicle-details.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleDetailsPage": () => (/* binding */ VehicleDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _vehicle_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-details.page.html?ngResource */ 64989);
/* harmony import */ var _vehicle_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-details.page.scss?ngResource */ 60253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _models_vehicle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/vehicle */ 56192);
/* harmony import */ var _services_vehicles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/vehicles.service */ 66817);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth/login.service */ 52876);
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/drivers.service */ 50774);










let VehicleDetailsPage = class VehicleDetailsPage {
    constructor(location, vehiclesService, loginService, navCtrl, driversService) {
        this.location = location;
        this.vehiclesService = vehiclesService;
        this.loginService = loginService;
        this.navCtrl = navCtrl;
        this.driversService = driversService;
        this.rol = null;
        this.vehicle = new _models_vehicle__WEBPACK_IMPORTED_MODULE_2__.Vehicle();
        this.driverList = [];
        this.addDriver = false;
        this.alertShow = false;
        this.rol = this.loginService.profileUser.Roles;
        this.idTercero = this.loginService.profileUser.id;
    }
    ngOnInit() {
        this.suscripcion = this.vehiclesService.refresh$.subscribe(() => {
            this.getData();
        });
        this.getData();
    }
    onBack() {
        this.location.back();
    }
    closeAlertConfirm() {
        this.addDriver = false;
    }
    closeAlertSuccess() {
        this.alertShow = false;
    }
    cwcChangeDrivers(event) {
        this.driverAssign = event.detail.value;
    }
    openModal() {
        this.addDriver = true;
    }
    addDriverForVehicle() {
        const data = new FormData();
        data.append('LicenseVehiculo', this.vehicle.licenseVehiculo);
        data.append('UserId', this.driverAssign);
        this.vehiclesService.driverAssignmentVehicle(this.id, data).subscribe(data => {
            this.alertShow = true;
        });
    }
    getData() {
        if (this.vehiclesService.id !== null) {
            this.id = this.vehiclesService.id;
            this.driversService.getDriverList(this.loginService.profileUser.CompanyId).subscribe(result => {
                this.driverList = result.data;
            });
            this.vehiclesService.getVehicleById(this.id).subscribe(data => {
                this.vehicle = data.data;
            });
        }
    }
    updateVehicle() {
        this.vehiclesService.vehicle = this.vehicle;
        this.navCtrl.navigateRoot('/app/vehiculos/actualizar', { animated: false });
    }
};
VehicleDetailsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _services_vehicles_service__WEBPACK_IMPORTED_MODULE_3__.VehiclesService },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _services_drivers_service__WEBPACK_IMPORTED_MODULE_5__.DriversService }
];
VehicleDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-vehicle-details',
        template: _vehicle_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewEncapsulation.None,
        styles: [_vehicle_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VehicleDetailsPage);



/***/ }),

/***/ 60253:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/vehicles/vehicle-details/vehicle-details.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".header-text {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  top: 1;\n  right: 50;\n  left: 0;\n  margin-left: 1rem;\n}\n\n.content-card {\n  padding-top: 3rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-bottom: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\nspan.style-name {\n  margin-left: 0.2rem;\n  font-size: small;\n  font-weight: 700;\n}\n\n.attr-name {\n  font-weight: 700;\n}\n\n.attr-user {\n  font-size: x-small;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.attr-trailer {\n  font-size: small;\n  margin-bottom: 1.5rem;\n}\n\n.attr-conductor {\n  font-size: small;\n  margin-top: 1rem;\n}\n\n.attr-document {\n  font-size: smaller;\n  font-weight: 700;\n  padding-bottom: 0.5rem;\n}\n\n.center-cell {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.text-info {\n  font-size: small;\n}\n\nspan.text-archive {\n  font-size: small;\n  color: black;\n  padding-left: 0;\n}\n\n.cell-button {\n  padding-top: 2rem;\n  text-align: right;\n}\n\n.button-cell {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.footer-detal-request {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n\n.btn-action {\n  margin-left: 1.5rem;\n}\n\nspan.text-btn {\n  padding-top: 0.1rem;\n  padding-bottom: 0.1rem;\n  font-size: small;\n}\n\n.modal-list {\n  --cwc-modal-border-width: 5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUlBO0VBQ0ksbUJBQUE7QUFESjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQU1BO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFISiIsImZpbGUiOiJ2ZWhpY2xlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10ZXh0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxO1xyXG4gICAgcmlnaHQ6IDUwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQtY2FyZHtcclxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5zcGFuLnN0eWxlLW5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYXR0ci1uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgICAgXHJcbn1cclxuXHJcbi5hdHRyLXVzZXIge1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5hdHRyLXRyYWlsZXIge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmF0dHItY29uZHVjdG9ye1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcblxyXG4uYXR0ci1kb2N1bWVudCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmNlbnRlci1jZWxsIHtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLnRleHQtaW5mb3tcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbnNwYW4udGV4dC1hcmNoaXZle1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLmNlbGwtYnV0dG9ue1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIFxyXG59XHJcblxyXG4uYnV0dG9uLWNlbGx7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmZvb3Rlci1kZXRhbC1yZXF1ZXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcbi5idG4tYWN0aW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcbn1cclxuc3Bhbi50ZXh0LWJ0biB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4xcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcblxyXG4vL01vZGFsXHJcblxyXG4ubW9kYWwtbGlzdHtcclxuICAgIC0tY3djLW1vZGFsLWJvcmRlci13aWR0aCA6IDVyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTsgICAgXHJcbn0iXX0= */";

/***/ }),

/***/ 64989:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/vehicles/vehicle-details/vehicle-details.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-header design-version=\"v2\" slot=\"header\" show-Menu-Button=\"false\" show-cemex-logo=\"false\">\r\n  <div class=\"header-text\">\r\n    <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px;\" (click)=\"onBack()\"></ion-icon>\r\n    <div class=\"attr-name\" style=\"padding-left: 1rem;\">{{vehicle.licenseVehiculo}}</div>\r\n  </div>\r\n</cwc-header>\r\n<div slot=\"main\" class=\"content-card\">\r\n  <cwc-card class=\"m-all-xs\" design-version=\"v2\">\r\n    <div class=\"card-content\">\r\n      <div class=\"content-avatar-menu\" style=\"margin-right: 0.1rem; display: flex; justify-content: space-between;\">\r\n        <div style=\"display: flex;\">\r\n          <div>\r\n            <div class=\"attr-name\">Plataforma</div>\r\n            <span class=\"text-info\">Placa {{vehicle.licenseVehiculo}}</span>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <cwc-button (click)=\"updateVehicle()\"  variant=\"link\" class=\"m-h-reg link-cwc\" routerLinkActive=\"router-link-active\" >\r\n            <div style=\"font-size: small;\">EDITAR</div>\r\n          </cwc-button>\r\n        </div>\r\n      </div>\r\n\r\n      <div>\r\n        <cwc-grid class=\"demo-grid center-cell\" >\r\n          <cwc-cell colspan=\"12\" mobile-colspan=\"12\">   \r\n              <div class=\"attr-user\">Empresa</div>\r\n              <span class=\"text-info\">{{company}}</span>\r\n          </cwc-cell>\r\n        </cwc-grid>\r\n\r\n        <cwc-grid class=\"demo-grid center-cell\" >\r\n          <cwc-cell colspan=\"12\" mobile-colspan=\"12\">   \r\n              <div class=\"attr-user\">Código SOAT</div>\r\n              <span class=\"text-info\">{{vehicle.soat}}</span>\r\n          </cwc-cell>\r\n        </cwc-grid>\r\n      </div>\r\n      \r\n      <div class=\"attr-document\" >Tipo de trailer</div>\r\n      <div style=\" border: 0.1px solid #d1d1d1; background: #d1d1d1; margin-bottom: 0.5rem;\"></div>\r\n\r\n      <p class=\"attr-trailer\">\r\n        {{vehicle.typeTrailer}}\r\n      </p>\r\n\r\n      <div class=\"attr-document\" >Documentación</div>\r\n      <div style=\" border: 0.1px solid #d1d1d1; background: #d1d1d1; margin-bottom: 0.5rem;\"></div>\r\n\r\n      <cwc-grid column-gap=\"5px\">\r\n        <cwc-cell mobile-colspan=\"6\">   \r\n          <cwc-icon *ngIf=\"vehicle.soatDocument !== null\" name='check-rounded-active-fill' size=\"12px\" color='bright-green'></cwc-icon>\r\n          <cwc-icon *ngIf=\"vehicle.soatDocument === null\" size=\"12px\" color=\"true-red\"></cwc-icon>\r\n          <span class=\"text-archive\">Documento de SOAT</span>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\">   \r\n          <cwc-icon *ngIf=\"vehicle.policyDocument !== null\" name='check-rounded-active-fill' size=\"12px\" color='bright-green'></cwc-icon>\r\n          <cwc-icon *ngIf=\"vehicle.policyDocument === null\" size=\"12px\" color=\"true-red\"></cwc-icon>\r\n          <span class=\"text-archive\">Póliza</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n      <cwc-grid column-gap=\"5px\">\r\n        <cwc-cell mobile-colspan=\"6\">   \r\n          <cwc-icon *ngIf=\"vehicle.technomechanicsDocument !== null\" name='check-rounded-active-fill' size=\"12px\" color='bright-green'></cwc-icon>\r\n          <cwc-icon *ngIf=\"vehicle.technomechanicsDocument === null\" size=\"12px\" color=\"true-red\"></cwc-icon>\r\n          <span class=\"text-archive\">Certificado de revisión técnico mecánica</span>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\">   \r\n          <cwc-icon *ngIf=\"vehicle.cardPropertyDocument !== null\" name='check-rounded-active-fill' size=\"12px\" color='bright-green'></cwc-icon>\r\n          <cwc-icon *ngIf=\"vehicle.cardPropertyDocument === null\" size=\"12px\" color=\"true-red\"></cwc-icon>\r\n          <span class=\"text-archive\">Tarjeta de propiedad</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n      <cwc-grid>\r\n        <cwc-cell mobile-colspan=\"12\" class=\"cell-button\">        \r\n          <cwc-button variant=\"link\" class=\"m-h-reg link-cwc\">\r\n            <div style=\"font-size: small;\">\r\n              ACTUALIZAR DOCUMENTOS\r\n            </div>\r\n          </cwc-button>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n      \r\n      <div style=\"margin-top: 1rem;\" *ngIf=\"vehicle.userId !== idTercero\">\r\n        <div class=\"attr-document\" >Conductor</div>\r\n        <div style=\" border: 0.1px solid #d1d1d1; background: #d1d1d1; margin-bottom: 0.5rem;\"></div>\r\n        <div style=\"display: flex; justify-content: space-between;\">\r\n          <p class=\"attr-conductor\">\r\n            {{vehicle.userId}}\r\n          </p>\r\n          <cwc-button variant=\"link\" class=\"m-h-reg link-cwc\" style=\"margin-top: 1rem; margin-bottom: 0;\" routerLinkActive=\"router-link-active\" >\r\n            <div style=\"font-size: small;\">REMOVER</div>\r\n          </cwc-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </cwc-card>\r\n  <cwc-grid class=\"demo-grid\" *ngIf=\"rol !== 'Hombre Camion' && vehicle.userId === idTercero\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n        <div class=\"footer-detal-request\">\r\n            <div class=\"content-btns\">\r\n                <cwc-button design-version=\"v2\" (click)=\"openModal()\" ><span class=\"text-btn\">Asignar conductor</span></cwc-button>\r\n            </div>\r\n        </div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n</div>\r\n\r\n<cwc-modal id='add-driver' class=\"modal-list\" design-version=\"v2\" style=\"z-index: 0;\" [open]=\"addDriver\" (cwcClose)=\"closeAlertConfirm()\">  \r\n  <h6 style='text-align: center;'>Asignar conductor</h6>\r\n  <cwc-select\r\n    class=\"select-filter\"\r\n    placeholder=\"Seleccionar\"\r\n    (cwcChange)=\"cwcChangeDrivers($event)\">\r\n    <cwc-select-option *ngFor=\"let driver of driverList\" [value]=\"driver.id\">{{driver.firstLastName}}</cwc-select-option>\r\n  </cwc-select>\r\n  <div style='text-align: center;'>\r\n    <cwc-button variant='primary-block' (click)=\"addDriverForVehicle()\" >Aceptar</cwc-button>\r\n  </div>\r\n</cwc-modal>\r\n\r\n<cwc-modal id='alert-modal-succes' [open]=\"alertShow\" (cwcClose)=\"closeAlertSuccess()\">\r\n  <div style='text-align: center'>\r\n      <cwc-icon name='accepted-ok' size='120px' color='bright-green'></cwc-icon>\r\n      <p>El conductor ha sido asignado de manera exitosa</p>\r\n  </div>\r\n</cwc-modal>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vehicles_vehicle-details_vehicle-details_module_ts.js.map