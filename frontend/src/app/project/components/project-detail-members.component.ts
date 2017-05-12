import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ParamsService } from '../../group/services/group-data.service';
import { VcDataService } from '../../services/vc-data.service';
import { ProjectMangementDataService } from '../services/project-data.service';

@Component({
  selector: 'vc-project-detail-members',
  templateUrl: './project-detail-members.html',
  styleUrls: ['./project.css']
})
export class ProjectDetailMembersComponent implements OnInit  {
    @Input() members: VcDataService;
    progress: any [];
    public showModal = false;
    private selected: number;
    constructor(private ProjectMangementDataService: ProjectMangementDataService, private ParamsService: ParamsService) { }
    ngOnInit() {
    }
    refresh(data: any []) {
      this.members.data = data;
    }
    trackByID(index: number, item: any) {
      return item.ID;
    }
    mark(id: number) {
        this.selected = id;
    }
    isMarked(id: number) {
        return this.selected === id;
    }
    deleteUser() {
      this.ProjectMangementDataService.deleteUser(this.selected, this.ParamsService.projectId)
      .subscribe(data => {
        this.members.data = data;
      })
    }
}
