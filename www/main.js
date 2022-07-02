(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 95107);




const routes = [
    {
        path: 'main',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_layout_layout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/layout/layout.module */ 93077)).then(m => m.LayoutPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_auth_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/pages/login/login.module */ 77694)).then(m => m.LoginPageModule),
    },
    {
        path: 'reset-password-email',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_auth_pages_password_email_email_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/pages/password/email/email.module */ 94400)).then(m => m.EmailPageModule),
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_convert-photo-camera_convert-photo-camera_service_ts-node_modules_ca-b1e384"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 60207)).then(m => m.RegisterPageModule)
    },
    {
        path: 'app',
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 57994)).then(m => m.HomePageModule),
                canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 88558)).then(m => m.ProfilePageModule)
            },
            {
                path: 'edit',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_profile_edit_edit_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/edit/edit.module */ 84780)).then(m => m.EditPageModule)
            },
            {
                path: 'update-archives',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_convert-photo-camera_convert-photo-camera_service_ts-node_modules_ca-b1e384"), __webpack_require__.e("default-src_app_pages_profile_update-archives_update-archives_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/update-archives/update-archives.module */ 56769)).then(m => m.UpdateArchivesPageModule)
            },
            {
                path: 'list-drivers',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_admin-logist_drivers_drivers_drivers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin-logist/drivers/drivers/drivers.module */ 12781)).then(m => m.DriversPageModule),
                canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
            },
            {
                path: 'list-travels',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_driver_travels_travels_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/driver/travels/travels.module */ 33039)).then(m => m.TravelsPageModule),
                canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
            },
        ]
    },
    {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ 47566);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.module */ 45642);











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.IonicStorageModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_2__.CmxWebComponentsModule.forRoot()
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 77613:
/*!*******************************************************************!*\
  !*** ./src/app/components/alert-confim/alert-confim.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertConfimComponent": () => (/* binding */ AlertConfimComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _alert_confim_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-confim.component.html?ngResource */ 87718);
/* harmony import */ var _alert_confim_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-confim.component.scss?ngResource */ 2068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AlertConfimComponent = class AlertConfimComponent {
    constructor() { }
    ngOnInit() { }
};
AlertConfimComponent.ctorParameters = () => [];
AlertConfimComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-alert-confim',
        template: _alert_confim_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_alert_confim_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlertConfimComponent);



/***/ }),

/***/ 43334:
/*!*********************************************************************!*\
  !*** ./src/app/components/alert-success/alert-success.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertSuccessComponent": () => (/* binding */ AlertSuccessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _alert_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-success.component.html?ngResource */ 39857);
/* harmony import */ var _alert_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-success.component.scss?ngResource */ 82445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let AlertSuccessComponent = class AlertSuccessComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    go() {
        this.navCtrl.navigateRoot(this.urlButton, { animated: true });
    }
};
AlertSuccessComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
AlertSuccessComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    urlButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    textButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    alertShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
AlertSuccessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-alert-success',
        template: _alert_success_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_alert_success_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlertSuccessComponent);



/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _alert_success_alert_success_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-success/alert-success.component */ 43334);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ 85819);
/* harmony import */ var _utilities_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/error-messages/error-messages.component */ 38891);
/* harmony import */ var _alert_confim_alert_confim_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-confim/alert-confim.component */ 77613);
/* harmony import */ var _toast_message_toast_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toast-message/toast-message.component */ 34629);
/* harmony import */ var _pages_layout_layout_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/layout/layout.page */ 93571);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);











let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _alert_success_alert_success_component__WEBPACK_IMPORTED_MODULE_0__.AlertSuccessComponent,
            _alert_confim_alert_confim_component__WEBPACK_IMPORTED_MODULE_3__.AlertConfimComponent,
            _utilities_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_2__.ErrorMessagesComponent,
            _pages_layout_layout_page__WEBPACK_IMPORTED_MODULE_5__.LayoutPage,
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent,
            _toast_message_toast_message_component__WEBPACK_IMPORTED_MODULE_4__.ToastMessageComponent,
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        ],
        exports: [
            _pages_layout_layout_page__WEBPACK_IMPORTED_MODULE_5__.LayoutPage,
            _alert_success_alert_success_component__WEBPACK_IMPORTED_MODULE_0__.AlertSuccessComponent,
            _alert_confim_alert_confim_component__WEBPACK_IMPORTED_MODULE_3__.AlertConfimComponent,
            _utilities_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_2__.ErrorMessagesComponent,
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent,
            _toast_message_toast_message_component__WEBPACK_IMPORTED_MODULE_4__.ToastMessageComponent
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 85819:
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component.html?ngResource */ 22574);
/* harmony import */ var _menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.scss?ngResource */ 91346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() { }
};
MenuComponent.ctorParameters = () => [];
MenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-menu',
        template: _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuComponent);



/***/ }),

/***/ 34629:
/*!*********************************************************************!*\
  !*** ./src/app/components/toast-message/toast-message.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastMessageComponent": () => (/* binding */ ToastMessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _toast_message_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast-message.component.html?ngResource */ 47868);
/* harmony import */ var _toast_message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast-message.component.scss?ngResource */ 64497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ToastMessageComponent = class ToastMessageComponent {
    constructor() { }
    ngOnInit() {
    }
};
ToastMessageComponent.ctorParameters = () => [];
ToastMessageComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ToastMessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-toast-message',
        template: _toast_message_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_toast_message_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ToastMessageComponent);



/***/ }),

/***/ 95107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth/login.service */ 52876);




let AuthGuard = class AuthGuard {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    canLoad(route, segments) {
        return this.loginService.validateToken();
    }
    canActivate() {
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 93571:
/*!*********************************************!*\
  !*** ./src/app/pages/layout/layout.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        this.roles = [];
        this.menu = [];
        this.user = {
            name: '',
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
            yield this.getRoles();
            yield this.validateRol();
            yield this.currentUser();
        });
    }
    logout() {
        this.menu = [];
        this.roles = [];
        this.loginService.logout();
    }
    currentUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.get('current_user').then(resp => {
                this.user.name = resp.user.firstName + ' ' + resp.user.lastName;
                // this.user.name = 'Mauricio Perez';
            });
        });
    }
    getRoles() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.get('roles').then(resp => {
                this.roles = resp;
            });
        });
    }
    validateRol() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.roles.map((rol) => {
                if (rol !== 'Driver') {
                    this.notDriver = true;
                }
            });
            // this.menu =  this.sideBarMenu.getMenu(notDriver ? '': 'Driver');
        });
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

/***/ 52876:
/*!************************************************!*\
  !*** ./src/app/services/auth/login.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);

/* eslint-disable @typescript-eslint/naming-convention */






const URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
const headersHttp = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
});
let LoginService = class LoginService {
    constructor(storage, http, navCtrl, location) {
        this.storage = storage;
        this.http = http;
        this.navCtrl = navCtrl;
        this.location = location;
        this.token = null;
        this.currentToken = null;
        this.roles = [];
        this.currentRoles = [];
        this.manTruck = false;
        this.expiration = null;
        this.user = null;
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.create();
        });
    }
    login(data) {
        return this.http.post(`${URL}/api/auth/login`, data, { headers: headersHttp });
    }
    logout() {
        this.token = null;
        this.user = null;
        this.storage.clear();
        this.navCtrl.navigateRoot('/login', { animated: true });
    }
    saveToken(token, expiration, user, roles) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.token = token;
            this.expiration = expiration;
            this.user = user;
            this.roles = roles;
            yield this.storage.set('roles', roles);
            yield this.storage.set('token', token);
            yield this.storage.set('expiration_token', expiration);
            yield this.storage.set('current_user', user);
            yield this.validateToken();
        });
    }
    getToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.currentToken = (yield this.storage.get('token')) || null;
        });
    }
    validateToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getToken();
            if (!this.currentToken) {
                this.navCtrl.navigateRoot('/login');
                return Promise.resolve(false);
            }
            return Promise.resolve(true);
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 56997:
/*!**************************************************!*\
  !*** ./src/app/services/sidebar-menu.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 38891:
/*!**********************************************************************!*\
  !*** ./src/app/utilities/error-messages/error-messages.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorMessagesComponent": () => (/* binding */ ErrorMessagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _error_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-messages.component.html?ngResource */ 84377);
/* harmony import */ var _error_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-messages.component.scss?ngResource */ 64435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let ErrorMessagesComponent = class ErrorMessagesComponent {
    constructor() {
        this.errors = [];
    }
    ngOnInit() { }
};
ErrorMessagesComponent.ctorParameters = () => [];
ErrorMessagesComponent.propDecorators = {
    errors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ErrorMessagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-error-messages',
        template: _error_messages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_error_messages_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ErrorMessagesComponent);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //url: 'https://back-end-cemex20220327145506.azurewebsites.net'
    url: 'https://localhost:5001'
    //  url: 'https://192.168.0.2:5001'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 38763);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_0__.defineCustomElements)(window);


/***/ }),

/***/ 87128:
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@cmx-web-components/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*******************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./cwc-accordion.entry.js": [
		73020,
		"node_modules_cmx-web-components_core_dist_esm_cwc-accordion_entry_js"
	],
	"./cwc-action-bar-button.entry.js": [
		60213,
		"node_modules_cmx-web-components_core_dist_esm_cwc-action-bar-button_entry_js"
	],
	"./cwc-action-bar.entry.js": [
		531,
		"common",
		"node_modules_cmx-web-components_core_dist_esm_cwc-action-bar_entry_js"
	],
	"./cwc-alert.entry.js": [
		56543,
		"node_modules_cmx-web-components_core_dist_esm_cwc-alert_entry_js"
	],
	"./cwc-avatar.entry.js": [
		28456,
		"node_modules_cmx-web-components_core_dist_esm_cwc-avatar_entry_js"
	],
	"./cwc-badge.entry.js": [
		45428,
		"node_modules_cmx-web-components_core_dist_esm_cwc-badge_entry_js"
	],
	"./cwc-breadcrumb.entry.js": [
		84039,
		"node_modules_cmx-web-components_core_dist_esm_cwc-breadcrumb_entry_js"
	],
	"./cwc-breadcrumbs.entry.js": [
		21979,
		"node_modules_cmx-web-components_core_dist_esm_cwc-breadcrumbs_entry_js"
	],
	"./cwc-button_3.entry.js": [
		86927,
		"node_modules_cmx-web-components_core_dist_esm_cwc-button_3_entry_js"
	],
	"./cwc-card.entry.js": [
		30296,
		"node_modules_cmx-web-components_core_dist_esm_cwc-card_entry_js"
	],
	"./cwc-cell.entry.js": [
		74774,
		"node_modules_cmx-web-components_core_dist_esm_cwc-cell_entry_js"
	],
	"./cwc-chart.entry.js": [
		53477,
		"node_modules_cmx-web-components_core_dist_esm_cwc-chart_entry_js"
	],
	"./cwc-chatbot.entry.js": [
		39638,
		"node_modules_cmx-web-components_core_dist_esm_cwc-chatbot_entry_js"
	],
	"./cwc-checkbox.entry.js": [
		28377,
		"node_modules_cmx-web-components_core_dist_esm_cwc-checkbox_entry_js"
	],
	"./cwc-css-helpers_4.entry.js": [
		96431,
		"node_modules_cmx-web-components_core_dist_esm_cwc-css-helpers_4_entry_js"
	],
	"./cwc-dropzone.entry.js": [
		49845,
		"node_modules_cmx-web-components_core_dist_esm_cwc-dropzone_entry_js"
	],
	"./cwc-empty-result_2.entry.js": [
		99296,
		"node_modules_cmx-web-components_core_dist_esm_cwc-empty-result_2_entry_js"
	],
	"./cwc-entity-selector-item.entry.js": [
		94583,
		"node_modules_cmx-web-components_core_dist_esm_cwc-entity-selector-item_entry_js"
	],
	"./cwc-entity-selector.entry.js": [
		90337,
		"node_modules_cmx-web-components_core_dist_esm_cwc-entity-selector_entry_js"
	],
	"./cwc-error-screen.entry.js": [
		96439,
		"node_modules_cmx-web-components_core_dist_esm_cwc-error-screen_entry_js"
	],
	"./cwc-focus-trap.entry.js": [
		92390,
		"node_modules_cmx-web-components_core_dist_esm_cwc-focus-trap_entry_js"
	],
	"./cwc-footer-menu-item.entry.js": [
		6820,
		"node_modules_cmx-web-components_core_dist_esm_cwc-footer-menu-item_entry_js"
	],
	"./cwc-footer-menu.entry.js": [
		15536,
		"node_modules_cmx-web-components_core_dist_esm_cwc-footer-menu_entry_js"
	],
	"./cwc-gallery-image.entry.js": [
		54330,
		"node_modules_cmx-web-components_core_dist_esm_cwc-gallery-image_entry_js"
	],
	"./cwc-gallery.entry.js": [
		37589,
		"common",
		"node_modules_cmx-web-components_core_dist_esm_cwc-gallery_entry_js"
	],
	"./cwc-grid.entry.js": [
		34936,
		"node_modules_cmx-web-components_core_dist_esm_cwc-grid_entry_js"
	],
	"./cwc-header-selector.entry.js": [
		78694,
		"default-node_modules_cmx-web-components_core_dist_esm_commonComponentFeatures-b771e888_js-nod-f02dfc",
		"common",
		"node_modules_cmx-web-components_core_dist_esm_cwc-header-selector_entry_js"
	],
	"./cwc-hero-slide.entry.js": [
		83514,
		"node_modules_cmx-web-components_core_dist_esm_cwc-hero-slide_entry_js"
	],
	"./cwc-hero.entry.js": [
		92663,
		"node_modules_cmx-web-components_core_dist_esm_cwc-hero_entry_js"
	],
	"./cwc-icon-animated.entry.js": [
		78315,
		"node_modules_cmx-web-components_core_dist_esm_cwc-icon-animated_entry_js"
	],
	"./cwc-icon.entry.js": [
		5953,
		"default-node_modules_cmx-web-components_core_dist_esm_commonComponentFeatures-b771e888_js-nod-f02dfc",
		"node_modules_cmx-web-components_core_dist_esm_cwc-icon_entry_js"
	],
	"./cwc-inline-group.entry.js": [
		3916,
		"node_modules_cmx-web-components_core_dist_esm_cwc-inline-group_entry_js"
	],
	"./cwc-input-data-typeahead.entry.js": [
		78702,
		"common",
		"node_modules_cmx-web-components_core_dist_esm_cwc-input-data-typeahead_entry_js"
	],
	"./cwc-input-datalist-option.entry.js": [
		83489,
		"node_modules_cmx-web-components_core_dist_esm_cwc-input-datalist-option_entry_js"
	],
	"./cwc-input-datalist.entry.js": [
		84513,
		"node_modules_cmx-web-components_core_dist_esm_cwc-input-datalist_entry_js"
	],
	"./cwc-input-date.entry.js": [
		76918,
		"default-node_modules_cmx-web-components_core_dist_esm_index-a5ef71b4_js",
		"default-node_modules_cmx-web-components_core_dist_esm_index-3e8a83f2_js",
		"node_modules_cmx-web-components_core_dist_esm_cwc-input-date_entry_js"
	],
	"./cwc-input-number.entry.js": [
		34335,
		"node_modules_cmx-web-components_core_dist_esm_cwc-input-number_entry_js"
	],
	"./cwc-input-time.entry.js": [
		79960,
		"default-node_modules_cmx-web-components_core_dist_esm_index-a5ef71b4_js",
		"node_modules_cmx-web-components_core_dist_esm_cwc-input-time_entry_js"
	],
	"./cwc-input-typeahead-option.entry.js": [
		21820,
		"node_modules_cmx-web-components_core_dist_esm_cwc-input-typeahead-option_entry_js"
	],
	"./cwc-input-typeahead.entry.js": [
		12796,
		"node_modules_cmx-web-components_core_dist_esm_cwc-input-typeahead_entry_js"
	],
	"./cwc-input.entry.js": [
		63312,
		"default-node_modules_cmx-web-components_core_dist_esm_commonComponentFeatures-b771e888_js-nod-f02dfc",
		"node_modules_cmx-web-components_core_dist_esm_cwc-input_entry_js"
	],
	"./cwc-instructional-copy.entry.js": [
		14669,
		"node_modules_cmx-web-components_core_dist_esm_cwc-instructional-copy_entry_js"
	],
	"./cwc-ld-input.entry.js": [
		66525,
		"default-node_modules_cmx-web-components_core_dist_esm_commonComponentFeatures-b771e888_js-nod-f02dfc",
		"node_modules_cmx-web-components_core_dist_esm_cwc-ld-input_entry_js"
	],
	"./cwc-list-item.entry.js": [
		31331,
		"node_modules_cmx-web-components_core_dist_esm_cwc-list-item_entry_js"
	],
	"./cwc-list.entry.js": [
		71331,
		"node_modules_cmx-web-components_core_dist_esm_cwc-list_entry_js"
	],
	"./cwc-login-param.entry.js": [
		64330,
		"node_modules_cmx-web-components_core_dist_esm_cwc-login-param_entry_js"
	],
	"./cwc-login.entry.js": [
		79891,
		"node_modules_cmx-web-components_core_dist_esm_cwc-login_entry_js"
	],
	"./cwc-logo.entry.js": [
		6713,
		"node_modules_cmx-web-components_core_dist_esm_cwc-logo_entry_js"
	],
	"./cwc-menu-item_3.entry.js": [
		73701,
		"node_modules_cmx-web-components_core_dist_esm_cwc-menu-item_3_entry_js"
	],
	"./cwc-mo-calendar.entry.js": [
		31266,
		"default-node_modules_cmx-web-components_core_dist_esm_index-a5ef71b4_js",
		"default-node_modules_cmx-web-components_core_dist_esm_index-3e8a83f2_js",
		"node_modules_cmx-web-components_core_dist_esm_cwc-mo-calendar_entry_js"
	],
	"./cwc-numeric-filter.entry.js": [
		24302,
		"node_modules_cmx-web-components_core_dist_esm_cwc-numeric-filter_entry_js"
	],
	"./cwc-overlay_2.entry.js": [
		54263,
		"node_modules_cmx-web-components_core_dist_esm_cwc-overlay_2_entry_js"
	],
	"./cwc-page-title.entry.js": [
		17093,
		"node_modules_cmx-web-components_core_dist_esm_cwc-page-title_entry_js"
	],
	"./cwc-pagination.entry.js": [
		14656,
		"node_modules_cmx-web-components_core_dist_esm_cwc-pagination_entry_js"
	],
	"./cwc-picker.entry.js": [
		95416,
		"common",
		"node_modules_cmx-web-components_core_dist_esm_cwc-picker_entry_js"
	],
	"./cwc-popout_2.entry.js": [
		17750,
		"node_modules_cmx-web-components_core_dist_esm_cwc-popout_2_entry_js"
	],
	"./cwc-progress-bar-item.entry.js": [
		31261,
		"node_modules_cmx-web-components_core_dist_esm_cwc-progress-bar-item_entry_js"
	],
	"./cwc-progress-bar.entry.js": [
		27276,
		"node_modules_cmx-web-components_core_dist_esm_cwc-progress-bar_entry_js"
	],
	"./cwc-radio-group.entry.js": [
		19125,
		"node_modules_cmx-web-components_core_dist_esm_cwc-radio-group_entry_js"
	],
	"./cwc-radio.entry.js": [
		69719,
		"node_modules_cmx-web-components_core_dist_esm_cwc-radio_entry_js"
	],
	"./cwc-rater.entry.js": [
		51673,
		"node_modules_cmx-web-components_core_dist_esm_cwc-rater_entry_js"
	],
	"./cwc-segmented-controls-item.entry.js": [
		49059,
		"node_modules_cmx-web-components_core_dist_esm_cwc-segmented-controls-item_entry_js"
	],
	"./cwc-segmented-controls.entry.js": [
		77345,
		"node_modules_cmx-web-components_core_dist_esm_cwc-segmented-controls_entry_js"
	],
	"./cwc-select.entry.js": [
		34194,
		"node_modules_cmx-web-components_core_dist_esm_cwc-select_entry_js"
	],
	"./cwc-snackbar.entry.js": [
		16753,
		"node_modules_cmx-web-components_core_dist_esm_cwc-snackbar_entry_js"
	],
	"./cwc-status-indicator.entry.js": [
		28530,
		"node_modules_cmx-web-components_core_dist_esm_cwc-status-indicator_entry_js"
	],
	"./cwc-stepper-step.entry.js": [
		11877,
		"node_modules_cmx-web-components_core_dist_esm_cwc-stepper-step_entry_js"
	],
	"./cwc-stepper.entry.js": [
		10011,
		"node_modules_cmx-web-components_core_dist_esm_cwc-stepper_entry_js"
	],
	"./cwc-switch.entry.js": [
		88946,
		"node_modules_cmx-web-components_core_dist_esm_cwc-switch_entry_js"
	],
	"./cwc-tab.entry.js": [
		11583,
		"node_modules_cmx-web-components_core_dist_esm_cwc-tab_entry_js"
	],
	"./cwc-table-sort-label.entry.js": [
		28975,
		"node_modules_cmx-web-components_core_dist_esm_cwc-table-sort-label_entry_js"
	],
	"./cwc-table-wrapper.entry.js": [
		82458,
		"node_modules_cmx-web-components_core_dist_esm_cwc-table-wrapper_entry_js"
	],
	"./cwc-table.entry.js": [
		68040,
		"node_modules_cmx-web-components_core_dist_esm_cwc-table_entry_js"
	],
	"./cwc-tabs.entry.js": [
		46872,
		"node_modules_cmx-web-components_core_dist_esm_cwc-tabs_entry_js"
	],
	"./cwc-tag.entry.js": [
		80865,
		"node_modules_cmx-web-components_core_dist_esm_cwc-tag_entry_js"
	],
	"./cwc-tags.entry.js": [
		37733,
		"node_modules_cmx-web-components_core_dist_esm_cwc-tags_entry_js"
	],
	"./cwc-tbody.entry.js": [
		11858,
		"node_modules_cmx-web-components_core_dist_esm_cwc-tbody_entry_js"
	],
	"./cwc-td.entry.js": [
		22213,
		"node_modules_cmx-web-components_core_dist_esm_cwc-td_entry_js"
	],
	"./cwc-textarea.entry.js": [
		74607,
		"node_modules_cmx-web-components_core_dist_esm_cwc-textarea_entry_js"
	],
	"./cwc-th.entry.js": [
		59474,
		"node_modules_cmx-web-components_core_dist_esm_cwc-th_entry_js"
	],
	"./cwc-thead.entry.js": [
		8213,
		"node_modules_cmx-web-components_core_dist_esm_cwc-thead_entry_js"
	],
	"./cwc-tooltip.entry.js": [
		57399,
		"node_modules_cmx-web-components_core_dist_esm_cwc-tooltip_entry_js"
	],
	"./cwc-topnav-menu-item.entry.js": [
		24866,
		"node_modules_cmx-web-components_core_dist_esm_cwc-topnav-menu-item_entry_js"
	],
	"./cwc-topnav-menu.entry.js": [
		82694,
		"common",
		"node_modules_cmx-web-components_core_dist_esm_cwc-topnav-menu_entry_js"
	],
	"./cwc-tr-expandable.entry.js": [
		66035,
		"node_modules_cmx-web-components_core_dist_esm_cwc-tr-expandable_entry_js"
	],
	"./cwc-tr.entry.js": [
		64244,
		"node_modules_cmx-web-components_core_dist_esm_cwc-tr_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 87128;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		45464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		68724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		30527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		44389,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 2068:
/*!********************************************************************************!*\
  !*** ./src/app/components/alert-confim/alert-confim.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC1jb25maW0uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 82445:
/*!**********************************************************************************!*\
  !*** ./src/app/components/alert-success/alert-success.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC1zdWNjZXNzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 91346:
/*!****************************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 64497:
/*!**********************************************************************************!*\
  !*** ./src/app/components/toast-message/toast-message.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2FzdC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 10225:
/*!**********************************************************!*\
  !*** ./src/app/pages/layout/layout.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".content-avatar-menu {\n  padding-top: 0.8rem;\n  padding-left: 0.8rem;\n  display: flex;\n}\n\n.text-name-menu {\n  margin-left: 0.5rem;\n  margin-top: 0.4rem;\n}\n\n.wrapper:hover {\n  background-color: #E8EBEF;\n}\n\n.flex.content-notification {\n  display: flex;\n}\n\n.badge-notification {\n  text-align: center;\n  line-height: 1rem;\n  background-color: red;\n  border-radius: 50%;\n  display: inline-block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUNEOztBQUNBO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtBQUVEOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7QUFJSjs7QUFGQTtFQUdJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFHSiIsImZpbGUiOiJsYXlvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtYXZhdGFyLW1lbnV7XHJcbiBwYWRkaW5nLXRvcDogMC44cmVtOyBcclxuIHBhZGRpbmctbGVmdDogMC44cmVtOyBcclxuIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnRleHQtbmFtZS1tZW51e1xyXG4gbWFyZ2luLWxlZnQ6IDAuNXJlbTsgXHJcbiBtYXJnaW4tdG9wOiAwLjRyZW07XHJcbn1cclxuLndyYXBwZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RUJFRjtcclxufVxyXG4uZmxleC5jb250ZW50LW5vdGlmaWNhdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJhZGdlLW5vdGlmaWNhdGlvbntcclxuICAgIC8vIHdpZHRoOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgIC8vIGhlaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZzogMC4ycmVtO1xyXG59Il19 */";

/***/ }),

/***/ 64435:
/*!***********************************************************************************!*\
  !*** ./src/app/utilities/error-messages/error-messages.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n    <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n  ";

/***/ }),

/***/ 87718:
/*!********************************************************************************!*\
  !*** ./src/app/components/alert-confim/alert-confim.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\r\n  alert-confim works!\r\n</p>\r\n";

/***/ }),

/***/ 39857:
/*!**********************************************************************************!*\
  !*** ./src/app/components/alert-success/alert-success.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<cwc-modal id='alert-modal-succes' [open] =\"alertShow\">\r\n    <div style='text-align: center'>\r\n        <cwc-icon name='accepted-ok' size='120px' color='bright-green'></cwc-icon>\r\n        <h4 class='modal--confirmation__message'>{{ title }}</h4>\r\n        <p>{{ message }}</p>\r\n    </div>\r\n    <footer slot='footer'>\r\n      <div style='text-align: end'>\r\n          <cwc-button variant='primary' (click)=\"go()\" routerLinkActive=\"router-link-active\" >{{ textButton}}</cwc-button>\r\n      </div>\r\n  </footer>\r\n  </cwc-modal>";

/***/ }),

/***/ 22574:
/*!****************************************************************!*\
  !*** ./src/app/components/menu/menu.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <cwc-sidenav-menu-item label=\"No Sub\" iconName=\"module-control-center\" href=\"#\"></cwc-sidenav-menu-item>\r\n<cwc-sidenav-menu-item label=\"Sub Menu\" iconName=\"module-order-product-catalogue\">\r\n    <cwc-sidenav-menu-item label=\"Link 1\" href=\"#\"></cwc-sidenav-menu-item>\r\n    <cwc-sidenav-menu-item label=\"Link 2\" href=\"#\"></cwc-sidenav-menu-item>\r\n</cwc-sidenav-menu-item>\r\n<cwc-sidenav-menu-item label=\"2 Level Sub Menu\" iconName=\"module-customer-information\">\r\n    <cwc-sidenav-menu-item label=\"Link\" href=\"#\"></cwc-sidenav-menu-item>\r\n    <cwc-sidenav-menu-item label=\"Sub Menu\">\r\n    <cwc-sidenav-menu-item label=\"Link 1\" href=\"#\"></cwc-sidenav-menu-item>\r\n    <cwc-sidenav-menu-item label=\"Link 2\" href=\"#\"></cwc-sidenav-menu-item>\r\n    </cwc-sidenav-menu-item>\r\n</cwc-sidenav-menu-item>\r\n<cwc-sidenav-menu-item label=\"Link Options\" iconName=\"module-invoices-payments\">\r\n    <cwc-sidenav-menu-item label=\"Outer Link\" href=\"http://www.cemex.com\" target=\"_blank\" ></cwc-sidenav-menu-item>\r\n    <cwc-sidenav-menu-item label=\"js function\" onclick=\"alert('Hi!')\"></cwc-sidenav-menu-item>\r\n</cwc-sidenav-menu-item> -->\r\n<h1>Roro</h1>\r\n";

/***/ }),

/***/ 47868:
/*!**********************************************************************************!*\
  !*** ./src/app/components/toast-message/toast-message.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<cwc-snackbar id='snackbar' [message]=\"message\"\r\ncta-message=\"dismiss\" auto-hide-duration=\"500\" [hidden]=\"true\"></cwc-snackbar>\r\n";

/***/ }),

/***/ 81697:
/*!**********************************************************!*\
  !*** ./src/app/pages/layout/layout.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<cwc-page design-version=\"v2\" variant=\"positive\">\r\n\r\n    <cwc-header design-version=\"v2\" slot=\"header\" show-cemex-logo=\"true\" show-Menu-Button=\"true\">\r\n        <!-- <cwc-overlay design-version=\"v2\" min-width=\"300px\" variant=\"popover\" height=\"286px\">\r\n            <div slot=\"target\" class=\"flex content-notification flex__align--center m-end-xs\" >\r\n                <cwc-button variant=\"link\" leading-icon=\"notification\" white size=\"medium\" class=\"m-end-xs\">Notificaciones</cwc-button>\r\n                <div class=\"display-inline-block p-all-xs border-radius--circle bg--true-red badge-notification\" style=\"width: 1rem; height: 1rem; text-align: center; line-height: 1rem;\">2</div>\r\n            </div>\r\n        </cwc-overlay> -->\r\n    </cwc-header>\r\n  \r\n\r\n    <cwc-sidenav slot=\"sidenav\" variant=\"positive\">\r\n        <!-- <cwc-entity-selector slot=\"legal-entity-selection\" variant=\"positive\">\r\n            <cwc-entity-selector-item entity-icon=\"user\" entity-name=\"Amanda Lopez\" entity-id=\"Hombre Camnión\" active>\r\n                <cwc-avatar size=\"small\" variant=\"negative\" name=\"Michael Wasserman\" class=\"m-h-xs\"></cwc-avatar>\r\n            </cwc-entity-selector-item>\r\n            <cwc-entity-selector-item entity-name=\"Grand Valley Construction\" entity-id=\"#1323555\"></cwc-entity-selector-item>\r\n        </cwc-entity-selector> -->\r\n    \r\n        <cwc-sidenav-menu id=\"menuNav\" slot=\"menu-items\" variant=\"positive\">\r\n            <div class=\"content-avatar-menu\" style=\"margin-left: 0.5; margin-right: 0.5rem; display: flex; align-items: center;\" [routerLink]=\"['/app/profile']\" routerLinkActive=\"router-link-active\" >\r\n                <cwc-avatar size=\"small\" variant=\"negative\" [name]=\"user.name\" class=\"m-h-xs\" style=\"width: 15%; padding: 1rem\"></cwc-avatar>\r\n                 <p style=\"margin-left: 0.5rem;\">{{ user.name }}</p>\r\n            </div>\r\n            \r\n            <!-- <div>\r\n                <ul *ngFor=\"let menudDriver of menu\">\r\n                    <li>\r\n                        <cwc-icon name=\"module-customer-information\" color=\"true-black\"></cwc-icon>\r\n                        {{menudDriver.title}}\r\n                    </li>\r\n                </ul>\r\n            </div> -->\r\n            <!-- <cwc-sidenav-menu-item *ngFor=\"let menudDriver of menu\" [label]=\"menudDriver.title\" [iconName]=\"menudDriver.icon\" [routerLink]=\"menudDriver.url\" routerLinkActive=\"router-link-active\" ></cwc-sidenav-menu-item> -->\r\n\r\n            <!-- <div *ngFor=\"let menudDriver of menu\">\r\n                <cwc-sidenav-menu-item *ngIf=\"menudDriver.show\"  [label]=\"menudDriver.title\" [routerLink]=\"menudDriver.url\" routerLinkActive=\"router-link-active\" ></cwc-sidenav-menu-item>\r\n            </div> -->\r\n        <cwc-sidenav-menu-item  label=\"Inicio\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/home']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item  label=\"Mis viajes\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/travels']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item  label=\"Buscar viaje\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/search-travel']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item  label=\"Notificaciones\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/notifications']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item  label=\"Lista de espera\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/waiting-list']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item *ngIf=\"notDriver\"  label=\"Vehículos\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/vehicles']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item *ngIf=\"notDriver\" label=\"Conductores\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/drivers']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n        <cwc-sidenav-menu-item  label=\"Llamar a centro de servicio\" [iconName]=\"'radio-static'\" [routerLink]=\"['/app/call-service']\" routerLinkActive=\"router-link-active\"  ></cwc-sidenav-menu-item>\r\n\r\n        </cwc-sidenav-menu>\r\n        <cwc-footer-menu slot=\"links\">\r\n            <cwc-footer-menu-item label=\"Legal\" href=\"https://www.cemex.com/legal\" target=\"_blank\"></cwc-footer-menu-item>\r\n            <cwc-footer-menu-item label=\"Privacy\" onclick=\"window.alert('Triggered by a javascript function')\"></cwc-footer-menu-item>\r\n            <cwc-footer-menu-item label=\"cemex.com\" href=\"https://www.cemex.com\" target=\"_blank\"></cwc-footer-menu-item>\r\n        </cwc-footer-menu>\r\n    \r\n        <div slot=\"copyright\">\r\n            <div class=\"button\" (click)=\"logout()\">\r\n                <cwc-button variant=\"link\">Cerrar Sesión</cwc-button>\r\n            </div>\r\n            <cwc-button *ngIf=\"showButtonDriver\" class=\"btn-login\" \r\n            design-version=\"v2\" \r\n            disabled=\"false\" \r\n            variant=\"primary-block\">Ser Conductor</cwc-button>\r\n            <br>\r\n            © 2017-2019 CEMEX\r\n            International<br /> Holding AG.\r\n            All rights reserved.\r\n        </div>\r\n    </cwc-sidenav>\r\n  \r\n  \r\n    <div slot=\"main\" style=\"padding: 32px; flex: 1 1 auto\">\r\n        <!-- <h1 style=\"margin-top: 0\">Page Demo</h1>\r\n        <ion-router-outlet style=\"flex: 1 1 auto;\"></ion-router-outlet> -->\r\n        <ng-content></ng-content>\r\n      </div>\r\n  </cwc-page>";

/***/ }),

/***/ 84377:
/*!***********************************************************************************!*\
  !*** ./src/app/utilities/error-messages/error-messages.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--=====================================\r\n ALERTA CON MENSAJES DESDE EL SERVIDOR\r\n======================================-->\r\n<div style=\"margin-top: 1rem; margin-bottom: 1rem;\" *ngIf=\"errors.length > 0\">\r\n  <cwc-alert *ngFor=\"let error of errors\" variant=\"error\" [message]=\"error\" keep-open></cwc-alert>\r\n</div>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map