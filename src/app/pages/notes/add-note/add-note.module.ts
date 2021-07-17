import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNotePageRoutingModule } from './add-note-routing.module';

import { AddNotePage } from './add-note.page';
import { SubpageHeaderbarComponent } from 'src/app/components/subpage-headerbar/subpage-headerbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNotePageRoutingModule
  ],
  declarations: [AddNotePage, SubpageHeaderbarComponent]
})
export class AddNotePageModule {}
