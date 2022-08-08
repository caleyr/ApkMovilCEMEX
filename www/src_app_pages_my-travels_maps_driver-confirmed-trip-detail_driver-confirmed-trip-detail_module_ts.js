"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_my-travels_maps_driver-confirmed-trip-detail_driver-confirmed-trip-detail_module_ts"],{

/***/ 84021:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/maps/driver-confirmed-trip-detail/components/modal-detail-map-drive/modal-detail-map-drive.component.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDetailMapDriveComponent": () => (/* binding */ ModalDetailMapDriveComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_detail_map_drive_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-detail-map-drive.component.html?ngResource */ 81447);
/* harmony import */ var _modal_detail_map_drive_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-detail-map-drive.component.scss?ngResource */ 62885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_google_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/google.service */ 83602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/travels/travel.service */ 74894);







let ModalDetailMapDriveComponent = class ModalDetailMapDriveComponent {
    constructor(googleService, datepipe, travelService) {
        this.googleService = googleService;
        this.datepipe = datepipe;
        this.travelService = travelService;
        this.estado = 1;
    }
    ngOnInit() { }
    onClickStartTravel() {
        const horaStar = new Date();
        const data = new FormData();
        data.append('Id', this.travelDetail.id);
        data.append('StatusTravel', '5');
        data.append('TripStarTime', this.datepipe.transform(horaStar, 'h:mm'));
        this.travelService.startTravel(this.travelDetail.id, data).subscribe(() => {
            this.googleService.refresh$.next();
        });
    }
};
ModalDetailMapDriveComponent.ctorParameters = () => [
    { type: _services_google_service__WEBPACK_IMPORTED_MODULE_2__.GoogleService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe },
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__.TravelService }
];
ModalDetailMapDriveComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-modal-detail-map-drive',
        template: _modal_detail_map_drive_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_detail_map_drive_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalDetailMapDriveComponent);



/***/ }),

/***/ 28937:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/maps/driver-confirmed-trip-detail/driver-confirmed-trip-detail-routing.module.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverConfirmedTripDetailPageRoutingModule": () => (/* binding */ DriverConfirmedTripDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _driver_confirmed_trip_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-confirmed-trip-detail.page */ 20521);




const routes = [
    {
        path: '',
        component: _driver_confirmed_trip_detail_page__WEBPACK_IMPORTED_MODULE_0__.DriverConfirmedTripDetailPage
    }
];
let DriverConfirmedTripDetailPageRoutingModule = class DriverConfirmedTripDetailPageRoutingModule {
};
DriverConfirmedTripDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DriverConfirmedTripDetailPageRoutingModule);



/***/ }),

/***/ 26065:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/maps/driver-confirmed-trip-detail/driver-confirmed-trip-detail.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverConfirmedTripDetailPageModule": () => (/* binding */ DriverConfirmedTripDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _driver_confirmed_trip_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-confirmed-trip-detail-routing.module */ 28937);
/* harmony import */ var _driver_confirmed_trip_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-confirmed-trip-detail.page */ 20521);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);
/* harmony import */ var _components_modal_detail_map_drive_modal_detail_map_drive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal-detail-map-drive/modal-detail-map-drive.component */ 84021);









let DriverConfirmedTripDetailPageModule = class DriverConfirmedTripDetailPageModule {
};
DriverConfirmedTripDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _driver_confirmed_trip_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.DriverConfirmedTripDetailPageRoutingModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__.CmxWebComponentsModule.forRoot(),
        ],
        declarations: [
            _driver_confirmed_trip_detail_page__WEBPACK_IMPORTED_MODULE_1__.DriverConfirmedTripDetailPage,
            _components_modal_detail_map_drive_modal_detail_map_drive_component__WEBPACK_IMPORTED_MODULE_3__.ModalDetailMapDriveComponent
        ]
    })
], DriverConfirmedTripDetailPageModule);



/***/ }),

/***/ 20521:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/maps/driver-confirmed-trip-detail/driver-confirmed-trip-detail.page.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverConfirmedTripDetailPage": () => (/* binding */ DriverConfirmedTripDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _driver_confirmed_trip_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-confirmed-trip-detail.page.html?ngResource */ 81395);
/* harmony import */ var _driver_confirmed_trip_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-confirmed-trip-detail.page.scss?ngResource */ 29631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_modal_detail_map_drive_modal_detail_map_drive_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal-detail-map-drive/modal-detail-map-drive.component */ 84021);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/travels/travel.service */ 74894);
/* harmony import */ var src_app_interfaces_travels_travel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/interfaces/travels/travel */ 44577);
/* harmony import */ var _services_google_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/google.service */ 83602);










let DriverConfirmedTripDetailPage = class DriverConfirmedTripDetailPage {
    constructor(modalController, travelService, location, googleService) {
        this.modalController = modalController;
        this.travelService = travelService;
        this.location = location;
        this.googleService = googleService;
        this.id = null;
        this.directionsService = new google.maps.DirectionsService();
        this.origin = { lat: 4.658383846282959, lng: -74.09394073486328 };
        // Parque la 93
        this.destination = { lat: 4.676802158355713, lng: -74.04825592041016 };
        this.estado = 1;
        this.travel = new src_app_interfaces_travels_travel__WEBPACK_IMPORTED_MODULE_4__.Travel();
        this.mapOptions = {
            center: {
                lat: 25.686614,
                lng: -100.316113
                //to get the latitude and longitude use: http://www.latlong.net/
            },
            zoom: 12,
            styles: [
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ],
            scaleControl: false,
            streetViewControl: false,
            scrollwheel: false,
            draggable: true,
            disableDefaultUI: true,
            clickableIcons: false,
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.suscripcion = this.googleService.refresh$.subscribe(() => {
                this.getData();
            });
            this.getData();
        });
    }
    ngAfterViewInit() {
        this.map = new google.maps.Map(this.divMap.nativeElement, this.mapOptions);
        this.calculateRoute();
    }
    getData() {
        if (this.travelService.id !== null) {
            this.id = this.travelService.id;
            this.travelService.getTravelDetail(this.id).subscribe(data => {
                this.travel = data.data;
                this.modalController.dismiss();
                this.modalData(this.travel);
            });
        }
    }
    onBack() {
        this.location.back();
        this.modalController.dismiss();
    }
    calculateRoute() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var route;
            var duration = 0;
            var distance = 0;
            this.directionsService.route({
                origin: this.origin,
                destination: this.destination,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.directionsDisplay = new google.maps.DirectionsRenderer({
                        map: this.map,
                        directions: response
                    });
                    route = yield response.routes[0];
                    route.legs.forEach(function (leg) {
                        duration += leg.duration.value / 60;
                        distance += leg.distance.value / 1000;
                    });
                }
                else {
                    alert('Could not display directions due to: ' + status);
                }
            }));
        });
    }
    modalData(travelD) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_modal_detail_map_drive_modal_detail_map_drive_component__WEBPACK_IMPORTED_MODULE_2__.ModalDetailMapDriveComponent,
                cssClass: 'message-modal',
                initialBreakpoint: 0.38,
                breakpoints: [0.1, 0.38, 1],
                backdropDismiss: false,
                backdropBreakpoint: 0.5,
                componentProps: {
                    travelDetail: travelD
                }
            });
            yield modal.present();
        });
    }
};
DriverConfirmedTripDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_3__.TravelService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: _services_google_service__WEBPACK_IMPORTED_MODULE_5__.GoogleService }
];
DriverConfirmedTripDetailPage.propDecorators = {
    divMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['mapVer',] }]
};
DriverConfirmedTripDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-driver-confirmed-trip-detail',
        template: _driver_confirmed_trip_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_driver_confirmed_trip_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DriverConfirmedTripDetailPage);



/***/ }),

/***/ 83602:
/*!********************************************!*\
  !*** ./src/app/services/google.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleService": () => (/* binding */ GoogleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 92218);



let GoogleService = class GoogleService {
    constructor() {
        this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    get refresh$() {
        return this._refresh$;
    }
};
GoogleService.ctorParameters = () => [];
GoogleService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GoogleService);



/***/ }),

/***/ 62885:
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/maps/driver-confirmed-trip-detail/components/modal-detail-map-drive/modal-detail-map-drive.component.scss?ngResource ***!
  \*******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "/***  styles btn asing trip  ***/\n.content-btn-assign-trip {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n/***  styles card info user  ***/\n.main-content-card {\n  padding: 2rem;\n}\n.header-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 0.5rem;\n}\n.avatar-info {\n  display: flex;\n  align-items: center;\n}\nspan.style-name {\n  font-weight: 700;\n}\n.title_document {\n  background-color: #e1e1e1;\n  padding: 0.8rem;\n  border-radius: 5px;\n}\n.attr-user {\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 10px;\n}\n.attr-document {\n  font-size: smaller;\n  font-weight: 700;\n}\n.attr-user-header {\n  padding-top: 0.5rem;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 10px;\n  color: #05376E;\n}\n.attr-user-header {\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWRldGFpbC1tYXAtZHJpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFHQSxnQ0FBQTtBQUNBO0VBQ0ksYUFBQTtBQUFKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQUE7RUFDSSxnQkFBQTtBQUdKO0FBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdKO0FBQUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdKO0FBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBR0o7QUFBQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBR0o7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0oiLCJmaWxlIjoibW9kYWwtZGV0YWlsLW1hcC1kcml2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogIHN0eWxlcyBidG4gYXNpbmcgdHJpcCAgKioqLyBcclxuLmNvbnRlbnQtYnRuLWFzc2lnbi10cmlwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuXHJcbi8qKiogIHN0eWxlcyBjYXJkIGluZm8gdXNlciAgKioqLyBcclxuLm1haW4tY29udGVudC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuLmhlYWRlci1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxufVxyXG4uYXZhdGFyLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuc3Bhbi5zdHlsZS1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi50aXRsZV9kb2N1bWVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTE7XHJcbiAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5hdHRyLXVzZXIge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5hdHRyLWRvY3VtZW50IHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5hdHRyLXVzZXItaGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjMDUzNzZFO1xyXG59XHJcblxyXG4uYXR0ci11c2VyLWhlYWRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 29631:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/maps/driver-confirmed-trip-detail/driver-confirmed-trip-detail.page.scss?ngResource ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content .map {\n  width: 100%;\n  height: 100%;\n  transition: opacity 150ms ease-in;\n  display: block;\n}\n\n.float {\n  padding-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaXZlci1jb25maXJtZWQtdHJpcC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUFBTjs7QUFJQTtFQUNDLG1CQUFBO0FBREQiLCJmaWxlIjoiZHJpdmVyLWNvbmZpcm1lZC10cmlwLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAubWFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuLmZsb2F0e1xyXG5cdHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbn0iXX0= */";

/***/ }),

/***/ 81447:
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/maps/driver-confirmed-trip-detail/components/modal-detail-map-drive/modal-detail-map-drive.component.html?ngResource ***!
  \*******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-grid class=\"demo-grid\">\n    <cwc-cell mobile-colspan=\"12\">\n            <div class=\"main-content-card\">\n                <div class=\"header-card\">\n                    <cwc-cell mobile-colspan=\"6\">  \n                        <div class=\"attr-user-header\">Viaje</div>\n                        <span style=\"color: #05376E; font-weight: 700;\">{{travelDetail.codeTravel}}</span>\n                    </cwc-cell>\n                    <cwc-cell mobile-colspan=\"6\" *ngIf=\"travelDetail.statusTravel === 4\">\n                        <cwc-button variant=\"link\">\n                            <div class=\"text-button\" >INICIAR VIAJE</div>\n                        </cwc-button>\n                    </cwc-cell>\n                </div> \n\n                <hr color=\"#D0D0D0\" />\n\n                <div style=\"padding-bottom: 1rem;\">\n                    <cwc-grid class=\"demo-grid\" >\n                        <cwc-cell mobile-colspan=\"12\">  \n                            <div class=\"attr-user\">Origen</div>\n                            <span>{{travelDetail.source}}</span>\n                        </cwc-cell>\n                        <cwc-cell mobile-colspan=\"12\">\n                            <div class=\"attr-user\">Destino</div>\n                            <span>{{travelDetail.destiny}}</span>\n                        </cwc-cell>\n                        <cwc-cell mobile-colspan=\"8\">\n                            <div class=\"attr-user\">Fecha y hora</div>\n                            <span>{{travelDetail.dateTravel + ' ' + travelDetail.timerStar}}</span>\n                        </cwc-cell>\n                        <cwc-cell mobile-colspan=\"4\">   \n                            <div class=\"attr-user\">Cantidad</div>\n                            <span>{{travelDetail.amount}}</span>\n                        </cwc-cell>\n                        <cwc-cell mobile-colspan=\"8\">\n                            <div class=\"attr-user\">Cliente</div>\n                            <span>{{travelDetail.clientName}}</span>\n                        </cwc-cell>\n                        <cwc-cell mobile-colspan=\"4\">   \n                            <div class=\"attr-user\">Número de Placa</div>\n                            <span>{{travelDetail.vehicleModelName}}</span>\n                        </cwc-cell>\n                        <cwc-cell mobile-colspan=\"8\">   \n                            <div class=\"attr-user\">Inicio de viaje</div>\n                            <span>{{travelDetail.codeTravel}}</span>\n                        </cwc-cell>\n                        <cwc-cell mobile-colspan=\"4\">   \n                            <div class=\"attr-user\">Inicio de descarga</div>\n                            <span>{{travelDetail.codeTravel}}</span>\n                        </cwc-cell>\n                        <cwc-cell mobile-colspan=\"12\">   \n                            <div class=\"attr-user\">Fin de Descarga</div>\n                            <span>{{travelDetail.codeTravel}}</span>\n                        </cwc-cell>\n                    </cwc-grid>\n                </div>\n                \n                <div>\n                    <div class=\"attr-document\" >Documentación</div>                \n                    <hr color=\"#D0D0D0\" />\n                    <cwc-grid class=\"demo-grid\">\n                        <cwc-cell mobile-colspan=\"12\" class=\"title_document\">\n                            <span>Documentos previamente aprobados</span>\n                        </cwc-cell>\n                    </cwc-grid>\n                    <cwc-grid class=\"demo-grid content-archive\">\n\n                        <!-- Documento agregado -->\n\n                        <cwc-cell mobile-colspan=\"12\">\n                            <div class=\"flex flex__align--center\">\n                              <cwc-icon name=\"attachment\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\n                              <div class=\"text-archive\">Remesas_Certificado.pdf</div>\n                            </div>\n                        </cwc-cell>\n\n                        <!-- Documento para agregar -->\n\n                        <cwc-cell mobile-colspan=\"6\" class=\"border\">\n                          <div class=\"item-archives flex flex__align--center\">\n                            <cwc-icon name=\"camera\" size=\"28px\"  color=\"bright-blue\"></cwc-icon>\n                            <div class=\"text-archive\">Tomar fotografía</div>\n                          </div>\n                        </cwc-cell>\n                        <cwc-cell mobile-colspan=\"6\">\n                          <div class=\"item-archives flex flex__align--center\">\n                            <cwc-icon name=\"document\" size=\"28px\" color=\"bright-blue\"></cwc-icon>\n                            <div class=\"text-archive\">Seleccionar archivo</div>\n                          </div>\n                        </cwc-cell>\n                      </cwc-grid>\n                </div>\n                \n                <hr color=\"#D0D0D0\"/>\n                <cwc-grid class=\"demo-grid\" style=\"padding-top: 0.5rem; padding-bottom: 1rem;\">\n                    <cwc-cell mobile-colspan=\"6\" >                       \n                        <div>Actualizaciones</div>\n                    </cwc-cell>\n                    <cwc-cell mobile-colspan=\"6\" style=\"text-align: end;\">\n                        <cwc-button variant=\"link\">\n                            <div class=\"text-button\">Mostrar</div>\n                        </cwc-button>\n                    </cwc-cell>\n                </cwc-grid>\n                <cwc-grid class=\"demo-grid\">\n                    <cwc-cell mobile-colspan=\"12\">\n                        <div class=\"attr-user\">Fecha y hora de cita</div>\n                        <span>10:30 am</span>\n                    </cwc-cell>\n                    <cwc-cell mobile-colspan=\"12\">   \n                        <div class=\"attr-user\">Actualización</div>\n                        <span>Lluvias y deslabe en la carretera de planta Medellín, posible retraso de 1 hora.</span>\n                    </cwc-cell>\n                </cwc-grid>\n            </div>\n    </cwc-cell>\n</cwc-grid>";

/***/ }),

/***/ 81395:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/my-travels/maps/driver-confirmed-trip-detail/driver-confirmed-trip-detail.page.html?ngResource ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-fab vertical=\"start\" horizontal=\"start\" class=\"float\" slot=\"fixed\">\n  <ion-fab-button color=\"medium\" (click)=\"onBack()\">\n    <ion-icon color=\"dark\" name=\"arrow-back-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-content fullscreen>\n  <div class=\"map\" #mapVer>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-travels_maps_driver-confirmed-trip-detail_driver-confirmed-trip-detail_module_ts.js.map