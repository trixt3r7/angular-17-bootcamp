import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { Icons } from '../Icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'shared-syntax-highlight',
  standalone: true,
  imports: [CommonModule, HighlightModule, FontAwesomeModule],
  templateUrl: './syntax-highlight.component.html',
  styleUrl: './syntax-highlight.component.scss',
})
export class SyntaxHighlightComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) code!: string;
  @Input({ required: true }) language!: string;
  @Input() showLineNumbers: boolean = true; // default value set to true
  Icons = Icons;

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
}
