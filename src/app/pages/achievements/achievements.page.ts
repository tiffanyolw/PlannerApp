import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/interfaces/Status';
import { Task } from 'src/app/interfaces/task';
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

  constructor(private tasksService: TasksService, private goalsService: GoalsService) {
    let tasks: any = tasksService.getTasksByStatus(Status.Complete);
    let goals: any = goalsService.getGoalsByStatus(Status.Complete);
    tasks.forEach((task) => {
      task.type = AchievementType.Task;
    });
    goals.forEach((goal) => {
      goal.type = AchievementType.Goal;
    });


    this.achievements = [...tasks, ...goals];
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

  ngOnInit() {
  }

}

enum AchievementType {
  Task = "Task",
  Goal = "Goal"
}
