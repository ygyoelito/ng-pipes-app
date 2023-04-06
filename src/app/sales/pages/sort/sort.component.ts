import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [],
})
export class SortComponent {
  capitalized: boolean = true;
  
  orderBy: string = '';
  upDown: boolean = true;
  
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green,
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red,
    },
    {
      name: 'Green Lantern',
      fly: true,
      color: Color.green,
    },
  ];

  changeCapitalized() {
    this.capitalized = !this.capitalized;
  }

  switchOrder(term: string, upDown:boolean) {
    this.orderBy = term;
    this.upDown = !upDown;
  }
}
