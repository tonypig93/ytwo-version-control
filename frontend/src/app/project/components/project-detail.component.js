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
var vc_data_service_1 = require("../../services/vc-data.service");
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(ParamsService, ProjectUserDataService, ActivatedRoute, ProjectMangementDataService) {
        this.ParamsService = ParamsService;
        this.ProjectUserDataService = ProjectUserDataService;
        this.ActivatedRoute = ActivatedRoute;
        this.ProjectMangementDataService = ProjectMangementDataService;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var data = this.ProjectMangementDataService.management;
        this.management = {
            project: data['project'],
            members: new vc_data_service_1.VcDataService(data['members']),
            tasks: new vc_data_service_1.VcDataService(data['tasks']),
            versions: new vc_data_service_1.VcDataService(data['versions']),
            roles: new vc_data_service_1.VcDataService(data['roles']),
            powers: new vc_data_service_1.VcDataService(data['powers'])
        };
        // this.ProjectUserDataService.userList.subscribe(_data => {
        //       this.userList = _data;
        // });
    };
    ProjectDetailComponent.prototype.ngAfterViewInit = function () {
        var icons = ['fa-book', 'fa-folder-open', 'fa-tasks', 'fa-address-book', 'fa-suitcase'];
        $('#project ul.nav:first > li.nav-item').each(function (index) {
            $(this).find('a.nav-link > span').prepend('<i class="fa ' + icons[index] + ' mr5"></i>');
        });
    };
    return ProjectDetailComponent;
}());
ProjectDetailComponent = __decorate([
    core_1.Component({
        selector: 'vc-project-detail',
        templateUrl: './project-detail.html',
        styleUrls: ['./project.css']
    }),
    __metadata("design:paramtypes", [group_data_service_1.ParamsService,
        project_data_service_1.ProjectUserDataService,
        router_1.ActivatedRoute,
        project_data_service_1.ProjectMangementDataService])
], ProjectDetailComponent);
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map