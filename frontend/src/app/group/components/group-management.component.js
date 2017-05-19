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
var group_data_service_1 = require("../services/group-data.service");
var forms_1 = require("@angular/forms");
var GroupManagementComponent = (function () {
    function GroupManagementComponent(ActivatedRoute, GroupDataService, GroupUserDataService, ParamsService) {
        this.ActivatedRoute = ActivatedRoute;
        this.GroupDataService = GroupDataService;
        this.GroupUserDataService = GroupUserDataService;
        this.ParamsService = ParamsService;
        this.showModal = false;
        this.filterGroup = {
            project: {
                list: [{
                        name: 'All',
                        type: 0
                    }, {
                        name: 'Public',
                        type: 1
                    }, {
                        name: 'Private',
                        type: 2
                    }],
                current: 0,
                searchText: new forms_1.FormControl()
            },
            user: {
                list: [{
                        name: 'All',
                        type: 0
                    }],
                current: 0,
                searchText: new forms_1.FormControl()
            }
        };
    }
    GroupManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ActivatedRoute.data.subscribe(function (data) {
            var projectData = data['management'];
            var userList = data['userList'];
            _this.management = {
                projects: new vc_data_service_1.VcDataService(projectData['projects']),
                users: new vc_data_service_1.VcDataService(userList)
            };
            _this.management.projects.setFilter(function (item) {
                var __current = _this.filterGroup.project.current;
                return (__current === 0) || (item.VISIBILITY === __current);
            });
            _this.calculateProgress();
        });
        this.ActivatedRoute.params.subscribe(function (params) {
            _this.groupId = params['id'];
            _this.ParamsService.groupId = _this.groupId;
        });
        this.filterGroup.project.searchText.valueChanges
            .debounceTime(500)
            .subscribe(function (search) {
            _this.management.projects.setSearchFilter(function (item) {
                return item.PRJ_NAME.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
            _this.management.projects.setViewData();
        });
        this.filterGroup.user.searchText.valueChanges
            .debounceTime(500)
            .subscribe(function (search) {
            _this.management.users.setSearchFilter(function (item) {
                return item.userName.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
            _this.management.users.setViewData();
        });
    };
    GroupManagementComponent.prototype.calculateProgress = function () {
        if (this.management && this.management.projects) {
            for (var i = 0, item = void 0; (item = this.management.projects.data[i]); i++) {
                var done = item.TASK_DONE, total = item.TASK_TOTAL;
                item.progress = [done, total];
            }
        }
    };
    GroupManagementComponent.prototype.refresh = function () {
        var _this = this;
        this.GroupUserDataService.getList(this.groupId)
            .subscribe(function (data) {
            _this.management.users.data = data;
            // this.GroupDataService.getList()
            // .subscribe(() => {});
        });
    };
    GroupManagementComponent.prototype.mark = function (id) {
        this.selected = id;
    };
    GroupManagementComponent.prototype.isMarked = function (id) {
        return this.selected === id;
    };
    GroupManagementComponent.prototype.deleteUser = function () {
        var _this = this;
        this.GroupUserDataService.deleteUser(this.selected)
            .subscribe(function (data) {
            _this.refresh();
        });
    };
    GroupManagementComponent.prototype.trackByID = function (index, item) {
        return item.ID;
    };
    GroupManagementComponent.prototype.selectProjectFilter = function (type) {
        var __current = this.filterGroup.project.current;
        if (__current !== type) {
            this.filterGroup.project.current = type;
            this.management.projects.setViewData();
        }
    };
    GroupManagementComponent.prototype.selectUserFilter = function (type) {
        var __current = this.filterGroup.user.current;
        if (__current !== type) {
            this.filterGroup.user.current = type;
            this.management.users.setViewData();
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
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        group_data_service_1.GroupDataService,
        group_data_service_1.GroupUserDataService,
        group_data_service_1.ParamsService])
], GroupManagementComponent);
exports.GroupManagementComponent = GroupManagementComponent;
//# sourceMappingURL=group-management.component.js.map