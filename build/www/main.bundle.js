webpackJsonp([0,3],{

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/account/password/password-strength-bar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/* ==========================================================================\nstart Password strength bar style\n========================================================================== */\nul#strengthBar {\n    display:inline;\n    list-style:none;\n    margin:0;\n    margin-left:15px;\n    padding:0;\n    vertical-align:2px;\n}\n\n.point:last {\n    margin:0 !important;\n}\n.point {\n    background:#DDD;\n    border-radius:2px;\n    display:inline-block;\n    height:5px;\n    margin-right:1px;\n    width:20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/home/home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/* ==========================================================================\nMain page styles\n========================================================================== */\n\n.hipster {\n    display: inline-block;\n    width: 347px;\n    height: 497px;\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster.png") + ") no-repeat center top;\n    background-size: contain;\n}\n\n/* wait autoprefixer update to allow simple generation of high pixel density media query */\n@media\nonly screen and (-webkit-min-device-pixel-ratio: 2),\nonly screen and (   min--moz-device-pixel-ratio: 2),\nonly screen and (     -o-min-device-pixel-ratio: 2/1),\nonly screen and (        min-device-pixel-ratio: 2),\nonly screen and (                min-resolution: 192dpi),\nonly screen and (                min-resolution: 2dppx) {\n    .hipster {\n        background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster2x.png") + ") no-repeat center top;\n        background-size: contain;\n    }\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/layouts/navbar/navbar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/* ==========================================================================\nNavbar\n========================================================================== */\n.navbar-version {\n    font-size: 10px;\n    color: #ccc\n}\n\n.jh-navbar {\n    background-color: #353d47;\n    padding: .2em 1em;\n}\n\n.jh-navbar .profile-image {\n    margin: -10px 0px;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n}\n\n.jh-navbar .dropdown-item.active, .jh-navbar .dropdown-item.active:focus, .jh-navbar .dropdown-item.active:hover {\n    background-color: #353d47;\n}\n\n.jh-navbar .dropdown-toggle::after {\n    margin-left: 0.15em;\n}\n\n.jh-navbar ul.navbar-nav {\n    padding: 0.5em;\n}\n\n.jh-navbar .navbar-nav .nav-item+.nav-item {\n    margin-left: 1.5rem;\n}\n\n.jh-navbar a.nav-link {\n    font-weight: 400;\n}\n\n.jh-navbar .jh-navbar-toggler {\n    color: #ccc;\n    font-size: 1.5em;\n    padding: 10px;\n}\n\n.jh-navbar .jh-navbar-toggler:hover {\n    color: #fff;\n}\n\n\n\n@media screen and (max-width: 992px) {\n    .jh-logo-container {\n        width: 100%;\n    }\n}\n\n.navbar-title {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n/* ==========================================================================\nLogo styles\n========================================================================== */\n.navbar-brand.logo {\n    padding: 5px 15px;\n}\n\n.logo .logo-img {\n    height: 45px;\n    display: inline-block;\n    vertical-align: middle;\n    width: 70px;\n}\n\n.logo-img {\n    height: 100%;\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/logo-jhipster.png") + ") no-repeat center center;\n    background-size: contain;\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/main/webapp/app/layouts/profiles/page-ribbon.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "/* ==========================================================================\nDevelopement Ribbon\n========================================================================== */\n.ribbon {\n    background-color: rgba(170, 0, 0, 0.5);\n    left: -3.5em;\n    moz-transform: rotate(-45deg);\n    ms-transform: rotate(-45deg);\n    o-transform: rotate(-45deg);\n    webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    overflow: hidden;\n    position: absolute;\n    top: 40px;\n    white-space: nowrap;\n    width: 15em;\n    z-index: 9999;\n    pointer-events: none;\n    opacity: 0.75;\n}\n\n.ribbon a {\n    color: #fff;\n    display: block;\n    font-weight: 400;\n    margin: 1px 0;\n    padding: 10px 50px;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: 0 0 5px #444;\n    pointer-events: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/main/webapp/app/account/account.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/account/index.ts");
var ConcoursePipelinesAccountModule = (function () {
    function ConcoursePipelinesAccountModule() {
    }
    return ConcoursePipelinesAccountModule;
}());
ConcoursePipelinesAccountModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.ConcoursePipelinesSharedModule,
            router_1.RouterModule.forRoot(_1.accountState, { useHash: true })
        ],
        declarations: [
            _1.ActivateComponent,
            _1.RegisterComponent,
            _1.PasswordComponent,
            _1.PasswordStrengthBarComponent,
            _1.PasswordResetInitComponent,
            _1.PasswordResetFinishComponent,
            _1.SettingsComponent
        ],
        providers: [
            _1.Register,
            _1.Activate,
            _1.Password,
            _1.PasswordResetInit,
            _1.PasswordResetFinish
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], ConcoursePipelinesAccountModule);
exports.ConcoursePipelinesAccountModule = ConcoursePipelinesAccountModule;


/***/ }),

/***/ "./src/main/webapp/app/account/account.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _1 = __webpack_require__("./src/main/webapp/app/account/index.ts");
var ACCOUNT_ROUTES = [
    _1.activateRoute,
    _1.passwordRoute,
    _1.passwordResetFinishRoute,
    _1.passwordResetInitRoute,
    _1.registerRoute,
    _1.settingsRoute
];
exports.accountState = [{
        path: '',
        children: ACCOUNT_ROUTES
    }];


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <div class=\"col-md-8 offset-md-2\">\n            <h1>Activation</h1>\n\n            <div class=\"alert alert-success\" *ngIf=\"success\">\n                <span>\n                    <strong>Your user has been activated.</strong> Please\n                    <a class=\"alert-link\" (click)=\"login()\">sign in</a>.\n                </span>\n            </div>\n\n            <div class=\"alert alert-danger\" *ngIf=\"error\">\n                <strong>Your user could not be activated.</strong> Please use the registration form to sign up.\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var activate_service_1 = __webpack_require__("./src/main/webapp/app/account/activate/activate.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ActivateComponent = (function () {
    function ActivateComponent(activate, loginModalService, route) {
        this.activate = activate;
        this.loginModalService = loginModalService;
        this.route = route;
    }
    ActivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.activate.get(params['key']).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        });
    };
    ActivateComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return ActivateComponent;
}());
ActivateComponent = __decorate([
    core_1.Component({
        selector: 'jhi-activate',
        template: __webpack_require__("./src/main/webapp/app/account/activate/activate.component.html")
    }),
    __metadata("design:paramtypes", [activate_service_1.Activate,
        shared_1.LoginModalService,
        router_1.ActivatedRoute])
], ActivateComponent);
exports.ActivateComponent = ActivateComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var activate_component_1 = __webpack_require__("./src/main/webapp/app/account/activate/activate.component.ts");
exports.activateRoute = {
    path: 'activate',
    component: activate_component_1.ActivateComponent,
    data: {
        authorities: [],
        pageTitle: 'Activation'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var Activate = (function () {
    function Activate(http) {
        this.http = http;
    }
    Activate.prototype.get = function (key) {
        var params = new http_1.URLSearchParams();
        params.set('key', key);
        return this.http.get('api/activate', {
            search: params
        }).map(function (res) { return res.json(); });
    };
    return Activate;
}());
Activate = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Activate);
exports.Activate = Activate;


/***/ }),

/***/ "./src/main/webapp/app/account/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password-strength-bar.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/settings/settings.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/settings/settings.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/account.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            <h1>Reset password</h1>\n\n            <div class=\"alert alert-danger\" *ngIf=\"keyMissing\">\n                <strong>The password reset key is missing.</strong>\n            </div>\n\n            <div class=\"alert alert-warning\" *ngIf=\"!success && !keyMissing\">\n                <p>Choose a new password</p>\n            </div>\n\n            <div class=\"alert alert-danger\" *ngIf=\"error\">\n                <p>Your password couldn't be reset. Remember a password request is only valid for 24 hours.</p>\n            </div>\n\n            <p class=\"alert alert-success\" *ngIf=\"success\">\n                <span><strong>Your password has been reset.</strong> Please </span>\n                <a class=\"alert-link\" (click)=\"login()\">sign in</a>.\n            </p>\n\n            <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\">\n                The password and its confirmation do not match!\n            </div>\n\n            <div *ngIf=\"!keyMissing\">\n                <form *ngIf=\"!success\" name=\"form\" role=\"form\" (ngSubmit)=\"finishReset()\" #passwordForm=\"ngForm\">\n                    <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"password\">New password</label>\n                        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #passwordInput=\"ngModel\"\n                               placeholder=\"New password\"\n                               [(ngModel)]=\"resetAccount.password\" minlength=4 maxlength=50 required>\n                        <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\">\n                            <small class=\"form-text text-danger\"\n                               *ngIf=\"passwordInput.errors.required\">\n                                Your password is required.\n                            </small>\n                            <small class=\"form-text text-danger\"\n                               *ngIf=\"passwordInput.errors.minlength\">\n                                Your password is required to be at least 4 characters.\n                            </small>\n                            <small class=\"form-text text-danger\"\n                               *ngIf=\"passwordInput.errors.maxlength\">\n                                Your password cannot be longer than 50 characters.\n                            </small>\n                        </div>\n                        <jhi-password-strength-bar [passwordToCheck]=\"resetAccount.password\"></jhi-password-strength-bar>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label class=\"form-control-label\" for=\"confirmPassword\">New password confirmation</label>\n                        <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\"\n                               placeholder=\"Confirm the new password\"\n                               [(ngModel)]=\"confirmPassword\" minlength=4 maxlength=50 required>\n                        <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\">\n                            <small class=\"form-text text-danger\"\n                               *ngIf=\"confirmPasswordInput.errors.required\">\n                                Your password confirmation is required.\n                            </small>\n                            <small class=\"form-text text-danger\"\n                               *ngIf=\"confirmPasswordInput.errors.minlength\">\n                                Your password confirmation is required to be at least 4 characters.\n                            </small>\n                            <small class=\"form-text text-danger\"\n                               *ngIf=\"confirmPasswordInput.errors.maxlength\">\n                                Your password confirmation cannot be longer than 50 characters.\n                            </small>\n                        </div>\n                    </div>\n                    <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\">Reset Password</button>\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var password_reset_finish_service_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var PasswordResetFinishComponent = (function () {
    function PasswordResetFinishComponent(passwordResetFinish, loginModalService, route, elementRef, renderer) {
        this.passwordResetFinish = passwordResetFinish;
        this.loginModalService = loginModalService;
        this.route = route;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetFinishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.key = params['key'];
        });
        this.resetAccount = {};
        this.keyMissing = !this.key;
    };
    PasswordResetFinishComponent.prototype.ngAfterViewInit = function () {
        if (this.elementRef.nativeElement.querySelector('#password') != null) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#password'), 'focus', []);
        }
    };
    PasswordResetFinishComponent.prototype.finishReset = function () {
        var _this = this;
        this.doNotMatch = null;
        this.error = null;
        if (this.resetAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.passwordResetFinish.save({ key: this.key, newPassword: this.resetAccount.password }).subscribe(function () {
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    PasswordResetFinishComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return PasswordResetFinishComponent;
}());
PasswordResetFinishComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-reset-finish',
        template: __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.html")
    }),
    __metadata("design:paramtypes", [password_reset_finish_service_1.PasswordResetFinish,
        shared_1.LoginModalService,
        router_1.ActivatedRoute,
        core_1.ElementRef, core_1.Renderer])
], PasswordResetFinishComponent);
exports.PasswordResetFinishComponent = PasswordResetFinishComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_reset_finish_component_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts");
exports.passwordResetFinishRoute = {
    path: 'reset/finish',
    component: password_reset_finish_component_1.PasswordResetFinishComponent,
    data: {
        authorities: [],
        pageTitle: 'Password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var PasswordResetFinish = (function () {
    function PasswordResetFinish(http) {
        this.http = http;
    }
    PasswordResetFinish.prototype.save = function (keyAndPassword) {
        return this.http.post('api/account/reset_password/finish', keyAndPassword);
    };
    return PasswordResetFinish;
}());
PasswordResetFinish = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordResetFinish);
exports.PasswordResetFinish = PasswordResetFinish;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <div class=\"col-md-8 offset-md-2\">\n            <h1>Reset your password</h1>\n\n            <div class=\"alert alert-danger\" *ngIf=\"errorEmailNotExists\">\n                <strong>E-Mail address isn't registered!</strong> Please check and try again.\n            </div>\n\n            <div class=\"alert alert-warning\" *ngIf=\"!success\">\n                <p>Enter the e-mail address you used to register.</p>\n            </div>\n\n            <div class=\"alert alert-success\" *ngIf=\"success == 'OK'\">\n                <p>Check your e-mails for details on how to reset your password.</p>\n            </div>\n\n            <form *ngIf=\"!success\" name=\"form\" role=\"form\" (ngSubmit)=\"requestReset()\" #resetRequestForm=\"ngForm\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"email\">E-mail</label>\n                    <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Your e-mail\"\n                           [(ngModel)]=\"resetAccount.email\" minlength=5 maxlength=100 #emailInput=\"ngModel\" required>\n                    <div *ngIf=\"emailInput.dirty && emailInput.invalid\">\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"emailInput.errors.required\">\n                            Your e-mail is required.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"emailInput.errors.email\">\n                            Your e-mail is invalid.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"emailInput.errors.minlength\">\n                            Your e-mail is required to be at least 5 characters.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"emailInput.errors.maxlength\">\n                            Your e-mail cannot be longer than 100 characters.\n                        </small>\n                    </div>\n                </div>\n                <button type=\"submit\" [disabled]=\"resetRequestForm.form.invalid\" class=\"btn btn-primary\">Reset</button>\n            </form>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var password_reset_init_service_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts");
var PasswordResetInitComponent = (function () {
    function PasswordResetInitComponent(passwordResetInit, elementRef, renderer) {
        this.passwordResetInit = passwordResetInit;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    PasswordResetInitComponent.prototype.ngOnInit = function () {
        this.resetAccount = {};
    };
    PasswordResetInitComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#email'), 'focus', []);
    };
    PasswordResetInitComponent.prototype.requestReset = function () {
        var _this = this;
        this.error = null;
        this.errorEmailNotExists = null;
        this.passwordResetInit.save(this.resetAccount.email).subscribe(function () {
            _this.success = 'OK';
        }, function (response) {
            _this.success = null;
            if (response.status === 400 && response.data === 'e-mail address not registered') {
                _this.errorEmailNotExists = 'ERROR';
            }
            else {
                _this.error = 'ERROR';
            }
        });
    };
    return PasswordResetInitComponent;
}());
PasswordResetInitComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-reset-init',
        template: __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.html")
    }),
    __metadata("design:paramtypes", [password_reset_init_service_1.PasswordResetInit,
        core_1.ElementRef,
        core_1.Renderer])
], PasswordResetInitComponent);
exports.PasswordResetInitComponent = PasswordResetInitComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_reset_init_component_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts");
exports.passwordResetInitRoute = {
    path: 'reset/request',
    component: password_reset_init_component_1.PasswordResetInitComponent,
    data: {
        authorities: [],
        pageTitle: 'Password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var PasswordResetInit = (function () {
    function PasswordResetInit(http) {
        this.http = http;
    }
    PasswordResetInit.prototype.save = function (mail) {
        return this.http.post('api/account/reset_password/init', mail);
    };
    return PasswordResetInit;
}());
PasswordResetInit = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordResetInit);
exports.PasswordResetInit = PasswordResetInit;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password-strength-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var PasswordStrengthBarComponent = (function () {
    function PasswordStrengthBarComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
    }
    PasswordStrengthBarComponent.prototype.measureStrength = function (p) {
        var force = 0;
        var regex = /[$-/:-?{-~!"^_`\[\]]/g; // "
        var lowerLetters = /[a-z]+/.test(p);
        var upperLetters = /[A-Z]+/.test(p);
        var numbers = /[0-9]+/.test(p);
        var symbols = regex.test(p);
        var flags = [lowerLetters, upperLetters, numbers, symbols];
        var passedMatches = flags.filter(function (isMatchedFlag) {
            return isMatchedFlag === true;
        }).length;
        force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
        force += passedMatches * 10;
        // penality (short password)
        force = (p.length <= 6) ? Math.min(force, 10) : force;
        // penality (poor variety of characters)
        force = (passedMatches === 1) ? Math.min(force, 10) : force;
        force = (passedMatches === 2) ? Math.min(force, 20) : force;
        force = (passedMatches === 3) ? Math.min(force, 40) : force;
        return force;
    };
    ;
    PasswordStrengthBarComponent.prototype.getColor = function (s) {
        var idx = 0;
        if (s <= 10) {
            idx = 0;
        }
        else if (s <= 20) {
            idx = 1;
        }
        else if (s <= 30) {
            idx = 2;
        }
        else if (s <= 40) {
            idx = 3;
        }
        else {
            idx = 4;
        }
        return { idx: idx + 1, col: this.colors[idx] };
    };
    ;
    Object.defineProperty(PasswordStrengthBarComponent.prototype, "passwordToCheck", {
        set: function (password) {
            if (password) {
                var c = this.getColor(this.measureStrength(password));
                var element = this.elementRef.nativeElement;
                if (element.className) {
                    this.renderer.setElementClass(element, element.className, false);
                }
                var lis = element.getElementsByTagName('li');
                for (var i = 0; i < lis.length; i++) {
                    if (i < c.idx) {
                        this.renderer.setElementStyle(lis[i], 'backgroundColor', c.col);
                    }
                    else {
                        this.renderer.setElementStyle(lis[i], 'backgroundColor', '#DDD');
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return PasswordStrengthBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PasswordStrengthBarComponent.prototype, "passwordToCheck", null);
PasswordStrengthBarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-strength-bar',
        template: "\n        <div id=\"strength\">\n            <small>Password strength:</small>\n            <ul id=\"strengthBar\">\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n            </ul>\n        </div>",
        styles: [
            __webpack_require__("./src/main/webapp/app/account/password/password-strength-bar.css")
        ]
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], PasswordStrengthBarComponent);
exports.PasswordStrengthBarComponent = PasswordStrengthBarComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password-strength-bar.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/main/webapp/app/account/password/password-strength-bar.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/account/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <div class=\"col-md-8 offset-md-2\">\n            <h2 *ngIf=\"account\">Password for [<b>{{account.login}}</b>]</h2>\n\n            <div class=\"alert alert-success\" *ngIf=\"success\">\n                <strong>Password changed!</strong>\n            </div>\n            <div class=\"alert alert-danger\" *ngIf=\"error\" >\n                <strong>An error has occurred!</strong> The password could not be changed.\n            </div>\n\n            <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\">\n                The password and its confirmation do not match!\n            </div>\n\n            <form name=\"form\" role=\"form\" (ngSubmit)=\"changePassword()\" #passwordForm=\"ngForm\">\n\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"password\">New password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #passwordInput=\"ngModel\"\n                    placeholder=\"New password\"\n                           [(ngModel)]=\"password\" minlength=4 maxlength=50 required>\n                    <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\">\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"passwordInput.errors.required\">\n                            Your password is required.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"passwordInput.errors.minlength\">\n                            Your password is required to be at least 4 characters.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"passwordInput.errors.maxlength\">\n                            Your password cannot be longer than 50 characters.\n                        </small>\n                    </div>\n                    <jhi-password-strength-bar [passwordToCheck]=\"password\"></jhi-password-strength-bar>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"confirmPassword\">New password confirmation</label>\n                    <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\"\n                    placeholder=\"Confirm the new password\"\n                           [(ngModel)]=\"confirmPassword\" minlength=4 maxlength=50 required>\n                    <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\">\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"confirmPasswordInput.errors.required\">\n                            Your confirmation password is required.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"confirmPasswordInput.errors.minlength\">\n                            Your confirmation password is required to be at least 4 characters.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"confirmPasswordInput.errors.maxlength\">\n                            Your confirmation password cannot be longer than 50 characters.\n                        </small>\n                    </div>\n                </div>\n\n                <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\">Save</button>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/account/password/password.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_service_1 = __webpack_require__("./src/main/webapp/app/account/password/password.service.ts");
var PasswordComponent = (function () {
    function PasswordComponent(passwordService, principal) {
        this.passwordService = passwordService;
        this.principal = principal;
    }
    PasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
    };
    PasswordComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.password !== this.confirmPassword) {
            this.error = null;
            this.success = null;
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.passwordService.save(this.password).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password',
        template: __webpack_require__("./src/main/webapp/app/account/password/password.component.html")
    }),
    __metadata("design:paramtypes", [password_service_1.Password,
        shared_1.Principal])
], PasswordComponent);
exports.PasswordComponent = PasswordComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_component_1 = __webpack_require__("./src/main/webapp/app/account/password/password.component.ts");
exports.passwordRoute = {
    path: 'password',
    component: password_component_1.PasswordComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password/password.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var Password = (function () {
    function Password(http) {
        this.http = http;
    }
    Password.prototype.save = function (newPassword) {
        return this.http.post('api/account/change_password', newPassword);
    };
    return Password;
}());
Password = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Password);
exports.Password = Password;


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <div class=\"col-md-8 offset-md-2\">\n            <h1>Registration</h1>\n\n            <div class=\"alert alert-success\" *ngIf=\"success\">\n                <strong>Registration saved!</strong> Please check your email for confirmation.\n            </div>\n\n            <div class=\"alert alert-danger\" *ngIf=\"error\">\n                <strong>Registration failed!</strong> Please try again later.\n            </div>\n\n            <div class=\"alert alert-danger\" *ngIf=\"errorUserExists\">\n                <strong>Login name already registered!</strong> Please choose another one.\n            </div>\n\n            <div class=\"alert alert-danger\" *ngIf=\"errorEmailExists\">\n                <strong>E-mail is already in use!</strong> Please choose another one.\n            </div>\n\n            <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\">\n                The password and its confirmation do not match!\n            </div>\n        </div>\n        <div class=\"col-md-8 offset-md-2\">\n            <form name=\"form\" role=\"form\" (ngSubmit)=\"register()\" #registerForm=\"ngForm\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"login\">Username</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"registerAccount.login\" id=\"login\" name=\"login\" #login=\"ngModel\" placeholder=\"Your username\"\n                            required minlength=\"1\" maxlength=\"50\" pattern=\"^[_'.@A-Za-z0-9-]*$\">\n                    <div *ngIf=\"login.dirty && login.invalid\">\n                        <small class=\"form-text text-danger\" *ngIf=\"login.errors.required\">\n                            Your username is required.\n                        </small>\n                        <small class=\"form-text text-danger\" *ngIf=\"login.errors.minlength\"\n                               >\n                            Your username is required to be at least 1 character.\n                        </small>\n                        <small class=\"form-text text-danger\" *ngIf=\"login.errors.maxlength\"\n                               >\n                            Your username cannot be longer than 50 characters.\n                        </small>\n                        <small class=\"form-text text-danger\" *ngIf=\"login.errors.pattern\"\n                              >\n                            Your username can only contain lower-case letters and digits.\n                        </small>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"email\">E-mail</label>\n                    <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" #email=\"ngModel\" placeholder=\"Your e-mail\"\n                            [(ngModel)]=\"registerAccount.email\" minlength=5 maxlength=100 required>\n                    <div *ngIf=\"email.dirty && email.invalid\">\n                        <small class=\"form-text text-danger\" *ngIf=\"email.errors.required\"\n                               >\n                            Your e-mail is required.\n                        </small>\n                        <small class=\"form-text text-danger\" *ngIf=\"email.errors.invalid\"\n                              >\n                            Your e-mail is invalid.\n                        </small>\n                        <small class=\"form-text text-danger\" *ngIf=\"email.errors.minlength\"\n                              >\n                            Your e-mail is required to be at least 5 characters.\n                        </small>\n                        <small class=\"form-text text-danger\" *ngIf=\"email.errors.maxlength\"\n                              >\n                            Your e-mail cannot be longer than 100 characters.\n                        </small>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"password\">New password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #password=\"ngModel\" placeholder=\"New password\"\n                            [(ngModel)]=\"registerAccount.password\" minlength=4 maxlength=50 required>\n                    <div *ngIf=\"password.dirty && password.invalid\">\n                        <small class=\"form-text text-danger\" *ngIf=\"password.errors.required\"\n                               >\n                            Your password is required.\n                        </small>\n                        <small class=\"form-text text-danger\" *ngIf=\"password.errors.minlength\"\n                               >\n                            Your password is required to be at least 4 characters.\n                        </small>\n                        <small class=\"form-text text-danger\" *ngIf=\"password.errors.maxlength\"\n                               >\n                            Your password cannot be longer than 50 characters.\n                        </small>\n                    </div>\n                    <jhi-password-strength-bar [passwordToCheck]=\"registerAccount.password\"></jhi-password-strength-bar>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"confirmPassword\">New password confirmation</label>\n                    <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"Confirm the new password\"\n                            [(ngModel)]=\"confirmPassword\" minlength=4 maxlength=50 required>\n                    <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\">\n                        <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\"\n                              >\n                            Your confirmation password is required.\n                        </small>\n                        <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\"\n                             >\n                            Your confirmation password is required to be at least 4 characters.\n                        </small>\n                        <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\"\n                              >\n                            Your confirmation password cannot be longer than 50 characters.\n                        </small>\n                    </div>\n                </div>\n\n                <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" class=\"btn btn-primary\">Register</button>\n            </form>\n            <p></p>\n            <div class=\"alert alert-warning\">\n                <span>If you want to </span>\n                <a class=\"alert-link\" (click)=\"openLogin()\">sign in</a><span>, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/account/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var register_service_1 = __webpack_require__("./src/main/webapp/app/account/register/register.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var RegisterComponent = (function () {
    function RegisterComponent(loginModalService, registerService, elementRef, renderer) {
        this.loginModalService = loginModalService;
        this.registerService = registerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.success = false;
        this.registerAccount = {};
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;
            this.registerAccount.langKey = 'en';
            this.registerService.save(this.registerAccount).subscribe(function () {
                _this.success = true;
            }, function (response) { return _this.processError(response); });
        }
    };
    RegisterComponent.prototype.openLogin = function () {
        this.modalRef = this.loginModalService.open();
    };
    RegisterComponent.prototype.processError = function (response) {
        this.success = null;
        if (response.status === 400 && response._body === 'login already in use') {
            this.errorUserExists = 'ERROR';
        }
        else if (response.status === 400 && response._body === 'e-mail address already in use') {
            this.errorEmailExists = 'ERROR';
        }
        else {
            this.error = 'ERROR';
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-register',
        template: __webpack_require__("./src/main/webapp/app/account/register/register.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.LoginModalService,
        register_service_1.Register,
        core_1.ElementRef,
        core_1.Renderer])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var register_component_1 = __webpack_require__("./src/main/webapp/app/account/register/register.component.ts");
exports.registerRoute = {
    path: 'register',
    component: register_component_1.RegisterComponent,
    data: {
        authorities: [],
        pageTitle: 'Registration'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var Register = (function () {
    function Register(http) {
        this.http = http;
    }
    Register.prototype.save = function (account) {
        return this.http.post('api/register', account);
    };
    return Register;
}());
Register = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Register);
exports.Register = Register;


/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <div class=\"col-md-8 offset-md-2\">\n            <h2 *ngIf=\"settingsAccount\">User settings for [<b>{{settingsAccount.login}}</b>]</h2>\n\n            <div class=\"alert alert-success\" *ngIf=\"success\">\n                <strong>Settings saved!</strong>\n            </div>\n\n            <jhi-alert-error></jhi-alert-error>\n\n            <form name=\"form\" role=\"form\" (ngSubmit)=\"save()\" #settingsForm=\"ngForm\" *ngIf=\"settingsAccount\" novalidate>\n\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"firstName\">First Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"Your first name\"\n                           [(ngModel)]=\"settingsAccount.firstName\" minlength=1 maxlength=50 #firstNameInput=\"ngModel\" required>\n                    <div *ngIf=\"firstNameInput.dirty && firstNameInput.invalid\">\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"firstNameInput.errors.required\">\n                            Your first name is required.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"firstNameInput.errors.minlength\">\n                            Your first name is required to be at least 1 character.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"firstNameInput.errors.maxlength\">\n                            Your first name cannot be longer than 50 characters.\n                        </small>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"lastName\">Last Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"Your last name\"\n                           [(ngModel)]=\"settingsAccount.lastName\" minlength=1 maxlength=50 #lastNameInput=\"ngModel\" required>\n                    <div *ngIf=\"lastNameInput.dirty && lastNameInput.invalid\">\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"lastNameInput.errors.required\">\n                            Your last name is required.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"lastNameInput.errors.minlength\">\n                            Your last name is required to be at least 1 character.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"lastNameInput.errors.maxlength\">\n                            Your last name cannot be longer than 50 characters.\n                        </small>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"email\">E-mail</label>\n                    <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Your e-mail\"\n                           [(ngModel)]=\"settingsAccount.email\" minlength=5 maxlength=100 #emailInput=\"ngModel\" required>\n                    <div *ngIf=\"emailInput.dirty && emailInput.invalid\">\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"emailInput.errors.required\">\n                            Your e-mail is required.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"emailInput.errors.email\">\n                            Your e-mail is invalid.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"emailInput.errors.minlength\">\n                            Your e-mail is required to be at least 5 characters.\n                        </small>\n                        <small class=\"form-text text-danger\"\n                           *ngIf=\"emailInput.errors.maxlength\">\n                            Your e-mail cannot be longer than 100 characters.\n                        </small>\n                    </div>\n                </div>\n                <button type=\"submit\" [disabled]=\"settingsForm.form.invalid\" class=\"btn btn-primary\">Save</button>\n            </form>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var SettingsComponent = (function () {
    function SettingsComponent(account, principal) {
        this.account = account;
        this.principal = principal;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.settingsAccount = _this.copyAccount(account);
        });
    };
    SettingsComponent.prototype.save = function () {
        var _this = this;
        this.account.save(this.settingsAccount).subscribe(function () {
            _this.error = null;
            _this.success = 'OK';
            _this.principal.identity(true).then(function (account) {
                _this.settingsAccount = _this.copyAccount(account);
            });
        }, function () {
            _this.success = null;
            _this.error = 'ERROR';
        });
    };
    SettingsComponent.prototype.copyAccount = function (account) {
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-settings',
        template: __webpack_require__("./src/main/webapp/app/account/settings/settings.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.AccountService,
        shared_1.Principal])
], SettingsComponent);
exports.SettingsComponent = SettingsComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var settings_component_1 = __webpack_require__("./src/main/webapp/app/account/settings/settings.component.ts");
exports.settingsRoute = {
    path: 'settings',
    component: settings_component_1.SettingsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Settings'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var ConcoursePipelinesAdminModule = (function () {
    function ConcoursePipelinesAdminModule() {
    }
    return ConcoursePipelinesAdminModule;
}());
ConcoursePipelinesAdminModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.ConcoursePipelinesSharedModule,
            router_1.RouterModule.forRoot(_1.adminState, { useHash: true })
        ],
        declarations: [
            _1.AuditsComponent,
            _1.UserMgmtComponent,
            _1.UserDialogComponent,
            _1.UserDeleteDialogComponent,
            _1.UserMgmtDetailComponent,
            _1.UserMgmtDialogComponent,
            _1.UserMgmtDeleteDialogComponent,
            _1.LogsComponent,
            _1.JhiConfigurationComponent,
            _1.JhiHealthCheckComponent,
            _1.JhiHealthModalComponent,
            _1.JhiDocsComponent,
            _1.JhiMetricsMonitoringComponent,
            _1.JhiMetricsMonitoringModalComponent
        ],
        entryComponents: [
            _1.UserMgmtDialogComponent,
            _1.UserMgmtDeleteDialogComponent,
            _1.JhiHealthModalComponent,
            _1.JhiMetricsMonitoringModalComponent,
        ],
        providers: [
            _1.AuditsService,
            _1.JhiConfigurationService,
            _1.JhiHealthService,
            _1.JhiMetricsService,
            _1.LogsService,
            _1.UserResolvePagingParams,
            _1.UserResolve,
            _1.UserModalService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], ConcoursePipelinesAdminModule);
exports.ConcoursePipelinesAdminModule = ConcoursePipelinesAdminModule;


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ADMIN_ROUTES = [
    _1.auditsRoute,
    _1.configurationRoute,
    _1.docsRoute,
    _1.healthRoute,
    _1.logsRoute
].concat(_1.userMgmtRoute, [
    _1.metricsRoute
]);
exports.adminState = [{
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [shared_1.UserRouteAccessService],
        children: ADMIN_ROUTES
    }].concat(_1.userDialogRoute);


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audit-data.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AuditData = (function () {
    function AuditData(remoteAddress, sessionId) {
        this.remoteAddress = remoteAddress;
        this.sessionId = sessionId;
    }
    return AuditData;
}());
exports.AuditData = AuditData;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audit.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Audit = (function () {
    function Audit(data, principal, timestamp, type) {
        this.data = data;
        this.principal = principal;
        this.timestamp = timestamp;
        this.type = type;
    }
    return Audit;
}());
exports.Audit = Audit;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"audits\">\n    <h2>Audits</h2>\n\n    <div class=\"row\">\n        <div class=\"col-md-5\">\n            <h4>Filter by date</h4>\n            <p class=\"input-group\">\n                <span class=\"input-group-addon\">from</span>\n                <input type=\"date\" class=\"input-sm form-control\" name=\"start\" [(ngModel)]=\"fromDate\" (ngModelChange)=\"onChangeDate($event)\" required/>\n                <span class=\"input-group-addon\">to</span>\n                <input type=\"date\" class=\"input-sm form-control\" name=\"end\" [(ngModel)]=\"toDate\" (ngModelChange)=\"onChangeDate($event)\" required/>\n            </p>\n        </div>\n    </div>\n\n    <div class=\"table-responsive\">\n        <table class=\"table table-condensed table-striped table-bordered\">\n            <thead>\n            <tr>\n                <th (click)=\"orderProp = 'timestamp'; reverse=!reverse\"><span>Date</span></th>\n                <th (click)=\"orderProp = 'principal'; reverse=!reverse\"><span>User</span></th>\n                <th (click)=\"orderProp = 'type'; reverse=!reverse\"><span>State</span></th>\n                <th (click)=\"orderProp = 'data.message'; reverse=!reverse\"><span>Extra data</span></th>\n            </tr>\n            </thead>\n            <tr *ngFor=\"let audit of getAudits()\">\n                <td><span>{{audit.timestamp| date:'medium'}}</span></td>\n                <td><small>{{audit.principal}}</small></td>\n                <td>{{audit.type}}</td>\n                <td>\n                    <span ng-show=\"audit.data.message\">{{audit.data.message}}</span>\n                    <span ng-show=\"audit.data.remoteAddress\"><span>Remote Address</span> {{audit.data.remoteAddress}}</span>\n                </td>\n            </tr>\n        </table>\n    </div>\n    <div class=\"text-xs-center\" *ngIf=\"audits\">\n        <jhi-item-count [page]=\"page\" [total]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count>\n        <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var ng_jhipster_1 = __webpack_require__(2);
var audits_service_1 = __webpack_require__("./src/main/webapp/app/admin/audits/audits.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var AuditsComponent = (function () {
    function AuditsComponent(auditsService, parseLinks, locale, paginationConfig) {
        this.auditsService = auditsService;
        this.parseLinks = parseLinks;
        this.locale = locale;
        this.paginationConfig = paginationConfig;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.page = 1;
        this.reverse = false;
        this.orderProp = 'timestamp';
        this.datePipe = new common_1.DatePipe(this.locale);
    }
    AuditsComponent.prototype.getAudits = function () {
        return this.sortAudits(this.audits);
    };
    AuditsComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.onChangeDate();
    };
    AuditsComponent.prototype.ngOnInit = function () {
        this.today();
        this.previousMonth();
        this.onChangeDate();
    };
    AuditsComponent.prototype.onChangeDate = function () {
        var _this = this;
        this.auditsService.query({ page: this.page - 1, size: this.itemsPerPage,
            fromDate: this.fromDate, toDate: this.toDate }).subscribe(function (res) {
            _this.audits = res.json();
            _this.links = _this.parseLinks.parse(res.headers.get('link'));
            _this.totalItems = +res.headers.get('X-Total-Count');
        });
    };
    AuditsComponent.prototype.previousMonth = function () {
        var dateFormat = 'yyyy-MM-dd';
        var fromDate = new Date();
        if (fromDate.getMonth() === 0) {
            fromDate = new Date(fromDate.getFullYear() - 1, 11, fromDate.getDate());
        }
        else {
            fromDate = new Date(fromDate.getFullYear(), fromDate.getMonth() - 1, fromDate.getDate());
        }
        this.fromDate = this.datePipe.transform(fromDate, dateFormat);
    };
    AuditsComponent.prototype.today = function () {
        var dateFormat = 'yyyy-MM-dd';
        // Today + 1 day - needed if the current day must be included
        var today = new Date();
        var date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        this.toDate = this.datePipe.transform(date, dateFormat);
    };
    AuditsComponent.prototype.sortAudits = function (audits) {
        var _this = this;
        audits = audits.slice(0).sort(function (a, b) {
            if (a[_this.orderProp] < b[_this.orderProp]) {
                return -1;
            }
            else if (true) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return this.reverse ? audits.reverse() : audits;
    };
    return AuditsComponent;
}());
AuditsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-audit',
        template: __webpack_require__("./src/main/webapp/app/admin/audits/audits.component.html")
    }),
    __param(2, core_1.Inject(core_1.LOCALE_ID)),
    __metadata("design:paramtypes", [audits_service_1.AuditsService,
        ng_jhipster_1.ParseLinks, String, uib_pagination_config_1.PaginationConfig])
], AuditsComponent);
exports.AuditsComponent = AuditsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var audits_component_1 = __webpack_require__("./src/main/webapp/app/admin/audits/audits.component.ts");
exports.auditsRoute = {
    path: 'audits',
    component: audits_component_1.AuditsComponent,
    data: {
        pageTitle: 'Audits'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var AuditsService = (function () {
    function AuditsService(http) {
        this.http = http;
    }
    AuditsService.prototype.query = function (req) {
        var params = new http_1.URLSearchParams();
        params.set('fromDate', req.fromDate);
        params.set('toDate', req.toDate);
        params.set('page', req.page);
        params.set('size', req.size);
        params.set('sort', req.sort);
        var options = {
            search: params
        };
        return this.http.get('management/audits', options);
    };
    return AuditsService;
}());
AuditsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuditsService);
exports.AuditsService = AuditsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allConfiguration && configuration\">\n    <h2>Configuration</h2>\n\n    <span>Filter (by prefix)</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\">\n    <label>Spring configuration</label>\n    <table class=\"table table-sm table-striped table-bordered table-responsive\"\n        style=\"table-layout:fixed\">\n        <thead>\n        <tr class=\"row\">\n            <th class=\"col-sm-4\" (click)=\"orderProp = 'prefix'; reverse=!reverse\"><span>Prefix</span></th>\n            <th class=\"col-sm-8\" (click)=\"orderProp = 'properties'; reverse=!reverse\">Properties</th>\n        </tr>\n        </thead>\n\n        <tr *ngFor=\"let entry of (configuration | pureFilter:filter:'prefix' | orderBy:orderProp:reverse)\">\n            <td><span>{{entry.prefix}}</span></td>\n            <td>\n                <div class=\"row\" *ngFor=\"let key of keys(entry.properties)\">\n                    <div class=\"col-md-4\">{{key}}</div>\n                    <div class=\"col-md-8\">\n                        <span class=\"float-xs-right tag tag-default break\">{{entry.properties[key]}}</span>\n                    </div>\n                </div>\n            </td>\n        </tr>\n    </table>\n    <div *ngFor=\"let key of keys(allConfiguration)\">\n        <label><span>{{key}}</span></label>\n        <table class=\"table table-sm table-striped table-bordered table-responsive\"\n               style=\"table-layout:fixed\">\n            <thead>\n            <tr class=\"row\">\n                <th class=\"col-sm-4\">Property</th>\n                <th class=\"col-sm-8\">Value</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of allConfiguration[key]\">\n                <td class=\"break\">{{item.key}}</td>\n                <td class=\"break\">\n                    <span class=\"float-xs-right tag tag-default break\">{{item.val}}</span>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var configuration_service_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts");
var JhiConfigurationComponent = (function () {
    function JhiConfigurationComponent(configurationService) {
        this.configurationService = configurationService;
        this.allConfiguration = null;
        this.configuration = null;
        this.configKeys = [];
        this.filter = '';
        this.orderProp = 'prefix';
        this.reverse = false;
    }
    JhiConfigurationComponent.prototype.keys = function (dict) {
        return (dict === undefined) ? [] : Object.keys(dict);
    };
    JhiConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configurationService.get().subscribe(function (configuration) {
            _this.configuration = configuration;
            for (var _i = 0, configuration_1 = configuration; _i < configuration_1.length; _i++) {
                var config = configuration_1[_i];
                if (config.properties !== undefined) {
                    _this.configKeys.push(Object.keys(config.properties));
                }
            }
        });
        this.configurationService.getEnv().subscribe(function (configuration) {
            _this.allConfiguration = configuration;
        });
    };
    return JhiConfigurationComponent;
}());
JhiConfigurationComponent = __decorate([
    core_1.Component({
        selector: 'jhi-configuration',
        template: __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.html")
    }),
    __metadata("design:paramtypes", [configuration_service_1.JhiConfigurationService])
], JhiConfigurationComponent);
exports.JhiConfigurationComponent = JhiConfigurationComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var configuration_component_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts");
exports.configurationRoute = {
    path: 'jhi-configuration',
    component: configuration_component_1.JhiConfigurationComponent,
    data: {
        pageTitle: 'Configuration'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var JhiConfigurationService = (function () {
    function JhiConfigurationService(http) {
        this.http = http;
    }
    JhiConfigurationService.prototype.get = function () {
        return this.http.get('management/configprops').map(function (res) {
            var properties = [];
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    properties.push(propertiesObject[key]);
                }
            }
            return properties.sort(function (propertyA, propertyB) {
                return (propertyA.prefix === propertyB.prefix) ? 0 :
                    (propertyA.prefix < propertyB.prefix) ? -1 : 1;
            });
        });
    };
    JhiConfigurationService.prototype.getEnv = function () {
        return this.http.get('management/env').map(function (res) {
            var properties = {};
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    var valsObject = propertiesObject[key];
                    var vals = [];
                    for (var valKey in valsObject) {
                        if (valsObject.hasOwnProperty(valKey)) {
                            vals.push({ key: valKey, val: valsObject[valKey] });
                        }
                    }
                    properties[key] = vals;
                }
            }
            return properties;
        });
    };
    return JhiConfigurationService;
}());
JhiConfigurationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiConfigurationService);
exports.JhiConfigurationService = JhiConfigurationService;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe src=\"swagger-ui/index.html\" width=\"100%\" height=\"900\"\n    target=\"_top\" title=\"Swagger UI\"></iframe>\n"

/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var JhiDocsComponent = (function () {
    function JhiDocsComponent() {
    }
    return JhiDocsComponent;
}());
JhiDocsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-docs',
        template: __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.html")
    }),
    __metadata("design:paramtypes", [])
], JhiDocsComponent);
exports.JhiDocsComponent = JhiDocsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var docs_component_1 = __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts");
exports.docsRoute = {
    path: 'docs',
    component: docs_component_1.JhiDocsComponent,
    data: {
        pageTitle: 'API'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\" (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">&times;</span>\n    </button>\n    <h4 class=\"modal-title\" id=\"showHealthLabel\"><span class=\"text-capitalize\">{{ baseName(currentHealth.name) }}</span>\n        {{subSystemName(currentHealth.name)}}\n    </h4>\n</div>\n<div class=\"modal-body pad\">\n    <div *ngIf=\"currentHealth.details\">\n        <h4>Properties</h4>\n        <div class=\"table-responsive\">\n            <table class=\"table table-striped\">\n                <thead>\n                    <tr class=\"row\">\n                        <th class=\"col-md-6 text-xs-left\">Name</th>\n                        <th class=\"col-md-6 text-xs-left\">Value</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let entry of currentHealth.details | keys\">\n                        <td class=\"col-md-6 text-xs-left\">{{entry.key}}</td>\n                        <td class=\"col-md-6 text-xs-left\">{{readableValue(entry.value)}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div *ngIf=\"currentHealth.error\">\n        <h4>Error</h4>\n            <pre>{{currentHealth.error}}</pre>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button data-dismiss=\"modal\" class=\"btn btn-secondary float-xs-left\" type=\"button\" (click)=\"activeModal.dismiss('closed')\">Done</button>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var JhiHealthModalComponent = (function () {
    function JhiHealthModalComponent(healthService, activeModal) {
        this.healthService = healthService;
        this.activeModal = activeModal;
    }
    JhiHealthModalComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthModalComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    JhiHealthModalComponent.prototype.readableValue = function (value) {
        if (this.currentHealth.name !== 'diskSpace') {
            return value.toString();
        }
        // Should display storage space in an human readable unit
        var val = value / 1073741824;
        if (val > 1) {
            return val.toFixed(2) + ' GB';
        }
        else {
            return (value / 1048576).toFixed(2) + ' MB';
        }
    };
    return JhiHealthModalComponent;
}());
JhiHealthModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.html")
    }),
    __metadata("design:paramtypes", [health_service_1.JhiHealthService, ng_bootstrap_1.NgbActiveModal])
], JhiHealthModalComponent);
exports.JhiHealthModalComponent = JhiHealthModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>\n        <span>Health Checks</span>\n        <button class=\"btn btn-primary float-xs-right\" (click)=\"refresh()\">\n            <span class=\"fa fa-refresh\"></span> <span>Refresh</span>\n        </button>\n    </h2>\n    <div class=\"table-responsive\">\n        <table id=\"healthCheck\" class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th class=\"col-md-7\">Service Name</th>\n                    <th class=\"col-md-2 text-xs-center\">Status</th>\n                    <th class=\"col-md-2 text-xs-center\">Details</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let health of healthData\">\n                    <td><span class=\"text-capitalize\">{{ baseName(health.name) }}</span> {{subSystemName(health.name)}}</td>\n                    <td class=\"text-xs-center\">\n                        <span class=\"tag\" [ngClass]=\"getTagClass(health.status)\">\n                            {{health.status}}\n                        </span>\n                    </td>\n                    <td class=\"text-xs-center\">\n                        <a class=\"hand\" (click)=\"showHealth(health)\" *ngIf=\"health.details || health.error\">\n                            <i class=\"fa fa-eye\"></i>\n                        </a>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var health_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts");
var JhiHealthCheckComponent = (function () {
    function JhiHealthCheckComponent(modalService, healthService) {
        this.modalService = modalService;
        this.healthService = healthService;
    }
    JhiHealthCheckComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiHealthCheckComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthCheckComponent.prototype.getTagClass = function (statusState) {
        if (statusState === 'UP') {
            return 'tag-success';
        }
        else {
            return 'tag-danger';
        }
    };
    JhiHealthCheckComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingHealth = true;
        this.healthService.checkHealth().subscribe(function (health) {
            _this.healthData = _this.healthService.transformHealthData(health);
            _this.updatingHealth = false;
        });
    };
    JhiHealthCheckComponent.prototype.showHealth = function (health) {
        var modalRef = this.modalService.open(health_modal_component_1.JhiHealthModalComponent);
        modalRef.componentInstance.currentHealth = health;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
        }, function (reason) {
            console.log("Dismissed " + reason);
        });
    };
    JhiHealthCheckComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    return JhiHealthCheckComponent;
}());
JhiHealthCheckComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health.component.html"),
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        health_service_1.JhiHealthService])
], JhiHealthCheckComponent);
exports.JhiHealthCheckComponent = JhiHealthCheckComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var health_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.component.ts");
exports.healthRoute = {
    path: 'jhi-health',
    component: health_component_1.JhiHealthCheckComponent,
    data: {
        pageTitle: 'Health Checks'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var JhiHealthService = (function () {
    function JhiHealthService(http) {
        this.http = http;
        this.separator = '.';
    }
    JhiHealthService.prototype.checkHealth = function () {
        return this.http.get('management/health').map(function (res) { return res.json(); });
    };
    JhiHealthService.prototype.transformHealthData = function (data) {
        var response = [];
        this.flattenHealthData(response, null, data);
        return response;
    };
    JhiHealthService.prototype.getBaseName = function (name) {
        if (name) {
            var split = name.split('.');
            return split[0];
        }
    };
    JhiHealthService.prototype.getSubSystemName = function (name) {
        if (name) {
            var split = name.split('.');
            split.splice(0, 1);
            var remainder = split.join('.');
            return remainder ? ' - ' + remainder : '';
        }
    };
    /* private methods */
    JhiHealthService.prototype.addHealthObject = function (result, isLeaf, healthObject, name) {
        var status;
        var error;
        var healthData = {
            'name': name,
            'error': error,
            'status': status
        };
        var details = {};
        var hasDetails = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (key === 'status' || key === 'error') {
                    healthData[key] = value;
                }
                else {
                    if (!this.isHealthObject(value)) {
                        details[key] = value;
                        hasDetails = true;
                    }
                }
            }
        }
        // Add the details
        if (hasDetails) {
            healthData.details = details;
        }
        // Only add nodes if they provide additional information
        if (isLeaf || hasDetails || healthData.error) {
            result.push(healthData);
        }
        return healthData;
    };
    JhiHealthService.prototype.flattenHealthData = function (result, path, data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var value = data[key];
                if (this.isHealthObject(value)) {
                    if (this.hasSubSystem(value)) {
                        this.addHealthObject(result, false, value, this.getModuleName(path, key));
                        this.flattenHealthData(result, this.getModuleName(path, key), value);
                    }
                    else {
                        this.addHealthObject(result, true, value, this.getModuleName(path, key));
                    }
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.getModuleName = function (path, name) {
        var result;
        if (path && name) {
            result = path + this.separator + name;
        }
        else if (path) {
            result = path;
        }
        else if (name) {
            result = name;
        }
        else {
            result = '';
        }
        return result;
    };
    JhiHealthService.prototype.hasSubSystem = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (value && value.status) {
                    result = true;
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.isHealthObject = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                if (key === 'status') {
                    result = true;
                }
            }
        }
        return result;
    };
    return JhiHealthService;
}());
JhiHealthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiHealthService);
exports.JhiHealthService = JhiHealthService;


/***/ }),

/***/ "./src/main/webapp/app/admin/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audit.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audit-data.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/admin.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/log.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Log = (function () {
    function Log(name, level) {
        this.name = name;
        this.level = level;
    }
    return Log;
}());
exports.Log = Log;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\" *ngIf=\"loggers\">\n    <h2>Logs</h2>\n\n    <p>There are {{ loggers.length }} loggers.</p>\n\n    <span>Filter</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\">\n\n    <table class=\"table table-condensed table-striped table-bordered\">\n        <thead>\n        <tr title=\"click to order\">\n            <th (click)=\"orderProp = 'name'; reverse=!reverse\"><span>Name</span></th>\n            <th (click)=\"orderProp = 'level'; reverse=!reverse\"><span>Level</span></th>\n        </tr>\n        </thead>\n\n        <tr *ngFor=\"let logger of (loggers | pureFilter:filter:'name' | orderBy:orderProp:reverse)\">\n            <td><small>{{logger.name | slice:0:140}}</small></td>\n            <td>\n                <button (click)=\"changeLevel(logger.name, 'TRACE')\" [ngClass]=\"(logger.level=='TRACE') ? 'btn-danger' : 'btn-secondary'\" class=\"btn btn-sm\">TRACE</button>\n                <button (click)=\"changeLevel(logger.name, 'DEBUG')\" [ngClass]=\"(logger.level=='DEBUG') ? 'btn-warning' : 'btn-secondary'\" class=\"btn btn-sm\">DEBUG</button>\n                <button (click)=\"changeLevel(logger.name, 'INFO')\" [ngClass]=\"(logger.level=='INFO') ? 'btn-info' : 'btn-secondary'\" class=\"btn btn-sm\">INFO</button>\n                <button (click)=\"changeLevel(logger.name, 'WARN')\" [ngClass]=\"(logger.level=='WARN') ? 'btn-success' : 'btn-secondary'\" class=\"btn btn-sm\">WARN</button>\n                <button (click)=\"changeLevel(logger.name, 'ERROR')\" [ngClass]=\"(logger.level=='ERROR') ? 'btn-primary' : 'btn-secondary'\" class=\"btn btn-sm\">ERROR</button>\n            </td>\n        </tr>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var log_model_1 = __webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts");
var logs_service_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts");
var LogsComponent = (function () {
    function LogsComponent(logsService) {
        this.logsService = logsService;
        this.filter = '';
        this.orderProp = 'name';
        this.reverse = false;
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
    };
    LogsComponent.prototype.changeLevel = function (name, level) {
        var _this = this;
        var log = new log_model_1.Log(name, level);
        this.logsService.changeLevel(log).subscribe(function () {
            _this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
        });
    };
    return LogsComponent;
}());
LogsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-logs',
        template: __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.html"),
    }),
    __metadata("design:paramtypes", [logs_service_1.LogsService])
], LogsComponent);
exports.LogsComponent = LogsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var logs_component_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts");
exports.logsRoute = {
    path: 'logs',
    component: logs_component_1.LogsComponent,
    data: {
        pageTitle: 'Logs'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var LogsService = (function () {
    function LogsService(http) {
        this.http = http;
    }
    LogsService.prototype.changeLevel = function (log) {
        return this.http.put('management/logs', log);
    };
    LogsService.prototype.findAll = function () {
        return this.http.get('management/logs').map(function (res) { return res.json(); });
    };
    return LogsService;
}());
LogsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LogsService);
exports.LogsService = LogsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Modal used to display the threads dump -->\n<div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" (click)=\"activeModal.dismiss('closed')\">&times;</button>\n    <h4 class=\"modal-title\">Threads dump</h4>\n</div>\n<div class=\"modal-body pad\">\n    <span class=\"tag tag-primary\" (click)=\"threadDumpFilter = {}\">All&nbsp;<span class=\"tag-pill\">{{threadDumpAll}}</span></span>&nbsp;\n    <span class=\"tag tag-success\" (click)=\"threadDumpFilter = {threadState: 'RUNNABLE'}\">Runnable&nbsp;<span class=\"tag-pill\">{{threadDumpRunnable}}</span></span>&nbsp;\n    <span class=\"tag tag-info\" (click)=\"threadDumpFilter = {threadState: 'WAITING'}\">Waiting&nbsp;<span class=\"tag-pill\">{{threadDumpWaiting}}</span></span>&nbsp;\n    <span class=\"tag tag-warning\" (click)=\"threadDumpFilter = {threadState: 'TIMED_WAITING'}\">Timed Waiting&nbsp;<span class=\"tag-pill\">{{threadDumpTimedWaiting}}</span></span>&nbsp;\n    <span class=\"tag tag-danger\" (click)=\"threadDumpFilter = {threadState: 'BLOCKED'}\">Blocked&nbsp;<span class=\"tag-pill\">{{threadDumpBlocked}}</span></span>&nbsp;\n    <div class=\"voffset2\">&nbsp;</div>\n    Filter\n    <input type=\"text\" [(ngModel)]=\"threadDumpFilter\" class=\"form-control\">\n    <div class=\"row pad\" *ngFor=\"let entry of threadDump | pureFilter:threadDumpFilter:'lockName' | keys\">\n        <h5><span class=\"tag\" [ngClass]=\"getTagClass(entry.value.threadState)\">{{entry.value.threadState}}</span>&nbsp;{{entry.value.threadName}} (ID {{entry.value.threadId}})\n            <a (click)=\"entry.show = !entry.show\" href=\"javascript:void(0);\">\n               <span [hidden]=\"entry.show\">Show StackTrace</span>\n               <span [hidden]=\"!entry.show\">Hide StackTrace</span>\n            </a>\n        </h5>\n        <div class=\"well\" [hidden]=\"!entry.show\">\n            <div *ngFor=\"let st of entry.value.stackTrace | keys\">\n                {{st.value.className}}.{{st.value.methodName}}({{st.value.fileName}}:{{st.value.lineNumber}})\n                <span class=\"voffset1\"></span>\n            </div>\n        </div>\n        <table class=\"table table-sm table-responsive\">\n            <thead>\n                <tr>\n                    <th class=\"text-xs-right\">Blocked Time</th>\n                    <th class=\"text-xs-right\">Blocked Count</th>\n                    <th class=\"text-xs-right\">Waited Time</th>\n                    <th class=\"text-xs-right\">Waited Count</th>\n                    <th>Lock Name</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>{{entry.value.blockedTime}}</td>\n                    <td>{{entry.value.blockedCount}}</td>\n                    <td>{{entry.value.waitedTime}}</td>\n                    <td>{{entry.value.waitedCount}}</td>\n                    <td>{{entry.value.lockName}}</td>\n                </tr>\n            </tbody>\n        </table>\n\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary  pull-left\" data-dismiss=\"modal\" (click)=\"activeModal.dismiss('closed')\">Done</button>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var JhiMetricsMonitoringModalComponent = (function () {
    function JhiMetricsMonitoringModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.threadDumpAll = 0;
        this.threadDumpBlocked = 0;
        this.threadDumpRunnable = 0;
        this.threadDumpTimedWaiting = 0;
        this.threadDumpWaiting = 0;
    }
    JhiMetricsMonitoringModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadDump.forEach(function (value) {
            if (value.threadState === 'RUNNABLE') {
                _this.threadDumpRunnable += 1;
            }
            else if (value.threadState === 'WAITING') {
                _this.threadDumpWaiting += 1;
            }
            else if (value.threadState === 'TIMED_WAITING') {
                _this.threadDumpTimedWaiting += 1;
            }
            else if (value.threadState === 'BLOCKED') {
                _this.threadDumpBlocked += 1;
            }
        });
        this.threadDumpAll = this.threadDumpRunnable + this.threadDumpWaiting +
            this.threadDumpTimedWaiting + this.threadDumpBlocked;
    };
    JhiMetricsMonitoringModalComponent.prototype.getTagClass = function (threadState) {
        if (threadState === 'RUNNABLE') {
            return 'tag-success';
        }
        else if (threadState === 'WAITING') {
            return 'tag-info';
        }
        else if (threadState === 'TIMED_WAITING') {
            return 'tag-warning';
        }
        else if (threadState === 'BLOCKED') {
            return 'tag-danger';
        }
    };
    return JhiMetricsMonitoringModalComponent;
}());
JhiMetricsMonitoringModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], JhiMetricsMonitoringModalComponent);
exports.JhiMetricsMonitoringModalComponent = JhiMetricsMonitoringModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>\n        <span>Application Metrics</span>\n        <button class=\"btn btn-primary float-xs-right\" (click)=\"refresh()\">\n            <span class=\"fa fa-refresh\"></span> <span>Refresh</span>\n        </button>\n    </h2>\n\n    <h3>JVM Metrics</h3>\n    <div class=\"row\" *ngIf=\"!updatingMetrics\">\n        <div class=\"col-md-4\">\n            <b>Memory</b>\n            <p><span>Total Memory</span> ({{metrics.gauges['jvm.memory.total.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.total.max'].value / 1000000 | number:'1.0-0'}}M)</p>\n            <ngb-progressbar type=\"success\" [max]=\"metrics.gauges['jvm.memory.total.max'].value\" [value]=\"metrics.gauges['jvm.memory.total.used'].value\" [striped]=\"true\" [animated]=\"true\">\n                <span>{{metrics.gauges['jvm.memory.total.used'].value * 100 / metrics.gauges['jvm.memory.total.max'].value  | number:'1.0-0'}}%</span>\n            </ngb-progressbar>\n            <p><span>Heap Memory</span> ({{metrics.gauges['jvm.memory.heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.heap.max'].value / 1000000 | number:'1.0-0'}}M)</p>\n            <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.heap.max'].value\" [value]=\"metrics.gauges['jvm.memory.heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\">\n                <span>{{metrics.gauges['jvm.memory.heap.used'].value * 100 / metrics.gauges['jvm.memory.heap.max'].value  | number:'1.0-0'}}%</span>\n            </ngb-progressbar>\n            <p><span>Non-Heap Memory</span> ({{metrics.gauges['jvm.memory.non-heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.non-heap.committed'].value / 1000000 | number:'1.0-0'}}M)</p>\n            <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.non-heap.committed'].value\" [value]=\"metrics.gauges['jvm.memory.non-heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\">\n                <span>{{metrics.gauges['jvm.memory.non-heap.used'].value * 100 / metrics.gauges['jvm.memory.non-heap.committed'].value  | number:'1.0-0'}}%</span>\n            </ngb-progressbar>\n        </div>\n        <div class=\"col-md-4\">\n            <b>Threads</b> (Total: {{metrics.gauges['jvm.threads.count'].value}}) <a class=\"hand\" (click)=\"refreshThreadDumpData()\" data-toggle=\"modal\" data-target=\"#threadDump\"><i class=\"fa fa-eye\"></i></a>\n            <p><span>Runnable</span> {{metrics.gauges['jvm.threads.runnable.count'].value}}</p>\n            <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.runnable.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\">\n                <span>{{metrics.gauges['jvm.threads.runnable.count'].value * 100 / metrics.gauges['jvm.threads.count'].value  | number:'1.0-0'}}%</span>\n            </ngb-progressbar>\n            <p><span>Timed Waiting</span> ({{metrics.gauges['jvm.threads.timed_waiting.count'].value}})</p>\n            <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.timed_waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\">\n                <span>{{metrics.gauges['jvm.threads.timed_waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value  | number:'1.0-0'}}%</span>\n            </ngb-progressbar>\n            <p><span>Waiting</span> ({{metrics.gauges['jvm.threads.waiting.count'].value}})</p>\n            <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\">\n                <span>{{metrics.gauges['jvm.threads.waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value  | number:'1.0-0'}}%</span>\n            </ngb-progressbar>\n            <p><span>Blocked</span> ({{metrics.gauges['jvm.threads.blocked.count'].value}})</p>\n            <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.blocked.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\">\n                <span>{{metrics.gauges['jvm.threads.blocked.count'].value * 100 / metrics.gauges['jvm.threads.count'].value  | number:'1.0-0'}}%</span>\n            </ngb-progressbar>\n        </div>\n        <div class=\"col-md-4\">\n            <b>Garbage collections</b>\n            <div class=\"row\">\n                <div class=\"col-md-9\">Mark Sweep count</div>\n                <div class=\"col-md-3 text-xs-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.count'].value}}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-9\">Mark Sweep time</div>\n                <div class=\"col-md-3 text-xs-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.time'].value}}ms</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-9\">Scavenge count</div>\n                <div class=\"col-md-3 text-xs-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.count'].value}}</div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-9\">Scavenge time</div>\n                <div class=\"col-md-3 text-xs-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.time'].value}}ms</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"well well-lg\" *ngIf=\"updatingMetrics\">Updating...</div>\n\n    <h3>HTTP requests (events per second)</h3>\n    <p *ngIf=\"metrics.counters\">\n        <span>Active requests</span> <b>{{metrics.counters['com.codahale.metrics.servlet.InstrumentedFilter.activeRequests'].count | number:'1.0-0'}}</b> - <span>Total requests</span> <b>{{metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count | number:'1.0-0'}}</b>\n    </p>\n    <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\">\n        <table class=\"table table-striped\">\n            <thead>\n            <tr>\n                <th>Code</th>\n                <th>Count</th>\n                <th class=\"text-xs-right\">Mean</th>\n                <th class=\"text-xs-right\"><span>Average</span> (1 min)</th>\n                <th class=\"text-xs-right\"><span>Average</span> (5 min)</th>\n                <th class=\"text-xs-right\"><span>Average</span> (15 min)</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n                <td>OK</td>\n                <td>\n                    <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\">\n                        <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count}}</span>\n                    </ngb-progressbar>\n                </td>\n                <td class=\"text-xs-right\">\n                    {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].mean_rate | number:'1.0-2'}}\n                </td>\n                <td class=\"text-xs-right\">{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m1_rate | number:'1.0-2'}}\n                </td>\n                <td class=\"text-xs-right\">{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m5_rate | number:'1.0-2'}}\n                </td>\n                <td class=\"text-xs-right\">\n                    {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m15_rate | number:'1.0-2'}}\n                </td>\n            </tr>\n            <tr>\n                <td>Not Found</td>\n                <td>\n                    <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\">\n                        <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count}}</span>\n                    </ngb-progressbar>\n                </td>\n                <td class=\"text-xs-right\">\n                    {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].mean_rate | number:'1.0-2'}}\n                </td>\n                <td class=\"text-xs-right\">\n                    {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m1_rate | number:'1.0-2'}}\n                </td>\n                <td class=\"text-xs-right\">\n                    {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m5_rate | number:'1.0-2'}}\n                </td>\n                <td class=\"text-xs-right\">\n                    {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m15_rate | number:'1.0-2'}}\n                </td>\n            </tr>\n            <tr>\n                <td>Server error</td>\n                <td>\n                    <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\">\n                        <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count}}</span>\n                    </ngb-progressbar>\n                </td>\n                <td class=\"text-xs-right\">\n                    {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].mean_rate | number:'1.0-2'}}\n                </td>\n                <td class=\"text-xs-right\">\n                    {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m1_rate | number:'1.0-2'}}\n                </td>\n                <td class=\"text-xs-right\">\n                    {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m5_rate | number:'1.0-2'}}\n                </td>\n                <td class=\"text-xs-right\">\n                    {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m15_rate | number:'1.0-2'}}\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <h3>Services statistics (time in millisecond)</h3>\n    <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\">\n        <table class=\"table table-striped\">\n            <thead>\n            <tr>\n                <th>Service name</th>\n                <th class=\"text-xs-right\">Count</th>\n                <th class=\"text-xs-right\">Mean</th>\n                <th class=\"text-xs-right\">Min</th>\n                <th class=\"text-xs-right\">p50</th>\n                <th class=\"text-xs-right\">p75</th>\n                <th class=\"text-xs-right\">p95</th>\n                <th class=\"text-xs-right\">p99</th>\n                <th class=\"text-xs-right\">Max</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let entry of servicesStats | keys\">\n                <td>{{entry.key}}</td>\n                <td class=\"text-xs-right\">{{entry.value.count}}</td>\n                <td class=\"text-xs-right\">{{entry.value.mean * 1000 | number:'1.0-0'}}</td>\n                <td class=\"text-xs-right\">{{entry.value.min * 1000 | number:'1.0-0'}}</td>\n                <td class=\"text-xs-right\">{{entry.value.p50 * 1000 | number:'1.0-0'}}</td>\n                <td class=\"text-xs-right\">{{entry.value.p75 * 1000 | number:'1.0-0'}}</td>\n                <td class=\"text-xs-right\">{{entry.value.p95 * 1000 | number:'1.0-0'}}</td>\n                <td class=\"text-xs-right\">{{entry.value.p99 * 1000 | number:'1.0-0'}}</td>\n                <td class=\"text-xs-right\">{{entry.value.max * 1000 | number:'1.0-0'}}</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n    \n    <h3>Cache statistics</h3>\n    <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\">\n        <table class=\"table table-striped\">\n            <thead>\n            <tr>\n                <th>Cache name</th>\n                <th class=\"text-xs-right\">Cache Hits</th>\n                <th class=\"text-xs-right\">Cache Misses</th>\n                <th class=\"text-xs-right\">Cache Gets</th>\n                <th class=\"text-xs-right\">Cache Puts</th>\n                <th class=\"text-xs-right\">Cache Removals</th>\n                <th class=\"text-xs-right\">Cache Evictions</th>\n                <th class=\"text-xs-right\">Cache Hit %</th>\n                <th class=\"text-xs-right\">Cache Miss %</th>\n                <th class=\"text-xs-right\">Average get time (µs)</th>\n                <th class=\"text-xs-right\">Average put time (µs)</th>\n                <th class=\"text-xs-right\">Average remove time (µs)</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let entry of cachesStats | keys\">\n                <td>{{entry.key}}</td>\n                <td class=\"text-xs-right\">{{metrics.gauges[entry.key + '.cache-hits'].value}}</td>\n                <td class=\"text-xs-right\">{{metrics.gauges[entry.key + '.cache-misses'].value}}</td>\n                <td class=\"text-xs-right\">{{metrics.gauges[entry.key + '.cache-gets'].value}}</td>\n                <td class=\"text-xs-right\">{{metrics.gauges[entry.key + '.cache-puts'].value}}</td>\n                <td class=\"text-xs-right\">{{metrics.gauges[entry.key + '.cache-removals'].value}}</td>\n                <td class=\"text-xs-right\">{{metrics.gauges[entry.key + '.cache-evictions'].value}}</td>\n                <td class=\"text-xs-right\">{{metrics.gauges[entry.key + '.cache-hit-percentage'].value}}</td>\n                <td class=\"text-xs-right\">{{metrics.gauges[entry.key + '.cache-miss-percentage'].value }}</td>\n                <td class=\"text-xs-right\">{{metrics.gauges[entry.key + '.average-get-time'].value  | number : '1.2-2' }}</td>\n                <td class=\"text-xs-right\">{{metrics.gauges[entry.key + '.average-put-time'].value  | number : '1.2-2'}}</td>\n                <td class=\"text-xs-right\">{{metrics.gauges[entry.key + '.average-remove-time'].value | number : '1.2-2' }}</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n    \n    <h3 *ngIf=\"metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\">DataSource statistics (time in millisecond)</h3>\n    <div class=\"table-responsive\" *ngIf=\"!updatingMetrics && metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\">\n        <table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th><span>Usage</span> ({{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value}} / {{metrics.gauges['HikariPool-1.pool.TotalConnections'].value}})</th>\n                    <th class=\"text-xs-right\">Count</th>\n                    <th class=\"text-xs-right\">Mean</th>\n                    <th class=\"text-xs-right\">Min</th>\n                    <th class=\"text-xs-right\">p50</th>\n                    <th class=\"text-xs-right\">p75</th>\n                    <th class=\"text-xs-right\">p95</th>\n                    <th class=\"text-xs-right\">p99</th>\n                    <th class=\"text-xs-right\">Max</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>\n                        <div class=\"progress progress-striped\">\n                            <ngb-progressbar [max]=\"metrics.gauges['HikariPool-1.pool.TotalConnections'].value\" [value]=\"metrics.gauges['HikariPool-1.pool.ActiveConnections'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\">\n                                <span>{{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value * 100 / metrics.gauges['HikariPool-1.pool.TotalConnections'].value  | number:'1.0-0'}}%</span>\n                            </ngb-progressbar>\n                        </div>\n                    </td>\n                    <td class=\"text-xs-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].count}}</td>\n                    <td class=\"text-xs-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].mean | number:'1.0-2'}}</td>\n                    <td class=\"text-xs-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].min | number:'1.0-2'}}</td>\n                    <td class=\"text-xs-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].p50 | number:'1.0-2'}}</td>\n                    <td class=\"text-xs-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].p75 | number:'1.0-2'}}</td>\n                    <td class=\"text-xs-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].p95 | number:'1.0-2'}}</td>\n                    <td class=\"text-xs-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].p99 | number:'1.0-2'}}</td>\n                    <td class=\"text-xs-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].max | number:'1.0-2'}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var metrics_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts");
var metrics_service_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts");
var JhiMetricsMonitoringComponent = (function () {
    function JhiMetricsMonitoringComponent(modalService, metricsService) {
        this.modalService = modalService;
        this.metricsService = metricsService;
        this.metrics = {};
        this.cachesStats = {};
        this.servicesStats = {};
        this.updatingMetrics = true;
        this.JCACHE_KEY = 'jcache.statistics';
    }
    JhiMetricsMonitoringComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiMetricsMonitoringComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingMetrics = true;
        this.metricsService.getMetrics().subscribe(function (metrics) {
            _this.metrics = metrics;
            _this.updatingMetrics = false;
            _this.servicesStats = {};
            _this.cachesStats = {};
            Object.keys(metrics.timers).forEach(function (key) {
                var value = metrics.timers[key];
                if (key.indexOf('web.rest') !== -1 || key.indexOf('service') !== -1) {
                    _this.servicesStats[key] = value;
                }
            });
            Object.keys(metrics.gauges).forEach(function (key) {
                if (key.indexOf('jcache.statistics') !== -1) {
                    var value = metrics.gauges[key].value;
                    // remove gets or puts
                    var index = key.lastIndexOf('.');
                    var newKey = key.substr(0, index);
                    // Keep the name of the domain
                    _this.cachesStats[newKey] = {
                        'name': _this.JCACHE_KEY.length,
                        'value': value
                    };
                }
            });
        });
    };
    JhiMetricsMonitoringComponent.prototype.refreshThreadDumpData = function () {
        var _this = this;
        this.metricsService.threadDump().subscribe(function (data) {
            var modalRef = _this.modalService.open(metrics_modal_component_1.JhiMetricsMonitoringModalComponent, { size: 'lg' });
            modalRef.componentInstance.threadDump = data;
            modalRef.result.then(function (result) {
                console.log("Closed with: " + result);
            }, function (reason) {
                console.log("Dismissed " + reason);
            });
        });
    };
    return JhiMetricsMonitoringComponent;
}());
JhiMetricsMonitoringComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.html"),
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        metrics_service_1.JhiMetricsService])
], JhiMetricsMonitoringComponent);
exports.JhiMetricsMonitoringComponent = JhiMetricsMonitoringComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var metrics_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts");
exports.metricsRoute = {
    path: 'jhi-metrics',
    component: metrics_component_1.JhiMetricsMonitoringComponent,
    data: {
        pageTitle: 'Application Metrics'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var JhiMetricsService = (function () {
    function JhiMetricsService(http) {
        this.http = http;
    }
    JhiMetricsService.prototype.getMetrics = function () {
        return this.http.get('management/metrics').map(function (res) { return res.json(); });
    };
    JhiMetricsService.prototype.threadDump = function () {
        return this.http.get('management/dump').map(function (res) { return res.json(); });
    };
    return JhiMetricsService;
}());
JhiMetricsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiMetricsService);
exports.JhiMetricsService = JhiMetricsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"deleteForm\" (ngSubmit)=\"confirmDelete(user.login)\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"\n                (click)=\"clear()\">&times;</button>\n        <h4 class=\"modal-title\">Confirm delete operation</h4>\n    </div>\n    <div class=\"modal-body\">\n        <jhi-alert-error></jhi-alert-error>\n        <p>Are you sure you want to delete this User?</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\">\n            <span class=\"fa fa-ban\"></span>&nbsp;<span>Cancel</span>\n        </button>\n        <button type=\"submit\" class=\"btn btn-danger\">\n            <span class=\"fa fa-remove\"></span>&nbsp;<span>Delete</span>\n        </button>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var ng_bootstrap_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(2);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var user_modal_service_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts");
var UserMgmtDeleteDialogComponent = (function () {
    function UserMgmtDeleteDialogComponent(userService, activeModal, eventManager, router) {
        this.userService = userService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.router = router;
    }
    UserMgmtDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    UserMgmtDeleteDialogComponent.prototype.confirmDelete = function (login) {
        var _this = this;
        this.userService.delete(login).subscribe(function (response) {
            _this.eventManager.broadcast({ name: 'userListModification',
                content: 'Deleted a user' });
            _this.activeModal.dismiss(true);
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
        });
    };
    return UserMgmtDeleteDialogComponent;
}());
UserMgmtDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-delete-dialog',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager,
        router_1.Router])
], UserMgmtDeleteDialogComponent);
exports.UserMgmtDeleteDialogComponent = UserMgmtDeleteDialogComponent;
var UserDeleteDialogComponent = (function () {
    function UserDeleteDialogComponent(route, userModalService) {
        this.route = route;
        this.userModalService = userModalService;
    }
    UserDeleteDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.userModalService.open(UserMgmtDeleteDialogComponent, params['login']);
        });
    };
    UserDeleteDialogComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return UserDeleteDialogComponent;
}());
UserDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-delete-dialog',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_modal_service_1.UserModalService])
], UserDeleteDialogComponent);
exports.UserDeleteDialogComponent = UserDeleteDialogComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n    <h2><span>User</span> \"{{user.login}}\"</h2>\n    <dl class=\"row\">\n        <dt><span>Login</span></dt>\n        <dd><span>{{user.login}}</span></dd>\n        <dt><span>First Name</span></dt>\n        <dd>{{user.firstName}}</dd>\n        <dt><span>Last Name</span></dt>\n        <dd>{{user.lastName}}</dd>\n        <dt><span>Email</span></dt>\n        <dd>{{user.email}}</dd>\n        <dt><span>Activated</span></dt>\n        <dd>{{user.activated}}</dd>\n        <dt><span>Created By</span></dt>\n        <dd>{{user.createdBy}}</dd>\n        <dt><span>Created Date</span></dt>\n        <dd>{{user.createdDate | date:'dd/MM/yy HH:mm' }}</dd>\n        <dt><span>Last Modified By</span></dt>\n        <dd>{{user.lastModifiedBy}}</dd>\n        <dt><span>Last Modified Date</span></dt>\n        <dd>{{user.lastModifiedDate | date:'dd/MM/yy HH:mm'}}</dd>\n        <dt><span>Profiles</span></dt>\n        <dd>\n            <ul class=\"list-unstyled\">\n                <li *ngFor=\"let authority of user.authorities\"><span>{{authority}}</span></li>\n            </ul>\n        </dd>\n    </dl>\n    <button type=\"submit\"\n            routerLink=\"/user-management\"\n            class=\"btn btn-info\">\n        <span class=\"fa fa-arrow-left\"></span>&nbsp;<span> Back</span>\n    </button>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserMgmtDetailComponent = (function () {
    function UserMgmtDetailComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserMgmtDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['login']);
        });
    };
    UserMgmtDetailComponent.prototype.load = function (login) {
        var _this = this;
        this.userService.find(login).subscribe(function (user) {
            _this.user = user;
        });
    };
    UserMgmtDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return UserMgmtDetailComponent;
}());
UserMgmtDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-detail',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        router_1.ActivatedRoute])
], UserMgmtDetailComponent);
exports.UserMgmtDetailComponent = UserMgmtDetailComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\">\n\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"\n                (click)=\"clear()\">&times;</button>\n        <h4 class=\"modal-title\" id=\"myUserLabel\">\n            Create or edit a User</h4>\n    </div>\n    <div class=\"modal-body\">\n        <jhi-alert-error></jhi-alert-error>\n        <div class=\"form-group\">\n            <label>ID</label>\n            <input type=\"text\" class=\"form-control\" name=\"id\"\n                   [(ngModel)]=\"user.id\" readonly>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"form-control-label\">Login</label>\n            <input type=\"text\" class=\"form-control\" name=\"login\" #loginInput=\"ngModel\"\n                   [(ngModel)]=\"user.login\" required minlength=1 maxlength=50 pattern=\"^[_'.@A-Za-z0-9-]*$\">\n\n            <div *ngIf=\"loginInput.dirty && loginInput.invalid\">\n                <small class=\"form-text text-danger\"\n                   *ngIf=\"loginInput.errors.required\">\n                    This field is required.\n                </small>\n\n                <small class=\"form-text text-danger\"\n                   *ngIf=\"loginInput.errors.maxlength\"\n                  >\n                    This field cannot be longer than 50 characters.\n                </small>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"form-control-label\">First Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" #firstNameInput=\"ngModel\"\n                   [(ngModel)]=\"user.firstName\" maxlength=\"50\">\n\n            <div *ngIf=\"firstNameInput.dirty && firstNameInput.invalid\">\n                <small class=\"form-text text-danger\"\n                   *ngIf=\"firstNameInput.errors.maxlength\"\n                  >\n                    This field cannot be longer than 50 characters.\n                </small>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>Last Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" #lastNameInput=\"ngModel\"\n                   [(ngModel)]=\"user.lastName\" maxlength=\"50\">\n\n            <div *ngIf=\"lastNameInput.dirty && lastNameInput.invalid\">\n                <small class=\"form-text text-danger\"\n                   *ngIf=\"lastNameInput.errors.maxlength\"\n                  >\n                    This field cannot be longer than 50 characters.\n                </small>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"form-control-label\">Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" #emailInput=\"ngModel\"\n                   [(ngModel)]=\"user.email\" required maxlength=\"100\">\n\n            <div *ngIf=\"emailInput.dirty && emailInput.invalid\">\n                <small class=\"form-text text-danger\"\n                   *ngIf=\"emailInput.errors.required\">\n                    This field is required.\n                </small>\n\n                <small class=\"form-text text-danger\"\n                   *ngIf=\"emailInput.errors.maxlength\"\n                  >\n                    This field cannot be longer than 100 characters.\n                </small>\n\t\t<small class=\"form-text text-danger\"\n                   *ngIf=\"emailInput.errors.email\">\n                    Your e-mail is invalid.\n                 </small>\n            </div>\n        </div>\n        <div class=\"form-check\">\n            <label class=\"form-check-label\" for=\"activated\">\n                <input class=\"form-check-input\" [disabled]=\"user.id === null\" type=\"checkbox\" id=\"activated\" name=\"activated\" [(ngModel)]=\"user.activated\">\n                <span>Activated</span>\n            </label>\n        </div>\n\n        <div class=\"form-group\">\n            <label>Profiles</label>\n            <select class=\"form-control\" multiple name=\"authority\" [(ngModel)]=\"user.authorities\">\n                <option *ngFor=\"let authority of authorities\" [value]=\"authority\">{{authority}}</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\">\n            <span class=\"fa fa-ban\"></span>&nbsp;<span\n           >Cancel</span>\n        </button>\n        <button type=\"submit\" [disabled]=\"editForm.form.invalid || isSaving\" class=\"btn btn-primary\">\n            <span class=\"fa fa-floppy-o\"></span>&nbsp;<span>Save</span>\n        </button>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var ng_bootstrap_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(2);
var user_modal_service_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserMgmtDialogComponent = (function () {
    function UserMgmtDialogComponent(activeModal, userService, eventManager, router) {
        this.activeModal = activeModal;
        this.userService = userService;
        this.eventManager = eventManager;
        this.router = router;
    }
    UserMgmtDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    };
    UserMgmtDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    UserMgmtDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.user.id !== null) {
            this.userService.update(this.user).subscribe(function (response) { return _this.onSaveSuccess(response); }, function () { return _this.onSaveError(); });
        }
        else {
            this.user.langKey = 'en';
            this.userService.create(this.user).subscribe(function (response) { return _this.onSaveSuccess(response); }, function () { return _this.onSaveError(); });
        }
    };
    UserMgmtDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'userListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    };
    UserMgmtDialogComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    return UserMgmtDialogComponent;
}());
UserMgmtDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-dialog',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        shared_1.UserService,
        ng_jhipster_1.EventManager,
        router_1.Router])
], UserMgmtDialogComponent);
exports.UserMgmtDialogComponent = UserMgmtDialogComponent;
var UserDialogComponent = (function () {
    function UserDialogComponent(route, userModalService) {
        this.route = route;
        this.userModalService = userModalService;
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['login']) {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent, params['login']);
            }
            else {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent);
            }
        });
    };
    UserDialogComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return UserDialogComponent;
}());
UserDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-dialog',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_modal_service_1.UserModalService])
], UserDialogComponent);
exports.UserDialogComponent = UserDialogComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>\n        <span>Users</span>\n        <button class=\"btn btn-primary float-xs-right\" [routerLink]=\"['/', { outlets: { popup: ['user-management-new'] } }]\">\n            <span class=\"fa fa-plus\"></span> <span>Create a new User</span>\n        </button>\n    </h2>\n    <jhi-alert></jhi-alert>\n    <div class=\"table-responsive\" *ngIf=\"users\">\n        <table class=\"table table-striped\">\n            <thead>\n            <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"transition.bind(this)\">\n            <th jhiSortBy=\"id\"><span>ID</span><span class=\"fa fa-sort\"></span></th>\n                <th jhiSortBy=\"login\"><span>Login</span> <span class=\"fa fa-sort\"></span></th>\n                <th jhiSortBy=\"email\"><span>Email</span> <span class=\"fa fa-sort\"></span></th>\n                <th></th>\n                <th><span>Profiles</span></th>\n                <th jhiSortBy=\"createdDate\"><span>Created Date</span> <span class=\"fa fa-sort\"></span></th>\n                <th jhiSortBy=\"lastModifiedBy\"><span>Last Modified By</span> <span class=\"fa fa-sort\"></span></th>\n                <th jhiSortBy=\"lastModifiedDate\"><span>Last Modified Date</span> <span class=\"fa fa-sort\"></span></th>\n                <th></th>\n            </tr>\n            </thead>\n            <tbody *ngIf =\"users\">\n            <tr *ngFor=\"let user of users; trackBy: trackIdentity\">\n                <td><a [routerLink]=\"['../user-management', user.login]\">{{user.id}}</a></td>\n                <td>{{user.login}}</td>\n                <td>{{user.email}}</td>\n                <td>\n                    <span class=\"tag tag-danger\" (click)=\"setActive(user, true)\" *ngIf=\"!user.activated\"\n                          style=\"cursor: pointer;\">Deactivated</span>\n                    <span class=\"tag tag-success\" (click)=\"setActive(user, false)\" *ngIf=\"user.activated\"\n                          style=\"cursor: pointer;\">Activated</span>\n                </td>\n                \n                <td>\n                    <div *ngFor=\"let authority of user.authorities\">\n                        <span class=\"tag tag-info\">{{ authority }}</span>\n                    </div>\n                </td>\n                <td>{{user.createdDate | date:'dd/MM/yy HH:mm'}}</td>\n                <td>{{user.lastModifiedBy}}</td>\n                <td>{{user.lastModifiedDate | date:'dd/MM/yy HH:mm'}}</td>\n                <td class=\"text-xs-right\">\n                    <div class=\"btn-group flex-btn-group-container\">\n                        <button type=\"submit\"\n                                [routerLink]=\"['../user-management', user.login]\"\n                                class=\"btn btn-info btn-sm\">\n                            <span class=\"fa fa-eye\"></span>\n                            <span class=\"hidden-md-down\">View</span>\n                        </button>\n                        <button type=\"submit\"\n                                [routerLink]=\"['/', { outlets: { popup: 'user-management/'+ user.login + '/edit'} }]\"\n                                replaceUrl=\"true\"\n                                class=\"btn btn-primary btn-sm\">\n                            <span class=\"fa fa-pencil\"></span>\n                            <span class=\"hidden-md-down\">Edit</span>\n                        </button>\n                        <button type=\"submit\"\n                                [routerLink]=\"['/', { outlets: { popup: 'user-management/'+ user.login + '/delete'} }]\"\n                                replaceUrl=\"true\"\n                                class=\"btn btn-danger btn-sm\" [disabled]=\"currentAccount.login==user.login\">\n                            <span class=\"fa fa-remove\"></span>\n                            <span class=\"hidden-md-down\">Delete</span>\n                        </button>\n                    </div>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"text-xs-center\" *ngIf=\"users\">\n        <jhi-item-count [page]=\"page\" [total]=\"queryCount\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count>\n        <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var ng_jhipster_1 = __webpack_require__(2);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var UserMgmtComponent = (function () {
    function UserMgmtComponent(userService, parseLinks, alertService, principal, eventManager, paginationUtil, paginationConfig, activatedRoute, router) {
        var _this = this;
        this.userService = userService;
        this.parseLinks = parseLinks;
        this.alertService = alertService;
        this.principal = principal;
        this.eventManager = eventManager;
        this.paginationUtil = paginationUtil;
        this.paginationConfig = paginationConfig;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(function (data) {
            _this.page = data['pagingParams'].page;
            _this.previousPage = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
    }
    UserMgmtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
            _this.loadAll();
            _this.registerChangeInUsers();
        });
    };
    UserMgmtComponent.prototype.ngOnDestroy = function () {
        this.routeData.unsubscribe();
    };
    UserMgmtComponent.prototype.registerChangeInUsers = function () {
        var _this = this;
        this.eventManager.subscribe('userListModification', function (response) { return _this.loadAll(); });
    };
    UserMgmtComponent.prototype.setActive = function (user, isActivated) {
        var _this = this;
        user.activated = isActivated;
        this.userService.update(user).subscribe(function (response) {
            if (response.status === 200) {
                _this.error = null;
                _this.success = 'OK';
                _this.loadAll();
            }
            else {
                _this.success = null;
                _this.error = 'ERROR';
            }
        });
    };
    UserMgmtComponent.prototype.loadAll = function () {
        var _this = this;
        this.userService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json(), res.headers); }, function (res) { return _this.onError(res.json()); });
    };
    UserMgmtComponent.prototype.trackIdentity = function (index, item) {
        return item.id;
    };
    UserMgmtComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    UserMgmtComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    UserMgmtComponent.prototype.transition = function () {
        this.router.navigate(['/user-management'], { queryParams: {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    UserMgmtComponent.prototype.onSuccess = function (data, headers) {
        // hide anonymous user from user management: it's a required user for Spring Security
        var hiddenUsersSize = 0;
        for (var i in data) {
            if (data[i]['login'] === 'anonymoususer') {
                data.splice(i, 1);
                hiddenUsersSize++;
            }
        }
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count') - hiddenUsersSize;
        this.queryCount = this.totalItems;
        this.users = data;
    };
    UserMgmtComponent.prototype.onError = function (error) {
        this.alertService.error(error.error, error.message, null);
    };
    return UserMgmtComponent;
}());
UserMgmtComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.UserService,
        ng_jhipster_1.ParseLinks,
        ng_jhipster_1.AlertService,
        shared_1.Principal,
        ng_jhipster_1.EventManager, ng_jhipster_1.PaginationUtil,
        uib_pagination_config_1.PaginationConfig,
        router_1.ActivatedRoute,
        router_1.Router])
], UserMgmtComponent);
exports.UserMgmtComponent = UserMgmtComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var user_management_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.ts");
var user_management_detail_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.ts");
var user_management_dialog_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts");
var user_management_delete_dialog_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserResolve = (function () {
    function UserResolve(principal) {
        this.principal = principal;
    }
    UserResolve.prototype.canActivate = function () {
        var _this = this;
        return this.principal.identity().then(function (account) { return _this.principal.hasAnyAuthority(['ROLE_ADMIN']); });
    };
    return UserResolve;
}());
UserResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [shared_1.Principal])
], UserResolve);
exports.UserResolve = UserResolve;
var UserResolvePagingParams = (function () {
    function UserResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    UserResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return UserResolvePagingParams;
}());
UserResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], UserResolvePagingParams);
exports.UserResolvePagingParams = UserResolvePagingParams;
exports.userMgmtRoute = [
    {
        path: 'user-management',
        component: user_management_component_1.UserMgmtComponent,
        resolve: {
            'pagingParams': UserResolvePagingParams
        },
        data: {
            pageTitle: 'Users'
        }
    },
    {
        path: 'user-management/:login',
        component: user_management_detail_component_1.UserMgmtDetailComponent,
        data: {
            pageTitle: 'Users'
        }
    }
];
exports.userDialogRoute = [
    {
        path: 'user-management-new',
        component: user_management_dialog_component_1.UserDialogComponent,
        outlet: 'popup'
    },
    {
        path: 'user-management/:login/edit',
        component: user_management_dialog_component_1.UserDialogComponent,
        outlet: 'popup'
    },
    {
        path: 'user-management/:login/delete',
        component: user_management_delete_dialog_component_1.UserDeleteDialogComponent,
        outlet: 'popup'
    }
];


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserModalService = (function () {
    function UserModalService(modalService, userService) {
        this.modalService = modalService;
        this.userService = userService;
        this.isOpen = false;
    }
    UserModalService.prototype.open = function (component, login) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (login) {
            this.userService.find(login).subscribe(function (user) { return _this.userModalRef(component, user); });
        }
        else {
            return this.userModalRef(component, new shared_1.User());
        }
    };
    UserModalService.prototype.userModalRef = function (component, user) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.user = user;
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return UserModalService;
}());
UserModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        shared_1.UserService])
], UserModalService);
exports.UserModalService = UserModalService;


/***/ }),

/***/ "./src/main/webapp/app/app.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// DO NOT EDIT THIS FILE, EDIT THE WEBPACK COMMON CONFIG INSTEAD, WHICH WILL MODIFY THIS FILE
var _VERSION = '0.0.0'; // This value will be overwritten by webpack
var _DEBUG_INFO_ENABLED = true; // This value will be overwritten by webpack
_VERSION = "0.0.0";
_DEBUG_INFO_ENABLED = true;
exports.VERSION = _VERSION;
exports.DEBUG_INFO_ENABLED = _DEBUG_INFO_ENABLED;


/***/ }),

/***/ "./src/main/webapp/app/app.main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_dynamic_1 = __webpack_require__(12);
var prod_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/prod.config.ts");
var app_module_1 = __webpack_require__("./src/main/webapp/app/app.module.ts");
prod_config_1.ProdConfig();
if (false) {
    module['hot'].accept();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.ConcoursePipelinesAppModule);


/***/ }),

/***/ "./src/main/webapp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
__webpack_require__(18);
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(9);
var ng2_webstorage_1 = __webpack_require__(7);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var admin_module_1 = __webpack_require__("./src/main/webapp/app/admin/admin.module.ts");
var account_module_1 = __webpack_require__("./src/main/webapp/app/account/account.module.ts");
var entity_module_1 = __webpack_require__("./src/main/webapp/app/entities/entity.module.ts");
var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var home_1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
var http_provider_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/http.provider.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var layouts_2 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var ConcoursePipelinesAppModule = (function () {
    function ConcoursePipelinesAppModule() {
    }
    return ConcoursePipelinesAppModule;
}());
ConcoursePipelinesAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            layouts_1.LayoutRoutingModule,
            ng2_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
            shared_1.ConcoursePipelinesSharedModule,
            admin_module_1.ConcoursePipelinesAdminModule,
            account_module_1.ConcoursePipelinesAccountModule,
            entity_module_1.ConcoursePipelinesEntityModule
        ],
        declarations: [
            layouts_2.JhiMainComponent,
            home_1.HomeComponent,
            layouts_2.NavbarComponent,
            layouts_2.ErrorComponent,
            layouts_2.PageRibbonComponent,
            layouts_2.FooterComponent
        ],
        providers: [
            layouts_2.ProfileService,
            { provide: Window, useValue: window },
            { provide: Document, useValue: document },
            http_provider_1.customHttpProvider(),
            uib_pagination_config_1.PaginationConfig,
            shared_1.UserRouteAccessService
        ],
        bootstrap: [layouts_2.JhiMainComponent]
    })
], ConcoursePipelinesAppModule);
exports.ConcoursePipelinesAppModule = ConcoursePipelinesAppModule;


/***/ }),

/***/ "./src/main/webapp/app/app.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
/* import { AuthService } from './shared';

@Injectable()
export class AuthorizeResolve implements Resolve<any> {

  constructor(private authService: AuthService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.authorize();
  }
} */
exports.navbarRoute = {
    path: '',
    component: layouts_1.NavbarComponent,
    // resolve: {
    //   'authorize': AuthorizeResolve
    // },
    outlet: 'navbar'
};


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/prod.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
function ProdConfig() {
    // disable debug data on prod profile to improve performance
    if (!app_constants_1.DEBUG_INFO_ENABLED) {
        core_1.enableProdMode();
    }
}
exports.ProdConfig = ProdConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/uib-pagination.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var PaginationConfig = (function () {
    function PaginationConfig(config) {
        this.config = config;
        config.boundaryLinks = true;
        config.maxSize = 5;
        config.pageSize = shared_1.ITEMS_PER_PAGE;
        config.size = 'sm';
    }
    return PaginationConfig;
}());
PaginationConfig = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbPaginationConfig])
], PaginationConfig);
exports.PaginationConfig = PaginationConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ng_jhipster_1 = __webpack_require__(2);
var Observable_1 = __webpack_require__(8);
var auth_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/auth.service.ts");
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var AuthExpiredInterceptor = (function (_super) {
    __extends(AuthExpiredInterceptor, _super);
    function AuthExpiredInterceptor(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        return _this;
    }
    AuthExpiredInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    AuthExpiredInterceptor.prototype.responseIntercept = function (observable) {
        var self = this;
        return observable.catch(function (error, source) {
            if (error.status === 401) {
                var principal = self.injector.get(principal_service_1.Principal);
                if (principal.isAuthenticated()) {
                    var auth = self.injector.get(auth_service_1.AuthService);
                    auth.authorize(true);
                }
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return AuthExpiredInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.AuthExpiredInterceptor = AuthExpiredInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ng_jhipster_1 = __webpack_require__(2);
var AuthInterceptor = (function (_super) {
    __extends(AuthInterceptor, _super);
    function AuthInterceptor(localStorage, sessionStorage) {
        var _this = _super.call(this) || this;
        _this.localStorage = localStorage;
        _this.sessionStorage = sessionStorage;
        return _this;
    }
    AuthInterceptor.prototype.requestIntercept = function (options) {
        var token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (token && token.expires_at && token.expires_at > new Date().getTime()) {
            options.headers.append('Authorization', 'Bearer ' + token.access_token);
        }
        return options;
    };
    AuthInterceptor.prototype.responseIntercept = function (observable) {
        return observable; // by pass
    };
    return AuthInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.AuthInterceptor = AuthInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ng_jhipster_1 = __webpack_require__(2);
var Observable_1 = __webpack_require__(8);
var ErrorHandlerInterceptor = (function (_super) {
    __extends(ErrorHandlerInterceptor, _super);
    function ErrorHandlerInterceptor(eventManager) {
        var _this = _super.call(this) || this;
        _this.eventManager = eventManager;
        return _this;
    }
    ErrorHandlerInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    ErrorHandlerInterceptor.prototype.responseIntercept = function (observable) {
        var _this = this;
        return observable.catch(function (error) {
            if (!(error.status === 401 && (error.text() === '' ||
                (error.json().path && error.json().path.indexOf('/api/account') === 0)))) {
                _this.eventManager.broadcast({ name: 'concoursePipelinesApp.httpError', content: error });
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return ErrorHandlerInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.ErrorHandlerInterceptor = ErrorHandlerInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/http.provider.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var ng_jhipster_1 = __webpack_require__(2);
var auth_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts");
var ng2_webstorage_1 = __webpack_require__(7);
var auth_expired_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts");
var errorhandler_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts");
var notification_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts");
function interceptableFactory(backend, defaultOptions, localStorage, sessionStorage, injector, eventManager) {
    return new ng_jhipster_1.InterceptableHttp(backend, defaultOptions, [
        new auth_interceptor_1.AuthInterceptor(localStorage, sessionStorage),
        new auth_expired_interceptor_1.AuthExpiredInterceptor(injector),
        // Other interceptors can be added here
        new errorhandler_interceptor_1.ErrorHandlerInterceptor(eventManager),
        new notification_interceptor_1.NotificationInterceptor()
    ]);
}
exports.interceptableFactory = interceptableFactory;
;
function customHttpProvider() {
    return {
        provide: http_1.Http,
        useFactory: interceptableFactory,
        deps: [
            http_1.XHRBackend,
            http_1.RequestOptions,
            ng2_webstorage_1.LocalStorageService,
            ng2_webstorage_1.SessionStorageService,
            core_1.Injector,
            ng_jhipster_1.EventManager
        ]
    };
}
exports.customHttpProvider = customHttpProvider;
;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ng_jhipster_1 = __webpack_require__(2);
var Observable_1 = __webpack_require__(8);
var NotificationInterceptor = (function (_super) {
    __extends(NotificationInterceptor, _super);
    function NotificationInterceptor() {
        return _super.call(this) || this;
    }
    NotificationInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    NotificationInterceptor.prototype.responseIntercept = function (observable) {
        return observable.catch(function (error) {
            var arr = Array.from(error.headers._headers);
            var headers = [];
            var i;
            for (i = 0; i < arr.length; i++) {
                if (arr[i][0].endsWith('app-alert') || arr[i][0].endsWith('app-params')) {
                    headers.push(arr[i][0]);
                }
            }
            headers.sort();
            var alertKey = headers.length >= 1 ? error.headers.get(headers[0]) : null;
            if (typeof alertKey === 'string') {
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return NotificationInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.NotificationInterceptor = NotificationInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/entities/entity.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
var ConcoursePipelinesEntityModule = (function () {
    function ConcoursePipelinesEntityModule() {
    }
    return ConcoursePipelinesEntityModule;
}());
ConcoursePipelinesEntityModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [],
        entryComponents: [],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], ConcoursePipelinesEntityModule);
exports.ConcoursePipelinesEntityModule = ConcoursePipelinesEntityModule;


/***/ }),

/***/ "./src/main/webapp/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-3\">\n        <span class=\"hipster img-fluid img-rounded\"></span>\n    </div>\n    <div class=\"col-md-9\">\n        <h1 class=\"display-4\">Welcome, Java Hipster!</h1>\n        <p class=\"lead\">This is your homepage</p>\n\n        <div [ngSwitch]=\"isAuthenticated()\">\n            <div class=\"alert alert-success\" *ngSwitchCase=\"true\">\n                <span *ngIf=\"account\"\n                   > You are logged in as user \"{{account.login}}\". </span>\n            </div>\n\n            <div class=\"alert alert-warning\" *ngSwitchCase=\"false\">\n                <span>If you want to </span>\n                <a class=\"alert-link\" (click)=\"login()\">sign in</a><span>, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span>\n            </div>\n\n            <div class=\"alert alert-warning\" *ngSwitchCase=\"false\">\n                <span>You don't have an account yet?</span>\n                <a class=\"alert-link\" routerLink=\"register\">Register a new account</a>\n            </div>\n        </div>\n\n        <p>\n            If you have any question on JHipster:\n        </p>\n\n        <ul>\n            <li><a href=\"http://jhipster.github.io/\" target=\"_blank\">JHipster homepage</a></li>\n            <li><a href=\"http://stackoverflow.com/tags/jhipster/info\" target=\"_blank\">JHipster on Stack Overflow</a></li>\n            <li><a href=\"https://github.com/jhipster/generator-jhipster/issues?state=open\" target=\"_blank\">JHipster bug tracker</a></li>\n            <li><a href=\"https://gitter.im/jhipster/generator-jhipster\" target=\"_blank\">JHipster public chat room</a></li>\n            <li><a href=\"https://twitter.com/java_hipster\" target=\"_blank\" >follow @java_hipster on Twitter</a></li>\n        </ul>\n\n        <p>\n            <span>If you like JHipster, don't forget to give us a star on</span> <a href=\"https://github.com/jhipster/generator-jhipster\" target=\"_blank\">Github</a>!\n        </p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var HomeComponent = (function () {
    function HomeComponent(principal, loginModalService, eventManager) {
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.eventManager = eventManager;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.registerAuthenticationSuccess();
    };
    HomeComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    HomeComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    HomeComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'jhi-home',
        template: __webpack_require__("./src/main/webapp/app/home/home.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/home/home.css")
        ]
    }),
    __metadata("design:paramtypes", [shared_1.Principal,
        shared_1.LoginModalService,
        ng_jhipster_1.EventManager])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/main/webapp/app/home/home.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/main/webapp/app/home/home.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/home/home.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
exports.homeRoute = {
    path: '',
    component: _1.HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'Welcome, Java Hipster!'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/home/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/main/webapp/app/home/home.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/home.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <span class=\"hipster img-fluid img-rounded\"></span>\n        </div>\n        <div class=\"col-md-8\">\n            <h1>Error Page!</h1>\n\n            <div [hidden]=\"!errorMessage\">\n                <div class=\"alert alert-danger\">{{errorMessage}}\n                </div>\n            </div>\n            <div [hidden]=\"!error403\" class=\"alert alert-danger\">You are not authorized to access the page.\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-error',
        template: __webpack_require__("./src/main/webapp/app/layouts/error/error.component.html")
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var error_component_1 = __webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts");
exports.errorRoute = [
    {
        path: 'error',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!'
        },
        canActivate: [shared_1.UserRouteAccessService]
    },
    {
        path: 'accessdenied',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'Error page!'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }
];


/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <p>This is your footer</p>\n</div>\n<template ngbModalContainer></template>\n"

/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-footer',
        template: __webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.html")
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/main/main.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/layout-routing.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/layout-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var home_1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
var app_route_1 = __webpack_require__("./src/main/webapp/app/app.route.ts");
var _1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var LAYOUT_ROUTES = [
    home_1.homeRoute,
    app_route_1.navbarRoute
].concat(_1.errorRoute);
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    return LayoutRoutingModule;
}());
LayoutRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], LayoutRoutingModule);
exports.LayoutRoutingModule = LayoutRoutingModule;


/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<jhi-page-ribbon></jhi-page-ribbon>\n<div>\n    <router-outlet name=\"navbar\"></router-outlet>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"card\">\n        <router-outlet></router-outlet>\n        <router-outlet name=\"popup\"></router-outlet>\n    </div>\n    <jhi-footer></jhi-footer>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var platform_browser_1 = __webpack_require__(9);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhiMainComponent = (function () {
    function JhiMainComponent(titleService, router, $storageService) {
        this.titleService = titleService;
        this.router = router;
        this.$storageService = $storageService;
    }
    JhiMainComponent.prototype.getPageTitle = function (routeSnapshot) {
        var title = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'concoursePipelinesApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    JhiMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.titleService.setTitle(_this.getPageTitle(_this.router.routerState.snapshot.root));
            }
            if (event instanceof router_1.RoutesRecognized) {
                var params = {};
                var destinationData = {};
                var destinationName = '';
                var destinationEvent = event.state.root.firstChild.children[0];
                if (destinationEvent !== undefined) {
                    params = destinationEvent.params;
                    destinationData = destinationEvent.data;
                    destinationName = destinationEvent.url[0].path;
                }
                var from = { name: _this.router.url.slice(1) };
                var destination = { name: destinationName, data: destinationData };
                _this.$storageService.storeDestinationState(destination, params, from);
            }
        });
    };
    return JhiMainComponent;
}());
JhiMainComponent = __decorate([
    core_1.Component({
        selector: 'jhi-main',
        template: __webpack_require__("./src/main/webapp/app/layouts/main/main.component.html")
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title,
        router_1.Router,
        shared_1.StateStorageService])
], JhiMainComponent);
exports.JhiMainComponent = JhiMainComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark jh-navbar\">\n    <div class=\"jh-logo-container float-xs-left\">\n        <a class=\"jh-navbar-toggler hidden-lg-up float-xs-left\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\">\n            <i class=\"fa fa-bars\"></i>\n        </a>\n        <a class=\"navbar-brand logo float-xs-right\" routerLink=\"/\" (click)=\"collapseNavbar()\">\n            <span class=\"logo-img\"></span>\n            <span class=\"navbar-title\">Concourse_pipelines</span> <span class=\"navbar-version\">{{version}}</span>\n        </a>\n    </div>\n    <div class=\"collapse navbar-toggleable-md float-lg-right\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\" [ngSwitch]=\"isAuthenticated()\">\n        <ul class=\"nav navbar-nav float-lg-right\">\n            <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                <a class=\"nav-link\" routerLink=\"/\" (click)=\"collapseNavbar()\">\n                    <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n                    <span class=\"hidden-sm-down\">Home</span>\n                </a>\n            </li>\n            <!-- jhipster-needle-add-element-to-menu - JHipster will add new menu items here -->\n            <li *ngSwitchCase=\"true\" ngbDropdown class=\"nav-item dropdown pointer\">\n                <a class=\"nav-link dropdown-toggle\" routerLinkActive=\"active\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"entity-menu\">\n                    <span>\n                        <i class=\"fa fa-th-list\" aria-hidden=\"true\"></i>\n                        <span class=\"hidden-sm-down\">\n                            Entities\n                        </span>\n                        <b class=\"caret\"></b>\n                    </span>\n                </a>\n                <ul class=\"dropdown-menu\" ngbDropdownMenu>\n                    <!-- jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here -->\n                </ul>\n            </li>\n            <li *ngSwitchCase=\"true\" jhiHasAuthority=\"ROLE_ADMIN\" ngbDropdown class=\"nav-item dropdown pointer\">\n                <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"admin-menu\">\n                    <span>\n                        <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n                        <span class=\"hidden-sm-down\">Administration</span>\n                        <b class=\"caret\"></b>\n                    </span>\n                </a>\n                <ul class=\"dropdown-menu\" ngbDropdownMenu>\n                    <li>\n                        <a class=\"dropdown-item\" routerLink=\"user-management\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\">\n                            <i class=\"fa fa-fw fa-user\" aria-hidden=\"true\"></i>\n                            <span>User management</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"dropdown-item\" routerLink=\"jhi-metrics\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\">\n                            <i class=\"fa fa-fw fa-tachometer\" aria-hidden=\"true\"></i>\n                            <span>Metrics</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"dropdown-item\" routerLink=\"jhi-health\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\">\n                            <i class=\"fa fa-fw fa-heart\" aria-hidden=\"true\"></i>\n                            <span>Health</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"dropdown-item\" routerLink=\"jhi-configuration\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\">\n                            <i class=\"fa fa-fw fa-list\" aria-hidden=\"true\"></i>\n                            <span>Configuration</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"dropdown-item\" routerLink=\"audits\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\">\n                            <i class=\"fa fa-fw fa-bell\" aria-hidden=\"true\"></i>\n                            <span>Audits</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"dropdown-item\" routerLink=\"logs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\">\n                            <i class=\"fa fa-fw fa-tasks\" aria-hidden=\"true\"></i>\n                            <span>Logs</span>\n                        </a>\n                    </li>\n                    <li *ngIf=\"swaggerEnabled\">\n                        <a class=\"dropdown-item\" routerLink=\"docs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\">\n                            <i class=\"fa fa-fw fa-book\" aria-hidden=\"true\"></i>\n                            <span>API</span>\n                        </a>\n                    </li>\n                    <!-- jhipster-needle-add-element-to-admin-menu - JHipster will add entities to the admin menu here -->\n                    <li *ngIf=\"!inProduction\">\n                        <a class=\"dropdown-item\" href='/h2-console' target=\"_tab\" (click)=\"collapseNavbar()\">\n                            <i class=\"fa fa-fw fa-hdd-o\" aria-hidden=\"true\"></i>\n                            <span>Database</span>\n                        </a>\n                    </li>\n                </ul>\n            </li>\n            <li ngbDropdown class=\"nav-item dropdown pointer\">\n                <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"account-menu\">\n                  <span *ngIf=\"!getImageUrl()\">\n                    <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                    <span class=\"hidden-sm\">\n                      Account\n                    </span>\n                    <b class=\"caret\"></b>\n                  </span>\n                  <span *ngIf=\"getImageUrl()\">\n                      <img [src]=\"getImageUrl()\" class=\"profile-image img-circle\" alt=\"Avatar\">\n                  </span>\n                </a>\n                <ul class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu>\n                    <li *ngSwitchCase=\"true\">\n                        <a class=\"dropdown-item\" routerLink=\"settings\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\">\n                            <i class=\"fa fa-fw fa-wrench\" aria-hidden=\"true\"></i>\n                            <span>Settings</span>\n                        </a>\n                    </li>\n                    <li *ngSwitchCase=\"true\">\n                        <a class=\"dropdown-item\" routerLink=\"password\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\">\n                            <i class=\"fa fa-fw fa-clock-o\" aria-hidden=\"true\"></i>\n                            <span>Password</span>\n                        </a>\n                    </li>\n                    <li *ngSwitchCase=\"true\">\n                        <a class=\"dropdown-item\" (click)=\"logout()\" id=\"logout\">\n                            <i class=\"fa fa-fw fa-sign-out\" aria-hidden=\"true\"></i>\n                            <span>Sign out</span>\n                        </a>\n                    </li>\n                    <li *ngSwitchCase=\"false\">\n                        <a class=\"dropdown-item\" (click)=\"login()\" id=\"login\">\n                            <i class=\"fa fa-fw fa-sign-in\" aria-hidden=\"true\"></i>\n                            <span>Sign in</span>\n                        </a>\n                    </li>\n                    <li *ngSwitchCase=\"false\">\n                        <a class=\"dropdown-item\" routerLink=\"register\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\">\n                            <i class=\"fa fa-fw fa-registered\" aria-hidden=\"true\"></i>\n                            <span>Register</span>\n                        </a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts"); // FIXME barrel doesnt work here
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
var NavbarComponent = (function () {
    function NavbarComponent(loginService, principal, loginModalService, profileService, router) {
        this.loginService = loginService;
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.profileService = profileService;
        this.router = router;
        this.version = app_constants_1.DEBUG_INFO_ENABLED ? 'v' + app_constants_1.VERSION : '';
        this.isNavbarCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.inProduction = profileInfo.inProduction;
            _this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    };
    NavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    NavbarComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    NavbarComponent.prototype.logout = function () {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    NavbarComponent.prototype.getImageUrl = function () {
        return this.isAuthenticated() ? this.principal.getImageUrl() : null;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-navbar',
        template: __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.css")
        ]
    }),
    __metadata("design:paramtypes", [shared_1.LoginService,
        shared_1.Principal,
        shared_1.LoginModalService,
        profile_service_1.ProfileService,
        router_1.Router])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/main/webapp/app/layouts/navbar/navbar.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts");
var PageRibbonComponent = (function () {
    function PageRibbonComponent(profileService) {
        this.profileService = profileService;
    }
    PageRibbonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.profileInfo = profileInfo;
            _this.ribbonEnv = profileInfo.ribbonEnv;
        });
    };
    return PageRibbonComponent;
}());
PageRibbonComponent = __decorate([
    core_1.Component({
        selector: 'jhi-page-ribbon',
        template: "<div class=\"ribbon\" *ngIf=\"ribbonEnv\"><a href=\"\">{{ribbonEnv}}</a></div>",
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.css")
        ]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], PageRibbonComponent);
exports.PageRibbonComponent = PageRibbonComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/main/webapp/app/layouts/profiles/page-ribbon.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile-info.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ProfileInfo = (function () {
    function ProfileInfo() {
    }
    return ProfileInfo;
}());
exports.ProfileInfo = ProfileInfo;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var profile_info_model_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts");
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.profileInfoUrl = 'api/profile-info';
    }
    ProfileService.prototype.getProfileInfo = function () {
        return this.http.get(this.profileInfoUrl)
            .map(function (res) {
            var data = res.json();
            var pi = new profile_info_model_1.ProfileInfo();
            pi.activeProfiles = data.activeProfiles;
            pi.ribbonEnv = data.ribbonEnv;
            pi.inProduction = data.activeProfiles.indexOf('prod') !== -1;
            pi.swaggerEnabled = data.activeProfiles.indexOf('swagger') !== -1;
            return pi;
        });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProfileService);
exports.ProfileService = ProfileService;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert-error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var JhiAlertErrorComponent = (function () {
    function JhiAlertErrorComponent(alertService, eventManager) {
        var _this = this;
        this.alertService = alertService;
        this.eventManager = eventManager;
        this.alerts = [];
        this.cleanHttpErrorListener = eventManager.subscribe('concoursePipelinesApp.httpError', function (response) {
            var i;
            var httpResponse = response.content;
            switch (httpResponse.status) {
                // connection refused, server not reachable
                case 0:
                    _this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
                    break;
                case 400:
                    var arr = Array.from(httpResponse.headers._headers);
                    var headers = [];
                    for (i = 0; i < arr.length; i++) {
                        if (arr[i][0].endsWith('app-error') || arr[i][0].endsWith('app-params')) {
                            headers.push(arr[i][0]);
                        }
                    }
                    headers.sort();
                    var errorHeader = httpResponse.headers.get(headers[0]);
                    var entityKey = httpResponse.headers.get(headers[1]);
                    if (errorHeader) {
                        var entityName = entityKey;
                        _this.addErrorAlert(errorHeader, errorHeader, { entityName: entityName });
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().fieldErrors) {
                        var fieldErrors = httpResponse.json().fieldErrors;
                        for (i = 0; i < fieldErrors.length; i++) {
                            var fieldError = fieldErrors[i];
                            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                            var convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                            var fieldName = convertedField.charAt(0).toUpperCase() +
                                convertedField.slice(1);
                            _this.addErrorAlert('Field ' + fieldName + ' cannot be empty', 'error.' + fieldError.message, { fieldName: fieldName });
                        }
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message, httpResponse.json().message, httpResponse.json());
                    }
                    else {
                        _this.addErrorAlert(httpResponse.text());
                    }
                    break;
                case 404:
                    _this.addErrorAlert('Not found', 'error.url.not.found');
                    break;
                default:
                    if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message);
                    }
                    else {
                        _this.addErrorAlert(JSON.stringify(httpResponse)); // Fixme find a way to parse httpResponse
                    }
            }
        });
    }
    JhiAlertErrorComponent.prototype.ngOnDestroy = function () {
        if (this.cleanHttpErrorListener !== undefined && this.cleanHttpErrorListener !== null) {
            this.eventManager.destroy(this.cleanHttpErrorListener);
            this.alerts = [];
        }
    };
    JhiAlertErrorComponent.prototype.addErrorAlert = function (message, key, data) {
        this.alerts.push(this.alertService.addAlert({
            type: 'danger',
            msg: message,
            timeout: 5000,
            toast: this.alertService.isToast(),
            scoped: true
        }, this.alerts));
    };
    return JhiAlertErrorComponent;
}());
JhiAlertErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert-error',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\"  [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert type=\"{{alert.type}}\" close=\"alert.close(alerts)\"><pre>{{ alert.msg }}</pre></ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.AlertService, ng_jhipster_1.EventManager])
], JhiAlertErrorComponent);
exports.JhiAlertErrorComponent = JhiAlertErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(2);
var JhiAlertComponent = (function () {
    function JhiAlertComponent(alertService) {
        this.alertService = alertService;
    }
    JhiAlertComponent.prototype.ngOnInit = function () {
        this.alerts = this.alertService.get();
    };
    JhiAlertComponent.prototype.ngOnDestroy = function () {
        this.alerts = [];
    };
    return JhiAlertComponent;
}());
JhiAlertComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\" [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert [type]=\"alert.type\" (close)=\"alert.close(alerts)\"><pre [innerHTML]=\"alert.msg\"></pre></ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.AlertService])
], JhiAlertComponent);
exports.JhiAlertComponent = JhiAlertComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/account.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.get = function () {
        return this.http.get('api/account').map(function (res) { return res.json(); });
    };
    AccountService.prototype.save = function (account) {
        return this.http.post('api/account', account);
    };
    return AccountService;
}());
AccountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AccountService);
exports.AccountService = AccountService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/auth-oauth2.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var Rx_1 = __webpack_require__(14);
var ng2_webstorage_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(2);
var AuthServerProvider = (function () {
    function AuthServerProvider(http, base64, $localStorage) {
        this.http = http;
        this.base64 = base64;
        this.$localStorage = $localStorage;
    }
    AuthServerProvider.prototype.getToken = function () {
        return this.$localStorage.retrieve('authenticationToken');
    };
    AuthServerProvider.prototype.login = function (credentials) {
        var data = 'username=' + encodeURIComponent(credentials.username) + '&password=' +
            encodeURIComponent(credentials.password) + '&grant_type=password&scope=read%20write&' +
            'client_secret=my-secret-token-to-change-in-production&client_id=concourse_pipelinesapp';
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Authorization': 'Basic ' + this.base64.encode('concourse_pipelinesapp' + ':' + 'my-secret-token-to-change-in-production')
        });
        return this.http.post('oauth/token', data, {
            headers: headers
        }).map(authSuccess.bind(this));
        function authSuccess(resp) {
            var response = resp.json();
            var expiredAt = new Date();
            expiredAt.setSeconds(expiredAt.getSeconds() + response.expires_in);
            response.expires_at = expiredAt.getTime();
            this.$localStorage.store('authenticationToken', response);
            return response;
        }
    };
    AuthServerProvider.prototype.logout = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.http.post('api/logout', {});
            _this.$localStorage.clear('authenticationToken');
            observer.complete();
        });
    };
    return AuthServerProvider;
}());
AuthServerProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        ng_jhipster_1.Base64,
        ng2_webstorage_1.LocalStorageService])
], AuthServerProvider);
exports.AuthServerProvider = AuthServerProvider;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var login_modal_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts");
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var AuthService = (function () {
    function AuthService(principal, stateStorageService, loginModalService, router) {
        this.principal = principal;
        this.stateStorageService = stateStorageService;
        this.loginModalService = loginModalService;
        this.router = router;
    }
    AuthService.prototype.authorize = function (force) {
        var authReturn = this.principal.identity(force).then(authThen.bind(this));
        return authReturn;
        function authThen() {
            var _this = this;
            var isAuthenticated = this.principal.isAuthenticated();
            var toStateInfo = this.stateStorageService.getDestinationState().destination;
            var canActivate = true;
            // an authenticated user can't access to login and register pages
            if (isAuthenticated && (toStateInfo.name === 'register')) {
                this.router.navigate(['']);
                canActivate = false;
            }
            // recover and clear previousState after external login redirect (e.g. oauth2)
            var fromStateInfo = this.stateStorageService.getDestinationState().from;
            var previousState = this.stateStorageService.getPreviousState();
            if (isAuthenticated && !fromStateInfo.name && previousState) {
                this.stateStorageService.resetPreviousState();
                this.router.navigate([previousState.name], { queryParams: previousState.params });
                canActivate = false;
            }
            if (toStateInfo.data.authorities && toStateInfo.data.authorities.length > 0 &&
                !this.principal.hasAnyAuthority(toStateInfo.data.authorities)) {
                if (isAuthenticated) {
                    // user is signed in but not authorized for desired state
                    this.router.navigate(['accessdenied']);
                    canActivate = false;
                }
                else {
                    canActivate = false;
                    // user is not authenticated. Show the state they wanted before you
                    // send them to the login service, so you can return them when you're done
                    var toStateParamsInfo = this.stateStorageService.getDestinationState().params;
                    this.stateStorageService.storePreviousState(toStateInfo.name, toStateParamsInfo);
                    // now, send them to the signin state so they can log in
                    this.router.navigate(['accessdenied']).then(function () {
                        _this.loginModalService.open();
                    });
                }
            }
            return canActivate;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [principal_service_1.Principal,
        state_storage_service_1.StateStorageService,
        login_modal_service_1.LoginModalService,
        router_1.Router])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/csrf.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(16);
var CSRFService = (function () {
    function CSRFService(cookieService) {
        this.cookieService = cookieService;
    }
    CSRFService.prototype.getCSRF = function (name) {
        name = "" + (name ? name : 'XSRF-TOKEN');
        return this.cookieService.get(name);
    };
    return CSRFService;
}());
CSRFService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.CookieService])
], CSRFService);
exports.CSRFService = CSRFService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/has-any-authority.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var HasAnyAuthorityDirective = (function () {
    function HasAnyAuthorityDirective(principal, el, renderer) {
        this.principal = principal;
        this.el = el;
        this.renderer = renderer;
    }
    HasAnyAuthorityDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.authority = this.jhiHasAnyAuthority.replace(/\s+/g, '').split(',');
        if (this.authority.length > 0) {
            this.setVisibilitySync();
        }
        this.principal.getAuthenticationState().subscribe(function (identity) { return _this.setVisibilitySync(); });
    };
    HasAnyAuthorityDirective.prototype.setVisible = function () {
        this.renderer.setElementClass(this.el.nativeElement, 'hidden-xs-up', false);
    };
    HasAnyAuthorityDirective.prototype.setHidden = function () {
        this.renderer.setElementClass(this.el.nativeElement, 'hidden-xs-up', true);
    };
    HasAnyAuthorityDirective.prototype.setVisibilitySync = function () {
        var result = this.principal.hasAnyAuthority(this.authority);
        if (result) {
            this.setVisible();
        }
        else {
            this.setHidden();
        }
    };
    return HasAnyAuthorityDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", void 0);
HasAnyAuthorityDirective = __decorate([
    core_1.Directive({
        selector: '[jhiHasAnyAuthority]'
    }),
    __metadata("design:paramtypes", [principal_service_1.Principal, core_1.ElementRef, core_1.Renderer])
], HasAnyAuthorityDirective);
exports.HasAnyAuthorityDirective = HasAnyAuthorityDirective;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/has-authority.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var HasAuthorityDirective = (function () {
    function HasAuthorityDirective(principal, el, renderer) {
        this.principal = principal;
        this.el = el;
        this.renderer = renderer;
    }
    HasAuthorityDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.authority = this.jhiHasAuthority.replace(/\s+/g, '');
        if (this.authority.length > 0) {
            this.setVisibilityAsync();
        }
        this.principal.getAuthenticationState().subscribe(function (identity) { return _this.setVisibilitySync(); });
    };
    HasAuthorityDirective.prototype.setVisibilitySync = function () {
        if (this.principal.hasAnyAuthority([this.authority])) {
            this.setVisible();
        }
        else {
            this.setHidden();
        }
    };
    HasAuthorityDirective.prototype.setVisible = function () {
        this.renderer.setElementClass(this.el.nativeElement, 'hidden-xs-up', false);
    };
    HasAuthorityDirective.prototype.setHidden = function () {
        this.renderer.setElementClass(this.el.nativeElement, 'hidden-xs-up', true);
    };
    HasAuthorityDirective.prototype.setVisibilityAsync = function () {
        var _this = this;
        this.principal.hasAuthority(this.authority).then(function (result) {
            if (result) {
                _this.setVisible();
            }
            else {
                _this.setHidden();
            }
        });
    };
    return HasAuthorityDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HasAuthorityDirective.prototype, "jhiHasAuthority", void 0);
HasAuthorityDirective = __decorate([
    core_1.Directive({
        selector: '[jhiHasAuthority]'
    }),
    __metadata("design:paramtypes", [principal_service_1.Principal, core_1.ElementRef, core_1.Renderer])
], HasAuthorityDirective);
exports.HasAuthorityDirective = HasAuthorityDirective;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/principal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Subject_1 = __webpack_require__(21);
var account_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts");
var Principal = (function () {
    function Principal(account) {
        this.account = account;
        this.authenticated = false;
        this.authenticationState = new Subject_1.Subject();
    }
    Principal.prototype.authenticate = function (_identity) {
        this._identity = _identity;
        this.authenticated = _identity !== null;
    };
    Principal.prototype.hasAnyAuthority = function (authorities) {
        if (!this.authenticated || !this._identity || !this._identity.authorities) {
            return false;
        }
        for (var i = 0; i < authorities.length; i++) {
            if (this._identity.authorities.indexOf(authorities[i]) !== -1) {
                return true;
            }
        }
        return false;
    };
    Principal.prototype.hasAuthority = function (authority) {
        if (!this.authenticated) {
            return Promise.resolve(false);
        }
        return this.identity().then(function (id) {
            return id.authorities && id.authorities.indexOf(authority) !== -1;
        }, function () {
            return false;
        });
    };
    Principal.prototype.identity = function (force) {
        var _this = this;
        if (force === true) {
            this._identity = undefined;
        }
        // check and see if we have retrieved the _identity data from the server.
        // if we have, reuse it by immediately resolving
        if (this._identity) {
            return Promise.resolve(this._identity);
        }
        // retrieve the _identity data from the server, update the _identity object, and then resolve.
        return this.account.get().toPromise().then(function (account) {
            if (account) {
                _this._identity = account;
                _this.authenticated = true;
            }
            else {
                _this._identity = null;
                _this.authenticated = false;
            }
            _this.authenticationState.next(_this._identity);
            return _this._identity;
        }).catch(function (err) {
            _this._identity = null;
            _this.authenticated = false;
            _this.authenticationState.next(_this._identity);
            return null;
        });
    };
    Principal.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    Principal.prototype.isIdentityResolved = function () {
        return this._identity !== undefined;
    };
    Principal.prototype.getAuthenticationState = function () {
        return this.authenticationState.asObservable();
    };
    Principal.prototype.getImageUrl = function () {
        return this.isIdentityResolved() ? this._identity.imageUrl : null;
    };
    return Principal;
}());
Principal = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], Principal);
exports.Principal = Principal;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/state-storage.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ng2_webstorage_1 = __webpack_require__(7);
var StateStorageService = (function () {
    function StateStorageService($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
    }
    StateStorageService.prototype.getPreviousState = function () {
        return this.$sessionStorage.retrieve('previousState');
    };
    StateStorageService.prototype.resetPreviousState = function () {
        this.$sessionStorage.clear('previousState');
    };
    StateStorageService.prototype.storePreviousState = function (previousStateName, previousStateParams) {
        var previousState = { 'name': previousStateName, 'params': previousStateParams };
        this.$sessionStorage.store('previousState', previousState);
    };
    StateStorageService.prototype.getDestinationState = function () {
        return this.$sessionStorage.retrieve('destinationState');
    };
    StateStorageService.prototype.storeDestinationState = function (destinationState, destinationStateParams, fromState) {
        var destinationInfo = {
            'destination': {
                'name': destinationState.name,
                'data': destinationState.data,
            },
            'params': destinationStateParams,
            'from': {
                'name': fromState.name,
            }
        };
        this.$sessionStorage.store('destinationState', destinationInfo);
    };
    return StateStorageService;
}());
StateStorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_webstorage_1.SessionStorageService])
], StateStorageService);
exports.StateStorageService = StateStorageService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/user-route-access-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(4);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserRouteAccessService = (function () {
    function UserRouteAccessService(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    UserRouteAccessService.prototype.canActivate = function (route) {
        return this.auth.authorize(false).then(function (canActivate) { return canActivate; });
    };
    return UserRouteAccessService;
}());
UserRouteAccessService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, _1.AuthService])
], UserRouteAccessService);
exports.UserRouteAccessService = UserRouteAccessService;


/***/ }),

/***/ "./src/main/webapp/app/shared/constants/pagination.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.ITEMS_PER_PAGE = 20;


/***/ }),

/***/ "./src/main/webapp/app/shared/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert-error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/csrf.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/auth-oauth2.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/auth.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/has-any-authority.directive.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/has-authority.directive.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/constants/pagination.constants.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/account.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-libs.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-common.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/user-route-access-service.ts"));


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login-modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var login_component_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.component.ts");
var LoginModalService = (function () {
    function LoginModalService(modalService) {
        this.modalService = modalService;
        this.isOpen = false;
    }
    LoginModalService.prototype.open = function () {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        var modalRef = this.modalService.open(login_component_1.JhiLoginModalComponent);
        modalRef.result.then(function (result) {
            console.log("Closed with: " + result);
            _this.isOpen = false;
        }, function (reason) {
            console.log("Dismissed " + reason);
            _this.isOpen = false;
        });
        return modalRef;
    };
    return LoginModalService;
}());
LoginModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], LoginModalService);
exports.LoginModalService = LoginModalService;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\" (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">x</span>\n    </button>\n    <h4 class=\"modal-title\">Sign in</h4>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-md-4 offset-md-4\">\n            <h1>Sign in</h1>\n        </div>\n        <div class=\"col-md-8 offset-md-2\">\n            <div class=\"alert alert-danger\" *ngIf=\"authenticationError\">\n                <strong>Failed to sign in!</strong> Please check your credentials and try again.\n            </div>\n        </div>\n        <div class=\"col-md-8 offset-md-2\">\n            <form class=\"form\" role=\"form\" (ngSubmit)=\"login()\">\n                <div class=\"form-group\">\n                    <label for=\"username\">Login</label>\n                    <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Your username\"\n                    [(ngModel)]=\"username\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Your password\"\n                           [(ngModel)]=\"password\">\n                </div>\n                <div class=\"form-check\">\n                    <label class=\"form-check-label\" for=\"rememberMe\">\n                        <input class=\"form-check-input\" type=\"checkbox\" name=\"rememberMe\" id=\"rememberMe\" [(ngModel)]=\"rememberMe\" checked>\n                        <span>Remember me</span>\n                    </label>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n            </form>\n            <p></p>\n            <div class=\"alert alert-warning\">\n                <a class=\"alert-link\" (click)=\"requestResetPassword()\">Did you forget your password?</a>\n            </div>\n            <div class=\"alert alert-warning\">\n            \t<span>You don't have an account yet?</span>\n                <a class=\"alert-link\" (click)=\"register()\">Register a new account</a>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(5);
var router_1 = __webpack_require__(4);
var ng_jhipster_1 = __webpack_require__(2);
var login_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var JhiLoginModalComponent = (function () {
    function JhiLoginModalComponent(eventManager, loginService, stateStorageService, elementRef, renderer, activeModal, router) {
        this.eventManager = eventManager;
        this.loginService = loginService;
        this.stateStorageService = stateStorageService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.activeModal = activeModal;
        this.router = router;
        this.credentials = {};
    }
    JhiLoginModalComponent.prototype.ngOnInit = function () {
    };
    JhiLoginModalComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
    };
    JhiLoginModalComponent.prototype.cancel = function () {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
        this.activeModal.dismiss('cancel');
    };
    JhiLoginModalComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login({
            username: this.username,
            password: this.password,
            rememberMe: this.rememberMe
        }).then(function () {
            _this.authenticationError = false;
            _this.activeModal.dismiss('login success');
            if (_this.router.url === '/register' || _this.router.url === '/activate' ||
                _this.router.url === '/finishReset' || _this.router.url === '/requestReset') {
                _this.router.navigate(['']);
            }
            _this.eventManager.broadcast({
                name: 'authenticationSuccess',
                content: 'Sending Authentication Success'
            });
            // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // // since login is succesful, go to stored previousState and clear previousState
            var previousState = _this.stateStorageService.getPreviousState();
            if (previousState) {
                _this.stateStorageService.resetPreviousState();
                _this.router.navigate([previousState.name], { queryParams: previousState.params });
            }
        }).catch(function () {
            _this.authenticationError = true;
        });
    };
    JhiLoginModalComponent.prototype.register = function () {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    };
    JhiLoginModalComponent.prototype.requestResetPassword = function () {
        this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/reset', 'request']);
    };
    return JhiLoginModalComponent;
}());
JhiLoginModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-login-modal',
        template: __webpack_require__("./src/main/webapp/app/shared/login/login.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.EventManager,
        login_service_1.LoginService,
        state_storage_service_1.StateStorageService,
        core_1.ElementRef,
        core_1.Renderer,
        ng_bootstrap_1.NgbActiveModal,
        router_1.Router])
], JhiLoginModalComponent);
exports.JhiLoginModalComponent = JhiLoginModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var auth_oauth2_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/auth-oauth2.service.ts");
var LoginService = (function () {
    function LoginService(principal, authServerProvider) {
        this.principal = principal;
        this.authServerProvider = authServerProvider;
    }
    LoginService.prototype.login = function (credentials, callback) {
        var _this = this;
        var cb = callback || function () { };
        return new Promise(function (resolve, reject) {
            _this.authServerProvider.login(credentials).subscribe(function (data) {
                _this.principal.identity(true).then(function (account) {
                    resolve(data);
                });
                return cb();
            }, function (err) {
                _this.logout();
                reject(err);
                return cb(err);
            });
        });
    };
    LoginService.prototype.logout = function () {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [principal_service_1.Principal,
        auth_oauth2_service_1.AuthServerProvider])
], LoginService);
exports.LoginService = LoginService;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-common.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(9);
var ng_jhipster_1 = __webpack_require__(2);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
function alertServiceProvider(sanitizer) {
    // set below to true to make alerts look like toast
    var isToast = false;
    return new ng_jhipster_1.AlertService(sanitizer, isToast);
}
exports.alertServiceProvider = alertServiceProvider;
var ConcoursePipelinesSharedCommonModule = (function () {
    function ConcoursePipelinesSharedCommonModule() {
    }
    return ConcoursePipelinesSharedCommonModule;
}());
ConcoursePipelinesSharedCommonModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.ConcoursePipelinesSharedLibsModule
        ],
        declarations: [
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent
        ],
        providers: [
            {
                provide: ng_jhipster_1.AlertService,
                useFactory: alertServiceProvider,
                deps: [core_1.Sanitizer]
            },
            platform_browser_1.Title
        ],
        exports: [
            _1.ConcoursePipelinesSharedLibsModule,
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent
        ]
    })
], ConcoursePipelinesSharedCommonModule);
exports.ConcoursePipelinesSharedCommonModule = ConcoursePipelinesSharedCommonModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-libs.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(15);
var http_1 = __webpack_require__(3);
var common_1 = __webpack_require__(10);
var ng_bootstrap_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(2);
var angular2_infinite_scroll_1 = __webpack_require__(17);
var ConcoursePipelinesSharedLibsModule = (function () {
    function ConcoursePipelinesSharedLibsModule() {
    }
    return ConcoursePipelinesSharedLibsModule;
}());
ConcoursePipelinesSharedLibsModule = __decorate([
    core_1.NgModule({
        imports: [
            ng_bootstrap_1.NgbModule.forRoot(),
            ng_jhipster_1.NgJhipsterModule.forRoot({}),
            angular2_infinite_scroll_1.InfiniteScrollModule
        ],
        exports: [
            forms_1.FormsModule,
            http_1.HttpModule,
            common_1.CommonModule,
            ng_bootstrap_1.NgbModule,
            ng_jhipster_1.NgJhipsterModule,
            angular2_infinite_scroll_1.InfiniteScrollModule
        ]
    })
], ConcoursePipelinesSharedLibsModule);
exports.ConcoursePipelinesSharedLibsModule = ConcoursePipelinesSharedLibsModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(10);
var cookies_service_1 = __webpack_require__(19);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ConcoursePipelinesSharedModule = (function () {
    function ConcoursePipelinesSharedModule() {
    }
    return ConcoursePipelinesSharedModule;
}());
ConcoursePipelinesSharedModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.ConcoursePipelinesSharedLibsModule,
            _1.ConcoursePipelinesSharedCommonModule
        ],
        declarations: [
            _1.JhiLoginModalComponent,
            _1.HasAuthorityDirective,
            _1.HasAnyAuthorityDirective
        ],
        providers: [
            cookies_service_1.CookieService,
            _1.LoginService,
            _1.LoginModalService,
            _1.AccountService,
            _1.StateStorageService,
            _1.Principal,
            _1.CSRFService,
            _1.AuthServerProvider,
            _1.AuthService,
            _1.UserService,
            common_1.DatePipe
        ],
        entryComponents: [_1.JhiLoginModalComponent],
        exports: [
            _1.ConcoursePipelinesSharedCommonModule,
            _1.JhiLoginModalComponent,
            _1.HasAuthorityDirective,
            _1.HasAnyAuthorityDirective,
            common_1.DatePipe
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], ConcoursePipelinesSharedModule);
exports.ConcoursePipelinesSharedModule = ConcoursePipelinesSharedModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/account.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Account = (function () {
    function Account(activated, authorities, email, firstName, langKey, lastName, login, imageUrl) {
        this.activated = activated;
        this.authorities = authorities;
        this.email = email;
        this.firstName = firstName;
        this.langKey = langKey;
        this.lastName = lastName;
        this.login = login;
        this.imageUrl = imageUrl;
    }
    return Account;
}());
exports.Account = Account;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var User = (function () {
    function User(id, login, firstName, lastName, email, activated, langKey, authorities, createdBy, createdDate, lastModifiedBy, lastModifiedDate, password) {
        this.id = id ? id : null;
        this.login = login ? login : null;
        this.firstName = firstName ? firstName : null;
        this.lastName = lastName ? lastName : null;
        this.email = email ? email : null;
        this.activated = activated ? activated : false;
        this.langKey = langKey ? langKey : null;
        this.authorities = authorities ? authorities : null;
        this.createdBy = createdBy ? createdBy : null;
        this.createdDate = createdDate ? createdDate : null;
        this.lastModifiedBy = lastModifiedBy ? lastModifiedBy : null;
        this.lastModifiedDate = lastModifiedDate ? lastModifiedDate : null;
        this.password = password ? password : null;
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(3);
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.resourceUrl = 'api/users';
    }
    UserService.prototype.create = function (user) {
        return this.http.post(this.resourceUrl, user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.resourceUrl, user);
    };
    UserService.prototype.find = function (login) {
        return this.http.get(this.resourceUrl + "/" + login).map(function (res) { return res.json(); });
    };
    UserService.prototype.query = function (req) {
        var params = new http_1.URLSearchParams();
        if (req) {
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('filter', req.filter);
        }
        var options = {
            search: params
        };
        return this.http.get(this.resourceUrl, options);
    };
    UserService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./src/main/webapp/content/images/hipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca854e6d0785ba4b9d715049c0bdbcb3.png";

/***/ }),

/***/ "./src/main/webapp/content/images/hipster2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1cd3a1d782e85ba37677c1a2099bc002.png";

/***/ }),

/***/ "./src/main/webapp/content/images/logo-jhipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a30deb26b4eb1521433021e326cbcc2c.png";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(0);

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(14);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(433);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(249);

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(26);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(436);

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(437);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(441);

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(558);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(439);

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(9);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(103);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(434);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(435);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(440);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(104);

/***/ })

},["./src/main/webapp/app/app.main.ts"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjY291bnQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY2NvdW50LnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNzcz83NzBkIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXQtZGF0YS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZG9jcy9kb2NzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2cubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbW9kYWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvY29uZmlnL3Byb2QuY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2NvbmZpZy91aWItcGFnaW5hdGlvbi5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC1leHBpcmVkLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2F1dGguaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2h0dHAucHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3Ivbm90aWZpY2F0aW9uLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZW50aXR5Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY3NzP2Q3OTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9sYXlvdXQtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY3NzPzY1NzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uY3NzPzdiM2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3Byb2ZpbGUtaW5mby5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LWVycm9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9hY2NvdW50LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9hdXRoLW9hdXRoMi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvY3NyZi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvaGFzLWFueS1hdXRob3JpdHkuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvaGFzLWF1dGhvcml0eS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9wcmluY2lwYWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3N0YXRlLXN0b3JhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3VzZXItcm91dGUtYWNjZXNzLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvY29uc3RhbnRzL3BhZ2luYXRpb24uY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLWNvbW1vbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLWxpYnMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci9hY2NvdW50Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3Rlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2xvZ28tamhpcHN0ZXIucG5nIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tbW9uL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvUnguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Zvcm1zL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1jb29raWUvY29yZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsL2FuZ3VsYXIyLWluZmluaXRlLXNjcm9sbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3ZlbmRvci50cyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItY29va2llL3NlcnZpY2VzL2Nvb2tpZXMuc2VydmljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmctamhpcHN0ZXIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvU3ViamVjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXdlYnN0b3JhZ2UvZGlzdC9hcHAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvT2JzZXJ2YWJsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSwwT0FBMk8scUJBQXFCLHNCQUFzQixlQUFlLHVCQUF1QixnQkFBZ0IseUJBQXlCLEdBQUcsaUJBQWlCLDBCQUEwQixHQUFHLFVBQVUsc0JBQXNCLHdCQUF3QiwyQkFBMkIsaUJBQWlCLHVCQUF1QixpQkFBaUIsR0FBRzs7QUFFcmlCOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EscU5BQXNOLDRCQUE0QixtQkFBbUIsb0JBQW9CLHdIQUFnRywrQkFBK0IsR0FBRyx1YkFBdWIsZ0JBQWdCLDhIQUFzRyxtQ0FBbUMsT0FBTyxHQUFHOztBQUVyL0I7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxnTkFBaU4sc0JBQXNCLG9CQUFvQixnQkFBZ0IsZ0NBQWdDLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsbUJBQW1CLGtCQUFrQix5QkFBeUIsR0FBRyxzSEFBc0gsZ0NBQWdDLEdBQUcsd0NBQXdDLDBCQUEwQixHQUFHLDhCQUE4QixxQkFBcUIsR0FBRyxnREFBZ0QsMEJBQTBCLEdBQUcsMkJBQTJCLHVCQUF1QixHQUFHLG1DQUFtQyxrQkFBa0IsdUJBQXVCLG9CQUFvQixHQUFHLHlDQUF5QyxrQkFBa0IsR0FBRyw4Q0FBOEMsMEJBQTBCLHNCQUFzQixPQUFPLEdBQUcsbUJBQW1CLDRCQUE0Qiw2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OztBQ0FBLCtDOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDQUEsNkM7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5zdGFydCBQYXNzd29yZCBzdHJlbmd0aCBiYXIgc3R5bGVcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbnVsI3N0cmVuZ3RoQmFyIHtcXG4gICAgZGlzcGxheTppbmxpbmU7XFxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcXG4gICAgbWFyZ2luOjA7XFxuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgdmVydGljYWwtYWxpZ246MnB4O1xcbn1cXG5cXG4ucG9pbnQ6bGFzdCB7XFxuICAgIG1hcmdpbjowICFpbXBvcnRhbnQ7XFxufVxcbi5wb2ludCB7XFxuICAgIGJhY2tncm91bmQ6I0RERDtcXG4gICAgYm9yZGVyLXJhZGl1czoycHg7XFxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6NXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6MXB4O1xcbiAgICB3aWR0aDoyMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC1zdHJlbmd0aC1iYXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbk1haW4gcGFnZSBzdHlsZXNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5oaXBzdGVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzQ3cHg7XFxuICAgIGhlaWdodDogNDk3cHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9jb250ZW50L2ltYWdlcy9oaXBzdGVyLnBuZ1wiKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4vKiB3YWl0IGF1dG9wcmVmaXhlciB1cGRhdGUgdG8gYWxsb3cgc2ltcGxlIGdlbmVyYXRpb24gb2YgaGlnaCBwaXhlbCBkZW5zaXR5IG1lZGlhIHF1ZXJ5ICovXFxuQG1lZGlhXFxub25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxcbm9ubHkgc2NyZWVuIGFuZCAoICAgbWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSxcXG5vbmx5IHNjcmVlbiBhbmQgKCAgICAgLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcXG5vbmx5IHNjcmVlbiBhbmQgKCAgICAgICAgbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXFxub25seSBzY3JlZW4gYW5kICggICAgICAgICAgICAgICAgbWluLXJlc29sdXRpb246IDE5MmRwaSksXFxub25seSBzY3JlZW4gYW5kICggICAgICAgICAgICAgICAgbWluLXJlc29sdXRpb246IDJkcHB4KSB7XFxuICAgIC5oaXBzdGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9jb250ZW50L2ltYWdlcy9oaXBzdGVyMngucG5nXCIpICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICB9XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5OYXZiYXJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5uYXZiYXItdmVyc2lvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgY29sb3I6ICNjY2NcXG59XFxuXFxuLmpoLW5hdmJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNkNDc7XFxuICAgIHBhZGRpbmc6IC4yZW0gMWVtO1xcbn1cXG5cXG4uamgtbmF2YmFyIC5wcm9maWxlLWltYWdlIHtcXG4gICAgbWFyZ2luOiAtMTBweCAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmpoLW5hdmJhciAuZHJvcGRvd24taXRlbS5hY3RpdmUsIC5qaC1uYXZiYXIgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlOmZvY3VzLCAuamgtbmF2YmFyIC5kcm9wZG93bi1pdGVtLmFjdGl2ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNkNDc7XFxufVxcblxcbi5qaC1uYXZiYXIgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMC4xNWVtO1xcbn1cXG5cXG4uamgtbmF2YmFyIHVsLm5hdmJhci1uYXYge1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmpoLW5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0rLm5hdi1pdGVtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG59XFxuXFxuLmpoLW5hdmJhciBhLm5hdi1saW5rIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmpoLW5hdmJhciAuamgtbmF2YmFyLXRvZ2dsZXIge1xcbiAgICBjb2xvcjogI2NjYztcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmpoLW5hdmJhciAuamgtbmF2YmFyLXRvZ2dsZXI6aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgLmpoLWxvZ28tY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbi5uYXZiYXItdGl0bGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuTG9nbyBzdHlsZXNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5uYXZiYXItYnJhbmQubG9nbyB7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbn1cXG5cXG4ubG9nbyAubG9nby1pbWcge1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2lkdGg6IDcwcHg7XFxufVxcblxcbi5sb2dvLWltZyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uLy4uLy4uL2NvbnRlbnQvaW1hZ2VzL2xvZ28tamhpcHN0ZXIucG5nXCIpICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuRGV2ZWxvcGVtZW50IFJpYmJvblxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLnJpYmJvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcwLCAwLCAwLCAwLjUpO1xcbiAgICBsZWZ0OiAtMy41ZW07XFxuICAgIG1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICBtcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICBvLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIHdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDBweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbn1cXG5cXG4ucmliYm9uIGEge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG1hcmdpbjogMXB4IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICM0NDQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDb25jb3Vyc2VQaXBlbGluZXNTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5pbXBvcnQge1xuICAgIFJlZ2lzdGVyLFxuICAgIEFjdGl2YXRlLFxuICAgIFBhc3N3b3JkLFxuICAgIFBhc3N3b3JkUmVzZXRJbml0LFxuICAgIFBhc3N3b3JkUmVzZXRGaW5pc2gsXG4gICAgUGFzc3dvcmRTdHJlbmd0aEJhckNvbXBvbmVudCxcbiAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICBBY3RpdmF0ZUNvbXBvbmVudCxcbiAgICBQYXNzd29yZENvbXBvbmVudCxcbiAgICBQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudCxcbiAgICBQYXNzd29yZFJlc2V0RmluaXNoQ29tcG9uZW50LFxuICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgIGFjY291bnRTdGF0ZVxufSBmcm9tICcuLyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb25jb3Vyc2VQaXBlbGluZXNTaGFyZWRNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KGFjY291bnRTdGF0ZSwgeyB1c2VIYXNoOiB0cnVlIH0pXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQWN0aXZhdGVDb21wb25lbnQsXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBQYXNzd29yZENvbXBvbmVudCxcbiAgICAgICAgUGFzc3dvcmRTdHJlbmd0aEJhckNvbXBvbmVudCxcbiAgICAgICAgUGFzc3dvcmRSZXNldEluaXRDb21wb25lbnQsXG4gICAgICAgIFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQsXG4gICAgICAgIFNldHRpbmdzQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUmVnaXN0ZXIsXG4gICAgICAgIEFjdGl2YXRlLFxuICAgICAgICBQYXNzd29yZCxcbiAgICAgICAgUGFzc3dvcmRSZXNldEluaXQsXG4gICAgICAgIFBhc3N3b3JkUmVzZXRGaW5pc2hcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBDb25jb3Vyc2VQaXBlbGluZXNBY2NvdW50TW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMsIENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7XG4gICAgYWN0aXZhdGVSb3V0ZSxcbiAgICBwYXNzd29yZFJvdXRlLFxuICAgIHBhc3N3b3JkUmVzZXRGaW5pc2hSb3V0ZSxcbiAgICBwYXNzd29yZFJlc2V0SW5pdFJvdXRlLFxuICAgIHJlZ2lzdGVyUm91dGUsXG4gICAgc2V0dGluZ3NSb3V0ZVxufSBmcm9tICcuLyc7XG5cbmxldCBBQ0NPVU5UX1JPVVRFUyA9IFtcbiAgIGFjdGl2YXRlUm91dGUsXG4gICBwYXNzd29yZFJvdXRlLFxuICAgcGFzc3dvcmRSZXNldEZpbmlzaFJvdXRlLFxuICAgcGFzc3dvcmRSZXNldEluaXRSb3V0ZSxcbiAgIHJlZ2lzdGVyUm91dGUsXG4gICBzZXR0aW5nc1JvdXRlXG5dO1xuXG5leHBvcnQgY29uc3QgYWNjb3VudFN0YXRlOiBSb3V0ZXMgPSBbe1xuICAgIHBhdGg6ICcnLFxuICAgIGNoaWxkcmVuOiBBQ0NPVU5UX1JPVVRFU1xufV07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5yb3V0ZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPlxcbiAgICAgICAgICAgIDxoMT5BY3RpdmF0aW9uPC9oMT5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdJZj1cXFwic3VjY2Vzc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Zb3VyIHVzZXIgaGFzIGJlZW4gYWN0aXZhdGVkLjwvc3Ryb25nPiBQbGVhc2VcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiAoY2xpY2spPVxcXCJsb2dpbigpXFxcIj5zaWduIGluPC9hPi5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVycm9yXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Zb3VyIHVzZXIgY291bGQgbm90IGJlIGFjdGl2YXRlZC48L3N0cm9uZz4gUGxlYXNlIHVzZSB0aGUgcmVnaXN0cmF0aW9uIGZvcm0gdG8gc2lnbiB1cC5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFjdGl2YXRlIH0gZnJvbSAnLi9hY3RpdmF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktYWN0aXZhdGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hY3RpdmF0ZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAgc3VjY2Vzczogc3RyaW5nO1xuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlOiBBY3RpdmF0ZSxcbiAgICAgICAgcHJpdmF0ZSBsb2dpbk1vZGFsU2VydmljZTogTG9naW5Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGUuZ2V0KHBhcmFtc1sna2V5J10pLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBBY3RpdmF0ZUNvbXBvbmVudCB9IGZyb20gJy4vYWN0aXZhdGUuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAnYWN0aXZhdGUnLFxuICBjb21wb25lbnQ6IEFjdGl2YXRlQ29tcG9uZW50LFxuICBkYXRhOiB7XG4gICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgIHBhZ2VUaXRsZTogJ0FjdGl2YXRpb24nXG4gIH0sXG4gIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY3RpdmF0ZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgZ2V0KGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IHBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMuc2V0KCdrZXknLCBrZXkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdhcGkvYWN0aXZhdGUnLCB7XG4gICAgICAgICAgICBzZWFyY2g6IHBhcmFtc1xuICAgICAgICB9KS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5zZXJ2aWNlLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY3RpdmF0ZS9hY3RpdmF0ZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYWN0aXZhdGUvYWN0aXZhdGUucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC9wYXNzd29yZC1zdHJlbmd0aC1iYXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQvcGFzc3dvcmQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkL3Bhc3N3b3JkLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcmVnaXN0ZXIvcmVnaXN0ZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3Mucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hY2NvdW50LnJvdXRlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgY29sLW1kLW9mZnNldC00XFxcIj5cXG4gICAgICAgICAgICA8aDE+UmVzZXQgcGFzc3dvcmQ8L2gxPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImtleU1pc3NpbmdcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlRoZSBwYXNzd29yZCByZXNldCBrZXkgaXMgbWlzc2luZy48L3N0cm9uZz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIiAqbmdJZj1cXFwiIXN1Y2Nlc3MgJiYgIWtleU1pc3NpbmdcXFwiPlxcbiAgICAgICAgICAgICAgICA8cD5DaG9vc2UgYSBuZXcgcGFzc3dvcmQ8L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JcXFwiPlxcbiAgICAgICAgICAgICAgICA8cD5Zb3VyIHBhc3N3b3JkIGNvdWxkbid0IGJlIHJlc2V0LiBSZW1lbWJlciBhIHBhc3N3b3JkIHJlcXVlc3QgaXMgb25seSB2YWxpZCBmb3IgMjQgaG91cnMuPC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdJZj1cXFwic3VjY2Vzc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+WW91ciBwYXNzd29yZCBoYXMgYmVlbiByZXNldC48L3N0cm9uZz4gUGxlYXNlIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcImxvZ2luKClcXFwiPnNpZ24gaW48L2E+LlxcbiAgICAgICAgICAgIDwvcD5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJkb05vdE1hdGNoXFxcIj5cXG4gICAgICAgICAgICAgICAgVGhlIHBhc3N3b3JkIGFuZCBpdHMgY29uZmlybWF0aW9uIGRvIG5vdCBtYXRjaCFcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIha2V5TWlzc2luZ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxmb3JtICpuZ0lmPVxcXCIhc3VjY2Vzc1xcXCIgbmFtZT1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwiZmluaXNoUmVzZXQoKVxcXCIgI3Bhc3N3b3JkRm9ybT1cXFwibmdGb3JtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInBhc3N3b3JkXFxcIj5OZXcgcGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgI3Bhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJOZXcgcGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJyZXNldEFjY291bnQucGFzc3dvcmRcXFwiIG1pbmxlbmd0aD00IG1heGxlbmd0aD01MCByZXF1aXJlZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmRpcnR5ICYmIHBhc3N3b3JkSW5wdXQuaW52YWxpZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZC5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgcGFzc3dvcmQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGpoaS1wYXNzd29yZC1zdHJlbmd0aC1iYXIgW3Bhc3N3b3JkVG9DaGVja109XFxcInJlc2V0QWNjb3VudC5wYXNzd29yZFxcXCI+PC9qaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiPk5ldyBwYXNzd29yZCBjb25maXJtYXRpb248L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiAjY29uZmlybVBhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDb25maXJtIHRoZSBuZXcgcGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG1pbmxlbmd0aD00IG1heGxlbmd0aD01MCByZXF1aXJlZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5kaXJ0eSAmJiBjb25maXJtUGFzc3dvcmRJbnB1dC5pbnZhbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBwYXNzd29yZCBjb25maXJtYXRpb24gaXMgcmVxdWlyZWQuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcInBhc3N3b3JkRm9ybS5mb3JtLmludmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlJlc2V0IFBhc3N3b3JkPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFJlbmRlcmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUGFzc3dvcmRSZXNldEZpbmlzaCB9IGZyb20gJy4vcGFzc3dvcmQtcmVzZXQtZmluaXNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1wYXNzd29yZC1yZXNldC1maW5pc2gnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICAgIGRvTm90TWF0Y2g6IHN0cmluZztcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIGtleU1pc3Npbmc6IGJvb2xlYW47XG4gICAgcmVzZXRBY2NvdW50OiBhbnk7XG4gICAgc3VjY2Vzczogc3RyaW5nO1xuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICBrZXk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhc3N3b3JkUmVzZXRGaW5pc2g6IFBhc3N3b3JkUmVzZXRGaW5pc2gsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlclxuICAgICkge1xuICAgICAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5ID0gcGFyYW1zWydrZXknXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVzZXRBY2NvdW50ID0ge307XG4gICAgICAgIHRoaXMua2V5TWlzc2luZyA9ICF0aGlzLmtleTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpLCAnZm9jdXMnLCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5pc2hSZXNldCgpIHtcbiAgICAgICAgdGhpcy5kb05vdE1hdGNoID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnJlc2V0QWNjb3VudC5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9ICdFUlJPUic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVzZXRGaW5pc2guc2F2ZSh7a2V5OiB0aGlzLmtleSwgbmV3UGFzc3dvcmQ6IHRoaXMucmVzZXRBY2NvdW50LnBhc3N3b3JkfSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSAnT0snO1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdFUlJPUic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQgfSBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRSZXNldEZpbmlzaFJvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJ3Jlc2V0L2ZpbmlzaCcsXG4gIGNvbXBvbmVudDogUGFzc3dvcmRSZXNldEZpbmlzaENvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICBwYWdlVGl0bGU6ICdQYXNzd29yZCdcbiAgfSxcbiAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRSZXNldEZpbmlzaCB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgc2F2ZShrZXlBbmRQYXNzd29yZDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvYWNjb3VudC9yZXNldF9wYXNzd29yZC9maW5pc2gnLCBrZXlBbmRQYXNzd29yZCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPlxcbiAgICAgICAgICAgIDxoMT5SZXNldCB5b3VyIHBhc3N3b3JkPC9oMT5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlcnJvckVtYWlsTm90RXhpc3RzXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5FLU1haWwgYWRkcmVzcyBpc24ndCByZWdpc3RlcmVkITwvc3Ryb25nPiBQbGVhc2UgY2hlY2sgYW5kIHRyeSBhZ2Fpbi5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIiAqbmdJZj1cXFwiIXN1Y2Nlc3NcXFwiPlxcbiAgICAgICAgICAgICAgICA8cD5FbnRlciB0aGUgZS1tYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIuPC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ0lmPVxcXCJzdWNjZXNzID09ICdPSydcXFwiPlxcbiAgICAgICAgICAgICAgICA8cD5DaGVjayB5b3VyIGUtbWFpbHMgZm9yIGRldGFpbHMgb24gaG93IHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuPC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxmb3JtICpuZ0lmPVxcXCIhc3VjY2Vzc1xcXCIgbmFtZT1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwicmVxdWVzdFJlc2V0KClcXFwiICNyZXNldFJlcXVlc3RGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsXFxcIj5FLW1haWw8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91ciBlLW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInJlc2V0QWNjb3VudC5lbWFpbFxcXCIgbWlubGVuZ3RoPTUgbWF4bGVuZ3RoPTEwMCAjZW1haWxJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQ+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJlbWFpbElucHV0LmRpcnR5ICYmIGVtYWlsSW5wdXQuaW52YWxpZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBlLW1haWwgaXMgcmVxdWlyZWQuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMuZW1haWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGUtbWFpbCBpcyBpbnZhbGlkLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgZS1tYWlsIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycy5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGUtbWFpbCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMTAwIGNoYXJhY3RlcnMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcInJlc2V0UmVxdWVzdEZvcm0uZm9ybS5pbnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5SZXNldDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZm9ybT5cXG5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBSZW5kZXJlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0SW5pdCB9IGZyb20gJy4vcGFzc3dvcmQtcmVzZXQtaW5pdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktcGFzc3dvcmQtcmVzZXQtaW5pdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIGVycm9yRW1haWxOb3RFeGlzdHM6IHN0cmluZztcbiAgICByZXNldEFjY291bnQ6IGFueTtcbiAgICBzdWNjZXNzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYXNzd29yZFJlc2V0SW5pdDogUGFzc3dvcmRSZXNldEluaXQsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXJcbiAgICApIHtcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRBY2NvdW50ID0ge307XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyksICdmb2N1cycsIFtdKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0UmVzZXQgKCkge1xuXG4gICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICB0aGlzLmVycm9yRW1haWxOb3RFeGlzdHMgPSBudWxsO1xuXG4gICAgICAgIHRoaXMucGFzc3dvcmRSZXNldEluaXQuc2F2ZSh0aGlzLnJlc2V0QWNjb3VudC5lbWFpbCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9ICdPSyc7XG4gICAgICAgIH0sIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCAmJiByZXNwb25zZS5kYXRhID09PSAnZS1tYWlsIGFkZHJlc3Mgbm90IHJlZ2lzdGVyZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckVtYWlsTm90RXhpc3RzID0gJ0VSUk9SJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdFUlJPUic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBwYXNzd29yZFJlc2V0SW5pdFJvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJ3Jlc2V0L3JlcXVlc3QnLFxuICBjb21wb25lbnQ6IFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50LFxuICBkYXRhOiB7XG4gICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgIHBhZ2VUaXRsZTogJ1Bhc3N3b3JkJ1xuICB9LFxuICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRJbml0IHtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICBzYXZlKG1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL2FjY291bnQvcmVzZXRfcGFzc3dvcmQvaW5pdCcsIG1haWwpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXBhc3N3b3JkLXN0cmVuZ3RoLWJhcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBpZD1cInN0cmVuZ3RoXCI+XG4gICAgICAgICAgICA8c21hbGw+UGFzc3dvcmQgc3RyZW5ndGg6PC9zbWFsbD5cbiAgICAgICAgICAgIDx1bCBpZD1cInN0cmVuZ3RoQmFyXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBvaW50XCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwb2ludFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBvaW50XCI+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICdwYXNzd29yZC1zdHJlbmd0aC1iYXIuY3NzJ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRTdHJlbmd0aEJhckNvbXBvbmVudCB7XG5cbiAgICBjb2xvcnMgPSBbJyNGMDAnLCAnI0Y5MCcsICcjRkYwJywgJyM5RjAnLCAnIzBGMCddO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgICBtZWFzdXJlU3RyZW5ndGgocDogc3RyaW5nKTogbnVtYmVyIHtcblxuICAgICAgICBsZXQgZm9yY2UgPSAwO1xuICAgICAgICBsZXQgcmVnZXggPSAvWyQtLzotP3stfiFcIl5fYFxcW1xcXV0vZzsgLy8gXCJcblxuICAgICAgICBsZXQgbG93ZXJMZXR0ZXJzID0gL1thLXpdKy8udGVzdChwKTtcbiAgICAgICAgbGV0IHVwcGVyTGV0dGVycyA9IC9bQS1aXSsvLnRlc3QocCk7XG4gICAgICAgIGxldCBudW1iZXJzID0gL1swLTldKy8udGVzdChwKTtcbiAgICAgICAgbGV0IHN5bWJvbHMgPSByZWdleC50ZXN0KHApO1xuXG4gICAgICAgIGxldCBmbGFncyA9IFtsb3dlckxldHRlcnMsIHVwcGVyTGV0dGVycywgbnVtYmVycywgc3ltYm9sc107XG4gICAgICAgIGxldCBwYXNzZWRNYXRjaGVzID0gZmxhZ3MuZmlsdGVyKCAoaXNNYXRjaGVkRmxhZzogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlzTWF0Y2hlZEZsYWcgPT09IHRydWU7XG4gICAgICAgIH0pLmxlbmd0aDtcblxuICAgICAgICBmb3JjZSArPSAyICogcC5sZW5ndGggKyAoKHAubGVuZ3RoID49IDEwKSA/IDEgOiAwKTtcbiAgICAgICAgZm9yY2UgKz0gcGFzc2VkTWF0Y2hlcyAqIDEwO1xuXG4gICAgICAgIC8vIHBlbmFsaXR5IChzaG9ydCBwYXNzd29yZClcbiAgICAgICAgZm9yY2UgPSAocC5sZW5ndGggPD0gNikgPyBNYXRoLm1pbihmb3JjZSwgMTApIDogZm9yY2U7XG5cbiAgICAgICAgLy8gcGVuYWxpdHkgKHBvb3IgdmFyaWV0eSBvZiBjaGFyYWN0ZXJzKVxuICAgICAgICBmb3JjZSA9IChwYXNzZWRNYXRjaGVzID09PSAxKSA/IE1hdGgubWluKGZvcmNlLCAxMCkgOiBmb3JjZTtcbiAgICAgICAgZm9yY2UgPSAocGFzc2VkTWF0Y2hlcyA9PT0gMikgPyBNYXRoLm1pbihmb3JjZSwgMjApIDogZm9yY2U7XG4gICAgICAgIGZvcmNlID0gKHBhc3NlZE1hdGNoZXMgPT09IDMpID8gTWF0aC5taW4oZm9yY2UsIDQwKSA6IGZvcmNlO1xuXG4gICAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9O1xuXG4gICAgZ2V0Q29sb3IoczogbnVtYmVyKTogYW55IHtcbiAgICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICAgIGlmIChzIDw9IDEwKSB7XG4gICAgICAgICAgICBpZHggPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHMgPD0gMjApIHtcbiAgICAgICAgICAgIGlkeCA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAocyA8PSAzMCkge1xuICAgICAgICAgICAgaWR4ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChzIDw9IDQwKSB7XG4gICAgICAgICAgICBpZHggPSAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWR4ID0gNDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2lkeDogaWR4ICsgMSwgY29sOiB0aGlzLmNvbG9yc1tpZHhdfTtcbiAgICB9O1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgcGFzc3dvcmRUb0NoZWNrKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHBhc3N3b3JkKSB7XG4gICAgICAgICAgICBsZXQgYyA9IHRoaXMuZ2V0Q29sb3IodGhpcy5tZWFzdXJlU3RyZW5ndGgocGFzc3dvcmQpKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NOYW1lICkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NOYW1lICwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGxpcyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpIDwgYy5pZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUobGlzW2ldLCAnYmFja2dyb3VuZENvbG9yJywgYy5jb2wpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGxpc1tpXSwgJ2JhY2tncm91bmRDb2xvcicsICcjREREJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5jb21wb25lbnQudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wYXNzd29yZC1zdHJlbmd0aC1iYXIuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC1zdHJlbmd0aC1iYXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC1zdHJlbmd0aC1iYXIuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPlxcbiAgICAgICAgICAgIDxoMiAqbmdJZj1cXFwiYWNjb3VudFxcXCI+UGFzc3dvcmQgZm9yIFs8Yj57e2FjY291bnQubG9naW59fTwvYj5dPC9oMj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdJZj1cXFwic3VjY2Vzc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzdHJvbmc+UGFzc3dvcmQgY2hhbmdlZCE8L3N0cm9uZz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlcnJvclxcXCIgPlxcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkFuIGVycm9yIGhhcyBvY2N1cnJlZCE8L3N0cm9uZz4gVGhlIHBhc3N3b3JkIGNvdWxkIG5vdCBiZSBjaGFuZ2VkLlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImRvTm90TWF0Y2hcXFwiPlxcbiAgICAgICAgICAgICAgICBUaGUgcGFzc3dvcmQgYW5kIGl0cyBjb25maXJtYXRpb24gZG8gbm90IG1hdGNoIVxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImNoYW5nZVBhc3N3b3JkKClcXFwiICNwYXNzd29yZEZvcm09XFxcIm5nRm9ybVxcXCI+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiPk5ldyBwYXNzd29yZDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiICNwYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIk5ldyBwYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiIG1pbmxlbmd0aD00IG1heGxlbmd0aD01MCByZXF1aXJlZD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZGlydHkgJiYgcGFzc3dvcmRJbnB1dC5pbnZhbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgcGFzc3dvcmQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGpoaS1wYXNzd29yZC1zdHJlbmd0aC1iYXIgW3Bhc3N3b3JkVG9DaGVja109XFxcInBhc3N3b3JkXFxcIj48L2poaS1wYXNzd29yZC1zdHJlbmd0aC1iYXI+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImNvbmZpcm1QYXNzd29yZFxcXCI+TmV3IHBhc3N3b3JkIGNvbmZpcm1hdGlvbjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgI2NvbmZpcm1QYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNvbmZpcm0gdGhlIG5ldyBwYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBtaW5sZW5ndGg9NCBtYXhsZW5ndGg9NTAgcmVxdWlyZWQ+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5kaXJ0eSAmJiBjb25maXJtUGFzc3dvcmRJbnB1dC5pbnZhbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBjb25maXJtYXRpb24gcGFzc3dvcmQgaXMgcmVxdWlyZWQuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycy5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBjb25maXJtYXRpb24gcGFzc3dvcmQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcInBhc3N3b3JkRm9ybS5mb3JtLmludmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlNhdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJpbmNpcGFsIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhc3N3b3JkIH0gZnJvbSAnLi9wYXNzd29yZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktcGFzc3dvcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYXNzd29yZC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGRvTm90TWF0Y2g6IHN0cmluZztcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIHN1Y2Nlc3M6IHN0cmluZztcbiAgICBhY2NvdW50OiBhbnk7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBjb25maXJtUGFzc3dvcmQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmQsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWxcbiAgICApIHtcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZVBhc3N3b3JkICgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFzc3dvcmQgIT09IHRoaXMuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRvTm90TWF0Y2ggPSAnRVJST1InO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kb05vdE1hdGNoID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRTZXJ2aWNlLnNhdmUodGhpcy5wYXNzd29yZCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSAnT0snO1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdFUlJPUic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3Bhc3N3b3JkLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBwYXNzd29yZFJvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJ3Bhc3N3b3JkJyxcbiAgY29tcG9uZW50OiBQYXNzd29yZENvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIGF1dGhvcml0aWVzOiBbJ1JPTEVfVVNFUiddLFxuICAgIHBhZ2VUaXRsZTogJ1Bhc3N3b3JkJ1xuICB9LFxuICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFzc3dvcmQge1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIHNhdmUobmV3UGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL2FjY291bnQvY2hhbmdlX3Bhc3N3b3JkJywgbmV3UGFzc3dvcmQpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+XFxuICAgICAgICAgICAgPGgxPlJlZ2lzdHJhdGlvbjwvaDE+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlJlZ2lzdHJhdGlvbiBzYXZlZCE8L3N0cm9uZz4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGNvbmZpcm1hdGlvbi5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlcnJvclxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdHJvbmc+UmVnaXN0cmF0aW9uIGZhaWxlZCE8L3N0cm9uZz4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlcnJvclVzZXJFeGlzdHNcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkxvZ2luIG5hbWUgYWxyZWFkeSByZWdpc3RlcmVkITwvc3Ryb25nPiBQbGVhc2UgY2hvb3NlIGFub3RoZXIgb25lLlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVycm9yRW1haWxFeGlzdHNcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkUtbWFpbCBpcyBhbHJlYWR5IGluIHVzZSE8L3N0cm9uZz4gUGxlYXNlIGNob29zZSBhbm90aGVyIG9uZS5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJkb05vdE1hdGNoXFxcIj5cXG4gICAgICAgICAgICAgICAgVGhlIHBhc3N3b3JkIGFuZCBpdHMgY29uZmlybWF0aW9uIGRvIG5vdCBtYXRjaCFcXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPlxcbiAgICAgICAgICAgIDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInJlZ2lzdGVyKClcXFwiICNyZWdpc3RlckZvcm09XFxcIm5nRm9ybVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibG9naW5cXFwiPlVzZXJuYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBbKG5nTW9kZWwpXT1cXFwicmVnaXN0ZXJBY2NvdW50LmxvZ2luXFxcIiBpZD1cXFwibG9naW5cXFwiIG5hbWU9XFxcImxvZ2luXFxcIiAjbG9naW49XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJZb3VyIHVzZXJuYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBtaW5sZW5ndGg9XFxcIjFcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiIHBhdHRlcm49XFxcIl5bXycuQEEtWmEtejAtOS1dKiRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwibG9naW4uZGlydHkgJiYgbG9naW4uaW52YWxpZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsb2dpbi5lcnJvcnMucmVxdWlyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIHVzZXJuYW1lIGlzIHJlcXVpcmVkLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsb2dpbi5lcnJvcnMubWlubGVuZ3RoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgdXNlcm5hbWUgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgMSBjaGFyYWN0ZXIuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxvZ2luLmVycm9ycy5tYXhsZW5ndGhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciB1c2VybmFtZSBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibG9naW4uZXJyb3JzLnBhdHRlcm5cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIHVzZXJuYW1lIGNhbiBvbmx5IGNvbnRhaW4gbG93ZXItY2FzZSBsZXR0ZXJzIGFuZCBkaWdpdHMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCI+RS1tYWlsPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgI2VtYWlsPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91ciBlLW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJyZWdpc3RlckFjY291bnQuZW1haWxcXFwiIG1pbmxlbmd0aD01IG1heGxlbmd0aD0xMDAgcmVxdWlyZWQ+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJlbWFpbC5kaXJ0eSAmJiBlbWFpbC5pbnZhbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsLmVycm9ycy5yZXF1aXJlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGUtbWFpbCBpcyByZXF1aXJlZC5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWwuZXJyb3JzLmludmFsaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGUtbWFpbCBpcyBpbnZhbGlkLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnMubWlubGVuZ3RoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBlLW1haWwgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnMubWF4bGVuZ3RoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBlLW1haWwgY2Fubm90IGJlIGxvbmdlciB0aGFuIDEwMCBjaGFyYWN0ZXJzLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiPk5ldyBwYXNzd29yZDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiICNwYXNzd29yZD1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcIk5ldyBwYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInJlZ2lzdGVyQWNjb3VudC5wYXNzd29yZFxcXCIgbWlubGVuZ3RoPTQgbWF4bGVuZ3RoPTUwIHJlcXVpcmVkPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwicGFzc3dvcmQuZGlydHkgJiYgcGFzc3dvcmQuaW52YWxpZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZC5lcnJvcnMucmVxdWlyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZC5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmQuZXJyb3JzLm1pbmxlbmd0aFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycy5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmQuZXJyb3JzLm1heGxlbmd0aFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIHBhc3N3b3JkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxqaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyIFtwYXNzd29yZFRvQ2hlY2tdPVxcXCJyZWdpc3RlckFjY291bnQucGFzc3dvcmRcXFwiPjwvamhpLXBhc3N3b3JkLXN0cmVuZ3RoLWJhcj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIj5OZXcgcGFzc3dvcmQgY29uZmlybWF0aW9uPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiAjY29uZmlybVBhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJDb25maXJtIHRoZSBuZXcgcGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG1pbmxlbmd0aD00IG1heGxlbmd0aD01MCByZXF1aXJlZD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmRpcnR5ICYmIGNvbmZpcm1QYXNzd29yZElucHV0LmludmFsaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBjb25maXJtYXRpb24gcGFzc3dvcmQgaXMgcmVxdWlyZWQuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycy5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJyZWdpc3RlckZvcm0uZm9ybS5pbnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5SZWdpc3RlcjwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICA8cD48L3A+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuPklmIHlvdSB3YW50IHRvIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcIm9wZW5Mb2dpbigpXFxcIj5zaWduIGluPC9hPjxzcGFuPiwgeW91IGNhbiB0cnkgdGhlIGRlZmF1bHQgYWNjb3VudHM6PGJyLz4tIEFkbWluaXN0cmF0b3IgKGxvZ2luPVxcXCJhZG1pblxcXCIgYW5kIHBhc3N3b3JkPVxcXCJhZG1pblxcXCIpIDxici8+LSBVc2VyIChsb2dpbj1cXFwidXNlclxcXCIgYW5kIHBhc3N3b3JkPVxcXCJ1c2VyXFxcIikuPC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBSZW5kZXJlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSAnLi9yZWdpc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktcmVnaXN0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gICAgZG9Ob3RNYXRjaDogc3RyaW5nO1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAgZXJyb3JFbWFpbEV4aXN0czogc3RyaW5nO1xuICAgIGVycm9yVXNlckV4aXN0czogc3RyaW5nO1xuICAgIHJlZ2lzdGVyQWNjb3VudDogYW55O1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJlZ2lzdGVyU2VydmljZTogUmVnaXN0ZXIsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXJcbiAgICApIHtcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQWNjb3VudCA9IHt9O1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbicpLCAnZm9jdXMnLCBbXSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyQWNjb3VudC5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9ICdFUlJPUic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvTm90TWF0Y2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVycm9yVXNlckV4aXN0cyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVycm9yRW1haWxFeGlzdHMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFjY291bnQubGFuZ0tleSA9ICdlbic7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyU2VydmljZS5zYXZlKHRoaXMucmVnaXN0ZXJBY2NvdW50KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgICB9LCAocmVzcG9uc2UpID0+IHRoaXMucHJvY2Vzc0Vycm9yKHJlc3BvbnNlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuTG9naW4oKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByb2Nlc3NFcnJvcihyZXNwb25zZSkge1xuICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDAgJiYgcmVzcG9uc2UuX2JvZHkgPT09ICdsb2dpbiBhbHJlYWR5IGluIHVzZScpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JVc2VyRXhpc3RzID0gJ0VSUk9SJztcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCAmJiByZXNwb25zZS5fYm9keSA9PT0gJ2UtbWFpbCBhZGRyZXNzIGFscmVhZHkgaW4gdXNlJykge1xuICAgICAgICAgICAgdGhpcy5lcnJvckVtYWlsRXhpc3RzID0gJ0VSUk9SJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAncmVnaXN0ZXInLFxuICBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50LFxuICBkYXRhOiB7XG4gICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgIHBhZ2VUaXRsZTogJ1JlZ2lzdHJhdGlvbidcbiAgfSxcbiAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyIHtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICBzYXZlKGFjY291bnQ6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL3JlZ2lzdGVyJywgYWNjb3VudCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC04IG9mZnNldC1tZC0yXFxcIj5cXG4gICAgICAgICAgICA8aDIgKm5nSWY9XFxcInNldHRpbmdzQWNjb3VudFxcXCI+VXNlciBzZXR0aW5ncyBmb3IgWzxiPnt7c2V0dGluZ3NBY2NvdW50LmxvZ2lufX08L2I+XTwvaDI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlNldHRpbmdzIHNhdmVkITwvc3Ryb25nPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+XFxuXFxuICAgICAgICAgICAgPGZvcm0gbmFtZT1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwic2F2ZSgpXFxcIiAjc2V0dGluZ3NGb3JtPVxcXCJuZ0Zvcm1cXFwiICpuZ0lmPVxcXCJzZXR0aW5nc0FjY291bnRcXFwiIG5vdmFsaWRhdGU+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZmlyc3ROYW1lXFxcIj5GaXJzdCBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZmlyc3ROYW1lXFxcIiBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJZb3VyIGZpcnN0IG5hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzQWNjb3VudC5maXJzdE5hbWVcXFwiIG1pbmxlbmd0aD0xIG1heGxlbmd0aD01MCAjZmlyc3ROYW1lSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiZmlyc3ROYW1lSW5wdXQuZGlydHkgJiYgZmlyc3ROYW1lSW5wdXQuaW52YWxpZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XFxcImZpcnN0TmFtZUlucHV0LmVycm9ycy5yZXF1aXJlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgZmlyc3QgbmFtZSBpcyByZXF1aXJlZC5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJmaXJzdE5hbWVJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBmaXJzdCBuYW1lIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XFxcImZpcnN0TmFtZUlucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGZpcnN0IG5hbWUgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsYXN0TmFtZVxcXCI+TGFzdCBOYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibGFzdE5hbWVcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91ciBsYXN0IG5hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzQWNjb3VudC5sYXN0TmFtZVxcXCIgbWlubGVuZ3RoPTEgbWF4bGVuZ3RoPTUwICNsYXN0TmFtZUlucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImxhc3ROYW1lSW5wdXQuZGlydHkgJiYgbGFzdE5hbWVJbnB1dC5pbnZhbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwibGFzdE5hbWVJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGxhc3QgbmFtZSBpcyByZXF1aXJlZC5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGxhc3QgbmFtZSBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCAxIGNoYXJhY3Rlci5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGxhc3QgbmFtZSBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImVtYWlsXFxcIj5FLW1haWw8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91ciBlLW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInNldHRpbmdzQWNjb3VudC5lbWFpbFxcXCIgbWlubGVuZ3RoPTUgbWF4bGVuZ3RoPTEwMCAjZW1haWxJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQ+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJlbWFpbElucHV0LmRpcnR5ICYmIGVtYWlsSW5wdXQuaW52YWxpZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBlLW1haWwgaXMgcmVxdWlyZWQuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMuZW1haWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGUtbWFpbCBpcyBpbnZhbGlkLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgZS1tYWlsIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycy5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGUtbWFpbCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMTAwIGNoYXJhY3RlcnMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcInNldHRpbmdzRm9ybS5mb3JtLmludmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlNhdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Zvcm0+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJpbmNpcGFsLCBBY2NvdW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXNldHRpbmdzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIHN1Y2Nlc3M6IHN0cmluZztcbiAgICBzZXR0aW5nc0FjY291bnQ6IGFueTtcbiAgICBsYW5ndWFnZXM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWNjb3VudDogQWNjb3VudFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWxcbiAgICApIHtcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NBY2NvdW50ID0gdGhpcy5jb3B5QWNjb3VudChhY2NvdW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZSAoKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudC5zYXZlKHRoaXMuc2V0dGluZ3NBY2NvdW50KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSAnT0snO1xuICAgICAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkodHJ1ZSkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3NBY2NvdW50ID0gdGhpcy5jb3B5QWNjb3VudChhY2NvdW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9ICdFUlJPUic7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvcHlBY2NvdW50IChhY2NvdW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmF0ZWQ6IGFjY291bnQuYWN0aXZhdGVkLFxuICAgICAgICAgICAgZW1haWw6IGFjY291bnQuZW1haWwsXG4gICAgICAgICAgICBmaXJzdE5hbWU6IGFjY291bnQuZmlyc3ROYW1lLFxuICAgICAgICAgICAgbGFuZ0tleTogYWNjb3VudC5sYW5nS2V5LFxuICAgICAgICAgICAgbGFzdE5hbWU6IGFjY291bnQubGFzdE5hbWUsXG4gICAgICAgICAgICBsb2dpbjogYWNjb3VudC5sb2dpbixcbiAgICAgICAgICAgIGltYWdlVXJsOiBhY2NvdW50LmltYWdlVXJsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vc2V0dGluZ3MuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAnc2V0dGluZ3MnLFxuICBjb21wb25lbnQ6IFNldHRpbmdzQ29tcG9uZW50LFxuICBkYXRhOiB7XG4gICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9VU0VSJ10sXG4gICAgcGFnZVRpdGxlOiAnU2V0dGluZ3MnXG4gIH0sXG4gIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3Mucm91dGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhcnNlTGlua3MgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IENvbmNvdXJzZVBpcGVsaW5lc1NoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7XG4gICAgYWRtaW5TdGF0ZSxcbiAgICBBdWRpdHNDb21wb25lbnQsXG4gICAgVXNlck1nbXRDb21wb25lbnQsXG4gICAgVXNlckRpYWxvZ0NvbXBvbmVudCxcbiAgICBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgIFVzZXJNZ210RGV0YWlsQ29tcG9uZW50LFxuICAgIFVzZXJNZ210RGlhbG9nQ29tcG9uZW50LFxuICAgIFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICAgIExvZ3NDb21wb25lbnQsXG4gICAgSmhpTWV0cmljc01vbml0b3JpbmdNb2RhbENvbXBvbmVudCxcbiAgICBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcbiAgICBKaGlIZWFsdGhNb2RhbENvbXBvbmVudCxcbiAgICBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCxcbiAgICBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50LFxuICAgIEpoaURvY3NDb21wb25lbnQsXG4gICAgQXVkaXRzU2VydmljZSxcbiAgICBKaGlDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBKaGlIZWFsdGhTZXJ2aWNlLFxuICAgIEpoaU1ldHJpY3NTZXJ2aWNlLFxuICAgIExvZ3NTZXJ2aWNlLFxuICAgIFVzZXJSZXNvbHZlUGFnaW5nUGFyYW1zLFxuICAgIFVzZXJSZXNvbHZlLFxuICAgIFVzZXJNb2RhbFNlcnZpY2Vcbn0gZnJvbSAnLi8nO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb25jb3Vyc2VQaXBlbGluZXNTaGFyZWRNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KGFkbWluU3RhdGUsIHsgdXNlSGFzaDogdHJ1ZSB9KVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEF1ZGl0c0NvbXBvbmVudCxcbiAgICAgICAgVXNlck1nbXRDb21wb25lbnQsXG4gICAgICAgIFVzZXJEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIFVzZXJEZWxldGVEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIFVzZXJNZ210RGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgVXNlck1nbXREZWxldGVEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIExvZ3NDb21wb25lbnQsXG4gICAgICAgIEpoaUNvbmZpZ3VyYXRpb25Db21wb25lbnQsXG4gICAgICAgIEpoaUhlYWx0aENoZWNrQ29tcG9uZW50LFxuICAgICAgICBKaGlIZWFsdGhNb2RhbENvbXBvbmVudCxcbiAgICAgICAgSmhpRG9jc0NvbXBvbmVudCxcbiAgICAgICAgSmhpTWV0cmljc01vbml0b3JpbmdDb21wb25lbnQsXG4gICAgICAgIEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnRcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgVXNlck1nbXREZWxldGVEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIEpoaUhlYWx0aE1vZGFsQ29tcG9uZW50LFxuICAgICAgICBKaGlNZXRyaWNzTW9uaXRvcmluZ01vZGFsQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEF1ZGl0c1NlcnZpY2UsXG4gICAgICAgIEpoaUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgICAgICBKaGlIZWFsdGhTZXJ2aWNlLFxuICAgICAgICBKaGlNZXRyaWNzU2VydmljZSxcbiAgICAgICAgTG9nc1NlcnZpY2UsXG4gICAgICAgIFVzZXJSZXNvbHZlUGFnaW5nUGFyYW1zLFxuICAgICAgICBVc2VyUmVzb2x2ZSxcbiAgICAgICAgVXNlck1vZGFsU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIENvbmNvdXJzZVBpcGVsaW5lc0FkbWluTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2FkbWluLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcywgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICAgIGF1ZGl0c1JvdXRlLFxuICAgIGNvbmZpZ3VyYXRpb25Sb3V0ZSxcbiAgICBkb2NzUm91dGUsXG4gICAgaGVhbHRoUm91dGUsXG4gICAgbG9nc1JvdXRlLFxuICAgIG1ldHJpY3NSb3V0ZSxcbiAgICB1c2VyTWdtdFJvdXRlLFxuICAgIHVzZXJEaWFsb2dSb3V0ZVxufSBmcm9tICcuLyc7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5sZXQgQURNSU5fUk9VVEVTID0gW1xuICAgIGF1ZGl0c1JvdXRlLFxuICAgIGNvbmZpZ3VyYXRpb25Sb3V0ZSxcbiAgICBkb2NzUm91dGUsXG4gICAgaGVhbHRoUm91dGUsXG4gICAgbG9nc1JvdXRlLFxuICAgIC4uLnVzZXJNZ210Um91dGUsXG4gICAgbWV0cmljc1JvdXRlXG5dO1xuXG5cbmV4cG9ydCBjb25zdCBhZG1pblN0YXRlOiBSb3V0ZXMgPSBbe1xuICAgIHBhdGg6ICcnLFxuICAgIGRhdGE6IHtcbiAgICAgICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9BRE1JTiddXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdLFxuICAgIGNoaWxkcmVuOiBBRE1JTl9ST1VURVNcbn0sXG4gICAgLi4udXNlckRpYWxvZ1JvdXRlXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hZG1pbi5yb3V0ZS50cyIsImV4cG9ydCBjbGFzcyBBdWRpdERhdGEge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVtb3RlQWRkcmVzczogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgc2Vzc2lvbklkOiBzdHJpbmdcbiAgICApIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXQtZGF0YS5tb2RlbC50cyIsImltcG9ydCB7IEF1ZGl0RGF0YSB9IGZyb20gJy4vYXVkaXQtZGF0YS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBBdWRpdCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBkYXRhOiBBdWRpdERhdGEsXG4gICAgICAgIHB1YmxpYyBwcmluY2lwYWw6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHRpbWVzdGFtcDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdHlwZTogc3RyaW5nXG4gICAgKSB7wqB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdC5tb2RlbC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0lmPVxcXCJhdWRpdHNcXFwiPlxcbiAgICA8aDI+QXVkaXRzPC9oMj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC01XFxcIj5cXG4gICAgICAgICAgICA8aDQ+RmlsdGVyIGJ5IGRhdGU8L2g0PlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1hZGRvblxcXCI+ZnJvbTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIGNsYXNzPVxcXCJpbnB1dC1zbSBmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInN0YXJ0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZnJvbURhdGVcXFwiIChuZ01vZGVsQ2hhbmdlKT1cXFwib25DaGFuZ2VEYXRlKCRldmVudClcXFwiIHJlcXVpcmVkLz5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj50bzwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIGNsYXNzPVxcXCJpbnB1dC1zbSBmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVuZFxcXCIgWyhuZ01vZGVsKV09XFxcInRvRGF0ZVxcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJvbkNoYW5nZURhdGUoJGV2ZW50KVxcXCIgcmVxdWlyZWQvPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWNvbmRlbnNlZCB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXFxcIj5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ3RpbWVzdGFtcCc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuPkRhdGU8L3NwYW4+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIChjbGljayk9XFxcIm9yZGVyUHJvcCA9ICdwcmluY2lwYWwnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3Bhbj5Vc2VyPC9zcGFuPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAndHlwZSc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuPlN0YXRlPC9zcGFuPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAnZGF0YS5tZXNzYWdlJzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4+RXh0cmEgZGF0YTwvc3Bhbj48L3RoPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgYXVkaXQgb2YgZ2V0QXVkaXRzKClcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGQ+PHNwYW4+e3thdWRpdC50aW1lc3RhbXB8IGRhdGU6J21lZGl1bSd9fTwvc3Bhbj48L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+PHNtYWxsPnt7YXVkaXQucHJpbmNpcGFsfX08L3NtYWxsPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD57e2F1ZGl0LnR5cGV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImF1ZGl0LmRhdGEubWVzc2FnZVxcXCI+e3thdWRpdC5kYXRhLm1lc3NhZ2V9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG5nLXNob3c9XFxcImF1ZGl0LmRhdGEucmVtb3RlQWRkcmVzc1xcXCI+PHNwYW4+UmVtb3RlIEFkZHJlc3M8L3NwYW4+IHt7YXVkaXQuZGF0YS5yZW1vdGVBZGRyZXNzfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LXhzLWNlbnRlclxcXCIgKm5nSWY9XFxcImF1ZGl0c1xcXCI+XFxuICAgICAgICA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIj48L2poaS1pdGVtLWNvdW50PlxcbiAgICAgICAgPG5nYi1wYWdpbmF0aW9uIFtjb2xsZWN0aW9uU2l6ZV09XFxcInRvdGFsSXRlbXNcXFwiIFsocGFnZSldPVxcXCJwYWdlXFxcIiAocGFnZUNoYW5nZSk9XFxcImxvYWRQYWdlKHBhZ2UpXFxcIj48L25nYi1wYWdpbmF0aW9uPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBhcnNlTGlua3N9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgQXVkaXQgfSBmcm9tICcuL2F1ZGl0Lm1vZGVsJztcbmltcG9ydCB7IEF1ZGl0c1NlcnZpY2UgfSBmcm9tICcuL2F1ZGl0cy5zZXJ2aWNlJztcbmltcG9ydCB7IElURU1TX1BFUl9QQUdFIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi9ibG9ja3MvY29uZmlnL3VpYi1wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1hdWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hdWRpdHMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEF1ZGl0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYXVkaXRzOiBBdWRpdFtdO1xuICAgIGZyb21EYXRlOiBzdHJpbmc7XG4gICAgaXRlbXNQZXJQYWdlOiBhbnk7XG4gICAgbGlua3M6IGFueTtcbiAgICBwYWdlOiBudW1iZXI7XG4gICAgb3JkZXJQcm9wOiBzdHJpbmc7XG4gICAgcmV2ZXJzZTogYm9vbGVhbjtcbiAgICB0b0RhdGU6IHN0cmluZztcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXI7XG4gICAgZGF0ZVBpcGU6IERhdGVQaXBlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXVkaXRzU2VydmljZTogQXVkaXRzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUxpbmtzOiBQYXJzZUxpbmtzLFxuICAgICAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gSVRFTVNfUEVSX1BBR0U7XG4gICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9yZGVyUHJvcCA9ICd0aW1lc3RhbXAnO1xuICAgICAgICB0aGlzLmRhdGVQaXBlID0gIG5ldyBEYXRlUGlwZSh0aGlzLmxvY2FsZSk7XG4gICAgfVxuXG4gICAgZ2V0QXVkaXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0QXVkaXRzKHRoaXMuYXVkaXRzKTtcbiAgICB9XG5cbiAgICBsb2FkUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZURhdGUoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy50b2RheSgpO1xuICAgICAgICB0aGlzLnByZXZpb3VzTW9udGgoKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZURhdGUoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZURhdGUoKSB7XG4gICAgICAgIHRoaXMuYXVkaXRzU2VydmljZS5xdWVyeSh7cGFnZTogdGhpcy5wYWdlIC0gMSwgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICBmcm9tRGF0ZTogdGhpcy5mcm9tRGF0ZSwgdG9EYXRlOiB0aGlzLnRvRGF0ZX0pLnN1YnNjcmliZShyZXMgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmF1ZGl0cyA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICB0aGlzLmxpbmtzID0gdGhpcy5wYXJzZUxpbmtzLnBhcnNlKHJlcy5oZWFkZXJzLmdldCgnbGluaycpKTtcbiAgICAgICAgICAgIHRoaXMudG90YWxJdGVtcyA9ICsgcmVzLmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByZXZpb3VzTW9udGgoKSB7XG4gICAgICAgIGxldCBkYXRlRm9ybWF0ID0gJ3l5eXktTU0tZGQnO1xuICAgICAgICBsZXQgZnJvbURhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGlmIChmcm9tRGF0ZS5nZXRNb250aCgpID09PSAwKSB7XG4gICAgICAgICAgICBmcm9tRGF0ZSA9IG5ldyBEYXRlKGZyb21EYXRlLmdldEZ1bGxZZWFyKCkgLSAxLCAxMSwgZnJvbURhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb21EYXRlID0gbmV3IERhdGUoZnJvbURhdGUuZ2V0RnVsbFllYXIoKSwgZnJvbURhdGUuZ2V0TW9udGgoKSAtIDEsIGZyb21EYXRlLmdldERhdGUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZyb21EYXRlID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oZnJvbURhdGUsIGRhdGVGb3JtYXQpO1xuICAgIH1cblxuICAgIHRvZGF5KCkge1xuICAgICAgICBsZXQgZGF0ZUZvcm1hdCA9ICd5eXl5LU1NLWRkJztcbiAgICAgICAgLy8gVG9kYXkgKyAxIGRheSAtIG5lZWRlZCBpZiB0aGUgY3VycmVudCBkYXkgbXVzdCBiZSBpbmNsdWRlZFxuICAgICAgICBsZXQgdG9kYXk6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgIHRoaXMudG9EYXRlID0gdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0oZGF0ZSwgZGF0ZUZvcm1hdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzb3J0QXVkaXRzKGF1ZGl0czogQXVkaXRbXSkge1xuICAgICAgICBhdWRpdHMgPSBhdWRpdHMuc2xpY2UoMCkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGFbdGhpcy5vcmRlclByb3BdIDwgYlt0aGlzLm9yZGVyUHJvcF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFtiW3RoaXMub3JkZXJQcm9wXSA8IGFbdGhpcy5vcmRlclByb3BdXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZSA/IGF1ZGl0cy5yZXZlcnNlKCkgOiBhdWRpdHM7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBBdWRpdHNDb21wb25lbnQgfSBmcm9tICcuL2F1ZGl0cy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgYXVkaXRzUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAnYXVkaXRzJyxcbiAgY29tcG9uZW50OiBBdWRpdHNDb21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBwYWdlVGl0bGU6ICdBdWRpdHMnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdWRpdHNTZXJ2aWNlICB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIHF1ZXJ5KHJlcTogYW55KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICBsZXQgcGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ2Zyb21EYXRlJywgcmVxLmZyb21EYXRlKTtcbiAgICAgICAgcGFyYW1zLnNldCgndG9EYXRlJywgcmVxLnRvRGF0ZSk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3BhZ2UnLCByZXEucGFnZSk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3NpemUnLCByZXEuc2l6ZSk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3NvcnQnLCByZXEuc29ydCk7XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzZWFyY2g6IHBhcmFtc1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2F1ZGl0cycsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKm5nSWY9XFxcImFsbENvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvblxcXCI+XFxuICAgIDxoMj5Db25maWd1cmF0aW9uPC9oMj5cXG5cXG4gICAgPHNwYW4+RmlsdGVyIChieSBwcmVmaXgpPC9zcGFuPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcImZpbHRlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxuICAgIDxsYWJlbD5TcHJpbmcgY29uZmlndXJhdGlvbjwvbGFiZWw+XFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc20gdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1yZXNwb25zaXZlXFxcIlxcbiAgICAgICAgc3R5bGU9XFxcInRhYmxlLWxheW91dDpmaXhlZFxcXCI+XFxuICAgICAgICA8dGhlYWQ+XFxuICAgICAgICA8dHIgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wtc20tNFxcXCIgKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ3ByZWZpeCc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuPlByZWZpeDwvc3Bhbj48L3RoPlxcbiAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLXNtLThcXFwiIChjbGljayk9XFxcIm9yZGVyUHJvcCA9ICdwcm9wZXJ0aWVzJzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+UHJvcGVydGllczwvdGg+XFxuICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90aGVhZD5cXG5cXG4gICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiAoY29uZmlndXJhdGlvbiB8IHB1cmVGaWx0ZXI6ZmlsdGVyOidwcmVmaXgnIHwgb3JkZXJCeTpvcmRlclByb3A6cmV2ZXJzZSlcXFwiPlxcbiAgICAgICAgICAgIDx0ZD48c3Bhbj57e2VudHJ5LnByZWZpeH19PC9zcGFuPjwvdGQ+XFxuICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0Zvcj1cXFwibGV0IGtleSBvZiBrZXlzKGVudHJ5LnByb3BlcnRpZXMpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj57e2tleX19PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZsb2F0LXhzLXJpZ2h0IHRhZyB0YWctZGVmYXVsdCBicmVha1xcXCI+e3tlbnRyeS5wcm9wZXJ0aWVzW2tleV19fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgPC90cj5cXG4gICAgPC90YWJsZT5cXG4gICAgPGRpdiAqbmdGb3I9XFxcImxldCBrZXkgb2Yga2V5cyhhbGxDb25maWd1cmF0aW9uKVxcXCI+XFxuICAgICAgICA8bGFiZWw+PHNwYW4+e3trZXl9fTwvc3Bhbj48L2xhYmVsPlxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zbSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXJlc3BvbnNpdmVcXFwiXFxuICAgICAgICAgICAgICAgc3R5bGU9XFxcInRhYmxlLWxheW91dDpmaXhlZFxcXCI+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wtc20tNFxcXCI+UHJvcGVydHk8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC1zbS04XFxcIj5WYWx1ZTwvdGg+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBhbGxDb25maWd1cmF0aW9uW2tleV1cXFwiPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImJyZWFrXFxcIj57e2l0ZW0ua2V5fX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImJyZWFrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmbG9hdC14cy1yaWdodCB0YWcgdGFnLWRlZmF1bHQgYnJlYWtcXFwiPnt7aXRlbS52YWx9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEpoaUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1jb25maWd1cmF0aW9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29uZmlndXJhdGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpQ29uZmlndXJhdGlvbkNvbXBvbmVudCB7XG4gICAgYWxsQ29uZmlndXJhdGlvbjogYW55ID0gbnVsbDtcbiAgICBjb25maWd1cmF0aW9uOiBhbnkgPSBudWxsO1xuICAgIGNvbmZpZ0tleXM6IGFueVtdO1xuICAgIGZpbHRlcjogc3RyaW5nO1xuICAgIG9yZGVyUHJvcDogc3RyaW5nO1xuICAgIHJldmVyc2U6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogSmhpQ29uZmlndXJhdGlvblNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5jb25maWdLZXlzID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMub3JkZXJQcm9wID0gJ3ByZWZpeCc7XG4gICAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGtleXMoZGljdCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gKGRpY3QgPT09IHVuZGVmaW5lZCkgPyBbXSA6IE9iamVjdC5rZXlzKGRpY3QpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmdldCgpLnN1YnNjcmliZSgoY29uZmlndXJhdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcblxuICAgICAgICAgICAgZm9yIChsZXQgY29uZmlnIG9mIGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLnByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ0tleXMucHVzaChPYmplY3Qua2V5cyhjb25maWcucHJvcGVydGllcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5nZXRFbnYoKS5zdWJzY3JpYmUoKGNvbmZpZ3VyYXRpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWxsQ29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBKaGlDb25maWd1cmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maWd1cmF0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBjb25maWd1cmF0aW9uUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAnamhpLWNvbmZpZ3VyYXRpb24nLFxuICBjb21wb25lbnQ6IEpoaUNvbmZpZ3VyYXRpb25Db21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBwYWdlVGl0bGU6ICdDb25maWd1cmF0aW9uJ1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24ucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpQ29uZmlndXJhdGlvblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgfVxuXG4gICAgZ2V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2NvbmZpZ3Byb3BzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvcGVydGllczogYW55W10gPSBbXTtcblxuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllc09iamVjdCA9IHJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wZXJ0aWVzT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNPYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydGllc09iamVjdFtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0aWVzLnNvcnQoKHByb3BlcnR5QSwgcHJvcGVydHlCKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChwcm9wZXJ0eUEucHJlZml4ID09PSBwcm9wZXJ0eUIucHJlZml4KSA/IDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAocHJvcGVydHlBLnByZWZpeCA8IHByb3BlcnR5Qi5wcmVmaXgpID8gLTEgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEVudigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnbWFuYWdlbWVudC9lbnYnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzOiBhbnkgPSB7fTtcblxuICAgICAgICAgICAgY29uc3QgcHJvcGVydGllc09iamVjdCA9IHJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wZXJ0aWVzT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNPYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsc09iamVjdCA9IHByb3BlcnRpZXNPYmplY3Rba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHM6IGFueVtdID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsS2V5IGluIHZhbHNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxzT2JqZWN0Lmhhc093blByb3BlcnR5KHZhbEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxzLnB1c2goe2tleTogdmFsS2V5LCB2YWw6IHZhbHNPYmplY3RbdmFsS2V5XX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNba2V5XSA9IHZhbHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aWZyYW1lIHNyYz1cXFwic3dhZ2dlci11aS9pbmRleC5odG1sXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCI5MDBcXFwiXFxuICAgIHRhcmdldD1cXFwiX3RvcFxcXCIgdGl0bGU9XFxcIlN3YWdnZXIgVUlcXFwiPjwvaWZyYW1lPlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktZG9jcycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RvY3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaURvY3NDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgSmhpRG9jc0NvbXBvbmVudCB9IGZyb20gJy4vZG9jcy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgZG9jc1JvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJ2RvY3MnLFxuICBjb21wb25lbnQ6IEpoaURvY3NDb21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBwYWdlVGl0bGU6ICdBUEknXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5yb3V0ZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPlxcbiAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XFxcIkNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiYWN0aXZlTW9kYWwuZGlzbWlzcygnY2xvc2VkJylcXFwiPjxzcGFuIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj4mdGltZXM7PC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgaWQ9XFxcInNob3dIZWFsdGhMYWJlbFxcXCI+PHNwYW4gY2xhc3M9XFxcInRleHQtY2FwaXRhbGl6ZVxcXCI+e3sgYmFzZU5hbWUoY3VycmVudEhlYWx0aC5uYW1lKSB9fTwvc3Bhbj5cXG4gICAgICAgIHt7c3ViU3lzdGVtTmFtZShjdXJyZW50SGVhbHRoLm5hbWUpfX1cXG4gICAgPC9oND5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5IHBhZFxcXCI+XFxuICAgIDxkaXYgKm5nSWY9XFxcImN1cnJlbnRIZWFsdGguZGV0YWlsc1xcXCI+XFxuICAgICAgICA8aDQ+UHJvcGVydGllczwvaDQ+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj5cXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wtbWQtNiB0ZXh0LXhzLWxlZnRcXFwiPk5hbWU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLW1kLTYgdGV4dC14cy1sZWZ0XFxcIj5WYWx1ZTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgY3VycmVudEhlYWx0aC5kZXRhaWxzIHwga2V5c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJjb2wtbWQtNiB0ZXh0LXhzLWxlZnRcXFwiPnt7ZW50cnkua2V5fX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiY29sLW1kLTYgdGV4dC14cy1sZWZ0XFxcIj57e3JlYWRhYmxlVmFsdWUoZW50cnkudmFsdWUpfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2ICpuZ0lmPVxcXCJjdXJyZW50SGVhbHRoLmVycm9yXFxcIj5cXG4gICAgICAgIDxoND5FcnJvcjwvaDQ+XFxuICAgICAgICAgICAgPHByZT57e2N1cnJlbnRIZWFsdGguZXJyb3J9fTwvcHJlPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcbiAgICA8YnV0dG9uIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBmbG9hdC14cy1sZWZ0XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFjdGl2ZU1vZGFsLmRpc21pc3MoJ2Nsb3NlZCcpXFxcIj5Eb25lPC9idXR0b24+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgSmhpSGVhbHRoU2VydmljZSB9IGZyb20gJy4vaGVhbHRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1oZWFsdGgtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZWFsdGgtbW9kYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaUhlYWx0aE1vZGFsQ29tcG9uZW50IHtcblxuICAgIGN1cnJlbnRIZWFsdGg6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVhbHRoU2VydmljZTogSmhpSGVhbHRoU2VydmljZSwgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCkge31cblxuICAgIGJhc2VOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRCYXNlTmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICBzdWJTeXN0ZW1OYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRTdWJTeXN0ZW1OYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIHJlYWRhYmxlVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SGVhbHRoLm5hbWUgIT09ICdkaXNrU3BhY2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNob3VsZCBkaXNwbGF5IHN0b3JhZ2Ugc3BhY2UgaW4gYW4gaHVtYW4gcmVhZGFibGUgdW5pdFxuICAgICAgICBsZXQgdmFsID0gdmFsdWUgLyAxMDczNzQxODI0O1xuICAgICAgICBpZiAodmFsID4gMSkgeyAvLyBWYWx1ZVxuICAgICAgICAgICAgcmV0dXJuIHZhbC50b0ZpeGVkKDIpICsgJyBHQic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlIC8gMTA0ODU3NikudG9GaXhlZCgyKSArICcgTUInO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLW1vZGFsLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcbiAgICA8aDI+XFxuICAgICAgICA8c3Bhbj5IZWFsdGggQ2hlY2tzPC9zcGFuPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXhzLXJpZ2h0XFxcIiAoY2xpY2spPVxcXCJyZWZyZXNoKClcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZWZyZXNoXFxcIj48L3NwYW4+IDxzcGFuPlJlZnJlc2g8L3NwYW4+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgPC9oMj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+XFxuICAgICAgICA8dGFibGUgaWQ9XFxcImhlYWx0aENoZWNrXFxcIiBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImNvbC1tZC03XFxcIj5TZXJ2aWNlIE5hbWU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJjb2wtbWQtMiB0ZXh0LXhzLWNlbnRlclxcXCI+U3RhdHVzPC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiY29sLW1kLTIgdGV4dC14cy1jZW50ZXJcXFwiPkRldGFpbHM8L3RoPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgaGVhbHRoIG9mIGhlYWx0aERhdGFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0LWNhcGl0YWxpemVcXFwiPnt7IGJhc2VOYW1lKGhlYWx0aC5uYW1lKSB9fTwvc3Bhbj4ge3tzdWJTeXN0ZW1OYW1lKGhlYWx0aC5uYW1lKX19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWdcXFwiIFtuZ0NsYXNzXT1cXFwiZ2V0VGFnQ2xhc3MoaGVhbHRoLnN0YXR1cylcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2hlYWx0aC5zdGF0dXN9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiaGFuZFxcXCIgKGNsaWNrKT1cXFwic2hvd0hlYWx0aChoZWFsdGgpXFxcIiAqbmdJZj1cXFwiaGVhbHRoLmRldGFpbHMgfHwgaGVhbHRoLmVycm9yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWV5ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgSmhpSGVhbHRoU2VydmljZSB9IGZyb20gJy4vaGVhbHRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgSmhpSGVhbHRoTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2hlYWx0aC1tb2RhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1oZWFsdGgnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZWFsdGguY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaGVhbHRoRGF0YTogYW55O1xuICAgIHVwZGF0aW5nSGVhbHRoOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICAgICAgcHJpdmF0ZSBoZWFsdGhTZXJ2aWNlOiBKaGlIZWFsdGhTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBiYXNlTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRCYXNlTmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICBnZXRUYWdDbGFzcyhzdGF0dXNTdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdHVzU3RhdGUgPT09ICdVUCcpIHtcbiAgICAgICAgICAgIHJldHVybiAndGFnLXN1Y2Nlc3MnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICd0YWctZGFuZ2VyJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMudXBkYXRpbmdIZWFsdGggPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoU2VydmljZS5jaGVja0hlYWx0aCgpLnN1YnNjcmliZShoZWFsdGggPT4ge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGhEYXRhID0gdGhpcy5oZWFsdGhTZXJ2aWNlLnRyYW5zZm9ybUhlYWx0aERhdGEoaGVhbHRoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRpbmdIZWFsdGggPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd0hlYWx0aChoZWFsdGg6IGFueSkge1xuICAgICAgICBjb25zdCBtb2RhbFJlZiAgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEpoaUhlYWx0aE1vZGFsQ29tcG9uZW50KTtcbiAgICAgICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuY3VycmVudEhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgbW9kYWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYENsb3NlZCB3aXRoOiAke3Jlc3VsdH1gKTtcbiAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYERpc21pc3NlZCAke3JlYXNvbn1gKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3ViU3lzdGVtTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRTdWJTeXN0ZW1OYW1lKG5hbWUpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCB9IGZyb20gJy4vaGVhbHRoLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBoZWFsdGhSb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICdqaGktaGVhbHRoJyxcbiAgY29tcG9uZW50OiBKaGlIZWFsdGhDaGVja0NvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIHBhZ2VUaXRsZTogJ0hlYWx0aCBDaGVja3MnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpSGVhbHRoU2VydmljZSB7XG5cbiAgICBzZXBhcmF0b3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy5zZXBhcmF0b3IgPSAnLic7XG4gICAgfVxuXG4gICAgY2hlY2tIZWFsdGgoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvaGVhbHRoJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1IZWFsdGhEYXRhKGRhdGEpOiBhbnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBbXTtcbiAgICAgICAgdGhpcy5mbGF0dGVuSGVhbHRoRGF0YShyZXNwb25zZSwgbnVsbCwgZGF0YSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBnZXRCYXNlTmFtZShuYW1lKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGxldCBzcGxpdCA9IG5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIHJldHVybiBzcGxpdFswXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN1YlN5c3RlbU5hbWUobmFtZSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBsZXQgc3BsaXQgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBzcGxpdC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBsZXQgcmVtYWluZGVyID0gc3BsaXQuam9pbignLicpO1xuICAgICAgICAgICAgcmV0dXJuIHJlbWFpbmRlciA/ICcgLSAnICsgcmVtYWluZGVyIDogJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBwcml2YXRlIG1ldGhvZHMgKi9cbiAgICBwcml2YXRlIGFkZEhlYWx0aE9iamVjdChyZXN1bHQsIGlzTGVhZiwgaGVhbHRoT2JqZWN0LCBuYW1lKTogYW55IHtcblxuICAgICAgICBsZXQgc3RhdHVzOiBhbnk7XG4gICAgICAgIGxldCBlcnJvcjogYW55O1xuICAgICAgICBsZXQgaGVhbHRoRGF0YTogYW55ID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBuYW1lLFxuICAgICAgICAgICAgJ2Vycm9yJzogZXJyb3IsXG4gICAgICAgICAgICAnc3RhdHVzJzogc3RhdHVzXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGRldGFpbHMgPSB7fTtcbiAgICAgICAgbGV0IGhhc0RldGFpbHMgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaGVhbHRoT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaGVhbHRoT2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBoZWFsdGhPYmplY3Rba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnc3RhdHVzJyB8fCBrZXkgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhbHRoRGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGVhbHRoT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNEZXRhaWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0aGUgZGV0YWlsc1xuICAgICAgICBpZiAoaGFzRGV0YWlscykge1xuICAgICAgICAgICAgaGVhbHRoRGF0YS5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgYWRkIG5vZGVzIGlmIHRoZXkgcHJvdmlkZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gICAgICAgIGlmIChpc0xlYWYgfHwgaGFzRGV0YWlscyB8fCBoZWFsdGhEYXRhLmVycm9yKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChoZWFsdGhEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhbHRoRGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZsYXR0ZW5IZWFsdGhEYXRhIChyZXN1bHQsIHBhdGgsIGRhdGEpOiBhbnkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0hlYWx0aE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzU3ViU3lzdGVtKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRIZWFsdGhPYmplY3QocmVzdWx0LCBmYWxzZSwgdmFsdWUsIHRoaXMuZ2V0TW9kdWxlTmFtZShwYXRoLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhdHRlbkhlYWx0aERhdGEocmVzdWx0LCB0aGlzLmdldE1vZHVsZU5hbWUocGF0aCwga2V5KSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRIZWFsdGhPYmplY3QocmVzdWx0LCB0cnVlLCB2YWx1ZSwgdGhpcy5nZXRNb2R1bGVOYW1lKHBhdGgsIGtleSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE1vZHVsZU5hbWUgKHBhdGgsIG5hbWUpOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAocGF0aCAmJiBuYW1lKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBwYXRoICsgdGhpcy5zZXBhcmF0b3IgKyBuYW1lO1xuICAgICAgICB9ICBlbHNlIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBwYXRoO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFzU3ViU3lzdGVtIChoZWFsdGhPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBoZWFsdGhPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChoZWFsdGhPYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGhlYWx0aE9iamVjdFtrZXldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNIZWFsdGhPYmplY3QgKGhlYWx0aE9iamVjdCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGhlYWx0aE9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhlYWx0aE9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3N0YXR1cycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5zZXJ2aWNlLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2F1ZGl0cy9hdWRpdHMuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1ZGl0cy9hdWRpdHMucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXQubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXQtZGF0YS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2RvY3MvZG9jcy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kb2NzL2RvY3Mucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vaGVhbHRoL2hlYWx0aC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vaGVhbHRoL2hlYWx0aC5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9ncy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dzL2xvZ3Muc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9ncy5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9nLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXRyaWNzL21ldHJpY3Muc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL21ldHJpY3MvbWV0cmljcy5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tb2RhbC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYWRtaW4ucm91dGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9pbmRleC50cyIsImV4cG9ydCBjbGFzcyBMb2cge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbGV2ZWw6IHN0cmluZ1xuICAgICkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9nLm1vZGVsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCJsb2dnZXJzXFxcIj5cXG4gICAgPGgyPkxvZ3M8L2gyPlxcblxcbiAgICA8cD5UaGVyZSBhcmUge3sgbG9nZ2Vycy5sZW5ndGggfX0gbG9nZ2Vycy48L3A+XFxuXFxuICAgIDxzcGFuPkZpbHRlcjwvc3Bhbj4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJmaWx0ZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPlxcblxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWNvbmRlbnNlZCB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkXFxcIj5cXG4gICAgICAgIDx0aGVhZD5cXG4gICAgICAgIDx0ciB0aXRsZT1cXFwiY2xpY2sgdG8gb3JkZXJcXFwiPlxcbiAgICAgICAgICAgIDx0aCAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAnbmFtZSc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuPk5hbWU8L3NwYW4+PC90aD5cXG4gICAgICAgICAgICA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ2xldmVsJzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4+TGV2ZWw8L3NwYW4+PC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgICAgICA8L3RoZWFkPlxcblxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGxvZ2dlciBvZiAobG9nZ2VycyB8IHB1cmVGaWx0ZXI6ZmlsdGVyOiduYW1lJyB8IG9yZGVyQnk6b3JkZXJQcm9wOnJldmVyc2UpXFxcIj5cXG4gICAgICAgICAgICA8dGQ+PHNtYWxsPnt7bG9nZ2VyLm5hbWUgfCBzbGljZTowOjE0MH19PC9zbWFsbD48L3RkPlxcbiAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJjaGFuZ2VMZXZlbChsb2dnZXIubmFtZSwgJ1RSQUNFJylcXFwiIFtuZ0NsYXNzXT1cXFwiKGxvZ2dlci5sZXZlbD09J1RSQUNFJykgPyAnYnRuLWRhbmdlcicgOiAnYnRuLXNlY29uZGFyeSdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtXFxcIj5UUkFDRTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XFxcImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnREVCVUcnKVxcXCIgW25nQ2xhc3NdPVxcXCIobG9nZ2VyLmxldmVsPT0nREVCVUcnKSA/ICdidG4td2FybmluZycgOiAnYnRuLXNlY29uZGFyeSdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtXFxcIj5ERUJVRzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XFxcImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnSU5GTycpXFxcIiBbbmdDbGFzc109XFxcIihsb2dnZXIubGV2ZWw9PSdJTkZPJykgPyAnYnRuLWluZm8nIDogJ2J0bi1zZWNvbmRhcnknXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbVxcXCI+SU5GTzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XFxcImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnV0FSTicpXFxcIiBbbmdDbGFzc109XFxcIihsb2dnZXIubGV2ZWw9PSdXQVJOJykgPyAnYnRuLXN1Y2Nlc3MnIDogJ2J0bi1zZWNvbmRhcnknXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbVxcXCI+V0FSTjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XFxcImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnRVJST1InKVxcXCIgW25nQ2xhc3NdPVxcXCIobG9nZ2VyLmxldmVsPT0nRVJST1InKSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLXNlY29uZGFyeSdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtXFxcIj5FUlJPUjwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICA8L3RyPlxcbiAgICA8L3RhYmxlPlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZy5tb2RlbCc7XG5pbXBvcnQgeyBMb2dzU2VydmljZSB9IGZyb20gJy4vbG9ncy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktbG9ncycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ3MuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvZ2dlcnM6IExvZ1tdO1xuICAgIGZpbHRlcjogc3RyaW5nO1xuICAgIG9yZGVyUHJvcDogc3RyaW5nO1xuICAgIHJldmVyc2U6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHByaXZhdGUgbG9nc1NlcnZpY2U6IExvZ3NTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMub3JkZXJQcm9wID0gJ25hbWUnO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9nc1NlcnZpY2UuZmluZEFsbCgpLnN1YnNjcmliZShsb2dnZXJzID0+IHRoaXMubG9nZ2VycyA9IGxvZ2dlcnMpO1xuICAgIH1cblxuICAgIGNoYW5nZUxldmVsIChuYW1lOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGxvZyA9IG5ldyBMb2cobmFtZSwgbGV2ZWwpO1xuICAgICAgICB0aGlzLmxvZ3NTZXJ2aWNlLmNoYW5nZUxldmVsKGxvZykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9nc1NlcnZpY2UuZmluZEFsbCgpLnN1YnNjcmliZShsb2dnZXJzID0+IHRoaXMubG9nZ2VycyA9IGxvZ2dlcnMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgTG9nc0NvbXBvbmVudCB9IGZyb20gJy4vbG9ncy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgbG9nc1JvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJ2xvZ3MnLFxuICBjb21wb25lbnQ6IExvZ3NDb21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBwYWdlVGl0bGU6ICdMb2dzJ1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3Mucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGNoYW5nZUxldmVsKGxvZzogTG9nKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCgnbWFuYWdlbWVudC9sb2dzJywgbG9nKTtcbiAgICB9XG5cbiAgICBmaW5kQWxsKCk6IE9ic2VydmFibGU8TG9nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvbG9ncycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3Muc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIE1vZGFsIHVzZWQgdG8gZGlzcGxheSB0aGUgdGhyZWFkcyBkdW1wIC0tPlxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIChjbGljayk9XFxcImFjdGl2ZU1vZGFsLmRpc21pc3MoJ2Nsb3NlZCcpXFxcIj4mdGltZXM7PC9idXR0b24+XFxuICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlRocmVhZHMgZHVtcDwvaDQ+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keSBwYWRcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwidGFnIHRhZy1wcmltYXJ5XFxcIiAoY2xpY2spPVxcXCJ0aHJlYWREdW1wRmlsdGVyID0ge31cXFwiPkFsbCZuYnNwOzxzcGFuIGNsYXNzPVxcXCJ0YWctcGlsbFxcXCI+e3t0aHJlYWREdW1wQWxsfX08L3NwYW4+PC9zcGFuPiZuYnNwO1xcbiAgICA8c3BhbiBjbGFzcz1cXFwidGFnIHRhZy1zdWNjZXNzXFxcIiAoY2xpY2spPVxcXCJ0aHJlYWREdW1wRmlsdGVyID0ge3RocmVhZFN0YXRlOiAnUlVOTkFCTEUnfVxcXCI+UnVubmFibGUmbmJzcDs8c3BhbiBjbGFzcz1cXFwidGFnLXBpbGxcXFwiPnt7dGhyZWFkRHVtcFJ1bm5hYmxlfX08L3NwYW4+PC9zcGFuPiZuYnNwO1xcbiAgICA8c3BhbiBjbGFzcz1cXFwidGFnIHRhZy1pbmZvXFxcIiAoY2xpY2spPVxcXCJ0aHJlYWREdW1wRmlsdGVyID0ge3RocmVhZFN0YXRlOiAnV0FJVElORyd9XFxcIj5XYWl0aW5nJm5ic3A7PHNwYW4gY2xhc3M9XFxcInRhZy1waWxsXFxcIj57e3RocmVhZER1bXBXYWl0aW5nfX08L3NwYW4+PC9zcGFuPiZuYnNwO1xcbiAgICA8c3BhbiBjbGFzcz1cXFwidGFnIHRhZy13YXJuaW5nXFxcIiAoY2xpY2spPVxcXCJ0aHJlYWREdW1wRmlsdGVyID0ge3RocmVhZFN0YXRlOiAnVElNRURfV0FJVElORyd9XFxcIj5UaW1lZCBXYWl0aW5nJm5ic3A7PHNwYW4gY2xhc3M9XFxcInRhZy1waWxsXFxcIj57e3RocmVhZER1bXBUaW1lZFdhaXRpbmd9fTwvc3Bhbj48L3NwYW4+Jm5ic3A7XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWcgdGFnLWRhbmdlclxcXCIgKGNsaWNrKT1cXFwidGhyZWFkRHVtcEZpbHRlciA9IHt0aHJlYWRTdGF0ZTogJ0JMT0NLRUQnfVxcXCI+QmxvY2tlZCZuYnNwOzxzcGFuIGNsYXNzPVxcXCJ0YWctcGlsbFxcXCI+e3t0aHJlYWREdW1wQmxvY2tlZH19PC9zcGFuPjwvc3Bhbj4mbmJzcDtcXG4gICAgPGRpdiBjbGFzcz1cXFwidm9mZnNldDJcXFwiPiZuYnNwOzwvZGl2PlxcbiAgICBGaWx0ZXJcXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJ0aHJlYWREdW1wRmlsdGVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IHBhZFxcXCIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgdGhyZWFkRHVtcCB8IHB1cmVGaWx0ZXI6dGhyZWFkRHVtcEZpbHRlcjonbG9ja05hbWUnIHwga2V5c1xcXCI+XFxuICAgICAgICA8aDU+PHNwYW4gY2xhc3M9XFxcInRhZ1xcXCIgW25nQ2xhc3NdPVxcXCJnZXRUYWdDbGFzcyhlbnRyeS52YWx1ZS50aHJlYWRTdGF0ZSlcXFwiPnt7ZW50cnkudmFsdWUudGhyZWFkU3RhdGV9fTwvc3Bhbj4mbmJzcDt7e2VudHJ5LnZhbHVlLnRocmVhZE5hbWV9fSAoSUQge3tlbnRyeS52YWx1ZS50aHJlYWRJZH19KVxcbiAgICAgICAgICAgIDxhIChjbGljayk9XFxcImVudHJ5LnNob3cgPSAhZW50cnkuc2hvd1xcXCIgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCI+XFxuICAgICAgICAgICAgICAgPHNwYW4gW2hpZGRlbl09XFxcImVudHJ5LnNob3dcXFwiPlNob3cgU3RhY2tUcmFjZTwvc3Bhbj5cXG4gICAgICAgICAgICAgICA8c3BhbiBbaGlkZGVuXT1cXFwiIWVudHJ5LnNob3dcXFwiPkhpZGUgU3RhY2tUcmFjZTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2g1PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid2VsbFxcXCIgW2hpZGRlbl09XFxcIiFlbnRyeS5zaG93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IHN0IG9mIGVudHJ5LnZhbHVlLnN0YWNrVHJhY2UgfCBrZXlzXFxcIj5cXG4gICAgICAgICAgICAgICAge3tzdC52YWx1ZS5jbGFzc05hbWV9fS57e3N0LnZhbHVlLm1ldGhvZE5hbWV9fSh7e3N0LnZhbHVlLmZpbGVOYW1lfX06e3tzdC52YWx1ZS5saW5lTnVtYmVyfX0pXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ2b2Zmc2V0MVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXNtIHRhYmxlLXJlc3BvbnNpdmVcXFwiPlxcbiAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5CbG9ja2VkIFRpbWU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5CbG9ja2VkIENvdW50PC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+V2FpdGVkIFRpbWU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5XYWl0ZWQgQ291bnQ8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoPkxvY2sgTmFtZTwvdGg+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e2VudHJ5LnZhbHVlLmJsb2NrZWRUaW1lfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7ZW50cnkudmFsdWUuYmxvY2tlZENvdW50fX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7ZW50cnkudmFsdWUud2FpdGVkVGltZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e2VudHJ5LnZhbHVlLndhaXRlZENvdW50fX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7ZW50cnkudmFsdWUubG9ja05hbWV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuXFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgIHB1bGwtbGVmdFxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiYWN0aXZlTW9kYWwuZGlzbWlzcygnY2xvc2VkJylcXFwiPkRvbmU8L2J1dHRvbj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1tZXRyaWNzLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWV0cmljcy1tb2RhbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpTWV0cmljc01vbml0b3JpbmdNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB0aHJlYWREdW1wRmlsdGVyOiBhbnk7XG4gICAgdGhyZWFkRHVtcDogYW55O1xuICAgIHRocmVhZER1bXBBbGw6IG51bWJlciA9IDA7XG4gICAgdGhyZWFkRHVtcEJsb2NrZWQ6IG51bWJlciA9IDA7XG4gICAgdGhyZWFkRHVtcFJ1bm5hYmxlOiBudW1iZXIgPSAwO1xuICAgIHRocmVhZER1bXBUaW1lZFdhaXRpbmc6IG51bWJlciA9IDA7XG4gICAgdGhyZWFkRHVtcFdhaXRpbmc6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudGhyZWFkRHVtcC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlLnRocmVhZFN0YXRlID09PSAnUlVOTkFCTEUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJlYWREdW1wUnVubmFibGUgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudGhyZWFkU3RhdGUgPT09ICdXQUlUSU5HJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcFdhaXRpbmcgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudGhyZWFkU3RhdGUgPT09ICdUSU1FRF9XQUlUSU5HJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcFRpbWVkV2FpdGluZyArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS50aHJlYWRTdGF0ZSA9PT0gJ0JMT0NLRUQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJlYWREdW1wQmxvY2tlZCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRocmVhZER1bXBBbGwgPSB0aGlzLnRocmVhZER1bXBSdW5uYWJsZSArIHRoaXMudGhyZWFkRHVtcFdhaXRpbmcgK1xuICAgICAgICAgICAgdGhpcy50aHJlYWREdW1wVGltZWRXYWl0aW5nICsgdGhpcy50aHJlYWREdW1wQmxvY2tlZDtcbiAgICB9XG5cbiAgICBnZXRUYWdDbGFzcyAodGhyZWFkU3RhdGUpIHtcbiAgICAgICAgaWYgKHRocmVhZFN0YXRlID09PSAnUlVOTkFCTEUnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3RhZy1zdWNjZXNzJztcbiAgICAgICAgfSBlbHNlIGlmICh0aHJlYWRTdGF0ZSA9PT0gJ1dBSVRJTkcnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3RhZy1pbmZvJztcbiAgICAgICAgfSBlbHNlIGlmICh0aHJlYWRTdGF0ZSA9PT0gJ1RJTUVEX1dBSVRJTkcnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3RhZy13YXJuaW5nJztcbiAgICAgICAgfSBlbHNlIGlmICh0aHJlYWRTdGF0ZSA9PT0gJ0JMT0NLRUQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3RhZy1kYW5nZXInO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxuICAgIDxoMj5cXG4gICAgICAgIDxzcGFuPkFwcGxpY2F0aW9uIE1ldHJpY3M8L3NwYW4+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmxvYXQteHMtcmlnaHRcXFwiIChjbGljayk9XFxcInJlZnJlc2goKVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlZnJlc2hcXFwiPjwvc3Bhbj4gPHNwYW4+UmVmcmVzaDwvc3Bhbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICA8L2gyPlxcblxcbiAgICA8aDM+SlZNIE1ldHJpY3M8L2gzPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCIhdXBkYXRpbmdNZXRyaWNzXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgICA8Yj5NZW1vcnk8L2I+XFxuICAgICAgICAgICAgPHA+PHNwYW4+VG90YWwgTWVtb3J5PC9zcGFuPiAoe3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS50b3RhbC51c2VkJ10udmFsdWUgLyAxMDAwMDAwIHwgbnVtYmVyOicxLjAtMCd9fU0gLyB7e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LnRvdGFsLm1heCddLnZhbHVlIC8gMTAwMDAwMCB8IG51bWJlcjonMS4wLTAnfX1NKTwvcD5cXG4gICAgICAgICAgICA8bmdiLXByb2dyZXNzYmFyIHR5cGU9XFxcInN1Y2Nlc3NcXFwiIFttYXhdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS50b3RhbC5tYXgnXS52YWx1ZVxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwudXNlZCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LnRvdGFsLnVzZWQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LnRvdGFsLm1heCddLnZhbHVlICB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPlxcbiAgICAgICAgICAgIDwvbmdiLXByb2dyZXNzYmFyPlxcbiAgICAgICAgICAgIDxwPjxzcGFuPkhlYXAgTWVtb3J5PC9zcGFuPiAoe3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5oZWFwLnVzZWQnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSAvIHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC5tYXgnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSk8L3A+XFxuICAgICAgICAgICAgPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC5tYXgnXS52YWx1ZVxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC51c2VkJ10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC51c2VkJ10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5oZWFwLm1heCddLnZhbHVlICB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPlxcbiAgICAgICAgICAgIDwvbmdiLXByb2dyZXNzYmFyPlxcbiAgICAgICAgICAgIDxwPjxzcGFuPk5vbi1IZWFwIE1lbW9yeTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkubm9uLWhlYXAudXNlZCddLnZhbHVlIC8gMTAwMDAwMCB8IG51bWJlcjonMS4wLTAnfX1NIC8ge3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC5jb21taXR0ZWQnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSk8L3A+XFxuICAgICAgICAgICAgPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkubm9uLWhlYXAuY29tbWl0dGVkJ10udmFsdWVcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5Lm5vbi1oZWFwLnVzZWQnXS52YWx1ZVxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC51c2VkJ10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC5jb21taXR0ZWQnXS52YWx1ZSAgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj5cXG4gICAgICAgICAgICA8L25nYi1wcm9ncmVzc2Jhcj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPlxcbiAgICAgICAgICAgIDxiPlRocmVhZHM8L2I+IChUb3RhbDoge3ttZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZX19KSA8YSBjbGFzcz1cXFwiaGFuZFxcXCIgKGNsaWNrKT1cXFwicmVmcmVzaFRocmVhZER1bXBEYXRhKClcXFwiIGRhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCIgZGF0YS10YXJnZXQ9XFxcIiN0aHJlYWREdW1wXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtZXllXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICAgIDxwPjxzcGFuPlJ1bm5hYmxlPC9zcGFuPiB7e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ydW5uYWJsZS5jb3VudCddLnZhbHVlfX08L3A+XFxuICAgICAgICAgICAgPG5nYi1wcm9ncmVzc2JhciBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMucnVubmFibGUuY291bnQnXS52YWx1ZVxcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ydW5uYWJsZS5jb3VudCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWUgIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+XFxuICAgICAgICAgICAgPC9uZ2ItcHJvZ3Jlc3NiYXI+XFxuICAgICAgICAgICAgPHA+PHNwYW4+VGltZWQgV2FpdGluZzwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnRpbWVkX3dhaXRpbmcuY291bnQnXS52YWx1ZX19KTwvcD5cXG4gICAgICAgICAgICA8bmdiLXByb2dyZXNzYmFyIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy50aW1lZF93YWl0aW5nLmNvdW50J10udmFsdWVcXFwiIFttYXhdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZVxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJ3YXJuaW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3ttZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMudGltZWRfd2FpdGluZy5jb3VudCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWUgIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+XFxuICAgICAgICAgICAgPC9uZ2ItcHJvZ3Jlc3NiYXI+XFxuICAgICAgICAgICAgPHA+PHNwYW4+V2FpdGluZzwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLndhaXRpbmcuY291bnQnXS52YWx1ZX19KTwvcD5cXG4gICAgICAgICAgICA8bmdiLXByb2dyZXNzYmFyIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy53YWl0aW5nLmNvdW50J10udmFsdWVcXFwiIFttYXhdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZVxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJ3YXJuaW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3ttZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMud2FpdGluZy5jb3VudCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWUgIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+XFxuICAgICAgICAgICAgPC9uZ2ItcHJvZ3Jlc3NiYXI+XFxuICAgICAgICAgICAgPHA+PHNwYW4+QmxvY2tlZDwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmJsb2NrZWQuY291bnQnXS52YWx1ZX19KTwvcD5cXG4gICAgICAgICAgICA8bmdiLXByb2dyZXNzYmFyIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ibG9ja2VkLmNvdW50J10udmFsdWVcXFwiIFttYXhdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZVxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3ttZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuYmxvY2tlZC5jb3VudCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWUgIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+XFxuICAgICAgICAgICAgPC9uZ2ItcHJvZ3Jlc3NiYXI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgICA8Yj5HYXJiYWdlIGNvbGxlY3Rpb25zPC9iPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIj5NYXJrIFN3ZWVwIGNvdW50PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIHRleHQteHMtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLU1hcmtTd2VlcC5jb3VudCddLnZhbHVlfX08L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCI+TWFyayBTd2VlcCB0aW1lPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIHRleHQteHMtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLU1hcmtTd2VlcC50aW1lJ10udmFsdWV9fW1zPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiPlNjYXZlbmdlIGNvdW50PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIHRleHQteHMtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLVNjYXZlbmdlLmNvdW50J10udmFsdWV9fTwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIj5TY2F2ZW5nZSB0aW1lPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIHRleHQteHMtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLVNjYXZlbmdlLnRpbWUnXS52YWx1ZX19bXM8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwid2VsbCB3ZWxsLWxnXFxcIiAqbmdJZj1cXFwidXBkYXRpbmdNZXRyaWNzXFxcIj5VcGRhdGluZy4uLjwvZGl2PlxcblxcbiAgICA8aDM+SFRUUCByZXF1ZXN0cyAoZXZlbnRzIHBlciBzZWNvbmQpPC9oMz5cXG4gICAgPHAgKm5nSWY9XFxcIm1ldHJpY3MuY291bnRlcnNcXFwiPlxcbiAgICAgICAgPHNwYW4+QWN0aXZlIHJlcXVlc3RzPC9zcGFuPiA8Yj57e21ldHJpY3MuY291bnRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLmFjdGl2ZVJlcXVlc3RzJ10uY291bnQgfCBudW1iZXI6JzEuMC0wJ319PC9iPiAtIDxzcGFuPlRvdGFsIHJlcXVlc3RzPC9zcGFuPiA8Yj57e21ldHJpY3MudGltZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXF1ZXN0cyddLmNvdW50IHwgbnVtYmVyOicxLjAtMCd9fTwvYj5cXG4gICAgPC9wPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwiIXVwZGF0aW5nTWV0cmljc1xcXCI+XFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcbiAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aD5Db2RlPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoPkNvdW50PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5NZWFuPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj48c3Bhbj5BdmVyYWdlPC9zcGFuPiAoMSBtaW4pPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj48c3Bhbj5BdmVyYWdlPC9zcGFuPiAoNSBtaW4pPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj48c3Bhbj5BdmVyYWdlPC9zcGFuPiAoMTUgbWluKTwvdGg+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0ZD5PSzwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgIDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MudGltZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXF1ZXN0cyddLmNvdW50XFxcIiBbdmFsdWVdPVxcXCJtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLmNvdW50XFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5jb3VudH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9uZ2ItcHJvZ3Jlc3NiYXI+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm9rJ10ubWVhbl9yYXRlIHwgbnVtYmVyOicxLjAtMid9fVxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5tMV9yYXRlIHwgbnVtYmVyOicxLjAtMid9fVxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5tNV9yYXRlIHwgbnVtYmVyOicxLjAtMid9fVxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAge3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLm0xNV9yYXRlIHwgbnVtYmVyOicxLjAtMid9fVxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGQ+Tm90IEZvdW5kPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy50aW1lcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlcXVlc3RzJ10uY291bnRcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm5vdEZvdW5kJ10uY291bnRcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLmNvdW50fX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L25nYi1wcm9ncmVzc2Jhcj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5tZWFuX3JhdGUgfCBudW1iZXI6JzEuMC0yJ319XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm5vdEZvdW5kJ10ubTFfcmF0ZSB8IG51bWJlcjonMS4wLTInfX1cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5tNV9yYXRlIHwgbnVtYmVyOicxLjAtMid9fVxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAge3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLm0xNV9yYXRlIHwgbnVtYmVyOicxLjAtMid9fVxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGQ+U2VydmVyIGVycm9yPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy50aW1lcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlcXVlc3RzJ10uY291bnRcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLnNlcnZlckVycm9yJ10uY291bnRcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLmNvdW50fX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L25nYi1wcm9ncmVzc2Jhcj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMuc2VydmVyRXJyb3InXS5tZWFuX3JhdGUgfCBudW1iZXI6JzEuMC0yJ319XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLnNlcnZlckVycm9yJ10ubTFfcmF0ZSB8IG51bWJlcjonMS4wLTInfX1cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMuc2VydmVyRXJyb3InXS5tNV9yYXRlIHwgbnVtYmVyOicxLjAtMid9fVxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAge3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLm0xNV9yYXRlIHwgbnVtYmVyOicxLjAtMid9fVxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8aDM+U2VydmljZXMgc3RhdGlzdGljcyAodGltZSBpbiBtaWxsaXNlY29uZCk8L2gzPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwiIXVwZGF0aW5nTWV0cmljc1xcXCI+XFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcbiAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aD5TZXJ2aWNlIG5hbWU8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPkNvdW50PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5NZWFuPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5NaW48L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnA1MDwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+cDc1PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5wOTU8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnA5OTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+TWF4PC90aD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiBzZXJ2aWNlc1N0YXRzIHwga2V5c1xcXCI+XFxuICAgICAgICAgICAgICAgIDx0ZD57e2VudHJ5LmtleX19PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLmNvdW50fX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7ZW50cnkudmFsdWUubWVhbiAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLm1pbiAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA1MCAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA3NSAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA5NSAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA5OSAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLm1heCAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICA8L2Rpdj5cXG4gICAgXFxuICAgIDxoMz5DYWNoZSBzdGF0aXN0aWNzPC9oMz5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCIgKm5nSWY9XFxcIiF1cGRhdGluZ01ldHJpY3NcXFwiPlxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGg+Q2FjaGUgbmFtZTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+Q2FjaGUgSGl0czwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+Q2FjaGUgTWlzc2VzPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5DYWNoZSBHZXRzPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5DYWNoZSBQdXRzPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5DYWNoZSBSZW1vdmFsczwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+Q2FjaGUgRXZpY3Rpb25zPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5DYWNoZSBIaXQgJTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+Q2FjaGUgTWlzcyAlPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5BdmVyYWdlIGdldCB0aW1lICjCtXMpPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5BdmVyYWdlIHB1dCB0aW1lICjCtXMpPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj5BdmVyYWdlIHJlbW92ZSB0aW1lICjCtXMpPC90aD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiBjYWNoZXNTdGF0cyB8IGtleXNcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3tlbnRyeS5rZXl9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLWhpdHMnXS52YWx1ZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtbWlzc2VzJ10udmFsdWV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLWdldHMnXS52YWx1ZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtcHV0cyddLnZhbHVlfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbZW50cnkua2V5ICsgJy5jYWNoZS1yZW1vdmFscyddLnZhbHVlfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbZW50cnkua2V5ICsgJy5jYWNoZS1ldmljdGlvbnMnXS52YWx1ZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtaGl0LXBlcmNlbnRhZ2UnXS52YWx1ZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtbWlzcy1wZXJjZW50YWdlJ10udmFsdWUgfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbZW50cnkua2V5ICsgJy5hdmVyYWdlLWdldC10aW1lJ10udmFsdWUgIHwgbnVtYmVyIDogJzEuMi0yJyB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmF2ZXJhZ2UtcHV0LXRpbWUnXS52YWx1ZSAgfCBudW1iZXIgOiAnMS4yLTInfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbZW50cnkua2V5ICsgJy5hdmVyYWdlLXJlbW92ZS10aW1lJ10udmFsdWUgfCBudW1iZXIgOiAnMS4yLTInIH19PC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICA8L2Rpdj5cXG4gICAgXFxuICAgIDxoMyAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXMgJiYgbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXSAmJiBtZXRyaWNzLmdhdWdlc1snSGlrYXJpUG9vbC0xLnBvb2wuVG90YWxDb25uZWN0aW9ucyddLnZhbHVlID4gMFxcXCI+RGF0YVNvdXJjZSBzdGF0aXN0aWNzICh0aW1lIGluIG1pbGxpc2Vjb25kKTwvaDM+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCIhdXBkYXRpbmdNZXRyaWNzICYmIG1ldHJpY3MuZ2F1Z2VzICYmIG1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5Ub3RhbENvbm5lY3Rpb25zJ10gJiYgbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZSA+IDBcXFwiPlxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD48c3Bhbj5Vc2FnZTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLkFjdGl2ZUNvbm5lY3Rpb25zJ10udmFsdWV9fSAvIHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZX19KTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPkNvdW50PC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+TWVhbjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPk1pbjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnA1MDwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnA3NTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnA5NTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnA5OTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPk1heDwvdGg+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcyBwcm9ncmVzcy1zdHJpcGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZVxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLkFjdGl2ZUNvbm5lY3Rpb25zJ10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5BY3RpdmVDb25uZWN0aW9ucyddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZSAgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZ2ItcHJvZ3Jlc3NiYXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e21ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5jb3VudH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ubWVhbiB8IG51bWJlcjonMS4wLTInfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e21ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5taW4gfCBudW1iZXI6JzEuMC0yJ319PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ucDUwIHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7bWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLnA3NSB8IG51bWJlcjonMS4wLTInfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0ZXh0LXhzLXJpZ2h0XFxcIj57e21ldHJpY3MuaGlzdG9ncmFtc1snSGlrYXJpUG9vbC0xLnBvb2wuVXNhZ2UnXS5wOTUgfCBudW1iZXI6JzEuMC0yJ319PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGV4dC14cy1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ucDk5IHwgbnVtYmVyOicxLjAtMid9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPnt7bWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLm1heCB8IG51bWJlcjonMS4wLTInfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBKaGlNZXRyaWNzTW9uaXRvcmluZ01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tZXRyaWNzLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKaGlNZXRyaWNzU2VydmljZSB9IGZyb20gJy4vbWV0cmljcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktbWV0cmljcycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21ldHJpY3MuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbWV0cmljczogYW55ID0ge307XG4gICAgY2FjaGVzU3RhdHM6IGFueSA9IHt9O1xuICAgIHNlcnZpY2VzU3RhdHM6IGFueSA9IHt9O1xuICAgIHVwZGF0aW5nTWV0cmljczogYm9vbGVhbiA9IHRydWU7XG4gICAgSkNBQ0hFX0tFWTogc3RyaW5nIDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByaXZhdGUgbWV0cmljc1NlcnZpY2U6IEpoaU1ldHJpY3NTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuSkNBQ0hFX0tFWSA9ICdqY2FjaGUuc3RhdGlzdGljcyc7XG4gICAgICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICByZWZyZXNoICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGluZ01ldHJpY3MgPSB0cnVlO1xuICAgICAgICB0aGlzLm1ldHJpY3NTZXJ2aWNlLmdldE1ldHJpY3MoKS5zdWJzY3JpYmUoKG1ldHJpY3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWV0cmljcyA9IG1ldHJpY3M7XG4gICAgICAgICAgICB0aGlzLnVwZGF0aW5nTWV0cmljcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc1N0YXRzID0ge307XG4gICAgICAgICAgICB0aGlzLmNhY2hlc1N0YXRzID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZXRyaWNzLnRpbWVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbWV0cmljcy50aW1lcnNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ3dlYi5yZXN0JykgIT09IC0xIHx8IGtleS5pbmRleE9mKCdzZXJ2aWNlJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZXNTdGF0c1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZXRyaWNzLmdhdWdlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdqY2FjaGUuc3RhdGlzdGljcycpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBtZXRyaWNzLmdhdWdlc1trZXldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZ2V0cyBvciBwdXRzXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGtleS5sYXN0SW5kZXhPZignLicpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3S2V5ID0ga2V5LnN1YnN0cigwLCBpbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCB0aGUgbmFtZSBvZiB0aGUgZG9tYWluXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVzU3RhdHNbbmV3S2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogdGhpcy5KQ0FDSEVfS0VZLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnJlc2hUaHJlYWREdW1wRGF0YSAoKSB7XG4gICAgICAgIHRoaXMubWV0cmljc1NlcnZpY2UudGhyZWFkRHVtcCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWxSZWYgID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihKaGlNZXRyaWNzTW9uaXRvcmluZ01vZGFsQ29tcG9uZW50LCB7IHNpemU6ICdsZyd9KTtcbiAgICAgICAgICAgIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLnRocmVhZER1bXAgPSBkYXRhO1xuICAgICAgICAgICAgbW9kYWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDbG9zZWQgd2l0aDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERpc21pc3NlZCAke3JlYXNvbn1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCB9IGZyb20gJy4vbWV0cmljcy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgbWV0cmljc1JvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJ2poaS1tZXRyaWNzJyxcbiAgY29tcG9uZW50OiBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIHBhZ2VUaXRsZTogJ0FwcGxpY2F0aW9uIE1ldHJpY3MnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKaGlNZXRyaWNzU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgZ2V0TWV0cmljcygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnbWFuYWdlbWVudC9tZXRyaWNzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICB0aHJlYWREdW1wKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2R1bXAnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwiZGVsZXRlRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwiY29uZmlybURlbGV0ZSh1c2VyLmxvZ2luKVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+JnRpbWVzOzwvYnV0dG9uPlxcbiAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCI+Q29uZmlybSBkZWxldGUgb3BlcmF0aW9uPC9oND5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcbiAgICAgICAgPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj5cXG4gICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBVc2VyPzwvcD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYmFuXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+Q2FuY2VsPC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcmVtb3ZlXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+RGVsZXRlPC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbjwvZm9ybT5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXJ9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgVXNlck1vZGFsU2VydmljZSB9IGZyb20gJy4vdXNlci1tb2RhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktdXNlci1tZ210LWRlbGV0ZS1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlck1nbXREZWxldGVEaWFsb2dDb21wb25lbnQge1xuXG4gICAgdXNlcjogVXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCxcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICB9XG5cbiAgICBjbGVhciAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt7IG91dGxldHM6IHsgcG9wdXA6IG51bGwgfX1dLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgY29uZmlybURlbGV0ZSAobG9naW4pIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5kZWxldGUobG9naW4pLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAndXNlckxpc3RNb2RpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdEZWxldGVkIGEgdXNlcid9KTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcyh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt7IG91dGxldHM6IHsgcG9wdXA6IG51bGwgfX1dLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS11c2VyLWRlbGV0ZS1kaWFsb2cnLFxuICAgIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICAgIHJvdXRlU3ViOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHVzZXJNb2RhbFNlcnZpY2U6IFVzZXJNb2RhbFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMudXNlck1vZGFsU2VydmljZS5vcGVuKFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50LCBwYXJhbXNbJ2xvZ2luJ10pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0lmPVxcXCJ1c2VyXFxcIj5cXG4gICAgPGgyPjxzcGFuPlVzZXI8L3NwYW4+IFxcXCJ7e3VzZXIubG9naW59fVxcXCI8L2gyPlxcbiAgICA8ZGwgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8ZHQ+PHNwYW4+TG9naW48L3NwYW4+PC9kdD5cXG4gICAgICAgIDxkZD48c3Bhbj57e3VzZXIubG9naW59fTwvc3Bhbj48L2RkPlxcbiAgICAgICAgPGR0PjxzcGFuPkZpcnN0IE5hbWU8L3NwYW4+PC9kdD5cXG4gICAgICAgIDxkZD57e3VzZXIuZmlyc3ROYW1lfX08L2RkPlxcbiAgICAgICAgPGR0PjxzcGFuPkxhc3QgTmFtZTwvc3Bhbj48L2R0PlxcbiAgICAgICAgPGRkPnt7dXNlci5sYXN0TmFtZX19PC9kZD5cXG4gICAgICAgIDxkdD48c3Bhbj5FbWFpbDwvc3Bhbj48L2R0PlxcbiAgICAgICAgPGRkPnt7dXNlci5lbWFpbH19PC9kZD5cXG4gICAgICAgIDxkdD48c3Bhbj5BY3RpdmF0ZWQ8L3NwYW4+PC9kdD5cXG4gICAgICAgIDxkZD57e3VzZXIuYWN0aXZhdGVkfX08L2RkPlxcbiAgICAgICAgPGR0PjxzcGFuPkNyZWF0ZWQgQnk8L3NwYW4+PC9kdD5cXG4gICAgICAgIDxkZD57e3VzZXIuY3JlYXRlZEJ5fX08L2RkPlxcbiAgICAgICAgPGR0PjxzcGFuPkNyZWF0ZWQgRGF0ZTwvc3Bhbj48L2R0PlxcbiAgICAgICAgPGRkPnt7dXNlci5jcmVhdGVkRGF0ZSB8IGRhdGU6J2RkL01NL3l5IEhIOm1tJyB9fTwvZGQ+XFxuICAgICAgICA8ZHQ+PHNwYW4+TGFzdCBNb2RpZmllZCBCeTwvc3Bhbj48L2R0PlxcbiAgICAgICAgPGRkPnt7dXNlci5sYXN0TW9kaWZpZWRCeX19PC9kZD5cXG4gICAgICAgIDxkdD48c3Bhbj5MYXN0IE1vZGlmaWVkIERhdGU8L3NwYW4+PC9kdD5cXG4gICAgICAgIDxkZD57e3VzZXIubGFzdE1vZGlmaWVkRGF0ZSB8IGRhdGU6J2RkL01NL3l5IEhIOm1tJ319PC9kZD5cXG4gICAgICAgIDxkdD48c3Bhbj5Qcm9maWxlczwvc3Bhbj48L2R0PlxcbiAgICAgICAgPGRkPlxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibGlzdC11bnN0eWxlZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBhdXRob3JpdHkgb2YgdXNlci5hdXRob3JpdGllc1xcXCI+PHNwYW4+e3thdXRob3JpdHl9fTwvc3Bhbj48L2xpPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2RkPlxcbiAgICA8L2RsPlxcbiAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCJcXG4gICAgICAgICAgICByb3V0ZXJMaW5rPVxcXCIvdXNlci1tYW5hZ2VtZW50XFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWFycm93LWxlZnRcXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj4gQmFjazwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXIsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktdXNlci1tZ210LWRldGFpbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJNZ210RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgdXNlcjogVXNlcjtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgICAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZChwYXJhbXNbJ2xvZ2luJ10pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkIChsb2dpbikge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmZpbmQobG9naW4pLnN1YnNjcmliZSh1c2VyID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGUgKG5nU3VibWl0KT1cXFwic2F2ZSgpXFxcIiAjZWRpdEZvcm09XFxcIm5nRm9ybVxcXCI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+JnRpbWVzOzwvYnV0dG9uPlxcbiAgICAgICAgPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgaWQ9XFxcIm15VXNlckxhYmVsXFxcIj5cXG4gICAgICAgICAgICBDcmVhdGUgb3IgZWRpdCBhIFVzZXI8L2g0PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keVxcXCI+XFxuICAgICAgICA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsPklEPC9sYWJlbD5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLmlkXFxcIiByZWFkb25seT5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiPkxvZ2luPC9sYWJlbD5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibG9naW5cXFwiICNsb2dpbklucHV0PVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwidXNlci5sb2dpblxcXCIgcmVxdWlyZWQgbWlubGVuZ3RoPTEgbWF4bGVuZ3RoPTUwIHBhdHRlcm49XFxcIl5bXycuQEEtWmEtejAtOS1dKiRcXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImxvZ2luSW5wdXQuZGlydHkgJiYgbG9naW5JbnB1dC5pbnZhbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJsb2dpbklucHV0LmVycm9ycy5yZXF1aXJlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlxcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxcblxcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XFxcImxvZ2luSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCJcXG4gICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICBUaGlzIGZpZWxkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLlxcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgI2ZpcnN0TmFtZUlucHV0PVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwidXNlci5maXJzdE5hbWVcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImZpcnN0TmFtZUlucHV0LmRpcnR5ICYmIGZpcnN0TmFtZUlucHV0LmludmFsaWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XFxcImZpcnN0TmFtZUlucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiXFxuICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBmaWVsZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy5cXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsPkxhc3QgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiAjbGFzdE5hbWVJbnB1dD1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIubGFzdE5hbWVcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImxhc3ROYW1lSW5wdXQuZGlydHkgJiYgbGFzdE5hbWVJbnB1dC5pbnZhbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiXFxuICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBmaWVsZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy5cXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiPkVtYWlsPC9sYWJlbD5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiAjZW1haWxJbnB1dD1cXFwibmdNb2RlbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiIHJlcXVpcmVkIG1heGxlbmd0aD1cXFwiMTAwXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJlbWFpbElucHV0LmRpcnR5ICYmIGVtYWlsSW5wdXQuaW52YWxpZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cXG5cXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiXFxuICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBmaWVsZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMTAwIGNoYXJhY3RlcnMuXFxuICAgICAgICAgICAgICAgIDwvc21hbGw+XFxuXFx0XFx0PHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5lbWFpbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBZb3VyIGUtbWFpbCBpcyBpbnZhbGlkLlxcbiAgICAgICAgICAgICAgICAgPC9zbWFsbD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVja1xcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImFjdGl2YXRlZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgW2Rpc2FibGVkXT1cXFwidXNlci5pZCA9PT0gbnVsbFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJhY3RpdmF0ZWRcXFwiIG5hbWU9XFxcImFjdGl2YXRlZFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYWN0aXZhdGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+QWN0aXZhdGVkPC9zcGFuPlxcbiAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbD5Qcm9maWxlczwvbGFiZWw+XFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtdWx0aXBsZSBuYW1lPVxcXCJhdXRob3JpdHlcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmF1dGhvcml0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XFxcImxldCBhdXRob3JpdHkgb2YgYXV0aG9yaXRpZXNcXFwiIFt2YWx1ZV09XFxcImF1dGhvcml0eVxcXCI+e3thdXRob3JpdHl9fTwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLWJhblxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuXFxuICAgICAgICAgICA+Q2FuY2VsPC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwiZWRpdEZvcm0uZm9ybS5pbnZhbGlkIHx8IGlzU2F2aW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtZmxvcHB5LW9cXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj5TYXZlPC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbjwvZm9ybT5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXJ9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgVXNlck1vZGFsU2VydmljZSB9IGZyb20gJy4vdXNlci1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7ICBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXVzZXItbWdtdC1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB1c2VyOiBVc2VyO1xuICAgIGxhbmd1YWdlczogYW55W107XG4gICAgYXV0aG9yaXRpZXM6IGFueVtdO1xuICAgIGlzU2F2aW5nOiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSBbJ1JPTEVfVVNFUicsICdST0xFX0FETUlOJ107XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt7IG91dGxldHM6IHsgcG9wdXA6IG51bGwgfX1dLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnVzZXIuaWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlKHRoaXMudXNlcikuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXNwb25zZSksICgpID0+IHRoaXMub25TYXZlRXJyb3IoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXIubGFuZ0tleSA9ICdlbic7XG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZSh0aGlzLnVzZXIpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzcG9uc2UpLCAoKSA9PiB0aGlzLm9uU2F2ZUVycm9yKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVTdWNjZXNzKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAndXNlckxpc3RNb2RpZmljYXRpb24nLCBjb250ZW50OiAnT0snIH0pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcyhyZXN1bHQpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IHBvcHVwOiBudWxsIH19XSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlRXJyb3IoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXVzZXItZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgVXNlckRpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICByb3V0ZVN1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSB1c2VyTW9kYWxTZXJ2aWNlOiBVc2VyTW9kYWxTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIGlmICggcGFyYW1zWydsb2dpbiddICkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLnVzZXJNb2RhbFNlcnZpY2Uub3BlbihVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCwgcGFyYW1zWydsb2dpbiddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMudXNlck1vZGFsU2VydmljZS5vcGVuKFVzZXJNZ210RGlhbG9nQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcbiAgICA8aDI+XFxuICAgICAgICA8c3Bhbj5Vc2Vyczwvc3Bhbj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC14cy1yaWdodFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6IFsndXNlci1tYW5hZ2VtZW50LW5ldyddIH0gfV1cXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wbHVzXFxcIj48L3NwYW4+IDxzcGFuPkNyZWF0ZSBhIG5ldyBVc2VyPC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgIDwvaDI+XFxuICAgIDxqaGktYWxlcnQ+PC9qaGktYWxlcnQ+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCJ1c2Vyc1xcXCI+XFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPlxcbiAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICA8dHIgamhpU29ydCBbKHByZWRpY2F0ZSldPVxcXCJwcmVkaWNhdGVcXFwiIFsoYXNjZW5kaW5nKV09XFxcInJldmVyc2VcXFwiIFtjYWxsYmFja109XFxcInRyYW5zaXRpb24uYmluZCh0aGlzKVxcXCI+XFxuICAgICAgICAgICAgPHRoIGpoaVNvcnRCeT1cXFwiaWRcXFwiPjxzcGFuPklEPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGpoaVNvcnRCeT1cXFwibG9naW5cXFwiPjxzcGFuPkxvZ2luPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBqaGlTb3J0Qnk9XFxcImVtYWlsXFxcIj48c3Bhbj5FbWFpbDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPlxcbiAgICAgICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoPjxzcGFuPlByb2ZpbGVzPC9zcGFuPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aCBqaGlTb3J0Qnk9XFxcImNyZWF0ZWREYXRlXFxcIj48c3Bhbj5DcmVhdGVkIERhdGU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGpoaVNvcnRCeT1cXFwibGFzdE1vZGlmaWVkQnlcXFwiPjxzcGFuPkxhc3QgTW9kaWZpZWQgQnk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGpoaVNvcnRCeT1cXFwibGFzdE1vZGlmaWVkRGF0ZVxcXCI+PHNwYW4+TGFzdCBNb2RpZmllZCBEYXRlPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgICAgICA8dGJvZHkgKm5nSWYgPVxcXCJ1c2Vyc1xcXCI+XFxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHVzZXIgb2YgdXNlcnM7IHRyYWNrQnk6IHRyYWNrSWRlbnRpdHlcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGQ+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy4uL3VzZXItbWFuYWdlbWVudCcsIHVzZXIubG9naW5dXFxcIj57e3VzZXIuaWR9fTwvYT48L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3t1c2VyLmxvZ2lufX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3t1c2VyLmVtYWlsfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFnIHRhZy1kYW5nZXJcXFwiIChjbGljayk9XFxcInNldEFjdGl2ZSh1c2VyLCB0cnVlKVxcXCIgKm5nSWY9XFxcIiF1c2VyLmFjdGl2YXRlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJjdXJzb3I6IHBvaW50ZXI7XFxcIj5EZWFjdGl2YXRlZDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWcgdGFnLXN1Y2Nlc3NcXFwiIChjbGljayk9XFxcInNldEFjdGl2ZSh1c2VyLCBmYWxzZSlcXFwiICpuZ0lmPVxcXCJ1c2VyLmFjdGl2YXRlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJjdXJzb3I6IHBvaW50ZXI7XFxcIj5BY3RpdmF0ZWQ8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGF1dGhvcml0eSBvZiB1c2VyLmF1dGhvcml0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFnIHRhZy1pbmZvXFxcIj57eyBhdXRob3JpdHkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7dXNlci5jcmVhdGVkRGF0ZSB8IGRhdGU6J2RkL01NL3l5IEhIOm1tJ319PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7dXNlci5sYXN0TW9kaWZpZWRCeX19PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7dXNlci5sYXN0TW9kaWZpZWREYXRlIHwgZGF0ZTonZGQvTU0veXkgSEg6bW0nfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInRleHQteHMtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGZsZXgtYnRuLWdyb3VwLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XFxcIlsnLi4vdXNlci1tYW5hZ2VtZW50JywgdXNlci5sb2dpbl1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1zbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIj5WaWV3PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICd1c2VyLW1hbmFnZW1lbnQvJysgdXNlci5sb2dpbiArICcvZWRpdCd9IH1dXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGlkZGVuLW1kLWRvd25cXFwiPkVkaXQ8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3VzZXItbWFuYWdlbWVudC8nKyB1c2VyLmxvZ2luICsgJy9kZWxldGUnfSB9XVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIiBbZGlzYWJsZWRdPVxcXCJjdXJyZW50QWNjb3VudC5sb2dpbj09dXNlci5sb2dpblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZW1vdmVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIj5EZWxldGU8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGV4dC14cy1jZW50ZXJcXFwiICpuZ0lmPVxcXCJ1c2Vyc1xcXCI+XFxuICAgICAgICA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJxdWVyeUNvdW50XFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIj48L2poaS1pdGVtLWNvdW50PlxcbiAgICAgICAgPG5nYi1wYWdpbmF0aW9uIFtjb2xsZWN0aW9uU2l6ZV09XFxcInRvdGFsSXRlbXNcXFwiIFsocGFnZSldPVxcXCJwYWdlXFxcIiAocGFnZUNoYW5nZSk9XFxcImxvYWRQYWdlKHBhZ2UpXFxcIj48L25nYi1wYWdpbmF0aW9uPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIFBhZ2luYXRpb25VdGlsLCBQYXJzZUxpbmtzLCBBbGVydFNlcnZpY2V9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgSVRFTVNfUEVSX1BBR0UsIFByaW5jaXBhbCwgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktdXNlci1tZ210JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWdtdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGN1cnJlbnRBY2NvdW50OiBhbnk7XG4gICAgdXNlcnM6IFVzZXJbXTtcbiAgICBlcnJvcjogYW55O1xuICAgIHN1Y2Nlc3M6IGFueTtcbiAgICByb3V0ZURhdGE6IGFueTtcbiAgICBsaW5rczogYW55O1xuICAgIHRvdGFsSXRlbXM6IGFueTtcbiAgICBxdWVyeUNvdW50OiBhbnk7XG4gICAgaXRlbXNQZXJQYWdlOiBhbnk7XG4gICAgcGFnZTogYW55O1xuICAgIHByZWRpY2F0ZTogYW55O1xuICAgIHByZXZpb3VzUGFnZTogYW55O1xuICAgIHJldmVyc2U6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUxpbmtzOiBQYXJzZUxpbmtzLFxuICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLCAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uVXRpbDogUGFnaW5hdGlvblV0aWwsXG4gICAgICAgIHByaXZhdGUgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyxcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSBJVEVNU19QRVJfUEFHRTtcbiAgICAgICAgdGhpcy5yb3V0ZURhdGEgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWdlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10ucGFnZTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNQYWdlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10ucGFnZTtcbiAgICAgICAgICAgIHRoaXMucmV2ZXJzZSA9IGRhdGFbJ3BhZ2luZ1BhcmFtcyddLmFzY2VuZGluZztcbiAgICAgICAgICAgIHRoaXMucHJlZGljYXRlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10ucHJlZGljYXRlO1xuICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2VJblVzZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJvdXRlRGF0YS51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ2hhbmdlSW5Vc2VycygpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCd1c2VyTGlzdE1vZGlmaWNhdGlvbicsIChyZXNwb25zZSkgPT4gdGhpcy5sb2FkQWxsKCkpO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZSAodXNlciwgaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgdXNlci5hY3RpdmF0ZWQgPSBpc0FjdGl2YXRlZDtcblxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZSh1c2VyKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSAnT0snO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkQWxsICgpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5xdWVyeSh7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UgLSAxLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnNvcnQoKX0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU3VjY2VzcyhyZXMuanNvbigpLCByZXMuaGVhZGVycyksXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdHJhY2tJZGVudGl0eSAoaW5kZXgsIGl0ZW06IFVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XG4gICAgfVxuXG4gICAgc29ydCAoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXTtcbiAgICAgICAgaWYgKHRoaXMucHJlZGljYXRlICE9PSAnaWQnKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnaWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxvYWRQYWdlIChwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHBhZ2UgIT09IHRoaXMucHJldmlvdXNQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zaXRpb24gKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy91c2VyLW1hbmFnZW1lbnQnXSwgeyBxdWVyeVBhcmFtczpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkQWxsKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblN1Y2Nlc3MoZGF0YSwgaGVhZGVycykge1xuICAgICAgICAvLyBoaWRlIGFub255bW91cyB1c2VyIGZyb20gdXNlciBtYW5hZ2VtZW50OiBpdCdzIGEgcmVxdWlyZWQgdXNlciBmb3IgU3ByaW5nIFNlY3VyaXR5XG4gICAgICAgIGxldCBoaWRkZW5Vc2Vyc1NpemUgPSAwO1xuICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhW2ldWydsb2dpbiddID09PSAnYW5vbnltb3VzdXNlcicpIHtcbiAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBoaWRkZW5Vc2Vyc1NpemUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmtzID0gdGhpcy5wYXJzZUxpbmtzLnBhcnNlKGhlYWRlcnMuZ2V0KCdsaW5rJykpO1xuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBoZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpIC0gaGlkZGVuVXNlcnNTaXplO1xuICAgICAgICB0aGlzLnF1ZXJ5Q291bnQgPSB0aGlzLnRvdGFsSXRlbXM7XG4gICAgICAgIHRoaXMudXNlcnMgPSBkYXRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FcnJvcihlcnJvcikge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihlcnJvci5lcnJvciwgZXJyb3IubWVzc2FnZSwgbnVsbCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc29sdmUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlcywgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFBhZ2luYXRpb25VdGlsIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBVc2VyTWdtdENvbXBvbmVudCB9IGZyb20gJy4vdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyTWdtdERldGFpbENvbXBvbmVudCB9IGZyb20gJy4vdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vdXNlci1tYW5hZ2VtZW50LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckRlbGV0ZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vdXNlci1tYW5hZ2VtZW50LWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUHJpbmNpcGFsIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmUgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCkgeyB9XG5cbiAgY2FuQWN0aXZhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbihhY2NvdW50ID0+IHRoaXMucHJpbmNpcGFsLmhhc0FueUF1dGhvcml0eShbJ1JPTEVfQURNSU4nXSkpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyUmVzb2x2ZVBhZ2luZ1BhcmFtcyBpbXBsZW1lbnRzIFJlc29sdmU8YW55PiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmF0aW9uVXRpbDogUGFnaW5hdGlvblV0aWwpIHt9XG5cbiAgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICAgIGxldCBwYWdlID0gcm91dGUucXVlcnlQYXJhbXNbJ3BhZ2UnXSA/IHJvdXRlLnF1ZXJ5UGFyYW1zWydwYWdlJ10gOiAnMSc7XG4gICAgICBsZXQgc29ydCA9IHJvdXRlLnF1ZXJ5UGFyYW1zWydzb3J0J10gPyByb3V0ZS5xdWVyeVBhcmFtc1snc29ydCddIDogJ2lkLGFzYyc7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgIHBhZ2U6IHRoaXMucGFnaW5hdGlvblV0aWwucGFyc2VQYWdlKHBhZ2UpLFxuICAgICAgICAgIHByZWRpY2F0ZTogdGhpcy5wYWdpbmF0aW9uVXRpbC5wYXJzZVByZWRpY2F0ZShzb3J0KSxcbiAgICAgICAgICBhc2NlbmRpbmc6IHRoaXMucGFnaW5hdGlvblV0aWwucGFyc2VBc2NlbmRpbmcoc29ydClcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VyTWdtdFJvdXRlOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAndXNlci1tYW5hZ2VtZW50JyxcbiAgICBjb21wb25lbnQ6IFVzZXJNZ210Q29tcG9uZW50LFxuICAgIHJlc29sdmU6IHtcbiAgICAgICdwYWdpbmdQYXJhbXMnOiBVc2VyUmVzb2x2ZVBhZ2luZ1BhcmFtc1xuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgcGFnZVRpdGxlOiAnVXNlcnMnXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGF0aDogJ3VzZXItbWFuYWdlbWVudC86bG9naW4nLFxuICAgIGNvbXBvbmVudDogVXNlck1nbXREZXRhaWxDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgcGFnZVRpdGxlOiAnVXNlcnMnXG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgdXNlckRpYWxvZ1JvdXRlOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAndXNlci1tYW5hZ2VtZW50LW5ldycsXG4gICAgY29tcG9uZW50OiBVc2VyRGlhbG9nQ29tcG9uZW50LFxuICAgIG91dGxldDogJ3BvcHVwJ1xuICB9LFxuICB7XG4gICAgcGF0aDogJ3VzZXItbWFuYWdlbWVudC86bG9naW4vZWRpdCcsXG4gICAgY29tcG9uZW50OiBVc2VyRGlhbG9nQ29tcG9uZW50LFxuICAgIG91dGxldDogJ3BvcHVwJ1xuICB9LFxuICB7XG4gICAgcGF0aDogJ3VzZXItbWFuYWdlbWVudC86bG9naW4vZGVsZXRlJyxcbiAgICBjb21wb25lbnQ6IFVzZXJEZWxldGVEaWFsb2dDb21wb25lbnQsXG4gICAgb3V0bGV0OiAncG9wdXAnXG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsLCBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgVXNlck1nbXREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3VzZXItbWFuYWdlbWVudC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXIsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJNb2RhbFNlcnZpY2Uge1xuICAgIHByaXZhdGUgaXNPcGVuID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgb3BlbiAoY29tcG9uZW50OiBDb21wb25lbnQsIGxvZ2luPzogc3RyaW5nKTogTmdiTW9kYWxSZWYge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgaWYgKGxvZ2luKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmZpbmQobG9naW4pLnN1YnNjcmliZSh1c2VyID0+IHRoaXMudXNlck1vZGFsUmVmKGNvbXBvbmVudCwgdXNlcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlck1vZGFsUmVmKGNvbXBvbmVudCwgbmV3IFVzZXIoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VyTW9kYWxSZWYoY29tcG9uZW50OiBDb21wb25lbnQsIHVzZXI6IFVzZXIpOiBOZ2JNb2RhbFJlZiB7XG4gICAgICAgIGxldCBtb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oY29tcG9uZW50LCB7IHNpemU6ICdsZycsIGJhY2tkcm9wOiAnc3RhdGljJ30pO1xuICAgICAgICBtb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS51c2VyID0gdXNlcjtcbiAgICAgICAgbW9kYWxSZWYucmVzdWx0LnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDbG9zZWQgd2l0aDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRGlzbWlzc2VkICR7cmVhc29ufWApO1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtb2RhbFJlZjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1vZGFsLnNlcnZpY2UudHMiLCIvLyBETyBOT1QgRURJVCBUSElTIEZJTEUsIEVESVQgVEhFIFdFQlBBQ0sgQ09NTU9OIENPTkZJRyBJTlNURUFELCBXSElDSCBXSUxMIE1PRElGWSBUSElTIEZJTEVcbmxldCBfVkVSU0lPTiA9ICcwLjAuMCc7IC8vIFRoaXMgdmFsdWUgd2lsbCBiZSBvdmVyd3JpdHRlbiBieSB3ZWJwYWNrXG5sZXQgX0RFQlVHX0lORk9fRU5BQkxFRCA9IHRydWU7IC8vIFRoaXMgdmFsdWUgd2lsbCBiZSBvdmVyd3JpdHRlbiBieSB3ZWJwYWNrXG5fVkVSU0lPTiA9IFwiMC4wLjBcIjtcbl9ERUJVR19JTkZPX0VOQUJMRUQgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBfVkVSU0lPTjtcbmV4cG9ydCBjb25zdCBERUJVR19JTkZPX0VOQUJMRUQgPSBfREVCVUdfSU5GT19FTkFCTEVEO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zdHJpbmctcmVwbGFjZS13ZWJwYWNrLXBsdWdpbi9sb2FkZXIuanM/aWQ9dnl5MXMxNms4YW9lNnloODN1MHpjd2hmciEuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLmNvbnN0YW50cy50cyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgUHJvZENvbmZpZyB9IGZyb20gJy4vYmxvY2tzL2NvbmZpZy9wcm9kLmNvbmZpZyc7XG5pbXBvcnQgeyBDb25jb3Vyc2VQaXBlbGluZXNBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xuXG5Qcm9kQ29uZmlnKCk7XG5cbmlmIChtb2R1bGVbJ2hvdCddKSB7XG4gICAgbW9kdWxlWydob3QnXS5hY2NlcHQoKTtcbn1cblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShDb25jb3Vyc2VQaXBlbGluZXNBcHBNb2R1bGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubWFpbi50cyIsImltcG9ydCAnLi92ZW5kb3IudHMnO1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nMldlYnN0b3JhZ2UgfSBmcm9tICduZzItd2Vic3RvcmFnZSc7XG5cbmltcG9ydCB7IENvbmNvdXJzZVBpcGVsaW5lc1NoYXJlZE1vZHVsZSwgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4vc2hhcmVkJztcbmltcG9ydCB7IENvbmNvdXJzZVBpcGVsaW5lc0FkbWluTW9kdWxlIH0gZnJvbSAnLi9hZG1pbi9hZG1pbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ29uY291cnNlUGlwZWxpbmVzQWNjb3VudE1vZHVsZSB9IGZyb20gJy4vYWNjb3VudC9hY2NvdW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBDb25jb3Vyc2VQaXBlbGluZXNFbnRpdHlNb2R1bGUgfSBmcm9tICcuL2VudGl0aWVzL2VudGl0eS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBMYXlvdXRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9sYXlvdXRzJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgY3VzdG9tSHR0cFByb3ZpZGVyIH0gZnJvbSAnLi9ibG9ja3MvaW50ZXJjZXB0b3IvaHR0cC5wcm92aWRlcic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9ibG9ja3MvY29uZmlnL3VpYi1wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbmltcG9ydCB7XG4gICAgSmhpTWFpbkNvbXBvbmVudCxcbiAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgRm9vdGVyQ29tcG9uZW50LFxuICAgIFByb2ZpbGVTZXJ2aWNlLFxuICAgIFBhZ2VSaWJib25Db21wb25lbnQsXG4gICAgRXJyb3JDb21wb25lbnRcbn0gZnJvbSAnLi9sYXlvdXRzJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgTGF5b3V0Um91dGluZ01vZHVsZSxcbiAgICAgICAgTmcyV2Vic3RvcmFnZS5mb3JSb290KHsgcHJlZml4OiAnamhpJywgc2VwYXJhdG9yOiAnLSd9KSxcbiAgICAgICAgQ29uY291cnNlUGlwZWxpbmVzU2hhcmVkTW9kdWxlLFxuICAgICAgICBDb25jb3Vyc2VQaXBlbGluZXNBZG1pbk1vZHVsZSxcbiAgICAgICAgQ29uY291cnNlUGlwZWxpbmVzQWNjb3VudE1vZHVsZSxcbiAgICAgICAgQ29uY291cnNlUGlwZWxpbmVzRW50aXR5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSmhpTWFpbkNvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50LFxuICAgICAgICBFcnJvckNvbXBvbmVudCxcbiAgICAgICAgUGFnZVJpYmJvbkNvbXBvbmVudCxcbiAgICAgICAgRm9vdGVyQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUHJvZmlsZVNlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogV2luZG93LCB1c2VWYWx1ZTogd2luZG93IH0sXG4gICAgICAgIHsgcHJvdmlkZTogRG9jdW1lbnQsIHVzZVZhbHVlOiBkb2N1bWVudCB9LFxuICAgICAgICBjdXN0b21IdHRwUHJvdmlkZXIoKSxcbiAgICAgICAgUGFnaW5hdGlvbkNvbmZpZyxcbiAgICAgICAgVXNlclJvdXRlQWNjZXNzU2VydmljZVxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbIEpoaU1haW5Db21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBDb25jb3Vyc2VQaXBlbGluZXNBcHBNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLm1vZHVsZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc29sdmUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzJztcbi8qIGltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aG9yaXplUmVzb2x2ZSBpbXBsZW1lbnRzIFJlc29sdmU8YW55PiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG5cbiAgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5hdXRob3JpemUoKTtcbiAgfVxufSAqL1xuXG5leHBvcnQgY29uc3QgbmF2YmFyUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogTmF2YmFyQ29tcG9uZW50LFxuICAgIC8vIHJlc29sdmU6IHtcbiAgICAvLyAgICdhdXRob3JpemUnOiBBdXRob3JpemVSZXNvbHZlXG4gICAgLy8gfSxcbiAgICBvdXRsZXQ6ICduYXZiYXInXG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5yb3V0ZS50cyIsImltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBERUJVR19JTkZPX0VOQUJMRUQgfSBmcm9tICcuLi8uLi9hcHAuY29uc3RhbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2RDb25maWcoKSB7XG4gICAgLy8gZGlzYWJsZSBkZWJ1ZyBkYXRhIG9uIHByb2QgcHJvZmlsZSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXG4gICAgaWYgKCFERUJVR19JTkZPX0VOQUJMRUQpIHtcbiAgICAgICAgZW5hYmxlUHJvZE1vZGUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9jb25maWcvcHJvZC5jb25maWcudHMiLCJpbXBvcnQgeyBJVEVNU19QRVJfUEFHRSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JQYWdpbmF0aW9uQ29uZmlnfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogTmdiUGFnaW5hdGlvbkNvbmZpZykge1xuICAgICAgICBjb25maWcuYm91bmRhcnlMaW5rcyA9IHRydWU7XG4gICAgICAgIGNvbmZpZy5tYXhTaXplID0gNTtcbiAgICAgICAgY29uZmlnLnBhZ2VTaXplID0gSVRFTVNfUEVSX1BBR0U7XG4gICAgICAgIGNvbmZpZy5zaXplID0gJ3NtJztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnLnRzIiwiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpbmNpcGFsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZlclByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGgvYXV0aC1vYXV0aDIuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBBdXRoRXhwaXJlZEludGVyY2VwdG9yIGV4dGVuZHMgSHR0cEludGVyY2VwdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEludGVyY2VwdChvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogUmVxdWVzdE9wdGlvbnNBcmdzIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgcmVzcG9uc2VJbnRlcmNlcHQob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxSZXNwb25zZT4pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICByZXR1cm4gPE9ic2VydmFibGU8UmVzcG9uc2U+PiBvYnNlcnZhYmxlLmNhdGNoKChlcnJvciwgc291cmNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJpbmNpcGFsOiBQcmluY2lwYWwgPSBzZWxmLmluamVjdG9yLmdldChQcmluY2lwYWwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByaW5jaXBhbC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXV0aDogQXV0aFNlcnZpY2UgPSBzZWxmLmluamVjdG9yLmdldChBdXRoU2VydmljZSk7XG4gICAgICAgICAgICAgICAgICAgIGF1dGguYXV0aG9yaXplKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC1leHBpcmVkLmludGVyY2VwdG9yLnRzIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBTZXNzaW9uU3RvcmFnZVNlcnZpY2UgfSBmcm9tICduZzItd2Vic3RvcmFnZSc7XG5pbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmV4cG9ydCBjbGFzcyBBdXRoSW50ZXJjZXB0b3IgZXh0ZW5kcyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNlc3Npb25TdG9yYWdlOiBTZXNzaW9uU3RvcmFnZVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0SW50ZXJjZXB0KG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xuICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxvY2FsU3RvcmFnZS5yZXRyaWV2ZSgnYXV0aGVudGljYXRpb25Ub2tlbicpIHx8IHRoaXMuc2Vzc2lvblN0b3JhZ2UucmV0cmlldmUoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKTtcbiAgICAgICAgaWYgKHRva2VuICYmIHRva2VuLmV4cGlyZXNfYXQgJiYgdG9rZW4uZXhwaXJlc19hdCA+IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4uYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXNwb25zZUludGVyY2VwdChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7IC8vIGJ5IHBhc3NcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2F1dGguaW50ZXJjZXB0b3IudHMiLCJpbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IsIEV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zQXJncywgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5leHBvcnQgY2xhc3MgRXJyb3JIYW5kbGVySW50ZXJjZXB0b3IgZXh0ZW5kcyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gPE9ic2VydmFibGU8UmVzcG9uc2U+PiBvYnNlcnZhYmxlLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGlmICghKGVycm9yLnN0YXR1cyA9PT0gNDAxICYmIChlcnJvci50ZXh0KCkgPT09ICcnIHx8XG4gICAgICAgICAgICAgICAgKGVycm9yLmpzb24oKS5wYXRoICYmIGVycm9yLmpzb24oKS5wYXRoLmluZGV4T2YoJy9hcGkvYWNjb3VudCcpID09PSAwICkpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCgge25hbWU6ICdjb25jb3Vyc2VQaXBlbGluZXNBcHAuaHR0cEVycm9yJywgY29udGVudDogZXJyb3J9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yLnRzIiwiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFhIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIEludGVyY2VwdGFibGVIdHRwIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBBdXRoSW50ZXJjZXB0b3IgfSBmcm9tICcuL2F1dGguaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xuaW1wb3J0IHsgQXV0aEV4cGlyZWRJbnRlcmNlcHRvciB9IGZyb20gJy4vYXV0aC1leHBpcmVkLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEVycm9ySGFuZGxlckludGVyY2VwdG9yIH0gZnJvbSAnLi9lcnJvcmhhbmRsZXIuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSW50ZXJjZXB0b3IgfSBmcm9tICcuL25vdGlmaWNhdGlvbi5pbnRlcmNlcHRvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmNlcHRhYmxlRmFjdG9yeShcbiAgICBiYWNrZW5kOiBYSFJCYWNrZW5kLFxuICAgIGRlZmF1bHRPcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyxcbiAgICBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZSxcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXJcbikge1xuICAgIHJldHVybiBuZXcgSW50ZXJjZXB0YWJsZUh0dHAoXG4gICAgICAgIGJhY2tlbmQsXG4gICAgICAgIGRlZmF1bHRPcHRpb25zLFxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgQXV0aEludGVyY2VwdG9yKGxvY2FsU3RvcmFnZSwgc2Vzc2lvblN0b3JhZ2UpLFxuICAgICAgICAgICAgbmV3IEF1dGhFeHBpcmVkSW50ZXJjZXB0b3IoaW5qZWN0b3IpLFxuICAgICAgICAgICAgLy8gT3RoZXIgaW50ZXJjZXB0b3JzIGNhbiBiZSBhZGRlZCBoZXJlXG4gICAgICAgICAgICBuZXcgRXJyb3JIYW5kbGVySW50ZXJjZXB0b3IoZXZlbnRNYW5hZ2VyKSxcbiAgICAgICAgICAgIG5ldyBOb3RpZmljYXRpb25JbnRlcmNlcHRvcigpXG4gICAgICAgIF1cbiAgICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbUh0dHBQcm92aWRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlOiBIdHRwLFxuICAgICAgICB1c2VGYWN0b3J5OiBpbnRlcmNlcHRhYmxlRmFjdG9yeSxcbiAgICAgICAgZGVwczogW1xuICAgICAgICAgICAgWEhSQmFja2VuZCxcbiAgICAgICAgICAgIFJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgICAgICAgICAgIFNlc3Npb25TdG9yYWdlU2VydmljZSxcbiAgICAgICAgICAgIEluamVjdG9yLFxuICAgICAgICAgICAgRXZlbnRNYW5hZ2VyXG4gICAgICAgIF1cbiAgICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2h0dHAucHJvdmlkZXIudHMiLCJpbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkludGVyY2VwdG9yIGV4dGVuZHMgSHR0cEludGVyY2VwdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gPE9ic2VydmFibGU8UmVzcG9uc2U+PiBvYnNlcnZhYmxlLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgbGV0IGFyciA9IEFycmF5LmZyb20oZXJyb3IuaGVhZGVycy5faGVhZGVycyk7XG4gICAgICAgICAgICBsZXQgaGVhZGVycyA9IFtdO1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycltpXVswXS5lbmRzV2l0aCgnYXBwLWFsZXJ0JykgfHwgYXJyW2ldWzBdLmVuZHNXaXRoKCdhcHAtcGFyYW1zJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKGFycltpXVswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVycy5zb3J0KCk7XG4gICAgICAgICAgICBsZXQgYWxlcnRLZXkgPSBoZWFkZXJzLmxlbmd0aCA+PSAxID8gZXJyb3IuaGVhZGVycy5nZXQoaGVhZGVyc1swXSkgOiBudWxsO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhbGVydEtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAvLyBBbGVydFNlcnZpY2Uuc3VjY2VzcyhhbGVydEtleSwgeyBwYXJhbTogcmVzcG9uc2UuaGVhZGVycyhoZWFkZXJzWzFdKX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9ub3RpZmljYXRpb24uaW50ZXJjZXB0b3IudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiBqaGlwc3Rlci1uZWVkbGUtYWRkLWVudGl0eS1tb2R1bGUtaW1wb3J0IC0gSkhpcHN0ZXIgd2lsbCBhZGQgZW50aXR5IG1vZHVsZXMgaW1wb3J0cyBoZXJlICovXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICAvKiBqaGlwc3Rlci1uZWVkbGUtYWRkLWVudGl0eS1tb2R1bGUgLSBKSGlwc3RlciB3aWxsIGFkZCBlbnRpdHkgbW9kdWxlcyBoZXJlICovXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW10sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQ29uY291cnNlUGlwZWxpbmVzRW50aXR5TW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2VudGl0eS5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhpcHN0ZXIgaW1nLWZsdWlkIGltZy1yb3VuZGVkXFxcIj48L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCI+XFxuICAgICAgICA8aDEgY2xhc3M9XFxcImRpc3BsYXktNFxcXCI+V2VsY29tZSwgSmF2YSBIaXBzdGVyITwvaDE+XFxuICAgICAgICA8cCBjbGFzcz1cXFwibGVhZFxcXCI+VGhpcyBpcyB5b3VyIGhvbWVwYWdlPC9wPlxcblxcbiAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVxcXCJpc0F1dGhlbnRpY2F0ZWQoKVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJhY2NvdW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICA+IFlvdSBhcmUgbG9nZ2VkIGluIGFzIHVzZXIgXFxcInt7YWNjb3VudC5sb2dpbn19XFxcIi4gPC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiICpuZ1N3aXRjaENhc2U9XFxcImZhbHNlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+SWYgeW91IHdhbnQgdG8gPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwibG9naW4oKVxcXCI+c2lnbiBpbjwvYT48c3Bhbj4sIHlvdSBjYW4gdHJ5IHRoZSBkZWZhdWx0IGFjY291bnRzOjxici8+LSBBZG1pbmlzdHJhdG9yIChsb2dpbj1cXFwiYWRtaW5cXFwiIGFuZCBwYXNzd29yZD1cXFwiYWRtaW5cXFwiKSA8YnIvPi0gVXNlciAobG9naW49XFxcInVzZXJcXFwiIGFuZCBwYXNzd29yZD1cXFwidXNlclxcXCIpLjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIiAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuPllvdSBkb24ndCBoYXZlIGFuIGFjY291bnQgeWV0Pzwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIHJvdXRlckxpbms9XFxcInJlZ2lzdGVyXFxcIj5SZWdpc3RlciBhIG5ldyBhY2NvdW50PC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8cD5cXG4gICAgICAgICAgICBJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb24gb24gSkhpcHN0ZXI6XFxuICAgICAgICA8L3A+XFxuXFxuICAgICAgICA8dWw+XFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcImh0dHA6Ly9qaGlwc3Rlci5naXRodWIuaW8vXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+SkhpcHN0ZXIgaG9tZXBhZ2U8L2E+PC9saT5cXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3RhZ3MvamhpcHN0ZXIvaW5mb1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkpIaXBzdGVyIG9uIFN0YWNrIE92ZXJmbG93PC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9qaGlwc3Rlci9nZW5lcmF0b3ItamhpcHN0ZXIvaXNzdWVzP3N0YXRlPW9wZW5cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5KSGlwc3RlciBidWcgdHJhY2tlcjwvYT48L2xpPlxcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCJodHRwczovL2dpdHRlci5pbS9qaGlwc3Rlci9nZW5lcmF0b3ItamhpcHN0ZXJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5KSGlwc3RlciBwdWJsaWMgY2hhdCByb29tPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vdHdpdHRlci5jb20vamF2YV9oaXBzdGVyXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgPmZvbGxvdyBAamF2YV9oaXBzdGVyIG9uIFR3aXR0ZXI8L2E+PC9saT5cXG4gICAgICAgIDwvdWw+XFxuXFxuICAgICAgICA8cD5cXG4gICAgICAgICAgICA8c3Bhbj5JZiB5b3UgbGlrZSBKSGlwc3RlciwgZG9uJ3QgZm9yZ2V0IHRvIGdpdmUgdXMgYSBzdGFyIG9uPC9zcGFuPiA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vamhpcHN0ZXIvZ2VuZXJhdG9yLWpoaXBzdGVyXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+R2l0aHViPC9hPiFcXG4gICAgICAgIDwvcD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEV2ZW50TWFuYWdlcn0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBBY2NvdW50LCBMb2dpbk1vZGFsU2VydmljZSwgUHJpbmNpcGFsIH0gZnJvbSAnLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAnaG9tZS5jc3MnXG4gICAgXVxuXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFjY291bnQ6IEFjY291bnQ7XG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQXV0aGVudGljYXRpb25TdWNjZXNzKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBdXRoZW50aWNhdGlvblN1Y2Nlc3MoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnYXV0aGVudGljYXRpb25TdWNjZXNzJywgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmluY2lwYWwuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi8nO1xuXG5leHBvcnQgY29uc3QgaG9tZVJvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICBwYWdlVGl0bGU6ICdXZWxjb21lLCBKYXZhIEhpcHN0ZXIhJ1xuICB9LFxuICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUucm91dGUudHMiLCJleHBvcnQgKiBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vaG9tZS5yb3V0ZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGlwc3RlciBpbWctZmx1aWQgaW1nLXJvdW5kZWRcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcbiAgICAgICAgICAgIDxoMT5FcnJvciBQYWdlITwvaDE+XFxuXFxuICAgICAgICAgICAgPGRpdiBbaGlkZGVuXT1cXFwiIWVycm9yTWVzc2FnZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+e3tlcnJvck1lc3NhZ2V9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IFtoaWRkZW5dPVxcXCIhZXJyb3I0MDNcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPllvdSBhcmUgbm90IGF1dGhvcml6ZWQgdG8gYWNjZXNzIHRoZSBwYWdlLlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWVycm9yJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXJyb3IuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgICBlcnJvcjQwMzogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICApIHtcbiAgICAgICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBlcnJvclJvdXRlOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnZXJyb3InLFxuICAgIGNvbXBvbmVudDogRXJyb3JDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgICAgcGFnZVRpdGxlOiAnRXJyb3IgcGFnZSEnXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnYWNjZXNzZGVuaWVkJyxcbiAgICBjb21wb25lbnQ6IEVycm9yQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICAgIHBhZ2VUaXRsZTogJ0Vycm9yIHBhZ2UhJ1xuICAgIH0sXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxuICB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLnJvdXRlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgIDxwPlRoaXMgaXMgeW91ciBmb290ZXI8L3A+XFxuPC9kaXY+XFxuPHRlbXBsYXRlIG5nYk1vZGFsQ29udGFpbmVyPjwvdGVtcGxhdGU+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1mb290ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvci9lcnJvci5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL21haW4vbWFpbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvZmlsZXMvcGFnZS1yaWJib24uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvZmlsZXMvcHJvZmlsZS1pbmZvLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGF5b3V0LXJvdXRpbmcubW9kdWxlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9pbmRleC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcywgUmVzb2x2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IGhvbWVSb3V0ZSB9IGZyb20gJy4uL2hvbWUnO1xuaW1wb3J0IHsgbmF2YmFyUm91dGUgfSBmcm9tICcuLi9hcHAucm91dGUnO1xuaW1wb3J0IHsgZXJyb3JSb3V0ZSB9IGZyb20gJy4vJztcblxubGV0IExBWU9VVF9ST1VURVMgPSBbXG4gICAgaG9tZVJvdXRlLFxuICAgIG5hdmJhclJvdXRlLFxuICAgIC4uLmVycm9yUm91dGVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChMQVlPVVRfUk9VVEVTLCB7IHVzZUhhc2g6IHRydWUgfSlcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFJvdXRlck1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExheW91dFJvdXRpbmdNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9sYXlvdXQtcm91dGluZy5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGpoaS1wYWdlLXJpYmJvbj48L2poaS1wYWdlLXJpYmJvbj5cXG48ZGl2PlxcbiAgICA8cm91dGVyLW91dGxldCBuYW1lPVxcXCJuYXZiYXJcXFwiPjwvcm91dGVyLW91dGxldD5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XFxcInBvcHVwXFxcIj48L3JvdXRlci1vdXRsZXQ+XFxuICAgIDwvZGl2PlxcbiAgICA8amhpLWZvb3Rlcj48L2poaS1mb290ZXI+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXNSZWNvZ25pemVkIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFN0YXRlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1tYWluJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWFpbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlICRzdG9yYWdlU2VydmljZTogU3RhdGVTdG9yYWdlU2VydmljZSxcbiAgICApIHt9XG5cbiAgICBwcml2YXRlIGdldFBhZ2VUaXRsZShyb3V0ZVNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgICAgIGxldCB0aXRsZTogc3RyaW5nID0gKHJvdXRlU25hcHNob3QuZGF0YSAmJiByb3V0ZVNuYXBzaG90LmRhdGFbJ3BhZ2VUaXRsZSddKSA/IHJvdXRlU25hcHNob3QuZGF0YVsncGFnZVRpdGxlJ10gOiAnY29uY291cnNlUGlwZWxpbmVzQXBwJztcbiAgICAgICAgaWYgKHJvdXRlU25hcHNob3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGl0bGUgPSB0aGlzLmdldFBhZ2VUaXRsZShyb3V0ZVNuYXBzaG90LmZpcnN0Q2hpbGQpIHx8IHRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICAgICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodGhpcy5nZXRQYWdlVGl0bGUodGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3Qucm9vdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgUm91dGVzUmVjb2duaXplZCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgZGVzdGluYXRpb25EYXRhID0ge307XG4gICAgICAgICAgICAgICAgbGV0IGRlc3RpbmF0aW9uTmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgIGxldCBkZXN0aW5hdGlvbkV2ZW50ID0gZXZlbnQuc3RhdGUucm9vdC5maXJzdENoaWxkLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbkV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gZGVzdGluYXRpb25FdmVudC5wYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uRGF0YSA9IGRlc3RpbmF0aW9uRXZlbnQuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25OYW1lID0gZGVzdGluYXRpb25FdmVudC51cmxbMF0ucGF0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGZyb20gPSB7bmFtZTogdGhpcy5yb3V0ZXIudXJsLnNsaWNlKDEpfTtcbiAgICAgICAgICAgICAgICBsZXQgZGVzdGluYXRpb24gPSB7bmFtZTogZGVzdGluYXRpb25OYW1lLCBkYXRhOiBkZXN0aW5hdGlvbkRhdGF9O1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JhZ2VTZXJ2aWNlLnN0b3JlRGVzdGluYXRpb25TdGF0ZShkZXN0aW5hdGlvbiwgcGFyYW1zLCBmcm9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kYXJrIGpoLW5hdmJhclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImpoLWxvZ28tY29udGFpbmVyIGZsb2F0LXhzLWxlZnRcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcImpoLW5hdmJhci10b2dnbGVyIGhpZGRlbi1sZy11cCBmbG9hdC14cy1sZWZ0XFxcIiBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjbmF2YmFyUmVzcG9uc2l2ZVxcXCIgYXJpYS1jb250cm9scz1cXFwibmF2YmFyUmVzcG9uc2l2ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtbGFiZWw9XFxcIlRvZ2dsZSBuYXZpZ2F0aW9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVOYXZiYXIoKVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWJhcnNcXFwiPjwvaT5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmQgbG9nbyBmbG9hdC14cy1yaWdodFxcXCIgcm91dGVyTGluaz1cXFwiL1xcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImxvZ28taW1nXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm5hdmJhci10aXRsZVxcXCI+Q29uY291cnNlX3BpcGVsaW5lczwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcIm5hdmJhci12ZXJzaW9uXFxcIj57e3ZlcnNpb259fTwvc3Bhbj5cXG4gICAgICAgIDwvYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbGxhcHNlIG5hdmJhci10b2dnbGVhYmxlLW1kIGZsb2F0LWxnLXJpZ2h0XFxcIiBpZD1cXFwibmF2YmFyUmVzcG9uc2l2ZVxcXCIgW25nYkNvbGxhcHNlXT1cXFwiaXNOYXZiYXJDb2xsYXBzZWRcXFwiIFtuZ1N3aXRjaF09XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgZmxvYXQtbGctcmlnaHRcXFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgcm91dGVyTGluaz1cXFwiL1xcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtaG9tZVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoaWRkZW4tc20tZG93blxcXCI+SG9tZTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPCEtLSBqaGlwc3Rlci1uZWVkbGUtYWRkLWVsZW1lbnQtdG8tbWVudSAtIEpIaXBzdGVyIHdpbGwgYWRkIG5ldyBtZW51IGl0ZW1zIGhlcmUgLS0+XFxuICAgICAgICAgICAgPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiIG5nYkRyb3Bkb3duIGNsYXNzPVxcXCJuYXYtaXRlbSBkcm9wZG93biBwb2ludGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBuZ2JEcm9wZG93blRvZ2dsZSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBpZD1cXFwiZW50aXR5LW1lbnVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRoLWxpc3RcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1zbS1kb3duXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50aXRpZXNcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+XFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBuZ2JEcm9wZG93bk1lbnU+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGpoaXBzdGVyLW5lZWRsZS1hZGQtZW50aXR5LXRvLW1lbnUgLSBKSGlwc3RlciB3aWxsIGFkZCBlbnRpdGllcyB0byB0aGUgbWVudSBoZXJlIC0tPlxcbiAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiIGpoaUhhc0F1dGhvcml0eT1cXFwiUk9MRV9BRE1JTlxcXCIgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXFxcIiBuZ2JEcm9wZG93blRvZ2dsZSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBpZD1cXFwiYWRtaW4tbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdXNlci1wbHVzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoaWRkZW4tc20tZG93blxcXCI+QWRtaW5pc3RyYXRpb248L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+XFxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBuZ2JEcm9wZG93bk1lbnU+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcInVzZXItbWFuYWdlbWVudFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXVzZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlVzZXIgbWFuYWdlbWVudDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJqaGktbWV0cmljc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXRhY2hvbWV0ZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1ldHJpY3M8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiamhpLWhlYWx0aFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWhlYXJ0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5IZWFsdGg8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiamhpLWNvbmZpZ3VyYXRpb25cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1saXN0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db25maWd1cmF0aW9uPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImF1ZGl0c1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWJlbGxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkF1ZGl0czwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJsb2dzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtdGFza3NcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxvZ3M8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwic3dhZ2dlckVuYWJsZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJkb2NzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtYm9va1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QVBJPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGpoaXBzdGVyLW5lZWRsZS1hZGQtZWxlbWVudC10by1hZG1pbi1tZW51IC0gSkhpcHN0ZXIgd2lsbCBhZGQgZW50aXRpZXMgdG8gdGhlIGFkbWluIG1lbnUgaGVyZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cXFwiIWluUHJvZHVjdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIGhyZWY9Jy9oMi1jb25zb2xlJyB0YXJnZXQ9XFxcIl90YWJcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtaGRkLW9cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRhdGFiYXNlPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXFxcIiBuZ2JEcm9wZG93blRvZ2dsZSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBpZD1cXFwiYWNjb3VudC1tZW51XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwiIWdldEltYWdlVXJsKClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVzZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGlkZGVuLXNtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+XFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJnZXRJbWFnZVVybCgpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cXFwiZ2V0SW1hZ2VVcmwoKVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtaW1hZ2UgaW1nLWNpcmNsZVxcXCIgYWx0PVxcXCJBdmF0YXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFxcXCIgbmdiRHJvcGRvd25NZW51PlxcbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJzZXR0aW5nc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXdyZW5jaFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2V0dGluZ3M8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwicGFzc3dvcmRcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1jbG9jay1vXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QYXNzd29yZDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCIgaWQ9XFxcImxvZ291dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1zaWduLW91dFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2lnbiBvdXQ8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIChjbGljayk9XFxcImxvZ2luKClcXFwiIGlkPVxcXCJsb2dpblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1zaWduLWluXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaWduIGluPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJyZWdpc3RlclxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXJlZ2lzdGVyZWRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlZ2lzdGVyPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvZGl2PlxcbjwvbmF2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4uL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZSc7IC8vIEZJWE1FIGJhcnJlbCBkb2VzbnQgd29yayBoZXJlXG5pbXBvcnQgeyBQcmluY2lwYWwsIExvZ2luTW9kYWxTZXJ2aWNlLCBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5pbXBvcnQgeyBWRVJTSU9OLCBERUJVR19JTkZPX0VOQUJMRUQgfSBmcm9tICcuLi8uLi9hcHAuY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktbmF2YmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgJ25hdmJhci5jc3MnXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaW5Qcm9kdWN0aW9uOiBib29sZWFuO1xuICAgIGlzTmF2YmFyQ29sbGFwc2VkOiBib29sZWFuO1xuICAgIGxhbmd1YWdlczogYW55W107XG4gICAgc3dhZ2dlckVuYWJsZWQ6IGJvb2xlYW47XG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICAgIHZlcnNpb246IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICBwcml2YXRlIGxvZ2luTW9kYWxTZXJ2aWNlOiBMb2dpbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gREVCVUdfSU5GT19FTkFCTEVEID8gJ3YnICsgVkVSU0lPTiA6ICcnO1xuICAgICAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVJbmZvKCkuc3Vic2NyaWJlKHByb2ZpbGVJbmZvID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5Qcm9kdWN0aW9uID0gcHJvZmlsZUluZm8uaW5Qcm9kdWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5zd2FnZ2VyRW5hYmxlZCA9IHByb2ZpbGVJbmZvLnN3YWdnZXJFbmFibGVkO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGNvbGxhcHNlTmF2YmFyKCkge1xuICAgICAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW5jaXBhbC5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZU5hdmJhcigpO1xuICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTmF2YmFyKCkge1xuICAgICAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gIXRoaXMuaXNOYXZiYXJDb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQXV0aGVudGljYXRlZCgpID8gdGhpcy5wcmluY2lwYWwuZ2V0SW1hZ2VVcmwoKSA6IG51bGw7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2YmFyLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4vcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2ZpbGVJbmZvIH0gZnJvbSAnLi9wcm9maWxlLWluZm8ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1wYWdlLXJpYmJvbicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicmliYm9uXCIgKm5nSWY9XCJyaWJib25FbnZcIj48YSBocmVmPVwiXCI+e3tyaWJib25FbnZ9fTwvYT48L2Rpdj5gLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAncGFnZS1yaWJib24uY3NzJ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZVJpYmJvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcm9maWxlSW5mbzogUHJvZmlsZUluZm87XG4gICAgcmliYm9uRW52OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGVJbmZvKCkuc3Vic2NyaWJlKHByb2ZpbGVJbmZvID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZmlsZUluZm8gPSBwcm9maWxlSW5mbztcbiAgICAgICAgICAgIHRoaXMucmliYm9uRW52ID0gcHJvZmlsZUluZm8ucmliYm9uRW52O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uY29tcG9uZW50LnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGFnZS1yaWJib24uY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgUHJvZmlsZUluZm8ge1xuICAgIGFjdGl2ZVByb2ZpbGVzOiBzdHJpbmdbXTtcbiAgICByaWJib25FbnY6IHN0cmluZztcbiAgICBpblByb2R1Y3Rpb246IGJvb2xlYW47XG4gICAgc3dhZ2dlckVuYWJsZWQ6IGJvb2xlYW47XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcHJvZmlsZS1pbmZvLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgUHJvZmlsZUluZm8gfSBmcm9tICcuL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHByb2ZpbGVJbmZvVXJsID0gJ2FwaS9wcm9maWxlLWluZm8nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGdldFByb2ZpbGVJbmZvKCk6IE9ic2VydmFibGU8UHJvZmlsZUluZm8+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5wcm9maWxlSW5mb1VybClcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgbGV0IHBpID0gbmV3IFByb2ZpbGVJbmZvKCk7XG4gICAgICAgICAgICAgICAgcGkuYWN0aXZlUHJvZmlsZXMgPSBkYXRhLmFjdGl2ZVByb2ZpbGVzO1xuICAgICAgICAgICAgICAgIHBpLnJpYmJvbkVudiA9IGRhdGEucmliYm9uRW52O1xuICAgICAgICAgICAgICAgIHBpLmluUHJvZHVjdGlvbiA9IGRhdGEuYWN0aXZlUHJvZmlsZXMuaW5kZXhPZigncHJvZCcpICE9PSAtMTtcbiAgICAgICAgICAgICAgICBwaS5zd2FnZ2VyRW5hYmxlZCA9IGRhdGEuYWN0aXZlUHJvZmlsZXMuaW5kZXhPZignc3dhZ2dlcicpICE9PSAtMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50TWFuYWdlciwgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWFsZXJ0LWVycm9yJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnRzXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhbGVydCBvZiBhbGVydHNcIiAgW25nQ2xhc3NdPVwie1xcJ2FsZXJ0LnBvc2l0aW9uXFwnOiB0cnVlLCBcXCd0b2FzdFxcJzogYWxlcnQudG9hc3R9XCI+XG4gICAgICAgICAgICAgICAgPG5nYi1hbGVydCB0eXBlPVwie3thbGVydC50eXBlfX1cIiBjbG9zZT1cImFsZXJ0LmNsb3NlKGFsZXJ0cylcIj48cHJlPnt7IGFsZXJ0Lm1zZyB9fTwvcHJlPjwvbmdiLWFsZXJ0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgSmhpQWxlcnRFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgICBhbGVydHM6IGFueVtdO1xuICAgIGNsZWFuSHR0cEVycm9yTGlzdGVuZXI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcblxuICAgICAgICB0aGlzLmNsZWFuSHR0cEVycm9yTGlzdGVuZXIgPSBldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdjb25jb3Vyc2VQaXBlbGluZXNBcHAuaHR0cEVycm9yJywgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBodHRwUmVzcG9uc2UgPSByZXNwb25zZS5jb250ZW50O1xuICAgICAgICAgICAgc3dpdGNoIChodHRwUmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29ubmVjdGlvbiByZWZ1c2VkLCBzZXJ2ZXIgbm90IHJlYWNoYWJsZVxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KCdTZXJ2ZXIgbm90IHJlYWNoYWJsZScsICdlcnJvci5zZXJ2ZXIubm90LnJlYWNoYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDAwOlxuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyID0gQXJyYXkuZnJvbShodHRwUmVzcG9uc2UuaGVhZGVycy5faGVhZGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWFkZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV1bMF0uZW5kc1dpdGgoJ2FwcC1lcnJvcicpIHx8IGFycltpXVswXS5lbmRzV2l0aCgnYXBwLXBhcmFtcycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKGFycltpXVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5zb3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlcnJvckhlYWRlciA9IGh0dHBSZXNwb25zZS5oZWFkZXJzLmdldChoZWFkZXJzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVudGl0eUtleSA9IGh0dHBSZXNwb25zZS5oZWFkZXJzLmdldChoZWFkZXJzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ySGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW50aXR5TmFtZSA9IGVudGl0eUtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChlcnJvckhlYWRlciwgZXJyb3JIZWFkZXIsIHtlbnRpdHlOYW1lOiBlbnRpdHlOYW1lfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaHR0cFJlc3BvbnNlLnRleHQoKSAhPT0gJycgJiYgaHR0cFJlc3BvbnNlLmpzb24oKSAmJiBodHRwUmVzcG9uc2UuanNvbigpLmZpZWxkRXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGRFcnJvcnMgPSBodHRwUmVzcG9uc2UuanNvbigpLmZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGZpZWxkRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkRXJyb3IgPSBmaWVsZEVycm9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0ICdzb21ldGhpbmdbMTRdLm90aGVyWzRdLmlkJyB0byAnc29tZXRoaW5nW10ub3RoZXJbXS5pZCcgc28gdHJhbnNsYXRpb25zIGNhbiBiZSB3cml0dGVuIHRvIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnZlcnRlZEZpZWxkID0gZmllbGRFcnJvci5maWVsZC5yZXBsYWNlKC9cXFtcXGQqXFxdL2csICdbXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZE5hbWUgPSBjb252ZXJ0ZWRGaWVsZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlZEZpZWxkLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0ZpZWxkICcgKyBmaWVsZE5hbWUgKyAnIGNhbm5vdCBiZSBlbXB0eScsICdlcnJvci4nICsgZmllbGRFcnJvci5tZXNzYWdlLCB7ZmllbGROYW1lOiBmaWVsZE5hbWV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChodHRwUmVzcG9uc2UudGV4dCgpICE9PSAnJyAmJiBodHRwUmVzcG9uc2UuanNvbigpICYmIGh0dHBSZXNwb25zZS5qc29uKCkubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KGh0dHBSZXNwb25zZS5qc29uKCkubWVzc2FnZSwgaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlLCBodHRwUmVzcG9uc2UuanNvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChodHRwUmVzcG9uc2UudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoJ05vdCBmb3VuZCcsICdlcnJvci51cmwubm90LmZvdW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh0dHBSZXNwb25zZS50ZXh0KCkgIT09ICcnICYmIGh0dHBSZXNwb25zZS5qc29uKCkgJiYgaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChKU09OLnN0cmluZ2lmeShodHRwUmVzcG9uc2UpKTsgLy8gRml4bWUgZmluZCBhIHdheSB0byBwYXJzZSBodHRwUmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xlYW5IdHRwRXJyb3JMaXN0ZW5lciAhPT0gdW5kZWZpbmVkICYmIHRoaXMuY2xlYW5IdHRwRXJyb3JMaXN0ZW5lciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuZGVzdHJveSh0aGlzLmNsZWFuSHR0cEVycm9yTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEVycm9yQWxlcnQgKG1lc3NhZ2UsIGtleT8sIGRhdGE/KSB7XG4gICAgICAgIHRoaXMuYWxlcnRzLnB1c2goXG4gICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5hZGRBbGVydChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICBtc2c6IG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0OiB0aGlzLmFsZXJ0U2VydmljZS5pc1RvYXN0KCksXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydHNcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWFsZXJ0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnRzXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhbGVydCBvZiBhbGVydHNcIiBbbmdDbGFzc109XCJ7XFwnYWxlcnQucG9zaXRpb25cXCc6IHRydWUsIFxcJ3RvYXN0XFwnOiBhbGVydC50b2FzdH1cIj5cbiAgICAgICAgICAgICAgICA8bmdiLWFsZXJ0IFt0eXBlXT1cImFsZXJ0LnR5cGVcIiAoY2xvc2UpPVwiYWxlcnQuY2xvc2UoYWxlcnRzKVwiPjxwcmUgW2lubmVySFRNTF09XCJhbGVydC5tc2dcIj48L3ByZT48L25nYi1hbGVydD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIEpoaUFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIGFsZXJ0czogYW55W107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFsZXJ0cyA9IHRoaXMuYWxlcnRTZXJ2aWNlLmdldCgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmFsZXJ0cyA9IFtdO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjY291bnRTZXJ2aWNlICB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGdldCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnYXBpL2FjY291bnQnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIHNhdmUoYWNjb3VudDogYW55KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2FwaS9hY2NvdW50JywgYWNjb3VudCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9hY2NvdW50LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xuXG5pbXBvcnQgeyBCYXNlNjQgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmVyUHJvdmlkZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCxcbiAgICAgICAgcHJpdmF0ZSBiYXNlNjQ6IEJhc2U2NCxcbiAgICAgICAgcHJpdmF0ZSAkbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgZ2V0VG9rZW4gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kbG9jYWxTdG9yYWdlLnJldHJpZXZlKCdhdXRoZW50aWNhdGlvblRva2VuJyk7XG4gICAgfVxuXG4gICAgbG9naW4gKGNyZWRlbnRpYWxzKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IGRhdGEgPSAndXNlcm5hbWU9JyArICBlbmNvZGVVUklDb21wb25lbnQoY3JlZGVudGlhbHMudXNlcm5hbWUpICsgJyZwYXNzd29yZD0nICtcbiAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChjcmVkZW50aWFscy5wYXNzd29yZCkgKyAnJmdyYW50X3R5cGU9cGFzc3dvcmQmc2NvcGU9cmVhZCUyMHdyaXRlJicgK1xuICAgICAgICAgICAgJ2NsaWVudF9zZWNyZXQ9bXktc2VjcmV0LXRva2VuLXRvLWNoYW5nZS1pbi1wcm9kdWN0aW9uJmNsaWVudF9pZD1jb25jb3Vyc2VfcGlwZWxpbmVzYXBwJztcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyAoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljICcgKyB0aGlzLmJhc2U2NC5lbmNvZGUoJ2NvbmNvdXJzZV9waXBlbGluZXNhcHAnICsgJzonICsgJ215LXNlY3JldC10b2tlbi10by1jaGFuZ2UtaW4tcHJvZHVjdGlvbicpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnb2F1dGgvdG9rZW4nLCBkYXRhLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH0pLm1hcChhdXRoU3VjY2Vzcy5iaW5kKHRoaXMpKTtcblxuICAgICAgICBmdW5jdGlvbiBhdXRoU3VjY2VzcyAocmVzcCkge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVzcC5qc29uKCk7XG4gICAgICAgICAgICBsZXQgZXhwaXJlZEF0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGV4cGlyZWRBdC5zZXRTZWNvbmRzKGV4cGlyZWRBdC5nZXRTZWNvbmRzKCkgKyByZXNwb25zZS5leHBpcmVzX2luKTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmV4cGlyZXNfYXQgPSBleHBpcmVkQXQuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdGhpcy4kbG9jYWxTdG9yYWdlLnN0b3JlKCdhdXRoZW50aWNhdGlvblRva2VuJywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9nb3V0ICgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5odHRwLnBvc3QoJ2FwaS9sb2dvdXQnLCB7fSk7XG4gICAgICAgICAgICB0aGlzLiRsb2NhbFN0b3JhZ2UuY2xlYXIoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYXV0aC1vYXV0aDIuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExvZ2luTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuL3ByaW5jaXBhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0YXRlLXN0b3JhZ2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCxcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZVN0b3JhZ2VTZXJ2aWNlOiBTdGF0ZVN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxvZ2luTW9kYWxTZXJ2aWNlOiBMb2dpbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge31cblxuICAgIGF1dGhvcml6ZSAoZm9yY2UpIHtcbiAgICAgICAgbGV0IGF1dGhSZXR1cm4gPSB0aGlzLnByaW5jaXBhbC5pZGVudGl0eShmb3JjZSkudGhlbihhdXRoVGhlbi5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gYXV0aFJldHVybjtcblxuICAgICAgICBmdW5jdGlvbiBhdXRoVGhlbiAoKSB7XG4gICAgICAgICAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gdGhpcy5wcmluY2lwYWwuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgICAgICAgICBsZXQgdG9TdGF0ZUluZm8gPSB0aGlzLnN0YXRlU3RvcmFnZVNlcnZpY2UuZ2V0RGVzdGluYXRpb25TdGF0ZSgpLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgbGV0IGNhbkFjdGl2YXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gYW4gYXV0aGVudGljYXRlZCB1c2VyIGNhbid0IGFjY2VzcyB0byBsb2dpbiBhbmQgcmVnaXN0ZXIgcGFnZXNcbiAgICAgICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQgJiYgKHRvU3RhdGVJbmZvLm5hbWUgPT09ICdyZWdpc3RlcicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSk7XG4gICAgICAgICAgICAgICAgY2FuQWN0aXZhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVjb3ZlciBhbmQgY2xlYXIgcHJldmlvdXNTdGF0ZSBhZnRlciBleHRlcm5hbCBsb2dpbiByZWRpcmVjdCAoZS5nLiBvYXV0aDIpXG4gICAgICAgICAgICBsZXQgZnJvbVN0YXRlSW5mbyA9IHRoaXMuc3RhdGVTdG9yYWdlU2VydmljZS5nZXREZXN0aW5hdGlvblN0YXRlKCkuZnJvbTtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1N0YXRlID0gdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLmdldFByZXZpb3VzU3RhdGUoKTtcbiAgICAgICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQgJiYgIWZyb21TdGF0ZUluZm8ubmFtZSAmJiBwcmV2aW91c1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLnJlc2V0UHJldmlvdXNTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwcmV2aW91c1N0YXRlLm5hbWVdLCB7IHF1ZXJ5UGFyYW1zOiAgcHJldmlvdXNTdGF0ZS5wYXJhbXMgIH0pO1xuICAgICAgICAgICAgICAgIGNhbkFjdGl2YXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b1N0YXRlSW5mby5kYXRhLmF1dGhvcml0aWVzICYmIHRvU3RhdGVJbmZvLmRhdGEuYXV0aG9yaXRpZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICF0aGlzLnByaW5jaXBhbC5oYXNBbnlBdXRob3JpdHkodG9TdGF0ZUluZm8uZGF0YS5hdXRob3JpdGllcykpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlciBpcyBzaWduZWQgaW4gYnV0IG5vdCBhdXRob3JpemVkIGZvciBkZXNpcmVkIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYWNjZXNzZGVuaWVkJ10pO1xuICAgICAgICAgICAgICAgICAgICBjYW5BY3RpdmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbkFjdGl2YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWQuIFNob3cgdGhlIHN0YXRlIHRoZXkgd2FudGVkIGJlZm9yZSB5b3VcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VuZCB0aGVtIHRvIHRoZSBsb2dpbiBzZXJ2aWNlLCBzbyB5b3UgY2FuIHJldHVybiB0aGVtIHdoZW4geW91J3JlIGRvbmVcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvU3RhdGVQYXJhbXNJbmZvID0gdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLmdldERlc3RpbmF0aW9uU3RhdGUoKS5wYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVTdG9yYWdlU2VydmljZS5zdG9yZVByZXZpb3VzU3RhdGUodG9TdGF0ZUluZm8ubmFtZSwgdG9TdGF0ZVBhcmFtc0luZm8pO1xuICAgICAgICAgICAgICAgICAgICAvLyBub3csIHNlbmQgdGhlbSB0byB0aGUgc2lnbmluIHN0YXRlIHNvIHRoZXkgY2FuIGxvZyBpblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2FjY2Vzc2RlbmllZCddKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FuQWN0aXZhdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2F1dGguc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1jb29raWUvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDU1JGU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHt9XG5cbiAgICBnZXRDU1JGKG5hbWU/OiBzdHJpbmcpIHtcbiAgICAgICAgbmFtZSA9IGAke25hbWUgPyBuYW1lIDogJ1hTUkYtVE9LRU4nfWA7XG4gICAgICAgIHJldHVybiB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KG5hbWUpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvY3NyZi5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpbmNpcGFsIH0gZnJvbSAnLi9wcmluY2lwYWwuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2poaUhhc0FueUF1dGhvcml0eV0nXG59KVxuZXhwb3J0IGNsYXNzIEhhc0FueUF1dGhvcml0eURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBqaGlIYXNBbnlBdXRob3JpdHk6IHN0cmluZztcbiAgICBhdXRob3JpdHk6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hdXRob3JpdHkgPSB0aGlzLmpoaUhhc0FueUF1dGhvcml0eS5yZXBsYWNlKC9cXHMrL2csICcnKS5zcGxpdCgnLCcpO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dGhvcml0eS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZpc2liaWxpdHlTeW5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmluY2lwYWwuZ2V0QXV0aGVudGljYXRpb25TdGF0ZSgpLnN1YnNjcmliZShpZGVudGl0eSA9PiB0aGlzLnNldFZpc2liaWxpdHlTeW5jKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VmlzaWJsZSAoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbi14cy11cCcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEhpZGRlbiAoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbi14cy11cCcsIHRydWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VmlzaWJpbGl0eVN5bmMgKCkge1xuXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLnByaW5jaXBhbC5oYXNBbnlBdXRob3JpdHkodGhpcy5hdXRob3JpdHkpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLnNldFZpc2libGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SGlkZGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2hhcy1hbnktYXV0aG9yaXR5LmRpcmVjdGl2ZS50cyIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaW5jaXBhbCB9IGZyb20gJy4vcHJpbmNpcGFsLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tqaGlIYXNBdXRob3JpdHldJ1xufSlcbmV4cG9ydCBjbGFzcyBIYXNBdXRob3JpdHlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgamhpSGFzQXV0aG9yaXR5OiBzdHJpbmc7XG4gICAgYXV0aG9yaXR5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmF1dGhvcml0eSA9IHRoaXMuamhpSGFzQXV0aG9yaXR5LnJlcGxhY2UoL1xccysvZywgJycpO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dGhvcml0eS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZpc2liaWxpdHlBc3luYygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmdldEF1dGhlbnRpY2F0aW9uU3RhdGUoKS5zdWJzY3JpYmUoaWRlbnRpdHkgPT4gdGhpcy5zZXRWaXNpYmlsaXR5U3luYygpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFZpc2liaWxpdHlTeW5jKCkge1xuICAgICAgaWYgKHRoaXMucHJpbmNpcGFsLmhhc0FueUF1dGhvcml0eShbdGhpcy5hdXRob3JpdHldKSkge1xuICAgICAgICB0aGlzLnNldFZpc2libGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0SGlkZGVuKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRWaXNpYmxlICgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaGlkZGVuLXhzLXVwJywgZmFsc2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0SGlkZGVuICgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaGlkZGVuLXhzLXVwJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRWaXNpYmlsaXR5QXN5bmMgKCkge1xuICAgICAgICB0aGlzLnByaW5jaXBhbC5oYXNBdXRob3JpdHkodGhpcy5hdXRob3JpdHkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZpc2libGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRIaWRkZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9oYXMtYXV0aG9yaXR5LmRpcmVjdGl2ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJy4vYWNjb3VudC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByaW5jaXBhbCB7XG4gICAgcHJpdmF0ZSBfaWRlbnRpdHk6IGFueTtcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uU3RhdGUgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY2NvdW50OiBBY2NvdW50U2VydmljZVxuICAgICkge31cblxuICAgIGF1dGhlbnRpY2F0ZSAoX2lkZW50aXR5KSB7XG4gICAgICAgIHRoaXMuX2lkZW50aXR5ID0gX2lkZW50aXR5O1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBfaWRlbnRpdHkgIT09IG51bGw7XG4gICAgfVxuXG4gICAgaGFzQW55QXV0aG9yaXR5IChhdXRob3JpdGllcykge1xuICAgICAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRlZCB8fCAhdGhpcy5faWRlbnRpdHkgfHwgIXRoaXMuX2lkZW50aXR5LmF1dGhvcml0aWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF1dGhvcml0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faWRlbnRpdHkuYXV0aG9yaXRpZXMuaW5kZXhPZihhdXRob3JpdGllc1tpXSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFzQXV0aG9yaXR5IChhdXRob3JpdHkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmlkZW50aXR5KCkudGhlbihpZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaWQuYXV0aG9yaXRpZXMgJiYgaWQuYXV0aG9yaXRpZXMuaW5kZXhPZihhdXRob3JpdHkpICE9PSAtMTtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGl0eSAoZm9yY2U/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgaWYgKGZvcmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pZGVudGl0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGFuZCBzZWUgaWYgd2UgaGF2ZSByZXRyaWV2ZWQgdGhlIF9pZGVudGl0eSBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSwgcmV1c2UgaXQgYnkgaW1tZWRpYXRlbHkgcmVzb2x2aW5nXG4gICAgICAgIGlmICh0aGlzLl9pZGVudGl0eSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9pZGVudGl0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXRyaWV2ZSB0aGUgX2lkZW50aXR5IGRhdGEgZnJvbSB0aGUgc2VydmVyLCB1cGRhdGUgdGhlIF9pZGVudGl0eSBvYmplY3QsIGFuZCB0aGVuIHJlc29sdmUuXG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnQuZ2V0KCkudG9Qcm9taXNlKCkudGhlbihhY2NvdW50ID0+IHtcbiAgICAgICAgICAgIGlmIChhY2NvdW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faWRlbnRpdHkgPSBhY2NvdW50O1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lkZW50aXR5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0ZS5uZXh0KHRoaXMuX2lkZW50aXR5KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZGVudGl0eTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2lkZW50aXR5ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQodGhpcy5faWRlbnRpdHkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzQXV0aGVudGljYXRlZCAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0ZWQ7XG4gICAgfVxuXG4gICAgaXNJZGVudGl0eVJlc29sdmVkICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkZW50aXR5ICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZ2V0QXV0aGVudGljYXRpb25TdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGdldEltYWdlVXJsKCk6IFN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSWRlbnRpdHlSZXNvbHZlZCAoKSA/IHRoaXMuX2lkZW50aXR5LmltYWdlVXJsIDogbnVsbDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3ByaW5jaXBhbC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhdGVTdG9yYWdlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgJHNlc3Npb25TdG9yYWdlOiBTZXNzaW9uU3RvcmFnZVNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBnZXRQcmV2aW91c1N0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc2Vzc2lvblN0b3JhZ2UucmV0cmlldmUoJ3ByZXZpb3VzU3RhdGUnKTtcbiAgICB9XG5cbiAgICByZXNldFByZXZpb3VzU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLmNsZWFyKCdwcmV2aW91c1N0YXRlJyk7XG4gICAgfVxuXG4gICAgc3RvcmVQcmV2aW91c1N0YXRlKHByZXZpb3VzU3RhdGVOYW1lLCBwcmV2aW91c1N0YXRlUGFyYW1zKSB7XG4gICAgICAgIGxldCBwcmV2aW91c1N0YXRlID0geyAnbmFtZSc6IHByZXZpb3VzU3RhdGVOYW1lLCAncGFyYW1zJzogcHJldmlvdXNTdGF0ZVBhcmFtcyB9O1xuICAgICAgICB0aGlzLiRzZXNzaW9uU3RvcmFnZS5zdG9yZSgncHJldmlvdXNTdGF0ZScsIHByZXZpb3VzU3RhdGUpO1xuICAgIH1cblxuICAgIGdldERlc3RpbmF0aW9uU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgnZGVzdGluYXRpb25TdGF0ZScpO1xuICAgIH1cblxuICAgIHN0b3JlRGVzdGluYXRpb25TdGF0ZShkZXN0aW5hdGlvblN0YXRlLCBkZXN0aW5hdGlvblN0YXRlUGFyYW1zLCBmcm9tU3RhdGUpIHtcbiAgICAgICAgbGV0IGRlc3RpbmF0aW9uSW5mbyA9IHtcbiAgICAgICAgICAgICdkZXN0aW5hdGlvbic6IHtcbiAgICAgICAgICAgICAgICAnbmFtZSc6IGRlc3RpbmF0aW9uU3RhdGUubmFtZSxcbiAgICAgICAgICAgICAgICAnZGF0YSc6IGRlc3RpbmF0aW9uU3RhdGUuZGF0YSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncGFyYW1zJzogZGVzdGluYXRpb25TdGF0ZVBhcmFtcyxcbiAgICAgICAgICAgICdmcm9tJzoge1xuICAgICAgICAgICAgICAgICduYW1lJzogZnJvbVN0YXRlLm5hbWUsXG4gICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLiRzZXNzaW9uU3RvcmFnZS5zdG9yZSgnZGVzdGluYXRpb25TdGF0ZScsIGRlc3RpbmF0aW9uSW5mbyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9zdGF0ZS1zdG9yYWdlLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJvdXRlQWNjZXNzU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IGJvb2xlYW4gfCBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aC5hdXRob3JpemUoZmFsc2UpLnRoZW4oIGNhbkFjdGl2YXRlID0+IGNhbkFjdGl2YXRlKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3VzZXItcm91dGUtYWNjZXNzLXNlcnZpY2UudHMiLCJleHBvcnQgY29uc3QgSVRFTVNfUEVSX1BBR0UgPSAyMDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2NvbnN0YW50cy9wYWdpbmF0aW9uLmNvbnN0YW50cy50cyIsImV4cG9ydCAqIGZyb20gJy4vYWxlcnQvYWxlcnQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYWxlcnQvYWxlcnQtZXJyb3IuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC9jc3JmLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL3N0YXRlLXN0b3JhZ2Uuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgvYWNjb3VudC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC9hdXRoLW9hdXRoMi5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL3ByaW5jaXBhbC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC9oYXMtYW55LWF1dGhvcml0eS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2hhcy1hdXRob3JpdHkuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbG9naW4vbG9naW4uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMvcGFnaW5hdGlvbi5jb25zdGFudHMnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyL2FjY291bnQubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyL3VzZXIubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyL3VzZXIuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXJlZC1saWJzLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXJlZC1jb21tb24ubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcmVkLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgvdXNlci1yb3V0ZS1hY2Nlc3Mtc2VydmljZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9pbmRleC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsLCBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgSmhpTG9naW5Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kYWxTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGlzT3BlbiA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICkge31cblxuICAgIG9wZW4gKCk6IE5nYk1vZGFsUmVmIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICBsZXQgbW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEpoaUxvZ2luTW9kYWxDb21wb25lbnQpO1xuICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYENsb3NlZCB3aXRoOiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEaXNtaXNzZWQgJHtyZWFzb259YCk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1vZGFsUmVmO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG4gICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFjdGl2ZU1vZGFsLmRpc21pc3MoJ2Nsb3NlZCcpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+eDwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPlNpZ24gaW48L2g0PlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgb2Zmc2V0LW1kLTRcXFwiPlxcbiAgICAgICAgICAgIDxoMT5TaWduIGluPC9oMT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImF1dGhlbnRpY2F0aW9uRXJyb3JcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkZhaWxlZCB0byBzaWduIGluITwvc3Ryb25nPiBQbGVhc2UgY2hlY2sgeW91ciBjcmVkZW50aWFscyBhbmQgdHJ5IGFnYWluLlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+XFxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImxvZ2luKClcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInVzZXJuYW1lXFxcIj5Mb2dpbjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwidXNlcm5hbWVcXFwiIGlkPVxcXCJ1c2VybmFtZVxcXCIgcGxhY2Vob2xkZXI9XFxcIllvdXIgdXNlcm5hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwidXNlcm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91ciBwYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwicGFzc3dvcmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1jaGVja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY2hlY2stbGFiZWxcXFwiIGZvcj1cXFwicmVtZW1iZXJNZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNoZWNrLWlucHV0XFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwicmVtZW1iZXJNZVxcXCIgaWQ9XFxcInJlbWVtYmVyTWVcXFwiIFsobmdNb2RlbCldPVxcXCJyZW1lbWJlck1lXFxcIiBjaGVja2VkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlbWVtYmVyIG1lPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5TaWduIGluPC9idXR0b24+XFxuICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgICAgIDxwPjwvcD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcInJlcXVlc3RSZXNldFBhc3N3b3JkKClcXFwiPkRpZCB5b3UgZm9yZ2V0IHlvdXIgcGFzc3dvcmQ/PC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiPlxcbiAgICAgICAgICAgIFxcdDxzcGFuPllvdSBkb24ndCBoYXZlIGFuIGFjY291bnQgeWV0Pzwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcInJlZ2lzdGVyKClcXFwiPlJlZ2lzdGVyIGEgbmV3IGFjY291bnQ8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBSZW5kZXJlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9hdXRoL3N0YXRlLXN0b3JhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWxvZ2luLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaUxvZ2luTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGF1dGhlbnRpY2F0aW9uRXJyb3I6IGJvb2xlYW47XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICByZW1lbWJlck1lOiBib29sZWFuO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgY3JlZGVudGlhbHM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHN0YXRlU3RvcmFnZVNlcnZpY2U6IFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgICAgIHByaXZhdGUgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB7fTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUnKSwgJ2ZvY3VzJywgW10pO1xuICAgIH1cblxuICAgIGNhbmNlbCAoKSB7XG4gICAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogbnVsbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgICAgICAgcmVtZW1iZXJNZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgICB9XG5cbiAgICBsb2dpbiAoKSB7XG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICByZW1lbWJlck1lOiB0aGlzLnJlbWVtYmVyTWVcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnbG9naW4gc3VjY2VzcycpO1xuICAgICAgICAgICAgaWYgKHRoaXMucm91dGVyLnVybCA9PT0gJy9yZWdpc3RlcicgfHwgdGhpcy5yb3V0ZXIudXJsID09PSAnL2FjdGl2YXRlJyB8fFxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLnVybCA9PT0gJy9maW5pc2hSZXNldCcgfHwgdGhpcy5yb3V0ZXIudXJsID09PSAnL3JlcXVlc3RSZXNldCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnYXV0aGVudGljYXRpb25TdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VuZGluZyBBdXRoZW50aWNhdGlvbiBTdWNjZXNzJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIC8vIHByZXZpb3VzU3RhdGUgd2FzIHNldCBpbiB0aGUgYXV0aEV4cGlyZWRJbnRlcmNlcHRvciBiZWZvcmUgYmVpbmcgcmVkaXJlY3RlZCB0byBsb2dpbiBtb2RhbC5cbiAgICAgICAgICAgIC8vIC8vIHNpbmNlIGxvZ2luIGlzIHN1Y2Nlc2Z1bCwgZ28gdG8gc3RvcmVkIHByZXZpb3VzU3RhdGUgYW5kIGNsZWFyIHByZXZpb3VzU3RhdGVcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1N0YXRlID0gdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLmdldFByZXZpb3VzU3RhdGUoKTtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLnJlc2V0UHJldmlvdXNTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwcmV2aW91c1N0YXRlLm5hbWVdLCB7IHF1ZXJ5UGFyYW1zOiAgcHJldmlvdXNTdGF0ZS5wYXJhbXMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCd0byBzdGF0ZSByZWdpc3RlcicpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZWdpc3RlciddKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0UmVzZXRQYXNzd29yZCAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygndG8gc3RhdGUgcmVxdWVzdFJlc2V0Jyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Jlc2V0JywgJ3JlcXVlc3QnXSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuLi9hdXRoL3ByaW5jaXBhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2ZXJQcm92aWRlciB9IGZyb20gJy4uL2F1dGgvYXV0aC1vYXV0aDIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2ZXJQcm92aWRlcjogQXV0aFNlcnZlclByb3ZpZGVyXG4gICAgKSB7fVxuXG4gICAgbG9naW4gKGNyZWRlbnRpYWxzLCBjYWxsYmFjaz8pIHtcbiAgICAgICAgbGV0IGNiID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmVyUHJvdmlkZXIubG9naW4oY3JlZGVudGlhbHMpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSh0cnVlKS50aGVuKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYigpO1xuICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvZ291dCAoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZlclByb3ZpZGVyLmxvZ291dCgpLnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnByaW5jaXBhbC5hdXRoZW50aWNhdGUobnVsbCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uc2VydmljZS50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBTYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHtcbiAgICBDb25jb3Vyc2VQaXBlbGluZXNTaGFyZWRMaWJzTW9kdWxlLFxuICAgIEpoaUFsZXJ0Q29tcG9uZW50LFxuICAgIEpoaUFsZXJ0RXJyb3JDb21wb25lbnRcbn0gZnJvbSAnLi8nO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhbGVydFNlcnZpY2VQcm92aWRlcihzYW5pdGl6ZXI6IFNhbml0aXplcikge1xuICAgIC8vIHNldCBiZWxvdyB0byB0cnVlIHRvIG1ha2UgYWxlcnRzIGxvb2sgbGlrZSB0b2FzdFxuICAgIGxldCBpc1RvYXN0ID0gZmFsc2U7XG4gICAgcmV0dXJuIG5ldyBBbGVydFNlcnZpY2Uoc2FuaXRpemVyLCBpc1RvYXN0KTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbmNvdXJzZVBpcGVsaW5lc1NoYXJlZExpYnNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBKaGlBbGVydENvbXBvbmVudCxcbiAgICAgICAgSmhpQWxlcnRFcnJvckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEFsZXJ0U2VydmljZSxcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGFsZXJ0U2VydmljZVByb3ZpZGVyLFxuICAgICAgICAgICAgZGVwczogW1Nhbml0aXplcl1cbiAgICAgICAgfSxcbiAgICAgICAgVGl0bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ29uY291cnNlUGlwZWxpbmVzU2hhcmVkTGlic01vZHVsZSxcbiAgICAgICAgSmhpQWxlcnRDb21wb25lbnQsXG4gICAgICAgIEpoaUFsZXJ0RXJyb3JDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbmNvdXJzZVBpcGVsaW5lc1NoYXJlZENvbW1vbk1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLWNvbW1vbi5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgTmdKaGlwc3Rlck1vZHVsZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcbmltcG9ydCB7IEluZmluaXRlU2Nyb2xsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5nYk1vZHVsZS5mb3JSb290KCksXG4gICAgICAgIE5nSmhpcHN0ZXJNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgIH0pLFxuICAgICAgICBJbmZpbml0ZVNjcm9sbE1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBOZ2JNb2R1bGUsXG4gICAgICAgIE5nSmhpcHN0ZXJNb2R1bGUsXG4gICAgICAgIEluZmluaXRlU2Nyb2xsTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb25jb3Vyc2VQaXBlbGluZXNTaGFyZWRMaWJzTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQtbGlicy5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItY29va2llL3NlcnZpY2VzL2Nvb2tpZXMuc2VydmljZSc7XG5pbXBvcnQge1xuICAgIENvbmNvdXJzZVBpcGVsaW5lc1NoYXJlZExpYnNNb2R1bGUsXG4gICAgQ29uY291cnNlUGlwZWxpbmVzU2hhcmVkQ29tbW9uTW9kdWxlLFxuICAgIENTUkZTZXJ2aWNlLFxuICAgIEF1dGhTZXJ2aWNlLFxuICAgIEF1dGhTZXJ2ZXJQcm92aWRlcixcbiAgICBBY2NvdW50U2VydmljZSxcbiAgICBVc2VyU2VydmljZSxcbiAgICBTdGF0ZVN0b3JhZ2VTZXJ2aWNlLFxuICAgIExvZ2luU2VydmljZSxcbiAgICBMb2dpbk1vZGFsU2VydmljZSxcbiAgICBQcmluY2lwYWwsXG4gICAgSGFzQXV0aG9yaXR5RGlyZWN0aXZlLFxuICAgIEhhc0FueUF1dGhvcml0eURpcmVjdGl2ZSxcbiAgICBKaGlMb2dpbk1vZGFsQ29tcG9uZW50XG59IGZyb20gJy4vJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbmNvdXJzZVBpcGVsaW5lc1NoYXJlZExpYnNNb2R1bGUsXG4gICAgICAgIENvbmNvdXJzZVBpcGVsaW5lc1NoYXJlZENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEpoaUxvZ2luTW9kYWxDb21wb25lbnQsXG4gICAgICAgIEhhc0F1dGhvcml0eURpcmVjdGl2ZSxcbiAgICAgICAgSGFzQW55QXV0aG9yaXR5RGlyZWN0aXZlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29va2llU2VydmljZSxcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgICBMb2dpbk1vZGFsU2VydmljZSxcbiAgICAgICAgQWNjb3VudFNlcnZpY2UsXG4gICAgICAgIFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIFByaW5jaXBhbCxcbiAgICAgICAgQ1NSRlNlcnZpY2UsXG4gICAgICAgIEF1dGhTZXJ2ZXJQcm92aWRlcixcbiAgICAgICAgQXV0aFNlcnZpY2UsXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxuICAgICAgICBEYXRlUGlwZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbSmhpTG9naW5Nb2RhbENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBDb25jb3Vyc2VQaXBlbGluZXNTaGFyZWRDb21tb25Nb2R1bGUsXG4gICAgICAgIEpoaUxvZ2luTW9kYWxDb21wb25lbnQsXG4gICAgICAgIEhhc0F1dGhvcml0eURpcmVjdGl2ZSxcbiAgICAgICAgSGFzQW55QXV0aG9yaXR5RGlyZWN0aXZlLFxuICAgICAgICBEYXRlUGlwZVxuICAgIF0sXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG5cbn0pXG5leHBvcnQgY2xhc3MgQ29uY291cnNlUGlwZWxpbmVzU2hhcmVkTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwiZXhwb3J0IGNsYXNzIEFjY291bnQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgYWN0aXZhdGVkOiBib29sZWFuLFxuICAgICAgICBwdWJsaWMgYXV0aG9yaXRpZXM6IHN0cmluZ1tdLFxuICAgICAgICBwdWJsaWMgZW1haWw6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGZpcnN0TmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbGFuZ0tleTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbGFzdE5hbWU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGxvZ2luOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nXG4gICAgKSB7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvYWNjb3VudC5tb2RlbC50cyIsImV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgICBwdWJsaWMgaWQ/OiBhbnk7XG4gICAgcHVibGljIGxvZ2luPzogc3RyaW5nO1xuICAgIHB1YmxpYyBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gICAgcHVibGljIGxhc3ROYW1lPzogc3RyaW5nO1xuICAgIHB1YmxpYyBlbWFpbD86IHN0cmluZztcbiAgICBwdWJsaWMgYWN0aXZhdGVkPzogQm9vbGVhbjtcbiAgICBwdWJsaWMgbGFuZ0tleT86IHN0cmluZztcbiAgICBwdWJsaWMgYXV0aG9yaXRpZXM/OiBhbnlbXTtcbiAgICBwdWJsaWMgY3JlYXRlZEJ5Pzogc3RyaW5nO1xuICAgIHB1YmxpYyBjcmVhdGVkRGF0ZT86IERhdGU7XG4gICAgcHVibGljIGxhc3RNb2RpZmllZEJ5Pzogc3RyaW5nO1xuICAgIHB1YmxpYyBsYXN0TW9kaWZpZWREYXRlPzogRGF0ZTtcbiAgICBwdWJsaWMgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGlkPzogYW55LFxuICAgICAgICBsb2dpbj86IHN0cmluZyxcbiAgICAgICAgZmlyc3ROYW1lPzogc3RyaW5nLFxuICAgICAgICBsYXN0TmFtZT86IHN0cmluZyxcbiAgICAgICAgZW1haWw/OiBzdHJpbmcsXG4gICAgICAgIGFjdGl2YXRlZD86IEJvb2xlYW4sXG4gICAgICAgIGxhbmdLZXk/OiBzdHJpbmcsXG4gICAgICAgIGF1dGhvcml0aWVzPzogYW55W10sXG4gICAgICAgIGNyZWF0ZWRCeT86IHN0cmluZyxcbiAgICAgICAgY3JlYXRlZERhdGU/OiBEYXRlLFxuICAgICAgICBsYXN0TW9kaWZpZWRCeT86IHN0cmluZyxcbiAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZT86IERhdGUsXG4gICAgICAgIHBhc3N3b3JkPzogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZCA/IGlkIDogbnVsbDtcbiAgICAgICAgdGhpcy5sb2dpbiA9IGxvZ2luID8gbG9naW4gOiBudWxsO1xuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZSA/IGZpcnN0TmFtZSA6IG51bGw7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZSA/IGxhc3ROYW1lIDogbnVsbDtcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsID8gZW1haWwgOiBudWxsO1xuICAgICAgICB0aGlzLmFjdGl2YXRlZCA9IGFjdGl2YXRlZCA/IGFjdGl2YXRlZCA6IGZhbHNlO1xuICAgICAgICB0aGlzLmxhbmdLZXkgPSBsYW5nS2V5ID8gbGFuZ0tleSA6IG51bGw7XG4gICAgICAgIHRoaXMuYXV0aG9yaXRpZXMgPSBhdXRob3JpdGllcyA/IGF1dGhvcml0aWVzIDogbnVsbDtcbiAgICAgICAgdGhpcy5jcmVhdGVkQnkgPSBjcmVhdGVkQnkgPyBjcmVhdGVkQnkgOiBudWxsO1xuICAgICAgICB0aGlzLmNyZWF0ZWREYXRlID0gY3JlYXRlZERhdGUgPyBjcmVhdGVkRGF0ZSA6IG51bGw7XG4gICAgICAgIHRoaXMubGFzdE1vZGlmaWVkQnkgPSBsYXN0TW9kaWZpZWRCeSA/IGxhc3RNb2RpZmllZEJ5IDogbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0TW9kaWZpZWREYXRlID0gbGFzdE1vZGlmaWVkRGF0ZSA/IGxhc3RNb2RpZmllZERhdGUgOiBudWxsO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQgPyBwYXNzd29yZCA6IG51bGw7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci91c2VyLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJlc291cmNlVXJsID0gJ2FwaS91c2Vycyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgY3JlYXRlKHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnJlc291cmNlVXJsLCB1c2VyKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodXNlcjogVXNlcik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5yZXNvdXJjZVVybCwgdXNlcik7XG4gICAgfVxuXG4gICAgZmluZChsb2dpbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMucmVzb3VyY2VVcmx9LyR7bG9naW59YCkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBxdWVyeShyZXE/OiBhbnkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBwYXJhbXM6IFVSTFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgaWYgKHJlcSkge1xuICAgICAgICAgICAgcGFyYW1zLnNldCgncGFnZScsIHJlcS5wYWdlKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3NpemUnLCByZXEuc2l6ZSk7XG4gICAgICAgICAgICBpZiAocmVxLnNvcnQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMucGFyYW1zTWFwLnNldCgnc29ydCcsIHJlcS5zb3J0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ2ZpbHRlcicsIHJlcS5maWx0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzZWFyY2g6IHBhcmFtc1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMucmVzb3VyY2VVcmwsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGRlbGV0ZShsb2dpbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLnJlc291cmNlVXJsfS8ke2xvZ2lufWApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2E4NTRlNmQwNzg1YmE0YjlkNzE1MDQ5YzBiZGJjYjMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3Rlci5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIucG5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFjZDNhMWQ3ODJlODViYTM3Njc3YzFhMjA5OWJjMDAyLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTMwZGViMjZiNGViMTUyMTQzMzAyMWUzMjZjYmNjMmMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvbG9nby1qaGlwc3Rlci5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2xvZ28tamhpcHN0ZXIucG5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21tb24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNDMzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDI0OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvUnguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMjYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg0MzYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1jb29raWUvY29yZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg0MzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1pbmZpbml0ZS1zY3JvbGwvYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDQ0MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vc3JjL21haW4vd2ViYXBwL2FwcC92ZW5kb3IudHMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNTU4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItY29va2llL3NlcnZpY2VzL2Nvb2tpZXMuc2VydmljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSg0MzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZy1qaGlwc3Rlci9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL1N1YmplY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTAzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvaHR0cC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDQzNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMSkpKDQzNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoNDQwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXdlYnN0b3JhZ2UvZGlzdC9hcHAuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9PYnNlcnZhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxKSkoMTA0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=