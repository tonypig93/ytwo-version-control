import { NgModule }             from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { ProjectMainComponent } from './components/project.main.component';
import { ProjectDataService, ProjectMangementDataService } from './services/project-data.service';
import { ProjectCreateComponent } from './components/project-create.component';
import { ProjectDetailComponent } from './components/project-detail.component';

const routes: Routes = [
    {
        path: '', component: ProjectMainComponent, resolve: {
            projectList: ProjectDataService
        },
        children: [{
            path: 'create', component: ProjectCreateComponent
        }, {
            path: ':id', component: ProjectDetailComponent, resolve: {
                management: ProjectMangementDataService
            }
        }]
    }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProjectRoutingModule {
    constructor(private ActivatedRoute: ActivatedRoute) {
        this.ActivatedRoute.params.subscribe(data => {
            // console.log(data)
        })
    }
 }
