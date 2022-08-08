"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_my-travels_details-trip-scheduled_details-trip-scheduled_module_ts"],{

/***/ 99278:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-scheduled/details-trip-scheduled-routing.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTripScheduledPageRoutingModule": () => (/* binding */ DetailsTripScheduledPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _details_trip_scheduled_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-trip-scheduled.page */ 58543);




const routes = [
    {
        path: '',
        component: _details_trip_scheduled_page__WEBPACK_IMPORTED_MODULE_0__.DetailsTripScheduledPage
    }
];
let DetailsTripScheduledPageRoutingModule = class DetailsTripScheduledPageRoutingModule {
};
DetailsTripScheduledPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsTripScheduledPageRoutingModule);



/***/ }),

/***/ 92263:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-scheduled/details-trip-scheduled.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTripScheduledPageModule": () => (/* binding */ DetailsTripScheduledPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _details_trip_scheduled_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-trip-scheduled-routing.module */ 99278);
/* harmony import */ var _details_trip_scheduled_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-trip-scheduled.page */ 58543);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);








let DetailsTripScheduledPageModule = class DetailsTripScheduledPageModule {
};
DetailsTripScheduledPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__.CmxWebComponentsModule.forRoot(),
            _details_trip_scheduled_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsTripScheduledPageRoutingModule
        ],
        declarations: [_details_trip_scheduled_page__WEBPACK_IMPORTED_MODULE_1__.DetailsTripScheduledPage]
    })
], DetailsTripScheduledPageModule);



/***/ }),

/***/ 58543:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-scheduled/details-trip-scheduled.page.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTripScheduledPage": () => (/* binding */ DetailsTripScheduledPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _details_trip_scheduled_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-trip-scheduled.page.html?ngResource */ 11610);
/* harmony import */ var _details_trip_scheduled_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-trip-scheduled.page.scss?ngResource */ 4986);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/auth/login.service */ 52876);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/travels/travel.service */ 74894);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _interfaces_travels_travel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../interfaces/travels/travel */ 44577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);








let DetailsTripScheduledPage = class DetailsTripScheduledPage {
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
DetailsTripScheduledPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__.TravelService },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
DetailsTripScheduledPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-details-trip-scheduled',
        template: _details_trip_scheduled_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_trip_scheduled_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsTripScheduledPage);



/***/ }),

/***/ 4986:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-scheduled/details-trip-scheduled.page.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = ".header-text {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  top: 1;\n  right: 50;\n  left: 0;\n  margin-left: 1rem;\n}\n\n.content-card {\n  padding-top: 1rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\nspan.style-name {\n  margin-left: 0.2rem;\n  font-size: small;\n  font-weight: 700;\n}\n\n.attr-name {\n  font-weight: 700;\n}\n\n.attr-user {\n  font-size: x-small;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.attr-trailer {\n  font-size: small;\n  margin-bottom: 1.5rem;\n}\n\n.attr-conductor {\n  font-size: small;\n  margin-top: 1rem;\n}\n\n.attr-document {\n  font-size: smaller;\n  font-weight: 700;\n  padding-bottom: 0.5rem;\n}\n\n.center-cell {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.text-info {\n  font-size: small;\n}\n\nspan.text-archive {\n  font-size: small;\n  color: black;\n  padding-left: 0;\n}\n\n.cell-button {\n  padding-top: 2rem;\n  text-align: right;\n}\n\n.button-cell {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.footer-detal-request {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n\n.btn-action {\n  margin-left: 1.5rem;\n}\n\nspan.text-btn {\n  padding-top: 0.1rem;\n  padding-bottom: 0.1rem;\n  font-size: small;\n}\n\n.modal-list {\n  --cwc-modal-border-width: 5rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n}\n\n.card-info {\n  padding: 0.8rem;\n  padding-bottom: 1rem;\n}\n\n.header-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtdHJpcC1zY2hlZHVsZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUE7RUFDSSxtQkFBQTtBQURKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBTUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEoiLCJmaWxlIjoiZGV0YWlscy10cmlwLXNjaGVkdWxlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRleHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDE7XHJcbiAgICByaWdodDogNTA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcblxyXG4uY29udGVudC1jYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuc3Bhbi5zdHlsZS1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmF0dHItbmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7ICAgIFxyXG59XHJcblxyXG4uYXR0ci11c2VyIHtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYXR0ci10cmFpbGVyIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5hdHRyLWNvbmR1Y3RvcntcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5cclxuLmF0dHItZG9jdW1lbnQge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jZW50ZXItY2VsbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi50ZXh0LWluZm97XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5zcGFuLnRleHQtYXJjaGl2ZXtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jZWxsLWJ1dHRvbntcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBcclxufVxyXG5cclxuLmJ1dHRvbi1jZWxse1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5mb290ZXItZGV0YWwtcmVxdWVzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufVxyXG4uYnRuLWFjdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG59XHJcbnNwYW4udGV4dC1idG4ge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5cclxuLy9Nb2RhbFxyXG5cclxuLm1vZGFsLWxpc3R7XHJcbiAgICAtLWN3Yy1tb2RhbC1ib3JkZXItd2lkdGggOiA1cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICAgIFxyXG59XHJcblxyXG4uY2FyZC1pbmZvIHtcclxuICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uaGVhZGVyLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG59Il19 */";

/***/ }),

/***/ 11610:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/details-trip-scheduled/details-trip-scheduled.page.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-header design-version=\"v2\" slot=\"header\" show-Menu-Button=\"false\" show-cemex-logo=\"false\">\r\n  <div class=\"header-text\">\r\n    <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px;\" (click)=\"onBack()\"></ion-icon>\r\n    <div class=\"attr-name\" style=\"padding-left: 1rem;\">Viaje {{travel.codeTravel}}</div>\r\n  </div>\r\n</cwc-header>\r\n<div slot=\"main\" class=\"content-card\">\r\n  <cwc-card class=\"card-info\" design-version=\"v1\">\r\n    <div class=\"card-content\">\r\n      <div *ngIf=\"rol !== 'Conductor'\" class=\"header-card\">\r\n        <div class=\"avatar-info\">\r\n          <div class=\"attr-user\">CHOFER</div>\r\n          <cwc-icon name=\"phone\" size=\"14px\" color=\"true-black\">\r\n          </cwc-icon>\r\n          <span class=\"number-phone\" style=\"margin-left: 0.5rem;\">{{travel.userName}}</span>\r\n        </div>\r\n        <cwc-cell class=\"flex flex__align--bullseye\" style=\"text-align: end;\">\r\n          <cwc-button variant=\"link\">\r\n            <div style=\"font-size: small; font-weight: 900;\">CONTACTAR</div>\r\n          </cwc-button>\r\n        </cwc-cell>\r\n      </div>\r\n\r\n      <div *ngIf=\"rol === 'Conductor'\" class=\"header-card\">\r\n        <div class=\"avatar-info\">\r\n          <div class=\"attr-name\">CONDUCTOR</div>\r\n          <span class=\"style-name\">{{travel.userName}}</span>\r\n        </div>\r\n        <cwc-status-indicator style=\"text-align: end;\" size=\"small\" class=\"statusI\" variant='success'>\r\n          <div class=\"statusI\">{{travel.statusTravelString}}</div>\r\n        </cwc-status-indicator>\r\n      </div>\r\n\r\n      <hr color=\"#D0D0D0\" />\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"attr-user\">ORIGEN</div>\r\n          <span class=\"attr-detail\">{{travel.source}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"attr-user\">DESTINO</div>\r\n          <span class=\"attr-detail\">{{travel.destiny}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n          <div class=\"attr-user\">PRODUCTO</div>\r\n          <span class=\"attr-detail\">{{travel.productName}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">FECHA Y HORA DE CITA</div>\r\n          <span class=\"attr-detail\">{{travel.dateTravel}} {{travel.timerStar}}</span>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">CANTIDAD</div>\r\n          <span class=\"attr-detail\">{{travel.amount}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">MODELO</div>\r\n          <span class=\"attr-detail\">{{travel.vehicleModelName}}</span>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">NUMERO DE PLACA</div>\r\n          <span class=\"attr-detail\">{{travel.vehicleLissenceName}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <cwc-grid class=\"demo-grid center-cell\">\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">CLIENTE</div>\r\n          <span class=\"attr-detail\">{{travel.companyName}}</span>\r\n        </cwc-cell>\r\n        <cwc-cell mobile-colspan=\"6\">\r\n          <div class=\"attr-user\">INICIO DE VIAJE</div>\r\n          <span class=\"attr-detail\">{{travel.timerStar}}</span>\r\n        </cwc-cell>\r\n      </cwc-grid>\r\n\r\n      <div *ngIf=\"rol !== 'Conductor'\">\r\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\" style=\"padding-bottom: 0.5rem;\">\r\n          <cwc-button\r\n            design-version=\"v1\"\r\n            variant=\"regular-block\">RASTREAR VIAJE</cwc-button>\r\n        </cwc-cell>\r\n\r\n        <hr color=\"#D0D0D0\" />\r\n        <cwc-grid class=\"demo-grid\" style=\"padding-top: 0.5rem; padding-bottom: 1rem;\">\r\n          <cwc-cell mobile-colspan=\"6\" >                       \r\n              <div>Actualizaciones</div>\r\n          </cwc-cell>\r\n          <cwc-cell mobile-colspan=\"6\" style=\"text-align: end;\">\r\n              <cwc-button variant=\"link\">\r\n                  <div class=\"text-button\">Mostrar</div>\r\n              </cwc-button>\r\n          </cwc-cell>\r\n        </cwc-grid>\r\n        <cwc-grid class=\"demo-grid\">\r\n            <cwc-cell mobile-colspan=\"12\">\r\n                <div class=\"attr-user\">Fecha y hora de cita</div>\r\n                <span>10:30 am</span>\r\n            </cwc-cell>\r\n            <cwc-cell mobile-colspan=\"12\">   \r\n                <div class=\"attr-user\">Actualización</div>\r\n                <span>Lluvias y deslabe en la carretera de planta Medellín, posible retraso de 1 hora.</span>\r\n            </cwc-cell>\r\n        </cwc-grid>\r\n      </div>\r\n\r\n      <div *ngIf=\"rol === 'Conductor'\">\r\n        <hr color=\"#D0D0D0\" />\r\n        <cwc-grid class=\"demo-grid center-cell\">\r\n          <cwc-cell class=\"flex flex__align--bullseye\" style=\"text-align: end;\">\r\n            <cwc-button variant=\"link\">\r\n              <div style=\"font-size: 15px; font-weight: normal;\">CONFIRMAR VIAJE EN TU CX</div>\r\n            </cwc-button>\r\n          </cwc-cell>\r\n          <cwc-cell class=\"flex flex__align--bullseye\" style=\"text-align: end;\">\r\n            <cwc-button variant=\"link\">\r\n              <div style=\"font-size: 15px; font-weight: normal;\">CANCELAR</div>\r\n            </cwc-button>\r\n          </cwc-cell>\r\n        </cwc-grid>\r\n      </div>\r\n    </div>\r\n  </cwc-card>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-travels_details-trip-scheduled_details-trip-scheduled_module_ts.js.map