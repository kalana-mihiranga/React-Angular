import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="flex justify-between border-b-2 p-2">
      <h1 class="{{fontSize}} 
          font-medium
         hover:text-red-500
          text-center 
          {{color}}">
        <span class="">{{title}}</span>
      </h1>
      <button class="border p-1 rounded-md 
            bg-gradient-to-t from-lime-400
            transition-colors duration-200
            active:bg-lime-600 hover:drop-shadow
            cursor-pointer hover:bg-lime-500"
        (click)="onClick()">
            Change Color
      </button>
    </div>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input("my-title")
  title?: string;
  @Input("font-size")
  fontSize: string = 'text-2xl';
  @Input()
  color: string = 'text-sky-600';

  onClick() {
    const colors = ['red', 'green', 'blue', 'black', 'orange'];
    this.color = 
          `text-${colors[Math.floor(Math.random() * colors.length)]}-500`;
    console.log(this.color);
  }
}
