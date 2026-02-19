import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  template: `
    <p>Username: {{ username }}</p>

    <p>Framework: {{ favoriteFramework }}</p>

    <label for="framework">
      Favorite Framework:
      <input
        id="framework"
        type="text"
        [(ngModel)]="favoriteFramework"
      />
    </label>

    <button (click)="showFramework()">
      Show Framework
    </button>
  `,
})
export class User {
  username = 'youngTech';
  favoriteFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }
}