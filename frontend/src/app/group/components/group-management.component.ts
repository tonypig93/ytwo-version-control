import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VcDataService } from '../../services/vc-data.service';
import { GroupDataService, GroupUserDataService, ParamsService } from '../services/group-data.service';
interface IManagement {
    users: VcDataService,
    projects: VcDataService
}
@Component({
  selector: 'vc-group-management',
  templateUrl: './group.management.html',
  styleUrls: ['./group.css']
})
export class GroupManagementComponent implements OnInit  {
    public management: IManagement;
    public showModal = false;
    public groupId: number;
    private selected: number;
    constructor(
        private ActivatedRoute: ActivatedRoute,
        private GroupDataService: GroupDataService,
        private GroupUserDataService: GroupUserDataService,
        private ParamsService: ParamsService) {
    }
    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => {
            let projectData = data['management'];
            let userList = data['userList'];
            this.management = {
                projects: new VcDataService(projectData['projects']),
                users: new VcDataService(userList)
            }
            this.calculateProgress();
        });
        this.ActivatedRoute.params.subscribe(params => {
            this.groupId = params['id'];
            this.ParamsService.groupId = this.groupId;
        })
    }
    private calculateProgress() {
        if (this.management && this.management.projects) {
            for (let i = 0, item; (item = this.management.projects.data[i]); i++) {
                let done = item.TASK_DONE, total = item.TASK_TOTAL;
                item.progress = [done, total];
            }
        }
    }
    refresh() {
        this.GroupUserDataService.getList(this.groupId)
        .subscribe(data => {
            this.management.users.data = data;
            // this.GroupDataService.getList()
            // .subscribe(() => {});
        });
    }
    mark(id: number) {
        this.selected = id;
    }
    isMarked(id: number) {
        return this.selected === id;
    }
    deleteUser() {
        this.GroupUserDataService.deleteUser(this.selected)
        .subscribe(data => {
            this.refresh();
        });
    }
    trackByID(index: number, item: any) {
        return item.ID;
    }
}
