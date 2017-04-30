import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
@Component({
  selector: 'vc-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent  {
    constructor(private profilesService: ProfilesService) {}
    @Input() userInfo: any = {
        userName: '',
        password: ''
    };
    public login():void {
        this.profilesService.login();
    }
 }