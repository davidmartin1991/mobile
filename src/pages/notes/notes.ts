import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
  id: any
  title: any
  note: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.id = navParams.get('id')
    this.title = navParams.get('title')
  }

  ionViewDidLoad() {
    this.storage.get(this.id).then(value => this.note = value);
  }

  saveNote(aNote) {
    this.note = aNote;
    this.storage.set(this.id,aNote);
  }

}
