import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/interfaces/Status';
import { GoalsService } from 'src/app/services/goals.service';
import { TasksService } from 'src/app/services/Tasks.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {
  title: string = "Achievements";

  achievements = [];

  constructor(private tasksService: TasksService, private goalsService: GoalsService) { }

  private sortDesc() {
    this.achievements.sort((obj1, obj2) => {
      return obj2.endDate - obj1.endDate;
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
