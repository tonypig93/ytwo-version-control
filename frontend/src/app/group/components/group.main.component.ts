import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'vc-group',
  templateUrl: './group.main.html',
  styleUrls: ['./group.css']
})
export class GroupMainComponent implements OnInit  {
  public groupList: any[];
  constructor(private ActivatedRoute: ActivatedRoute) {}
    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => {
            this.groupList = data['groupList'];
        })
    }
}
