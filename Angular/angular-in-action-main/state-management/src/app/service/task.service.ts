import { Injectable } from '@angular/core';
import { TaskDto } from '../dto/task-dto';

@Injectable()
export class TaskService {
  private taskList: Array<TaskDto> = [
    new TaskDto(1, 'Design Wireframes'),
    new TaskDto(2, 'Setup Project', true),
    new TaskDto(3, 'Contact HR'),
    new TaskDto(4, 'Push `abc` branch to `dev` repo'),
    new TaskDto(5, 'Test Customer Service', true),
  ];

  addTask(task: TaskDto){
    this.taskList.push(task);
  }

  deleteTask(task: TaskDto){
    const index = this.taskList.indexOf(task);
    this.taskList.splice(index, 1);
  }

  getAllTasks(){
    return this.taskList;
  }

}
