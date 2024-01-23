import { Component, Input, Output, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss',
  animations: [
    trigger('snackbarAnimation', [
      state('visible', style({ opacity: '1', bottom: '50px' })),
      transition('void => visible', [
        animate('.25s', keyframes([
          style({ opacity:'0', bottom: '0' }),
          style({ opacity:'1', bottom: '50px' }),
        ]),
        ), 
      ]),  
      transition('visible => void', [
        animate('.25s', keyframes([
          style({ opacity:'1', bottom: '50px' }),
          style({ opacity:'0', bottom: '0' }),
        ]),
        ), 
      ]),
    ]),
  ]
})
export class SnackbarComponent implements OnInit {
  @Output() closeSnackbar = new EventEmitter();
  @Input() message: string = '';
  @Input() timeout: number = 3000;
  @Input() isVisible: boolean = false;

  ngOnInit(): void {
  }

  // Tillfällig lösning för att få snackbar att försvinna efter 4 sekunder
  showSnackbar() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, this.timeout);
  }
}




// Build a snackbar that takes in a message. It should fade in from the bottom and fade back out to the bottom.
// @Component()
// @Input()
// of()
// pipe()
// delay()
// unsubscribe()
// ViewChild()