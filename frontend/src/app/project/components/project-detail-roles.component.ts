import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ParamsService } from '../../group/services/group-data.service';
import { VcDataService } from '../../services/vc-data.service';
import { ProjectMangementDataService } from '../services/project-data.service';

@Component({
  selector: 'vc-project-detail-roles',
  templateUrl: './project-detail-roles.html',
  styleUrls: ['./project.css']
})
export class ProjectDetailRolesComponent implements OnInit  {
    @Input() roles: VcDataService;
    @Input() powers: VcDataService;
    constructor(private ProjectMangementDataService: ProjectMangementDataService, private ParamsService: ParamsService) { }
    ngOnInit() {
    }
}
