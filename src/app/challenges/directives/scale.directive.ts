import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScale]',
  standalone: true
})
export class ScaleDirective {
  constructor(private element: ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.transition = 'transform 0.3s ease';
    this.element.nativeElement.style.transform = 'scale(1.25)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.transition = 'transform 0.2s ease';
    this.element.nativeElement.style.transform = 'scale(1)';
  }
}
