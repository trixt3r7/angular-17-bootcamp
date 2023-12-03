import { Component, Input } from '@angular/core';
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
}