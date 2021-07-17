import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/interfaces/task';
import { TasksService } from 'src/app/services/Tasks.service';
import { convertDateTime } from 'src/app/functions/date';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  title: string = "Add Task";
  addTaskForm: FormGroup = this.builder.group({
    name: ["", [Validators.required]],
    description: ["", [Validators.required]],
    startDate: ["", [Validators.required]],
    startTime: ["", [Validators.required]],
    endDate: ["", [Validators.required]],
    endTime: ["", [Validators.required]],
    status: ["Incomplete", [Validators.required]]
  });

  constructor(private service: TasksService, private builder: FormBuilder, private toastCtrl: ToastController) { }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });

    toast.present();
  }

  onSubmit() {
    const form = this.addTaskForm.value;
    const newTask: Task = {
      name: form.name,
      description: form.description,
      startDate: convertDateTime(form.startDate, form.startTime),
      endDate: convertDateTime(form.endDate, form.endTime),
      status: form.status
    };

    const added = this.service.addTask(newTask);
    if (added) {
      this.showToast("Task successfully added");
    } else {
      this.showToast("Failure: Task could not be added");
    }

    this.addTaskForm.reset();
  }

  ngOnInit() {
  }

}
