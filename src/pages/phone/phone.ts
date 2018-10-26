import { Component } from '@angular/core';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone',
  templateUrl: 'phone.html',
})
export class PhonePage {

  platform: any 
  version: any
  uuid: any
  model: any
  connection: any

  constructor(public navCtrl: NavController, public navParams: NavParams,private device: Device,private network: Network) {
    this.uuid = device.uuid;
    this.platform= device.platform;
    this.version= device.version;
    this.model= device.model;
    this.connection= network.type;
  }

}
