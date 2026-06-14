import { Injectable, inject } from '@angular/core'
import { Note } from './note.interface'
import { LoggerService } from './logger.service'

@Injectable({
  providedIn: 'root',
})
export class NoteService {

  private notes: Note[] = [];
  private loggerService = inject(LoggerService);


  //add object to notes field
  addNote(note: Note): void {
    this.notes.push(note);
    this.loggerService.log(`New note added: ${note.content} on ${note.date}`);
  }

  //delete note
  deleteNote(idx: number): void {
    if (idx >= 0 && idx < this.notes.length) {
      const deletedNote = this.notes.splice(idx, 1)[0];
      this.loggerService.log(`The note ${deletedNote.content} on ${deletedNote.date} is deleted.`)
    }

  }

  //get notes field
  getNotes(): Note[] {
    return [...this.notes]
  }

}
