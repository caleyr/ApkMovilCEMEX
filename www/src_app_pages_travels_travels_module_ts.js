"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_travels_travels_module_ts"],{

/***/ 64189:
/*!*********************************************************!*\
  !*** ./src/app/pages/travels/travels-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelsPageRoutingModule": () => (/* binding */ TravelsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _travels_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travels.page */ 43068);




const routes = [
    {
        path: '',
        component: _travels_page__WEBPACK_IMPORTED_MODULE_0__.TravelsPage
    },
    {
        path: 'search-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_travels_search-list_search-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search-list/search-list.module */ 38294)).then(m => m.SearchListPageModule)
    },
    {
        path: 'detail-search',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_travels_detail-search_detail-search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./detail-search/detail-search.module */ 90578)).then(m => m.DetailSearchPageModule)
    }
];
let TravelsPageRoutingModule = class TravelsPageRoutingModule {
};
TravelsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TravelsPageRoutingModule);



/***/ }),

/***/ 85140:
/*!*************************************************!*\
  !*** ./src/app/pages/travels/travels.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelsPageModule": () => (/* binding */ TravelsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _travels_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travels-routing.module */ 64189);
/* harmony import */ var _travels_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travels.page */ 43068);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/layout.module */ 93077);










let TravelsPageModule = class TravelsPageModule {
};
TravelsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _travels_routing_module__WEBPACK_IMPORTED_MODULE_0__.TravelsPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__.CmxWebComponentsModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__.LayoutPageModule,
        ],
        declarations: [_travels_page__WEBPACK_IMPORTED_MODULE_1__.TravelsPage]
    })
], TravelsPageModule);



/***/ }),

/***/ 43068:
/*!***********************************************!*\
  !*** ./src/app/pages/travels/travels.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelsPage": () => (/* binding */ TravelsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _travels_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travels.page.html?ngResource */ 97901);
/* harmony import */ var _travels_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travels.page.scss?ngResource */ 68906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/travels/travel.service */ 74894);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);






let TravelsPage = class TravelsPage {
    constructor(travelService, navCtrl) {
        this.travelService = travelService;
        this.navCtrl = navCtrl;
        this.departamentList = [];
        this.sourceList = [];
        this.dateList = [];
        this.timeList = [];
        this.buttonActivate = false;
    }
    ngOnInit() {
        this.getListDepartament();
    }
    getListDepartament() {
        this.travelService.getTravels().subscribe(data => {
            this.departamentList = data.data;
        });
    }
    changeDepartament(event) {
        if (event.detail.value == 0) {
            this.sourceList = [];
            this.timeList = [];
            this.dateList = [];
            this.departament = '';
            this.source = '';
            this.dataO = '';
            this.timeO = '';
        }
        else {
            this.departament = event.detail.value;
            this.travelService.getTravelsSource(event.detail.value).subscribe(data => {
                this.sourceList = data.data;
            });
        }
    }
    changeSource(event) {
        if (event.detail.value == 0) {
            this.timeList = [];
            this.dateList = [];
            this.source = '';
            this.dataO = '';
            this.timeO = '';
        }
        else {
            this.source = event.detail.value;
            this.travelService.getTravelsDate(event.detail.value).subscribe(data => {
                this.dateList = data.data;
            });
        }
    }
    changeDate(event) {
        if (event.detail.value == 0) {
            this.timeList = [];
            this.dataO = '';
            this.timeO = '';
        }
        else {
            this.dataO = event.detail.value;
            this.travelService.getTravelsForHour(event.detail.value).subscribe(data => {
                this.timeList = data.data;
            });
        }
    }
    changeHour(event) {
        if (event.detail.value == 0) {
            this.buttonActivate = false;
        }
        else {
            this.timeO = event.detail.value;
            this.buttonActivate = true;
        }
    }
    searchTrips() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const list = yield this.getTravelListSearch();
            if (list) {
                this.navCtrl.navigateRoot('/app/travels/search-list', { animated: false });
            }
        });
    }
    getTravelListSearch() {
        return new Promise((resolved, reject) => {
            this.travelService.searchTravelList(this.departament, this.source, this.dataO, this.timeO).subscribe(data => {
                this.travelService.traveSearchList = data.data;
                resolved(data);
            });
        });
    }
    doRefresh(event) {
        setTimeout(() => {
            this.departamentList = [];
            this.sourceList = [];
            this.timeList = [];
            this.dateList = [];
            this.buttonActivate = false;
            this.getListDepartament();
            event.target.complete();
        }, 2000);
    }
};
TravelsPage.ctorParameters = () => [
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__.TravelService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
TravelsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-travels',
        template: _travels_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_travels_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TravelsPage);



/***/ }),

/***/ 68906:
/*!************************************************************!*\
  !*** ./src/app/pages/travels/travels.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".content-card {\n  padding-top: 5rem;\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n  padding-bottom: 1rem;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  overflow: auto;\n}\n\n.content-title {\n  padding-top: 1rem;\n  font-weight: 200;\n}\n\n.content-grid-register {\n  overflow: auto;\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXZlbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUVJLGNBQUE7RUFDQSxrQ0FBQTtBQUFKIiwiZmlsZSI6InRyYXZlbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtY2FyZHtcclxuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNvbnRlbnQtdGl0bGV7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWdyaWQtcmVnaXN0ZXJ7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiB9Il19 */";

/***/ }),

/***/ 97901:
/*!************************************************************!*\
  !*** ./src/app/pages/travels/travels.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<app-layout class=\"card-size\">\n  <ion-content fullscreen>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div class=\"content-card\">\n      <cwc-grid class=\"demo-grid\" design-version=\"v2\" row-gap=\"5px\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 1rem;\">\n        <cwc-cell mobile-colspan=\"12\">\n          <cwc-select\n            style=\"width: 100%;\"\n            label='Departamento'\n            (cwcChange)=\"changeDepartament($event)\"\n            design-version=\"v2\">\n            <cwc-select-option value=\"0\" selected=\"\">Seleccionar</cwc-select-option>\n            <cwc-select-option [value]=\"departament.departamentSource\" *ngFor=\"let departament of departamentList\" >{{departament.departamentSource}}</cwc-select-option>\n            </cwc-select>\n          </cwc-cell>\n          <cwc-cell mobile-colspan=\"12\">\n            <cwc-select\n              style=\"width: 100%;\"\n              label='Origen (Municipio)'\n              (cwcChange)=\"changeSource($event)\"\n              design-version=\"v2\">\n              <cwc-select-option value=\"0\" selected=\"\">Seleccionar</cwc-select-option>\n              <cwc-select-option [value]=\"source.source\" *ngFor=\"let source of sourceList\" >{{source.source}}</cwc-select-option>\n              </cwc-select>\n          </cwc-cell>\n          <cwc-cell class=\"flex flex__align--bullseye\" mobile-colspan=\"12\">\n            <div style=\"text-align: center; padding-bottom: 0.5rem; font-weight: 400;\" >Fecha</div>\n          </cwc-cell>\n          <cwc-cell mobile-colspan=\"12\">\n            <cwc-select\n              placeholder=\"Seleccionar\"\n              design-version=\"v2\"\n              style=\"width: 100%;\"\n              (cwcChange)=\"changeDate($event)\">\n              <cwc-select-option value=\"0\" selected=\"\">Seleccionar</cwc-select-option>\n              <cwc-select-option [value]=\"dateL.dateTravel\" *ngFor=\"let dateL of dateList\" >{{dateL.dateTravel}}</cwc-select-option>\n            </cwc-select>\n          </cwc-cell>\n          <cwc-cell class=\"flex flex__align--bullseye\" mobile-colspan=\"12\">          \n            <div style=\"text-align: center; padding-bottom: 1rem; font-weight: 400;\" >Rango de Hora</div>\n          </cwc-cell>\n          <cwc-cell mobile-colspan=\"6\">\n            <cwc-select\n              (cwcChange)=\"changeHour($event)\"\n              placeholder=\"Hora (Inicio)\"\n              design-version=\"v2\">\n              <cwc-select-option value=\"0\" selected=\"\">Seleccionar</cwc-select-option>\n              <cwc-select-option [value]=\"timeL.timerStar\" *ngFor=\"let timeL of timeList\" >{{timeL.timerStar}}</cwc-select-option>\n            </cwc-select>\n          </cwc-cell>\n          <cwc-cell mobile-colspan=\"6\">\n            <cwc-select\n              placeholder=\"Hora (Fin)\"\n              design-version=\"v2\">\n              <cwc-select-option value=\"0\" selected=\"\">Seleccionar</cwc-select-option>\n              <cwc-select-option value=\"12:50\">12:50</cwc-select-option>\n              <cwc-select-option value=\"13:40\">13:40</cwc-select-option>\n              <cwc-select-option value=\"15:50\">15:50</cwc-select-option>\n              <cwc-select-option value=\"17:30\">17:30</cwc-select-option>\n            </cwc-select>\n          </cwc-cell>\n          <cwc-cell mobile-colspan=\"12\">\n            <div class=\"content-button\" *ngIf=\"buttonActivate === true\">\n              <cwc-button\n              (cwcClick)=\"searchTrips()\"\n              design-version=\"v1\"\n              variant=\"regular-block\">BUSCAR VIAJES DISPONIBLES</cwc-button>\n            </div>\n          </cwc-cell>\n      </cwc-grid>    \n    </div>\n  </ion-content>  \n</app-layout>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_travels_travels_module_ts.js.map