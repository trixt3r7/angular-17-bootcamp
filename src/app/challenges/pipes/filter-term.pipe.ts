import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTerm',
  standalone: true
})
export class FilterTermPipe implements PipeTransform {
  transform(array: string[], term: string): string[] {
    return array.filter(item => item.toLowerCase().includes(term.toLowerCase()));
  }
}
