import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = true;
  @Input() loadTimer = 2400;

  ngOnInit(): void {
    this.loaderTimer();
  }

  loaderTimer() {
    if (!this.isLoading) {
      return;
    }
    setInterval(() => {
      this.isLoading = false;
    }, this.loadTimer);
  }
}
