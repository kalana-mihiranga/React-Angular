import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <h1>Angular Forms</h1>
    <form #frmNgForm="ngForm">
      <label>
        <input 
          required
          name="chk"
          ngModel type="checkbox" 
          [checked]="checked"
          (input)="onCheckedChange($event)">
        Enable
      </label><br>
      <input [disabled]="!checked"
          name="txt"
          [required]="true"
          #txt
          #txtNgModel="ngModel"
          minlength="4" pattern="^C\\d+$"
          type="text" [(ngModel)]="value">
      <button 
        [disabled]="frmNgForm.invalid"
        (click)="onClick()">
        DO SOMETHING
      </button>
    </form>
    <h3>Output</h3>
    <div>{{value}}</div>
    <hr>
    <app-customer-form/>
    <hr>
    <app-temp-form />
  `
})
export class AppComponent {

    checked = true;
    value = "";
    @ViewChild("txt")
    txtElm!: ElementRef<HTMLInputElement>;

    onClick(){
      this.txtElm.nativeElement.focus();
    }

    onCheckedChange(e: Event){
        this.checked = 
        (e.target as HTMLInputElement).checked;
    }   
}
