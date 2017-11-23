webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  about works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n    /* position: absolute; */\r\n    z-index: 2;\r\n}\r\n.navbar-nav {\r\n    margin-left: 5%;\r\n    margin-top: 25px;\r\n}\r\n.navbar-toggle .icon-bar {\r\n    background-color: black;\r\n}\r\na {\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    font-size: 14pt;\r\n    padding-right: 30px;\r\n}\r\n.logo {\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/images/logo.png") + ");\r\n    width: 255px;\r\n    height: 56px;\r\n    margin-top: 5px;\r\n}\r\n.about-company {\r\n    font-size: 14px;\r\n    font-family: \"Myriad Pro\";\r\n    color: rgb(60, 60, 67);\r\n    letter-spacing: 4px;\r\n    line-height: 1.714;\r\n    width: 248px;\r\n    margin-top: 30px;\r\n    text-transform: uppercase;\r\n}\r\n@media (min-width: 768px) {\r\n    .navbar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {\r\n        margin-left: 50px;\r\n    }\r\n    .navbar-right {\r\n        margin-right: 30px;\r\n    }\r\n}\r\n@media (max-width: 1340px) {\r\n    .navbar-brand {\r\n        margin-top: 35px;\r\n        position: absolute;\r\n    }\r\n    .navbar-nav {\r\n        margin-left: 3%;\r\n    }\r\n}\r\n@media (max-width: 1340px) {\r\n    .navbar-right {\r\n        margin-right: 0px;\r\n    }\r\n}\r\n@media (max-width: 970px) {\r\n    a{\r\n        font-size: 12pt;\r\n    }\r\n}\r\n@media (max-width: 860px) {\r\n    .navbar-collapse {\r\n        padding-right: 0px;\r\n    }\r\n    a{\r\n        font-size: 10pt;\r\n    }\r\n }\r\n @media (max-width: 767px) {\r\n    .navbar-brand {\r\n        margin-top: 0px;\r\n    }\r\n    .navbar-nav {\r\n        text-align: center;\r\n    }  \r\n}\r\n@media (max-width: 767px) {\r\n    .about-company {\r\n        display: none;\r\n    }\r\n}\r\n@media (max-width: 575px) {\r\n   .navbar-collapse {\r\n        margin-top: 75px;\r\n   }\r\n}\r\n\r\n/* @media (max-width: 1180px) {\r\n    .navbar-nav {\r\n        margin-left: 2%;\r\n    }\r\n} */\r\n\r\n/* .content-wrapper {\r\n    position: absolute;\r\n    overflow: hidden;\r\n    margin-left: 20%;\r\n    margin-top: 100px;\r\n\r\n}\r\n.navbar {\r\n    \r\n}\r\n.navbar-nav {\r\n    width: 100%;\r\n    text-align: center;\r\n} \r\nli {\r\n    z-index: 2;\r\n}\r\n.telephone {\r\n    margin-top: 10px;\r\n    left: 145px;\r\n}\r\n.glyphicon-phone {\r\n    font-size: 18px;\r\n    padding-right: 3px;\r\n}\r\n.telephone .phone {\r\n    font-size: 24px;\r\n    font-family: \"Myriad Pro\";\r\n    color: rgb(52, 173, 103);\r\n    line-height: 1.5;\r\n}\r\np {\r\n        font-size: 14px;\r\n        font-family: \"Myriad Pro\";\r\n        color: rgb(52, 173, 103);\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n        line-height: 1.714;\r\n        position: absolute;\r\n        padding-left: 25px;    \r\n}\r\na {\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    font-size: 14pt;\r\n    padding-right: 30px;\r\n}\r\n.navbar .navbar-header,\r\n.navbar-collapse {\r\n    float:none;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">       \r\n            <h1>Клініка</h1>\r\n            <div class=\"logo\"></div>\r\n            <div class=\"about-company\">\r\n                <span>\r\n                    Проведення сучасної, персоніфікованої хіміотерапії пацієнтам онкологічного профілю\r\n                </span>\r\n            </div>\r\n        </a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ol class=\"nav navbar-nav\">\r\n            <li><a [routerLink]=\"['/about']\">About Us</a></li>\r\n            <li><a [routerLink]=\"['/disease']\">List of Disease</a></li>\r\n            <li><a [routerLink]=\"['/treatment']\">Treatment Methods</a></li>\r\n            <li><a [routerLink]=\"['/price']\">Services & Pricing</a></li>\r\n            <li><a [routerLink]=\"['/contacts']\">Contacts</a></li>\r\n        </ol>\r\n        <ol class=\"nav navbar-nav navbar-right\">\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-phone\"></span> 8 800 645 68 95</a></li>\r\n            \r\n        </ol>\r\n        </div>\r\n    </div>\r\n    </nav>\r\n    <div>  \r\n        <router-outlet></router-outlet>  \r\n    </div>\r\n\r\n<!-- <div class=\"content-wrapper\">\r\n    <nav class=\"navbar\">\r\n        <div class=\"container text-center\">\r\n            <div id=\"navbar\" class=\"navbar-collapse\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li><a [routerLink]=\"['/about']\">About Us</a></li>\r\n                    <li><a [routerLink]=\"['/disease']\">List of Disease</a></li>\r\n                    <li><a [routerLink]=\"['/treatment']\">Treatment Methods</a></li>\r\n                    <li><a [routerLink]=\"['/price']\">Services & Pricing</a></li>\r\n                    <li><a [routerLink]=\"['/contacts']\">Contacts</a></li>\r\n                    <li class=\"telephone\">\r\n                      <span class=\"glyphicon glyphicon-phone\"></span>\r\n                      <span class=\"phone\">8 800 645 68 95</span>\r\n                      <p>Order a phone call</p>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    </div>\r\n    <div>  \r\n        <router-outlet></router-outlet>  \r\n    </div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        // changeStyle() {
        //    const title : HTMLElement = document.getElementsByClassName('title');
        //     title.style.paddingTop = '0';
        // }
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__disease_disease_component__ = __webpack_require__("../../../../../src/app/disease/disease.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__price_price_component__ = __webpack_require__("../../../../../src/app/price/price.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__treatment_treatment_component__ = __webpack_require__("../../../../../src/app/treatment/treatment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngui_map__ = __webpack_require__("../../../../@ngui/map/dist/@ngui/map.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__["a" /* ContactsComponent */] },
    { path: 'disease', component: __WEBPACK_IMPORTED_MODULE_6__disease_disease_component__["a" /* DiseaseComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */] },
    { path: 'price', component: __WEBPACK_IMPORTED_MODULE_8__price_price_component__["a" /* PriceComponent */] },
    { path: 'treatment', component: __WEBPACK_IMPORTED_MODULE_9__treatment_treatment_component__["a" /* TreatmentComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__disease_disease_component__["a" /* DiseaseComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_8__price_price_component__["a" /* PriceComponent */],
                __WEBPACK_IMPORTED_MODULE_9__treatment_treatment_component__["a" /* TreatmentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_10__ngui_map__["a" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBe4CNxUqh9TB93RLihRkJrqeLAzIl0ysw' })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\nngui-map {\r\n    height: 82vh;\r\n    opacity: 0.7;\r\n}\r\n.contacts-wrapper {\r\n    margin-top: 5%;\r\n    margin-left: 5%;\r\n}\r\n.contacts {\r\n    /* text-align: center; */\r\n}\r\n.contact-info{\r\n    font-size: 22px;\r\n    font-family: \"SFUIDisplay\";\r\n    color: rgb(54, 167, 103);\r\n    line-height: 1.364;     \r\n}\r\n.contacts h1 {\r\n    font-size: 60px;\r\n    font-family: \"SFUIDisplay\";\r\n    color: rgb(60, 60, 67);\r\n    line-height: 1.2;    \r\n}\r\n.phone-contacts{\r\n    font-size: 18px;\r\n    font-family: \"SFUIDisplay\";\r\n    color: rgb(184, 184, 184);\r\n    line-height: 1.25;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}\r\n.phone-contacts .number {\r\n    font-weight: bold;\r\n    color: black;\r\n}\r\n.email {\r\n    font-family: \"SFUIDisplay\";\r\n    color: rgb(54, 167, 103);\r\n    border-bottom: 2px dashed rgb(54, 167, 103);\r\n    width: 170px;\r\n}\r\n.email-contacts {\r\n    font-size: 18px;\r\n    font-family: \"SFUIDisplay\";\r\n    color: rgb(184, 184, 184);\r\n    line-height: 1.25;\r\n    padding-bottom: 30px;\r\n}\r\n.address-contacts {\r\n    font-size: 18px;\r\n    font-family: \"SFUIDisplay\";\r\n    color: rgb(184, 184, 184);\r\n    line-height: 1.25; \r\n    padding-bottom: 30px;\r\n}\r\n.address-contacts .address {\r\n    font-weight: bold;\r\n    color: black;\r\n}\r\n.how-get-there-contacts {\r\n    font-family: \"SFUIDisplay\";\r\n    color: rgb(54, 167, 103);\r\n    font-size: 18px;\r\n}\r\n.how-get-there-contacts p {\r\n    width: 125px;    \r\n    border-bottom: 2px dashed rgb(54, 167, 103);\r\n}\r\n.contacts-footer{\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    font-size: 20px;\r\n    position: absolute;\r\n    left: 0;\r\n    padding: 30px 0px;\r\n    /* bottom: 25px; */\r\n    /* height: 20px;     */\r\n    width: 100%;\r\n}\r\n.languages {\r\n    padding-right: 100px;\r\n}\r\n.languages a{\r\n    float: right;\r\n    padding-left: 25px;\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    font-size: 20px;\r\n}\r\n@media (max-width: 1300px) {\r\n    .contacts-wrapper[_ngcontent-c1] {\r\n        margin-top: 20%;\r\n        margin-left: 8%;\r\n    }\r\n    ngui-map[_ngcontent-c1] {\r\n        height: 100vh;\r\n        opacity: 0.7;\r\n        margin-top: 40px;\r\n    }\r\n}\r\n@media (max-width: 1200px) {\r\n    .contacts-wrapper {\r\n        margin-top: 20%;\r\n        margin-left: 5%;\r\n    }\r\n    ngui-map[_ngcontent-c1] {\r\n        height: 100vh;\r\n        opacity: 0.7;\r\n        margin-top: 40px;\r\n    }\r\n}\r\n@media (max-width: 767px) {\r\n    .contacts-wrapper[_ngcontent-c1] {\r\n        margin-top: 20%;\r\n        margin-left: 0%;\r\n    }\r\n    .contacts {\r\n        margin-left: 10%;\r\n    }\r\n    ngui-map[_ngcontent-c1] {\r\n        height: 100vh;\r\n        opacity: 0.7;\r\n        margin-top: 40px;\r\n    }\r\n    .contacts-footer{\r\n        /* font-size: 15px; */\r\n    }\r\n    .languages {\r\n        padding-right: 50px;\r\n    }\r\n}\r\n@media (max-width: 475px) {\r\n    .contacts-footer{\r\n        /* font-size: 15px; */\r\n    }\r\n    .languages {\r\n        padding-right: 30px;\r\n    }\r\n}\r\n@media (max-width: 436px) {\r\n    .contacts-footer{\r\n        font-size: 15px;\r\n    }\r\n    .languages a{\r\n        font-size: 15px;\r\n    }\r\n}\r\n@media (max-width: 390px) {\r\n    .contacts-footer{\r\n        font-size: 15px;\r\n    }\r\n    .languages {\r\n        padding-right: 10px;\r\n    }\r\n    .languages a{\r\n        font-size: 15px;\r\n    }\r\n}\r\n@media (max-width: 350px) {\r\n\r\n    .languages {\r\n        display: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts-wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n      <div class=\"contacts col-lg-offset-5\">\r\n        <h1>Contacts</h1>\r\n        <p class=\"contact-info\">Call us or write us and we answer</p>\r\n        <p class=\"contact-info\">all your questions </p>\r\n        <div class=\"phone-contacts\">\r\n          <p>Phone:</p>\r\n          <p class=\"number\">8 800 645 68 95</p>\r\n          <p>Monday - Saturday: From 8 AM to 7 PM</p>\r\n        </div>\r\n        <div class=\"email-contacts\">\r\n          <p>E-mail:</p>\r\n          <p class=\"email\">clinic-target@info.com</p>\r\n        </div>\r\n        <div class=\"address-contacts\">\r\n          <p>Address:</p>\r\n          <p class=\"address\">Alexandrova str. 18,</p>\r\n          <p class=\"address\">Kyiv, Ukraine</p>\r\n        </div>\r\n        <div class=\"how-get-there-contacts\">\r\n          <p>How to get there</p>\r\n        </div>\r\n      </div>\r\n    </div>  \r\n    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\r\n      <ngui-map center=\"Kyiv, Ukraine\"\r\n        [zoomControlOptions]=\"{position: 'TOP_CENTER'}\"\r\n        [fullscreenControl]=\"true\"\r\n        [fullscreenControlOptions]=\"{position: 'TOP_CENTER'}\"\r\n        (click)=\"log($event,'s')\"\r\n        [scrollwheel]=\"false\">\r\n        <marker \r\n          [geoFallbackPosition]=\"[50.452303, 30.538924]\"\r\n          (dragstart)=\"log($event, 'dragstart')\"\r\n          (dragend)=\"log($event, 'dragend')\"\r\n          draggable=\"true\"></marker>\r\n      </ngui-map>\r\n    </div>\r\n  </div>\r\n  <div class=\"contacts-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-5 col-lg-offset-1 col-md-6 col-sm-6 col-xs-6\">\r\n        © Clinic Target 2017\r\n      </div>\r\n\r\n      <div class=\"col-lg-4  col-lg-offset-2 col-md-6 col-sm-6 col-xs-6 languages\">    \r\n        <a>Rus</a>\r\n        <a>Eng</a>\r\n        <a>Ukr</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent.prototype.log = function (event, str) {
        if (event instanceof MouseEvent) {
            return false;
        }
        console.log('event .... >', event, str);
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/disease/disease.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".disease-wrapper {\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/images/bg_doctor.png") + ");\r\n    padding: 200px 0px 0px 300px;\r\n    margin-top: -110px;\r\n}\r\n.row{\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n.title {\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    font-size: 60px;\r\n    padding-left: 15%;\r\n}\r\n.title p {\r\n    color: #36a767;\r\n    font-family: 'Roboto';\r\n    font-size: 22px;\r\n}\r\n.man_disease {\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/images/man_disease.png") + ");\r\n    background-repeat: no-repeat;\r\n    height: 580px;\r\n}\r\n.diseases {\r\n    padding-top: 90px;\r\n}\r\n.diseases ol {\r\n    float: left;\r\n    padding: 0px 100px 15px 0px;\r\n    list-style-type: circle;\r\n}\r\n.diseases ol li {\r\n    font-size: 21px;\r\n    font-weight: bold;\r\n    padding: 0px 100px 15px 0px;\r\n}\r\n.diseases ol li:before {\r\n    padding-right: 0.5em;\r\n}\r\n.disease-footer {\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 80px;\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    font-size: 20px;\r\n    margin-top: 30px;\r\n}\r\n.languages {\r\n    padding-right: 100px;\r\n}\r\n.languages a{\r\n    float: right;\r\n    padding-left: 25px;\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    font-size: 20px;\r\n}\r\n@media (max-width: 1600px) {\r\n    .disease-wrapper {\r\n        padding: 100px 0px 0px 200px;\r\n    }\r\n}\r\n@media (max-width: 1620px) {\r\n    .diseases[_ngcontent-c1] ol[_ngcontent-c1] {\r\n        padding: 0px 70px 15px 0px\r\n    }\r\n}\r\n@media (max-width: 1500px) {\r\n    .diseases {\r\n        padding-top: 90px;\r\n    }\r\n    .diseases ol {\r\n        float: left;\r\n        padding: 0px 100px 15px 0px;\r\n        list-style-type: circle;\r\n    }\r\n    .diseases ol li {\r\n        font-size: 21px;\r\n        font-weight: bold;\r\n        padding: 0px 50px 15px 0px;\r\n    }\r\n}\r\n@media (max-width: 1365px) {\r\n    .diseases {\r\n        padding-top: 90px;\r\n    }\r\n    .diseases ol {\r\n        float: left;\r\n        padding: 0px 100px 15px 0px;\r\n        list-style-type: circle;\r\n    }\r\n    .diseases ol li {\r\n        font-size: 21px;\r\n        font-weight: bold;\r\n        padding: 0px 0px 15px 0px;\r\n    }\r\n}\r\n@media (max-width: 1270px) {\r\n   .disease-wrapper {\r\n        padding: 150px 0px 0px 125px;    \r\n   }\r\n   .title {\r\n        padding-left: 30%;\r\n    }\r\n    .disease {\r\n        padding-top: 40px;\r\n        margin-left: 30%;\r\n    }\r\n    .disease ol {\r\n        padding: 0px 30px 8px 10px;\r\n    }\r\n}\r\n@media (max-width: 1200px) {\r\n    .disease-wrapper {\r\n        padding: 200px 0px 0px 0px;\r\n    }\r\n    .diseases ol {\r\n        float: left;\r\n        padding: 0px 95px 15px 0px;\r\n        list-style-type: circle;\r\n    }\r\n    .diseases ol li {\r\n        font-size: 21px;\r\n        font-weight: bold;\r\n        padding: 0px 50px 15px 0px;\r\n    }\r\n }\r\n@media (max-width: 1175px) {\r\n    .disease-wrapper {\r\n        padding: 101px 0px 0px 25px;\r\n    }\r\n    .diseases ol {\r\n        padding: 0px 0px 0px 25px;\r\n    }\r\n    .diseases ol li {\r\n        font-size: 21px;\r\n        font-weight: bold;\r\n        padding: 0px 50px 15px 0px;\r\n    }\r\n }\r\n @media (max-width: 1030px) {\r\n    .disease-wrapper {\r\n        padding: 101px 0px 0px 0px;\r\n    }\r\n    .title {\r\n        padding-left: 35%;\r\n    }\r\n    .diseases ol li {\r\n        padding: 0px 20px 10px 0px;\r\n    }\r\n }\r\n @media (max-width: 992px) {\r\n    .disease-wrapper {\r\n        padding: 101px 0px 0px 0px;\r\n    }\r\n    .title {\r\n        padding-left: 43%;\r\n        padding-top: 1%;\r\n    }\r\n    .diseases {\r\n        padding-top: 20px;\r\n        padding-left: 150px;\r\n    \r\n    }\r\n }\r\n @media (max-width: 860px) {\r\n    .disease-wrapper {\r\n        padding: 58px 0px 0px 20px;\r\n    }\r\n \r\n }\r\n @media (max-width: 767px) {\r\n     .title {\r\n        padding-left: 0;\r\n        padding-top: 40%;\r\n     }\r\n    .man_disease {\r\n        margin-left: 68%;\r\n        margin-top: -20%;\r\n    }\r\n    .diseases {\r\n        padding-left: 0px;\r\n        margin-top: -63%;\r\n    }\r\n    .diseases ol {\r\n        padding: 0px 0px 0px 56px;\r\n    }\r\n }\r\n@media (max-width: 767px) {\r\n    .title {\r\n        padding-top: 20%;\r\n    }\r\n}\r\n@media (max-width: 705px) {\r\n    .man_disease[_ngcontent-c1] {\r\n        margin-left: 60%;\r\n        margin-top: -30%;\r\n        opacity: 0.2;\r\n    }\r\n}\r\n@media (max-width: 650px) {\r\n    .man_disease[_ngcontent-c1] {\r\n        margin-left: 60%;\r\n        margin-top: -40%;\r\n        opacity: 0.2;\r\n    }\r\n}\r\n@media (max-width: 590px) {\r\n    .man_disease[_ngcontent-c1] {\r\n        margin-left: 54%;\r\n        margin-top: -45%;\r\n        opacity: 0.2;\r\n    }\r\n}\r\n@media (max-width: 550px) {\r\n    .man_disease[_ngcontent-c1] {\r\n        margin-left: 54%;\r\n        margin-top: -30%;\r\n    }\r\n    .title {\r\n        padding-top: 24%;\r\n    }\r\n    .diseases {\r\n        margin-top: -90%;\r\n    }\r\n    .languages {\r\n        display: none;\r\n    }\r\n}\r\n@media (max-width: 500px) {\r\n    .man_disease[_ngcontent-c1] {\r\n        margin-top: -38%;\r\n        opacity: 0.2;\r\n    }\r\n}\r\n@media (max-width: 466px) {\r\n    .man_disease[_ngcontent-c1] {\r\n        margin-left: 48%;\r\n        opacity: 0.2;\r\n    }\r\n}\r\n@media (max-width: 450px) {\r\n    .title[_ngcontent-c1] {\r\n        padding-top: 30%;\r\n    }\r\n    .diseases[_ngcontent-c1] {\r\n        margin-top: -100%;\r\n    }\r\n    .man_disease[_ngcontent-c1] {\r\n        margin-left: 48%;\r\n        opacity: 0.2;\r\n    }\r\n}\r\n@media (max-width: 433px) {\r\n    .title[_ngcontent-c1] {\r\n        padding-top: 30%;\r\n    }\r\n    .diseases[_ngcontent-c1] {\r\n        margin-top: -110%;\r\n    }\r\n    .man_disease[_ngcontent-c1] {\r\n        margin-left: 48%;\r\n        opacity: 0.2;\r\n    }\r\n}\r\n@media (max-width: 400px) {\r\n    .diseases[_ngcontent-c1][_ngcontent-c1] {\r\n        margin-top: -125%;\r\n    }\r\n}\r\n@media (max-width: 370px) {\r\n    .title[_ngcontent-c1] {\r\n        padding-top: 35%;\r\n    }\r\n    .diseases[_ngcontent-c1] {\r\n        margin-top: -140%;\r\n    }\r\n    .man_disease[_ngcontent-c1] {\r\n        margin-left: 48%;\r\n    }\r\n    .diseases[_ngcontent-c1] ol[_ngcontent-c1] {\r\n        padding: 0px 0px 0px 20px;\r\n    }\r\n}\r\n@media (max-width: 360px) {\r\n    .title[_ngcontent-c1][_ngcontent-c1] {\r\n        padding-top: 35%;\r\n    }\r\n    .diseases[_ngcontent-c1][_ngcontent-c1][_ngcontent-c1] {\r\n        margin-top: -155%;\r\n    }\r\n    .man_disease[_ngcontent-c1] {\r\n        margin-left: 48%;\r\n    }\r\n    .diseases[_ngcontent-c1] ol[_ngcontent-c1] {\r\n        padding: 0px 0px 0px 20px;\r\n    }\r\n}\r\n@media (max-width: 330px) {\r\n    .diseases[_ngcontent-c1][_ngcontent-c1][_ngcontent-c1] {\r\n        margin-top: -177%;\r\n    }\r\n}\r\n@media (max-width: 320px) {\r\n    .title[_ngcontent-c1][_ngcontent-c1][_ngcontent-c1] {\r\n        padding-top: 38%;\r\n    }\r\n    .diseases[_ngcontent-c1][_ngcontent-c1][_ngcontent-c1][_ngcontent-c1] {\r\n        margin-top: -170%;\r\n    }\r\n    .man_disease[_ngcontent-c1][_ngcontent-c1] {\r\n        margin-left: 48%;\r\n        opacity: 0.2;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/disease/disease.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"disease-wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n\r\n      <div class=\"title\">\r\n        <h1>List Of Diseases</h1>\r\n        <p>The Clinic provides treatments</p>\r\n        <p>of the following tumors:</p>\r\n      </div>\r\n      <div class=\"man_disease col-lg-3 col-md-3 col-sm-4\">\r\n      </div>\r\n      <div class=\"diseases col-lg-9 col-md-9 col-sm-8\">\r\n        <ol>\r\n          <li>lung</li>\r\n          <li>breast</li>\r\n          <li>stomach</li>\r\n          <li>pancreas</li>\r\n          <li>hepar</li>\r\n          <li>colon and rectum</li>\r\n          <li>kidney</li>\r\n        </ol>\r\n        <ol>\r\n          <li>ovarian</li>\r\n          <li>prostate</li>\r\n          <li>head and neck</li>\r\n          <li>pleura and perotoneum</li>\r\n          <li>bones and soft tissues</li>\r\n          <li>some other tumors (PNET, NET, GIST)</li>\r\n          <li>melanoma</li>\r\n        </ol>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"disease-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n        © Clinic Target 2017\r\n      </div>\r\n\r\n      <div class=\"col-lg-6  col-md-6 col-sm-6 col-xs-6 languages\">    \r\n        <a>Rus</a>\r\n        <a>Eng</a>\r\n        <a>Ukr</a>\r\n      </div>\r\n    </div>\r\n    \r\n\r\n    \r\n  </div>\r\n  <!-- <div class=\"disease-language\">\r\n    <a (click)=\"onLanguageChange('rus')\">Rus</a>\r\n    <a (click)=\"onLanguageChange('eng')\">Eng</a>\r\n    <a (click)=\"onLanguageChange('ukr')\">Ukr</a>\r\n </div> -->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/disease/disease.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiseaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiseaseComponent = (function () {
    function DiseaseComponent() {
    }
    DiseaseComponent.prototype.ngOnInit = function () {
    };
    DiseaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-disease',
            template: __webpack_require__("../../../../../src/app/disease/disease.component.html"),
            styles: [__webpack_require__("../../../../../src/app/disease/disease.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DiseaseComponent);
    return DiseaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/images/background-pills.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background-pills.1397066df51bc4f1524f.png";

/***/ }),

/***/ "../../../../../src/app/images/background-screen3.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background-screen3.07c0fe3e0a82bcf29ca4.png";

/***/ }),

/***/ "../../../../../src/app/images/bg_doctor.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg_doctor.53288153d8e7f4d1cf33.png";

/***/ }),

/***/ "../../../../../src/app/images/flask.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "flask.85e0594a090ab42e4c75.png";

/***/ }),

/***/ "../../../../../src/app/images/green-line.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "green-line.f0fa677e19e5703bf4c1.png";

/***/ }),

/***/ "../../../../../src/app/images/logo.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAA4CAYAAADZ0pXFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNTUyZTc5Ny02NGJiLTdkNDctYTEzMi0wYjk4OWFmNmM0NzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDM2RDhFRTFDQUU0MTFFNzk1QUZFQjI0NUI1MzBCN0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDM2RDhFRTBDQUU0MTFFNzk1QUZFQjI0NUI1MzBCN0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmU5YzMxN2VhLTJjNDUtZDY0NC05OGUxLTFjZTVjOWJlYzY1YyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJjMDMyN2I0LWIzZGYtMTFlNy1hNWFkLWQ2OGIz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"

/***/ }),

/***/ "../../../../../src/app/images/man_disease.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "man_disease.54b4bf3dc0b31dc42851.png";

/***/ }),

/***/ "../../../../../src/app/images/photo.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "photo.847921e9e8713dd58191.jpg";

/***/ }),

/***/ "../../../../../src/app/images/pills.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pills.fb2195a0f8f09a2e0fdb.png";

/***/ }),

/***/ "../../../../../src/app/images/small-treatment-photo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "small-treatment-photo.42540617bf6df75299ab.png";

/***/ }),

/***/ "../../../../../src/app/images/treatment-bg-photo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "treatment-bg-photo.2afc49ab37906f970369.png";

/***/ }),

/***/ "../../../../../src/app/images/treatment-photo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "treatment-photo.636470e2b8ce647bb1b1.png";

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-wrapper {\r\n    top: 0px;\r\n}\r\n.screen1 {\r\n    padding-left: 75px;\r\n}\r\n.logo {\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/images/logo.png") + ");\r\n    width: 255px;\r\n    height: 56px;\r\n    margin-top: 5px;\r\n}\r\n.about-company {\r\n    font-size: 14px;\r\n    font-family: \"Myriad Pro\";\r\n    color: rgb(60, 60, 67);\r\n    letter-spacing: 4px;\r\n    line-height: 1.714;\r\n    width: 248px;\r\n    margin-top: 50px;\r\n    text-transform: uppercase;\r\n}\r\n  .green-background {\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/images/green-line.png") + ");\r\n    background-repeat: no-repeat;\r\n    background-size: 610px;\r\n    right: 0;\r\n    margin-top: -100px;    \r\n    height: 1058px;\r\n    z-index: 0; \r\n  }\r\n  .green-background-overlay {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(46, 224, 69, 0.5);\r\n  }\r\n  .screen1 .col-lg-4{\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n  }\r\n.scientific-approach {\r\n    width: 65%;\r\n    letter-spacing: 5px;\r\n    margin-top: 10%;;\r\n    margin-left: 10%;\r\n    z-index: 2;\r\n    position: absolute;\r\n}\r\n.scientific-approach h3{\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    font-size: 60px;\r\n}\r\n.photo {\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/images/photo.jpg") + ");\r\n    background-size: cover;\r\n    position: absolute;\r\n    margin-top: 20%;\r\n    margin-left: 24%;\r\n    width: 900px;\r\n    height: 625px;\r\n    z-index: 1;\r\n  }\r\n.img-overlay {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(209, 188, 123, 0.5);\r\n}\r\n.screen2 .col-lg-6 {\r\n    padding: 0;\r\n}\r\n/* .screen2 .col-lg-3 {\r\n    padding: 0;\r\n} */\r\n.qualified-consultancy {\r\n    font-size: 45px;\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    margin-top: 130px;\r\n}\r\n.highlight {\r\n    color: #83ba9b;\r\n}\r\n.pills {\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/images/pills.png") + ");\r\n    background-repeat: no-repeat;\r\n    height: 530px;\r\n}\r\n.background-pills {\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/images/background-pills.png") + ");\r\n    background-repeat: no-repeat;\r\n    height: 980px;\r\n}\r\n.background-screen3 {\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/images/background-screen3.png") + ");\r\n    background: rgba(209, 188, 123);\r\n    background-repeat: no-repeat;\r\n    height: 915px;\r\n}\r\n.supportive {\r\n    font-size: 45px;\r\n    width: 375px;\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    margin-top: 160px;\r\n}\r\n.flask {\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/images/flask.png") + ");\r\n    background-repeat: no-repeat;\r\n    width: 75%;\r\n    height: 615px;\r\n    margin-top: 165px;\r\n    margin-left: 200px;\r\n}\r\n.flask-screen3 {\r\n    height: 915px;\r\n}\r\n.screen3-footer {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 80px;\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    font-size: 20px;\r\n}\r\n.footer {\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 35%;    \r\n    height: 80px;\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    font-size: 20px;\r\n}\r\n.language {\r\n    float: right;\r\n    margin-top: -30px;\r\n    margin-right: 15px;\r\n}\r\n.language a {\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    font-size: 25px;\r\n    padding-right: 10px;\r\n}\r\n\r\n@media (max-width: 1640px) {\r\n    .green-background {   \r\n        margin-top: -175px;   \r\n    }\r\n    .scientific-approach h3{\r\n        font-size: 45px;\r\n    }\r\n    .qualified-consultancy {\r\n        font-size: 37px;\r\n    }\r\n}\r\n@media (max-width: 1500px) {\r\n    .flask {\r\n        margin-left: 135px;\r\n    }\r\n}\r\n@media (max-width: 1340px) {\r\n    .green-background {   \r\n        margin-top: -225px;   \r\n    }\r\n    .main-wrapper {\r\n        margin-top: 60px;\r\n    }\r\n    .scientific-approach h3{\r\n        font-size: 30px;\r\n    }\r\n}\r\n@media (max-width: 1225px) {\r\n    .green-background {   \r\n        margin-top: -225px;   \r\n    }\r\n    .flask {\r\n        margin-left: 135px;\r\n    }\r\n}\r\n@media (max-width: 1200px) {\r\n    .green-background {   \r\n       visibility: hidden;\r\n    }\r\n    .flask {\r\n        margin-left: 135px;\r\n    }\r\n    .scientific-approach {\r\n        text-align: center;\r\n        margin-top: 0;\r\n    }\r\n    .photo {\r\n        margin-top: 0;\r\n        margin-left: 0;\r\n        width: 90%;\r\n    }\r\n}\r\n@media (max-width: 1180px) {\r\n    .about-company{\r\n        margin-top: 0px;\r\n    }\r\n}\r\n@media (max-width: 970px) {\r\n    .about-company{\r\n        margin-top: 0px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-wrapper\">\r\n  <div class=\"row screen1\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"scientific-approach\">\r\n        <h3>A modern scientific approach is a foundation of successful tumor treatment</h3>\r\n      </div>\r\n      <div class=\"photo img-responsive\">\r\n        <div class=\"img-overlay\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4 img-responsive\">\r\n      <div class=\"green-background\">\r\n        <div class=\"green-background-overlay\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"row screen2\">\r\n    <div class=\"col-lg-3\">\r\n      <div class=\"background-pills\"></div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n      <div class=\"qualified-consultancy\">\r\n        <span>\r\n          Qualified consultancy to oncological patients, \r\n          <span class=\"highlight\">\r\n            including provision of \"another opinion\" services.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"pills\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row screen3\">\r\n    <div class=\"col-lg-6 background-screen3\">\r\n      <div class=\"col-lg-offset-3 supportive\">\r\n        <span>\r\n          Supportive <br>care for oncological patients despite\r\n        </span>\r\n      </div>\r\n      <div class=\"screen3-footer col-lg-offset-4\">\r\n          © Clinic Target 2017\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 flask-screen3\">\r\n        <div class=\"flask\"></div>\r\n        <div class=\"footer\">\r\n            The clinic is located in the one-storey \r\n            building, in the area of good transport\r\n            decisions on the outskirts of Kiev\r\n        </div>\r\n        <div class=\"language\">\r\n           <a>Rus</a>\r\n           <a>Eng</a>\r\n           <a>Ukr</a>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n -->\r\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/price/price.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/price/price.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  price works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/price/price.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceComponent = (function () {
    function PriceComponent() {
    }
    PriceComponent.prototype.ngOnInit = function () {
    };
    PriceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-price',
            template: __webpack_require__("../../../../../src/app/price/price.component.html"),
            styles: [__webpack_require__("../../../../../src/app/price/price.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/treatment/treatment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".treatment-wrapper {\r\n    margin-top: 5%;\r\n}\r\n.row {\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n}\r\n.column {\r\n    display: inline-block;\r\n}\r\n.column h1 {\r\n    font-size: 60px;\r\n    font-family: \"Myriad Pro\";\r\n    color: rgb(60, 60, 67);\r\n    line-height: 1.2;\r\n}\r\n.column p {\r\n    font-size: 22px;\r\n    font-family: \"SFUIDisplay\";\r\n    color: rgb(60, 60, 67);\r\n    line-height: 0.9;    \r\n    margin-left: 50px;\r\n    text-align: justify;\r\n}\r\n.headers {\r\n    /* text-align: center; */\r\n}\r\n.treatment-footer{\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    font-size: 20px;\r\n    position: absolute;\r\n    left: 0;\r\n    padding: 30px 0px;\r\n    /* bottom: 25px; */\r\n    /* height: 20px;     */\r\n    width: 100%;\r\n}\r\n.languages {\r\n    padding-right: 100px;\r\n}\r\n.languages a{\r\n    float: right;\r\n    padding-left: 25px;\r\n    color: #3c3c43;\r\n    font-family: 'Roboto';\r\n    font-size: 20px;\r\n}\r\n.following-treatments {\r\n    margin-top: 2%;\r\n}\r\n.text{\r\n    font-size: 24px;\r\n    font-family: \"Myriad Pro\";\r\n    color: rgb(60, 60, 67);\r\n    line-height: 1.25; \r\n}\r\n.treatment-content {\r\n    margin-top: 30px;\r\n}\r\n.treatment-content .col-lg-4{\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n}\r\n.healthy-hand {\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/images/treatment-photo.png") + ");\r\n    background-repeat: no-repeat;\r\n    height: 475px;\r\n    width: 510px;\r\n}\r\n.lists {\r\n    /* display: inline-block; */\r\n    float: left;\r\n}\r\n.lists b {\r\n    font-size: 20px;\r\n    font-family: \"SFUIDisplay\";\r\n    color: rgb(54, 167, 103);\r\n    line-height: 1.667;  \r\n}\r\n.lists li {\r\n    list-style-type: circle;\r\n}\r\n\r\n/* .anti-tumor {\r\n    float: left;\r\n}\r\n.maintenance {\r\n    float: left;\r\n} */\r\n.anti-tumor li{\r\n    font-size: 16px;\r\n    font-family: \"Myriad Pro\";\r\n    color: rgb(60, 60, 67);\r\n    line-height: 3;\r\n}\r\n.maintenance li{\r\n    font-size: 16px;\r\n    font-family: \"Myriad Pro\";\r\n    color: rgb(60, 60, 67);\r\n    line-height: 2.49;    \r\n}\r\n.in-addition {\r\n    float: right;\r\n}\r\n.in-addition b{\r\n    font-size: 20px;\r\n    font-family: \"SFUIDisplay\";\r\n    color: rgb(54, 167, 103);\r\n    line-height: 1.667;\r\n}\r\n.in-addition li {\r\n    font-size: 18px;\r\n    font-family: \"SFUIDisplay\";\r\n    color: rgb(60, 60, 67);\r\n    line-height: 2.25;\r\n    list-style-type: circle;\r\n}\r\n.bg-photo {\r\n    background-image: url(" + __webpack_require__("../../../../../src/app/images/treatment-bg-photo.png") + ");\r\n    background-repeat: no-repeat;\r\n    height: 725px;\r\n}\r\n@media (max-width: 1400px) {\r\n    /* .column {\r\n        display: block;\r\n    } */\r\n    .column h1 {\r\n        font-size: 40px;\r\n    }\r\n    .column p {\r\n        font-size: 18px;\r\n    }\r\n    .items {\r\n        margin-left: 20%;\r\n    }\r\n    .following-treatments {\r\n        margin-left: 20%;\r\n    }\r\n    .treatment-methods {\r\n        margin-left: 20%;\r\n    }\r\n}\r\n@media (max-width: 1300px) {\r\n    .items {\r\n        margin-left: 20%;\r\n    }\r\n    .following-treatments {\r\n        margin-left: 20%;\r\n    }\r\n    .treatment-methods {\r\n        margin-left: 20%;\r\n    }\r\n    .bg-pills {\r\n        width: 100%;  \r\n        padding-left: 37%; \r\n        display: none;\r\n    }\r\n}\r\n@media (max-width: 1200px) {\r\n    .items {\r\n        margin-left: 0%;\r\n    }\r\n    .following-treatments {\r\n        margin-left: 40%;\r\n    }\r\n}\r\n@media (max-width: 1100px) {\r\n    .column h1 {\r\n        font-size: 30px;\r\n    }\r\n    .column p {\r\n        font-size: 16px;\r\n    }\r\n}\r\n@media (max-width: 990px) {\r\n    .treatment-methods{\r\n        margin-left: 30%;\r\n    }\r\n    .items {\r\n        padding-top: 13%;\r\n    }\r\n    .following-treatments[_ngcontent-c1] {\r\n        margin-left: 3%;\r\n        position: absolute;\r\n        margin-top: 56%;\r\n    }\r\n}\r\n@media (max-width: 890px) {\r\n    .treatment-methods{\r\n        margin-left: 30%;\r\n    }\r\n    .items {\r\n        padding-top: 15%;\r\n    }\r\n    .following-treatments[_ngcontent-c1] {\r\n        margin-left: 3%;\r\n        position: absolute;\r\n        margin-top: 63%;\r\n    }\r\n    .column {\r\n        display: block;\r\n    }\r\n    .column h1 {\r\n        padding-left: 50px;\r\n        font-size: 30px;\r\n    }\r\n    .column p {\r\n        text-align: center;\r\n        font-size: 16px;\r\n    }\r\n}\r\n@media (max-width: 780px) {\r\n    .treatment-methods{\r\n        margin-left: 30%;\r\n        margin-top: -4%;\r\n    }\r\n    .items {\r\n        padding-top: 15%;\r\n    }\r\n    .following-treatments[_ngcontent-c1] {\r\n        margin-left: 3%;\r\n        position: absolute;\r\n        margin-top: 71%;\r\n    }\r\n}\r\n@media (max-width: 670px) {\r\n\r\n    .following-treatments[_ngcontent-c1] {\r\n        margin-left: 3%;\r\n        position: absolute;\r\n        margin-top: 79%;\r\n    }\r\n}\r\n@media (max-width: 615px) {\r\n    \r\n    .following-treatments[_ngcontent-c1] {\r\n        margin-top: 86%;\r\n    }\r\n}\r\n@media (max-width: 590px) {\r\n    .treatment-methods {\r\n        margin-left: 0;\r\n        margin-top: 15%;\r\n    }\r\n    .column h1 {\r\n        padding-left: 0px;\r\n        font-size: 30px;\r\n    }\r\n    .column p {\r\n        margin-left: 0px;\r\n        font-size: 16px;\r\n    }\r\n}\r\n@media (max-width: 560px) {\r\n    .following-treatments[_ngcontent-c1] {\r\n        margin-top: 57%;\r\n    }\r\n    .bg-pills {\r\n        width: 100%;\r\n        display: block;\r\n        position: absolute;\r\n        margin-top: 100%;\r\n    }\r\n    .languages {\r\n        display: none;\r\n    }\r\n    .healthy-hand {\r\n        background: url(" + __webpack_require__("../../../../../src/app/images/small-treatment-photo.png") + ");\r\n        background-repeat: no-repeat;\r\n        width: 300px;\r\n        height: 270px;\r\n    }\r\n}\r\n@media (max-width: 500px) {\r\n    .following-treatments[_ngcontent-c1] {\r\n        margin-top: 70%;\r\n    }\r\n    .items[_ngcontent-c1] {\r\n        padding-top: 25%;\r\n    }\r\n}\r\n@media (max-width: 490px) {\r\n    .following-treatments[_ngcontent-c1] {\r\n        margin-top: 72%;\r\n    }\r\n    .treatment-methods {\r\n        margin-top: 25%;\r\n    }\r\n}\r\n@media (max-width: 370px) {\r\n    .following-treatments[_ngcontent-c1] {\r\n        margin-top: 90%;\r\n    }\r\n}\r\n@media (max-width: 330px) {\r\n    .following-treatments[_ngcontent-c1] {\r\n        margin-top: 95%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/treatment/treatment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"treatment-wrapper\">\r\n  <div class=\"headers text-center\">\r\n    <div class=\"row treatment-methods\">\r\n      <div class=\"column\">\r\n        <h1>Treatment Methods</h1>\r\n      </div>\r\n      <div class=\"column\">\r\n        <p>The Clinic specializes in medicamentous</p>\r\n        <p>treatment of oncological patients</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"following-treatments\">\r\n    <div class=\"row\">\r\n      <div class=\"text col-lg-9 col-lg-offset-3\">\r\n          <p>The Clinic provides the</p>\r\n          <p>following treatments:</p>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"treatment-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\">\r\n        <div class=\"healthy-hand\"></div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12 items\">\r\n        <ol class=\"lists anti-tumor\">\r\n          <b>Anti-tumor chemotherapy:</b>\r\n          <li>Adjuvant therapy</li>\r\n          <li>Neoadjuvant therapy</li>\r\n          <li>Chemotherapy alone</li>\r\n          <li>Lymphotropic chemotherapy</li>\r\n          <li>Immunotherapy</li>\r\n        </ol>\r\n        <ol class=\"lists maintenance\">\r\n          <b>Maintenance therapy:</b>\r\n          <li>Antiemesis</li>\r\n          <li>Myeloid growth factors</li>\r\n          <li>Hydration therapy</li>\r\n          <li>Detoxificationtherapy</li>\r\n          <li>Iron Infusions</li>\r\n          <li>Antibiotic therapy</li>\r\n        </ol>\r\n        <ol class=\"in-addition\">\r\n            <b>In addition to oncological patients we provide medical care to:</b>\r\n            <li>Patients requiring intravenous antibiotics</li>\r\n            <li>Patients requiring medication to treat conditions such as multiple sclerosis,\r\n              Crohn's disease, rheumatoid arthritis, osteoporosis, iron deficiency and anemia among others.\r\n            </li>\r\n          </ol>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12 bg-pills\">\r\n        <div class=\"bg-photo\"></div>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"treatment-footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-5 col-lg-offset-1 col-md-6 col-sm-6 col-xs-12\">\r\n          © Clinic Target 2017\r\n        </div>\r\n  \r\n        <div class=\"col-lg-4  col-lg-offset-2 col-md-6 col-sm-6 col-xs-12 languages\">    \r\n          <a>Rus</a>\r\n          <a>Eng</a>\r\n          <a>Ukr</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/treatment/treatment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreatmentComponent = (function () {
    function TreatmentComponent() {
    }
    TreatmentComponent.prototype.ngOnInit = function () {
    };
    TreatmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-treatment',
            template: __webpack_require__("../../../../../src/app/treatment/treatment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/treatment/treatment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreatmentComponent);
    return TreatmentComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map