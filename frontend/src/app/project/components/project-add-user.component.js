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
var forms_1 = require("@angular/forms");
var project_data_service_1 = require("../services/project-data.service");
var group_data_service_1 = require("../../group/services/group-data.service");
var vc_data_service_1 = require("../../services/vc-data.service");
var ProjectAddUserModalComponent = (function () {
    function ProjectAddUserModalComponent(ProjectUserDataService, fb, ProjectMangementDataService, ParamsService) {
        this.ProjectUserDataService = ProjectUserDataService;
        this.fb = fb;
        this.ProjectMangementDataService = ProjectMangementDataService;
        this.ParamsService = ParamsService;
        this.isModalShown = false;
        this.modalTitle = 'Add a user to this project';
        this.modalChange = new core_1.EventEmitter();
        this.refreshList = new core_1.EventEmitter();
        this.userList = [];
        this.roleList = [];
        this.formErrors = {
            'role': '',
            'user': ''
        };
        this.validationMessages = {
            'role': {
                'required': 'A Role name is required.',
            },
            'user': {
                'required': 'A user is required.'
            }
        };
    }
    ProjectAddUserModalComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    ProjectAddUserModalComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    ProjectAddUserModalComponent.prototype.onHidden = function () {
        this.isModalShown = false;
        this.modalChange.emit();
    };
    ProjectAddUserModalComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    ProjectAddUserModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.ProjectUserDataService.userList.subscribe(function (data) {
            for (var i = 0, item = void 0; (item = data[i]); i++) {
                if (!_this.members.findByAttr('ID', item.ID)) {
                    _this.userList.push({
                        id: item.ID,
                        text: item.userName
                    });
                }
            }
        });
        this.ProjectUserDataService.getRoleList()
            .subscribe(function (data) {
            for (var i = 0, item = void 0; (item = data[i]); i++) {
                _this.roleList.push({
                    id: item.ID,
                    text: item.ROLE_NAME
                });
            }
        });
        this.addForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(false); });
        this.onValueChanged(false);
    };
    ProjectAddUserModalComponent.prototype.buildForm = function () {
        this.addForm = this.fb.group({
            role: [undefined, forms_1.Validators.required],
            user: [undefined, forms_1.Validators.required]
        });
    };
    ProjectAddUserModalComponent.prototype.selected = function (value, control) {
        this.addForm.get(control).setValue(value.id);
    };
    ProjectAddUserModalComponent.prototype.removed = function (value, control) {
        this.addForm.get(control).setValue(undefined);
    };
    ProjectAddUserModalComponent.prototype.doSubmit = function () {
        var _this = this;
        if (this.addForm.valid) {
            var values = this.addForm.value;
            var payload = values;
            payload.projectId = this.ParamsService.projectId;
            this.ProjectMangementDataService.addUser(payload)
                .subscribe(function (data) {
                _this.refreshList.emit(data);
            });
        }
        else {
            this.onValueChanged(true);
        }
    };
    ProjectAddUserModalComponent.prototype.onValueChanged = function (submit) {
        if (!this.addForm) {
            return;
        }
        var form = this.addForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && (control.dirty || submit) && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return ProjectAddUserModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProjectAddUserModalComponent.prototype, "isModalShown", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProjectAddUserModalComponent.prototype, "modalTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", vc_data_service_1.VcDataService)
], ProjectAddUserModalComponent.prototype, "members", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProjectAddUserModalComponent.prototype, "modalChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProjectAddUserModalComponent.prototype, "refreshList", void 0);
__decorate([
    core_1.ViewChild('autoShownModal'),
    __metadata("design:type", ngx_bootstrap_1.ModalDirective)
], ProjectAddUserModalComponent.prototype, "autoShownModal", void 0);
ProjectAddUserModalComponent = __decorate([
    core_1.Component({
        selector: 'project-add-user-modal',
        templateUrl: './project-add-user-modal.html'
    }),
    __metadata("design:paramtypes", [project_data_service_1.ProjectUserDataService,
        forms_1.FormBuilder,
        project_data_service_1.ProjectMangementDataService,
        group_data_service_1.ParamsService])
], ProjectAddUserModalComponent);
exports.ProjectAddUserModalComponent = ProjectAddUserModalComponent;
//# sourceMappingURL=project-add-user.component.js.map