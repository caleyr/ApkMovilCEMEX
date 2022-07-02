"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin-logist_drivers_drivers_drivers_module_ts"],{

/***/ 23627:
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin-logist/drivers/drivers/drivers-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversPageRoutingModule": () => (/* binding */ DriversPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _drivers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drivers.page */ 85282);




const routes = [
    {
        path: '',
        component: _drivers_page__WEBPACK_IMPORTED_MODULE_0__.DriversPage
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

/***/ 12781:
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin-logist/drivers/drivers/drivers.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversPageModule": () => (/* binding */ DriversPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _drivers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drivers-routing.module */ 23627);
/* harmony import */ var _drivers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drivers.page */ 85282);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/components.module */ 45642);
/* harmony import */ var _layout_layout_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layout/layout.page */ 93571);










let DriversPageModule = class DriversPageModule {
};
DriversPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__.CmxWebComponentsModule.forRoot(),
            _drivers_routing_module__WEBPACK_IMPORTED_MODULE_0__.DriversPageRoutingModule
        ],
        declarations: [_drivers_page__WEBPACK_IMPORTED_MODULE_1__.DriversPage, _layout_layout_page__WEBPACK_IMPORTED_MODULE_4__.LayoutPage]
    })
], DriversPageModule);



/***/ }),

/***/ 85282:
/*!********************************************************************!*\
  !*** ./src/app/pages/admin-logist/drivers/drivers/drivers.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversPage": () => (/* binding */ DriversPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _drivers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drivers.page.html?ngResource */ 12821);
/* harmony import */ var _drivers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drivers.page.scss?ngResource */ 30602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let DriversPage = class DriversPage {
    constructor() { }
    ngOnInit() {
    }
};
DriversPage.ctorParameters = () => [];
DriversPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-drivers',
        template: _drivers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_drivers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DriversPage);



/***/ }),

/***/ 30602:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/admin-logist/drivers/drivers/drivers.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = ".ion-page {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaXZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJkcml2ZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tcGFnZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 12821:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/admin-logist/drivers/drivers/drivers.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "<app-layout>\r\n <h1>Bievenido Hombre Camion</h1>\r\n</app-layout>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin-logist_drivers_drivers_drivers_module_ts.js.map