import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ParamsService } from '../../group/services/group-data.service';
import { ProjectUserDataService, ProjectMangementDataService } from '../services/project-data.service';
import { ActivatedRoute } from '@angular/router';
import { VcDataService } from '../../services/vc-data.service';

@Component({
  selector: 'vc-project-detail',
  templateUrl: './project-detail.html',
  styleUrls: ['./project.css']
})
export class ProjectDetailComponent implements OnInit  {
      public management: any;
      public userList: any [];

      constructor(
      private ParamsService: ParamsService,
      private ProjectUserDataService: ProjectUserDataService,
      private ActivatedRoute: ActivatedRoute,
      private ProjectMangementDataService: ProjectMangementDataService) { }
      ngOnInit() {
        let data = this.ProjectMangementDataService.management;
        this.management = {
            project: data['project'],
            members: new VcDataService(data['members']),
            tasks: new VcDataService(data['tasks']),
            versions: new VcDataService(data['versions']),
            roles: new VcDataService(data['roles']),
            powers: new VcDataService(data['powers'])
        };
        this.management.versions.data.reverse();
        // this.ProjectUserDataService.userList.subscribe(_data => {
        //       this.userList = _data;
        // });
      }
}

