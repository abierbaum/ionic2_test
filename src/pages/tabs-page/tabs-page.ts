import { Component } from '@angular/core';

import {
   NavController,
} from 'ionic-angular';

import {
   TabContent,
} from './tab-content';


@Component({
   templateUrl: 'tabs-page.html',
})
export class TabsPage {
   navCtrl: NavController;

   tabCmp: TabContent;

   tabOne = {name: 'Tab 1'};
   tabTwo = {name: 'Tab 2'};
   tabThee = {name: 'Tab 3'};

   constructor(navCtrl: NavController) {
      this.navCtrl = navCtrl;
   }
}
