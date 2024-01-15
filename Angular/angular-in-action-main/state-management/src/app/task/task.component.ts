import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskDto } from '../dto/task-dto';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task',
  template: `
    <div class="flex justify-between items-center p-2 hover:bg-slate-300">
      <div class="flex items-center">
        <input [checked]="task.status"
         id="chk-{{task.id}}" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="chk-{{task.id}}" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {{task.description}}
        </label>
      </div>
      <button (click)="onTaskDelete(task)" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        Delete
      </button>
    </div>
  `,
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input()
  task!: TaskDto;

  constructor(private service: TaskService){

  }

  onTaskDelete(task: TaskDto){
      this.service.deleteTask(task);
  }
}
