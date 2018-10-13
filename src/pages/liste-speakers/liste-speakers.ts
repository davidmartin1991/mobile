import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SpeakerPage } from '../speaker/speaker';

/**
 * Generated class for the ListeSpeakersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-speakers',
  templateUrl: 'liste-speakers.html',
})
export class ListeSpeakersPage {
  speakers:any
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("https://devfest-nantes-2018-api.cleverapps.io/speakers").subscribe(data => {
     this.speakers = Object.keys(data).map(i => data[i]);
   }); 
 }

 directToSpeaker(speaker:any){
   console.debug("https://devfest.gdgnantes.com"+speaker.photoUrl);
   this.navCtrl.push(SpeakerPage,{
     id: speaker.id,
     name: speaker.name,
     photoUrl: speaker.photoUrl,
     bio: speaker.bio
   })
 }

}
