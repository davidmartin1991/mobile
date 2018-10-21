import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { DataProvider } from '../../providers/data/data';
import {Observable} from 'rxjs/Observable';
import { Session } from '../../models/models';

/**
 * Generated class for the ListeSessionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-sessions',
  templateUrl: 'liste-sessions.html',
})
export class ListeSessionsPage implements OnInit {

  sessions:Session[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider) {
    
  }
  ngOnInit() {
    console.log('ionViewDidLoad ListeSessionsPage');
   this.data.fetch("https://devfest-nantes-2018-api.cleverapps.io/sessions").subscribe(sessions => {
      this.sessions = sessions; 
  });
    
  }

  ionViewDidLoad() {
   
  }

}
