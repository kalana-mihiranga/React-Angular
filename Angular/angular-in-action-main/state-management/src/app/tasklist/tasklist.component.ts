import { Component } from '@angular/core';
import { TaskDto } from '../dto/task-dto';
import { TaskService } from '../service/task.service';
import { Serializer } from '@angular/compiler';

@Component({
  selector: 'app-tasklist',
  template: `
    <div>
      @for(task of taskList; track task.id) {
        <app-task [task]="task" />
      }@empty {
        <p class="text-center mt-2">No tasks yet!</p>
      }
    </div>
  `,
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent {

  taskList: Array<TaskDto>;

  constructor(private service: TaskService){
    this.taskList = service.getAllTasks();
  }
}
