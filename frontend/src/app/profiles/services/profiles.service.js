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
var vc_http_service_1 = require("../../services/vc-http.service");
var ProfilesService = (function () {
    function ProfilesService(http) {
        this.http = http;
        this.userInfo = null;
    }
    ProfilesService.prototype.login = function (userInfo) {
        var params = userInfo;
        return this.http.post('http://localhost:8000/login', params);
        // .subscribe(function (data) {
        //     if (data) {
        //         console.log('login successful');
        //         userInfo = data;
        //         return true;
        //     } else {
        //         return false;
        //     }
        // })
    };
    ProfilesService.prototype.setUserInfo = function (userInfo) {
        this.userInfo = userInfo;
    };
    ProfilesService.prototype.getUserInfo = function () {
        return this.userInfo;
    };
    return ProfilesService;
}());
ProfilesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [vc_http_service_1.VcHttpService])
], ProfilesService);
exports.ProfilesService = ProfilesService;
//# sourceMappingURL=profiles.service.js.map