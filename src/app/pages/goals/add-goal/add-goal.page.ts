import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Goal } from 'src/app/interfaces/goal';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.page.html',
  styleUrls: ['./add-goal.page.scss'],
})
export class AddGoalPage implements OnInit {
  title: string = "Add Goal";
  newGoal: Goal;

  constructor(private service: GoalsService, private toastCtrl: ToastController) { }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });

    toast.present();
  }

  onSubmit() {
    this.service.addGoal(this.newGoal).subscribe(() => {
      this.showToast("Goal successfully added");
    }, () => {
      this.showToast("Error: Goal could not be added");
    });
  }

  ngOnInit() {
  }

}
