import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent  {
    @Input() userInfo: any = {
        userName: '',
        password: ''
    };
    public showModal = false;
    public modalBody = 'Invalid user name or password.';
    constructor(private profilesService: ProfilesService, private router: Router) { }
    public login(): void {
        let self = this;
        this.profilesService.login(this.userInfo)
        .subscribe(data => {
            if (!data.error) {
                this.profilesService.setUserInfo(data.data);
                console.log('login successful');
                this.router.navigate(['/project/control', {outlets: {'detail': ['detail']}}]);
            } else {
                this.showModal = true;
                this.userInfo.password = '';
            }
        });
    }
 }
