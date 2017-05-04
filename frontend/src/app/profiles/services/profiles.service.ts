import { Injectable } from '@angular/core';
import { VcHttpService } from '../../services/vc-http.service';
import { Observable } from 'rxjs/Rx';
import { CanActivate, Router } from '@angular/router';

let encrypt = window['CryptoJS'].MD5;
export interface IUserInfo {
    userName: string,
    ID: number,
    expireTime: number,
    $hash: string
};

@Injectable()
export class ProfilesService {
    private userInfo: any = null;
    constructor(private http: VcHttpService) { }
    public login(account: any): Observable<any> {
        let params = account;
        params.password = encrypt(params.password).toString();
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
    public setUserInfo(userInfo: IUserInfo) {
        this.userInfo = userInfo;
        this.saveUserInfo();
    }
    public getUserInfo(): IUserInfo {
        return this.userInfo ? this.userInfo : this.getUserInfoFromStorage();
    }
    public saveUserInfo() {
        localStorage.setItem('userInfo', JSON.stringify({
            userName: this.userInfo.userName,
            $hash: this.userInfo.$hash,
            expireTime: this.userInfo.expireTime
        }));
    }
    public getUserInfoFromStorage() {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        return userInfo ? userInfo : null;
    }
    public clearUserInfo() {
        this.userInfo = null;
        localStorage.clear();
    }
}

