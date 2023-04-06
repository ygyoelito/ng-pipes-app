import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  nameLower: string = 'yoel';
  nameUpper: string = 'DAVID';
  nameFull: string = 'javier gonzalez';

  date: Date = new Date(); //today... April 4 :)
}
