import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../../directives/highlight.directive';
import { ConfirmVisitDirective } from '../../../directives/confirm-visit.directive';
import { SyntaxHighlightComponent } from '../../../shared/syntax-highlight/syntax-highlight.component';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, HighlightDirective, ConfirmVisitDirective, SyntaxHighlightComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  highlightCode: string = `import { Directive, ElementRef, HostListener } from '@angular/core';
  @Directive({
    selector: '[appHighlight]',
    standalone: true
  })
  export class HighlightDirective {  
    constructor(private element: ElementRef) {
    }
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow');
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('');
    }
    private highlight(color: string) {
      this.element.nativeElement.style.backgroundColor = color;
    }
  }
  `;
  highlightTemplate: string = `<p appHighlight>Highlight me!</p>`;

  visitPipesPage() {
    location.href = '/pipes';
  }

  confirmVisitCode: string = `import { Directive, HostListener, Input } from '@angular/core';

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
  `;
  confirmVisitTemplate: string = `<button
  type="button"
  class="btn btn-primary text-white"
  [appConfirmVisit]="visitPipesPage">
  Visit Pipes Page
</button>`;

}
