import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeSessionsPage } from './liste-sessions';

@NgModule({
  declarations: [
    ListeSessionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeSessionsPage),
  ],
})
export class ListeSessionsPageModule {}
