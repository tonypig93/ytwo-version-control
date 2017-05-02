import { NgModule }      from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:      [ ModalModule.forRoot(), CommonModule ],
    declarations: [ ModalComponent ],
    exports: [ ModalComponent ]
})
export class WidgetModule { }
