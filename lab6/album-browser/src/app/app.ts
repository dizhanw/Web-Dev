import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Note } from './models/note.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly notes = signal<Note[]>([
    {
      id: 1,
      title: 'first',
      content: 'first ahahhaha',
      createdAt: new Date()
    },
        {
      id: 2,
      title: 'second',
      content: 'second ahahaha',
      createdAt: new Date()
    }
  ])
}
