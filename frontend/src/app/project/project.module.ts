import { NgModule }      from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { WidgetModule } from '../widgets/widget.module';
import { ProjectRoutingModule } from './project.routing.module';
import { ProjectMainComponent } from './components/project.main.component';
import { ProjectListComponent } from './components/project.list.component';
import { ProjectDetailComponent } from './components/project.detail.component';
import { ProjectDataService } from './services/project-data.service';

@NgModule({
    imports:      [ CommonModule, FormsModule, ProjectRoutingModule, WidgetModule ],
    declarations: [ ProjectMainComponent, ProjectListComponent, ProjectDetailComponent ],
    providers: [ ProjectDataService ]
})
export class ProjectModule { }
