import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListeSessionsPage } from '../liste-sessions/liste-sessions';
import { ListeSpeakersPage } from '../liste-speakers/liste-speakers';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  directToListSession () {
    this.navCtrl.push(ListeSessionsPage);
  }

  directToListSpeakers(){
    this.navCtrl.push(ListeSpeakersPage);
  }

}

