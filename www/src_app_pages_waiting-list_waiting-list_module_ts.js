"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_waiting-list_waiting-list_module_ts"],{

/***/ 85191:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/waiting-list/components/request-waiting-list/request-waiting-list.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestWaitingListComponent": () => (/* binding */ RequestWaitingListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _request_waiting_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-waiting-list.component.html?ngResource */ 74306);
/* harmony import */ var _request_waiting_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-waiting-list.component.scss?ngResource */ 35488);
/* harmony import */ var src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/login.service */ 52876);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/request.service */ 79854);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







let RequestWaitingListComponent = class RequestWaitingListComponent {
    constructor(router, requestService, loginService) {
        this.router = router;
        this.requestService = requestService;
        this.loginService = loginService;
    }
    ngOnInit() { }
};
RequestWaitingListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_request_service__WEBPACK_IMPORTED_MODULE_3__.RequestService },
    { type: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
RequestWaitingListComponent.propDecorators = {
    requests: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
RequestWaitingListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-request-waiting-list',
        template: _request_waiting_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_request_waiting_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RequestWaitingListComponent);



/***/ }),

/***/ 98742:
/*!*******************************************************************!*\
  !*** ./src/app/pages/waiting-list/waiting-list-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingListPageRoutingModule": () => (/* binding */ WaitingListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _waiting_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting-list.page */ 87266);




const routes = [
    {
        path: '',
        component: _waiting_list_page__WEBPACK_IMPORTED_MODULE_0__.WaitingListPage
    },
    {
        path: 'new-request',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_waiting-list_new-request_new-request_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./new-request/new-request.module */ 13846)).then(m => m.NewRequestPageModule)
    }
];
let WaitingListPageRoutingModule = class WaitingListPageRoutingModule {
};
WaitingListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WaitingListPageRoutingModule);



/***/ }),

/***/ 91598:
/*!***********************************************************!*\
  !*** ./src/app/pages/waiting-list/waiting-list.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingListPageModule": () => (/* binding */ WaitingListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _waiting_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting-list-routing.module */ 98742);
/* harmony import */ var _waiting_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waiting-list.page */ 87266);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);
/* harmony import */ var _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cmx-web-components/angular */ 6145);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/layout.module */ 93077);
/* harmony import */ var _components_request_waiting_list_request_waiting_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/request-waiting-list/request-waiting-list.component */ 85191);











let WaitingListPageModule = class WaitingListPageModule {
};
WaitingListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _waiting_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.WaitingListPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _cmx_web_components_angular__WEBPACK_IMPORTED_MODULE_3__.CmxWebComponentsModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__.LayoutPageModule,
        ],
        declarations: [
            _waiting_list_page__WEBPACK_IMPORTED_MODULE_1__.WaitingListPage,
            _components_request_waiting_list_request_waiting_list_component__WEBPACK_IMPORTED_MODULE_5__.RequestWaitingListComponent
        ]
    })
], WaitingListPageModule);



/***/ }),

/***/ 87266:
/*!*********************************************************!*\
  !*** ./src/app/pages/waiting-list/waiting-list.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingListPage": () => (/* binding */ WaitingListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _waiting_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting-list.page.html?ngResource */ 93303);
/* harmony import */ var _waiting_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waiting-list.page.scss?ngResource */ 46775);
/* harmony import */ var src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/login.service */ 52876);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/request.service */ 79854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






let WaitingListPage = class WaitingListPage {
    constructor(requestService, loginService) {
        this.requestService = requestService;
        this.loginService = loginService;
        this.requestsList = [];
    }
    ngOnInit() {
        this.suscripcion = this.requestService.refresh$.subscribe(() => {
            this.getData();
        });
        this.getData();
    }
    getData() {
        if (this.loginService.profileUser.Roles === 'Conductor') {
            this.requestService.getRequestByIdUser(this.loginService.profileUser.Email).subscribe(data => {
                this.requestsList = data.data;
            });
        }
        else {
            this.requestService.getRequestByIdCompany(this.loginService.profileUser.CompanyId).subscribe(data => {
                this.requestsList = data.data;
            });
        }
    }
    doRefresh(event) {
        setTimeout(() => {
            this.requestsList = [];
            this.getData();
            event.target.complete();
        }, 2000);
    }
};
WaitingListPage.ctorParameters = () => [
    { type: _services_request_service__WEBPACK_IMPORTED_MODULE_3__.RequestService },
    { type: src_app_services_auth_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
WaitingListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-waiting-list',
        template: _waiting_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_waiting_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WaitingListPage);



/***/ }),

/***/ 79854:
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http/http.service */ 3755);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);






const BASE_URL_API = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.url;
let RequestService = class RequestService {
    constructor(http) {
        this.http = http;
        this.id = null;
        this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    get refresh$() {
        return this._refresh$;
    }
    createRequest(data) {
        return this.http.doPostFormData(`${BASE_URL_API}/api/waitingList/CreateRequestTravel`, data, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
            this._refresh$.next();
        }));
    }
    updateRequest(id, data) {
        return this.http.doPut(`${BASE_URL_API}/api/waitingList/${id}`, data, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
            this._refresh$.next();
        }));
    }
    getRequestDetail(id) {
        return this.http.doGet(`${BASE_URL_API}/api/waitingList/RequestById/${id}`, {});
    }
    getRequestByIdUser(correo) {
        return this.http.doGet(`${BASE_URL_API}/api/waitingList/GetRequestByIdUser/${correo}`, {});
    }
    getRequestByIdCompany(idCompany) {
        return this.http.doGet(`${BASE_URL_API}/api/waitingList/GetListWaitingByIdCompany/${idCompany}`, {});
    }
    getRequests() {
        return this.http.doGet(`${BASE_URL_API}/api/waitingList/`, {});
    }
};
RequestService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService }
];
RequestService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], RequestService);



/***/ }),

/***/ 35488:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/waiting-list/components/request-waiting-list/request-waiting-list.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "/***  styles btn asing trip  ***/\n.content-btn-assign-trip {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n.statusI {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/***  styles card info user  ***/\n.main-content-card {\n  padding: 0.5rem;\n}\n.header-card {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.5rem;\n}\n.avatar-info {\n  display: flex;\n  align-items: center;\n}\nspan.style-name {\n  font-weight: 700;\n}\n.content-status {\n  display: flex;\n  align-items: center;\n}\n.active {\n  background-color: #7ac943;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.attr-user {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-size: x-small;\n}\n.attr-detail {\n  font-size: medium;\n}\nhr.line {\n  margin-bottom: 1rem;\n}\nspan.number-phone {\n  padding-left: 8px;\n  padding-right: 10px;\n  font-size: small;\n}\n.center-cell {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.content-btn-edit {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.card-info {\n  padding-left: 0.8rem;\n  padding-bottom: 0.2rem;\n  padding-right: 1rem;\n}\n/***  styles card documents user  ***/\n.card-docs {\n  margin-top: 1.5rem;\n  padding: 1rem;\n}\n.title-docs {\n  font-size: 15px;\n  font-weight: 700;\n  margin-bottom: 0.8rem;\n}\n.content-docs {\n  display: flex;\n  justify-content: space-between;\n}\n.content-action-docs {\n  display: flex;\n  align-items: flex-end;\n}\n.text-archive {\n  font-size: small;\n  margin-left: 5px;\n}\n.item-archives {\n  display: flex;\n  vertical-align: middle;\n}\n/*** Estilos footer  ***/\n.footer-detal-request {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n}\n.btn-action {\n  margin-left: 1.5rem;\n}\nspan.text-btn {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3Qtd2FpdGluZy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKO0FBR0EsZ0NBQUE7QUFDQTtFQUNJLGVBQUE7QUFBSjtBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFBO0VBQ0ksZ0JBQUE7QUFHSjtBQURBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBSUo7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBS0o7QUFGQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFLSjtBQUZBO0VBQ0ksaUJBQUE7QUFLSjtBQUZBO0VBQ0ksbUJBQUE7QUFLSjtBQUhBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTUo7QUFKQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUFPSjtBQUxBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFRSjtBQUxBO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBUUo7QUFIQSxxQ0FBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FBTUo7QUFKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBT0o7QUFMQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQVFKO0FBTkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFTSjtBQU5BO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQVNKO0FBTkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFTSjtBQUxBLHdCQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVFKO0FBTkE7RUFDSSxtQkFBQTtBQVNKO0FBUEE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FBVUoiLCJmaWxlIjoicmVxdWVzdC13YWl0aW5nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqICBzdHlsZXMgYnRuIGFzaW5nIHRyaXAgICoqKi8gXHJcbi5jb250ZW50LWJ0bi1hc3NpZ24tdHJpcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5zdGF0dXNJe1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyoqKiAgc3R5bGVzIGNhcmQgaW5mbyB1c2VyICAqKiovIFxyXG4ubWFpbi1jb250ZW50LWNhcmQge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcbi5oZWFkZXItY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbn1cclxuLmF2YXRhci1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbnNwYW4uc3R5bGUtbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5jb250ZW50LXN0YXR1cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YWM5NDM7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmF0dHItdXNlciB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLmF0dHItZGV0YWlsIHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG5oci5saW5lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuc3Bhbi5udW1iZXItcGhvbmUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4uY2VudGVyLWNlbGwge1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcbi5jb250ZW50LWJ0bi1lZGl0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5jYXJkLWluZm8ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vKioqICBzdHlsZXMgY2FyZCBkb2N1bWVudHMgdXNlciAgKioqLyBcclxuLmNhcmQtZG9jcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi50aXRsZS1kb2NzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XHJcbn1cclxuLmNvbnRlbnQtZG9jcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jb250ZW50LWFjdGlvbi1kb2NzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi50ZXh0LWFyY2hpdmV7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDsgXHJcbn1cclxuXHJcbi5pdGVtLWFyY2hpdmVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcblxyXG4vKioqIEVzdGlsb3MgZm9vdGVyICAqKiovIFxyXG4uZm9vdGVyLWRldGFsLXJlcXVlc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuLmJ0bi1hY3Rpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxufVxyXG5zcGFuLnRleHQtYnRuIHtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG59Il19 */";

/***/ }),

/***/ 46775:
/*!**********************************************************************!*\
  !*** ./src/app/pages/waiting-list/waiting-list.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".navbar {\n  margin-top: 6.5rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  overflow: auto;\n}\n\n.icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 18px;\n}\n\n.search-text {\n  width: 100%;\n  height: 10px;\n  padding-bottom: 0;\n}\n\n.text-vehicles {\n  font-size: small;\n  font-weight: 700;\n}\n\n.float {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  text-align: center;\n  background-color: #05376E;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXRpbmctbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNIOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDRyx5QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoid2FpdGluZy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgbWFyZ2luLXRvcDogNi41cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXRleHR7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDEwcHg7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGV4dC12ZWhpY2xlc3tcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZmxvYXR7XHJcblx0cG9zaXRpb246Zml4ZWQ7XHJcblx0Ym90dG9tOjE1cHg7XHJcblx0cmlnaHQ6MTVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUzNzZFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweFxyXG59Il19 */";

/***/ }),

/***/ 74306:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/waiting-list/components/request-waiting-list/request-waiting-list.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<cwc-grid class=\"demo-grid\">\r\n  <cwc-cell colspan=\"6\" mobile-colspan=\"12\" *ngFor=\"let request of requests\">\r\n    <cwc-card class=\"card-info\" design-version=\"v1\">\r\n      <div class=\"main-content-card\">\r\n        <div class=\"header-card\">\r\n          <div class=\"avatar-info\">\r\n            <span class=\"style-name\">Viaje {{request.codeRequest}}</span>\r\n          </div>\r\n            <cwc-status-indicator size=\"small\" class=\"statusI\" variant='success'>\r\n              <div class=\"statusI\">{{request.statusRequeststring}}</div>\r\n            </cwc-status-indicator>\r\n        </div>\r\n\r\n        <hr color=\"#D0D0D0\"/>\r\n\r\n        <cwc-grid class=\"demo-grid\" style=\"padding-top: 0.5rem;\">\r\n          <cwc-cell colspan=\"12\" mobile-colspan=\"12\">   \r\n            <div class=\"attr-user\">Origen</div>\r\n            <span class=\"attr-detail\">{{request.origen}}</span>\r\n          </cwc-cell>\r\n        </cwc-grid>\r\n\r\n        <cwc-grid class=\"demo-grid center-cell\">\r\n          <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n            <div class=\"attr-user\">Destino</div>\r\n            <span class=\"attr-detail\">{{request.destino}}</span>\r\n          </cwc-cell>\r\n        </cwc-grid>\r\n\r\n        <cwc-grid class=\"demo-grid center-cell\">\r\n          <cwc-cell mobile-colspan=\"6\">\r\n            <div class=\"attr-user\">Fecha y hora</div>\r\n            <span class=\"attr-detail\">{{request.dateTravels}} {{request.timerStar}}</span>\r\n          </cwc-cell>\r\n          <cwc-cell mobile-colspan=\"6\">\r\n            <div class=\"attr-user\">Numero de Placa</div>\r\n            <span class=\"attr-detail\">{{request.vehicleLisence}}</span>\r\n          </cwc-cell>\r\n        </cwc-grid>\r\n\r\n        <cwc-grid class=\"demo-grid center-cell\">\r\n          <cwc-cell colspan=\"12\" mobile-colspan=\"12\">\r\n            <div class=\"attr-user\">Vehículo</div>\r\n            <span class=\"attr-detail\">{{request.vehicleName}}</span>\r\n          </cwc-cell>\r\n        </cwc-grid>\r\n      </div>\r\n    </cwc-card>\r\n  </cwc-cell>\r\n</cwc-grid>";

/***/ }),

/***/ 93303:
/*!**********************************************************************!*\
  !*** ./src/app/pages/waiting-list/waiting-list.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<app-layout class=\"card-size\">\r\n  <cwc-grid class=\"demo-grid\" style=\"padding-top: 1rem;\">\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"9\">\r\n      <div>Semana 22 de Agosto, 2020</div>\r\n    </cwc-cell>\r\n    <cwc-cell colspan=\"6\" mobile-colspan=\"3\">\r\n      <div style=\"text-align: end;\">{{requestsList.length}} Viajes</div>\r\n    </cwc-cell>\r\n  </cwc-grid>\r\n  <ion-content>   \r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <div class=\"navbar\" style=\"padding-top: 0.5rem;\">\r\n      <app-request-waiting-list [requests]=\"requestsList\"></app-request-waiting-list>\r\n    </div>\r\n  </ion-content>\r\n  <cwc-button class=\"float\" routerLink=\"new-request\" design-version=\"v2\" size=\"large\" variant=\"ghost\" ratio=\"square\" trailing-icon=\"plus\"></cwc-button>\r\n</app-layout>\r\n ";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_waiting-list_waiting-list_module_ts.js.map