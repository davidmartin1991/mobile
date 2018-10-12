import { Component } from '@angular/core';

/**
 * Generated class for the ListeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'liste',
  templateUrl: 'liste.html'
})
export class ListeComponent {

  text: string;

  constructor() {
    console.log('Hello ListeComponent Component');
    this.text = 'Hello World';
  }

}
