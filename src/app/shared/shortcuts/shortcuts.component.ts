import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
* This component is used to display a list of anchor links to the top of the page.
* Requires an array of objects with an anchor and title property.
* Example in component.ts: anchorLinks = [{anchor: '/this-page#id', title: 'This Page'}];
* Example in component.html: <app-shortcuts [anchorLinks]="anchorLinks" />
*/
@Component({
  selector: 'shared-shortcuts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shortcuts.component.html',
  styleUrl: './shortcuts.component.scss'
})
export class ShortcutsComponent {
  @Input() anchorLinks: any[] = [{anchor: '/example-directory#id', title: 'Example Title'}];
}
