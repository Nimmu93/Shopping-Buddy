import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { SessionDetailPage } from '../session-detail/session-detail';

@Component({
  selector: 'page-contacts-detail',
  templateUrl: 'contacts-detail.html'
})
export class ContactsDetailPage {
  contacts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contacts = this.navParams.data.contacts;
  }

  goToSessionDetail(session: any) {
    this.navCtrl.push(SessionDetailPage, { 
      name: session.name,
      session: session
    });
  }
}
