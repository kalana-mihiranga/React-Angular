import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
      <h1>{{title}}</h1>
      <button (click)="handleClick1()">
        Click Me
      </button>
      <button (click)="handleClick1();handleClick2()">
        Click Me
      </button>
      <app-change-detection />
      <app-control-flow />
      <app-loop />
  `
})
export class AppComponent {
    title = 'Hello Angular!';

    handleClick1(){
      alert("Okay-1");
    }

    handleClick2(){
      alert("Okay-2");
    }    
}
