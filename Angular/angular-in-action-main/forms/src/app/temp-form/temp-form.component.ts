import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  template: `
  <form #frm="ngForm">
    Name
    <input name="name" type="text" 
    pattern="^[A-Za-z ]+$"
    required
    [(ngModel)]="name"><br>
    Contact
    <input name="contact" type="text"
    pattern="^\\d{3}-\\d{7}$"
    required
    [(ngModel)]="contact">
    <br>
    <button [disabled]="frm.invalid">Click Me</button>
  </form>
  `,
  styleUrl: './temp-form.component.scss'
})
export class TempFormComponent {
  name = "Kasun";
  contact = "077-1236497";

}
