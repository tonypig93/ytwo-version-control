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
var vc_data_service_1 = require("../../services/vc-data.service");
var ProjectDetailVersionsComponent = (function () {
    function ProjectDetailVersionsComponent() {
    }
    ProjectDetailVersionsComponent.prototype.ngOnInit = function () {
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
    __metadata("design:paramtypes", [])
], ProjectDetailVersionsComponent);
exports.ProjectDetailVersionsComponent = ProjectDetailVersionsComponent;
//# sourceMappingURL=project-detail-versions.component.js.map