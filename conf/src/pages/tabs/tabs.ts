import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { DailydealsPage } from '../dailydeals/dailydeals';
import { MapPage } from '../map/map';
import { itemsPage } from '../items/items';
import { contactsListPage } from '../contacts-list/contacts-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab0Root: any = itemsPage;
  tab1Root: any = contactsListPage;
  tab2Root: any = DailydealsPage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex ;
  }

}
