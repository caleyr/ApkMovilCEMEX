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
        this.sourceList = [];
        this.departamentList = [];
        this.dateList = [];
        this.timeList = [];
        this.buttonActivate = false;
    }
    ngOnInit() {
        this.getListDepartament();
    }
    getListDepartament() {
        this.travelService.getTravels().subscribe(data => {
            this.departamentList = data.data.departamentSource;
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
                this.sourceList = data.data.source;
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
                this.dateList = data.data.dateTravel;
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
                this.timeList = data.data.timerStar;
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

module.exports = ".content-card {\n  padding-top: 0.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n.content-title {\n  padding-top: 1rem;\n  font-weight: 700;\n}\n\n.content-grid-register {\n  overflow: auto;\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXZlbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBRUksY0FBQTtFQUNBLGtDQUFBO0FBQUoiLCJmaWxlIjoidHJhdmVscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtOyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuIH1cclxuXHJcbi5jb250ZW50LXRpdGxle1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY29udGVudC1ncmlkLXJlZ2lzdGVye1xyXG4gICAgLy8gZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gfSJdfQ== */";

/***/ }),

/***/ 97901:
/*!************************************************************!*\
  !*** ./src/app/pages/travels/travels.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<app-layout class=\"card-size\">\n  <div slot=\"main\" class=\"content-card\">\n    <form>\n      <cwc-grid class=\"demo-grid\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 1rem;\">\n        <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\n          <cwc-select\n            style=\"width: 100%;\"\n            label='Departamento'\n            (cwcChange)=\"changeDepartament($event)\"\n            design-version=\"v2\">\n            <cwc-select-option value=\"0\" selected=\"\">Seleccionar</cwc-select-option>\n            <cwc-select-option [value]=\"departament\" *ngFor=\"let departament of departamentList\" >{{departament}}</cwc-select-option>\n            </cwc-select>\n          </cwc-cell>\n          <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\n            <cwc-select\n              style=\"width: 100%;\"\n              label='Origen (Municipio)'\n              (cwcChange)=\"changeSource($event)\"\n              design-version=\"v2\">\n              <cwc-select-option value=\"0\" selected=\"\">Seleccionar</cwc-select-option>\n              <cwc-select-option [value]=\"source\" *ngFor=\"let source of sourceList\" >{{source}}</cwc-select-option>\n              </cwc-select>\n          </cwc-cell>\n      </cwc-grid>\n      <cwc-grid class=\"demo-grid flex flex__align--center\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 1rem;\">\n        <cwc-cell class=\"flex flex__align--center\" style=\"padding-bottom: 20px;\" colspan=\"12\" mobile-colspan=\"5\">          \n          <h5 style=\"text-transform: capitalize;\" >Fecha</h5>\n        </cwc-cell>\n        <cwc-cell colspan=\"12\" mobile-colspan=\"7\">\n          <cwc-select\n            (cwcChange)=\"changeDate($event)\"\n            placeholder=\"Seleccionar\"\n            design-version=\"v2\">\n            <cwc-select-option value=\"0\" selected=\"\">Seleccionar</cwc-select-option>\n            <cwc-select-option [value]=\"dateL\" *ngFor=\"let dateL of dateList\" >{{dateL}}</cwc-select-option>\n          </cwc-select>\n        </cwc-cell>\n      </cwc-grid>\n      <cwc-grid class=\"demo-grid flex flex__align--center\" design-version=\"v2\" columns=\"12\" mobile-columns=\"12\" style=\"margin-top: 1rem;\">\n        <cwc-cell class=\"flex flex__align--center\" style=\"padding-bottom: 20px;\" colspan=\"12\" mobile-colspan=\"5\">          \n          <h5 style=\"text-transform: capitalize;\" >Rango de Hora</h5>\n        </cwc-cell>\n        <cwc-cell colspan=\"12\" mobile-colspan=\"7\">\n          <cwc-select\n            placeholder=\"Seleccionar\"\n            design-version=\"v2\"\n            (cwcChange)=\"changeHour($event)\">\n            <cwc-select-option value=\"0\" selected=\"\">Seleccionar</cwc-select-option>\n            <cwc-select-option [value]=\"timeL\" *ngFor=\"let timeL of timeList\" >{{timeL}}</cwc-select-option>\n          </cwc-select>\n        </cwc-cell>\n      </cwc-grid>\n      <div class=\"content-button\" *ngIf=\"buttonActivate === true\">\n        <cwc-button\n        (cwcClick)=\"searchTrips()\"\n        design-version=\"v1\"\n        variant=\"regular-block\">BUSCAR VIAJES DISPONIBLES</cwc-button>\n      </div>\n    </form>\n  </div>\n</app-layout>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_travels_travels_module_ts.js.map