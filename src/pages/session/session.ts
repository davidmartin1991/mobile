import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SpeakerPage } from '../speaker/speaker';
import { NotesPage } from '../notes/notes';

/**
 * Generated class for the SessionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-session',
  templateUrl: 'session.html',
})
export class SessionPage {
  id: any
  title: any
  description: any
  speakersId: Array<Number>
  speakers: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient) {
    this.id = navParams.get('id');
    this.title = navParams.get('title');
    this.description = navParams.get('description');
    this.speakersId = navParams.get('speakers');
  }

  ngOnInit(): void {
    this.http.get("https://devfest-nantes-2018-api.cleverapps.io/speakers").subscribe(data => {
     this.speakers = Object.keys(data).filter(i=> this.speakersId == undefined ? false : this.speakersId.indexOf(Number.parseInt(i))>-1).map(i => data[i]);
   }); 
 }

 directToSpeaker(speaker: any){
  this.navCtrl.push(SpeakerPage,{
      id: speaker.id,
      name: speaker.name,
      photoUrl: speaker.photoUrl,
      bio: speaker.bio
 })
}

directToNote(speaker: any){
  this.navCtrl.push(NotesPage,{
      id: this.id,
      title : this.title
 })
}

}
