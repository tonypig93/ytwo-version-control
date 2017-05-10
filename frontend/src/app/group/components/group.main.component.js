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
var group_data_service_1 = require("../services/group-data.service");
var GroupMainComponent = (function () {
    function GroupMainComponent(ActivatedRoute, router, GroupDataService) {
        this.ActivatedRoute = ActivatedRoute;
        this.router = router;
        this.GroupDataService = GroupDataService;
    }
    GroupMainComponent.prototype.ngOnInit = function () {
        this.groupList = this.GroupDataService.masterData;
    };
    GroupMainComponent.prototype.isCurrent = function (id) {
        return Number(this.router.url.split('/')[2]) === id;
    };
    return GroupMainComponent;
}());
GroupMainComponent = __decorate([
    core_1.Component({
        selector: 'vc-group',
        templateUrl: './group.main.html',
        styleUrls: ['./group.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, group_data_service_1.GroupDataService])
], GroupMainComponent);
exports.GroupMainComponent = GroupMainComponent;
//# sourceMappingURL=group.main.component.js.map