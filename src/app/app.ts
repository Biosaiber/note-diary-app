import { Component, signal } from '@angular/core';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteListComponent } from './note-list/note-list.component';

@Component({
  selector: 'app-root',
  imports: [NoteCreateComponent, NoteListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('notes-diary-app');
}
