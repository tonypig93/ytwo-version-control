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
var group_data_service_1 = require("../../group/services/group-data.service");
var vc_data_service_1 = require("../../services/vc-data.service");
var project_data_service_1 = require("../services/project-data.service");
var ProjectDetailRolesComponent = (function () {
    function ProjectDetailRolesComponent(ProjectMangementDataService, ParamsService) {
        this.ProjectMangementDataService = ProjectMangementDataService;
        this.ParamsService = ParamsService;
    }
    ProjectDetailRolesComponent.prototype.ngOnInit = function () {
    };
    return ProjectDetailRolesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", vc_data_service_1.VcDataService)
], ProjectDetailRolesComponent.prototype, "roles", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", vc_data_service_1.VcDataService)
], ProjectDetailRolesComponent.prototype, "powers", void 0);
ProjectDetailRolesComponent = __decorate([
    core_1.Component({
        selector: 'vc-project-detail-roles',
        templateUrl: './project-detail-roles.html',
        styleUrls: ['./project.css']
    }),
    __metadata("design:paramtypes", [project_data_service_1.ProjectMangementDataService, group_data_service_1.ParamsService])
], ProjectDetailRolesComponent);
exports.ProjectDetailRolesComponent = ProjectDetailRolesComponent;
//# sourceMappingURL=project-detail-roles.component.js.map