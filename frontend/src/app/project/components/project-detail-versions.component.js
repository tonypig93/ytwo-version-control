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
        _this.filterGroup = {
            version: {
                list: [{
                        name: 'Development',
                        type: 0
                    }, {
                        name: 'Production',
                        type: 1
                    }],
                current: 0,
                searchText: new forms_1.FormControl()
            }
        };
        _this.selectedVersion = 'New Version';
        _this.selectedV = null;
        _this.isReadOnly = false;
        return _this;
    }
    ProjectDetailVersionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.versions.setFilter(function (item) {
            var __current = _this.filterGroup.version.current;
            return (item.TYPE === __current);
        });
        this.filterGroup.version.searchText.valueChanges
            .debounceTime(500)
            .subscribe(function (search) {
            _this.versions.setSearchFilter(function (item) {
                return item.PRJ_NAME.indexOf(search) > -1;
            });
            _this.versions.setViewData();
        });
    };
    ProjectDetailVersionsComponent.prototype.ngAfterViewChecked = function () {
        $('.ui.checkbox')['checkbox']();
    };
    ProjectDetailVersionsComponent.prototype.doSubmit = function () {
        var _this = this;
        var payload = {};
        $.fn.extend(payload, this.form.value);
        payload['projectId'] = this.ParamsService.projectId;
        if (!payload['ID']) {
            payload['type'] = this.filterGroup.version.current;
        }
        this.ProjectMangementDataService.updateVersion(payload)
            .subscribe(function (data) {
            console.log(data);
            if (data) {
                data = data[0];
                var index = _this.versions.findByAttr('ID', data.ID, true);
                if (index >= 0) {
                    _this.versions.data[index] = data;
                }
                else {
                    _this.versions.data.push(data);
                }
                _this.versions.setViewData();
                _this.setModel(data.ID);
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
        // let last = this.versions.data[this.versions.data.length - 1];
        this.form = this.fb.group({
            ID: [null],
            major: [undefined, forms_1.Validators.required],
            minor: [undefined, forms_1.Validators.required],
            patch: [undefined, forms_1.Validators.required],
            log: this.fb.group({
                general: '',
                feature: '',
                bug: ''
            }),
            repoCode: ['', forms_1.Validators.required],
            release: [false]
        });
        this.form.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
        this.setModel(null);
    };
    ProjectDetailVersionsComponent.prototype.setModel = function (ID) {
        var data = ID ? this.versions.findByAttr('ID', ID) : null;
        var last = this.versions.data[this.versions.data.length - 1];
        var model = {
            ID: null,
            major: 0,
            minor: 0,
            patch: 0,
            log: {
                general: '',
                feature: '',
                bug: ''
            },
            repoCode: ''
        };
        if (last) {
            if (data) {
                model.ID = data.ID;
                model.major = data.V_MAJOR;
                model.minor = data.V_MINOR;
                model.patch = data.V_PATCH;
                model.log = {
                    general: data.LOG_GENERAL,
                    feature: data.LOG_FEATURE,
                    bug: data.LOG_BUG
                };
                model.repoCode = data.REPO_CODE;
            }
            else {
                model.major = last.V_MAJOR;
                model.minor = last.V_MINOR;
                model.patch = last.V_PATCH;
            }
        }
        this.form.reset(model);
        this.selectedVersion = data ? data.V_MAJOR + "." + data.V_MINOR + "." + data.V_PATCH : 'New Version';
        this.isReadOnly = (data && data.STATUS) ? true : false;
        this.selectedV = data ? data : null;
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
        return (this.selectedV === id) || (this.selectedV && this.selectedV.ID === id);
    };
    ProjectDetailVersionsComponent.prototype.selectVersionFilter = function (type) {
        var __current = this.filterGroup.version.current;
        if (__current !== type) {
            this.filterGroup.version.current = type;
            this.versions.setViewData();
        }
        this.setModel(null);
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