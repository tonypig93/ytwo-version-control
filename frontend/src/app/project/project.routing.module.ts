import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectMainComponent } from './components/project.main.component';
import { ProjectListComponent } from './components/project.list.component';
import { ProjectDetailComponent } from './components/project.detail.component';
import { ProjectDataService } from './services/project-data.service';

const routes: Routes = [
    {
        path: 'control', component: ProjectMainComponent, resolve: {
            projectList: ProjectDataService
        },
        children: [
            {path: '', component: ProjectListComponent},
            {path: 'detail', component: ProjectDetailComponent, outlet: 'detail'}
        ]
    }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProjectRoutingModule { }
