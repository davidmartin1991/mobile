import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';

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
import { PhonePage } from '../pages/phone/phone';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListeSessionsPage,
    ListeSpeakersPage,
    SessionPage,
    SpeakerPage,
    PhonePage,

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
    PhonePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
