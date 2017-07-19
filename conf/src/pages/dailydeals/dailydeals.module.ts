import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailydealsPage } from './dailydeals';

@NgModule({
  declarations: [
    DailydealsPage,
  ],
  imports: [
    IonicPageModule.forChild(DailydealsPage),
  ],
  exports: [
    DailydealsPage
  ]
})
export class DailydealsPageModule {}
