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
var profiles_service_1 = require("../../profiles/services/profiles.service");
var router_1 = require("@angular/router");
var NavBarComponent = (function () {
    function NavBarComponent(ProfilesService, router) {
        var _this = this;
        this.ProfilesService = ProfilesService;
        this.router = router;
        this.userInfo = this.ProfilesService.getUserInfo();
        this.actions = [
            {
                name: 'Settings',
                fn: function () {
                    console.log('settings');
                }
            },
            {
                name: 'Logout',
                fn: function () {
                    _this.ProfilesService.clearUserInfo();
                    _this.router.navigate(['/login']);
                }
            }
        ];
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'nav-bar',
        templateUrl: './nav-bar.html',
        styleUrls: ['./nav-bar.css']
    }),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService, router_1.Router])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map