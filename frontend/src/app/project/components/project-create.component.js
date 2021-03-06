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
var forms_1 = require("@angular/forms");
var project_data_service_1 = require("../services/project-data.service");
var group_data_service_1 = require("../../group/services/group-data.service");
var group_data_service_2 = require("../../group/services/group-data.service");
var ProjectCreateComponent = (function () {
    function ProjectCreateComponent(fb, ProjectUserDataService, ProjectDataService, ParamsService, GroupUserDataService) {
        this.fb = fb;
        this.ProjectUserDataService = ProjectUserDataService;
        this.ProjectDataService = ProjectDataService;
        this.ParamsService = ParamsService;
        this.GroupUserDataService = GroupUserDataService;
        this.userList = [];
        this.formErrors = {
            'projectName': '',
            'description': '',
            'isPublic': '',
        };
        this.validationMessages = {
            'projectName': {
                'required': 'Project name is required.',
            },
            'description': {
                'required': 'Description is required.',
            },
            'visibility': {
                'required': 'Visibility is required.',
            },
        };
    }
    ProjectCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        var data = this.GroupUserDataService.userList;
        for (var i = 0, item = void 0; (item = data[i]); i++) {
            this.userList.push({
                id: item.ID,
                text: item.userName
            });
        }
    };
    ProjectCreateComponent.prototype.buildForm = function () {
        var _this = this;
        this.projectForm = this.fb.group({
            projectName: ['', forms_1.Validators.required],
            description: ['', forms_1.Validators.required],
            visibility: ['0', forms_1.Validators.required],
        });
        this.projectForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    ProjectCreateComponent.prototype.onValueChanged = function (data) {
        if (!this.projectForm) {
            return;
        }
        var form = this.projectForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ProjectCreateComponent.prototype.doSubmit = function () {
        if (this.projectForm.valid) {
            var values = this.projectForm.value;
            var payload = values;
            payload.groupId = this.ParamsService.groupId;
            this.ProjectDataService.addProject(payload)
                .subscribe(function (data) {
                console.log(data);
            });
        }
    };
    ProjectCreateComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    return ProjectCreateComponent;
}());
ProjectCreateComponent = __decorate([
    core_1.Component({
        selector: 'vc-project-create',
        templateUrl: './project-create.html',
        styleUrls: ['./project.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        project_data_service_1.ProjectUserDataService,
        project_data_service_1.ProjectDataService,
        group_data_service_1.ParamsService,
        group_data_service_2.GroupUserDataService])
], ProjectCreateComponent);
exports.ProjectCreateComponent = ProjectCreateComponent;
//# sourceMappingURL=project-create.component.js.map