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
var vc_global_component_service_1 = require("./services/vc-global-component.service");
var AppComponent = (function () {
    function AppComponent(router, ProfilesService, http, VcGlobalComponentService) {
        this.router = router;
        this.ProfilesService = ProfilesService;
        this.http = http;
        this.VcGlobalComponentService = VcGlobalComponentService;
        var userInfo = this.ProfilesService.getUserInfo();
        if (userInfo) {
            this.http.setAuthHeader(userInfo.$hash);
        }
    }
    AppComponent.prototype.isLoginPage = function () {
        return (this.router.url !== '/login') && (this.router.url !== '/');
    };
    AppComponent.prototype.ngOnInit = function () {
        this.thisYear = (new Date()).getFullYear();
    };
    AppComponent.prototype.showContact = function () {
        var modal = this.VcGlobalComponentService.infoModal;
        modal.modalTitle = 'Contact';
        modal.modalBody = 'Email: tony98370@qq.com';
        modal.showModal();
    };
    AppComponent.prototype.showAbout = function () {
        var modal = this.VcGlobalComponentService.infoModal;
        modal.modalTitle = 'About';
        modal.modalBody = 'Version Control is a rough personal website, which is still in developing (maybe 40% completed I guess). It provides a simple control system for software versions, and more features will be added into VC to make it powerful as long as I got continuous ideas. If you want to join me and commit your codes, feel free to contact me.';
        modal.showModal();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'vc-app',
        templateUrl: './app.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        profiles_service_1.ProfilesService,
        vc_http_service_1.VcHttpService,
        vc_global_component_service_1.VcGlobalComponentService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map