import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SessionPage } from '../session/session';

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
export class ListeSessionsPage {
  sessions:any

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("https://devfest-nantes-2018-api.cleverapps.io/sessions").subscribe(data => {
     this.sessions = Object.keys(data).map(i => data[i]);
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
