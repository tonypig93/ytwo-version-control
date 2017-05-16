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
var group_data_service_1 = require("../../group/services/group-data.service");
var vc_data_service_1 = require("../../services/vc-data.service");
var project_data_service_1 = require("../services/project-data.service");
var ProjectDetailVersionsComponent = (function () {
    function ProjectDetailVersionsComponent(fb, ProjectMangementDataService, ParamsService) {
        this.fb = fb;
        this.ProjectMangementDataService = ProjectMangementDataService;
        this.ParamsService = ParamsService;
        this.formErrors = {
            'major': '',
            'minor': '',
            'patch': '',
            'repoCode': ''
        };
        this.validationMessages = {
            'major': {
                'required': 'Majoy number is required.',
            },
            'minor': {
                'required': 'Minor number is required.',
            },
            'patch': {
                'required': 'Patch number is required.'
            },
            'repoCode': {
                'required': 'Repository code is required.',
            }
        };
    }
    ProjectDetailVersionsComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ProjectDetailVersionsComponent.prototype.doSubmit = function () {
        console.log(this.form);
        var payload = {};
        $.fn.extend(payload, this.form.value);
        payload['projectId'] = this.ParamsService.projectId;
        this.ProjectMangementDataService.updateVersion(payload)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    ProjectDetailVersionsComponent.prototype.decrease = function (name) {
        var control = this.form.get(name);
        var value = control.value;
        control.patchValue(--value);
    };
    ProjectDetailVersionsComponent.prototype.increase = function (name) {
        var control = this.form.get(name);
        var value = control.value;
        control.patchValue(++value);
    };
    ProjectDetailVersionsComponent.prototype.buildForm = function () {
        var _this = this;
        this.form = this.fb.group({
            major: [0, forms_1.Validators.required],
            minor: [0, forms_1.Validators.required],
            patch: [0, forms_1.Validators.required],
            log: this.fb.group({
                general: 'ggg',
                feature: 'f',
                bug: 'bug'
            }),
            repoCode: ['', forms_1.Validators.required]
        });
        this.form.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    ProjectDetailVersionsComponent.prototype.onValueChanged = function (data) {
        if (!this.form) {
            return;
        }
        var form = this.form;
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
    return ProjectDetailVersionsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", vc_data_service_1.VcDataService)
], ProjectDetailVersionsComponent.prototype, "versions", void 0);
ProjectDetailVersionsComponent = __decorate([
    core_1.Component({
        selector: 'vc-project-detail-versions',
        templateUrl: './project-detail-versions.html',
        styleUrls: ['./project-version.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        project_data_service_1.ProjectMangementDataService,
        group_data_service_1.ParamsService])
], ProjectDetailVersionsComponent);
exports.ProjectDetailVersionsComponent = ProjectDetailVersionsComponent;
//# sourceMappingURL=project-detail-versions.component.js.map