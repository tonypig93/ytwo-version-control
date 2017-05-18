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
var forms_1 = require("@angular/forms");
var group_data_service_1 = require("../../group/services/group-data.service");
var vc_data_service_1 = require("../../services/vc-data.service");
var vc_base_service_1 = require("../../services/vc-base.service");
var project_data_service_1 = require("../services/project-data.service");
var ProjectDetailVersionsComponent = (function (_super) {
    __extends(ProjectDetailVersionsComponent, _super);
    function ProjectDetailVersionsComponent(fb, ProjectMangementDataService, ParamsService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.ProjectMangementDataService = ProjectMangementDataService;
        _this.ParamsService = ParamsService;
        _this.formErrors = {
            'major': '',
            'minor': '',
            'patch': '',
            'repoCode': ''
        };
        _this.validationMessages = {
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
        _this.selectedVersion = 'New Version';
        _this.isReadOnly = false;
        return _this;
    }
    ProjectDetailVersionsComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ProjectDetailVersionsComponent.prototype.doSubmit = function () {
        var _this = this;
        var payload = {};
        $.fn.extend(payload, this.form.value);
        payload['projectId'] = this.ParamsService.projectId;
        this.ProjectMangementDataService.updateVersion(payload)
            .subscribe(function (data) {
            if (data) {
                data = data[0];
                var index = _this.versions.findByAttr('ID', data.ID, true);
                if (index >= 0) {
                    _this.versions.data[index] = data;
                }
                else {
                    _this.versions.data = [data].concat(_this.versions.data);
                }
            }
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
        var last = this.versions.data[0];
        this.form = this.fb.group({
            ID: [null],
            major: [last.V_MAJOR, forms_1.Validators.required],
            minor: [last.V_MINOR, forms_1.Validators.required],
            patch: [last.V_PATCH, forms_1.Validators.required],
            log: this.fb.group({
                general: '',
                feature: '',
                bug: ''
            }),
            repoCode: ['', forms_1.Validators.required]
        });
        this.form.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    ProjectDetailVersionsComponent.prototype.setModel = function (ID) {
        var data = this.versions.findByAttr('ID', ID);
        var last = this.versions.data[this.versions.data.length - 1];
        this.form.reset({
            ID: data ? data.ID : null,
            major: data ? data.V_MAJOR : last.V_MAJOR,
            minor: data ? data.V_MINOR : last.V_MINOR,
            patch: data ? data.V_PATCH : last.V_PATCH,
            log: {
                general: data ? data.LOG_GENERAL : '',
                feature: data ? data.LOG_FEATURE : '',
                bug: data ? data.LOG_BUG : ''
            },
            repoCode: data ? data.REPO_CODE : ''
        });
        this.selectedVersion = data ? data.V_MAJOR + "." + data.V_MINOR + "." + data.V_PATCH : 'New Version';
        this.isReadOnly = (data && data.STATUS) ? true : false;
        this.selectedVID = data ? data.ID : undefined;
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
    ProjectDetailVersionsComponent.prototype.isCurrent = function (id) {
        return this.selectedVID === id;
    };
    return ProjectDetailVersionsComponent;
}(vc_base_service_1.VcListControl));
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