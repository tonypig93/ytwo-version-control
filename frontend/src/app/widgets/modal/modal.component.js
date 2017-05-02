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
var ModalComponent = (function () {
    function ModalComponent() {
        this.isModalShown = false;
        this.modalTitle = 'Info';
        this.modalBody = '';
        this.modalChange = new core_1.EventEmitter();
    }
    ModalComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    ModalComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    ModalComponent.prototype.onHidden = function () {
        this.isModalShown = false;
        this.modalChange.emit();
    };
    return ModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "isModalShown", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "modalTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "modalBody", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "modalChange", void 0);
__decorate([
    core_1.ViewChild('autoShownModal'),
    __metadata("design:type", ngx_bootstrap_1.ModalDirective)
], ModalComponent.prototype, "autoShownModal", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: 'modal',
        templateUrl: './modal.html'
    })
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map