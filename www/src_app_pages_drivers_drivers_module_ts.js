"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_drivers_drivers_module_ts"],{

/***/ 43378:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/drivers/components/driver-list/driver-list.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverListComponent": () => (/* binding */ DriverListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _driver_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-list.component.html?ngResource */ 42686);
/* harmony import */ var _driver_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-list.component.scss?ngResource */ 2351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/drivers.service */ 50774);






let DriverListComponent = class DriverListComponent {
    constructor(navCtrl, driversService) {
        this.navCtrl = navCtrl;
        this.driversService = driversService;
        this.drivers = [];
    }
    ngOnInit() { }
    detailDriver(id) {
        console.log(id);
        this.driversService.id = id;
        this.navCtrl.navigateRoot('/app/conductores/detalles', { animated: false });
    }
};
DriverListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _services_drivers_service__WEBPACK_IMPORTED_MODULE_2__.DriversService }
];
DriverListComponent.propDecorators = {
    drivers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
DriverListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-driver-list',
        template: _driver_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_driver_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DriverListComponent);



/***/ }),

/***/ 31165:
/*!*********************************************************!*\
  !*** ./src/app/pages/drivers/drivers-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversPageRoutingModule": () => (/* binding */ DriversPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _drivers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drivers.page */ 44697);




const routes = [
    {
        path: '',
        component: _drivers_page__WEBPACK_IMPORTED_MODULE_0__.DriversPage
    },
    {
        path: 'agregar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_drivers_new-driver_new-driver_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./new-driver/new-driver.module */ 13016)).then(m => m.NewDriverPageModule)
    },
    {
        path: 'actualizar',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_drivers_update-driver_update-driver_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./update-driver/update-driver.module */ 14451)).then(m => m.UpdateDriverPageModule)
    },
    {
        path: 'detalles',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_drivers_driver-details_driver-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./driver-details/driver-details.module */ 25662)).then(m => m.DriverDetailsPageModule)
    }
];
let DriversPageRoutingModule = class DriversPageRoutingModule {
};
DriversPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DriversPageRoutingModule);



/***/ }),

/***/ 51324:
/*!*************************************************!*\
  !*** ./src/app/pages/drivers/drivers.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversPageModule": () => (/* binding */ DriversPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _drivers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drivers-routing.module */ 31165);
/* harmony import */ var _drivers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drivers.page */ 44697);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/layout.module */ 93077);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ 45642);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);
/* harmony import */ var _components_driver_list_driver_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/driver-list/driver-list.component */ 43378);











let DriversPageModule = class DriversPageModule {
};
DriversPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _drivers_routing_module__WEBPACK_IMPORTED_MODULE_0__.DriversPageRoutingModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__.LayoutPageModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_4__.CmxWebComponentsModule.forRoot(),
        ],
        declarations: [
            _drivers_page__WEBPACK_IMPORTED_MODULE_1__.DriversPage,
            _components_driver_list_driver_list_component__WEBPACK_IMPORTED_MODULE_5__.DriverListComponent
        ]
    })
], DriversPageModule);



/***/ }),

/***/ 44697:
/*!***********************************************!*\
  !*** ./src/app/pages/drivers/drivers.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversPage": () => (/* binding */ DriversPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _drivers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drivers.page.html?ngResource */ 55244);
/* harmony import */ var _drivers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drivers.page.scss?ngResource */ 57345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/login.service */ 52876);
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/drivers.service */ 50774);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44661);







let DriversPage = class DriversPage {
    constructor(driversService, loginService) {
        this.driversService = driversService;
        this.loginService = loginService;
        this.driversList = [];
        this.loading = false;
    }
    ngOnInit() {
        this.getDataList();
    }
    getDataList() {
        this.loading = true;
        this.driversService.getDriverList(this.loginService.profileUser.CompanyId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
            this.loading = false;
        })).subscribe(data => {
            this.driversList = data.data;
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            this.driversList = [];
            this.getDataList();
            event.target.complete();
        }, 2000);
    }
};
DriversPage.ctorParameters = () => [
    { type: _services_drivers_service__WEBPACK_IMPORTED_MODULE_3__.DriversService },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
DriversPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-drivers',
        template: _drivers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_drivers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DriversPage);



/***/ }),

/***/ 2351:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/drivers/components/driver-list/driver-list.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".card-content-margin {\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}\n\n.text-info {\n  font-size: small;\n}\n\n.attr-user {\n  font-weight: 200;\n}\n\n.text-company {\n  font-size: small;\n  padding-top: 0.8rem;\n}\n\n.content-btn-edit {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.text-button {\n  font-weight: 700;\n  padding-top: 0.8rem;\n  font-size: x-small;\n}\n\n.text-stade {\n  font-size: small;\n}\n\n.icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaXZlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6ImRyaXZlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGVudC1tYXJnaW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4udGV4dC1pbmZve1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLmF0dHItdXNlciB7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4udGV4dC1jb21wYW55e1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHBhZGRpbmctdG9wOiAwLjhyZW07XHJcbn1cclxuXHJcbi5jb250ZW50LWJ0bi1lZGl0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi50ZXh0LWJ1dHRvbntcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMC44cmVtO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4udGV4dC1zdGFkZXtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG59Il19 */";

/***/ }),

/***/ 57345:
/*!************************************************************!*\
  !*** ./src/app/pages/drivers/drivers.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".navbar {\n  margin-top: 9.5rem;\n  margin-left: 1rem;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  overflow: auto;\n}\n\n.icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 18px;\n}\n\n.search-text {\n  width: 100%;\n  height: 10px;\n  padding-bottom: 0;\n}\n\n.text-vehicles {\n  font-size: small;\n  font-weight: 700;\n}\n\n.float {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  text-align: center;\n  background-color: #05376E;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaXZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNIOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDRyx5QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiZHJpdmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDkuNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXRleHR7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDEwcHg7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGV4dC12ZWhpY2xlc3tcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZmxvYXR7XHJcblx0cG9zaXRpb246Zml4ZWQ7XHJcblx0Ym90dG9tOjE1cHg7XHJcblx0cmlnaHQ6MTVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUzNzZFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweFxyXG59Il19 */";

/***/ }),

/***/ 42686:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/drivers/components/driver-list/driver-list.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-card *ngFor=\"let driver of drivers\" (click)=\"detailDriver(driver.id)\" class=\"card-info\" design-version=\"v1\">\r\n  <div class=\"card-content\">\r\n    <cwc-grid class=\"demo-grid\" >\r\n      <cwc-cell colspan=\"12\" mobile-colspan=\"9\">   \r\n          <div class=\"attr-user\">{{driver.firstLastName}}</div>\r\n          <span class=\"text-info\">{{driver.phoneNumber}}</span>\r\n      </cwc-cell>\r\n      <cwc-cell colspan=\"12\" mobile-colspan=\"3\">\r\n        <div class=\"content-btn-edit\">            \r\n          <cwc-icon name='check-rounded-active-fill' size=\"8px\" color='bright-green'></cwc-icon>\r\n          <span class=\"text-stade\">{{driver.travelStatus}}</span>\r\n        </div>   \r\n      </cwc-cell>\r\n    </cwc-grid>\r\n    <cwc-grid class=\"demo-grid\" >\r\n      <cwc-cell colspan=\"12\" mobile-colspan=\"6\">   \r\n          <div class=\"text-company\">{{driver.company}}</div>\r\n      </cwc-cell>\r\n      <cwc-cell colspan=\"12\" mobile-colspan=\"6\">   \r\n        <div class=\"content-btn-edit\">\r\n          <br>\r\n          <cwc-button variant=\"link\">\r\n            <div class=\"text-button\">VER MÁS</div>\r\n          </cwc-button>\r\n        </div> \r\n      </cwc-cell>\r\n    </cwc-grid>\r\n  </div>\r\n</cwc-card>";

/***/ }),

/***/ 55244:
/*!************************************************************!*\
  !*** ./src/app/pages/drivers/drivers.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<app-layout class=\"card-size\">\r\n  <cwc-grid class=\"demo-grid\" row-gap=\"2px\">\r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"11\" style=\"padding-bottom: 0;\">     \r\n      <div>\r\n        <cwc-input class=\"search-text\" variant=\"regular\" rtl=\"false\" trailing-icon='magnifier-glass' placeholder='Buscar...'></cwc-input>  \r\n      </div>       \r\n    </cwc-cell> \r\n    <cwc-cell colspan=\"12\" mobile-colspan=\"1\">    \r\n      <div class=\"icon\">\r\n        <cwc-button variant=\"link\">          \r\n          <cwc-icon variant=\"link\" name='controls' size=\"20px\" aria-role=\"button\"></cwc-icon>\r\n        </cwc-button>\r\n      </div>  \r\n    </cwc-cell>    \r\n  </cwc-grid>  \r\n  <h6 class=\"text-vehicles\">Conductores ({{driversList.length}})</h6>\r\n  <ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <div class=\"navbar\">    \r\n      <app-driver-list [drivers]=\"driversList\"></app-driver-list>\r\n    </div>  \r\n  </ion-content>\r\n  \r\n  <cwc-button class=\"float\" routerLink=\"agregar\" design-version=\"v2\" size=\"large\" variant=\"ghost\" ratio=\"square\" trailing-icon=\"plus\"></cwc-button>\r\n</app-layout>\r\n\r\n<div class=\"loading-content\" *ngIf=\"loading\">\r\n  <cwc-loader>\r\n    <span slot='loading'>Espere un momento...</span>\r\n  </cwc-loader>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_drivers_drivers_module_ts.js.map