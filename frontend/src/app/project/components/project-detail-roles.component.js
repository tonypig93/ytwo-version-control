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
var ProjectDetailRolesComponent = (function (_super) {
    __extends(ProjectDetailRolesComponent, _super);
    function ProjectDetailRolesComponent(ProjectMangementDataService, ParamsService) {
        var _this = _super.call(this) || this;
        _this.ProjectMangementDataService = ProjectMangementDataService;
        _this.ParamsService = ParamsService;
        _this.showModal = false;
        return _this;
    }
    ProjectDetailRolesComponent.prototype.ngOnInit = function () {
        for (var i = 0, item = void 0; (item = this.roles.data[i]); i++) {
            item.powerList = this.getPowerList(item.POWER);
        }
    };
    ProjectDetailRolesComponent.prototype.ngAfterViewChecked = function () {
        $('.ui.checkbox')['checkbox']();
    };
    ProjectDetailRolesComponent.prototype.getPowerList = function (value) {
        var res = [];
        for (var i = 0, item = void 0; (item = this.powers.data[i]); i++) {
            var tmp = {};
            $.extend(tmp, item);
            tmp['checked'] = (item.POWER_VALUE === (value & item.POWER_VALUE));
            res.push(tmp);
        }
        return res;
    };
    ProjectDetailRolesComponent.prototype.updateRole = function (role) {
        var sum = 0;
        for (var i = 0, item = void 0; (item = role.powerList[i]); i++) {
            if (item.checked) {
                sum += item.POWER_VALUE;
            }
        }
        this.ProjectMangementDataService.updateRole(role.ID, sum)
            .subscribe(function (data) {
        });
    };
    ProjectDetailRolesComponent.prototype.deleteRole = function (roleId) {
        var _this = this;
        this.ProjectMangementDataService.deleteRole(roleId, this.ParamsService.projectId)
            .subscribe(function (data) {
            if (data) {
                _this.roles.data = data;
                _this.ngOnInit();
            }
        });
    };
    ProjectDetailRolesComponent.prototype.refresh = function (data) {
        if (data) {
            this.roles.data = data;
            for (var i = 0, item = void 0; (item = this.roles.data[i]); i++) {
                item.powerList = this.getPowerList(item.POWER);
            }
        }
    };
    return ProjectDetailRolesComponent;
}(vc_base_service_1.VcListControl));
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