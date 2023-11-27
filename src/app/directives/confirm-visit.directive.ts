import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmVisit]',
  standalone: true
})
export class ConfirmVisitDirective {
  constructor() { }
  @Input() appConfirmVisit = () => {};
  
  @HostListener('click', ['$event']) 
  confirmVisit() {
    const confirmed = window.confirm('Are you sure you want to continue?');
    if(confirmed) {
      this.appConfirmVisit();
    }
  }
}
