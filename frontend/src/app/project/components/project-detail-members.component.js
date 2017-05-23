"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var vc_base_service_1 = require("../../services/vc-base.service");
var ProjectDetailMembersComponent = (function (_super) {
    __extends(ProjectDetailMembersComponent, _super);
    function ProjectDetailMembersComponent(ProjectMangementDataService, ParamsService) {
        var _this = _super.call(this) || this;
        _this.ProjectMangementDataService = ProjectMangementDataService;
        _this.ParamsService = ParamsService;
        _this.showModal = false;
        return _this;
    }
    ProjectDetailMembersComponent.prototype.ngOnInit = function () {
    };
    ProjectDetailMembersComponent.prototype.refresh = function (data) {
        this.members.data = data;
    };
    ProjectDetailMembersComponent.prototype.deleteUser = function () {
        var _this = this;
        this.ProjectMangementDataService.deleteUser(this.selected, this.ParamsService.projectId)
            .subscribe(function (data) {
            if (data) {
                _this.members.data = data;
            }
        });
    };
    return ProjectDetailMembersComponent;
}(vc_base_service_1.VcListControl));
__decorate([
    core_1.Input(),
    __metadata("design:type", vc_data_service_1.VcDataService)
], ProjectDetailMembersComponent.prototype, "members", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", vc_data_service_1.VcDataService)
], ProjectDetailMembersComponent.prototype, "roles", void 0);
ProjectDetailMembersComponent = __decorate([
    core_1.Component({
        selector: 'vc-project-detail-members',
        templateUrl: './project-detail-members.html',
        styleUrls: ['./project.css']
    }),
    __metadata("design:paramtypes", [project_data_service_1.ProjectMangementDataService, group_data_service_1.ParamsService])
], ProjectDetailMembersComponent);
exports.ProjectDetailMembersComponent = ProjectDetailMembersComponent;
//# sourceMappingURL=project-detail-members.component.js.map