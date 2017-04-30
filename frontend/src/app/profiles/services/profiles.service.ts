import { Injectable } from '@angular/core';
import { VcHttpService } from '../../services/vc-http.service';

@Injectable()
export class ProfilesService {
    constructor(private http: VcHttpService) { }
    private userInfo:any = {};
    public login():void {
        this.http.post('http://localhost:8000/login')
        .subscribe(function (data) {
            if(data) {

            } else {
                
            }
        })
    }
}