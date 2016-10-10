import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TabContent } from '../pages/tabs-page/tab-content';
import { ScratchPage } from '../pages/scratch-page/scratch';
import { TabDemoPage, TabPage } from '../pages/tab-demo/tab_demo';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    TabsPage,
    TabContent,
    ScratchPage,
    TabDemoPage,
    TabPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    TabsPage,
    TabContent,
    ScratchPage,
    TabDemoPage,
    TabPage,
  ],
  providers: []
})
export class AppModule {}
