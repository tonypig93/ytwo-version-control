"use strict";
var VcDataService = (function () {
    function VcDataService(source) {
        this.currentSortAttr = 'ID';
        this.filters = [];
        this.data = source;
        this.viewData = source;
    }
    Object.defineProperty(VcDataService.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
            this.setViewData();
        },
        enumerable: true,
        configurable: true
    });
    VcDataService.prototype.sort = function (attr) {
        this.currentSortAttr = attr;
        this.quickSort(this.data, 0, this.data.length - 1, attr);
    };
    VcDataService.prototype.quickSort = function (arr, left, right, attr) {
        if (left > right) {
            return;
        }
        var pivot = arr[left], i = left, j = right;
        while (i !== j) {
            while (arr[j][attr] >= pivot[attr] && i < j) {
                j--;
            }
            while (arr[i][attr] <= pivot[attr] && i < j) {
                i++;
            }
            if (i < j) {
                var tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
        }
        arr[left] = arr[i];
        arr[i] = pivot;
        this.quickSort(arr, left, i - 1, attr);
        this.quickSort(arr, i + 1, right, attr);
    };
    VcDataService.prototype.findByAttr = function (attr, value, isIndex) {
        if (isIndex === void 0) { isIndex = false; }
        if (!this.data) {
            return null;
        }
        if (this.currentSortAttr && (this.currentSortAttr !== attr)) {
            throw new Error('Current data set is not sorted by \"' +
                attr + '\"! Resort data set with \"' + attr + '\" or  using `findByAttrLinear`');
        }
        var left = 0, right = this.data.length - 1;
        while (left < right) {
            var mid = Math.floor((left + right) / 2);
            if (value > this.data[mid][attr]) {
                left = mid + 1;
            }
            else if (value < this.data[mid][attr]) {
                right = mid - 1;
            }
            else {
                return isIndex ? mid : this.data[mid];
            }
        }
        var shot = this.data[left] && (this.data[left][attr] === value);
        return shot ? (isIndex ? left : this.data[left]) : (isIndex ? -(++left) : null);
    };
    VcDataService.prototype.findByAttrLinear = function (attr, value) {
        var res = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i][attr] === value) {
                res.push(this.data[i]);
            }
        }
        return res.length > 0 ? (res.length > 1 ? res : res[0]) : null;
    };
    VcDataService.prototype.setFilter = function (fn) {
        this.filters.push(fn);
    };
    VcDataService.prototype.setSearchFilter = function (fn) {
        this.searchFilter = fn;
    };
    VcDataService.prototype.setViewData = function () {
        var res = [];
        for (var i = 0, item = void 0; (item = this.data[i]); i++) {
            var pass = true;
            for (var j = 0, filter = void 0; (filter = this.filters[j]); j++) {
                if (typeof filter === 'function') {
                    pass = (pass && filter(item));
                }
            }
            if (typeof this.searchFilter === 'function') {
                pass = (pass && this.searchFilter(item));
            }
            if (pass) {
                res.push(item);
            }
        }
        return this.viewData = res;
    };
    return VcDataService;
}());
exports.VcDataService = VcDataService;
//# sourceMappingURL=vc-data.service.js.map