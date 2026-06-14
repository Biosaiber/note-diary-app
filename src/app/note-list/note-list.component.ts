import { Component, inject, OnInit, DoCheck } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note.interface';

@Component({
  selector: 'app-note-list',
  imports: [],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css',
})
export class NoteListComponent implements OnInit, DoCheck {
  private noteService = inject(NoteService);
  notes: Note[] = [];

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }
  ngDoCheck() {
    this.notes = this.noteService.getNotes();
  }
  deleteNote(idx: number): void {
    if (idx >= 0 && idx < this.notes.length) {
      this.noteService.deleteNote(idx);
    }

  }

}
