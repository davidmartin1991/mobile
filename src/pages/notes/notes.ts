import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private appPreferences: AppPreferences) {
    this.id = navParams.get('id')
    this.title = navParams.get('title')
  }

  ionViewDidLoad() {
    this.note = this.appPreferences.fetch(this.id)
  }

  saveNote() {
    let note = this.note
    let id = this.id
    this.appPreferences.store(id, note);
  }

}
