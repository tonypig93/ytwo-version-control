import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vc-app',
  template: `<nav-bar *ngIf="isLoginPage()"></nav-bar>
  <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit  {
  constructor(private router: Router) {}
  public isLoginPage() {
    return (this.router.url !== '/login') && (this.router.url !== '/');
  }
  ngOnInit() {}
 }
