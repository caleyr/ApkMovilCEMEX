"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_layout_layout_module_ts"],{

/***/ 82419:
/*!*******************************************************!*\
  !*** ./src/app/pages/layout/layout-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutPageRoutingModule": () => (/* binding */ LayoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.page */ 93571);




const routes = [
    {
        path: 'app',
        component: _layout_page__WEBPACK_IMPORTED_MODULE_0__.LayoutPage,
        children: [
            {
                path: 'list-drivers',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_admin-logist_drivers_drivers_drivers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../admin-logist/drivers/drivers/drivers.module */ 12781)).then(m => m.DriversPageModule)
            },
            {
                path: 'list-travels',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_driver_travels_travels_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../driver/travels/travels.module */ 33039)).then(m => m.TravelsPageModule)
            },
            {
                path: '',
                redirectTo: '/main/app/drivers',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/main/app/drivers',
        pathMatch: 'full'
    }
];
let LayoutPageRoutingModule = class LayoutPageRoutingModule {
};
LayoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LayoutPageRoutingModule);



/***/ }),

/***/ 93077:
/*!***********************************************!*\
  !*** ./src/app/pages/layout/layout.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutPageModule": () => (/* binding */ LayoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-routing.module */ 82419);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);
/* harmony import */ var _layout_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.page */ 93571);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ 45642);









let LayoutPageModule = class LayoutPageModule {
};
LayoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutPageRoutingModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_1__.CmxWebComponentsModule.forRoot(),
        ],
        declarations: [_layout_page__WEBPACK_IMPORTED_MODULE_2__.LayoutPage]
    })
], LayoutPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_layout_layout_module_ts.js.map