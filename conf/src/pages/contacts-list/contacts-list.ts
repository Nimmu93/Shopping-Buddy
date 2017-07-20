import { Component } from '@angular/core';

import { ActionSheet, ActionSheetController, Config, NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ConferenceData } from '../../providers/conference-data';

import { SessionDetailPage } from '../session-detail/session-detail';
import { ContactsDetailPage } from '../contacts-detail/contacts-detail';

@Component({
  selector: 'page-contacts-list',
  templateUrl: 'contacts-list.html'
})
export class contactsListPage {
  actionSheet: ActionSheet;
  contacts: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public confData: ConferenceData,
    public config: Config,
    public inAppBrowser: InAppBrowser
  ) { }

  ionViewDidLoad() {
    this.confData.getcontacts().subscribe((contacts: any[]) => {
      this.contacts = contacts;
    });
  }

  goToSessionDetail(session: any) {
    this.navCtrl.push(SessionDetailPage, {
      name: session.name,
      session: session
    });
  }

  goTocontactsDetail(contactsName: any) {
    this.navCtrl.push(ContactsDetailPage, {
      contacts: contactsName,
      name: contactsName.name
    });
  }

  opencontactsShare(contacts: any) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share ' + contacts.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            if ((window as any)['cordova'] && (window as any)['cordova'].plugins.clipboard) {
              (window as any)['cordova'].plugins.clipboard.copy('https://twitter.com/' + contacts.twitter);
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }

  openContact(contacts: any) {
    let mode = this.config.get('mode');

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact ' + contacts.name,
      buttons: [
        {
          text: `Email ( ${contacts.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + contacts.email);
          }
        },
        {
          text: `Call ( ${contacts.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + contacts.phone);
          }
        }
      ]
    });

    actionSheet.present();
  }
}
