"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var project_main_component_1 = require("./components/project.main.component");
var project_data_service_1 = require("./services/project-data.service");
var project_create_component_1 = require("./components/project-create.component");
var project_detail_component_1 = require("./components/project-detail.component");
var group_data_service_1 = require("../group/services/group-data.service");
var vc_platform_service_1 = require("../services/vc-platform.service");
var routes = [
    {
        path: '',
        component: project_main_component_1.ProjectMainComponent,
        resolve: {
            projectList: project_data_service_1.ProjectDataService,
            userList: group_data_service_1.GroupUserDataService
        },
        children: [{
                path: 'create',
                component: project_create_component_1.ProjectCreateComponent
            }, {
                path: ':id',
                component: project_detail_component_1.ProjectDetailComponent,
                canActivate: [vc_platform_service_1.VcAuthService],
                resolve: {
                    management: project_data_service_1.ProjectMangementDataService
                }
            }]
    }
];
var ProjectRoutingModule = (function () {
    function ProjectRoutingModule() {
    }
    return ProjectRoutingModule;
}());
ProjectRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ProjectRoutingModule);
exports.ProjectRoutingModule = ProjectRoutingModule;
//# sourceMappingURL=project.routing.module.js.map