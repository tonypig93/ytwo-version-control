import { NgModule }      from '@angular/core';
import { ModalModule, BsDropdownModule } from 'ngx-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule }  from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
    imports:      [ ModalModule.forRoot(), BsDropdownModule.forRoot(), CommonModule, RouterModule ],
    declarations: [ ModalComponent, NavBarComponent, DropdownComponent ],
    exports: [ ModalComponent, NavBarComponent, DropdownComponent ]
})
export class WidgetModule { }
