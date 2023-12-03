import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { SyntaxHighlightComponent } from '../../../shared/syntax-highlight/syntax-highlight.component';
import { TopOfPageComponent } from '../top-of-page/top-of-page.component';
import { ShortcutsComponent } from '../../../shared/shortcuts/shortcuts.component';
import { AccordionItemsComponent } from '../accordion-items/accordion-items.component';
import { AccordionItem } from '../accordion-items/accordion-items.component';
import { ComponentsCodeSnipptes } from './components-code-snippets';

@Component({
  selector: 'app-components-challenge',
  standalone: true,
  imports: [CommonModule, SyntaxHighlightComponent, LoaderComponent, TopOfPageComponent, ShortcutsComponent
  , AccordionItemsComponent],
  templateUrl: './components-challenge.component.html',
  styleUrl: './components-challenge.component.scss'
})
export class ComponentsChallengeComponent {
  codeSnittets = ComponentsCodeSnipptes;

  anchorLinks: any[] = [
    {anchor: '/challenge-components#accordion', title: 'Accordion'},
    {anchor: '/challenge-components#loader', title: 'Loader'},
    {anchor: '/challenge-components#topofpage', title: 'Top of Page'}
  ];

  accordionItemsComponent = this.codeSnittets.accordionItemsComponent;
  accordionItems: AccordionItem[] = [
    { title: 'Accordion Item #1', content: 'Content of accordion #1', isExpanded: true },
    { title: 'Accordion Item #2', content: 'Content of accordion #2', isExpanded: false },
    { title: 'Accordion Item #3', content: 'Content of accordion #3', isExpanded: false }
  ];

  loaderComponent = this.codeSnittets.loaderComponent;
  
  topOfPageComponent = this.codeSnittets.topOfPageComponent;}
