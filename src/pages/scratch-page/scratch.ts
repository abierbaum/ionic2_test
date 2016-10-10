import { Component } from '@angular/core';


@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Hello Ionic Page</ion-title>
  </ion-navbar>
</ion-header>


<ion-content padding>

  <h3>Welcome to your scratch page</h3>

</ion-content>
`
})
export class ScratchPage {
  constructor() {

  }
}
