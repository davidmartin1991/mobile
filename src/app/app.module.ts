import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module'
import { ListeSessionsPage } from '../pages/liste-sessions/liste-sessions';
import { ListeSpeakersPage } from '../pages/liste-speakers/liste-speakers';
import { SessionPage } from '../pages/session/session';
import { SpeakerPage } from '../pages/speaker/speaker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListeSessionsPage,
    ListeSpeakersPage,
    SessionPage,
    SpeakerPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListeSessionsPage,
    ListeSpeakersPage,
    SessionPage,
    SpeakerPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
