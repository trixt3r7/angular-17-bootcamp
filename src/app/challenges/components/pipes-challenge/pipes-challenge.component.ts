import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyntaxHighlightComponent } from '../../../shared/syntax-highlight/syntax-highlight.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { FilterTermPipe } from '../../pipes/filter-term.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipes-challenge',
  standalone: true,
  imports: [CommonModule, FormsModule, SyntaxHighlightComponent, TruncatePipe, FilterTermPipe],
  templateUrl: './pipes-challenge.component.html',
  styleUrl: './pipes-challenge.component.scss'
})
export class PipesChallengeComponent {
  // Truncate ===========================================================
  truncateString = 'This is a long string that will be truncated unless the length value is longer than the sentence. Let\'s see.';
  // truncateString = 'This is a long string that will be truncated';
  truncatePipeCode = `  import { Pipe, PipeTransform } from '@angular/core';
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
  truncateTemplate = `  <p>Truncated string (no arguments): {{ truncateString | truncate }}</p>
  <p>Truncated string (40): {{ truncateString | truncate: 40 }}</p>
  <p>Truncated string (40 : true): {{ truncateString | truncate: 40 : true }}</p>`;

  // Filter term ===========================================================
  searchTerm = '';
  filterTermList = ['Leon', 'Alexander', 'Oscar', 'Elias', 'Theodor', 'Viktor', 'Alexander', 'Oscar', 'Elias', 'Theodor', 'Viktor', 'Kevin'];
  
  filterTermPipeCode = `  import { Pipe, PipeTransform } from '@angular/core';

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
  filterTermTemplate = `  <input type="text" class="form-control" [(ngModel)]="searchTerm">
  {{ filterTermList | filterTerm: searchTerm }}
  
  <ul>
    @for(name of filterTermList | filterTerm: searchTerm; track name)
    {
        <li><code>{{ name }}</code></li>
    }
  </ul>`;

  filterTermCode = `  searchTerm = '';
  filterTermList = ['Leon', 'Alexander', 'Oscar', 'Elias', 'Theodor', 'Viktor', 'Alexander', 'Oscar', 'Elias', 'Theodor', 'Viktor', 'Kevin'];`;

}
