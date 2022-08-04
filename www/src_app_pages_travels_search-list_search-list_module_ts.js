"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_travels_search-list_search-list_module_ts"],{

/***/ 51996:
/*!*************************************************************************!*\
  !*** ./src/app/pages/travels/search-list/search-list-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchListPageRoutingModule": () => (/* binding */ SearchListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _search_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-list.page */ 59642);




const routes = [
    {
        path: '',
        component: _search_list_page__WEBPACK_IMPORTED_MODULE_0__.SearchListPage
    }
];
let SearchListPageRoutingModule = class SearchListPageRoutingModule {
};
SearchListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchListPageRoutingModule);



/***/ }),

/***/ 38294:
/*!*****************************************************************!*\
  !*** ./src/app/pages/travels/search-list/search-list.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchListPageModule": () => (/* binding */ SearchListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _search_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-list-routing.module */ 51996);
/* harmony import */ var _search_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-list.page */ 59642);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);









let SearchListPageModule = class SearchListPageModule {
};
SearchListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _search_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchListPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__.CmxWebComponentsModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_search_list_page__WEBPACK_IMPORTED_MODULE_1__.SearchListPage]
    })
], SearchListPageModule);



/***/ }),

/***/ 59642:
/*!***************************************************************!*\
  !*** ./src/app/pages/travels/search-list/search-list.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchListPage": () => (/* binding */ SearchListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _search_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-list.page.html?ngResource */ 12016);
/* harmony import */ var _search_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-list.page.scss?ngResource */ 21551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/travels/travel.service */ 74894);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);







let SearchListPage = class SearchListPage {
    constructor(location, travelService, navCtrl) {
        this.location = location;
        this.travelService = travelService;
        this.navCtrl = navCtrl;
        this.listSearch = [];
    }
    ngOnInit() {
        this.listSearch = this.travelService.traveSearchList;
    }
    onBack() {
        this.location.back();
    }
    detailTravel(codeTravel) {
        this.travelService.code = codeTravel;
        console.log(this.travelService.code);
        this.navCtrl.navigateRoot('/app/travels/detail-search', { animated: false });
    }
};
SearchListPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _services_travels_travel_service__WEBPACK_IMPORTED_MODULE_2__.TravelService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
SearchListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-search-list',
        template: _search_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_search_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchListPage);



/***/ }),

/***/ 21551:
/*!****************************************************************************!*\
  !*** ./src/app/pages/travels/search-list/search-list.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".header-text {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  position: fixed;\n  top: 1;\n  right: 50;\n  left: 0;\n  margin-left: 1rem;\n}\n\n.attr-name {\n  font-weight: 700;\n}\n\n.content-card {\n  padding-top: 0.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 1rem;\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n.content-title {\n  padding-top: 1rem;\n  font-weight: 700;\n}\n\n.content-grid-register {\n  overflow: auto;\n  justify-content: center !important;\n}\n\n.content-list {\n  padding-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUM7RUFDRyxnQkFBQTtBQUNKOztBQUVDO0VBQ0csbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBRUksY0FBQTtFQUNBLGtDQUFBO0FBQUo7O0FBSUM7RUFDRSxvQkFBQTtBQURIIiwiZmlsZSI6InNlYXJjaC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdGV4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTtcclxuICAgIHJpZ2h0OiA1MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuIH1cclxuIFxyXG4gLmF0dHItbmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7ICAgIFxyXG4gfVxyXG5cclxuIC5jb250ZW50LWNhcmR7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gfVxyXG5cclxuLmNvbnRlbnQtdGl0bGV7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5jb250ZW50LWdyaWQtcmVnaXN0ZXJ7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmNvbnRlbnQtbGlzdHtcclxuICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiB9Il19 */";

/***/ }),

/***/ 12016:
/*!****************************************************************************!*\
  !*** ./src/app/pages/travels/search-list/search-list.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-header design-version=\"v2\" slot=\"header\" show-Menu-Button=\"false\" show-cemex-logo=\"false\">\n  <div class=\"header-text\">\n    <ion-icon name=\"arrow-back-outline\" style=\"font-size: 25px;\" (click)=\"onBack()\"></ion-icon>\n    <div class=\"attr-name\" style=\"padding-left: 1rem;\">Buscar viaje</div>\n  </div>\n</cwc-header>\n<div slot=\"main\" class=\"content-card\">\n  <div class=\"content-title\" style=\"color: #938f8f;\">\n    Viajes disponibles\n  </div>  \n  <hr color=\"#D0D0D0\"/>\n  <div>\n    <h4>Destino</h4>\n    <cwc-grid class=\"demo-grid content-list flex\" (click)=\"detailTravel(list.codeTravel)\" *ngFor=\"let list of listSearch\">\n      <cwc-cell class=\"flex flex__align--center\" colspan=\"12\" mobile-colspan=\"11\" style=\"padding-bottom: 0;\">       \n          <div>{{'Viaje ' + list.codeTravel + ', ' + list.timerStar}}</div>       \n      </cwc-cell>\n      <cwc-cell colspan=\"12\" mobile-colspan=\"1\" style=\"margin-top: 1px;\">       \n        <cwc-icon class=\"flex flex__align--center\" name=\"right-single\" size=\"18px\"></cwc-icon>      \n      </cwc-cell>\n    </cwc-grid>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_travels_search-list_search-list_module_ts.js.map