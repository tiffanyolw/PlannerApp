import { Injectable } from '@angular/core';
import { Goal } from '../interfaces/goal';
import { Status } from '../interfaces/Status';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  goalsList: Goal[] = [
    { name: "goal 1", description: "this is the first goal", startDate: new Date(), endDate: new Date(2021, 1, 3), status: Status.Incomplete },
    { name: "goal 2", description: "this is the second goal", startDate: new Date(), endDate: new Date(2017, 2, 4), status: Status.Complete },
    { name: "goal 3", description: "this is the third goal", startDate: new Date(), endDate: new Date(2019, 4, 6), status: Status.Incomplete }
  ];

  constructor() { }

  getGoals(): Goal[] {
    return this.goalsList;
  }

  getGoalsByStatus(status: Status): Goal[] {
    let list = [];
    this.goalsList.forEach((goal) => {
      if (goal.status === status) {
        list.push(goal);
      }
    });
    return list;
  }

  addGoal(goal: Goal): boolean {
    this.goalsList.push(goal);
    return true;
    // return false if db couldn't add
  }

  updateGoal(goal: Goal) {
    const index = this.goalsList.findIndex((obj) => {
      return obj.id === goal.id;
    });

    this.goalsList[index] = goal;
  }
}
