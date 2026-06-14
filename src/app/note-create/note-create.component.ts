import { Component, inject } from '@angular/core';
import { NoteService } from '../note.service'
import { Note } from '../note.interface'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-create',
  imports: [FormsModule],
  templateUrl: './note-create.component.html',
  styleUrl: './note-create.component.css',
})
export class NoteCreateComponent {
  noteContent = '';
  noteDate = new Date().toISOString().split('T')[0];
  private noteService = inject(NoteService);

  addNote(): void {

    if (this.noteContent.trim() && this.noteDate) {
      //1. vytvoriť objekt Note
      const newNote: Note = {
        content: this.noteContent,
        date: this.noteDate
      }
      //2. by sa mala volat funnkcia so service
      this.noteService.addNote(newNote);
      this.noteContent = '';
      this.noteDate = new Date().toISOString().split('T')[0];

    }

  }


}
