import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vc-project-list',
  templateUrl: './project.list.html'
})
export class ProjectListComponent implements OnInit { 
    constructor(private ActivatedRoute: ActivatedRoute) { }
    ngOnInit() {
        this.ActivatedRoute.data.subscribe(data => {
            console.log(data.projectList);
        })
    }
}
