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
var ngx_bootstrap_1 = require("ngx-bootstrap");
var project_data_service_1 = require("../services/project-data.service");
var group_data_service_1 = require("../../group/services/group-data.service");
var vc_data_service_1 = require("../../services/vc-data.service");
var ProjectAddRoleModalComponent = (function () {
    function ProjectAddRoleModalComponent(ProjectMangementDataService, ParamsService) {
        this.ProjectMangementDataService = ProjectMangementDataService;
        this.ParamsService = ParamsService;
        this.isModalShown = false;
        this.modalChange = new core_1.EventEmitter();
        this.refreshList = new core_1.EventEmitter();
        this.roleInfo = {
            roleName: '',
            powerList: []
        };
    }
    ProjectAddRoleModalComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    ProjectAddRoleModalComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    ProjectAddRoleModalComponent.prototype.onHidden = function () {
        this.isModalShown = false;
        this.modalChange.emit();
    };
    ProjectAddRoleModalComponent.prototype.onShown = function () {
        $('.ui.checkbox')['checkbox']();
    };
    ProjectAddRoleModalComponent.prototype.ngOnInit = function () {
        this.roleInfo.powerList = this.powerList.data;
        for (var i = 0, item = void 0; (item = this.roleInfo.powerList[i]); i++) {
            item.checked = false;
        }
    };
    ProjectAddRoleModalComponent.prototype.doSubmit = function () {
        var _this = this;
        if (this.roleInfo.roleName !== '') {
            var sum = 0;
            for (var i = 0, item = void 0; (item = this.roleInfo.powerList[i]); i++) {
                if (item.checked) {
                    sum += item.POWER_VALUE;
                }
            }
            var payload = {
                roleName: this.roleInfo.roleName,
                value: sum,
                projectId: this.ParamsService.projectId
            };
            this.ProjectMangementDataService.addRole(payload)
                .subscribe(function (data) {
                _this.refreshList.emit(data);
                _this.roleInfo.roleName = '';
                for (var i = 0, item = void 0; (item = _this.roleInfo.powerList[i]); i++) {
                    item.checked = false;
                }
            });
        }
    };
    return ProjectAddRoleModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProjectAddRoleModalComponent.prototype, "isModalShown", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", vc_data_service_1.VcDataService)
], ProjectAddRoleModalComponent.prototype, "powerList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProjectAddRoleModalComponent.prototype, "modalChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProjectAddRoleModalComponent.prototype, "refreshList", void 0);
__decorate([
    core_1.ViewChild('autoShownModal'),
    __metadata("design:type", ngx_bootstrap_1.ModalDirective)
], ProjectAddRoleModalComponent.prototype, "autoShownModal", void 0);
ProjectAddRoleModalComponent = __decorate([
    core_1.Component({
        selector: 'project-add-role-modal',
        templateUrl: './project-add-role-modal.html'
    }),
    __metadata("design:paramtypes", [project_data_service_1.ProjectMangementDataService,
        group_data_service_1.ParamsService])
], ProjectAddRoleModalComponent);
exports.ProjectAddRoleModalComponent = ProjectAddRoleModalComponent;
//# sourceMappingURL=project-add-role.component.js.map