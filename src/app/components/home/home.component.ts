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
  guideCards: HomeCard[] = [];
  challengeCards: HomeCard[] = [];

  constructor() 
  {
    this.guideCards = [
      { title: 'Pipes', description: 'Use pipes to transform strings, currency amounts, dates, and other data for display.', link: '/pipes' },
      { title: 'Deferrable Views', description: 'Deferrable views can be used in component template to defer the loading of select dependencies within that template.', link: '/defer' },
      { title: 'Directives', description: 'Use Angular\'s built-in directives to manage forms, lists, styles, and what users see.', link: '/directives' },
      { title: 'Signals', description: 'Granularly tracks how and where your state is used throughout an application.', link: '/signals' },
      { title: 'SSR', description: 'Angular SSR...', link: '/ssr' }
      ];

      this.challengeCards = [
        { title: 'Pipes', description: 'Pipes are a great way to format data in your templates.', link: '/challenge-pipes' },
        { title: 'Directives', description: 'Directives are a great way to manipulate the DOM.', link: '/challenge-directives' }
      ];
  }

}

export interface HomeCard {
  title: string;
  description: string;
  link: string;
}
