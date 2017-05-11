import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ParamsService } from '../../group/services/group-data.service';

@Component({
  selector: 'vc-project-detail-members',
  templateUrl: './project-detail-members.html',
  styleUrls: ['./project.css']
})
export class ProjectDetailMembersComponent implements OnInit  {
    @Input() members: any [];
    progress: any [];
    ngOnInit() {
    }
}
