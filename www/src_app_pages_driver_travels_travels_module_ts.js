"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_driver_travels_travels_module_ts"],{

/***/ 44453:
/*!****************************************************************!*\
  !*** ./src/app/pages/driver/travels/travels-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelsPageRoutingModule": () => (/* binding */ TravelsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _travels_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travels.page */ 18797);




const routes = [
    {
        path: '',
        component: _travels_page__WEBPACK_IMPORTED_MODULE_0__.TravelsPage
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

/***/ 33039:
/*!********************************************************!*\
  !*** ./src/app/pages/driver/travels/travels.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelsPageModule": () => (/* binding */ TravelsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _travels_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travels-routing.module */ 44453);
/* harmony import */ var _travels_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travels.page */ 18797);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/components.module */ 45642);
/* harmony import */ var _layout_layout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/layout.page */ 93571);









let TravelsPageModule = class TravelsPageModule {
};
TravelsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _travels_routing_module__WEBPACK_IMPORTED_MODULE_0__.TravelsPageRoutingModule
        ],
        declarations: [_travels_page__WEBPACK_IMPORTED_MODULE_1__.TravelsPage, _layout_layout_page__WEBPACK_IMPORTED_MODULE_3__.LayoutPage]
    })
], TravelsPageModule);



/***/ }),

/***/ 18797:
/*!******************************************************!*\
  !*** ./src/app/pages/driver/travels/travels.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelsPage": () => (/* binding */ TravelsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _travels_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travels.page.html?ngResource */ 9195);
/* harmony import */ var _travels_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travels.page.scss?ngResource */ 18210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TravelsPage = class TravelsPage {
    constructor() { }
    ngOnInit() {
    }
};
TravelsPage.ctorParameters = () => [];
TravelsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-travels',
        template: _travels_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_travels_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TravelsPage);



/***/ }),

/***/ 18210:
/*!*******************************************************************!*\
  !*** ./src/app/pages/driver/travels/travels.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmF2ZWxzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 9195:
/*!*******************************************************************!*\
  !*** ./src/app/pages/driver/travels/travels.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<app-layout><div class=\"button\">\r\n  <h1>Bievenido Conductor</h1>\r\n</div></app-layout>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_driver_travels_travels_module_ts.js.map