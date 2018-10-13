import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  speakers: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('id');
    this.title = navParams.get('title');
    this.description = navParams.get('description');
    this.speakers = navParams.get('speakers');
  }

/*   ngOnInit(): void{
    console.debug(this.session.title);
  } */

}
