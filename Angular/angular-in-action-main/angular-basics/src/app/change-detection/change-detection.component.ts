import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  template: `
    <h3>{{ title }}</h3>
    <button (click)="handleClick()">
      Click Me
    </button>
    <h3>X={{ x }}</h3>
    <button (click)="increment()">+ INC</button>
    <button (click)="decrement()">- DEC</button>
  `,
  styleUrl: './change-detection.component.scss'
})
export class ChangeDetectionComponent {
  title = "Let's learn about change detection";
  x = 1;

  handleClick(){
    this.title = "Hey look!, I changed."
  }

  increment(){
    this.x++;
    this.x *= 2;
  }

  decrement(){
    this.x /= 2;
    this.x--;
  }
}
