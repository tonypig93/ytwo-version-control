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
var router_1 = require("@angular/router");
var vc_data_service_1 = require("../../services/vc-data.service");
var GroupManagementComponent = (function () {
    function GroupManagementComponent(ActivatedRoute) {
        this.ActivatedRoute = ActivatedRoute;
    }
    GroupManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ActivatedRoute.data.subscribe(function (data) {
            data = data.management;
            _this.management = {
                projects: new vc_data_service_1.VcDataService(data.projects),
                users: new vc_data_service_1.VcDataService(data.users),
                tasks: new vc_data_service_1.VcDataService(data.tasks)
            };
            for (var i = 0, item = void 0; (item = _this.management.projects.data[i]); i++) {
                item.tasks = [];
                var task = _this.management.tasks.findByAttrLinear('PRJ_FK', item.ID);
                if (task) {
                    item.tasks = task;
                }
            }
            _this.calculateProgress();
        });
    };
    GroupManagementComponent.prototype.calculateProgress = function () {
        if (this.management && this.management.projects) {
            for (var i = 0, item = void 0; (item = this.management.projects.data[i]); i++) {
                var done = 0, total = item.tasks.length;
                for (var j = 0, item2 = void 0; (item2 = item.tasks[j]); j++) {
                    if (item2.IS_DONE) {
                        done++;
                    }
                }
                item.progress = [done, total];
            }
        }
    };
    return GroupManagementComponent;
}());
GroupManagementComponent = __decorate([
    core_1.Component({
        selector: 'vc-group-management',
        templateUrl: './group.management.html',
        styleUrls: ['./group.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], GroupManagementComponent);
exports.GroupManagementComponent = GroupManagementComponent;
//# sourceMappingURL=group-management.component.js.map