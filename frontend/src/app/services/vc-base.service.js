"use strict";
var VcListControl = (function () {
    function VcListControl() {
    }
    VcListControl.prototype.mark = function (id) {
        this.selected = id;
    };
    VcListControl.prototype.isMarked = function (id) {
        return this.selected === id;
    };
    VcListControl.prototype.trackByID = function (index, item) {
        return item.ID;
    };
    return VcListControl;
}());
exports.VcListControl = VcListControl;
//# sourceMappingURL=vc-base.service.js.map