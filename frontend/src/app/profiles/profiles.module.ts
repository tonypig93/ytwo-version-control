import { NgModule }      from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { LoginComponent } from './components/login.component';
import { AboutComponent } from './components/about.component';
import { ProfilesService } from './services/profiles.service';

@NgModule({
    imports:      [ CommonModule, FormsModule, ProfilesRoutingModule ],
    declarations: [ LoginComponent, AboutComponent ],
    providers: [ ProfilesService ]
})
export class ProfilesModule { }