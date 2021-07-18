import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Goal } from 'src/app/interfaces/goal';
import { Status } from 'src/app/interfaces/plan';
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

  constructor(private service: GoalsService, private toastCtrl: ToastController) { }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });

    toast.present();
  }

  private showGoals() {
    if (this.showAll) {
      this.service.getGoals("createdAt", "DESC").subscribe((result) => {
        this.goalsList = result;
      }, (err) => {
        console.log(err);
      });
    } else {
      this.service.getGoalsByStatus(Status.Incomplete, "createdAt", "DESC").subscribe((result) => {
        this.goalsList = result;
      }, (err) => {
        console.log(err);
      });
    }
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
    this.showGoals();
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
      goal.endDate = new Date(Date.now());
      msg = "Goal has been marked as complete.";
    }

    this.service.updateGoal(goal.id, goal).subscribe(() => {
      this.showToast(msg);
    }, () => {
      this.showToast("Error: Could not update status");
    });
  }

  ionViewWillEnter() {
    this.showGoals();
  }

  ngOnInit() {
  }

}
