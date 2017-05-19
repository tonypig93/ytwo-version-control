"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var modal_component_1 = require("./modal/modal.component");
var common_1 = require("@angular/common");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var router_1 = require("@angular/router");
var dropdown_component_1 = require("./dropdown/dropdown.component");
var group_add_user_component_1 = require("./modal/group-add-user.component");
var forms_1 = require("@angular/forms");
var dropdown_basic_component_1 = require("./dropdown/dropdown-basic.component");
var info_modal_component_1 = require("./modal/info-modal.component");
var WidgetModule = (function () {
    function WidgetModule() {
    }
    return WidgetModule;
}());
WidgetModule = __decorate([
    core_1.NgModule({
        imports: [ngx_bootstrap_1.ModalModule.forRoot(), ngx_bootstrap_1.BsDropdownModule.forRoot(), ngx_bootstrap_1.TabsModule.forRoot(),
            common_1.CommonModule, router_1.RouterModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [modal_component_1.ModalComponent, nav_bar_component_1.NavBarComponent, dropdown_component_1.DropdownComponent, group_add_user_component_1.AddUserModalComponent, dropdown_basic_component_1.DropdownBasicComponent, info_modal_component_1.InfoModalComponent],
        exports: [modal_component_1.ModalComponent, nav_bar_component_1.NavBarComponent, dropdown_component_1.DropdownComponent, group_add_user_component_1.AddUserModalComponent, dropdown_basic_component_1.DropdownBasicComponent,
            ngx_bootstrap_1.ModalModule, ngx_bootstrap_1.BsDropdownModule, ngx_bootstrap_1.TabsModule, info_modal_component_1.InfoModalComponent]
    })
], WidgetModule);
exports.WidgetModule = WidgetModule;
//# sourceMappingURL=widget.module.js.map