import { NgModule }      from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { WidgetModule } from '../widgets/widget.module';
import { GroupRoutingModule } from './group-routing.module';
import { GroupMainComponent } from './components/group.main.component';
import { GroupDataService, GroupMangementDataService } from './services/group-data.service';
import { GroupManagementComponent } from './components/group-management.component';

@NgModule({
    imports:      [ CommonModule, FormsModule, GroupRoutingModule, WidgetModule ],
    declarations: [ GroupMainComponent, GroupManagementComponent ],
    providers: [ GroupDataService, GroupMangementDataService ]
})
export class GroupModule { }
