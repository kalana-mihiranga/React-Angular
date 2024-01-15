import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  template: `
    <header class="flex justify-between
                border-b p-2 items-center">
        <h1 class="text-2xl font-bold">
            Angular Routing
        </h1>
        <button (click)="onLogoutClick()" class="border p-1.5
            border-sky-400 hover:border-sky-500
            hover:bg-sky-500 hover:text-white
            rounded">Logout</button>
    </header>
    <nav class="flex list-none justify-center border-b">
        <li routerLinkActive="bg-orange-500 hover:bg-orange-400"
            routerLink="home" [class]="classList1">HOME</li>
        <li routerLinkActive="bg-orange-500 hover:bg-orange-400"
            routerLink="customers" [class]="classList2">MANAGE CUSTOMERS</li>
        <li routerLinkActive="bg-orange-500 hover:bg-orange-400"
            routerLink="items" [class]="'p-2 border-x cursor-pointer hover:bg-slate-200'">MANAGE ITEMS</li>
    </nav>
    <main class="flex justify-center">
        <router-outlet></router-outlet>
    </main>
  `,
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private routerService: Router) {
  }

  onLogoutClick(){
    localStorage.removeItem("user");
    this.routerService.navigateByUrl('/login');
  }

  classList1 = ['p-2', 'border-x', 'cursor-pointer',
              'hover:bg-slate-200'];
  classList2 = {
    "p-2": true,
    "cursor-pointer": true,
    "hover:bg-slate-200": true
  }
}
