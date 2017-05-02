import { Injectable } from '@angular/core';
import { VcHttpService } from '../../services/vc-http.service';
import { Router, Resolve, Route } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProjectDataService implements Resolve<any> {
    constructor(private http: VcHttpService, private router: Router) { }
    public resolve() {
        return this.http.get('http://localhost:8000/getprojectlist');
    }
}
