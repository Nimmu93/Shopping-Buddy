import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { itemsPage } from '../pages/items/items';
import { itemsFilterPage } from '../pages/items-filter/items-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { ContactsDetailPage } from '../pages/contacts-detail/contacts-detail';
import { contactsListPage } from '../pages/contacts-list/contacts-list';
import { TabsPage } from '../pages/tabs/tabs';
import { SupportPage } from '../pages/support/support';
import { DailydealsPage } from '../pages/dailydeals/dailydeals';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    itemsPage,
    itemsFilterPage,
    SessionDetailPage,
    SignupPage,
    ContactsDetailPage,
    contactsListPage,
    TabsPage,
    SupportPage,
    DailydealsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: itemsPage, name: 'items', segment: 'items' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:name' },
        { component: itemsFilterPage, name: 'itemsFilter', segment: 'itemsFilter' },
        { component: contactsListPage, name: 'contactsList', segment: 'contactsList' },
        { component: ContactsDetailPage, name: 'contactsDetail', segment: 'contactsDetail/:name' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: DailydealsPage, name: 'Dailydeals', segment: 'deals' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    itemsPage,
    itemsFilterPage,
    SessionDetailPage,
    SignupPage,
    ContactsDetailPage,
    contactsListPage,
    TabsPage,
    SupportPage,
    DailydealsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
