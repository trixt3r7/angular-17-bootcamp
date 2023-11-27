import { Component, WritableSignal, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyntaxHighlightComponent } from '../../../shared/syntax-highlight/syntax-highlight.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule, SyntaxHighlightComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  countWritable: WritableSignal<number> = signal(0);
  countReadOnly: Signal<number> = signal(100);
  countReadOnlyAlt = signal(100).asReadonly();
  
  incrementCount() {
    this.countWritable.set(this.countWritable() + 1);
  }

  incrementReadOnlyCount() {
    // this.countReadOnly.set(this.countReadOnly() + 1);
    // .set() is not available on ReadOnly signals
  }

  signalCode: string = `  import { Component, WritableSignal, signal, Signal } from '@angular/core';
  ...
  
  @Component({
    selector: 'app-signals',
    standalone: true,
    imports: [CommonModule, SyntaxHighlightComponent],
    templateUrl: './signals.component.html',
    styleUrl: './signals.component.scss'
  })
  export class SignalsComponent {
    countWritable: WritableSignal<number> = signal(0);
    countReadOnly: Signal<number> = signal(100);
    countReadOnlyAlt = signal(100).asReadonly();
    
    incrementCount() {
      this.countWritable.set(this.countWritable() + 1);
    }
  
    incrementReadOnlyCount() {
      // this.countReadOnly.set(this.countReadOnly() + 1);
      // .set() is not available on ReadOnly signals
    }    
  }`

  signalTemplate: string = `  <p class="m-0">Count: {{ countWritable() }}</p>
  <p class="m-0">Count * Count: {{ countWritable() * countWritable() }}</p>
  <p class="m-0">Count (ReadOnly) : {{ countReadOnly() }}</p>`;
}
