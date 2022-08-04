"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_my-travels_details-trip-previous_details-trip-previous_module_ts"],{

/***/ 47369:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-previous/details-trip-previous-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTripPreviousPageRoutingModule": () => (/* binding */ DetailsTripPreviousPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _details_trip_previous_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-trip-previous.page */ 35420);




const routes = [
    {
        path: '',
        component: _details_trip_previous_page__WEBPACK_IMPORTED_MODULE_0__.DetailsTripPreviousPage
    }
];
let DetailsTripPreviousPageRoutingModule = class DetailsTripPreviousPageRoutingModule {
};
DetailsTripPreviousPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsTripPreviousPageRoutingModule);



/***/ }),

/***/ 33922:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-previous/details-trip-previous.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTripPreviousPageModule": () => (/* binding */ DetailsTripPreviousPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _details_trip_previous_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-trip-previous-routing.module */ 47369);
/* harmony import */ var _details_trip_previous_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-trip-previous.page */ 35420);








let DetailsTripPreviousPageModule = class DetailsTripPreviousPageModule {
};
DetailsTripPreviousPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_0__.CmxWebComponentsModule.forRoot(),
            _details_trip_previous_routing_module__WEBPACK_IMPORTED_MODULE_1__.DetailsTripPreviousPageRoutingModule
        ],
        declarations: [_details_trip_previous_page__WEBPACK_IMPORTED_MODULE_2__.DetailsTripPreviousPage]
    })
], DetailsTripPreviousPageModule);



/***/ }),

/***/ 35420:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-previous/details-trip-previous.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTripPreviousPage": () => (/* binding */ DetailsTripPreviousPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _details_trip_previous_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-trip-previous.page.html?ngResource */ 46266);
/* harmony import */ var _details_trip_previous_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-trip-previous.page.scss?ngResource */ 42035);
/* harmony import */ var src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/login.service */ 52876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/travels/travel.service */ 74894);
/* harmony import */ var _interfaces_travels_travel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../interfaces/travels/travel */ 44577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);








let DetailsTripPreviousPage = class DetailsTripPreviousPage {
    constructor(location, travelService, loginService) {
        this.location = location;
        this.travelService = travelService;
        this.loginService = loginService;
        this.travel = new _interfaces_travels_travel__WEBPACK_IMPORTED_MODULE_4__.Travel();
    }
    ngOnInit() {
        this.rol = this.loginService.profileUser.Roles;
        this.getData();
    }
    onBack() {
        this.location.back();
    }
    getData() {
        if (this.travelService.id !== null) {
            this.id = this.travelService.id;
            this.travelService.getTravelDetail(this.id).subscribe(data => {
                this.travel = data.data;
            });
        }
    }
};
DetailsTripPreviousPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__.TravelService },
    { type: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
DetailsTripPreviousPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-details-trip-previous',
        template: _details_trip_previous_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_trip_previous_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsTripPreviousPage);



/***/ }),

/***/ 42035:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-previous/details-trip-previous.page.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = ".header-text {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  top: 1;\n  right: 50;\n  left: 0;\n  margin-left: 1rem;\n}\n\n.content-card {\n  padding-top: 3rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-bottom: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\nspan.style-name {\n  margin-left: 0.2rem;\n  font-size: small;\n  font-weight: 700;\n}\n\n.attr-name {\n  font-weight: 700;\n}\n\n.attr-user {\n  font-size: x-small;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.attr-trailer {\n  font-size: small;\n  margin-bottom: 1.5rem;\n}\n\n.attr-conductor {\n  font-size: small;\n  margin-top: 1rem;\n}\n\n.attr-document {\n  font-size: smaller;\n  font-weight: 700;\n  padding-bottom: 0.5rem;\n}\n\n.center-cell {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.text-info {\n  font-size: small;\n}\n\nspan.text-archive {\n  font-size: small;\n  color: black;\n  padding-left: 0;\n}\n\n.cell-button {\n  padding-top: 2rem;\n  text-align: right;\n}\n\n.button-cell {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.footer-detal-request {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n\n.btn-action {\n  margin-left: 1.5rem;\n}\n\nspan.text-btn {\n  padding-top: 0.1rem;\n  padding-bottom: 0.1rem;\n  font-size: small;\n}\n\n.modal-list {\n  --cwc-modal-border-width: 5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n}\n\n.card-info {\n  padding: 0.8rem;\n  padding-bottom: 1rem;\n}\n\n.header-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtdHJpcC1wcmV2aW91cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUlBO0VBQ0ksbUJBQUE7QUFESjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQU1BO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUhKIiwiZmlsZSI6ImRldGFpbHMtdHJpcC1wcmV2aW91cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRleHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDE7XHJcbiAgICByaWdodDogNTA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcblxyXG4uY29udGVudC1jYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbnNwYW4uc3R5bGUtbmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5hdHRyLW5hbWV7XHJcbiAgICBmb250LXdlaWdodDogNzAwOyAgICBcclxufVxyXG5cclxuLmF0dHItdXNlciB7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmF0dHItdHJhaWxlciB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uYXR0ci1jb25kdWN0b3J7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuXHJcbi5hdHRyLWRvY3VtZW50IHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uY2VudGVyLWNlbGwge1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4udGV4dC1pbmZve1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuc3Bhbi50ZXh0LWFyY2hpdmV7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uY2VsbC1idXR0b257XHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgXHJcbn1cclxuXHJcbi5idXR0b24tY2VsbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uZm9vdGVyLWRldGFsLXJlcXVlc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuLmJ0bi1hY3Rpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxufVxyXG5zcGFuLnRleHQtYnRuIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjFyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuXHJcbi8vTW9kYWxcclxuXHJcbi5tb2RhbC1saXN0e1xyXG4gICAgLS1jd2MtbW9kYWwtYm9yZGVyLXdpZHRoIDogNXJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAgICBcclxufVxyXG5cclxuLmNhcmQtaW5mbyB7XHJcbiAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmhlYWRlci1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxufSJdfQ== */";

/***/ }),

/***/ 46266:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-previous/details-trip-previous.page.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-header design-version=\"v2\" slot=\"header\" show-Menu-Button=\"false\" show-cemex-logo=\"false\">\r\n  <div class=\"header-text\">\r\n    <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px;\" (click)=\"onBack()\"></ion-icon>\r\n    <div class=\"attr-name\" style=\"padding-left: 1rem;\">Viaje {{travel.codeTravel}}</div>\r\n  </div>\r\n</cwc-header>\r\n<div slot=\"main\" class=\"content-card\">\r\n  <cwc-card class=\"card-info\" design-version=\"v1\">\r\n    <div class=\"card-content\">\r\n      <div class=\"header-card\">\r\n        <div class=\"avatar-info\">\r\n          <div class=\"attr-name\">CONDUCTOR</div>\r\n          <span class=\"style-name\">{{travel.userName}}</span>\r\n        </div>\r\n        <cwc-status-indicator *ngIf=\"rol === 'Conductor'\" style=\"text-align: end;\" size=\"small\" class=\"statusI\"\r\n          variant='success'>\r\n          <div class=\"statusI\">{{travel.statusTravelString}}</div>\r\n        </cwc-status-indicator>\r\n      </div>\r\n\r\n      <hr color=\"#D0D0D0\" />\r\n      <cwc-grid class=\"demo-grid center-cell\" style=\"padding-top: 0.5rem;\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"attr-user\">ORIGEN</div>\r\n          <span class=\"attr-detail\">{{travel.source}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"attr-user\">DESTINO</div>\r\n          <span class=\"attr-detail\">{{travel.destiny}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"attr-user\">PRODUCTO</div>\r\n          <span class=\"attr-detail\">{{travel.productName}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">FECHA Y HORA DE CITA</div>\r\n          <span class=\"attr-detail\">{{travel.dateTravel}} {{travel.timerStar}}</span>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">CANTIDAD</div>\r\n          <span class=\"attr-detail\">{{travel.amount}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">MODELO</div>\r\n          <span class=\"attr-detail\">{{travel.vehicleModelName}}</span>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">NUMERO DE PLACA</div>\r\n          <span class=\"attr-detail\">{{travel.vehicleLissenceName}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">CLIENTE</div>\r\n          <span class=\"attr-detail\">{{travel.companyName}}</span>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">INICIO DE VIAJE</div>\r\n          <span class=\"attr-detail\">{{travel.timerStar}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">INICIO DESCARGA</div>\r\n          <span class=\"attr-detail\">{{travel.dowloadStar}}</span>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">FIN DESCARGA</div>\r\n          <span class=\"attr-detail\">{{travel.dowloadEnd}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell mobile-colspan=\"12\">\r\n          <div class=\"attr-user\">FIN VIAJE</div>\r\n          <span class=\"attr-detail\">{{travel.timerEndTravel}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <hr color=\"#D0D0D0\" />\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell class=\"flex flex__align--bullseye\" style=\"text-align: end;\">\r\n          <cwc-button variant=\"link\">\r\n            <div style=\"font-size: 15px; font-weight: normal;\">VER REPORTE</div>\r\n          </cwc-button>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n    </div>\r\n  </cwc-card>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-travels_details-trip-previous_details-trip-previous_module_ts.js.map