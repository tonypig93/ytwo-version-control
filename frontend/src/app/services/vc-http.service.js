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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var vc_global_component_service_1 = require("../services/vc-global-component.service");
var VcHttpService = (function () {
    function VcHttpService(http, VcGlobalComponentService) {
        this.http = http;
        this.VcGlobalComponentService = VcGlobalComponentService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': '' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        this.baseUrl = 'http://localhost:8000/';
    }
    VcHttpService.prototype.get = function (url) {
        return this.http.get(this.baseUrl + url, this.options)
            .map(function (res) { return res.json(); });
    };
    VcHttpService.prototype.post = function (url, body) {
        if (body === void 0) { body = {}; }
        var modal = this.VcGlobalComponentService.infoModal;
        return this.http.post(this.baseUrl + url, body, this.options)
            .map(function (res) {
            var ret = res.json();
            if (modal && ret.error) {
                modal.modalBody = ret.msg;
                modal.modalTitle = 'Error !';
                modal.showModal();
            }
            return ret;
        })
            .catch(function (error) {
            if (modal) {
                modal.modalBody = error.status + ": " + error.statusText;
                modal.modalTitle = 'Error !';
                modal.showModal();
            }
            return Observable_1.Observable.throw(error);
        });
    };
    VcHttpService.prototype.setAuthHeader = function (token) {
        this.options.headers.set('Authorization', token);
    };
    return VcHttpService;
}());
VcHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, vc_global_component_service_1.VcGlobalComponentService])
], VcHttpService);
exports.VcHttpService = VcHttpService;
//# sourceMappingURL=vc-http.service.js.map