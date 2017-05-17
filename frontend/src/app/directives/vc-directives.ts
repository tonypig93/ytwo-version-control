import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
    selector: '[vc-active-list]'
})
export class VcActiveList {
    private current: any;
    constructor(el: ElementRef) {
    }
    @HostListener('click')
    onClick() {
        console.log(333);
    }
}
