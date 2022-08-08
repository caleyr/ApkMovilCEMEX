"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_my-travels_my-travels_module_ts"],{

/***/ 21225:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/my-travels-admin/my-travels-admin.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTravelsAdminComponent": () => (/* binding */ MyTravelsAdminComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _my_travels_admin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-travels-admin.component.html?ngResource */ 81508);
/* harmony import */ var _my_travels_admin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-travels-admin.component.scss?ngResource */ 54858);
/* harmony import */ var _services_active_tabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/active-tabs.service */ 6109);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/travels/travel.service */ 74894);
/* harmony import */ var src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/login.service */ 52876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);







let MyTravelsAdminComponent = class MyTravelsAdminComponent {
    constructor(loginService, travelService, activeTabsService) {
        this.loginService = loginService;
        this.travelService = travelService;
        this.activeTabsService = activeTabsService;
        this.previousTripsList = [];
        this.scheduledTripsList = [];
        this.requestTripsList = [];
    }
    ngOnInit() {
        this.selectedTab = this.activeTabsService.myTravelsTab !== null ? this.activeTabsService.myTravelsTab : 'programados';
        this.companyId = this.loginService.profileUser.CompanyId;
        this.getData();
    }
    ionViewWillEnter() {
        this.selectedTab = this.activeTabsService.myTravelsTab !== null ? this.activeTabsService.myTravelsTab : 'programados';
        this.companyId = this.loginService.profileUser.CompanyId;
        this.getData();
    }
    ionViewWillUnload() {
        this.activeTabsService.myTravelsTab = this.selectedTab;
    }
    getData() {
        this.travelService.getFilterTravelByAdmonTercero(this.companyId).subscribe(data => {
            this.previousTripsList = data.data.filter(travel => travel.statusTravelAvailabilityString.includes('Finalizado') ||
                travel.statusTravelAvailabilityString.includes('Documentos cargados'));
            this.sizePrevious = this.previousTripsList.length;
            this.scheduledTripsList = data.data.filter(travel => travel.statusTravelAvailabilityString.includes('Confirmado') ||
                travel.statusTravelAvailabilityString.includes('En proceso') ||
                travel.statusTravelAvailabilityString.includes('Con novedad'));
            this.sizeScheduled = this.scheduledTripsList.length;
            this.requestTripsList = data.data.filter(travel => travel.statusTravelAvailabilityString.includes('Asignado'));
            this.sizeRequest = this.requestTripsList.length;
        });
    }
    changeTab(tab) {
        this.selectedTab = tab;
    }
};
MyTravelsAdminComponent.ctorParameters = () => [
    { type: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService },
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__.TravelService },
    { type: _services_active_tabs_service__WEBPACK_IMPORTED_MODULE_2__.ActiveTabsService }
];
MyTravelsAdminComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-my-travels-admin',
        template: _my_travels_admin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_travels_admin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyTravelsAdminComponent);



/***/ }),

/***/ 39556:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/my-travels-drive/my-travels-drive.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTravelsDriveComponent": () => (/* binding */ MyTravelsDriveComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _my_travels_drive_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-travels-drive.component.html?ngResource */ 25810);
/* harmony import */ var _my_travels_drive_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-travels-drive.component.scss?ngResource */ 93203);
/* harmony import */ var _services_active_tabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/active-tabs.service */ 6109);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/travels/travel.service */ 74894);
/* harmony import */ var src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/login.service */ 52876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);







let MyTravelsDriveComponent = class MyTravelsDriveComponent {
    constructor(loginService, travelService, activeTabsService) {
        this.loginService = loginService;
        this.travelService = travelService;
        this.activeTabsService = activeTabsService;
        this.previousTripsList = [];
        this.scheduledTripsList = [];
    }
    ngOnInit() {
        this.selectedTab = this.activeTabsService.myTravelsTab !== null ? this.activeTabsService.myTravelsTab : 'programados';
        this.userId = this.loginService.profileUser.id;
        this.getData();
    }
    ionViewWillEnter() {
        this.selectedTab = this.activeTabsService.myTravelsTab !== null ? this.activeTabsService.myTravelsTab : 'programados';
        this.userId = this.loginService.profileUser.id;
        this.getData();
    }
    ionViewWillUnload() {
        this.activeTabsService.myTravelsTab = this.selectedTab;
    }
    getData() {
        this.travelService.getFilterTravelByIdDriver(this.userId).subscribe(data => {
            this.previousTripsList = data.data.filter(travel => travel.statusTravelAvailabilityString.includes('Finalizado') ||
                travel.statusTravelAvailabilityString.includes('Documentos cargados'));
            this.sizePrevious = this.previousTripsList.length;
            this.scheduledTripsList = data.data.filter(travel => travel.statusTravelAvailabilityString.includes('Asignado') ||
                travel.statusTravelAvailabilityString.includes('Confirmado') ||
                travel.statusTravelAvailabilityString.includes('En proceso') ||
                travel.statusTravelAvailabilityString.includes('Con novedad'));
            this.sizeScheduled = this.scheduledTripsList.length;
        });
    }
    changeTab(tab) {
        this.selectedTab = tab;
    }
};
MyTravelsDriveComponent.ctorParameters = () => [
    { type: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService },
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__.TravelService },
    { type: _services_active_tabs_service__WEBPACK_IMPORTED_MODULE_2__.ActiveTabsService }
];
MyTravelsDriveComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-my-travels-drive',
        template: _my_travels_drive_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_travels_drive_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyTravelsDriveComponent);



/***/ }),

/***/ 64081:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/previous-trips-list/previous-trips-list.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviousTripsListComponent": () => (/* binding */ PreviousTripsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _previous_trips_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./previous-trips-list.component.html?ngResource */ 39205);
/* harmony import */ var _previous_trips_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./previous-trips-list.component.scss?ngResource */ 67933);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/travels/travel.service */ 74894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






let PreviousTripsListComponent = class PreviousTripsListComponent {
    constructor(travelService, navCtrl) {
        this.travelService = travelService;
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    detailTrip(id) {
        this.travelService.id = id;
        this.navCtrl.navigateRoot('/app/my-travels/previous-details', { animated: true });
    }
};
PreviousTripsListComponent.ctorParameters = () => [
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__.TravelService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
PreviousTripsListComponent.propDecorators = {
    tripsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    sizeList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
PreviousTripsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-previous-trips-list',
        template: _previous_trips_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_previous_trips_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PreviousTripsListComponent);



/***/ }),

/***/ 41963:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/request-travel-list/request-travel-list.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestTravelListComponent": () => (/* binding */ RequestTravelListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _request_travel_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-travel-list.component.html?ngResource */ 67276);
/* harmony import */ var _request_travel_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-travel-list.component.scss?ngResource */ 27046);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/travels/travel.service */ 74894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






let RequestTravelListComponent = class RequestTravelListComponent {
    constructor(travelService, navCtrl) {
        this.travelService = travelService;
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    detailTrip(id) {
        this.travelService.id = id;
        this.navCtrl.navigateRoot('/app/my-travels/request-details', { animated: false });
    }
};
RequestTravelListComponent.ctorParameters = () => [
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__.TravelService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
RequestTravelListComponent.propDecorators = {
    tripsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    sizeList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
RequestTravelListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-request-travel-list',
        template: _request_travel_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_request_travel_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RequestTravelListComponent);



/***/ }),

/***/ 54671:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/scheduled-trips-list/scheduled-trips-list.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduledTripsListComponent": () => (/* binding */ ScheduledTripsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _scheduled_trips_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduled-trips-list.component.html?ngResource */ 42361);
/* harmony import */ var _scheduled_trips_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduled-trips-list.component.scss?ngResource */ 60265);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/auth/login.service */ 52876);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/travels/travel.service */ 74894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);








let ScheduledTripsListComponent = class ScheduledTripsListComponent {
    constructor(travelService, loginService, navCtrl, router) {
        this.travelService = travelService;
        this.loginService = loginService;
        this.navCtrl = navCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.rol = this.loginService.profileUser.Roles;
    }
    detailTrip(id, travelAvailability) {
        if (this.rol === 'Conductor') {
            if (travelAvailability === 'Confirmado') {
                this.travelService.id = id;
                this.navCtrl.navigateRoot('/app/my-travels/driver-confirmed-trip-detail', { animated: false });
            }
            /*
            if (travelAvailability === 'Pre-Turno') {
              this.travelService.id = id;
              this.navCtrl.navigateRoot('/app/my-travels/scheduled-details', { animated: false });
            } else if(travelAvailability === 'Confirmado'){
              this.travelService.id = id;
              this.navCtrl.navigateRoot('/app/my-travels/driver-confirmed-trip-detail', { animated: false });
            } else {
              this.travelService.id = id;
              this.navCtrl.navigateRoot('/app/my-travels/scheduled-details-driver', { animated: false });
            }*/
        }
        else {
            this.travelService.id = id;
            this.navCtrl.navigateRoot('/app/my-travels/scheduled-details', { animated: false });
        }
    }
};
ScheduledTripsListComponent.ctorParameters = () => [
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__.TravelService },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ScheduledTripsListComponent.propDecorators = {
    tripsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    sizeList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
ScheduledTripsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-scheduled-trips-list',
        template: _scheduled_trips_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scheduled_trips_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScheduledTripsListComponent);



/***/ }),

/***/ 31865:
/*!***************************************************************!*\
  !*** ./src/app/pages/my-travels/my-travels-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTravelsPageRoutingModule": () => (/* binding */ MyTravelsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _my_travels_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-travels.page */ 98167);




const routes = [
    {
        path: '',
        component: _my_travels_page__WEBPACK_IMPORTED_MODULE_0__.MyTravelsPage,
    },
    {
        path: 'driver-confirmed-trip-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_my-travels_maps_driver-confirmed-trip-detail_driver-confirmed-trip-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./maps/driver-confirmed-trip-detail/driver-confirmed-trip-detail.module */ 26065)).then(m => m.DriverConfirmedTripDetailPageModule)
    },
    {
        path: 'previous-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_my-travels_details-trip-previous_details-trip-previous_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./details-trip-previous/details-trip-previous.module */ 33922)).then(m => m.DetailsTripPreviousPageModule)
    },
    {
        path: 'scheduled-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_my-travels_details-trip-scheduled_details-trip-scheduled_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./details-trip-scheduled/details-trip-scheduled.module */ 92263)).then(m => m.DetailsTripScheduledPageModule)
    },
    {
        path: 'scheduled-details-driver',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_my-travels_details-trip-scheduled-driver_details-trip-scheduled-driver_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./details-trip-scheduled-driver/details-trip-scheduled-driver.module */ 41132)).then(m => m.DetailsTripScheduledDriverPageModule)
    },
    {
        path: 'request-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_my-travels_details-trip-request_details-trip-request_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./details-trip-request/details-trip-request.module */ 23106)).then(m => m.DetailsTripRequestPageModule)
    },
];
let MyTravelsPageRoutingModule = class MyTravelsPageRoutingModule {
};
MyTravelsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyTravelsPageRoutingModule);



/***/ }),

/***/ 16608:
/*!*******************************************************!*\
  !*** ./src/app/pages/my-travels/my-travels.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTravelsPageModule": () => (/* binding */ MyTravelsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _my_travels_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-travels-routing.module */ 31865);
/* harmony import */ var _my_travels_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-travels.page */ 98167);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/layout.module */ 93077);
/* harmony import */ var _components_previous_trips_list_previous_trips_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/previous-trips-list/previous-trips-list.component */ 64081);
/* harmony import */ var _components_request_travel_list_request_travel_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/request-travel-list/request-travel-list.component */ 41963);
/* harmony import */ var _components_scheduled_trips_list_scheduled_trips_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/scheduled-trips-list/scheduled-trips-list.component */ 54671);
/* harmony import */ var _components_my_travels_admin_my_travels_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/my-travels-admin/my-travels-admin.component */ 21225);
/* harmony import */ var _components_my_travels_drive_my_travels_drive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/my-travels-drive/my-travels-drive.component */ 39556);















let MyTravelsPageModule = class MyTravelsPageModule {
};
MyTravelsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule,
            _my_travels_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyTravelsPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__.CmxWebComponentsModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__.LayoutPageModule,
        ],
        declarations: [
            _my_travels_page__WEBPACK_IMPORTED_MODULE_1__.MyTravelsPage,
            _components_previous_trips_list_previous_trips_list_component__WEBPACK_IMPORTED_MODULE_5__.PreviousTripsListComponent,
            _components_request_travel_list_request_travel_list_component__WEBPACK_IMPORTED_MODULE_6__.RequestTravelListComponent,
            _components_scheduled_trips_list_scheduled_trips_list_component__WEBPACK_IMPORTED_MODULE_7__.ScheduledTripsListComponent,
            _components_my_travels_admin_my_travels_admin_component__WEBPACK_IMPORTED_MODULE_8__.MyTravelsAdminComponent,
            _components_my_travels_drive_my_travels_drive_component__WEBPACK_IMPORTED_MODULE_9__.MyTravelsDriveComponent
        ]
    })
], MyTravelsPageModule);



/***/ }),

/***/ 98167:
/*!*****************************************************!*\
  !*** ./src/app/pages/my-travels/my-travels.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTravelsPage": () => (/* binding */ MyTravelsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _my_travels_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-travels.page.html?ngResource */ 28096);
/* harmony import */ var _my_travels_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-travels.page.scss?ngResource */ 29442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/login.service */ 52876);





let MyTravelsPage = class MyTravelsPage {
    constructor(loginService) {
        this.loginService = loginService;
        this.rol = null;
    }
    ngOnInit() {
        this.rol = this.loginService.profileUser.Roles;
    }
};
MyTravelsPage.ctorParameters = () => [
    { type: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
MyTravelsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-my-travels',
        template: _my_travels_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_travels_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyTravelsPage);



/***/ }),

/***/ 54858:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/my-travels-admin/my-travels-admin.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = ".navbar {\n  width: 100%;\n  height: 100%;\n}\n\n.icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 18px;\n}\n\n.search-text {\n  width: 100%;\n  height: 10px;\n  padding-bottom: 0;\n}\n\n.text-vehicles {\n  font-size: small;\n  font-weight: 700;\n}\n\n.float {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  text-align: center;\n  background-color: #05376E;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXRyYXZlbHMtYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNIOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDRyx5QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoibXktdHJhdmVscy1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXRleHR7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDEwcHg7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGV4dC12ZWhpY2xlc3tcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZmxvYXR7XHJcblx0cG9zaXRpb246Zml4ZWQ7XHJcblx0Ym90dG9tOjE1cHg7XHJcblx0cmlnaHQ6MTVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUzNzZFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweFxyXG59Il19 */";

/***/ }),

/***/ 93203:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/my-travels-drive/my-travels-drive.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = ".navbar {\n  width: 100%;\n  height: 100%;\n}\n\n.icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 18px;\n}\n\n.search-text {\n  width: 100%;\n  height: 10px;\n  padding-bottom: 0;\n}\n\n.text-vehicles {\n  font-size: small;\n  font-weight: 700;\n}\n\n.float {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  text-align: center;\n  background-color: #05376E;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXRyYXZlbHMtZHJpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNIOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDRyx5QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoibXktdHJhdmVscy1kcml2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXRleHR7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDEwcHg7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGV4dC12ZWhpY2xlc3tcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZmxvYXR7XHJcblx0cG9zaXRpb246Zml4ZWQ7XHJcblx0Ym90dG9tOjE1cHg7XHJcblx0cmlnaHQ6MTVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUzNzZFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweFxyXG59Il19 */";

/***/ }),

/***/ 67933:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/previous-trips-list/previous-trips-list.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "/***  styles btn asing trip  ***/\n.content-btn-assign-trip {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n.statusI {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/***  styles card info user  ***/\n.header-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.5rem;\n}\n.avatar-info {\n  display: flex;\n  align-items: center;\n}\nspan.style-name {\n  font-weight: 700;\n}\n.content-status {\n  display: flex;\n  align-items: center;\n}\n.active {\n  background-color: #7ac943;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.attr-user {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-size: x-small;\n}\n.attr-detail {\n  font-size: medium;\n}\nhr.line {\n  margin-bottom: 1rem;\n}\nspan.number-phone {\n  padding-left: 8px;\n  padding-right: 10px;\n  font-size: small;\n}\n.center-cell {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.content-btn-edit {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.card-info {\n  padding: 0.8rem;\n  padding-bottom: 1rem;\n}\n/***  styles card documents user  ***/\n.card-docs {\n  margin-top: 1.5rem;\n  padding: 1rem;\n}\n.title-docs {\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 0.8rem;\n}\n.content-docs {\n  display: flex;\n  justify-content: space-between;\n}\n.content-action-docs {\n  display: flex;\n  align-items: flex-end;\n}\n.text-archive {\n  font-size: small;\n  margin-left: 5px;\n}\n.item-archives {\n  display: flex;\n  vertical-align: middle;\n}\n/*** Estilos footer  ***/\n.footer-detal-request {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n.btn-action {\n  margin-left: 1.5rem;\n}\nspan.text-btn {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.detail_list_travels {\n  font-weight: 900;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXZpb3VzLXRyaXBzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFHQSxnQ0FBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNBO0VBQ0ksZ0JBQUE7QUFFSjtBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBR0o7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUo7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFJSjtBQURBO0VBQ0ksaUJBQUE7QUFJSjtBQURBO0VBQ0ksbUJBQUE7QUFJSjtBQUZBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBS0o7QUFIQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFNSjtBQUpBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFPSjtBQUpBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FBT0o7QUFGQSxxQ0FBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FBS0o7QUFIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTUo7QUFKQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQU9KO0FBTEE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFRSjtBQUxBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQVFKO0FBTEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFRSjtBQUpBLHdCQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQU9KO0FBTEE7RUFDSSxtQkFBQTtBQVFKO0FBTkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBU0o7QUFOQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFTSiIsImZpbGUiOiJwcmV2aW91cy10cmlwcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiAgc3R5bGVzIGJ0biBhc2luZyB0cmlwICAqKiovIFxyXG4uY29udGVudC1idG4tYXNzaWduLXRyaXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc3RhdHVzSXtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qKiogIHN0eWxlcyBjYXJkIGluZm8gdXNlciAgKioqLyBcclxuLmhlYWRlci1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxufVxyXG4uYXZhdGFyLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuc3Bhbi5zdHlsZS1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmNvbnRlbnQtc3RhdHVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdhYzk0MztcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYXR0ci11c2VyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uYXR0ci1kZXRhaWwge1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbmhyLmxpbmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5zcGFuLm51bWJlci1waG9uZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi5jZW50ZXItY2VsbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuLmNvbnRlbnQtYnRuLWVkaXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmNhcmQtaW5mbyB7XHJcbiAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vKioqICBzdHlsZXMgY2FyZCBkb2N1bWVudHMgdXNlciAgKioqLyBcclxuLmNhcmQtZG9jcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi50aXRsZS1kb2NzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XHJcbn1cclxuLmNvbnRlbnQtZG9jcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jb250ZW50LWFjdGlvbi1kb2NzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi50ZXh0LWFyY2hpdmV7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDsgXHJcbn1cclxuXHJcbi5pdGVtLWFyY2hpdmVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcblxyXG4vKioqIEVzdGlsb3MgZm9vdGVyICAqKiovIFxyXG4uZm9vdGVyLWRldGFsLXJlcXVlc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuLmJ0bi1hY3Rpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxufVxyXG5zcGFuLnRleHQtYnRuIHtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4uZGV0YWlsX2xpc3RfdHJhdmVsc3tcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59Il19 */";

/***/ }),

/***/ 27046:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/request-travel-list/request-travel-list.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "/***  styles btn asing trip  ***/\n.content-btn-assign-trip {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n.statusI {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/***  styles card info user  ***/\n.header-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.5rem;\n}\n.avatar-info {\n  display: flex;\n  align-items: center;\n}\nspan.style-name {\n  font-weight: 700;\n}\n.content-status {\n  display: flex;\n  align-items: center;\n}\n.active {\n  background-color: #7ac943;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.attr-user {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-size: x-small;\n}\n.attr-detail {\n  font-size: medium;\n}\nhr.line {\n  margin-bottom: 1rem;\n}\nspan.number-phone {\n  padding-left: 8px;\n  padding-right: 10px;\n  font-size: small;\n}\n.center-cell {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.content-btn-edit {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.card-info {\n  padding: 0.8rem;\n  padding-bottom: 1rem;\n}\n/***  styles card documents user  ***/\n.card-docs {\n  margin-top: 1.5rem;\n  padding: 1rem;\n}\n.title-docs {\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 0.8rem;\n}\n.content-docs {\n  display: flex;\n  justify-content: space-between;\n}\n.content-action-docs {\n  display: flex;\n  align-items: flex-end;\n}\n.text-archive {\n  font-size: small;\n  margin-left: 5px;\n}\n.item-archives {\n  display: flex;\n  vertical-align: middle;\n}\n/*** Estilos footer  ***/\n.footer-detal-request {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n.btn-action {\n  margin-left: 1.5rem;\n}\nspan.text-btn {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.detail_list_travels {\n  font-weight: 900;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtdHJhdmVsLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFHQSxnQ0FBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNBO0VBQ0ksZ0JBQUE7QUFFSjtBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBR0o7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUo7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFJSjtBQURBO0VBQ0ksaUJBQUE7QUFJSjtBQURBO0VBQ0ksbUJBQUE7QUFJSjtBQUZBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBS0o7QUFIQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFNSjtBQUpBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFPSjtBQUpBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FBT0o7QUFGQSxxQ0FBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FBS0o7QUFIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTUo7QUFKQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQU9KO0FBTEE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFRSjtBQUxBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQVFKO0FBTEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFRSjtBQUpBLHdCQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQU9KO0FBTEE7RUFDSSxtQkFBQTtBQVFKO0FBTkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBU0o7QUFOQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFTSiIsImZpbGUiOiJyZXF1ZXN0LXRyYXZlbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiAgc3R5bGVzIGJ0biBhc2luZyB0cmlwICAqKiovIFxyXG4uY29udGVudC1idG4tYXNzaWduLXRyaXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc3RhdHVzSXtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qKiogIHN0eWxlcyBjYXJkIGluZm8gdXNlciAgKioqLyBcclxuLmhlYWRlci1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxufVxyXG4uYXZhdGFyLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuc3Bhbi5zdHlsZS1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmNvbnRlbnQtc3RhdHVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdhYzk0MztcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYXR0ci11c2VyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uYXR0ci1kZXRhaWwge1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbmhyLmxpbmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5zcGFuLm51bWJlci1waG9uZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi5jZW50ZXItY2VsbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuLmNvbnRlbnQtYnRuLWVkaXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmNhcmQtaW5mbyB7XHJcbiAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vKioqICBzdHlsZXMgY2FyZCBkb2N1bWVudHMgdXNlciAgKioqLyBcclxuLmNhcmQtZG9jcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi50aXRsZS1kb2NzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XHJcbn1cclxuLmNvbnRlbnQtZG9jcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jb250ZW50LWFjdGlvbi1kb2NzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi50ZXh0LWFyY2hpdmV7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDsgXHJcbn1cclxuXHJcbi5pdGVtLWFyY2hpdmVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcblxyXG4vKioqIEVzdGlsb3MgZm9vdGVyICAqKiovIFxyXG4uZm9vdGVyLWRldGFsLXJlcXVlc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuLmJ0bi1hY3Rpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxufVxyXG5zcGFuLnRleHQtYnRuIHtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4uZGV0YWlsX2xpc3RfdHJhdmVsc3tcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59Il19 */";

/***/ }),

/***/ 60265:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/scheduled-trips-list/scheduled-trips-list.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "/***  styles btn asing trip  ***/\n.content-btn-assign-trip {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n.statusI {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/***  styles card info user  ***/\n.header-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.5rem;\n}\n.avatar-info {\n  display: flex;\n  align-items: center;\n}\nspan.style-name {\n  font-weight: 700;\n}\n.content-status {\n  display: flex;\n  align-items: center;\n}\n.active {\n  background-color: #7ac943;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.attr-user {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-size: x-small;\n}\n.attr-detail {\n  font-size: medium;\n}\nhr.line {\n  margin-bottom: 1rem;\n}\nspan.number-phone {\n  padding-left: 8px;\n  padding-right: 10px;\n  font-size: small;\n}\n.center-cell {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.content-btn-edit {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.card-info {\n  padding: 0.8rem;\n  padding-bottom: 1rem;\n}\n/***  styles card documents user  ***/\n.card-docs {\n  margin-top: 1.5rem;\n  padding: 1rem;\n}\n.title-docs {\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 0.8rem;\n}\n.content-docs {\n  display: flex;\n  justify-content: space-between;\n}\n.content-action-docs {\n  display: flex;\n  align-items: flex-end;\n}\n.text-archive {\n  font-size: small;\n  margin-left: 5px;\n}\n.item-archives {\n  display: flex;\n  vertical-align: middle;\n}\n/*** Estilos footer  ***/\n.footer-detal-request {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n.btn-action {\n  margin-left: 1.5rem;\n}\nspan.text-btn {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.detail_list_travels {\n  font-weight: 900;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlZC10cmlwcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKO0FBR0EsZ0NBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDQTtFQUNJLGdCQUFBO0FBRUo7QUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUdKO0FBREE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUlKO0FBREE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSUo7QUFEQTtFQUNJLGlCQUFBO0FBSUo7QUFEQTtFQUNJLG1CQUFBO0FBSUo7QUFGQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUtKO0FBSEE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBTUo7QUFKQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBT0o7QUFKQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQU9KO0FBRkEscUNBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUtKO0FBSEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU1KO0FBSkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFPSjtBQUxBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBUUo7QUFMQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFRSjtBQUxBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBUUo7QUFKQSx3QkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFPSjtBQUxBO0VBQ0ksbUJBQUE7QUFRSjtBQU5BO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQVNKO0FBTkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBU0oiLCJmaWxlIjoic2NoZWR1bGVkLXRyaXBzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqICBzdHlsZXMgYnRuIGFzaW5nIHRyaXAgICoqKi8gXHJcbi5jb250ZW50LWJ0bi1hc3NpZ24tdHJpcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5zdGF0dXNJe1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyoqKiAgc3R5bGVzIGNhcmQgaW5mbyB1c2VyICAqKiovIFxyXG4uaGVhZGVyLWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG59XHJcbi5hdmF0YXItaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5zcGFuLnN0eWxlLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uY29udGVudC1zdGF0dXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FjOTQzO1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5hdHRyLXVzZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi5hdHRyLWRldGFpbCB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxuaHIubGluZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbnNwYW4ubnVtYmVyLXBob25lIHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuLmNlbnRlci1jZWxsIHtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG4uY29udGVudC1idG4tZWRpdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uY2FyZC1pbmZvIHtcclxuICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiogIHN0eWxlcyBjYXJkIGRvY3VtZW50cyB1c2VyICAqKiovIFxyXG4uY2FyZC1kb2NzIHtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLnRpdGxlLWRvY3Mge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcclxufVxyXG4uY29udGVudC1kb2NzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNvbnRlbnQtYWN0aW9uLWRvY3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnRleHQtYXJjaGl2ZXtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4OyBcclxufVxyXG5cclxuLml0ZW0tYXJjaGl2ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuXHJcbi8qKiogRXN0aWxvcyBmb290ZXIgICoqKi8gXHJcbi5mb290ZXItZGV0YWwtcmVxdWVzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufVxyXG4uYnRuLWFjdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG59XHJcbnNwYW4udGV4dC1idG4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5kZXRhaWxfbGlzdF90cmF2ZWxze1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn0iXX0= */";

/***/ }),

/***/ 29442:
/*!******************************************************************!*\
  !*** ./src/app/pages/my-travels/my-travels.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS10cmF2ZWxzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 81508:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/my-travels-admin/my-travels-admin.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<app-layout class=\"card-size\">\r\n  <cwc-tabs>\r\n    <cwc-tab [active]=\"selectedTab == 'anteriores'\" name='anteriores' (click)=\"changeTab('anteriores')\">Anteriores</cwc-tab>\r\n    <cwc-tab [active]=\"selectedTab == 'programados'\" name='programados' (click)=\"changeTab('programados')\">Programados</cwc-tab>\r\n    <cwc-tab [active]=\"selectedTab == 'solicitudes'\" name='solicitudes' (click)=\"changeTab('solicitudes')\">Solicitudes</cwc-tab>\r\n  </cwc-tabs>\r\n  <cwc-grid class=\"demo-grid\" row-gap=\"2px\">\r\n    <cwc-cell mobile-colspan=\"11\" style=\"padding-top: 0.8rem;\">     \r\n      <div>\r\n        <cwc-input design-version=\"v2\" class=\"search-text\" variant=\"regular\" rtl=\"false\" trailing-icon='magnifier-glass' placeholder='Buscar...'></cwc-input>  \r\n      </div>       \r\n    </cwc-cell> \r\n    <cwc-cell mobile-colspan=\"1\">    \r\n      <div class=\"icon\">\r\n        <cwc-button variant=\"link\">          \r\n          <cwc-icon variant=\"link\" name='controls' size=\"20px\" aria-role=\"button\"></cwc-icon>\r\n        </cwc-button>\r\n      </div>  \r\n    </cwc-cell>    \r\n  </cwc-grid>  \r\n  <div [ngSwitch]=\"selectedTab\" class=\"navbar\" style=\"padding-top: 0.8rem;\">\r\n    <app-previous-trips-list *ngSwitchCase=\"'anteriores'\" [tripsList]=\"previousTripsList\" [sizeList]=\"sizePrevious\"></app-previous-trips-list>\r\n    <app-scheduled-trips-list *ngSwitchCase=\"'programados'\" [tripsList]=\"scheduledTripsList\" [sizeList]=\"sizeScheduled\"></app-scheduled-trips-list>\r\n    <app-request-travel-list *ngSwitchCase=\"'solicitudes'\" [tripsList]=\"requestTripsList\" [sizeList]=\"sizePrevious\"></app-request-travel-list>\r\n  </div>\r\n</app-layout>";

/***/ }),

/***/ 25810:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/my-travels-drive/my-travels-drive.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<app-layout class=\"card-size\">\r\n  <cwc-tabs>\r\n    <cwc-tab [active]=\"selectedTab == 'anteriores'\" name='anteriores' (click)=\"changeTab('anteriores')\">Anteriores</cwc-tab>\r\n    <cwc-tab [active]=\"selectedTab == 'programados'\" name='programados' (click)=\"changeTab('programados')\">Programados</cwc-tab>\r\n  </cwc-tabs>\r\n  <cwc-grid class=\"demo-grid\" row-gap=\"2px\">\r\n    <cwc-cell mobile-colspan=\"11\" style=\"padding-top: 0.8rem;\">     \r\n      <div>\r\n        <cwc-input design-version=\"v2\" class=\"search-text\" variant=\"regular\" rtl=\"false\" trailing-icon='magnifier-glass' placeholder='Buscar...'></cwc-input>  \r\n      </div>       \r\n    </cwc-cell> \r\n    <cwc-cell mobile-colspan=\"1\">    \r\n      <div class=\"icon\">\r\n        <cwc-button variant=\"link\">          \r\n          <cwc-icon variant=\"link\" name='controls' size=\"20px\" aria-role=\"button\"></cwc-icon>\r\n        </cwc-button>\r\n      </div>  \r\n    </cwc-cell>    \r\n  </cwc-grid>  \r\n  <div [ngSwitch]=\"selectedTab\" class=\"navbar\" style=\"padding-top: 0.8rem;\">\r\n    <app-previous-trips-list *ngSwitchCase=\"'anteriores'\" [tripsList]=\"previousTripsList\" [sizeList]=\"sizePrevious\"></app-previous-trips-list>\r\n    <app-scheduled-trips-list *ngSwitchCase=\"'programados'\" [tripsList]=\"scheduledTripsList\" [sizeList]=\"sizeScheduled\"></app-scheduled-trips-list>\r\n  </div>\r\n</app-layout>";

/***/ }),

/***/ 39205:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/previous-trips-list/previous-trips-list.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-grid class=\"demo-grid\" style=\"padding-top: 1rem; padding-bottom: 0.5rem\">\r\n  <cwc-cell colspan=\"6\" mobile-colspan=\"9\">\r\n    <div class=\"detail_list_travels\">Semana 22 de Agosto, 2020</div>\r\n  </cwc-cell>\r\n  <cwc-cell colspan=\"6\" mobile-colspan=\"3\">\r\n    <div class=\"detail_list_travels\" style=\"text-align: end;\">{{sizeList}}/{{tripsList.length}} viajes</div>\r\n  </cwc-cell>\r\n</cwc-grid>\r\n\r\n<cwc-grid class=\"demo-grid\">\r\n  <cwc-cell (click)=\"detailTrip(trip.id)\" *ngFor=\"let trip of tripsList\" colspan=\"6\" mobile-colspan=\"12\">\r\n    <cwc-card class=\"card-info\" design-version=\"v1\">\r\n      <div class=\"main-content-card\">\r\n        <div class=\"header-card\">\r\n          <div class=\"avatar-info\">\r\n            <span class=\"style-name\">Viaje {{trip.codeTravel}}</span>\r\n          </div>\r\n          <cwc-status-indicator style=\"text-align: end;\" size=\"small\" class=\"statusI\" variant='success'>\r\n            <div class=\"statusI\">{{trip.statusTravelString}}</div>\r\n          </cwc-status-indicator>\r\n          <ion-icon name=\"ellipsis-vertical-outline\" size=\"15\"></ion-icon>\r\n        </div>\r\n\r\n        <hr color=\"#D0D0D0\" />\r\n        <cwc-grid class=\"demo-grid\" style=\"padding-top: 0.5rem;\">\r\n          <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n            <div class=\"attr-user\">Origen</div>\r\n            <span class=\"attr-detail\">{{trip.source}}</span>\r\n          </cwc-cell>\r\n        </cwc-grid>\r\n\r\n        <cwc-grid class=\"demo-grid center-cell\">\r\n          <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n            <div class=\"attr-user\">Destino</div>\r\n            <span class=\"attr-detail\">{{trip.destiny}}</span>\r\n          </cwc-cell>\r\n        </cwc-grid>\r\n\r\n        <cwc-grid class=\"demo-grid\">\r\n          <cwc-cell mobile-colspan=\"6\">\r\n            <div class=\"attr-user\">Número de Placa</div>\r\n            <span class=\"attr-detail\">{{trip.vehicleLissenceName}}</span>\r\n          </cwc-cell>\r\n          <cwc-cell mobile-colspan=\"6\">\r\n            <div class=\"attr-user\">Fecha y Hora de Cita</div>\r\n            <span class=\"attr-detail\">{{trip.dateTravel}} {{trip.timerStar}}</span>\r\n          </cwc-cell>\r\n        </cwc-grid>\r\n      </div>\r\n    </cwc-card>\r\n  </cwc-cell>\r\n</cwc-grid>";

/***/ }),

/***/ 67276:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/request-travel-list/request-travel-list.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-grid class=\"demo-grid\" style=\"padding-top: 1rem; padding-bottom: 0.5rem\">\r\n  <cwc-cell colspan=\"6\" mobile-colspan=\"9\">\r\n    <div class=\"detail_list_travels\">Semana 22 de Agosto, 2020</div>\r\n  </cwc-cell>\r\n  <cwc-cell colspan=\"6\" mobile-colspan=\"3\">\r\n    <div class=\"detail_list_travels\" style=\"text-align: end;\">{{sizeList}}/{{tripsList.length}} viajes</div>\r\n  </cwc-cell>\r\n</cwc-grid>\r\n\r\n<cwc-grid class=\"demo-grid\">\r\n  <cwc-cell (click)=\"detailTrip(trip.id)\" *ngFor=\"let trip of tripsList\" colspan=\"6\" mobile-colspan=\"12\">\r\n    <cwc-card class=\"card-info\" design-version=\"v1\">\r\n      <div class=\"main-content-card\">\r\n          <div class=\"header-card\">\r\n              <div class=\"avatar-info\">\r\n                  <span class=\"style-name\">Viaje {{trip.codeTravel}}</span>\r\n              </div>                     \r\n              <cwc-status-indicator style=\"text-align: end;\" size=\"small\" class=\"statusI\" variant='success'>\r\n                <div class=\"statusI\">{{trip.statusTravelString}}</div>\r\n              </cwc-status-indicator>              \r\n              <ion-icon name=\"ellipsis-vertical-outline\" size=\"15\"></ion-icon>\r\n          </div>    \r\n\r\n          <hr color=\"#D0D0D0\"/>\r\n          <cwc-grid class=\"demo-grid\" style=\"padding-top: 0.5rem;\">\r\n              <cwc-cell colspan=\"12\" mobile-colspan=\"12\">   \r\n                  <div class=\"attr-user\">Origen</div>\r\n                  <span class=\"attr-detail\">{{trip.source}}</span>\r\n              </cwc-cell>\r\n          </cwc-grid>\r\n\r\n          <cwc-grid class=\"demo-grid center-cell\">\r\n              <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n                  <div class=\"attr-user\">Destino</div>\r\n                  <span class=\"attr-detail\">{{trip.destiny}}</span>\r\n              </cwc-cell>                  \r\n          </cwc-grid>\r\n\r\n          <cwc-grid class=\"demo-grid\">\r\n            <cwc-cell mobile-colspan=\"6\" *ngIf=\"trip.vehicleLissenceName\">\r\n                <div class=\"attr-user\">Número de Placa</div>\r\n                <span class=\"attr-detail\">{{trip.vehicleLissenceName}}</span>\r\n            </cwc-cell>\r\n            <cwc-cell mobile-colspan=\"6\">\r\n              <div class=\"attr-user\">Fecha y Hora de Cita</div>\r\n              <span class=\"attr-detail\">{{trip.dateTravel}} {{trip.timerStar}}</span>\r\n            </cwc-cell>\r\n          </cwc-grid>\r\n      </div>\r\n    </cwc-card>\r\n  </cwc-cell>\r\n</cwc-grid>";

/***/ }),

/***/ 42361:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/components/scheduled-trips-list/scheduled-trips-list.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-grid class=\"demo-grid\" style=\"padding-top: 1rem; padding-bottom: 0.5rem\">\r\n  <cwc-cell colspan=\"6\" mobile-colspan=\"9\">\r\n    <div class=\"detail_list_travels\">Semana 22 de Agosto, 2020</div>\r\n  </cwc-cell>\r\n  <cwc-cell colspan=\"6\" mobile-colspan=\"3\">\r\n    <div class=\"detail_list_travels\" style=\"text-align: end;\">{{sizeList}}/{{tripsList.length}} viajes</div>\r\n  </cwc-cell>\r\n</cwc-grid>\r\n\r\n<cwc-grid class=\"demo-grid\">\r\n  <cwc-cell (click)=\"detailTrip(trip.id, trip.statusTravelAvailabilityString)\"  *ngFor=\"let trip of tripsList\" colspan=\"6\" mobile-colspan=\"12\">\r\n    <cwc-card class=\"card-info\" design-version=\"v1\">\r\n      <div class=\"main-content-card\">\r\n          <div class=\"header-card\">\r\n              <div class=\"avatar-info\">\r\n                  <span class=\"style-name\">Viaje {{trip.codeTravel}}</span>\r\n              </div>                     \r\n              <cwc-status-indicator style=\"text-align: end;\" size=\"small\" class=\"statusI\" variant='success'>\r\n                <div class=\"statusI\">{{trip.statusTravelString}}</div>\r\n              </cwc-status-indicator>              \r\n              <ion-icon name=\"ellipsis-vertical-outline\" size=\"15\"></ion-icon>\r\n          </div>    \r\n\r\n          <hr color=\"#D0D0D0\"/>\r\n          <cwc-grid class=\"demo-grid\" style=\"padding-top: 0.5rem;\">\r\n              <cwc-cell colspan=\"12\" mobile-colspan=\"12\">   \r\n                  <div class=\"attr-user\">Origen</div>\r\n                  <span class=\"attr-detail\">{{trip.source}}</span>\r\n              </cwc-cell>\r\n          </cwc-grid>\r\n\r\n          <cwc-grid class=\"demo-grid center-cell\">\r\n              <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n                  <div class=\"attr-user\">Destino</div>\r\n                  <span class=\"attr-detail\">{{trip.destiny}}</span>\r\n              </cwc-cell>                  \r\n          </cwc-grid>\r\n\r\n          <cwc-grid class=\"demo-grid\">\r\n            <cwc-cell mobile-colspan=\"6\">\r\n                <div class=\"attr-user\">Número de Placa</div>\r\n                <span class=\"attr-detail\">{{trip.vehicleLissenceName}}</span>\r\n            </cwc-cell>\r\n            <cwc-cell mobile-colspan=\"6\">\r\n              <div class=\"attr-user\">Fecha y Hora de Cita</div>\r\n              <span class=\"attr-detail\">{{trip.dateTravel}} {{trip.timerStar}}</span>\r\n            </cwc-cell>\r\n          </cwc-grid>\r\n      </div>\r\n    </cwc-card>\r\n  </cwc-cell>\r\n</cwc-grid>";

/***/ }),

/***/ 28096:
/*!******************************************************************!*\
  !*** ./src/app/pages/my-travels/my-travels.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<app-my-travels-admin *ngIf=\"rol === 'Administrador Logistico Tercero'\"></app-my-travels-admin>\n<app-my-travels-drive *ngIf=\"rol !== 'Administrador Logistico Tercero'\"></app-my-travels-drive>\n ";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-travels_my-travels_module_ts.js.map