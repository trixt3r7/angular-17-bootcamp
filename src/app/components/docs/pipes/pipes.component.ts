import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../../../pipes/reverse.pipe';
import { FileSizePipe } from '../../../pipes/file-size.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { Icons } from '../../../shared/Icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SyntaxHighlightComponent } from '../../../shared/syntax-highlight/syntax-highlight.component';
import { TopOfPageComponent } from '../../../challenges/components/top-of-page/top-of-page.component';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, ReversePipe, FileSizePipe, FormsModule, HighlightModule, FontAwesomeModule, 
    SyntaxHighlightComponent, TopOfPageComponent],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  Icons = Icons;
  
  textReverse: string = '';
  templateReverse: string = `<p>{{ textReverse | reverse }}</p>`;
  appReverse: string = `import { Component } from '@angular/core';
  import { ReversePipe } from '../../../pipes/reverse.pipe';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [ReversePipe]
  })
  export class AppComponent {
    textReverse: string = 'Reversed text';
  }`;

  pipeReverse: string = `import { Pipe, PipeTransform } from '@angular/core';
  @Pipe({
    name: 'reverse',
    standalone: true
  })
  export class ReversePipe implements PipeTransform {
    transform(value: string): string {
      let reverse = '';
      for (let i = value.length - 1; i >= 0; i--) {
          reverse += value[i];
      }
      return reverse;
    }
  }`;

  
  myFileSize: number = 123456789;
  templateFileSize: string = `<p>{{ myFileSize | fileSize }}</p>`;
  appFileSize: string = `import { Component } from '@angular/core';
  import { FileSizePipe } from '../../../pipes/file-size.pipe';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [FileSizePipe]
  })
  export class AppComponent {
    myFileSize: number = 123456789;
  }`;
  pipeFileSize: string = `import { Pipe, PipeTransform } from '@angular/core';
  @Pipe({
    name: 'fileSize',
    standalone: true
  })
  export class FileSizePipe implements PipeTransform {
  
    transform(size: number): string {
  
      switch (true) {
        case (size < 1024):
          return size + ' bytes';
        case (size >= 1024 && size < 1048576):
          return (size / 1024).toFixed(1) + ' KB';
        case (size >= 1048576 && size < 1073741824):
          return (size / 1048576).toFixed(1) + ' MB';
        case (size >= 1073741824):
          return (size / 1073741824).toFixed(1) + ' GB';
        default:
          return size + ' bytes'  ;
      }
    }
  }`;
}
