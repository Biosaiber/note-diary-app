import { Injectable } from '@angular/core'
import { Note } from './note.interface'

@Injectable({
  providedIn: 'root',
})
export class NoteService {

  private notes: Note[] = [];


  //add object to notes field
  addNote(note: Note):void {
    this.notes.push(note);
      console.log(this.notes);
  }
  //get notes field
  getNotes(): Note[] {
    return [...this.notes]
  }
  
}
