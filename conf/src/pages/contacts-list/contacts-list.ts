import { Component, ViewChild } from '@angular/core';


import { ActionSheet, ActionSheetController, Config} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AlertController, App, FabContainer, ItemSliding, List, ModalController, NavController, ToastController, LoadingController, Refresher } from 'ionic-angular';

/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

import { ContactsDetailPage } from '../contacts-detail/contacts-detail';


@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts-list.html'
})
export class contactsListPage {
  // the list is a child of the items page
  // @ViewChild('itemsList') gets a reference to the list
  // with the variable #itemsList, `read: List` tells it to return
  // the List and not a reference to the element
  @ViewChild('contactsList', { read: List }) contactsList: List;

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownItems: any = [];
  groups: any = [];
  confDate: string;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public confData: ConferenceData,
    public user: UserData,
  ) {}

  ionViewDidLoad() {
    this.app.setTitle('contacts');
    this.updatecontacts();
  }

  updatecontacts() {
    // Close any open sliding contacts when the contacts updates
    this.contactsList && this.contactsList.closeSlidingItems();

    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownContacts = data.shownContacts;
      this.groups = data.groups;
    });
  }



  goTContactsDetail(contactsData: any) {
    // go to the Contact detail page
    // and pass in the Contact data
    this.navCtrl.push(ContactsDetailPage, {
      name: contactsData.name,
      Contact: contactsData
    });
  }

  addFavorite(slidingItem: ItemSliding, contactsData: any) {

    if (this.user.hasFavorite(contactsData.name)) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      this.removeFavorite(slidingItem, contactsData, 'Favorite already added');
    } else {
      // remember this Contact as a user favorite
      this.user.addFavorite(contactsData.name);

      // create an alert instance
      let alert = this.alertCtrl.create({
        title: 'Favorite Added',
        buttons: [{
          text: 'OK',
          handler: () => {
            // close the sliding item
            slidingItem.close();
          }
        }]
      });
      // now present the alert on top of all other content
      alert.present();
    }

  }

  removeFavorite(slidingItem: ItemSliding, contactsData: any, title: string) {
    let alert = this.alertCtrl.create({
      title: title,
      message: 'Would you like to remove this contact from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the contact
            // close the sliding contact and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this Contact from their favorites
            this.user.removeFavorite(contactsData.name);
            this.updatecontacts();

            // close the sliding contact and hide the option buttons
            slidingItem.close();
          }
        }
      ]
    });
    // now present the alert on top of all other content
    alert.present();
  }

  openSocial(network: string, fab: FabContainer) {
    let loading = this.loadingCtrl.create({
      content: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    loading.onWillDismiss(() => {
      fab.close();
    });
    loading.present();
  }

  doRefresh(refresher: Refresher) {
    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownContacts = data.shownContacts;
      this.groups = data.groups;

      // simulate a network request that would take longer
      // than just pulling from out local json file
      setTimeout(() => {
        refresher.complete();

        const toast = this.toastCtrl.create({
          message: 'Contacts have been updated.',
          duration: 3000
        });
        toast.present();
      }, 1000);
    });
  }
}
