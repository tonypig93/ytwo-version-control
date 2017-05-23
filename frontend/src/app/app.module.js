"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var widget_module_1 = require("./widgets/widget.module");
var profiles_module_1 = require("./profiles/profiles.module");
var vc_http_service_1 = require("./services/vc-http.service");
var http_1 = require("@angular/http");
var vc_platform_service_1 = require("./services/vc-platform.service");
var vc_global_component_service_1 = require("./services/vc-global-component.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, profiles_module_1.ProfilesModule, http_1.HttpModule, widget_module_1.WidgetModule],
        declarations: [app_component_1.AppComponent],
        providers: [vc_http_service_1.VcHttpService, vc_platform_service_1.VcPlatformService, vc_global_component_service_1.VcGlobalComponentService, vc_platform_service_1.VcAuthService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map