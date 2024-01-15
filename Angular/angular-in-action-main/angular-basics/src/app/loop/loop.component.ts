import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  template: `
    <input type="number" min="0" value="0"
         (input)="handleInput($event)">
    @for (n of num; track n) {
      <p>{{n}}. Loop Works!</p>
    }
  `,
  styleUrl: './loop.component.scss'
})
export class LoopComponent {

  num = [];

  handleInput(e: Event) {
    const value = +(e.target as HTMLInputElement).value;
    this.num = new Array(value) as [];
  }
  
}
