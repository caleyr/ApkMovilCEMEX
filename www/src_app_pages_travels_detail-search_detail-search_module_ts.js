"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_travels_detail-search_detail-search_module_ts"],{

/***/ 93720:
/*!*****************************************************!*\
  !*** ./src/app/interfaces/travels/travel-search.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelSearch": () => (/* binding */ TravelSearch)
/* harmony export */ });
class TravelSearch {
}


/***/ }),

/***/ 24050:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/travels/detail-search/detail-search-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailSearchPageRoutingModule": () => (/* binding */ DetailSearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _detail_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-search.page */ 45714);




const routes = [
    {
        path: '',
        component: _detail_search_page__WEBPACK_IMPORTED_MODULE_0__.DetailSearchPage
    }
];
let DetailSearchPageRoutingModule = class DetailSearchPageRoutingModule {
};
DetailSearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailSearchPageRoutingModule);



/***/ }),

/***/ 90578:
/*!*********************************************************************!*\
  !*** ./src/app/pages/travels/detail-search/detail-search.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailSearchPageModule": () => (/* binding */ DetailSearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _detail_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-search-routing.module */ 24050);
/* harmony import */ var _detail_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-search.page */ 45714);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);









let DetailSearchPageModule = class DetailSearchPageModule {
};
DetailSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _detail_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailSearchPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__.CmxWebComponentsModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_detail_search_page__WEBPACK_IMPORTED_MODULE_1__.DetailSearchPage]
    })
], DetailSearchPageModule);



/***/ }),

/***/ 45714:
/*!*******************************************************************!*\
  !*** ./src/app/pages/travels/detail-search/detail-search.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailSearchPage": () => (/* binding */ DetailSearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _detail_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-search.page.html?ngResource */ 67561);
/* harmony import */ var _detail_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-search.page.scss?ngResource */ 88185);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/travels/travel.service */ 74894);
/* harmony import */ var _interfaces_travels_travel_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../interfaces/travels/travel-search */ 93720);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth/login.service */ 52876);
/* harmony import */ var _services_drivers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/drivers.service */ 50774);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);










let DetailSearchPage = class DetailSearchPage {
    constructor(loginService, location, travelService, driversService, navCtrl) {
        this.loginService = loginService;
        this.location = location;
        this.travelService = travelService;
        this.driversService = driversService;
        this.navCtrl = navCtrl;
        this.alertShow = false;
        this.addDriver = false;
        this.rol = null;
        this.travel = new _interfaces_travels_travel_search__WEBPACK_IMPORTED_MODULE_3__.TravelSearch();
        this.driverList = [];
        this.driverAssign = null;
        this.driverValidate = true;
    }
    ngOnInit() {
        this.rol = this.loginService.profileUser.Roles;
        console.log(this.rol);
        this.codeTravel = this.travelService.code;
        this.getData(this.codeTravel);
    }
    getData(code) {
        this.travelService.getTravelsForCode(code).subscribe(data => {
            this.travel = data.data;
        });
        this.driversService.getDriverList(this.loginService.profileUser.CompanyId).subscribe(result => {
            this.driverList = result.data;
        });
    }
    onBack() {
        this.location.back();
    }
    closeAlertConfirm() {
        this.driverAssign = null;
        this.driverValidate = true;
        this.addDriver = false;
    }
    closeModalOk() {
        this.alertShow = false;
        this.navCtrl.navigateBack('/app/travels', { animated: false });
    }
    openModal() {
        this.addDriver = true;
    }
    cwcChangeDrivers(event) {
        this.driverAssign = event.detail.value;
        this.driverValidate = false;
    }
    onClickCreateRequest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const dataFormC = new FormData();
            dataFormC.append('StatusRequestTravels', '1');
            dataFormC.append('DriverId', this.loginService.profileUser.id);
            dataFormC.append('TravelId', this.travel.id);
            yield this.createTravel(dataFormC);
            const dataFormU = new FormData();
            dataFormU.append('Id', this.travel.id);
            dataFormU.append('UserId', this.loginService.profileUser.id);
            yield this.updateTravel(this.travel.id, dataFormU);
            this.addDriver = false;
            this.alertShow = true;
        });
    }
    createTravel(dataForm) {
        return new Promise((resolve) => {
            this.travelService.createTravel(dataForm).subscribe(data => {
                resolve(data);
            });
        });
    }
    updateTravel(id, dataForm) {
        return new Promise((resolve) => {
            this.travelService.updateTravel(id, dataForm).subscribe(data => {
                resolve(data);
            });
        });
    }
};
DetailSearchPage.ctorParameters = () => [
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__.TravelService },
    { type: _services_drivers_service__WEBPACK_IMPORTED_MODULE_5__.DriversService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController }
];
DetailSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-detail-search',
        template: _detail_search_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detail_search_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailSearchPage);



/***/ }),

/***/ 88185:
/*!********************************************************************************!*\
  !*** ./src/app/pages/travels/detail-search/detail-search.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".header-text {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  top: 1;\n  right: 50;\n  left: 0;\n  margin-left: 1rem;\n}\n\n.attr-name {\n  font-weight: 700;\n}\n\n.content-card {\n  padding-top: 1rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 0.5rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n/***  styles btn asing trip  ***/\n\n.content-btn-assign-trip {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n\n.statusI {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/***  styles card info user  ***/\n\n.main-content-card {\n  padding: 0.5rem;\n}\n\n.header-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.5rem;\n}\n\n.avatar-info {\n  display: flex;\n  align-items: center;\n}\n\nspan.style-name {\n  font-weight: 700;\n  font-size: x-small;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.content-status {\n  display: flex;\n  align-items: center;\n}\n\n.active {\n  background-color: #7ac943;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n\n.attr-user {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-size: x-small;\n}\n\n.attr-detail {\n  font-size: medium;\n}\n\nhr.line {\n  margin-bottom: 1rem;\n}\n\nspan.number-phone {\n  padding-left: 8px;\n  padding-right: 10px;\n  font-size: small;\n}\n\n.center-cell {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.content-btn-edit {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.card-info {\n  padding-left: 0.8rem;\n  padding-bottom: 0.2rem;\n  padding-right: 1rem;\n}\n\n/***  styles card documents user  ***/\n\n.card-docs {\n  margin-top: 1.5rem;\n  padding: 1rem;\n}\n\n.title-docs {\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 0.8rem;\n}\n\n.content-docs {\n  display: flex;\n  justify-content: space-between;\n}\n\n.content-action-docs {\n  display: flex;\n  align-items: flex-end;\n}\n\n.text-archive {\n  font-size: small;\n  margin-left: 5px;\n}\n\n.item-archives {\n  display: flex;\n  vertical-align: middle;\n}\n\n/*** Estilos footer  ***/\n\n.footer-detal-request {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n\n.btn-action {\n  margin-left: 1.5rem;\n}\n\nspan.text-btn {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQztFQUNHLGdCQUFBO0FBQ0o7O0FBRUM7RUFDRyxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0EsZ0NBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFFQSxnQ0FBQTs7QUFDQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFIQTtFQUNJLGlCQUFBO0FBTUo7O0FBSEE7RUFDSSxtQkFBQTtBQU1KOztBQUpBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQVNKOztBQU5BO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBU0o7O0FBSkEscUNBQUE7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFTSjs7QUFQQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQVVKOztBQVBBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVBBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBVUo7O0FBTkEsd0JBQUE7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVNKOztBQVBBO0VBQ0ksbUJBQUE7QUFVSjs7QUFSQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUFXSiIsImZpbGUiOiJkZXRhaWwtc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdGV4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTtcclxuICAgIHJpZ2h0OiA1MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuIH1cclxuIFxyXG4gLmF0dHItbmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7ICAgIFxyXG4gfVxyXG5cclxuIC5jb250ZW50LWNhcmR7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtOyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gfVxyXG4vKioqICBzdHlsZXMgYnRuIGFzaW5nIHRyaXAgICoqKi8gXHJcbi5jb250ZW50LWJ0bi1hc3NpZ24tdHJpcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5zdGF0dXNJe1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyoqKiAgc3R5bGVzIGNhcmQgaW5mbyB1c2VyICAqKiovIFxyXG4ubWFpbi1jb250ZW50LWNhcmQge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcbi5oZWFkZXItY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbn1cclxuLmF2YXRhci1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbnNwYW4uc3R5bGUtbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuLmNvbnRlbnQtc3RhdHVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdhYzk0MztcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYXR0ci11c2VyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uYXR0ci1kZXRhaWwge1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbmhyLmxpbmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5zcGFuLm51bWJlci1waG9uZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi5jZW50ZXItY2VsbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuLmNvbnRlbnQtYnRuLWVkaXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmNhcmQtaW5mbyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiogIHN0eWxlcyBjYXJkIGRvY3VtZW50cyB1c2VyICAqKiovIFxyXG4uY2FyZC1kb2NzIHtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLnRpdGxlLWRvY3Mge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcclxufVxyXG4uY29udGVudC1kb2NzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNvbnRlbnQtYWN0aW9uLWRvY3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnRleHQtYXJjaGl2ZXtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4OyBcclxufVxyXG5cclxuLml0ZW0tYXJjaGl2ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuXHJcbi8qKiogRXN0aWxvcyBmb290ZXIgICoqKi8gXHJcbi5mb290ZXItZGV0YWwtcmVxdWVzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufVxyXG4uYnRuLWFjdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG59XHJcbnNwYW4udGV4dC1idG4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbn0iXX0= */";

/***/ }),

/***/ 67561:
/*!********************************************************************************!*\
  !*** ./src/app/pages/travels/detail-search/detail-search.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-header design-version=\"v2\" slot=\"header\" show-Menu-Button=\"false\" show-cemex-logo=\"false\">\n  <div class=\"header-text\">\n    <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px;\" (click)=\"onBack()\"></ion-icon>\n    <div class=\"attr-name\" style=\"padding-left: 1rem;\">Buscar viaje</div>\n  </div>\n</cwc-header>\n<div slot=\"main\" class=\"content-card\">\n  <cwc-grid class=\"demo-grid\">\n    <cwc-cell colspan=\"6\" mobile-colspan=\"12\">\n      <cwc-card class=\"card-info\" design-version=\"v2\">\n        <div class=\"main-content-card\">\n            <div class=\"header-card\">\n                <div class=\"avatar-info\">\n                    <span class=\"style-name\">INFORMACIÓN DE VIAJE</span>\n                </div>\n            </div>    \n  \n            <hr color=\"#D0D0D0\"/>\n            <cwc-grid class=\"demo-grid\" style=\"padding-top: 0.5rem;\">\n                <cwc-cell colspan=\"12\" mobile-colspan=\"12\">   \n                    <div class=\"attr-user\">Origen</div>\n                    <span class=\"attr-detail\">{{travel.source}}</span>\n                </cwc-cell>\n            </cwc-grid>\n  \n            <cwc-grid class=\"demo-grid center-cell\">\n                <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\n                    <div class=\"attr-user\">Destino</div>\n                    <span class=\"attr-detail\">{{travel.destiny}}</span>\n                </cwc-cell>                  \n            </cwc-grid>\n  \n            <cwc-grid class=\"demo-grid center-cell\">\n              <cwc-cell mobile-colspan=\"12\">\n                  <div class=\"attr-user\">Fecha y hora de cita</div>\n                  <span class=\"attr-detail\">{{travel.dateAndHourTravel}}</span>\n              </cwc-cell>           \n            </cwc-grid>\n  \n            <cwc-grid class=\"demo-grid center-cell\" style=\"padding-top: 1rem;\">\n              <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\n                <cwc-button\n                  (cwcClick)=\"onClickCreateRequest()\"\n                  design-version=\"v1\"\n                  variant=\"regular-block\">SOLICITAR CITA</cwc-button>\n              </cwc-cell>                  \n            </cwc-grid>\n        </div>\n      </cwc-card>\n    </cwc-cell>\n  </cwc-grid>\n</div>\n\n<cwc-modal id='alert-modal-succes' [open]=\"alertShow\" close-on-bd-click=\"false\" show-close-btn=\"false\" (cwcClose)=\"closeModalOk()\" >\n  <div style='text-align: center'>\n      <h2 class='modal--confirmation__message'>Su solicitud ha sido enviada</h2>\n      <p>Su cita será confirmada por su adminstrador logístico</p>\n  </div>\n  <footer slot='footer'>\n    <div style='text-align: center'>\n        <cwc-button variant='link' routerLinkActive=\"router-link-active\" (cwcClick)=\"closeModalOk()\">\n          <h4>REGRESAR</h4>\n        </cwc-button>\n    </div>\n</footer>\n</cwc-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_travels_detail-search_detail-search_module_ts.js.map