import { Injectable } from '@angular/core';
import { Goal } from '../interfaces/goal';
import { Status } from '../interfaces/Status';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  goalsList: Goal[] = [
    { name: "goal 1", description: "this is the first goal", startDate: new Date(), endDate: new Date(), status: Status.Incomplete },
    { name: "goal 2", description: "this is the second goal", startDate: new Date(), endDate: new Date(), status: Status.Complete },
    { name: "goal 3", description: "this is the third goal", startDate: new Date(), endDate: new Date(), status: Status.Incomplete }
  ];

  constructor() { }

  getGoals(): Goal[] {
    return this.goalsList;
  }

  addGoal(goal: Goal): boolean {
    this.goalsList.push(goal);
    return true;
    // return false if db couldn't add
  }
}
