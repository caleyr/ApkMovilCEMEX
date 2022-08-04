"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_drivers_driver-details_driver-details_module_ts"],{

/***/ 41371:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/drivers/driver-details/driver-details-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverDetailsPageRoutingModule": () => (/* binding */ DriverDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _driver_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-details.page */ 58232);




const routes = [
    {
        path: '',
        component: _driver_details_page__WEBPACK_IMPORTED_MODULE_0__.DriverDetailsPage
    }
];
let DriverDetailsPageRoutingModule = class DriverDetailsPageRoutingModule {
};
DriverDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DriverDetailsPageRoutingModule);



/***/ }),

/***/ 25662:
/*!***********************************************************************!*\
  !*** ./src/app/pages/drivers/driver-details/driver-details.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverDetailsPageModule": () => (/* binding */ DriverDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _driver_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-details-routing.module */ 41371);
/* harmony import */ var _driver_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-details.page */ 58232);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);








let DriverDetailsPageModule = class DriverDetailsPageModule {
};
DriverDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _driver_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DriverDetailsPageRoutingModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__.CmxWebComponentsModule.forRoot(),
        ],
        declarations: [_driver_details_page__WEBPACK_IMPORTED_MODULE_1__.DriverDetailsPage]
    })
], DriverDetailsPageModule);



/***/ }),

/***/ 58232:
/*!*********************************************************************!*\
  !*** ./src/app/pages/drivers/driver-details/driver-details.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverDetailsPage": () => (/* binding */ DriverDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _driver_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-details.page.html?ngResource */ 98839);
/* harmony import */ var _driver_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-details.page.scss?ngResource */ 36722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/drivers.service */ 50774);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _models_driver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/driver */ 77656);








let DriverDetailsPage = class DriverDetailsPage {
    constructor(location, driversService, navCtrl) {
        this.location = location;
        this.driversService = driversService;
        this.navCtrl = navCtrl;
        this.driver = new _models_driver__WEBPACK_IMPORTED_MODULE_3__.Driver();
    }
    ngOnInit() {
        this.suscripcion = this.driversService.refresh$.subscribe(() => {
            this.getData();
        });
        this.getData();
    }
    onBack() {
        this.location.back();
    }
    getData() {
        this.id = this.driversService.id;
        this.driversService.getDriverById(this.driversService.id).subscribe(data => {
            this.driver = data.data;
        });
    }
    updateVehicle() {
        this.driversService.getDriverForUpdate(this.id).subscribe(data => {
            this.driversService.driverUpdate = data.data;
            this.navCtrl.navigateRoot('/app/conductores/actualizar', { animated: false });
        });
    }
};
DriverDetailsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location },
    { type: _services_drivers_service__WEBPACK_IMPORTED_MODULE_2__.DriversService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
DriverDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-driver-details',
        template: _driver_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_driver_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DriverDetailsPage);



/***/ }),

/***/ 77656:
/*!************************************************!*\
  !*** ./src/app/pages/drivers/models/driver.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Driver": () => (/* binding */ Driver)
/* harmony export */ });
class Driver {
}


/***/ }),

/***/ 36722:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/drivers/driver-details/driver-details.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".header-text {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  top: 1;\n  right: 50;\n  left: 0;\n  margin-left: 1rem;\n}\n\n.content-card {\n  padding-top: 3rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  flex: 1 1 auto;\n}\n\nspan.style-name {\n  margin-left: 0.2rem;\n  font-size: small;\n  font-weight: 700;\n}\n\nspan.number-phone {\n  padding-left: 8px;\n  padding-right: 10px;\n}\n\n.attr-name {\n  font-weight: 700;\n}\n\n.attr-user {\n  font-size: x-small;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.attr-trailer {\n  font-size: small;\n  margin-bottom: 1.5rem;\n}\n\n.attr-document {\n  font-size: smaller;\n  font-weight: 700;\n  padding-bottom: 0.5rem;\n}\n\n.center-cell {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.text-info {\n  font-size: small;\n}\n\nspan.text-archive {\n  font-size: small;\n  color: black;\n  padding-left: 0;\n}\n\n.cell-button {\n  padding-top: 2rem;\n  text-align: right;\n}\n\n.button-cell {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.footer-detal-request {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n\n.btn-action {\n  margin-left: 1.5rem;\n}\n\nspan.text-btn {\n  padding-top: 0.1rem;\n  padding-bottom: 0.1rem;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaXZlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBS0E7RUFDSSxtQkFBQTtBQUZKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBREoiLCJmaWxlIjoiZHJpdmVyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10ZXh0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxO1xyXG4gICAgcmlnaHQ6IDUwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQtY2FyZHtcclxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07IFxyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbnNwYW4uc3R5bGUtbmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbnNwYW4ubnVtYmVyLXBob25lIHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcbi5hdHRyLW5hbWV7XHJcbiAgICBmb250LXdlaWdodDogNzAwOyAgICBcclxufVxyXG5cclxuLmF0dHItdXNlciB7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmF0dHItdHJhaWxlciB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG5cclxuLmF0dHItZG9jdW1lbnQge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jZW50ZXItY2VsbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi50ZXh0LWluZm97XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5zcGFuLnRleHQtYXJjaGl2ZXtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jZWxsLWJ1dHRvbntcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBcclxufVxyXG5cclxuLmJ1dHRvbi1jZWxse1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5mb290ZXItZGV0YWwtcmVxdWVzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufVxyXG4uYnRuLWFjdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG59XHJcbnNwYW4udGV4dC1idG4ge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 98839:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/drivers/driver-details/driver-details.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-header design-version=\"v2\" slot=\"header\" show-Menu-Button=\"false\" show-cemex-logo=\"false\">\n  <div class=\"header-text\">\n    <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px;\" (click)=\"onBack()\"></ion-icon>\n    <div class=\"attr-name\" style=\"padding-left: 1rem;\">Conductores</div>\n  </div>\n</cwc-header>\n<div slot=\"main\" class=\"content-card\">\n  <cwc-card class=\"m-all-xs\" design-version=\"v2\">\n    <div class=\"card-content\">\n      <div class=\"content-avatar-menu\" style=\"margin-right: 0.1rem; display: flex; justify-content: space-between;\">\n        <div style=\"display: flex;\">\n          <div>\n            <cwc-avatar size=\"small\" variant=\"negative\" name=\"Luis Antonio Chavez Peralta\" class=\"m-h-xs\" style=\"width: 6%; padding: 1.3rem\"></cwc-avatar>\n          </div>\n          <div>\n              <span class=\"style-name\">{{driver.firstLastName}}</span>\n              <br>\n              <cwc-icon name=\"phone\" size=\"14px\" color=\"true-black\">\n              </cwc-icon>\n              <span class=\"number-phone\">{{driver.phoneNumber}}</span>\n          </div>\n        </div>\n        <div>\n          <cwc-button (click)=\"updateVehicle()\"  variant=\"link\" class=\"m-h-reg link-cwc\" routerLinkActive=\"router-link-active\" >\n            <div style=\"font-size: small;\">EDITAR</div>\n          </cwc-button>\n        </div>\n      </div>\n      <cwc-grid style=\"padding-top: 1rem; padding-bottom: 1rem;\">\n        <cwc-cell mobile-colspan=\"12\">   \n          <cwc-icon name='check-rounded-active-fill' size=\"12px\" color='bright-green'></cwc-icon>\n          <span class=\"text-archive\">{{driver.travelStatus}}</span>\n        </cwc-cell>\n      </cwc-grid>\n      <div>\n        <cwc-grid class=\"demo-grid\" >\n          <cwc-cell colspan=\"12\" mobile-colspan=\"12\">   \n              <div class=\"attr-user\">Correo electrónico</div>\n              <span class=\"text-info\">{{driver.email}}</span>\n          </cwc-cell>\n        </cwc-grid>\n\n        <cwc-grid class=\"demo-grid center-cell\" >\n          <cwc-cell mobile-colspan=\"6\">\n              <div class=\"attr-user\">Código Sap</div>\n              <span class=\"text-info\">{{driver.sapCode}}</span>\n          </cwc-cell>\n          <cwc-cell mobile-colspan=\"6\">   \n              <div class=\"attr-user\">Cédula o NIT</div>\n              <span class=\"text-info\">{{driver.document}}</span>\n          </cwc-cell>\n        </cwc-grid>\n\n        <cwc-grid class=\"demo-grid center-cell\" >\n          <cwc-cell mobile-colspan=\"12\">   \n              <div class=\"attr-user\">Empresa</div>\n              <span class=\"text-info\">{{company}}</span>\n          </cwc-cell>\n        </cwc-grid>\n      </div>\n\n      <div class=\"attr-document\" >Papelería</div>\n      <div style=\" border: 0.1px solid #d1d1d1; background: #d1d1d1; margin-bottom: 0.5rem;\"></div>\n\n      <cwc-grid column-gap=\"5px\">\n        <cwc-cell mobile-colspan=\"6\">   \n          <cwc-icon *ngIf=\"driver.drivinglicense !== null\" name='check-rounded-active-fill' size=\"12px\" color='bright-green'></cwc-icon>\n          <cwc-icon *ngIf=\"driver.drivinglicense === null\" size=\"12px\" color=\"true-red\"></cwc-icon>\n          <span class=\"text-archive\">Licencia de conducción</span>\n        </cwc-cell>\n        <cwc-cell mobile-colspan=\"6\">   \n          <cwc-icon *ngIf=\"driver.documentIdentityCard !== null\" name='check-rounded-active-fill' size=\"12px\" color='bright-green'></cwc-icon>\n          <cwc-icon *ngIf=\"driver.documentIdentityCard === null\" size=\"12px\" color=\"true-red\"></cwc-icon>\n          <span class=\"text-archive\">Cédula de ciudadanía</span>\n        </cwc-cell>\n      </cwc-grid>\n      <cwc-grid column-gap=\"5px\">\n        <cwc-cell mobile-colspan=\"6\">   \n          <cwc-icon *ngIf=\"driver.securityCard !== null\" name='check-rounded-active-fill' size=\"12px\" color='bright-green'></cwc-icon>\n          <cwc-icon *ngIf=\"driver.securityCard === null\" size=\"12px\" color=\"true-red\"></cwc-icon>\n          <span class=\"text-archive\">Carné de seguridad</span>\n        </cwc-cell>\n      </cwc-grid>\n      <cwc-grid>\n        <cwc-cell mobile-colspan=\"12\" class=\"cell-button\">        \n          <cwc-button variant=\"link\" class=\"m-h-reg link-cwc\">\n            <div style=\"font-size: small;\">\n              ACTUALIZAR DOCUMENTOS\n            </div>\n          </cwc-button>\n        </cwc-cell>\n      </cwc-grid>\n    </div>\n  </cwc-card>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_drivers_driver-details_driver-details_module_ts.js.map