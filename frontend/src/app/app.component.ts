import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VcHttpService } from './services/vc-http.service';
import { ProfilesService } from './profiles/services/profiles.service';

@Component({
  selector: 'vc-app',
  template: `<nav-bar *ngIf="isLoginPage()"></nav-bar>
  <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit  {
  constructor(private router: Router, private ProfilesService: ProfilesService, private http: VcHttpService) {
    let userInfo = this.ProfilesService.getUserInfo();
    if (userInfo) {
      this.http.setAuthHeader(userInfo.$hash);
    }
  }
  public isLoginPage() {
    return (this.router.url !== '/login') && (this.router.url !== '/');
  }
  ngOnInit() {}
 }
