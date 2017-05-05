export class VcDataService {
    public data: any [];
    private currentSortAttr = 'ID';
    constructor(source: any[]) {
        this.data = source;
    }
    public sort(attr: string) {
        this.currentSortAttr = attr;
        this.quickSort(this.data, 0, this.data.length - 1, attr);
    }
    private quickSort(arr: any [], left: number, right: number, attr: string) {
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
        this.quickSort(arr, left, i - 1, attr);
        this.quickSort(arr, i + 1, right, attr);
    }
    public findByAttr(attr: string, value: any) {
        if (this.currentSortAttr && (this.currentSortAttr !== attr)) {
            throw new Error('Current data set is not sorted by \"'
            + attr + '\"! Resort data set with \"' + attr + '\" or  using `findByAttrLinear`');
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
    public findByAttrLinear(attr: string, value: any) {
        let res = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i][attr] === value) {
                res.push(this.data[i]);
            }
        }
        return res.length > 0 ? (res.length > 1 ? res : res[0]) : null;
    }
}
