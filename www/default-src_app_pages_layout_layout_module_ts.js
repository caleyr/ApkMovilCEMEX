"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_layout_layout_module_ts"],{

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
    },
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
        declarations: [
            _layout_page__WEBPACK_IMPORTED_MODULE_2__.LayoutPage
        ],
        exports: [
            _layout_page__WEBPACK_IMPORTED_MODULE_2__.LayoutPage
        ]
    })
], LayoutPageModule);



/***/ }),

/***/ 93571:
/*!*********************************************!*\
  !*** ./src/app/pages/layout/layout.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutPage": () => (/* binding */ LayoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _layout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.page.html?ngResource */ 81697);
/* harmony import */ var _layout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.page.scss?ngResource */ 10225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);
/* harmony import */ var src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/login.service */ 52876);
/* harmony import */ var src_app_services_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sidebar-menu.service */ 56997);



/* eslint-disable prefer-const */




let LayoutPage = class LayoutPage {
    constructor(storage, sideBarMenu, loginService) {
        this.storage = storage;
        this.sideBarMenu = sideBarMenu;
        this.loginService = loginService;
        this.notDriver = false;
        this.menu = [];
        this.user = {
            name: '',
        };
        if (loginService.profileUser.Roles !== "Conductor") {
            this.notDriver = true;
        }
        this.currentUser();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            //await this.getData(); 
        });
    }
    currentUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user.name = this.loginService.profileUser.FirstName + ' ' + this.loginService.profileUser.LastName;
        });
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.get('token').then(data => {
                this.loginService.getDataProfile(data);
            });
        });
    }
    logout() {
        this.menu = [];
        this.roles = " ";
        this.loginService.logout();
    }
};
LayoutPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: src_app_services_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_3__.SidebarMenuService },
    { type: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
LayoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-layout',
        template: _layout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_layout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LayoutPage);



/***/ }),

/***/ 56997:
/*!**************************************************!*\
  !*** ./src/app/services/sidebar-menu.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarMenuService": () => (/* binding */ SidebarMenuService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);

/* eslint-disable @typescript-eslint/member-ordering */

let SidebarMenuService = class SidebarMenuService {
    constructor() { }
    getMenu(role) {
        const menu = [
            {
                title: 'Inicio',
                icon: 'radio-static',
                url: 'home',
                show: true,
            },
            {
                title: 'Mis viajes',
                icon: 'radio-static',
                url: 'travels',
                show: true,
            },
            {
                title: 'Buscar viaje',
                icon: 'radio-static',
                url: 'search-travel',
                show: true,
            },
            {
                title: 'Notificaciones',
                icon: 'radio-static',
                url: 'notifications',
                show: true,
            },
            {
                title: 'Lista de espera',
                icon: 'radio-static',
                url: 'waiting-list',
                show: true,
            },
            {
                title: 'Vehículos',
                icon: 'radio-static',
                url: 'vehicles',
                show: role !== 'Driver' ? true : false
            },
            {
                title: 'Conductores',
                icon: 'radio-static',
                url: 'drivers',
                show: role !== 'Driver' ? true : false
            },
            {
                title: 'Llamar a centro de servicio',
                icon: 'radio-static',
                url: 'call-service',
                show: true,
            },
        ];
        return menu;
    }
};
SidebarMenuService.ctorParameters = () => [];
SidebarMenuService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SidebarMenuService);



/***/ }),

/***/ 10225:
/*!**********************************************************!*\
  !*** ./src/app/pages/layout/layout.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".content-avatar-menu {\n  padding-top: 0.8rem;\n  padding-left: 0.8rem;\n  display: flex;\n}\n\n.text-name-menu {\n  margin-left: 0.5rem;\n  margin-top: 0.4rem;\n}\n\n.wrapper:hover {\n  background-color: #E8EBEF;\n}\n\n.flex.content-notification {\n  display: flex;\n}\n\n.badge-notification {\n  text-align: center;\n  line-height: 1rem;\n  background-color: red;\n  border-radius: 50%;\n  display: inline-block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUNEOztBQUNBO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtBQUVEOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7QUFJSjs7QUFGQTtFQUdJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFHSiIsImZpbGUiOiJsYXlvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYXZhdGFyLW1lbnV7XHJcbiBwYWRkaW5nLXRvcDogMC44cmVtOyBcclxuIHBhZGRpbmctbGVmdDogMC44cmVtOyBcclxuIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnRleHQtbmFtZS1tZW51e1xyXG4gbWFyZ2luLWxlZnQ6IDAuNXJlbTsgXHJcbiBtYXJnaW4tdG9wOiAwLjRyZW07XHJcbn1cclxuLndyYXBwZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RUJFRjtcclxufVxyXG4uZmxleC5jb250ZW50LW5vdGlmaWNhdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJhZGdlLW5vdGlmaWNhdGlvbntcclxuICAgIC8vIHdpZHRoOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgIC8vIGhlaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZzogMC4ycmVtO1xyXG59Il19 */";

/***/ }),

/***/ 81697:
/*!**********************************************************!*\
  !*** ./src/app/pages/layout/layout.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<cwc-page design-version=\"v2\" variant=\"positive\">\r\n\r\n    <cwc-header design-version=\"v2\" slot=\"header\" show-cemex-logo=\"true\" show-Menu-Button=\"true\">\r\n        <!-- <cwc-overlay design-version=\"v2\" min-width=\"300px\" variant=\"popover\" height=\"286px\">\r\n            <div slot=\"target\" class=\"flex content-notification flex__align--center m-end-xs\" >\r\n                <cwc-button variant=\"link\" leading-icon=\"notification\" white size=\"medium\" class=\"m-end-xs\">Notificaciones</cwc-button>\r\n                <div class=\"display-inline-block p-all-xs border-radius--circle bg--true-red badge-notification\" style=\"width: 1rem; height: 1rem; text-align: center; line-height: 1rem;\">2</div>\r\n            </div>\r\n        </cwc-overlay> -->\r\n    </cwc-header>\r\n  \r\n\r\n    <cwc-sidenav slot=\"sidenav\" variant=\"positive\">\r\n        <!-- <cwc-entity-selector slot=\"legal-entity-selection\" variant=\"positive\">\r\n            <cwc-entity-selector-item entity-icon=\"user\" entity-name=\"Amanda Lopez\" entity-id=\"Hombre Camnión\" active>\r\n                <cwc-avatar size=\"small\" variant=\"negative\" name=\"Michael Wasserman\" class=\"m-h-xs\"></cwc-avatar>\r\n            </cwc-entity-selector-item>\r\n            <cwc-entity-selector-item entity-name=\"Grand Valley Construction\" entity-id=\"#1323555\"></cwc-entity-selector-item>\r\n        </cwc-entity-selector> -->\r\n    \r\n        <cwc-sidenav-menu id=\"menuNav\" slot=\"menu-items\" variant=\"positive\">\r\n            <div class=\"content-avatar-menu\" style=\"margin-left: 0.5; margin-right: 0.5rem; display: flex; align-items: center;\" [routerLink]=\"['/app/profile']\" routerLinkActive=\"router-link-active\" >\r\n                <cwc-avatar size=\"small\" variant=\"negative\" [name]=\"user.name\" class=\"m-h-xs\" style=\"width: 15%; padding: 1rem\"></cwc-avatar>\r\n                 <p style=\"margin-left: 0.5rem;\">{{ user.name }}</p>\r\n            </div>\r\n            \r\n            <!-- <div>\r\n                <ul *ngFor=\"let menudDriver of menu\">\r\n                    <li>\r\n                        <cwc-icon name=\"module-customer-information\" color=\"true-black\"></cwc-icon>\r\n                        {{menudDriver.title}}\r\n                    </li>\r\n                </ul>\r\n            </div> -->\r\n            <!-- <cwc-sidenav-menu-item *ngFor=\"let menudDriver of menu\" [label]=\"menudDriver.title\" [iconName]=\"menudDriver.icon\" [routerLink]=\"menudDriver.url\" routerLinkActive=\"router-link-active\" ></cwc-sidenav-menu-item> -->\r\n\r\n            <!-- <div *ngFor=\"let menudDriver of menu\">\r\n                <cwc-sidenav-menu-item *ngIf=\"menudDriver.show\"  [label]=\"menudDriver.title\" [routerLink]=\"menudDriver.url\" routerLinkActive=\"router-link-active\" ></cwc-sidenav-menu-item>\r\n            </div> -->\r\n        <cwc-sidenav-menu-item  label=\"Inicio\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/home']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item  label=\"Mis viajes\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/my-travels']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item  label=\"Buscar viaje\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/travels']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item  label=\"Notificaciones\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/notifications']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item  label=\"Lista de espera\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/waiting-list']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item *ngIf=\"notDriver\"  label=\"Vehículos\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/vehiculos']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item *ngIf=\"notDriver\" label=\"Conductores\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/conductores']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item  label=\"Llamar a centro de servicio\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/call-service']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n\r\n        </cwc-sidenav-menu>\r\n        <cwc-footer-menu slot=\"links\">\r\n            <cwc-footer-menu-item label=\"Legal\" href=\"https://www.cemex.com/legal\" target=\"_blank\"></cwc-footer-menu-item>\r\n            <cwc-footer-menu-item label=\"Privacy\" onclick=\"window.alert('Triggered by a javascript function')\"></cwc-footer-menu-item>\r\n            <cwc-footer-menu-item label=\"cemex.com\" href=\"https://www.cemex.com\" target=\"_blank\"></cwc-footer-menu-item>\r\n        </cwc-footer-menu>\r\n    \r\n        <div slot=\"copyright\">\r\n            <div class=\"button\" (click)=\"logout()\">\r\n                <cwc-button variant=\"link\">Cerrar Sesión</cwc-button>\r\n            </div>\r\n            <br>\r\n            © 2017-2019 CEMEX\r\n            International<br /> Holding AG.\r\n            All rights reserved.\r\n        </div>\r\n    </cwc-sidenav>\r\n  \r\n  \r\n    <div slot=\"main\" style=\"padding: 15px; flex: 1 1 auto\">\r\n        <!-- <h1 style=\"margin-top: 0\">Page Demo</h1>\r\n        <ion-router-outlet style=\"flex: 1 1 auto;\"></ion-router-outlet> -->\r\n        <ng-content></ng-content>\r\n      </div>\r\n  </cwc-page>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_layout_layout_module_ts.js.map