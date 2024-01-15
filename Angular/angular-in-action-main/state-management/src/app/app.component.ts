import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <app-header 
      [my-title]="'State Management in Angular'"
      [font-size]="'text-2xl'"
      [color]="'text-blue-500'"/>
    <app-new-task />
    <app-tasklist />
  `
})
export class AppComponent {

}
