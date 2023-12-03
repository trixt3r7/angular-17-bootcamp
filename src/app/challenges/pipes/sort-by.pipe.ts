import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  standalone: true
})
export class SortByPipe implements PipeTransform {
  transform(value: string[] | string, direction?: string): string[] {
    if(!Array.isArray(value)) {
      throw new Error('value is not an array. SortBy Pipe require an array.');
    }
    return (direction === 'desc') ? value.sort().reverse() : value.sort();
  }
}
