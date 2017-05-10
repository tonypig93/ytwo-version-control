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
var profiles_service_1 = require("./profiles.service");
var CheckLoginGuard = (function () {
    function CheckLoginGuard(ProfilesService, router) {
        this.ProfilesService = ProfilesService;
        this.router = router;
    }
    CheckLoginGuard.prototype.canActivate = function () {
        var userInfo = this.ProfilesService.getUserInfo();
        if (!userInfo || userInfo.expireTime < (new Date()).getTime()) {
            return true;
        }
        else {
            this.router.navigate(['/group']);
            return false;
        }
    };
    return CheckLoginGuard;
}());
CheckLoginGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService, router_1.Router])
], CheckLoginGuard);
exports.CheckLoginGuard = CheckLoginGuard;
//# sourceMappingURL=profiles.guard.js.map