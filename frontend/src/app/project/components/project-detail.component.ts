import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ParamsService } from '../../group/services/group-data.service';
import { ProjectUserDataService } from '../services/project-data.service';

@Component({
  selector: 'vc-project-detail',
  templateUrl: './project-detail.html',
  styleUrls: ['./project.css']
})
export class ProjectDetailComponent implements OnInit  {
  constructor(
    private ParamsService: ParamsService,
    private ProjectUserDataService: ProjectUserDataService) { }
  ngOnInit() {

  }
}
