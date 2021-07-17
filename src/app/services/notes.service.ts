import { Injectable } from '@angular/core';
import { Importance, Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesList: Note[] = [
    { name: "Note 1", header: "first note", details: "this is the first note", importance: Importance.NotImportant},
    { name: "Note 2", header: "second note", details: "this is the second note", importance: Importance.VeryImportant},
    { name: "Note 3", header: "third note", details: "this is the third note", importance: Importance.Important},
  ];

  constructor() { }

  getNotes(): Note[] {
    return this.notesList;
  }

  addNote(note: Note): boolean {
    this.notesList.push(note);
    return true;
    // return false if db couldn't add
  }
}
