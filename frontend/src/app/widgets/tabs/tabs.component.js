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
var TabsBasicComponent = (function () {
    function TabsBasicComponent() {
    }
    TabsBasicComponent.prototype.alertMe = function () {
        setTimeout(function () {
            alert('You\'ve selected the alert tab!');
        });
    };
    TabsBasicComponent.prototype.selectTab = function (tab_id) {
        this.staticTabs.tabs[tab_id].active = true;
    };
    TabsBasicComponent.prototype.disableEnable = function () {
        this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
    };
    return TabsBasicComponent;
}());
__decorate([
    core_1.ViewChild('staticTabs'),
    __metadata("design:type", ngx_bootstrap_1.TabsetComponent)
], TabsBasicComponent.prototype, "staticTabs", void 0);
TabsBasicComponent = __decorate([
    core_1.Component({
        selector: 'tabs-basic',
        templateUrl: './tabs-basic.html',
        styleUrls: ['./tabs.css']
    })
], TabsBasicComponent);
exports.TabsBasicComponent = TabsBasicComponent;
//# sourceMappingURL=tabs.component.js.map