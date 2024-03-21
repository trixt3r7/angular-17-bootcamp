import { Component, WritableSignal, Signal, signal, computed } from '@angular/core';
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
  countComputed: Signal<number> = computed(() => this.countWritable() * 2);
  
  countReadOnly: Signal<number> = signal(100);
  countReadOnlyAlt = signal(100).asReadonly();
  
  incrementCount() {
    this.countWritable.set(this.countWritable() + 1);
  }

  incrementReadOnlyCount() {
    // this.countReadOnly.set(this.countReadOnly() + 1);
    // .set() is not available on ReadOnly signals
  }

  signalCode: string = `  import { Component, WritableSignal, Signal, signal, computed } from '@angular/core';
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
    countComputed: Signal<number> = computed(() => this.countWritable() * 2);

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
  <p class="m-0">Computed Count: {{ countComputed() }}</p>
  <p class="m-0">Count (ReadOnly) : {{ countReadOnly() }}</p>`;

  objectPerson: WritableSignal<any> = signal({ name: 'John', age: 25 });

  increaseAge() {
    this.objectPerson.set({ ...this.objectPerson(), age: this.objectPerson().age + 1 });
  }

  signalObjectCode: string = `  import { Component, WritableSignal, Signal, signal, computed } from '@angular/core';
  ...
  
  @Component({
    selector: 'app-signals',
    standalone: true,
    imports: [CommonModule, SyntaxHighlightComponent],
    templateUrl: './signals.component.html',
    styleUrl: './signals.component.scss'
  })
  export class SignalsComponent {
    objectPerson: WritableSignal<any> = signal({ name: 'John', age: 25 });

    increaseAge() {
      this.objectPerson.set({ ...this.objectPerson(), age: this.objectPerson().age + 1 });
    }
  }`

  signalObjectTemplate: string = `<p class="m-0">Object: {{ objectPerson() | json }}</p>`;
}

