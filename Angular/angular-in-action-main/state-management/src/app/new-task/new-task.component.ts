import { Component, Inject, inject } from '@angular/core';
import { TaskService } from '../service/task.service';
import { TaskDto } from '../dto/task-dto';

@Component({
  selector: 'app-new-task',
  template: `
    <form 
      (ngSubmit)="onSubmit(txtElm)"
      class="p-2 flex border-b align-items gap-1">
      <input name="txt" #txtElm type="text" ngModel class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="Eg. Finish State Management" required>
      <button class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        ADD
      </button>
    </form>
  `,
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  // service: TaskService

  constructor(private service: TaskService){
    // this.service = service;
  }

  onSubmit(txtElm: HTMLInputElement){
    const description = txtElm.value.trim();
    if (!description) {
      txtElm.focus();
      txtElm.select();
      return;
    }

    this.service.addTask(
      new TaskDto(this.service.getAllTasks().length,
                  description));
    txtElm.value = '';
    txtElm.focus();
  }
}
