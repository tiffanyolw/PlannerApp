import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagesDiaryPageRoutingModule } from './images-diary-routing.module';

import { ImagesDiaryPage } from './images-diary.page';
import { HeaderbarComponent } from 'src/app/components/headerbar/headerbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagesDiaryPageRoutingModule
  ],
  declarations: [ImagesDiaryPage, HeaderbarComponent]
})
export class ImagesDiaryPageModule {}
