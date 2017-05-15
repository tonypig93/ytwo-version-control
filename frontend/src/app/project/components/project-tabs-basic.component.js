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
var ProjectTabsBasicComponent = (function () {
    function ProjectTabsBasicComponent() {
        this.currentTab = 'general';
    }
    ProjectTabsBasicComponent.prototype.ngOnInit = function () {
        // console.log(this.management)
    };
    ProjectTabsBasicComponent.prototype.alertMe = function () {
        setTimeout(function () {
            alert('You\'ve selected the alert tab!');
        });
    };
    ProjectTabsBasicComponent.prototype.selectTab = function (tab_id) {
        this.staticTabs.tabs[tab_id].active = true;
    };
    ProjectTabsBasicComponent.prototype.disableEnable = function () {
        this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
    };
    return ProjectTabsBasicComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProjectTabsBasicComponent.prototype, "management", void 0);
__decorate([
    core_1.ViewChild('staticTabs'),
    __metadata("design:type", ngx_bootstrap_1.TabsetComponent)
], ProjectTabsBasicComponent.prototype, "staticTabs", void 0);
ProjectTabsBasicComponent = __decorate([
    core_1.Component({
        selector: 'project-tabs-basic',
        templateUrl: './project-tabs-basic.html',
        styleUrls: ['./tabs.css']
    }),
    __metadata("design:paramtypes", [])
], ProjectTabsBasicComponent);
exports.ProjectTabsBasicComponent = ProjectTabsBasicComponent;
//# sourceMappingURL=project-tabs-basic.component.js.map