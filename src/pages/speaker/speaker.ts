import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpeakerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-speaker',
  templateUrl: 'speaker.html',
})
export class SpeakerPage {
  id: any
  name: any
  photoUrl: any
  bio: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('id');
    this.name = navParams.get('name');
    this.photoUrl = "https://devfest.gdgnantes.com/"+navParams.get('photoUrl');
    this.bio = navParams.get('bio');
  }

}
