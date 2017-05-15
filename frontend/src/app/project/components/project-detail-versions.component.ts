import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ParamsService } from '../../group/services/group-data.service';
import { VcDataService } from '../../services/vc-data.service';

@Component({
  selector: 'vc-project-detail-versions',
  templateUrl: './project-detail-versions.html',
  styleUrls: ['./project-version.css']
})
export class ProjectDetailVersionsComponent implements OnInit  {
    @Input() versions: VcDataService;
    ngOnInit() {
    }
    constructor() {}
}

