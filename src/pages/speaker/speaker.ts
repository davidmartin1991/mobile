import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SessionPage } from '../session/session';

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
  sessions: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.id = navParams.get('id');
    this.name = navParams.get('name');
    this.photoUrl = "https://devfest.gdgnantes.com/"+navParams.get('photoUrl');
    this.bio = navParams.get('bio');
  }

  ngOnInit(): void {
    this.http.get("https://devfest-nantes-2018-api.cleverapps.io/sessions").subscribe(data => {
     this.sessions = Object.keys(data).map(i => data[i]).filter(session=> session.speakers == undefined ? false : session.speakers.indexOf(Number.parseInt(this.id))>-1);
   }); 
 }

 directToSession(session: any){
  this.navCtrl.push(SessionPage,{
    id: session.id,
    title: session.title,
    description: session.description,
    speakers: session.speakers == undefined ? undefined : Array.from(session.speakers)
  });
}

}
