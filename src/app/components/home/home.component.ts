import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icons } from '../../shared/Icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  Icons = Icons;
  guideCards: GuideCard[] = [];

  constructor() 
  {
    this.guideCards = [
      { title: 'Pipes', description: 'Use pipes to transform strings, currency amounts, dates, and other data for display.', link: '/pipes' },
      { title: 'Directives', description: 'Use Angular\'s built-in directives to manage forms, lists, styles, and what users see.', link: '/directives' },
      { title: 'Signals', description: 'Granularly tracks how and where your state is used throughout an application.', link: '/signals' }
      ];


  }

}

export interface GuideCard {
  title: string;
  description: string;
  link: string;
}
