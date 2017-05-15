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
var vc_http_service_1 = require("../../services/vc-http.service");
var router_1 = require("@angular/router");
var group_data_service_1 = require("../../group/services/group-data.service");
var ProjectDataService = (function () {
    function ProjectDataService(http, router) {
        this.http = http;
        this.router = router;
    }
    ProjectDataService.prototype.resolve = function () {
        return this.getList();
    };
    ProjectDataService.prototype.getList = function () {
        var _this = this;
        return this.http.get('http://localhost:8000/project/list')
            .map(function (res) {
            _this.masterData = res.data;
            return _this.masterData;
        });
    };
    ProjectDataService.prototype.addProject = function (data) {
        return this.http.post('http://localhost:8000/project/add', data)
            .map(function (res) { return res.data; });
    };
    return ProjectDataService;
}());
ProjectDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [vc_http_service_1.VcHttpService, router_1.Router])
], ProjectDataService);
exports.ProjectDataService = ProjectDataService;
var ProjectUserDataService = (function () {
    function ProjectUserDataService(http, ParamsService) {
        this.http = http;
        this.ParamsService = ParamsService;
    }
    ProjectUserDataService.prototype.getRoleList = function () {
        return this.http.get('http://localhost:8000/project/role/list?id=' + this.ParamsService.projectId)
            .map(function (res) { return res.data; });
    };
    return ProjectUserDataService;
}());
ProjectUserDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [vc_http_service_1.VcHttpService, group_data_service_1.ParamsService])
], ProjectUserDataService);
exports.ProjectUserDataService = ProjectUserDataService;
var ProjectMangementDataService = (function () {
    function ProjectMangementDataService(http, ParamsService) {
        this.http = http;
        this.ParamsService = ParamsService;
    }
    ProjectMangementDataService.prototype.resolve = function (route) {
        var _this = this;
        this.ParamsService.projectId = route.params['id'];
        return this.http.get('http://localhost:8000/project/manage?id=' + route.params['id'])
            .map(function (res) {
            _this.management = res.data;
            return res.data;
        });
    };
    ProjectMangementDataService.prototype.addUser = function (data) {
        return this.http.post('http://localhost:8000/project/user/add', data)
            .map(function (res) { return res.data; });
    };
    ProjectMangementDataService.prototype.deleteUser = function (userId, projectId) {
        return this.http.post('http://localhost:8000/project/user/delete', { userId: userId, projectId: projectId })
            .map(function (res) { return res.data; });
    };
    ProjectMangementDataService.prototype.updateRole = function (roleId, value) {
        return this.http.post('http://localhost:8000/project/role/update', { roleId: roleId, value: value })
            .map(function (res) { return res.data; });
    };
    ProjectMangementDataService.prototype.deleteRole = function (roleId, projectId) {
        return this.http.post('http://localhost:8000/project/role/delete', { roleId: roleId, projectId: projectId })
            .map(function (res) { return res.data; });
    };
    ProjectMangementDataService.prototype.addRole = function (data) {
        return this.http.post('http://localhost:8000/project/role/add', data)
            .map(function (res) { return res.data; });
    };
    return ProjectMangementDataService;
}());
ProjectMangementDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [vc_http_service_1.VcHttpService, group_data_service_1.ParamsService])
], ProjectMangementDataService);
exports.ProjectMangementDataService = ProjectMangementDataService;
//# sourceMappingURL=project-data.service.js.map