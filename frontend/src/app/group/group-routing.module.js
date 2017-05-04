"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var group_main_component_1 = require("./components/group.main.component");
var group_data_service_1 = require("./services/group-data.service");
var group_management_component_1 = require("./components/group-management.component");
var routes = [
    {
        path: '', component: group_main_component_1.GroupMainComponent, resolve: {
            groupList: group_data_service_1.GroupDataService
        },
        children: [
            { path: ':id', component: group_management_component_1.GroupManagementComponent, resolve: {
                    management: group_data_service_1.GroupMangementDataService
                } }
        ]
    }
];
var GroupRoutingModule = (function () {
    function GroupRoutingModule() {
    }
    return GroupRoutingModule;
}());
GroupRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], GroupRoutingModule);
exports.GroupRoutingModule = GroupRoutingModule;
//# sourceMappingURL=group-routing.module.js.map