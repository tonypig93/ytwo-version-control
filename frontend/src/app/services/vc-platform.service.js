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
var vc_http_service_1 = require("./vc-http.service");
var profiles_service_1 = require("../profiles/services/profiles.service");
var router_1 = require("@angular/router");
var VcPlatformService = (function () {
    function VcPlatformService(ProfilesService, http, router) {
        this.ProfilesService = ProfilesService;
        this.http = http;
        this.router = router;
    }
    VcPlatformService.prototype.canLoad = function () {
        var _this = this;
        var userInfo = this.ProfilesService.getUserInfo();
        return this.http.post('http://localhost:8000/checkIdentity', userInfo)
            .map(function (res) {
            if (res) {
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    return VcPlatformService;
}());
VcPlatformService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService, vc_http_service_1.VcHttpService, router_1.Router])
], VcPlatformService);
exports.VcPlatformService = VcPlatformService;
//# sourceMappingURL=vc-platform.service.js.map