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
var GroupDataService = (function () {
    function GroupDataService(http, router) {
        this.http = http;
        this.router = router;
    }
    GroupDataService.prototype.resolve = function () {
        return this.getList();
    };
    GroupDataService.prototype.getList = function () {
        var _this = this;
        return this.http.get('http://localhost:8000/group/list')
            .map(function (res) {
            _this.masterData = res.data;
            return _this.masterData;
        });
    };
    return GroupDataService;
}());
GroupDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [vc_http_service_1.VcHttpService, router_1.Router])
], GroupDataService);
exports.GroupDataService = GroupDataService;
var GroupUserDataService = (function () {
    function GroupUserDataService(http, router) {
        this.http = http;
        this.router = router;
    }
    GroupUserDataService.prototype.resolve = function (route) {
        var _this = this;
        return this.getList(route.params['id'])
            .map(function (data) {
            _this.userList = data;
            return data;
        });
    };
    GroupUserDataService.prototype.getList = function (groupId) {
        return this.http.get('http://localhost:8000/user/list?groupId=' + groupId)
            .map(function (res) { return res.data; });
    };
    GroupUserDataService.prototype.addUser = function (data) {
        return this.http.post('http://localhost:8000/user/add', data)
            .map(function (res) { return res.data; });
    };
    GroupUserDataService.prototype.deleteUser = function (userId) {
        return this.http.post('http://localhost:8000/user/delete', { id: userId })
            .map(function (res) { return res.data; });
    };
    return GroupUserDataService;
}());
GroupUserDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [vc_http_service_1.VcHttpService, router_1.Router])
], GroupUserDataService);
exports.GroupUserDataService = GroupUserDataService;
var GroupMangementDataService = (function () {
    function GroupMangementDataService(http, router) {
        this.http = http;
        this.router = router;
    }
    GroupMangementDataService.prototype.resolve = function (route) {
        return this.http.get('http://localhost:8000/group/manage?id=' + route.params['id'])
            .map(function (res) { return res.data; });
    };
    return GroupMangementDataService;
}());
GroupMangementDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [vc_http_service_1.VcHttpService, router_1.Router])
], GroupMangementDataService);
exports.GroupMangementDataService = GroupMangementDataService;
var ParamsService = (function () {
    function ParamsService(router) {
        this.router = router;
    }
    Object.defineProperty(ParamsService.prototype, "groupId", {
        get: function () {
            if (!this._groupId) {
                this._groupId = Number(this.router.url.split('/')[2]);
            }
            return this._groupId;
        },
        set: function (value) {
            this._groupId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParamsService.prototype, "projectId", {
        get: function () {
            if (!this._projectId) {
                this._projectId = Number(this.router.url.split('/')[4]);
            }
            return this._projectId;
        },
        set: function (value) {
            this._projectId = value;
        },
        enumerable: true,
        configurable: true
    });
    return ParamsService;
}());
ParamsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], ParamsService);
exports.ParamsService = ParamsService;
//# sourceMappingURL=group-data.service.js.map