import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperpipe',
})
export class UpperPipe implements PipeTransform {
  transform(value: string, flag: boolean = true): string {
    return flag ? value.toUpperCase() : value.toLowerCase();
  }
}
