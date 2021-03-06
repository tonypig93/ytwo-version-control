"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login.component");
var about_component_1 = require("./components/about.component");
var profiles_guard_1 = require("./services/profiles.guard");
var routes = [
    { path: 'login', component: login_component_1.LoginComponent, canActivate: [profiles_guard_1.CheckLoginGuard] },
    { path: 'about', component: about_component_1.AboutComponent }
];
var ProfilesRoutingModule = (function () {
    function ProfilesRoutingModule() {
    }
    return ProfilesRoutingModule;
}());
ProfilesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ProfilesRoutingModule);
exports.ProfilesRoutingModule = ProfilesRoutingModule;
//# sourceMappingURL=profiles-routing.module.js.map