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
var profiles_service_1 = require("../services/profiles.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(profilesService, router) {
        this.profilesService = profilesService;
        this.router = router;
        this.userInfo = {
            userName: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var self = this;
        this.profilesService.login(this.userInfo)
            .subscribe(function (data) {
            if (!data.error) {
                _this.profilesService.setUserInfo(data.data);
                _this.router.navigate(['/group']);
            }
            else {
                _this.userInfo.password = '';
            }
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "userInfo", void 0);
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: './login.html',
        styleUrls: ['./login.css']
    }),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map