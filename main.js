(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");





const routes = [{ path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");



class AppComponent {
    constructor() {
        this.title = 'user-monitor-dashboard';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _filter_form_filter_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-form/filter-form.component */ "./src/app/filter-form/filter-form.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tables_microsoft_document_table_microsoft_document_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tables/microsoft-document-table/microsoft-document-table.component */ "./src/app/tables/microsoft-document-table/microsoft-document-table.component.ts");
/* harmony import */ var _tables_google_apps_table_google_apps_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tables/google-apps-table/google-apps-table.component */ "./src/app/tables/google-apps-table/google-apps-table.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _dashboard_mini_cards_mini_cards_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./dashboard/mini-cards/mini-cards.component */ "./src/app/dashboard/mini-cards/mini-cards.component.ts");














































;
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            // MatCheckboxModule,
            // MatCheckboxModule,
            // MatButtonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__["MatPaginatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _filter_form_filter_form_component__WEBPACK_IMPORTED_MODULE_9__["FilterFormComponent"], _tables_microsoft_document_table_microsoft_document_table_component__WEBPACK_IMPORTED_MODULE_11__["MicrosoftDocumentTableComponent"],
        _tables_google_apps_table_google_apps_table_component__WEBPACK_IMPORTED_MODULE_12__["GoogleAppsTableComponent"],
        _dashboard_mini_cards_mini_cards_component__WEBPACK_IMPORTED_MODULE_43__["MiniCardsComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        // MatCheckboxModule,
        // MatCheckboxModule,
        // MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                    _filter_form_filter_form_component__WEBPACK_IMPORTED_MODULE_9__["FilterFormComponent"],
                    _tables_microsoft_document_table_microsoft_document_table_component__WEBPACK_IMPORTED_MODULE_11__["MicrosoftDocumentTableComponent"],
                    _tables_google_apps_table_google_apps_table_component__WEBPACK_IMPORTED_MODULE_12__["GoogleAppsTableComponent"],
                    _dashboard_mini_cards_mini_cards_component__WEBPACK_IMPORTED_MODULE_43__["MiniCardsComponent"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    // MatCheckboxModule,
                    // MatCheckboxModule,
                    // MatButtonModule,
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialogModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__["MatPaginatorModule"]
                ],
                providers: [
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");





const _c0 = ["*"];
class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 15, vars: 2, consts: [[1, "dashboard-card"], ["mat-icon-button", "", "aria-label", "Toggle menu", 1, "more-button", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "dashboard-card-content"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Expand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _mini_cards_mini_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mini-cards/mini-cards.component */ "./src/app/dashboard/mini-cards/mini-cards.component.ts");
/* harmony import */ var _filter_form_filter_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter-form/filter-form.component */ "./src/app/filter-form/filter-form.component.ts");
/* harmony import */ var _tables_google_apps_table_google_apps_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tables/google-apps-table/google-apps-table.component */ "./src/app/tables/google-apps-table/google-apps-table.component.ts");
/* harmony import */ var _tables_microsoft_document_table_microsoft_document_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tables/microsoft-document-table/microsoft-document-table.component */ "./src/app/tables/microsoft-document-table/microsoft-document-table.component.ts");









class DashboardComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
        this.cardLayout = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ matches }) => {
            if (matches) {
                return {
                    columns: 1,
                    miniCard: { cols: 1, rows: 1 },
                    table: { cols: 1, rows: 2 },
                    filter: { cols: 1, rows: 1 },
                };
            }
            return {
                columns: 4,
                miniCard: { cols: 1, rows: 1 },
                table: { cols: 2, rows: 2 },
                filter: { cols: 4, rows: 1 },
            };
        }));
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 12, vars: 0, consts: [[1, "dashboard"], [1, "container-fluid"], [1, "dashboard__form-wrapper"], [1, "row"], [1, "col-lg-6"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-mini-cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-filter-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-google-apps-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-microsoft-document-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_mini_cards_mini_cards_component__WEBPACK_IMPORTED_MODULE_3__["MiniCardsComponent"], _filter_form_filter_form_component__WEBPACK_IMPORTED_MODULE_4__["FilterFormComponent"], _tables_google_apps_table_google_apps_table_component__WEBPACK_IMPORTED_MODULE_5__["GoogleAppsTableComponent"], _tables_microsoft_document_table_microsoft_document_table_component__WEBPACK_IMPORTED_MODULE_6__["MicrosoftDocumentTableComponent"]], styles: [".dashboard[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 0.58;\n  letter-spacing: normal;\n  text-align: left;\n  margin-bottom: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9fZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQ1dBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFRGJFLG9CQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uL2ZvbnRzJztcbi5kYXNoYm9hcmR7XG4gIGgyIHtcbiAgICBAaW5jbHVkZSBoMigpO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xufVxufVxuIiwiXHJcbkBtaXhpbiBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbkBtaXhpbiBzaWRlYmFyTGlua3Mge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU2O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjMycHg7XHJcbn1cclxuXHJcbkBtaXhpbiBoMiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDAuNTg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5AbWl4aW4gY2FyZC1oMyB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIGNhcmQtbnVtYmVyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS4zMztcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuQG1peGluIHN1YlRpdGxlc3tcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMC41ODtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/mini-cards/mini-cards.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/mini-cards/mini-cards.component.ts ***!
  \**************************************************************/
/*! exports provided: MiniCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniCardsComponent", function() { return MiniCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MiniCardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MiniCardsComponent.ɵfac = function MiniCardsComponent_Factory(t) { return new (t || MiniCardsComponent)(); };
MiniCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MiniCardsComponent, selectors: [["app-mini-cards"]], decls: 44, vars: 0, consts: [[1, "mini-cards"], [1, "row"], [1, "col-md-6", "col-lg-3"], [1, "card"], [1, "card-body", "d-flex"], ["src", "../../../assets/images/min-card-1.png", "alt", ""], [1, "content-wrapper"], [1, "card", "card-green"], ["src", "../../../assets/images/min-card-2.png", "alt", ""], ["src", "../../../assets/images/min-card-3.png", "alt", ""]], template: function MiniCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "5,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "1800");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Summited label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Not Submitted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cancelled label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mini-cards[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.mini-cards[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mini-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  background-color: #ffffff;\n  height: 100%;\n  padding: 0 25px;\n}\n.mini-cards[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.mini-cards[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  width: 55px;\n  text-align: center;\n  margin-right: 15px;\n  margin-bottom: 0;\n}\n.mini-cards[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mini-cards[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 1.33;\n  letter-spacing: normal;\n  margin: 0;\n  margin: 0;\n}\n.mini-cards[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: normal;\n  line-height: 1.53;\n  letter-spacing: normal;\n  margin: 0;\n}\n.mini-cards[_ngcontent-%COMP%]   .card.card-orange[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4D7CFE;\n}\n.mini-cards[_ngcontent-%COMP%]   .card.card-orange[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #4D7CFE;\n}\n.mini-cards[_ngcontent-%COMP%]   .card-content-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL21pbmktY2FyZHMvbWluaS1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNyYy9fZm9udHMuc2NzcyIsInNyYy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQSxvQkFBQTtBQURBO0FBR0U7RUFDSSxtQkFBQTtBQUROO0FBSUU7RUFDSSxtQkFBQTtFQUVBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFITjtBQUtNO0VBQ0ksbUJBQUE7QUFIVjtBQUtVO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhkO0FBS2M7RUFDSSxXQUFBO0FBSGxCO0FBT1U7RUNEUixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VEQVksU0FBQTtFQUVBLFNBQUE7QUFIZDtBQU1VO0VDZlIsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFRGVZLFNBQUE7QUFGZDtBQWlCVTtFQUNJLGNFbERKO0FGbUNWO0FBa0JVO0VBQ0ksY0V0REo7QUZzQ1Y7QUFvQk07RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFsQlYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvbWluaS1jYXJkcy9taW5pLWNhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vZm9udHMnO1xyXG4ubWluaS1jYXJkcyB7XHJcbnBhZGRpbmctYm90dG9tOiAycmVtIDtcclxuXHJcbiAgLmNvbC1sZy0zIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMCAyNXB4O1xyXG5cclxuICAgICAgJi1ib2R5IHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgZmlndXJlIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBAaW5jbHVkZSBjYXJkLW51bWJlcigpO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAvLyBjb2xvcjogJGR1c2stYmx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGNhcmQtaDMoKTtcclxuICAgICAgICAgICAgICAvLyBjb2xvcjogJGR1c2stYmx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY2FyZC1ncmVlbiB7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAvLyBjb2xvcjogJHRlYWwtYmx1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgLy8gY29sb3I6ICR0ZWFsLWJsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuY2FyZC1vcmFuZ2Uge1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiIsIlxyXG5AbWl4aW4gbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5AbWl4aW4gc2lkZWJhckxpbmtzIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41NjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4zMnB4O1xyXG59XHJcblxyXG5AbWl4aW4gaDIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjU4O1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuQG1peGluIGNhcmQtaDMge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjUzO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuXHJcbkBtaXhpbiBjYXJkLW51bWJlciB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuXHJcbkBtaXhpbiBzdWJUaXRsZXN7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDAuNTg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiIsIi8vIHdoaXRlXHJcblxyXG4kbGlnaHRCZyA6ICNGOUY5Rjk7XHJcbiRzaGFkb3cgOiAjRENFM0YxO1xyXG4kRGFya0JnIDogIzM4M0EzRjtcclxuJGJsYWNrLTEwOiAjMjEyMTIxO1xyXG4kcHJpbWFyeTogIzREN0NGRTtcclxuJHdoaXRlOiAjYmZiZWMyO1xyXG4kZHVzay1ibHVlIDojMmE0ZTk2O1xyXG4kdGVhbC1ibHVlOiAjMDc5N2E3O1xyXG4kZGFya0dyZXk6ICM2ODY4Njg7XHJcblxyXG5cclxuLy8gYnJlYWtwb2ludHNcclxuXHJcbiR4czogMDtcclxuJHNtOiA1NzZweDtcclxuJG1kOiA3NjhweDtcclxuJGxnOiA5OTJweDtcclxuJHhsOiAxMjAwcHg7XHJcbiR4eGw6IDE0MDBweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiniCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mini-cards',
                templateUrl: './mini-cards.component.html',
                styleUrls: ['./mini-cards.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/filter-form/filter-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/filter-form/filter-form.component.ts ***!
  \******************************************************/
/*! exports provided: FilterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterFormComponent", function() { return FilterFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");








/**
 * @title Table with filtering
 */
class FilterFormComponent {
    constructor(filterService) {
        this.filterService = filterService;
        this.filteredSubmitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    submitFilter() {
        this.filterService.FilterFunc(this.filterForm.value);
    }
    ngOnInit() {
        this.filterService.currentData.subscribe();
    }
}
FilterFormComponent.ɵfac = function FilterFormComponent_Factory(t) { return new (t || FilterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"])); };
FilterFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterFormComponent, selectors: [["app-filter-form"]], outputs: { filteredSubmitEvent: "filteredSubmitEvent" }, decls: 18, vars: 5, consts: [[1, "filter"], [1, "form", "date-block", "d-flex", 3, "formGroup"], [1, "date-block__list"], ["matInput", "", "placeholder", "From Date", "formControlName", "fromDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["fromDate", ""], ["matInput", "", "placeholder", "To Date", "formControlName", "toDate", 3, "matDatepicker"], ["toDate", ""], ["mat-button", "", "color", "primary", 1, "btn", "btn-primary", 3, "click"]], template: function FilterFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-datepicker", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-datepicker-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-datepicker", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterFormComponent_Template_button_click_16_listener() { return ctx.submitFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"]], styles: [".filter[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 15px;\n  background: #fff;\n  border-radius: 15px;\n}\n.filter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  align-items: center;\n  margin: 0 auto;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n}\n@media (max-width: 470px) {\n  .filter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (max-width: 768px) {\n  .filter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n}\n.filter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.filter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .date-block__list[_ngcontent-%COMP%] {\n  width: 40%;\n}\n@media (max-width: 768px) {\n  .filter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .date-block__list[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.filter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  width: 100%;\n}\n.filter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n}\n@media (max-width: 768px) {\n  .filter[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n  }\n}\n.filter[_ngcontent-%COMP%]   .mat-datepicker-toggle[_ngcontent-%COMP%] {\n  color: #4D7CFE !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyLWZvcm0vZmlsdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFFSTtFQUVGLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBREY7QUFHRTtFQVRFO0lBVUEsc0JBQUE7RUFBRjtBQUNGO0FBQ0U7RUFDRTtJQUNFLFlBQUE7RUFDSjtBQUNGO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7QUFDRTtFQUNFLFVBQUE7QUFDSjtBQUFJO0VBRkY7SUFHSSxXQUFBO0VBR0o7QUFDRjtBQURFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBR0o7QUFERTtFQUNFLGtCQUFBO0FBR0o7QUFESTtFQUhGO0lBSUksVUFBQTtJQUNBLGNBQUE7RUFJSjtBQUNGO0FBREE7RUFDRSx5QkFBQTtBQUdGIiwiZmlsZSI6InNyYy9hcHAvZmlsdGVyLWZvcm0vZmlsdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi9mb250cyc7XHJcbi5maWx0ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgLmZvcm17XHJcblxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBAbWVkaWEobWF4LXdpZHRoOiA0NzBweCl7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBAbWVkaWEobWF4LXdpZHRoOiAkbWQpe1xyXG4gICAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgICBtYXJnaW46ICBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICAucm93e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5kYXRlLWJsb2NrX19saXN0IHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkbWQpe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4gIC5tYXQtZm9ybS1maWVsZHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYnRuLXByaW1hcnl7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDogJG1kKXtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5tYXQtZGF0ZXBpY2tlci10b2dnbGV7XHJcbiAgY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-form',
                templateUrl: './filter-form.component.html',
                styleUrls: ['./filter-form.component.scss'],
            }]
    }], function () { return [{ type: _services_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"] }]; }, { filteredSubmitEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");













const _c0 = function (a0) { return { "dark-theme-mode": a0 }; };
const _c1 = function () { return [""]; };
class NavComponent {
    constructor(breakpointObserver, overlayContainer) {
        this.breakpointObserver = breakpointObserver;
        this.overlayContainer = overlayContainer;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
        this.themeColor = 'primary'; // ? notice this
        this.isDarkTheme = true; // ? notice this
    }
    storeThemeSelection() {
        localStorage.setItem('theme', this.isDarkTheme ? 'Dark' : 'light');
    }
    ngOnInit() {
        this.isDarkTheme = localStorage.getItem('theme') === 'Dark' ? true : false;
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayContainer"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 35, vars: 15, consts: [[1, "sidenav-container", "mat-app-background", 3, "ngClass"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], [1, "sidenav__header-wrapper"], [1, "logo"], ["aria-label", "Toggle sidenav", "mat-icon-button", "", 1, "close-icon", 3, "click"], [1, "fas", "fa-times"], ["mat-list-item", "", 1, "active", 3, "routerLink"], [1, "fas", "fa-tachometer-alt"], ["mat-list-item", "", "href", "#"], [1, "fas", "fa-desktop"], [1, "fas", "fa-folder-minus"], [1, "container-fluid"], [1, "btn-wrapper"], ["aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], [1, "fas", "fa-bars"], [3, "ngModel", "ngModelChange", "change"], [1, "content"], [1, "text-center"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Screen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " My Devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Subscribtions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-slide-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavComponent_Template_mat_slide_toggle_ngModelChange_28_listener($event) { return ctx.isDarkTheme = $event; })("change", function NavComponent_Template_mat_slide_toggle_change_28_listener() { return ctx.storeThemeSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Dark Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "footer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A9 Copyright 2021. All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.isDarkTheme));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isDarkTheme);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.sidenav-container[_ngcontent-%COMP%]   button[aria-label=\"Toggle sidenav\"][_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: #212121;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 200px;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav__header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  font-weight: 600;\n  text-align: center;\n  justify-content: center;\n  background: #fff !important;\n  height: 56px;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav__header-wrapper.mat-toolbar[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n@media (max-width: 992px) {\n  .sidenav-container[_ngcontent-%COMP%]   .sidenav__header-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav__header-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  color: #4D7CFE;\n}\n.sidenav-container[_ngcontent-%COMP%]   .sidenav__header-wrapper[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 992px) {\n  .sidenav-container[_ngcontent-%COMP%]   .sidenav__header-wrapper[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n.sidenav-container[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.sidenav-container[_ngcontent-%COMP%]   .mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.sidenav-container[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.56;\n  letter-spacing: 0.32px;\n  color: #686868;\n}\n.sidenav-container[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.sidenav-container[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #4D7CFE;\n  color: #fff;\n}\n.sidenav-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background: #F9F9F9;\n  min-height: calc(100vh - 110px);\n  padding: 4rem 1rem;\n}\n.sidenav-container[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%], .sidenav-container[_ngcontent-%COMP%]   .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 13px 10px #DCE3F1;\n}\n.sidenav-container[_ngcontent-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.56;\n  letter-spacing: 0.32px;\n}\n.sidenav-container[_ngcontent-%COMP%]   button[aria-label=\"Toggle sidenav\"][_ngcontent-%COMP%] {\n  color: #686868;\n}\n.top_nav[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #bfbec2;\n  border-bottom: 1px solid #D9DEE4;\n  margin-bottom: 10px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n}\n.top_nav__menu[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 480px) {\n  .top_nav__menu[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n.top_nav[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%] {\n  display: block;\n  right: -60px;\n  left: auto !important;\n  padding: 0;\n  text-align: center;\n}\n.top_nav[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.top_nav__user-wrapper[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n.top_nav__user-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.top_nav__user-wrapper[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.56;\n  letter-spacing: 0.32px;\n}\n.top_nav__lang[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 15px;\n}\n.top_nav__lang[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.top_nav__lang[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%] {\n  min-width: 5rem;\n  text-align: center;\n  right: -15px;\n}\n.dark-theme-mode[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  color: #4D7CFE !important;\n}\n.dark-theme-mode[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%], .dark-theme-mode[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%], .dark-theme-mode[_ngcontent-%COMP%]   .mat-toolbar-single-row[_ngcontent-%COMP%], .dark-theme-mode[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .dark-theme-mode[_ngcontent-%COMP%]   .sidenav__header-wrapper[_ngcontent-%COMP%] {\n  background: #212121 !important;\n}\n.dark-theme-mode[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background: #383A3F !important;\n}\n.dark-theme-mode[_ngcontent-%COMP%]   .mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #4D7CFE !important;\n}\nfooter[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNyYy9fdmFyaWFibGVzLnNjc3MiLCJzcmMvX2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxZQUFBO0FBRkY7QUFJRTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGNDSk87QURFWDtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBSEo7QUFLSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFITjtBQUlNO0VBQ0UsMkJBQUE7QUFGUjtBQUtNO0VBQ0U7SUFDRSxpQkFBQTtFQUhSO0FBQ0Y7QUFNTTtFQUNFLGNDNUJFO0FEd0JWO0FBT007RUFDRSxhQUFBO0FBTFI7QUFPUTtFQUhGO0lBSUkscUJBQUE7RUFKUjtBQUNGO0FBVUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFSSjtBQVdFO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQVRKO0FBYUk7RUV2REYsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFRnNESSxjQ3RESztBRDhDWDtBQVNLO0VBQ0csa0JBQUE7QUFQUjtBQVNNO0VBQ0UsbUJDL0RFO0VEZ0VGLFdBQUE7QUFQUjtBQVlFO0VBQ0UsbUJDMUVPO0VEMkVQLCtCQUFBO0VBQ0Esa0JBQUE7QUFWSjtBQWlCRTs7RUFFRSxnQkFBQTtFQUNKLCtCQUFBO0FBZkE7QUFrQkU7RUVwRkEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBRnFFRjtBQWdCRTtFQUNFLGNDdEZPO0FEd0VYO0FBaUJBO0VBQ0UsYUFBQTtFQUNBLG1CQzlGTTtFRCtGTixnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFkRjtBQWVFO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBYk47QUFlTTtFQU5KO0lBT1EsZ0JBQUE7RUFaUjtBQUNGO0FBZUU7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBYk47QUFlTTtFQUNJLGFBQUE7QUFiVjtBQWlCRTtFQUNJLGNBQUE7QUFmTjtBQWlCTTtFQUNJLFdBQUE7QUFmVjtBQWtCTTtFRWhJSixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FGaUhGO0FBaUJFO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQWZOO0FBaUJNO0VBQ0ksZ0JBQUE7QUFmVjtBQWtCTTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFoQlY7QUEwQkU7RUFDRSx5QkFBQTtBQXZCSjtBQTBCRTs7Ozs7RUFLRSw4QkFBQTtBQXhCSjtBQTJCRTtFQUNFLDhCQUFBO0FBekJKO0FBNkJJO0VBQ0Usb0NBQUE7QUEzQk47QUFrQ0E7RUFDRSxhQUFBO0FBL0JGO0FBaUNFO0VBQ0UsU0FBQTtFRTVMRixlQUFBO0VBQ0EsZ0JBQUE7QUY4SkYiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uL2ZvbnRzJztcblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJ1dHRvblthcmlhLWxhYmVsPVwiVG9nZ2xlIHNpZGVuYXZcIl0ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogJGJsYWNrLTEwO1xuICB9XG5cbiAgLnNpZGVuYXYge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDIwMHB4O1xuXG4gICAgJl9faGVhZGVyLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICYubWF0LXRvb2xiYXIge1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYShtYXgtd2lkdGg6JGxnKSB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmxvZ28ge1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgIC5jbG9zZS1pY29uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiRsZykge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJ0bi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC5tYXQtbmF2LWxpc3Qge1xuICAgIGEge1xuICAgICAgQGluY2x1ZGUgc2lkZWJhckxpbmtzKCk7XG4gICAgICBjb2xvcjogJGRhcmtHcmV5O1xuICAgICBzdmd7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIH1cbiAgICAgICYuYWN0aXZle1xuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICRsaWdodEJnO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XG4gICAgcGFkZGluZzogNHJlbSAxcmVtO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL0RvdWJsZS1yZWNzLXJvdGF0ZS5wbmcpO1xuICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiA0MCU7XG4gICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICB9XG5cbiAgLm1hdC10b29sYmFyLXJvdyxcbiAgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG5ib3gtc2hhZG93OiAwIDEzcHggMTBweCAkc2hhZG93O1xuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIHNpZGViYXJMaW5rcygpO1xuICB9XG5cbiAgYnV0dG9uW2FyaWEtbGFiZWw9XCJUb2dnbGUgc2lkZW5hdlwiXSB7XG4gICAgY29sb3I6ICRkYXJrR3JleTtcbiAgfVxufVxuLnRvcF9uYXYge1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDlERUU0O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAmX19tZW51IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICB9XG4gIH1cblxuICAuZHJvcGRvd24tbWVudS5zaG93IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcmlnaHQ6IC02MHB4O1xuICAgICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgYSB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cbiAgfVxuXG4gICZfX3VzZXItd3JhcHBlciB7XG4gICAgICBtYXJnaW46IDAgMjBweDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICAgIEBpbmNsdWRlIHNpZGViYXJMaW5rcygpO1xuICAgICAgfVxuICB9XG5cbiAgJl9fbGFuZyB7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gICAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICByaWdodDogLTE1cHg7XG4gICAgICB9XG5cbiAgfVxufVxuLy8gZGFyayB0aGVtZVxuLmRhcmstdGhlbWUtbW9kZSB7XG5cblxuXG4gIC5sb2dvIHtcbiAgICBjb2xvcjogJHByaW1hcnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaWRlbmF2LFxuICAubWF0LXRvb2xiYXItcm93LFxuICAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyxcbiAgLmNvbnRlbnQsXG4gIC5zaWRlbmF2X19oZWFkZXItd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogJGJsYWNrLTEwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogJERhcmtCZyAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQge1xuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cblxuLy8gZm9vdGVyXG5mb290ZXIge1xuICBwYWRkaW5nOiAxcmVtO1xuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBAaW5jbHVkZSBsYWJlbCgpO1xuICB9XG59XG5cblxuIiwiLy8gd2hpdGVcclxuXHJcbiRsaWdodEJnIDogI0Y5RjlGOTtcclxuJHNoYWRvdyA6ICNEQ0UzRjE7XHJcbiREYXJrQmcgOiAjMzgzQTNGO1xyXG4kYmxhY2stMTA6ICMyMTIxMjE7XHJcbiRwcmltYXJ5OiAjNEQ3Q0ZFO1xyXG4kd2hpdGU6ICNiZmJlYzI7XHJcbiRkdXNrLWJsdWUgOiMyYTRlOTY7XHJcbiR0ZWFsLWJsdWU6ICMwNzk3YTc7XHJcbiRkYXJrR3JleTogIzY4Njg2ODtcclxuXHJcblxyXG4vLyBicmVha3BvaW50c1xyXG5cclxuJHhzOiAwO1xyXG4kc206IDU3NnB4O1xyXG4kbWQ6IDc2OHB4O1xyXG4kbGc6IDk5MnB4O1xyXG4keGw6IDEyMDBweDtcclxuJHh4bDogMTQwMHB4O1xyXG4iLCJcclxuQG1peGluIGxhYmVsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuQG1peGluIHNpZGViYXJMaW5rcyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMzJweDtcclxufVxyXG5cclxuQG1peGluIGgyIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMC41ODtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbkBtaXhpbiBjYXJkLWgzIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMS41MztcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG5AbWl4aW4gY2FyZC1udW1iZXIge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG5AbWl4aW4gc3ViVGl0bGVze1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjU4O1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss'],
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayContainer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/filter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/filter.service.ts ***!
  \********************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class FilterService {
    constructor() {
        this.filteredDataArrSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentData = this.filteredDataArrSubject.asObservable();
    }
    FilterFunc(filtrArr) {
        this.filteredDataArrSubject.next(filtrArr);
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tables/google-apps-table/google-apps-table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tables/google-apps-table/google-apps-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: GoogleAppsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAppsTableComponent", function() { return GoogleAppsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/services/filter.service.ts");









function GoogleAppsTableComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoogleAppsTableComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.position, " ");
} }
function GoogleAppsTableComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoogleAppsTableComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.name, " ");
} }
function GoogleAppsTableComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoogleAppsTableComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.time, " ");
} }
function GoogleAppsTableComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoogleAppsTableComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r16.DOB, "dd/MM/yyyy"), " ");
} }
function GoogleAppsTableComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoogleAppsTableComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r17.Date, "dd/MM/yyyy"), " ");
} }
function GoogleAppsTableComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function GoogleAppsTableComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
const _c0 = function () { return [5, 10, 20]; };
const ELEMENT_DATA = [
    {
        position: 1,
        name: 'Hydrogen',
        time: 1.0079,
        DOB: new Date(2020, 11, 24),
        Date: new Date(2020, 15, 24),
    },
    {
        position: 2,
        name: 'Helium',
        time: 4.0026,
        DOB: new Date(2021, 18, 24),
        Date: new Date(2021, 11, 24),
    },
    {
        position: 3,
        name: 'Lithium',
        time: 6.941,
        DOB: new Date(2020, 6, 12),
        Date: new Date(2020, 12, 15),
    },
    {
        position: 4,
        name: 'Beryllium',
        time: 9.0122,
        DOB: new Date(2021, 7, 6),
        Date: new Date(2021, 10, 6),
    },
    {
        position: 5,
        name: 'Boron',
        time: 10.811,
        DOB: new Date(2020, 5, 9),
        Date: new Date(2020, 5, 9),
    },
    {
        position: 6,
        name: 'Carbon',
        time: 12.0107,
        DOB: new Date(2021, 7, 14),
        Date: new Date(2021, 7, 14),
    },
    {
        position: 7,
        name: 'Nitrogen',
        time: 14.0067,
        DOB: new Date(1998, 11, 18),
        Date: new Date(2019, 11, 18),
    },
    {
        position: 8,
        name: 'Oxygen',
        time: 15.9994,
        DOB: new Date(2021, 2, 24),
        Date: new Date(2021, 2, 24),
    },
    {
        position: 9,
        name: 'Fluorine',
        time: 18.9984,
        DOB: new Date(2019, 4, 29),
        Date: new Date(2019, 4, 29),
    },
    {
        position: 10,
        name: 'Neon',
        time: 20.1797,
        DOB: new Date(2021, 5, 30),
        Date: new Date(2021, 5, 30),
    },
];
/**
 * @title Table with filtering
 */
class GoogleAppsTableComponent {
    constructor(filterService) {
        this.filterService = filterService;
        this.displayedColumns = ['position', 'name', 'time', 'DOB', 'Date'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en');
        this.dataSource.filterPredicate = (data, filter) => {
            if (this.fromDate && this.toDate) {
                return data.Date >= this.fromDate && data.Date <= this.toDate;
            }
            return true;
        };
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    get fromDate() {
        return this.data.fromDate;
    }
    get toDate() {
        return this.data.toDate;
    }
    ngOnInit() {
        this.filterService.currentData.subscribe((data) => {
            this.data = data;
            console.log(this.data);
            this.applyFilter();
        });
    }
    applyFilter() {
        this.dataSource.filter = '' + Math.random();
    }
}
GoogleAppsTableComponent.ɵfac = function GoogleAppsTableComponent_Factory(t) { return new (t || GoogleAppsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"])); };
GoogleAppsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoogleAppsTableComponent, selectors: [["app-google-apps-table"]], viewQuery: function GoogleAppsTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 24, vars: 5, consts: [[1, "microsoft-document"], [1, "table-responsive"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["filteredTable", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "time"], ["matColumnDef", "DOB"], ["matColumnDef", "Date"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function GoogleAppsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Google apps Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GoogleAppsTableComponent_th_7_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GoogleAppsTableComponent_td_8_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GoogleAppsTableComponent_th_10_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GoogleAppsTableComponent_td_11_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GoogleAppsTableComponent_th_13_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GoogleAppsTableComponent_td_14_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GoogleAppsTableComponent_th_16_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GoogleAppsTableComponent_td_17_Template, 3, 4, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GoogleAppsTableComponent_th_19_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GoogleAppsTableComponent_td_20_Template, 3, 4, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GoogleAppsTableComponent_tr_21_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GoogleAppsTableComponent_tr_22_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-paginator", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".microsoft-document[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n}\n.microsoft-document[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.microsoft-document[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n.microsoft-document[_ngcontent-%COMP%]   .date-block[_ngcontent-%COMP%] {\n  display: flex;\n}\n.microsoft-document[_ngcontent-%COMP%]   .date-block__list[_ngcontent-%COMP%] {\n  flex-basis: 150px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL2dvb2dsZS1hcHBzLXRhYmxlL2dvb2dsZS1hcHBzLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBQTtBQUZGO0FBSUU7RUFDRSxXQUFBO0FBRko7QUFLRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7QUFKSjtBQU9FO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvdGFibGVzL2dvb2dsZS1hcHBzLXRhYmxlL2dvb2dsZS1hcHBzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vZm9udHMnO1xyXG5cclxuLm1pY3Jvc29mdC1kb2N1bWVudCB7XHJcbiAgcGFkZGluZzogM3JlbSAwO1xyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5kYXRlLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuZGF0ZS1ibG9ja19fbGlzdCB7XHJcbiAgICBmbGV4LWJhc2lzOiAxNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleAppsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-google-apps-table',
                templateUrl: './google-apps-table.component.html',
                styleUrls: ['./google-apps-table.component.scss']
            }]
    }], function () { return [{ type: _services_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/app/tables/microsoft-document-table/microsoft-document-table.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/tables/microsoft-document-table/microsoft-document-table.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MicrosoftDocumentTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicrosoftDocumentTableComponent", function() { return MicrosoftDocumentTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/services/filter.service.ts");









function MicrosoftDocumentTableComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MicrosoftDocumentTableComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.position, " ");
} }
function MicrosoftDocumentTableComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MicrosoftDocumentTableComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.name, " ");
} }
function MicrosoftDocumentTableComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MicrosoftDocumentTableComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.time, " ");
} }
function MicrosoftDocumentTableComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MicrosoftDocumentTableComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r16.DOB, "dd/MM/yyyy"), " ");
} }
function MicrosoftDocumentTableComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MicrosoftDocumentTableComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r17.Date, "dd/MM/yyyy"), " ");
} }
function MicrosoftDocumentTableComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function MicrosoftDocumentTableComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
const _c0 = function () { return [5, 10, 20]; };
const ELEMENT_DATA = [
    {
        position: 1,
        name: 'Hydrogen',
        time: 1.0079,
        DOB: new Date(2020, 11, 24),
        Date: new Date(2020, 15, 24),
    },
    {
        position: 2,
        name: 'Helium',
        time: 4.0026,
        DOB: new Date(2021, 18, 24),
        Date: new Date(2021, 11, 24),
    },
    {
        position: 3,
        name: 'Lithium',
        time: 6.941,
        DOB: new Date(2020, 6, 12),
        Date: new Date(2020, 12, 15),
    },
    {
        position: 4,
        name: 'Beryllium',
        time: 9.0122,
        DOB: new Date(2021, 7, 6),
        Date: new Date(2021, 10, 6),
    },
    {
        position: 5,
        name: 'Boron',
        time: 10.811,
        DOB: new Date(2020, 5, 9),
        Date: new Date(2020, 5, 9),
    },
    {
        position: 6,
        name: 'Carbon',
        time: 12.0107,
        DOB: new Date(2021, 7, 14),
        Date: new Date(2021, 7, 14),
    },
    {
        position: 7,
        name: 'Nitrogen',
        time: 14.0067,
        DOB: new Date(1998, 11, 18),
        Date: new Date(2019, 11, 18),
    },
    {
        position: 8,
        name: 'Oxygen',
        time: 15.9994,
        DOB: new Date(2021, 2, 24),
        Date: new Date(2021, 2, 24),
    },
    {
        position: 9,
        name: 'Fluorine',
        time: 18.9984,
        DOB: new Date(2019, 4, 29),
        Date: new Date(2019, 4, 29),
    },
    {
        position: 10,
        name: 'Neon',
        time: 20.1797,
        DOB: new Date(2021, 5, 30),
        Date: new Date(2021, 5, 30),
    },
];
class MicrosoftDocumentTableComponent {
    constructor(filterService) {
        this.filterService = filterService;
        this.displayedColumns = ['position', 'name', 'time', 'DOB', 'Date'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en');
        this.dataSource.filterPredicate = (data, filter) => {
            if (this.fromDate && this.toDate) {
                return data.Date >= this.fromDate && data.Date <= this.toDate;
            }
            return true;
        };
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    get fromDate() {
        return this.data.fromDate;
    }
    get toDate() {
        return this.data.toDate;
    }
    ngOnInit() {
        this.filterService.currentData.subscribe((data) => {
            this.data = data;
            console.log(this.data);
            this.applyFilter();
        });
    }
    applyFilter() {
        this.dataSource.filter = '' + Math.random();
    }
}
MicrosoftDocumentTableComponent.ɵfac = function MicrosoftDocumentTableComponent_Factory(t) { return new (t || MicrosoftDocumentTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"])); };
MicrosoftDocumentTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MicrosoftDocumentTableComponent, selectors: [["app-microsoft-document-table"]], viewQuery: function MicrosoftDocumentTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 24, vars: 5, consts: [[1, "microsoft-document"], [1, "table-responsive"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["filteredTable", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "time"], ["matColumnDef", "DOB"], ["matColumnDef", "Date"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function MicrosoftDocumentTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Microsoft Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MicrosoftDocumentTableComponent_th_7_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MicrosoftDocumentTableComponent_td_8_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MicrosoftDocumentTableComponent_th_10_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MicrosoftDocumentTableComponent_td_11_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MicrosoftDocumentTableComponent_th_13_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MicrosoftDocumentTableComponent_td_14_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MicrosoftDocumentTableComponent_th_16_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MicrosoftDocumentTableComponent_td_17_Template, 3, 4, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MicrosoftDocumentTableComponent_th_19_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MicrosoftDocumentTableComponent_td_20_Template, 3, 4, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MicrosoftDocumentTableComponent_tr_21_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MicrosoftDocumentTableComponent_tr_22_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-paginator", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".microsoft-document[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n}\n.microsoft-document[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 0.58;\n  letter-spacing: normal;\n  text-align: left;\n  margin-bottom: 1.5rem;\n}\n.microsoft-document[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.microsoft-document[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n.microsoft-document[_ngcontent-%COMP%]   .date-block[_ngcontent-%COMP%] {\n  display: flex;\n}\n.microsoft-document[_ngcontent-%COMP%]   .date-block__list[_ngcontent-%COMP%] {\n  flex-basis: 150px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL21pY3Jvc29mdC1kb2N1bWVudC10YWJsZS9taWNyb3NvZnQtZG9jdW1lbnQtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvX2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0FBRkY7QUFHRTtFQ2dDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RURsQ0UscUJBQUE7QUFHSjtBQURFO0VBQ0UsV0FBQTtBQUdKO0FBQUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQ0U7RUFDRSxhQUFBO0FBQ0o7QUFFRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy9taWNyb3NvZnQtZG9jdW1lbnQtdGFibGUvbWljcm9zb2Z0LWRvY3VtZW50LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vZm9udHMnO1xyXG5cclxuLm1pY3Jvc29mdC1kb2N1bWVudCB7XHJcbiAgcGFkZGluZzogM3JlbSAwO1xyXG4gIGgze1xyXG4gICAgQGluY2x1ZGUgc3ViVGl0bGVzKCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmRhdGUtYmxvY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5kYXRlLWJsb2NrX19saXN0IHtcclxuICAgIGZsZXgtYmFzaXM6IDE1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbn1cclxuIiwiXHJcbkBtaXhpbiBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbkBtaXhpbiBzaWRlYmFyTGlua3Mge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU2O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjMycHg7XHJcbn1cclxuXHJcbkBtaXhpbiBoMiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDAuNTg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5AbWl4aW4gY2FyZC1oMyB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuQG1peGluIGNhcmQtbnVtYmVyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS4zMztcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuQG1peGluIHN1YlRpdGxlc3tcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMC41ODtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MicrosoftDocumentTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-microsoft-document-table',
                templateUrl: './microsoft-document-table.component.html',
                styleUrls: ['./microsoft-document-table.component.scss'],
            }]
    }], function () { return [{ type: _services_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\user-monitor-dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map