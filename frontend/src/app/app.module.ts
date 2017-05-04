import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent }  from './app.component';
import { WidgetModule } from './widgets/widget.module';

import { ProfilesModule } from './profiles/profiles.module';

import { VcHttpService } from './services/vc-http.service';
import { HttpModule } from '@angular/http';
import { VcPlatformService } from './services/vc-platform.service';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, ProfilesModule, HttpModule, WidgetModule ],
  declarations: [ AppComponent ],
  providers:    [ VcHttpService, VcPlatformService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
