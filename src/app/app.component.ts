import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',


})
export class AppComponent {
  title = 'travel-manager';
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}