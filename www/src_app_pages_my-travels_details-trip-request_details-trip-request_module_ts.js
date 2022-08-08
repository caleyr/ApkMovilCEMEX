"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_my-travels_details-trip-request_details-trip-request_module_ts"],{

/***/ 722:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-request/details-trip-request-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTripRequestPageRoutingModule": () => (/* binding */ DetailsTripRequestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _details_trip_request_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-trip-request.page */ 54869);




const routes = [
    {
        path: '',
        component: _details_trip_request_page__WEBPACK_IMPORTED_MODULE_0__.DetailsTripRequestPage
    }
];
let DetailsTripRequestPageRoutingModule = class DetailsTripRequestPageRoutingModule {
};
DetailsTripRequestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsTripRequestPageRoutingModule);



/***/ }),

/***/ 23106:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-request/details-trip-request.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTripRequestPageModule": () => (/* binding */ DetailsTripRequestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _details_trip_request_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-trip-request-routing.module */ 722);
/* harmony import */ var _details_trip_request_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-trip-request.page */ 54869);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);








let DetailsTripRequestPageModule = class DetailsTripRequestPageModule {
};
DetailsTripRequestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__.CmxWebComponentsModule.forRoot(),
            _details_trip_request_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsTripRequestPageRoutingModule
        ],
        declarations: [_details_trip_request_page__WEBPACK_IMPORTED_MODULE_1__.DetailsTripRequestPage]
    })
], DetailsTripRequestPageModule);



/***/ }),

/***/ 54869:
/*!************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-request/details-trip-request.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTripRequestPage": () => (/* binding */ DetailsTripRequestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _details_trip_request_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-trip-request.page.html?ngResource */ 45304);
/* harmony import */ var _details_trip_request_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-trip-request.page.scss?ngResource */ 58162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/travels/travel.service */ 74894);
/* harmony import */ var _interfaces_travels_travel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../interfaces/travels/travel */ 44577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ 73071);
/* harmony import */ var _services_vehicles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/vehicles.service */ 66817);
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/drivers.service */ 50774);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/auth/login.service */ 52876);











let DetailsTripRequestPage = class DetailsTripRequestPage {
    constructor(location, travelService, userService, vehiclesService, driversService, loginService) {
        this.location = location;
        this.travelService = travelService;
        this.userService = userService;
        this.vehiclesService = vehiclesService;
        this.driversService = driversService;
        this.loginService = loginService;
        this.travel = new _interfaces_travels_travel__WEBPACK_IMPORTED_MODULE_3__.Travel();
        this.listDrivers = [];
        this.driveSelected = 'Seleccionar';
        this.licenseOk = true;
        this.messageShowA = false;
        this.messageShow = false;
    }
    ngOnInit() {
        this.suscripcion = this.travelService.refresh$.subscribe(() => {
            this.getData();
            this.getListDrivers();
        });
        this.getData();
        this.getListDrivers();
    }
    onBack() {
        this.location.back();
    }
    getListDrivers() {
        this.driversService.getDriverList(this.loginService.profileUser.CompanyId).subscribe(data => {
            this.listDrivers = data.data;
        });
    }
    getData() {
        if (this.travelService.id !== null) {
            this.id = this.travelService.id;
            this.travelService.getTravelDetail(this.id).subscribe(data => {
                this.travel = data.data;
            });
        }
    }
    showModal() {
        document.getElementById('modal-assign-trip').setAttribute('open', 'true');
    }
    showModalConfirm() {
        const dataD = new FormData();
        dataD.append('StatusTravel', '4');
        dataD.append('StatusTravelAvailability', '4');
        dataD.append('id', this.travel.id);
        this.driversService.confirmDrive(this.travel.id, dataD).subscribe(() => {
            document.getElementById('modal-confirm-driver').setAttribute('open', 'true');
        }, (err) => {
            this.onBack();
            console.log(err);
        });
    }
    changeDriver(event) {
        if (event.detail.value === '0') {
            this.driveSelected = 'Seleccionar';
            this.licenseOk = true;
        }
        else {
            this.driverId = event.detail.value;
            this.userService.getUserDetail(event.detail.value).subscribe(data => {
                this.vehiclesService.getVehicleById(data.data.lisenseVehicle).subscribe(dataV => {
                    this.driveSelected = dataV.data.licenseVehiculo;
                    this.licenseOk = false;
                });
            });
        }
    }
    driverAssign() {
        const dataD = new FormData();
        dataD.append('Id', this.travel.id);
        dataD.append('UserId', this.driverId);
        const data = new FormData();
        data.append('StatusTravel', '3');
        data.append('StatusTravelAvailability', '3');
        data.append('id', this.travel.id);
        this.travelService.updateTravel(this.travel.id, dataD).subscribe(() => {
            this.driversService.confirmDrive(this.travel.id, data).subscribe(() => {
                document.getElementById('modal-assign-trip').setAttribute('open', 'false');
                this.messageShowA = true;
            }, (err) => {
                document.getElementById('modal-assign-trip').setAttribute('open', 'false');
                this.onBack();
                console.log(err);
            });
        }, (err) => {
            document.getElementById('modal-assign-trip').setAttribute('open', 'false');
            console.log(err);
        });
    }
};
DetailsTripRequestPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__.TravelService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _services_vehicles_service__WEBPACK_IMPORTED_MODULE_5__.VehiclesService },
    { type: _services_drivers_service__WEBPACK_IMPORTED_MODULE_6__.DriversService },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_7__.LoginService }
];
DetailsTripRequestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-details-trip-request',
        template: _details_trip_request_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_trip_request_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsTripRequestPage);



/***/ }),

/***/ 58162:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-request/details-trip-request.page.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = ".header-text {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  top: 1;\n  right: 50;\n  left: 0;\n  margin-left: 1rem;\n}\n\n.content-card {\n  padding-top: 1rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\nspan.style-name {\n  margin-left: 0.2rem;\n  font-size: small;\n  font-weight: 700;\n}\n\n.attr-name {\n  font-weight: 700;\n}\n\n.attr-user {\n  font-size: x-small;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.attr-trailer {\n  font-size: small;\n  margin-bottom: 1.5rem;\n}\n\n.attr-conductor {\n  font-size: small;\n  margin-top: 1rem;\n}\n\n.attr-document {\n  font-size: smaller;\n  font-weight: 700;\n  padding-bottom: 0.5rem;\n}\n\n.center-cell {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.text-info {\n  font-size: small;\n}\n\nspan.text-archive {\n  font-size: small;\n  color: black;\n  padding-left: 0;\n}\n\n.cell-button {\n  padding-top: 2rem;\n  text-align: right;\n}\n\n.button-cell {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.footer-detal-request {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n\n.btn-action {\n  margin-left: 1.5rem;\n}\n\nspan.text-btn {\n  padding-top: 0.1rem;\n  padding-bottom: 0.1rem;\n  font-size: small;\n}\n\n.modal-list {\n  --cwc-modal-border-width: 5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n}\n\n.header-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtdHJpcC1yZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUtBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGSiIsImZpbGUiOiJkZXRhaWxzLXRyaXAtcmVxdWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRleHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDE7XHJcbiAgICByaWdodDogNTA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcblxyXG4uY29udGVudC1jYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuc3Bhbi5zdHlsZS1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmF0dHItbmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7ICAgIFxyXG59XHJcblxyXG4uYXR0ci11c2VyIHtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYXR0ci10cmFpbGVyIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5hdHRyLWNvbmR1Y3RvcntcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5cclxuLmF0dHItZG9jdW1lbnQge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jZW50ZXItY2VsbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi50ZXh0LWluZm97XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5zcGFuLnRleHQtYXJjaGl2ZXtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jZWxsLWJ1dHRvbntcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5idXR0b24tY2VsbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uZm9vdGVyLWRldGFsLXJlcXVlc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuLmJ0bi1hY3Rpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxufVxyXG5zcGFuLnRleHQtYnRuIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjFyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuXHJcbi8vTW9kYWxcclxuXHJcbi5tb2RhbC1saXN0e1xyXG4gICAgLS1jd2MtbW9kYWwtYm9yZGVyLXdpZHRoIDogNXJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAgICBcclxufVxyXG5cclxuLmhlYWRlci1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxufSJdfQ== */";

/***/ }),

/***/ 45304:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-request/details-trip-request.page.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-header design-version=\"v2\" slot=\"header\" show-Menu-Button=\"false\" show-cemex-logo=\"false\">\r\n  <div class=\"header-text\">\r\n    <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px;\" (click)=\"onBack()\"></ion-icon>\r\n    <div class=\"attr-name\" style=\"padding-left: 1rem;\">Viaje {{travel.codeTravel}}</div>\r\n  </div>\r\n</cwc-header>\r\n<div slot=\"main\" class=\"content-card\">\r\n  <cwc-card class=\"card-info\" design-version=\"v1\">\r\n    <div class=\"card-content\">\r\n      <div class=\"header-card\">\r\n        <div class=\"avatar-info\">\r\n          <div class=\"attr-user\">CONDUCTOR</div>\r\n          <span class=\"attr-detail\">Pendiente por confirmar</span>\r\n        </div>\r\n      </div>\r\n\r\n      <hr color=\"#D0D0D0\" />\r\n      <cwc-grid class=\"demo-grid center-cell\" style=\"padding-top: 0.5rem;\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"attr-user\">ORIGEN</div>\r\n          <span class=\"attr-detail\">{{travel.source}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"attr-user\">DESTINO</div>\r\n          <span class=\"attr-detail\">{{travel.destiny}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"attr-user\">PRODUCTO</div>\r\n          <span class=\"attr-detail\">{{travel.productName}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">FECHA Y HORA DE CITA</div>\r\n          <span class=\"attr-detail\">{{travel.dateTravel}} {{travel.timerStar}}</span>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">CANTIDAD</div>\r\n          <span class=\"attr-detail\">{{travel.amount}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\" *ngIf=\"travel.vehicleLissenceName\">\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">MODELO</div>\r\n          <span class=\"attr-detail\">{{travel.vehicleModelName}}</span>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">NUMERO DE PLACA</div>\r\n          <span class=\"attr-detail\">{{travel.vehicleLissenceName}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">CLIENTE</div>\r\n          <span class=\"attr-detail\">{{travel.companyName}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <hr color=\"#D0D0D0\" />\r\n      <cwc-grid class=\"demo-grid\" style=\"padding-top: 0.5rem;\" *ngIf=\"!travel.vehicleLissenceName\">\r\n        <cwc-cell mobile-colspan=\"7\" style=\"text-align: end;\">\r\n          <cwc-button variant=\"link\" class=\"m-h-reg link-cwc\" (cwcClick)=\"showModal()\">\r\n            <div style=\"font-size: small;  font-weight: normal;\">ASIGNAR CONDUCTOR</div>\r\n          </cwc-button>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"5\" style=\"text-align: end;\">\r\n          <cwc-button variant=\"link\" class=\"m-h-reg link-cwc\">\r\n            <div style=\"font-size: small; font-weight: normal;\">CANCELAR</div>\r\n          </cwc-button>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n      \r\n      <cwc-grid class=\"demo-grid\" style=\"padding-top: 0.5rem;\" *ngIf=\"travel.vehicleLissenceName\">\r\n        <cwc-cell mobile-colspan=\"7\" style=\"text-align: end;\">\r\n          <cwc-button variant=\"link\" class=\"m-h-reg link-cwc\" (cwcClick)=\"showModalConfirm()\">\r\n            <div style=\"font-size: small;  font-weight: normal;\">CONFIRMAR CONDUCTOR</div>\r\n          </cwc-button>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"5\" style=\"text-align: end;\">\r\n          <cwc-button variant=\"link\" class=\"m-h-reg link-cwc\">\r\n            <div style=\"font-size: small; font-weight: normal;\">CANCELAR</div>\r\n          </cwc-button>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n    </div>\r\n  </cwc-card>\r\n</div>\r\n\r\n<cwc-modal id='modal-assign-trip' class=\"modal-list\" design-version=\"v2\" style=\"z-index: 0;\">\r\n  <h3 style='text-align: center;'>Asignar conductor</h3>\r\n      <cwc-select id=\"time-seleccwc-select\" class=\"select-filter\" label=\"\" placeholder=\"Seleccionar\" (cwcChange)=\"changeDriver($event)\">\r\n          <cwc-select-option selected value=\"0\">Seleccionar</cwc-select-option>\r\n          <cwc-select-option *ngFor=\"let driver of listDrivers\" [value]=\"driver.id\" >{{driver.firstLastName}}</cwc-select-option>\r\n      </cwc-select>\r\n      <cwc-input\r\n          style=\"width: 100%;\"\r\n          design-version=\"v2\"\r\n          label='Vehiculo'\r\n          [(ngModel)]=\"driveSelected\"\r\n          class='input-update-user'\r\n          disabled=\"true\"\r\n          placeholder=\"Seleccionar\">\r\n      </cwc-input>\r\n      <cwc-button [disabled]=\"licenseOk\" (click)=\"driverAssign()\" variant=\"primary-block\" design-version=\"v2\">Aceptar</cwc-button>\r\n</cwc-modal>\r\n\r\n<cwc-modal id='modal-confirm' [open]=\"messageShowA\" close-on-bd-click=\"false\">\r\n  <div style='text-align: center'>\r\n      <cwc-icon name='accepted-ok' size='120px' color='bright-green'></cwc-icon>\r\n      <h3 class='modal--confirmation__message'>El conductor ha sido asignado de manera exitosa.</h3>\r\n  </div>\r\n</cwc-modal>\r\n\r\n<cwc-modal id='modal-confirm-driver' [open]=\"messageShow\" close-on-bd-click=\"false\" (cwcClose)=\"onBack()\">\r\n  <div style='text-align: center'>\r\n      <cwc-icon name='accepted-ok' size='120px' color='bright-green'></cwc-icon>\r\n      <h3 class='modal--confirmation__message'>El viaje ha sido confirmado de manera exitosa.</h3>\r\n  </div>\r\n</cwc-modal>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-travels_details-trip-request_details-trip-request_module_ts.js.map