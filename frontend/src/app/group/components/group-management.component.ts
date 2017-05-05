import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VcDataService } from '../../services/vc-data.service';
interface IManagement {
    users: VcDataService,
    projects: VcDataService,
    tasks: VcDataService
}
@Component({
  selector: 'vc-group-management',
  templateUrl: './group.management.html',
  styleUrls: ['./group.css']
})
export class GroupManagementComponent implements OnInit  {
    public management: IManagement;
    constructor(private ActivatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => {
            data = data.management;
            this.management = {
                projects: new VcDataService(data.projects),
                users: new VcDataService(data.users),
                tasks: new VcDataService(data.tasks)
            }
            for (let i = 0, item; (item = this.management.projects.data[i]); i ++) {
                item.tasks = [];
                let task = this.management.tasks.findByAttrLinear('PRJ_FK', item.ID);
                if (task) {
                    item.tasks = task;
                }
            }
            this.calculateProgress();
        })
    }
    private calculateProgress() {
        if (this.management && this.management.projects) {
            for (let i = 0, item; (item = this.management.projects.data[i]); i++) {
                let done = 0, total = item.tasks.length;
                for (let j = 0, item2; (item2 = item.tasks[j]); j++) {
                    if (item2.IS_DONE) {
                        done ++;
                    }
                }
                item.progress = [done, total];
            }
        }
    }
}
