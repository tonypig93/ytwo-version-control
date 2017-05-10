import { NgModule }      from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';
import { WidgetModule } from '../widgets/widget.module';
import { ProjectRoutingModule } from './project.routing.module';
import { ProjectMainComponent } from './components/project.main.component';
import { ProjectDataService, ProjectUserDataService, ProjectMangementDataService } from './services/project-data.service';
import { ProjectCreateComponent } from './components/project-create.component';
import { ProjectDetailComponent } from './components/project-detail.component';
import { SelectModule } from 'ng2-select';

@NgModule({
    imports:      [ CommonModule, FormsModule, ProjectRoutingModule, WidgetModule, ReactiveFormsModule, SelectModule ],
    declarations: [ ProjectMainComponent, ProjectCreateComponent, ProjectDetailComponent ],
    providers: [ ProjectDataService, ProjectUserDataService, ProjectMangementDataService ]
})
export class ProjectModule { }
