import { Component } from '@angular/core';

import {
   NavParams,
} from 'ionic-angular';

@Component({
   templateUrl: 'tab-content.html',
})
export class TabContent {
   name: string = '';

   constructor(navParams: NavParams) {
      this.name = navParams.get('name');
   }
}
