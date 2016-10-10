import { Component } from '@angular/core';


@Component({
  template: `
<ion-header>

  <ion-navbar>
    <ion-title>Tabs</ion-title>
  </ion-navbar>

</ion-header>


<ion-content>

  <!-- Icons below text -->
  <ion-tabs tabsLayout="icon-bottom" selectedIndex="1" color="primary">
    <ion-tab tabTitle="Recents" tabIcon="call" [root]="root" tabBadge="47" tabBadgeStyle="light"></ion-tab>
    <ion-tab tabTitle="Favorites" tabIcon="heart" [root]="root"></ion-tab>
    <ion-tab tabTitle="Settings" tabIcon="settings" [root]="root"></ion-tab>
  </ion-tabs>

</ion-content>

`
})
export class TabDemoPage {
  root = TabPage;
}


@Component({
  template: '<div>johnny utah</div>',
})
export class TabPage {}
