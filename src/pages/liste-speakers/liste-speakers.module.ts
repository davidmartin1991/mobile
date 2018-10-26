import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeSpeakersPage } from './liste-speakers';

@NgModule({
  declarations: [
    ListeSpeakersPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeSpeakersPage),
  ],
})
export class ListeSpeakersPageModule {}
