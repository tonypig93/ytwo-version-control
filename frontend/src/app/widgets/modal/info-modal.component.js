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
var ngx_bootstrap_1 = require("ngx-bootstrap");
var vc_global_component_service_1 = require("../../services/vc-global-component.service");
var InfoModalComponent = (function () {
    function InfoModalComponent(VcGlobalComponentService) {
        this.VcGlobalComponentService = VcGlobalComponentService;
        this.isModalShown = false;
        this.modalTitle = 'Info';
        this.modalBody = '';
    }
    InfoModalComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    InfoModalComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    InfoModalComponent.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    InfoModalComponent.prototype.ngOnInit = function () {
        this.VcGlobalComponentService.infoModal = this;
    };
    return InfoModalComponent;
}());
__decorate([
    core_1.ViewChild('autoShownModal'),
    __metadata("design:type", ngx_bootstrap_1.ModalDirective)
], InfoModalComponent.prototype, "autoShownModal", void 0);
InfoModalComponent = __decorate([
    core_1.Component({
        selector: 'info-modal',
        templateUrl: './info-modal.html'
    }),
    __metadata("design:paramtypes", [vc_global_component_service_1.VcGlobalComponentService])
], InfoModalComponent);
exports.InfoModalComponent = InfoModalComponent;
//# sourceMappingURL=info-modal.component.js.map