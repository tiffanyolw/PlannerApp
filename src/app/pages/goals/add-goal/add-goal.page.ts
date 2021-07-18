import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { convertDateTime } from 'src/app/functions/date';
import { Goal } from 'src/app/interfaces/goal';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.page.html',
  styleUrls: ['./add-goal.page.scss'],
})
export class AddGoalPage implements OnInit {
  title: string = "Add Goal";
  addGoalForm: FormGroup = this.builder.group({
    name: ["", [Validators.required]],
    description: ["", [Validators.required]],
    startDate: ["", [Validators.required]],
    startTime: ["", [Validators.required]],
    endDate: [""],
    endTime: [""],
    status: ["Incomplete", [Validators.required]]
  });

  constructor(private service: GoalsService, private builder: FormBuilder, private toastCtrl: ToastController) { }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });

    toast.present();
  }

  onSubmit() {
    const form = this.addGoalForm.value;
    const newGoal: Goal = {
      name: form.name,
      description: form.description,
      startDate: convertDateTime(form.startDate, form.startTime),
      endDate: convertDateTime(form.endDate, form.endTime),
      status: form.status
    };

    const added = this.service.addGoal(newGoal);
    if (added) {
      this.showToast("Goal successfully added");
    } else {
      this.showToast("Error: Goal could not be added");
    }

    this.addGoalForm.reset();
  }

  ngOnInit() {
  }

}
