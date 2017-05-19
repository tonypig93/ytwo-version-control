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
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ProjectDetailVersionsLogComponent = (function () {
    function ProjectDetailVersionsLogComponent() {
        this.modules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean'],
            ]
        };
    }
    ProjectDetailVersionsLogComponent.prototype.ngOnInit = function () {
        for (var i = 0, item = void 0; (item = this.group.controls[i]); i++) {
            item.valueChanges
                .debounceTime(500)
                .distinctUntilChanged();
        }
    };
    return ProjectDetailVersionsLogComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormGroup)
], ProjectDetailVersionsLogComponent.prototype, "group", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProjectDetailVersionsLogComponent.prototype, "isReadOnly", void 0);
__decorate([
    core_1.ViewChild('staticTabs'),
    __metadata("design:type", ngx_bootstrap_1.TabsetComponent)
], ProjectDetailVersionsLogComponent.prototype, "staticTabs", void 0);
ProjectDetailVersionsLogComponent = __decorate([
    core_1.Component({
        selector: 'project-version-log',
        templateUrl: './project-detail-versions-log.html',
        styleUrls: ['./project-version.css'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], ProjectDetailVersionsLogComponent);
exports.ProjectDetailVersionsLogComponent = ProjectDetailVersionsLogComponent;
//# sourceMappingURL=project-detail-versions-log.component.js.map