import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleDirective } from '../../directives/scale.directive';
import { SyntaxHighlightComponent } from '../../../shared/syntax-highlight/syntax-highlight.component';

@Component({
  selector: 'app-directives-challenge',
  standalone: true,
  imports: [CommonModule, SyntaxHighlightComponent, ScaleDirective],
  templateUrl: './directives-challenge.component.html',
  styleUrl: './directives-challenge.component.scss'
})
export class DirectivesChallengeComponent {

  scaleDirectiveCode = `import { Directive, ElementRef, HostListener } from '@angular/core';
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
}`;

  scaleTemplate = `<img appScale class="p-3" src="../../../../assets/angular-logo.svg" alt="" width="200px">`;
}
