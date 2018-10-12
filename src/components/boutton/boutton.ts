import { Component } from '@angular/core';

/**
 * Generated class for the BouttonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'boutton',
  templateUrl: 'boutton.html'
})
export class BouttonComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
