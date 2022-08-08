"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_vehicles_vehicles_module_ts"],{

/***/ 71368:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/vehicles/components/vehicle-list/vehicle-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleListComponent": () => (/* binding */ VehicleListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _vehicle_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle-list.component.html?ngResource */ 90694);
/* harmony import */ var _vehicle_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-list.component.scss?ngResource */ 39778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_vehicles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/vehicles.service */ 66817);






let VehicleListComponent = class VehicleListComponent {
    constructor(navCtrl, vehiclesService) {
        this.navCtrl = navCtrl;
        this.vehiclesService = vehiclesService;
        this.vehicles = [];
    }
    ngOnInit() { }
    detailVehicle(id) {
        this.vehiclesService.id = id;
        this.navCtrl.navigateRoot('/app/vehiculos/detalles', { animated: false });
    }
};
VehicleListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _services_vehicles_service__WEBPACK_IMPORTED_MODULE_2__.VehiclesService }
];
VehicleListComponent.propDecorators = {
    vehicles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    companyName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
VehicleListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-vehicle-list',
        template: _vehicle_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vehicle_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VehicleListComponent);



/***/ }),

/***/ 1954:
/*!***********************************************************!*\
  !*** ./src/app/pages/vehicles/vehicles-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclesPageRoutingModule": () => (/* binding */ VehiclesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _vehicles_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicles.page */ 57384);




const routes = [
    {
        path: '',
        component: _vehicles_page__WEBPACK_IMPORTED_MODULE_0__.VehiclesPage
    },
    {
        path: 'agregar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_vehicles_new-vehicle_new-vehicle_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./new-vehicle/new-vehicle.module */ 7460)).then(m => m.NewVehiclePageModule)
    },
    {
        path: 'actualizar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_vehicles_update-vehicle_update-vehicle_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./update-vehicle/update-vehicle.module */ 76748)).then(m => m.UpdateVehiclePageModule)
    },
    {
        path: 'detalles',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_vehicles_vehicle-details_vehicle-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vehicle-details/vehicle-details.module */ 92761)).then(m => m.VehicleDetailsPageModule)
    }
];
let VehiclesPageRoutingModule = class VehiclesPageRoutingModule {
};
VehiclesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VehiclesPageRoutingModule);



/***/ }),

/***/ 5048:
/*!***************************************************!*\
  !*** ./src/app/pages/vehicles/vehicles.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclesPageModule": () => (/* binding */ VehiclesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _vehicles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicles-routing.module */ 1954);
/* harmony import */ var _vehicles_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicles.page */ 57384);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/layout.module */ 93077);
/* harmony import */ var _components_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/vehicle-list/vehicle-list.component */ 71368);











let VehiclesPageModule = class VehiclesPageModule {
};
VehiclesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _vehicles_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehiclesPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__.CmxWebComponentsModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__.LayoutPageModule
        ],
        declarations: [
            _vehicles_page__WEBPACK_IMPORTED_MODULE_1__.VehiclesPage,
            _components_vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_5__.VehicleListComponent
        ]
    })
], VehiclesPageModule);



/***/ }),

/***/ 57384:
/*!*************************************************!*\
  !*** ./src/app/pages/vehicles/vehicles.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclesPage": () => (/* binding */ VehiclesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _vehicles_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicles.page.html?ngResource */ 85670);
/* harmony import */ var _vehicles_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicles.page.scss?ngResource */ 25280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_vehicles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/vehicles.service */ 66817);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/login.service */ 52876);
/* harmony import */ var _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/companies/companies.service */ 46605);







let VehiclesPage = class VehiclesPage {
    constructor(vehiclesService, loginService, companiesService) {
        this.vehiclesService = vehiclesService;
        this.loginService = loginService;
        this.companiesService = companiesService;
        this.vehiclesList = [];
        this.companiesService.getCompany(loginService.profileUser.CompanyId).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.company = data.data.companyName;
        }));
    }
    ngOnInit() {
        this.getDataList();
    }
    getDataList() {
        this.vehiclesService.getVehicleList(this.loginService.profileUser.CompanyId).subscribe(data => {
            this.vehiclesList = data.data;
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            this.vehiclesList = [];
            this.getDataList();
            event.target.complete();
        }, 2000);
    }
};
VehiclesPage.ctorParameters = () => [
    { type: _services_vehicles_service__WEBPACK_IMPORTED_MODULE_2__.VehiclesService },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService },
    { type: _services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__.CompaniesService }
];
VehiclesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-vehicles',
        template: _vehicles_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_vehicles_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VehiclesPage);



/***/ }),

/***/ 39778:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/vehicles/components/vehicle-list/vehicle-list.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = ".card-content-margin {\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}\n\n.text-info {\n  font-size: small;\n}\n\n.attr-user {\n  font-weight: 200;\n}\n\n.text-company {\n  font-size: small;\n  padding-top: 0.8rem;\n}\n\n.content-btn-edit {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.text-button {\n  font-weight: 700;\n  padding-top: 0.8rem;\n  font-size: x-small;\n}\n\n.text-stade {\n  font-size: small;\n}\n\n.icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJ2ZWhpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250ZW50LW1hcmdpbntcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi50ZXh0LWluZm97XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4uYXR0ci11c2VyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi50ZXh0LWNvbXBhbnl7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgcGFkZGluZy10b3A6IDAuOHJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQtYnRuLWVkaXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnRleHQtYnV0dG9ue1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmctdG9wOiAwLjhyZW07XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi50ZXh0LXN0YWRle1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmljb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 25280:
/*!**************************************************************!*\
  !*** ./src/app/pages/vehicles/vehicles.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".navbar {\n  margin-top: 9.5rem;\n  margin-left: 1rem;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  overflow: auto;\n}\n\n.icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 18px;\n}\n\n.search-text {\n  width: 100%;\n  height: 10px;\n  padding-bottom: 0;\n}\n\n.text-vehicles {\n  font-size: small;\n  font-weight: 700;\n}\n\n.float {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  text-align: center;\n  background-color: #05376E;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSDs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0cseUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InZlaGljbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgbWFyZ2luLXRvcDogOS41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmljb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtdGV4dHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogMTBweDtcclxuICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50ZXh0LXZlaGljbGVze1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5mbG9hdHtcclxuXHRwb3NpdGlvbjpmaXhlZDtcclxuXHRib3R0b206MTVweDtcclxuXHRyaWdodDoxNXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTM3NkU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG59Il19 */";

/***/ }),

/***/ 90694:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/vehicles/components/vehicle-list/vehicle-list.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-card *ngFor=\"let vehicle of vehicles\" (click)=\"detailVehicle(vehicle.id)\" class=\"card-info\" design-version=\"v1\">\r\n  <div class=\"card-content\">\r\n    <cwc-grid class=\"demo-grid\" >\r\n      <cwc-cell colspan=\"12\" mobile-colspan=\"8\">   \r\n          <div class=\"attr-user\">Plataforma</div>\r\n          <span class=\"text-info\">{{vehicle.licenseVehiculo}}</span>\r\n      </cwc-cell>\r\n      <cwc-cell colspan=\"12\" mobile-colspan=\"4\">\r\n        <div class=\"content-btn-edit\">            \r\n          <cwc-icon name='check-rounded-active-fill' size=\"12px\" color='bright-green'></cwc-icon>\r\n          <span class=\"text-stade\">Disponible</span>\r\n        </div>   \r\n      </cwc-cell>\r\n    </cwc-grid>\r\n    <cwc-grid class=\"demo-grid\" >\r\n      <cwc-cell colspan=\"12\" mobile-colspan=\"6\">   \r\n          <div class=\"text-company\">{{companyName}}</div>\r\n      </cwc-cell>\r\n      <cwc-cell colspan=\"12\" mobile-colspan=\"6\">   \r\n        <div class=\"content-btn-edit\">\r\n          <br>\r\n          <cwc-button variant=\"link\">\r\n            <div class=\"text-button\">VER MÁS</div>\r\n          </cwc-button>\r\n        </div> \r\n      </cwc-cell>\r\n    </cwc-grid>\r\n  </div>\r\n</cwc-card>";

/***/ }),

/***/ 85670:
/*!**************************************************************!*\
  !*** ./src/app/pages/vehicles/vehicles.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<app-layout class=\"card-size\">\r\n  <cwc-grid class=\"demo-grid\" row-gap=\"2px\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"11\" style=\"padding-bottom: 0;\">     \r\n      <div>\r\n        <cwc-input class=\"search-text\" variant=\"regular\" rtl=\"false\" trailing-icon='magnifier-glass' placeholder='Buscar...'></cwc-input>  \r\n      </div>       \r\n    </cwc-cell> \r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"1\">    \r\n      <div class=\"icon\">\r\n        <cwc-button variant=\"link\">          \r\n          <cwc-icon variant=\"link\" name='controls' size=\"20px\" aria-role=\"button\"></cwc-icon>\r\n        </cwc-button>\r\n      </div>  \r\n    </cwc-cell>    \r\n  </cwc-grid>  \r\n  <h6 class=\"text-vehicles\">Vehículos ({{vehiclesList.length}})</h6>\r\n  <ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <div class=\"navbar\">\r\n      <app-vehicle-list [vehicles]=\"vehiclesList\" [companyName]=\"company\"></app-vehicle-list>\r\n    </div>  \r\n  </ion-content>  \r\n  <cwc-button class=\"float\" routerLink=\"agregar\" design-version=\"v2\" size=\"large\" variant=\"ghost\" ratio=\"square\" trailing-icon=\"plus\"></cwc-button>\r\n</app-layout>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vehicles_vehicles_module_ts.js.map