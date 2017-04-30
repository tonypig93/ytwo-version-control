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
var LoginComponent = (function () {
    function LoginComponent(profilesService) {
        this.profilesService = profilesService;
        this.userInfo = {
            userName: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        this.profilesService.login();
    };
    return LoginComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "userInfo", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'vc-login',
        templateUrl: './login.html',
        styleUrls: ['./login.css']
    }),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map