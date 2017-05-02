import { Injectable } from '@angular/core';
import { VcHttpService } from '../../services/vc-http.service';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class ProfilesService {
    private userInfo: any = null;
    constructor(private http: VcHttpService) { }
    public login(userInfo: any): Observable<any> {
        let params = userInfo;
        return this.http.post('http://localhost:8000/login', params);
        // .subscribe(function (data) {
        //     if (data) {
        //         console.log('login successful');
        //         userInfo = data;
        //         return true;
        //     } else {
        //         return false;
        //     }
        // })
    }
    public setUserInfo(userInfo: any) {
        this.userInfo = userInfo;
    }
    public getUserInfo() {
        return this.userInfo;
    }
}
