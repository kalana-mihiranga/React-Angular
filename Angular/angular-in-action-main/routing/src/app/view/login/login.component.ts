import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  template: `
      <div class="flex flex-col justify-center
        items-center h-screen">
          <h1 class="text-2xl font-bold">Login</h1>
          <div class="mb-4">Please your credentials to log in</div>
          <form  #frm="ngForm"
                    (ngSubmit)="onSubmit(username, password)"
                  class="flex flex-col text-center items-center">
              <label for="username">Username</label>
              <input id="username" type="text" #username
                     name="username" ngModel required minlength="3"
                     class="form-control"
                     placeholder="Enter your username here">
              <label for="password">Password</label>
              <input type="password" id="password" #password
                     name="password" ngModel required minlength="4"
                     class="form-control"
                     placeholder="Enter your password here">
              <button class="border p-1 px-4 rounded
              border-sky-500 hover:bg-sky-500
              hover:text-white w-1/3 disabled:bg-slate-300
              disabled:border-slate-300 disabled:text-gray-500
              mt-2" [disabled]="frm.invalid">
                  Log In
              </button>
          </form>
      </div>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private routerService: Router) {
  }
  onSubmit(userElm:HTMLInputElement, passElm:HTMLInputElement){
    const username = userElm.value.trim();
    const password = passElm.value.trim();
    if (username === 'admin' &&
          password === 'admin123'){
      localStorage.setItem('user', 'authenticated');
      this.routerService.navigateByUrl('/app');
    }else{
      localStorage.removeItem('user');
      alert("Invalid login credentials, try again");
      userElm.focus();
      userElm.select();
    }
  }
}
