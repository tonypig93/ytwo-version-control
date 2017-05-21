import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VcHttpService } from './services/vc-http.service';
import { ProfilesService } from './profiles/services/profiles.service';
import { VcGlobalComponentService } from './services/vc-global-component.service';

@Component({
  selector: 'vc-app',
  templateUrl: './app.html',
})
export class AppComponent implements OnInit  {
  thisYear: number;
  constructor(
    private router: Router,
    private ProfilesService: ProfilesService,
    private http: VcHttpService,
    private VcGlobalComponentService: VcGlobalComponentService) {
    let userInfo = this.ProfilesService.getUserInfo();
    if (userInfo) {
      this.http.setAuthHeader(userInfo.$hash);
    }
  }
  public isLoginPage() {
    return (this.router.url !== '/login') && (this.router.url !== '/');
  }
  ngOnInit() {
    this.thisYear = (new Date()).getFullYear();
  }
  showContact() {
    let modal = this.VcGlobalComponentService.infoModal;
    modal.modalTitle = 'Contact';
    modal.modalBody = 'Email: tony98370@qq.com';
    modal.showModal();
  }
 }
