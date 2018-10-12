import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeSessionsPage } from './liste-sessions';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ListeSessionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeSessionsPage),
    ComponentsModule,
  ],
})
export class ListeSessionsPageModule {}
