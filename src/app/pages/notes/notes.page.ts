import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  title: string = "Notes";
  notesList: Note[] = [];

  constructor(private service: NotesService) {
    this.notesList = service.getNotes();
  }

  ngOnInit() {
  }

}
