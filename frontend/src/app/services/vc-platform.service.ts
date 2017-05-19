import { Injectable } from '@angular/core';
import { VcHttpService } from './vc-http.service';
import { ProfilesService } from '../profiles/services/profiles.service';
import { Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VcPlatformService implements CanLoad {
    constructor(private ProfilesService: ProfilesService, private http: VcHttpService, private router: Router) { }
    public canLoad(): Observable<any> {
        let userInfo = this.ProfilesService.getUserInfo();
        if (!userInfo) {
            return Observable.create((observer: any) => {
                this.router.navigate(['/login']);
                observer.next(false);
                observer.complete();
            });
        }
        return this.http.post('http://localhost:8000/checkIdentity', {})
        .map(res => {
            if (!res.error) {
                return true;
            } else {
                this.ProfilesService.clearUserInfo();
                this.router.navigate(['/login']);
                return false;
            }
        });
    }
}
