"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 53234:
/*!**************************************************************************!*\
  !*** ./src/app/pages/home/components/home-admin/home-admin.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeAdminComponent": () => (/* binding */ HomeAdminComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_admin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-admin.component.html?ngResource */ 10071);
/* harmony import */ var _home_admin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-admin.component.scss?ngResource */ 50118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HomeAdminComponent = class HomeAdminComponent {
    constructor() {
        this.linkClever = "https://cemex.sercae.com/sercae/pages/core/login.jsf";
        this.linkTrip = "https://tuviajecx.com/cemexterceros/login";
    }
    ngOnInit() { }
    onUrl(url) {
        window.open(url, '_system', 'location=yes');
    }
};
HomeAdminComponent.ctorParameters = () => [];
HomeAdminComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-admin',
        template: _home_admin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_admin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeAdminComponent);



/***/ }),

/***/ 63696:
/*!************************************************************************!*\
  !*** ./src/app/pages/home/components/home-user/home-user.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeUserComponent": () => (/* binding */ HomeUserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-user.component.html?ngResource */ 36893);
/* harmony import */ var _home_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-user.component.scss?ngResource */ 44705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let HomeUserComponent = class HomeUserComponent {
    constructor() {
        this.linkClever = "https://cemex.sercae.com/sercae/pages/core/login.jsf";
        this.linkTrip = "https://tuviajecx.com/cemexterceros/login";
    }
    ngOnInit() { }
    onUrl(url) {
        window.open(url, '_system', 'location=yes');
    }
};
HomeUserComponent.ctorParameters = () => [];
HomeUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-user',
        template: _home_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_user_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeUserComponent);



/***/ }),

/***/ 96610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 10678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 57994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 96610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 10678);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout.module */ 93077);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);
/* harmony import */ var _components_home_user_home_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-user/home-user.component */ 63696);
/* harmony import */ var _components_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home-admin/home-admin.component */ 53234);












let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__.LayoutPageModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_4__.CmxWebComponentsModule.forRoot(),
        ],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage,
            _components_home_user_home_user_component__WEBPACK_IMPORTED_MODULE_5__.HomeUserComponent,
            _components_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_6__.HomeAdminComponent
        ]
    })
], HomePageModule);



/***/ }),

/***/ 10678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 12260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/login.service */ 52876);





let HomePage = class HomePage {
    constructor(loginService) {
        this.loginService = loginService;
    }
    ngOnInit() {
        this.rol = this.loginService.profileUser.Roles;
    }
};
HomePage.ctorParameters = () => [
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 50118:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/home/components/home-admin/home-admin.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".content-body-trip {\n  display: flex;\n  justify-content: center;\n  padding-top: 1rem;\n}\n\n.item-trip {\n  display: flex;\n  margin-bottom: 0.8rem;\n}\n\nspan.style-text {\n  margin-right: 10px;\n  font-weight: 700;\n  line-height: 15px;\n  font-size: 18px;\n}\n\n.button-css {\n  margin: 0.3rem;\n  font-size: 14px;\n  border-radius: 5px;\n}\n\n.content-header {\n  text-align: center;\n}\n\n.content-header span {\n  font-size: 3rem;\n}\n\n.content-header h5 {\n  margin-top: 0;\n}\n\n.content-body-trip {\n  display: flex;\n  justify-content: center;\n  padding-top: 1rem;\n}\n\n.item-trip {\n  display: flex;\n  margin-bottom: 0.8rem;\n}\n\n.content-request {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nspan.text-request {\n  margin-right: 0.5rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\n.content-info-request {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBR0o7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQUtKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBS0oiLCJmaWxlIjoiaG9tZS1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWJvZHktdHJpcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG4uaXRlbS10cmlwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XHJcbn1cclxuc3Bhbi5zdHlsZS10ZXh0IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmJ1dHRvbi1jc3N7XHJcbiAgICBtYXJnaW46IDAuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuXHJcblxyXG4uY29udGVudC1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250ZW50LWhlYWRlciBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG4uY29udGVudC1oZWFkZXIgaDUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4uY29udGVudC1ib2R5LXRyaXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbn1cclxuLml0ZW0tdHJpcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250ZW50LXJlcXVlc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuc3Bhbi50ZXh0LXJlcXVlc3Qge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmNvbnRlbnQtaW5mby1yZXF1ZXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 44705:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/home/components/home-user/home-user.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".content-body-trip {\n  display: flex;\n  justify-content: center;\n  padding-top: 1rem;\n}\n\n.item-trip {\n  display: flex;\n  margin-bottom: 0.8rem;\n}\n\nspan.style-text {\n  margin-right: 10px;\n  font-weight: 700;\n  line-height: 15px;\n  font-size: 18px;\n}\n\n.button-css {\n  margin: 0.3rem;\n  font-size: 14px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHSiIsImZpbGUiOiJob21lLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1ib2R5LXRyaXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbn1cclxuLml0ZW0tdHJpcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xyXG59XHJcbnNwYW4uc3R5bGUtdGV4dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5idXR0b24tY3Nze1xyXG4gICAgbWFyZ2luOiAwLjNyZW07XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 12260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".content-grid-roles {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n}\n\n.card-roles {\n  height: 9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.title-card {\n  padding: 0.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNHLGVBQUE7RUFDQSxrQkFBQTtBQUNIIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtZ3JpZC1yb2xlc3tcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLXJvbGVze1xyXG4gICAgaGVpZ2h0OjlyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUtY2FyZHtcclxuICAgcGFkZGluZzogMC41cmVtO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 10071:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/home/components/home-admin/home-admin.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<h6 style=\"margin-top: 1.8rem;\">Los viajes de hoy</h6>\r\n<cwc-grid class=\"demo-grid\">\r\n  <cwc-cell mobile-colspan=\"6\">\r\n    <cwc-card design-version=\"v2\">\r\n        <div class=\"main-content-card\">\r\n            <div class=\"content-header\">\r\n                <span>6</span>\r\n                <h6>Pre-turno</h6>\r\n            </div>\r\n            <hr/>\r\n            <div class=\"content-body-trip\">\r\n                <div>\r\n                    <div class=\"item-trip\">\r\n                        <span class=\"style-text\">7</span> \r\n                        <cwc-status-indicator variant='warning'>\r\n                        pendientes\r\n                        </cwc-status-indicator>\r\n                    </div>\r\n                    <div class=\"item-trip\">\r\n                        <span class=\"style-text\">3</span> \r\n                        <cwc-status-indicator variant='success'>\r\n                        Confirmados\r\n                        </cwc-status-indicator>\r\n                    </div>\r\n                    <div class=\"item-trip\">\r\n                      <br>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </cwc-card>                \r\n  </cwc-cell>\r\n\r\n  <cwc-cell mobile-colspan=\"6\">\r\n    <cwc-card design-version=\"v2\">\r\n        <div class=\"main-content-card\">\r\n            <div class=\"content-header\">\r\n                <span>12</span>\r\n                <h6>En turno</h6>\r\n            </div>\r\n            <hr/>\r\n            <div class=\"content-body-trip\">\r\n                <div>\r\n                    <div class=\"item-trip\">\r\n                        <span class=\"style-text\">7</span> \r\n                        <cwc-status-indicator variant='info'>\r\n                          Cargando\r\n                        </cwc-status-indicator>\r\n                    </div>\r\n                    <div class=\"item-trip\">\r\n                        <span class=\"style-text\">3</span> \r\n                        <cwc-status-indicator variant='disabled'>\r\n                          Cargado\r\n                        </cwc-status-indicator>\r\n                    </div>\r\n                    <div class=\"item-trip\">\r\n                      <span class=\"style-text\">3</span> \r\n                      <cwc-status-indicator variant='disabled'>\r\n                          Descargado\r\n                      </cwc-status-indicator>\r\n                  </div>                               \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </cwc-card>\r\n  </cwc-cell>\r\n</cwc-grid>\r\n\r\n<cwc-card style=\"margin-top: 1rem;\" design-version=\"v2\">\r\n  <div style=\"padding: 0.8rem\">\r\n      <div class=\"content-request\">\r\n          <div class=\"content-info-request\">\r\n            <span class=\"style-text\">2</span>\r\n            <span>Empresas</span>\r\n          </div>\r\n          <cwc-button variant=\"link\">Ver más</cwc-button>\r\n      </div>\r\n      <hr color=\"#D0D0D0\"/>\r\n      <div class=\"content-request\">\r\n        <div class=\"content-info-request\">\r\n            <span class=\"style-text\">2</span>\r\n            <span>Empresas</span>\r\n        </div>\r\n        <cwc-button variant=\"link\">Ver más</cwc-button>\r\n      </div>\r\n      <hr color=\"#D0D0D0\"/>\r\n      <div class=\"content-request\">\r\n        <div class=\"content-info-request\">\r\n            <span class=\"style-text\">2</span>\r\n            <span>Empresas</span>\r\n        </div>\r\n        <cwc-button variant=\"link\">Ver más</cwc-button>\r\n      </div>\r\n  </div>\r\n</cwc-card>\r\n\r\n<h6 style=\"margin-top: 1.5rem;\">Buscar viaje</h6>\r\n<cwc-card style=\"margin-top: 1rem;\" design-version=\"v2\">\r\n  <div class=\"card-content\">\r\n   <h6 style=\"text-align: center;\">Buscar viaje</h6>\r\n   <p style=\"text-align: center; font-size: 15px;\">Revisa entre nuestros distintos departamentos disponibles un viaje que se ajueste a tu ruta y horario.</p>\r\n  </div>\r\n</cwc-card>\r\n\r\n<cwc-button  style=\"margin-top: 1rem;\" variant=\"regular-block\">\r\n  <div class=\"button-css\">BUSCAR VIAJE</div>\r\n</cwc-button>\r\n\r\n<cwc-card style=\"margin-top: 1rem;\" design-version=\"v2\">\r\n  <div class=\"card-content\">\r\n   <h6 style=\"text-align: center;\">Accede a tu cuenta Clever</h6>\r\n   <p style=\"text-align: center; font-size: small;\">Revisa tus datos y manten tu perfil actualizado para un mejor seguimiento</p>\r\n   <div>\r\n    <cwc-button class=\"button-css\" variant=\"regular-block\" (click)=\"onUrl(linkClever)\">\r\n      <div class=\"button-css\">CLEVER GLOBAL</div>\r\n    </cwc-button>\r\n   </div>\r\n  </div>\r\n</cwc-card>\r\n\r\n<cwc-card style=\"margin-top: 1rem;\" design-version=\"v2\">\r\n  <div class=\"card-content\">\r\n   <h6 style=\"text-align: center;\">Tu viaje CEMEX</h6>\r\n   <p style=\"text-align: center; font-size: small;\">Verifica el estado de tus viajes y actualizaciones de los mismos</p>\r\n   <div>\r\n    <cwc-button class=\"button-css\" variant=\"regular-block\" (click)=\"onUrl(linkTrip)\">\r\n      <div class=\"button-css\" >Tu viaje CEMEX</div>\r\n      </cwc-button>\r\n   </div>\r\n  </div>\r\n</cwc-card>\r\n";

/***/ }),

/***/ 36893:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/home/components/home-user/home-user.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<h6 style=\"margin-top: 1.8rem;\">Los viajes de hoy</h6>\r\n<cwc-card design-version=\"v2\">\r\n  <div class=\"card-content\" design-version=\"v2\">\r\n    <p style=\"text-align: center; font-size: small;\">Tu siguiente viaje <b>098877698</b> está en <b>pre-turno</b></p>\r\n    <h6 style=\"text-align: center;\">Revisar mi siguiente viaje</h6>\r\n    <hr color=\"#D0D0D0\"/>\r\n    <h6 style=\"text-align: center;\">Revisar mis viajes</h6>\r\n  </div>\r\n</cwc-card>\r\n\r\n<h6 style=\"margin-top: 1.5rem;\">Buscar viaje</h6>\r\n<cwc-card style=\"margin-top: 1rem;\" design-version=\"v2\">\r\n  <div class=\"card-content\">\r\n   <h6 style=\"text-align: center;\">Buscar viaje</h6>\r\n   <p style=\"text-align: center; font-size: 15px;\">Revisa entre nuestros distintos departamentos disponibles un viaje que se ajueste a tu ruta y horario.</p>\r\n  </div>\r\n</cwc-card>\r\n\r\n<cwc-button  style=\"margin-top: 1rem;\" variant=\"regular-block\">\r\n  <div class=\"button-css\">BUSCAR VIAJE</div>\r\n</cwc-button>\r\n\r\n<cwc-card style=\"margin-top: 1rem;\" design-version=\"v2\">\r\n  <div class=\"card-content\">\r\n   <h6 style=\"text-align: center;\">Accede a tu cuenta Clever</h6>\r\n   <p style=\"text-align: center; font-size: small;\">Revisa tus datos y manten tu perfil actualizado para un mejor seguimiento</p>\r\n   <div>\r\n    <cwc-button class=\"button-css\" variant=\"regular-block\" (click)=\"onUrl(linkClever)\">\r\n      <div class=\"button-css\">CLEVER GLOBAL</div>\r\n    </cwc-button>\r\n   </div>\r\n  </div>\r\n</cwc-card>\r\n\r\n<cwc-card style=\"margin-top: 1rem;\" design-version=\"v2\">\r\n  <div class=\"card-content\">\r\n   <h6 style=\"text-align: center;\">Tu viaje CEMEX</h6>\r\n   <p style=\"text-align: center; font-size: small;\">Verifica el estado de tus viajes y actualizaciones de los mismos</p>\r\n   <div>\r\n    <cwc-button class=\"button-css\" variant=\"regular-block\" (click)=\"onUrl(linkTrip)\">\r\n      <div class=\"button-css\" >Tu viaje CEMEX</div>\r\n      </cwc-button>\r\n   </div>\r\n  </div>\r\n</cwc-card>\r\n";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<app-layout class=\"card-size\">\r\n  <div *ngIf=\"rol !== 'Administrador Logistico Tercero'\">\r\n    <app-home-user></app-home-user>\r\n  </div>\r\n  <div *ngIf=\"rol === 'Administrador Logistico Tercero'\">\r\n    <app-home-admin></app-home-admin>\r\n  </div>\r\n</app-layout>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map