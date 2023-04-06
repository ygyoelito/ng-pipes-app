import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sortpipe',
})
export class SortPipe implements PipeTransform {
  transform(heroes: Heroe[], orderBy: string = '', upDown:boolean): Heroe[] {
    switch (orderBy) {
      case 'name':
        return (upDown) ? heroes.sort((a, b) => (a.name > b.name ? 1 : -1)) : heroes.sort((a, b) => (a.name < b.name ? 1 : -1));         
      case 'fly':
        return (upDown) ? heroes.sort((a, b) => (a.fly > b.fly ? 1 : -1)) : heroes.sort((a, b) => (a.fly < b.fly ? 1 : -1));
      case 'color':
        return (upDown) ? heroes.sort((a, b) => (a.color > b.color ? 1 : -1)) : heroes.sort((a, b) => (a.color < b.color ? 1 : -1));
      default:
        return heroes;
    }
  }
}
