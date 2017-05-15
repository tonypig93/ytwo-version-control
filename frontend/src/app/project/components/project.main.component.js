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
var project_data_service_1 = require("../services/project-data.service");
var router_1 = require("@angular/router");
var ProjectMainComponent = (function () {
    function ProjectMainComponent(GroupUserDataService, ParamsService, ProjectUserDataService, ActivatedRoute) {
        this.GroupUserDataService = GroupUserDataService;
        this.ParamsService = ParamsService;
        this.ProjectUserDataService = ProjectUserDataService;
        this.ActivatedRoute = ActivatedRoute;
    }
    ProjectMainComponent.prototype.ngOnInit = function () {
    };
    return ProjectMainComponent;
}());
ProjectMainComponent = __decorate([
    core_1.Component({
        selector: 'vc-project',
        templateUrl: './project.main.html',
        styleUrls: ['./project.css']
    }),
    __metadata("design:paramtypes", [group_data_service_1.GroupUserDataService,
        group_data_service_1.ParamsService,
        project_data_service_1.ProjectUserDataService,
        router_1.ActivatedRoute])
], ProjectMainComponent);
exports.ProjectMainComponent = ProjectMainComponent;
//# sourceMappingURL=project.main.component.js.map