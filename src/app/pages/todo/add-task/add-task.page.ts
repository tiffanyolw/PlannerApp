import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TasksService } from 'src/app/services/Tasks.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  title: string = "Add Task";
  newTask: Task;

  constructor(private service: TasksService, private toastCtrl: ToastController) { }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });

    toast.present();
  }

  onSubmit() {
    this.service.addTask(this.newTask).subscribe(() => {
      this.showToast("Task successfully added");
    }, () => {
      this.showToast("Error: Task could not be added");
    });
  }

  ngOnInit() {
  }

}
