import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
      <h1 class="mt-1 text-xl text-bold font-bold text-center">
          Dashboard
      </h1>
      <img class="p-2"
           src="https://pictures.dealer.com/l/landroverbethesdalr/1612/6da4454d9e068d0c3edefd289deeae20x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520"
           alt="Dashboard Image">
  `,
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
