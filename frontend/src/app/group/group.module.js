"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var widget_module_1 = require("../widgets/widget.module");
var group_routing_module_1 = require("./group-routing.module");
var group_main_component_1 = require("./components/group.main.component");
var group_data_service_1 = require("./services/group-data.service");
var group_management_component_1 = require("./components/group-management.component");
var directives_1 = require("./directives/directives");
var GroupModule = (function () {
    function GroupModule() {
    }
    return GroupModule;
}());
GroupModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, group_routing_module_1.GroupRoutingModule, widget_module_1.WidgetModule],
        declarations: [group_main_component_1.GroupMainComponent, group_management_component_1.GroupManagementComponent, directives_1.MarkClickedDirective],
        providers: [group_data_service_1.GroupDataService, group_data_service_1.GroupMangementDataService, group_data_service_1.GroupUserDataService, group_data_service_1.ParamsService]
    })
], GroupModule);
exports.GroupModule = GroupModule;
//# sourceMappingURL=group.module.js.map