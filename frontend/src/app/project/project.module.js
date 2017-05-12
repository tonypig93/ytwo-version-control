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
var project_routing_module_1 = require("./project.routing.module");
var project_main_component_1 = require("./components/project.main.component");
var project_data_service_1 = require("./services/project-data.service");
var project_create_component_1 = require("./components/project-create.component");
var project_detail_component_1 = require("./components/project-detail.component");
var project_tabs_basic_component_1 = require("./components/project-tabs-basic.component");
var project_detail_general_component_1 = require("./components/project-detail-general.component");
var project_detail_tasks_component_1 = require("./components/project-detail-tasks.component");
var project_detail_members_component_1 = require("./components/project-detail-members.component");
var project_add_user_component_1 = require("./components/project-add-user.component");
var project_detail_roles_component_1 = require("./components/project-detail-roles.component");
var ng2_select_1 = require("ng2-select");
var ProjectModule = (function () {
    function ProjectModule() {
    }
    return ProjectModule;
}());
ProjectModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, project_routing_module_1.ProjectRoutingModule, widget_module_1.WidgetModule, forms_1.ReactiveFormsModule, ng2_select_1.SelectModule],
        declarations: [project_main_component_1.ProjectMainComponent, project_create_component_1.ProjectCreateComponent, project_detail_component_1.ProjectDetailComponent, project_tabs_basic_component_1.ProjectTabsBasicComponent,
            project_detail_general_component_1.ProjectDetailGeneralComponent, project_detail_tasks_component_1.ProjectDetailTasksComponent, project_detail_members_component_1.ProjectDetailMembersComponent,
            project_add_user_component_1.ProjectAddUserModalComponent, project_detail_roles_component_1.ProjectDetailRolesComponent],
        providers: [project_data_service_1.ProjectDataService, project_data_service_1.ProjectUserDataService, project_data_service_1.ProjectMangementDataService]
    })
], ProjectModule);
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=project.module.js.map