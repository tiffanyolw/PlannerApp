import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/interfaces/goal';
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

  todoList: Task[] = [];
  goalsList: Goal[] = [];

  constructor(private tasksService: TasksService, private goalsService: GoalsService) {
    this.todoList = tasksService.getTasks();
    this.goalsList = goalsService.getGoals();
    //this.todoList = tasksService.getTasksByStatus(Status.Complete);
    //this.goalsList = goalsService.getGoalsByStatus(Status.Complete);
  }

  //delete

  ngOnInit() {
  }

}
