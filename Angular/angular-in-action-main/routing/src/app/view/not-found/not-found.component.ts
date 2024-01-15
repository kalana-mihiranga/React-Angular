import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="flex h-screen justify-center
        items-center flex-col">
        <h1 class="text-9xl font-bold
            text-slate-400">404</h1>
        <h1 class="text-4xl text-blue-400 font-bold">NOT FOUND</h1>
        <div class="mt-3">Go to
            <a routerLink="/app"
            class="bg-green-200 p-2 rounded
                hover:bg-green-500">App</a>
        </div>
    </div>
  `,
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
