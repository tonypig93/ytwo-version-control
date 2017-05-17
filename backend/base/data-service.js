let DataService = function (data, sortAttr = 'ID') {
    this.data = data;
    this.currentSortAttr = sortAttr;
};
DataService.prototype.sort = function sort(attr) {
    this.currentSortAttr = attr;
    quickSort(this.data, 0, this.data.length - 1, attr);
};

function quickSort(arr, left, right, attr) {
    if (left > right) {
        return;
    }
    let pivot = arr[left],
        i = left,
        j = right;
    while (i !== j) {
        while (arr[j][attr] >= pivot[attr] && i < j) {
            j--;
        }
        while (arr[i][attr] <= pivot[attr] && i < j) {
            i++;
        }
        if (i < j) {
            let tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }
    }
    arr[left] = arr[i];
    arr[i] = pivot;
    quickSort(arr, left, i - 1, attr);
    quickSort(arr, i + 1, right, attr);
}
DataService.prototype.findByAttr(attr, value) {
    if (this.currentSortAttr && (this.currentSortAttr !== attr)) {
        throw new Error('Current data set is not sorted by \"' +
            attr + '\"! Resort data set with \"' + attr + '\" or  using `findByAttrLinear`');
    }
    let left = 0,
        right = this.data.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (value > this.data[mid][attr]) {
            left = mid + 1;
        } else if (value < this.data[mid][attr]) {
            right = mid - 1;
        } else {
            return this.data[mid];
        }
    }
    return this.data[left][attr] === value ? this.data[left] : null;
}
DataService.prototype.findByAttrLinear(attr, value) {
    let res = [];
    for (let i = 0; i < this.data.length; i++) {
        if (this.data[i][attr] === value) {
            res.push(this.data[i]);
        }
    }
    return res.length > 0 ? (res.length > 1 ? res : res[0]) : null;
}
module.exports = DataService;