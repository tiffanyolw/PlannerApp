import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Status } from '../interfaces/Status';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  todoList: Task[] = [
    { id: 1, name: "Running", description: "running around the block", startDate: new Date(), endDate: new Date(2020, 9, 9), status: Status.Incomplete },
    { id: 2, name: "Running2", description: "running around the block2", startDate: new Date(), endDate: new Date(2015, 5, 5), status: Status.Incomplete },
    { id: 3, name: "Running3", description: "running around the block3", startDate: new Date(), endDate: new Date(2017, 2, 2), status: Status.Complete },
  ];

  constructor() { }

  getTasks(): Task[] {
    return this.todoList;
  }

  getTasksByStatus(status: Status): Task[] {
    let list = [];
    this.todoList.forEach((task) => {
      if (task.status === status) {
        list.push(task);
      }
    });
    return list;
  }

  addTask(task: Task): boolean {
    this.todoList.push(task);
    return true;
    // return false if db couldn't add
  }

  updateTask(task: Task) {
    const index = this.todoList.findIndex((todo) => {
      return todo.id === task.id;
    });

    this.todoList[index] = task;
  }
}
