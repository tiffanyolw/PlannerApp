import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGoalPageRoutingModule } from './add-goal-routing.module';

import { AddGoalPage } from './add-goal.page';
import { SubpageHeaderbarComponent } from 'src/app/components/subpage-headerbar/subpage-headerbar.component';
import { AddPlanFormComponent } from 'src/app/components/add-plan-form/add-plan-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddGoalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddGoalPage, SubpageHeaderbarComponent, AddPlanFormComponent]
})
export class AddGoalPageModule {}
