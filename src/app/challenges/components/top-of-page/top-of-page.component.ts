import { Component, Input, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icons } from '../../../shared/Icons';

@Component({
  selector: 'app-top-of-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-of-page.component.html',
  styles: []
})
export class TopOfPageComponent {
  @Input() anchorUrl!: string;
  anchorId: string = '#top-of-page';
  showTopOfPage: boolean = false;
  Icons = Icons;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll') onScrollEvent($event: any) {
    if (this.viewportScroller.getScrollPosition()[1] > 600) {
      this.showTopOfPage = true;
    } else {
      this.showTopOfPage = false;
    }
  }
}
