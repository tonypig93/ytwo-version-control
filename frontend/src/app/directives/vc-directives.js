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
var VcActiveList = (function () {
    function VcActiveList(el) {
    }
    VcActiveList.prototype.onClick = function () {
        console.log(333);
    };
    return VcActiveList;
}());
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VcActiveList.prototype, "onClick", null);
VcActiveList = __decorate([
    core_1.Directive({
        selector: '[vc-active-list]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], VcActiveList);
exports.VcActiveList = VcActiveList;
var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        return value.slice().reverse();
    };
    return ReversePipe;
}());
ReversePipe = __decorate([
    core_1.Pipe({
        name: 'reverse'
    })
], ReversePipe);
exports.ReversePipe = ReversePipe;
//# sourceMappingURL=vc-directives.js.map