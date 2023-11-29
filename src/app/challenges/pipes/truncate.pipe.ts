import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(text: string, length: number = 30, fullWord?: boolean): string {
    if(fullWord && text.indexOf(' ', length) !== -1)
    {
      return text.slice(0, text.indexOf(' ', length)) + '...' ;
    }
    else if (!fullWord && text.length > length) {
      return text.slice(0, length) + '...';
    }
    return text;
  }
}
