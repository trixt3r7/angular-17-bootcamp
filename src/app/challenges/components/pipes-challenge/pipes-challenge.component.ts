import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyntaxHighlightComponent } from '../../../shared/syntax-highlight/syntax-highlight.component';
import { TopOfPageComponent } from '../top-of-page/top-of-page.component';
import { ShortcutsComponent } from '../../../shared/shortcuts/shortcuts.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { FilterTermPipe } from '../../pipes/filter-term.pipe';
import { SortByPipe } from '../../pipes/sort-by.pipe';
import { CreditCardFormatterPipe } from '../../pipes/credit-card-formatter.pipe';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../../shared/Icons';

@Component({
  selector: 'app-pipes-challenge',
  standalone: true,
  imports: [CommonModule, FormsModule, SyntaxHighlightComponent, TopOfPageComponent, FontAwesomeModule,
            ShortcutsComponent,
            TruncatePipe, FilterTermPipe, SortByPipe, CreditCardFormatterPipe],
  templateUrl: './pipes-challenge.component.html',
  styleUrl: './pipes-challenge.component.scss'
})
export class PipesChallengeComponent {

  Icons = Icons;
  anchorLinks: any[] = [
    {anchor: '/challenge-pipes#truncate', title: 'Truncate'},
    {anchor: '/challenge-pipes#filterterm', title: 'Filter Term'},
    {anchor: '/challenge-pipes#sortby', title: 'Sort By'},
    {anchor: '/challenge-pipes#creditcardformatter', title: 'Credit Card Formatter'}
  ];

  // Truncate ===========================================================
  truncateString = 'This is a long string that will be truncated unless the length value is longer than the sentence. Let\'s see.';
  // truncateString = 'This is a long string that will be truncated';
  truncatePipeCode = `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(text: string, length: number = 30, fullWord?: boolean): string {
    if(fullWord && text.indexOf(' ', length) !== -1)
    {
      return text.slice(0, text.indexOf(' ', length)) + '...' ;
    }
    else if (!fullWord && text.length > length) {
      return text.slice(0, length) + '...';
    }
    return text;
  }
}`;
  truncateTemplate = `<p>Truncated string (no arguments): {{ truncateString | truncate }}</p>
<p>Truncated string (40): {{ truncateString | truncate: 40 }}</p>
<p>Truncated string (40 : true): {{ truncateString | truncate: 40 : true }}</p>`;

  // Filter term ===========================================================
  searchTerm = '';
  filterTermList = ['Leon', 'Alexander', 'Oscar', 'Elias', 'Theodor', 'Viktor', 'Alexander', 'Oscar', 'Elias', 'Theodor', 'Viktor', 'Kevin'];
  
  filterTermPipeCode = `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTerm',
  standalone: true
})
export class FilterTermPipe implements PipeTransform {
  transform(array: string[], term: string): string[] {
    return array.filter(item => item.toLowerCase().includes(term.toLowerCase()));
  }
}
`;
  filterTermTemplate = `<input type="text" class="form-control" [(ngModel)]="searchTerm">
{{ filterTermList | filterTerm: searchTerm }}

<ul>
  @for(name of filterTermList | filterTerm: searchTerm; track name)
  {
      <li><code>{{ name }}</code></li>
  }
</ul>`;

  filterTermCode = `searchTerm = '';
  filterTermList = ['Leon', 'Alexander', 'Oscar', 'Elias', 'Theodor', 'Viktor', 'Alexander', 'Oscar', 'Elias', 'Theodor', 'Viktor', 'Kevin'];`;

  // SortBy ===========================================================
  // Make a list of video games
  sortByList = ['Modern Warfare', 'Cyberpunk 2077', 'The Last of Us Part II', 'Final Fantasy VII Remake', 'Ghost of Tsushima', 'Animal Crossing: New Horizons', 'Doom Eternal', 'Half-Life: Alyx', 'Ori and the Will of the Wisps', 'Resident Evil 3', 'Streets of Rage 4', 'Fall Guys: Ultimate Knockout'];
  sortByString = 'Diablo IV';

  sortByPipeCode = `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  standalone: true
})
export class SortByPipe implements PipeTransform {
  transform(value: string[] | string, direction?: string): string[] {
    if(!Array.isArray(value)) {
      throw new Error('value is not an array. SortBy Pipe require an array.');
    }
    return (direction === 'desc') ? value.sort().reverse() : value.sort();
  }
}`;
  sortByTemplate = `<p><strong>ASC:</strong> {{ sortByList | sortBy }}</p>
<p><strong>DESC:</strong> {{ sortByList | sortBy: 'desc' }}</p>
<p><strong>Sort a string:</strong> {{ sortByString | sortBy }}</p> <!-- Error -->`;
  sortByCode = `sortByList = ['Leon', 'Alexander', 'Oscar', 'Elias', 'Theodor', 'Viktor', 'Alexander', 'Oscar', 'Elias', 'Theodor', 'Viktor', 'Kevin'];`;

  // CreditCardFormatter ===========================================================
  creditcard ='';
  creditCardFormatterPipeCode = `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter',
  standalone: true
})
export class CreditCardFormatterPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 16 || isNaN(Number(value))) {
      return 'Invalid credit card number (' + value + ')';
    }
    
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = value.replace(/[^\d]/g, '')

    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter(group => !!group).join('-')
    )
  }
}`;
  creditCardFormatterTemplate = `<input type="text" class="form-control" [(ngModel)]="creditcard">
{{ creditcard | creditCardFormatter }}`;

}
