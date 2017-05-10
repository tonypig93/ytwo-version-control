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
var project_main_component_1 = require("./components/project.main.component");
var project_data_service_1 = require("./services/project-data.service");
var project_create_component_1 = require("./components/project-create.component");
var project_detail_component_1 = require("./components/project-detail.component");
var routes = [
    {
        path: '', component: project_main_component_1.ProjectMainComponent, resolve: {
            projectList: project_data_service_1.ProjectDataService
        },
        children: [{
                path: 'create', component: project_create_component_1.ProjectCreateComponent
            }, {
                path: ':id', component: project_detail_component_1.ProjectDetailComponent, resolve: {
                    management: project_data_service_1.ProjectMangementDataService
                }
            }]
    }
];
var ProjectRoutingModule = (function () {
    function ProjectRoutingModule(ActivatedRoute) {
        this.ActivatedRoute = ActivatedRoute;
        this.ActivatedRoute.params.subscribe(function (data) {
            // console.log(data)
        });
    }
    return ProjectRoutingModule;
}());
ProjectRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ProjectRoutingModule);
exports.ProjectRoutingModule = ProjectRoutingModule;
//# sourceMappingURL=project.routing.module.js.map