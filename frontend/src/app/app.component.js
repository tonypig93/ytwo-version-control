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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var vc_http_service_1 = require("./services/vc-http.service");
var profiles_service_1 = require("./profiles/services/profiles.service");
var AppComponent = (function () {
    function AppComponent(router, ProfilesService, http) {
        this.router = router;
        this.ProfilesService = ProfilesService;
        this.http = http;
        var userInfo = this.ProfilesService.getUserInfo();
        if (userInfo) {
            this.http.setAuthHeader(userInfo.$hash);
        }
    }
    AppComponent.prototype.isLoginPage = function () {
        return (this.router.url !== '/login') && (this.router.url !== '/');
    };
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'vc-app',
        templateUrl: './app.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, profiles_service_1.ProfilesService, vc_http_service_1.VcHttpService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map