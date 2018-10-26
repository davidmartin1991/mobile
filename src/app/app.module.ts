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
import { NotesPage } from '../pages/notes/notes';

import { HttpModule } from '@angular/http';
import { DataProvider } from '../providers/data/data';

import { AppPreferences } from '@ionic-native/app-preferences';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListeSessionsPage,
    ListeSpeakersPage,
    SessionPage,
    SpeakerPage,
    NotesPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpModule,
    HttpClientModule
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
    NotesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    AppPreferences
  ]
})
export class AppModule {}
