import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  template: `
    <hr>
    <button (click)="handleShow()">
      {{buttonText}}
    </button>
    @if (show){
      <h1>Hi!</h1>
    }
    <hr>
    <input id="chk" type="checkbox" 
        [checked]="checked"
        (input)="handleCheck()">
    @if (checked){
      <label for="chk">Checked</label>
    } @else {
      <label for="chk">Unchecked</label>
    }
    <hr>
    <div>Select an option</div>
    <label><input name="rdo" type="radio" value="option-1" (input)="handleRadio($event)">Option1</label>
    <label><input name="rdo" type="radio" value="option-2" (input)="handleRadio($event)">Option2</label>
    <label><input name="rdo" type="radio" value="option-3" (input)="handleRadio($event)">Option3</label>

    @if (value === 'option-1'){
      <h1>I am H1</h1>
    }@else if (value === 'option-2'){
      <h2>I am H2</h2>
    }@else if (value === 'option-3'){
      <h3>I am H3</h3>
    }@else {
      <h4>No option has been selected yet</h4>
    }


    @switch (value){
      @case ('option-1') {
        <h1>I am H1</h1>
      }@case ('option-2'){
        <h2>I am H2</h2>
      }@case ('option-3'){
        <h3>I am H3</h3>
      }@default{
        <h4>No option has been selected yet</h4>
      }
    }
      
   
  `,
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  show = false;
  buttonText = 'Show';
  checked = false;
  value = "";

  handleRadio(eventData: Event){
    // if (eventData.target){
      // const elm1 = eventData.target as HTMLInputElement;
      // const elm2 = <HTMLInputElement> eventData.target;
      // this.value = (<HTMLInputElement> eventData.target).value ?? "";
      this.value = (<HTMLInputElement> eventData.target).value;
      console.log(this.value);
    // }
  }

  handleCheck() {
    this.checked = !this.checked;
  }

  handleShow() {
    this.show = !this.show;
    if (this.show) {
      this.buttonText = 'Hide';
    } else {
      this.buttonText = 'Show';
    }
  }
}
