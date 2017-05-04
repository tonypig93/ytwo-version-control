import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vc-group-management',
  templateUrl: './group.management.html'
})
export class GroupManagementComponent implements OnInit  {
    public management: any;
  constructor(private ActivatedRoute: ActivatedRoute) {}
    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => {
            this.management = data['management'];
        })
    }
}
