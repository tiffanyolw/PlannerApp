import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoDiaryPageRoutingModule } from './video-diary-routing.module';

import { VideoDiaryPage } from './video-diary.page';
import { HeaderbarComponent } from 'src/app/components/headerbar/headerbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoDiaryPageRoutingModule
  ],
  declarations: [VideoDiaryPage, HeaderbarComponent]
})
export class VideoDiaryPageModule {}
