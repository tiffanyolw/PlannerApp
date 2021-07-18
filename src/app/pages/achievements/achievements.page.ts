import { Component, OnInit } from '@angular/core';
import { Plan, Status } from 'src/app/interfaces/plan';
import { GoalsService } from 'src/app/services/goals.service';
import { TasksService } from 'src/app/services/Tasks.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {
  title: string = "Achievements";

  achievements: Plan[] = [];

  constructor(private tasksService: TasksService, private goalsService: GoalsService) { }

  private sortDesc() {
    this.achievements.sort((obj1, obj2) => {
      return new Date(obj2.endDate).getTime() - new Date(obj1.endDate).getTime();
    });
  }

  isTask(item): boolean {
    return item.type === AchievementType.Task;
  }

  isGoal(item): boolean {
    return item.type === AchievementType.Goal;
  }

  ionViewWillEnter() {
    let tasks = [];
    let goals = [];

    this.tasksService.getTasksByStatus(Status.Complete).subscribe((result) => {
      tasks = result;
      tasks.forEach((task) => {
        task.type = AchievementType.Task;
      });
      
      this.achievements = [...this.achievements, ...tasks];
      this.sortDesc();
    }, (err) => {
      console.log(err);
    });

    this.goalsService.getGoalsByStatus(Status.Complete).subscribe((result) => {
      goals = result;
      goals.forEach((goal) => {
        goal.type = AchievementType.Goal;
      });

      this.achievements = [...this.achievements, ...goals];
      this.sortDesc();
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}

enum AchievementType {
  Task = "Task",
  Goal = "Goal"
}
