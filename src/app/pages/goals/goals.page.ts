import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Goal } from 'src/app/interfaces/goal';
import { Status } from 'src/app/interfaces/Status';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {
  title: string = "Goals";
  showAll: boolean = false;

  goalsList: Goal[] = [];

  constructor(private service: GoalsService, private toastCtrl: ToastController) {
    this.goalsList = service.getGoalsByStatus(Status.Incomplete);
  }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });

    toast.present();
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
    if (this.showAll) {
      this.goalsList = this.service.getGoals();
    } else {
      this.goalsList = this.service.getGoalsByStatus(Status.Incomplete);
    }
  }

  isCompleted(goal: Goal): boolean {
    return goal.status === Status.Complete;
  }

  toggleStatus(goal: Goal) {
    let msg = "";
    if (goal.status === Status.Complete) {
      goal.status = Status.Incomplete;
      msg = "Goal has been marked as incomplete.";;
    } else {
      goal.status = Status.Complete;
      msg = "Goal has been marked as complete.";
    }

    this.showToast(msg);
  }

  ngOnInit() {
  }

}