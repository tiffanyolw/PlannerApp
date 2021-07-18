import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTaskPageRoutingModule } from './add-task-routing.module';

import { AddTaskPage } from './add-task.page';
import { SubpageHeaderbarComponent } from 'src/app/components/subpage-headerbar/subpage-headerbar.component';
import { AddPlanFormComponent } from 'src/app/components/add-plan-form/add-plan-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTaskPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddTaskPage, SubpageHeaderbarComponent, AddPlanFormComponent]
})
export class AddTaskPageModule {}
