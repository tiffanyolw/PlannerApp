import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGoalPageRoutingModule } from './add-goal-routing.module';

import { AddGoalPage } from './add-goal.page';
import { SubpageHeaderbarComponent } from 'src/app/components/subpage-headerbar/subpage-headerbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddGoalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddGoalPage, SubpageHeaderbarComponent]
})
export class AddGoalPageModule {}
