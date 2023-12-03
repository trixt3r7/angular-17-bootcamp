import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter',
  standalone: true
})
export class CreditCardFormatterPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 16 || isNaN(Number(value))) {
      return 'Invalid credit card number';
    }
    
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = value.replace(/[^\d]/g, '')

    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter(group => !!group).join('-')
    )
  }
}
