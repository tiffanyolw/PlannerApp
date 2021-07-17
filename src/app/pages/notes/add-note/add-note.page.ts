import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Note } from 'src/app/interfaces/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
  title: string = "Add Note";
  addNoteForm: FormGroup = this.builder.group({
    name: ["", [Validators.required]],
    header: ["", [Validators.required]],
    details: ["", [Validators.required]],
    importance: ["", [Validators.required]]
  });

  constructor(private service: NotesService, private builder: FormBuilder, private toastCtrl: ToastController) { }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });

    toast.present();
  }

  onSubmit() {
    const form = this.addNoteForm.value;
    const newNote: Note = {
      name: form.name,
      header: form.header,
      details: form.details,
      importance: form.importance
    };

    const added = this.service.addNote(newNote);
    if (added) {
      this.showToast("Note successfully added");
    } else {
      this.showToast("Failure: Note could not be added");
    }

    this.addNoteForm.reset();
  }

  ngOnInit() {
  }

}
