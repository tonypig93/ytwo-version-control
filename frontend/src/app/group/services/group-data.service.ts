import { Injectable } from '@angular/core';
import { VcHttpService } from '../../services/vc-http.service';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GroupDataService implements Resolve<any> {
    constructor(private http: VcHttpService, private router: Router) { }
    public resolve() {
        return this.http.get('http://localhost:8000/group/list')
        .map(res => res.data);
    }
}
@Injectable()
export class GroupMangementDataService implements Resolve<any> {
    constructor(private http: VcHttpService, private router: Router) { }
    public resolve(route: ActivatedRouteSnapshot) {
        return this.http.get('http://localhost:8000/group/manage?id=' + route.params['id'])
        .map(res => res.data);
    }
}
