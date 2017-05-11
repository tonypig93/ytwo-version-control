import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'tabs-basic',
  templateUrl: './tabs-basic.html',
  styleUrls: ['./tabs.css']
})
export class TabsBasicComponent {

  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  public alertMe(): void {
    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  }

  selectTab(tab_id: number) {
      this.staticTabs.tabs[tab_id].active = true;
  }

  disableEnable() {
    this.staticTabs.tabs[2].disabled = ! this.staticTabs.tabs[2].disabled
  }
}
