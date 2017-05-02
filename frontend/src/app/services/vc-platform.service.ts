import { Injectable } from '@angular/core';
import { VcHttpService } from './vc-http.service';
import { ProfilesService } from '../profiles/services/profiles.service';
import { Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VcPlatformService implements CanLoad {
    constructor(private ProfilesService: ProfilesService, private http: VcHttpService, private router: Router) { }
    public canLoad(): Observable<any> {
        let userInfo = this.ProfilesService.getUserInfo();
        return this.http.post('http://localhost:8000/checkIdentity', userInfo)
        .map(res => {
            if (res) {
                return true;
            } else {
                this.router.navigate(['/login']);
                return false;
            }
        });
    }
}
