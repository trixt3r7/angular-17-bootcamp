import { SyntaxHighlight } from "../../../models/syntax-highlight.interface";

export class ComponentsCodeSnipptes
{
  static readonly loaderComponent: SyntaxHighlight[] = 
  [
    {
      title: 'app.component.html',
      language: 'xml',
      code: `<app-loader [isLoading]="true" [loadTimer]="2400" />`
    },
    {
      title: 'loader.component.ts',
      language: 'typescript',
      code: `import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = true;
  @Input() loadTimer = 3000;

  ngOnInit(): void {
    this.loaderTimer();
  }

  loaderTimer() {
    if (!this.isLoading) {
      return;
    }
    setInterval(() => {
      this.isLoading = false;
    }, this.loadTimer);
  }
}`
    },
    {
      title: 'loader.component.html',
      language: 'xml',
      code: `<div class="loader-overlay" *ngIf="isLoading">
<div class="loader-container">
  <div class="loader">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    <div class="bar4"></div>
    <div class="bar5"></div>
    <div class="bar6"></div>
  </div>
</div>
</div>`
    }
  ];
  static readonly topOfPageComponent: SyntaxHighlight[] = 
  [
    {
      title: 'app.component.html',
      language: 'xml',
      code: `<app-top-of-page anchorUrl="/challenge-components" />`
    },
    {
      title: 'top-of-page.component.ts',
      language: 'typescript',
      code: `import { Component, Input, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../../shared/Icons';

@Component({
  selector: 'app-top-of-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-of-page.component.html',
  styles: []
})
export class TopOfPageComponent {
  @Input() anchorUrl!: string;
  anchorId: string = '#top-of-page';
  showTopOfPage: boolean = false;
  Icons = Icons;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll') onScrollEvent($event: any) {
    if (this.viewportScroller.getScrollPosition()[1] > 600) {
      this.showTopOfPage = true;
    } else {
      this.showTopOfPage = false;
    }
  }
}`
    },
    {
      title: 'top-of-page.component.html',
      language: 'xml',
      code: `<div id="top-of-page"></div>
@if(showTopOfPage === true)
{
  <a [href]="anchorUrl + anchorId" type="button" class="btn btn-primary text-white position-fixed top-0 end-0 me-2 rounded-0 rounded-bottom z-3">
    <fa-icon [icon]="Icons.chevronUp"></fa-icon> Top
  </a>
}`
    }
  ];
  static readonly accordionItemsComponent: SyntaxHighlight[] = 
  [
    {
      title: 'app.component.html',
      language: 'xml',
      code: `<app-accordion-items [items]="accordionItems" />`
    },
    {
      title: 'app.component.ts',
      language: 'typescript',
      code: `accordionItems: AccordionItem[] = [
  { title: 'Accordion Item #1', content: 'Content of accordion #1', isExpanded: true },
  { title: 'Accordion Item #2', content: 'Content of accordion #2', isExpanded: false },
  { title: 'Accordion Item #3', content: 'Content of accordion #3', isExpanded: false }
];`
    },
    {
      title: 'accordion-items.component.ts',
      language: 'typescript',
      code: `import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icons } from '../../../shared/Icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-accordion-items',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './accordion-items.component.html',
  styleUrl: './accordion-items.component.scss'
})
export class AccordionItemsComponent {
  @Input() items: AccordionItem[] = [{ title: 'title #1', content: 'content of accordion #1', isExpanded: true }];

  Icons = Icons;

  toggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }
}

export interface AccordionItem {
  title: string;
  content: string;
  isExpanded: boolean;
}`
    },
    {
      title: 'accordion-items.component.html',
      language: 'xml',
      code: `<div class="accordion">
<div class="accordion-item" *ngFor="let item of items">
    <div class="accordion-item-header" (click)="toggle(item)">
        <span class="accordion-item-header-title">{{ item.title }}</span>
        <span class="accordion-item-header-icon">
            <fa-icon [icon]="item.isExpanded 
                      ? Icons.chevronUp 
                      : Icons.chevronDown">
            </fa-icon>
        </span>            
    </div>
    <div class="accordion-item-content" 
          [ngClass]="{ 'accordion-item-content--open': item.isExpanded }">
        <p>{{item.content}}</p>
    </div>
</div>
</div>`
    }
  ];
}
