import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  template: `
    <form #frmNgForm="ngForm">
      <div>
        <label>ID</label>
        <input name="id" ngModel type="text"
          pattern="^C\\d{3,}$"
          required
        >
      </div>
      <div>
        <label>NAME</label>
        <input name="name" ngModel type="text"
          required
          pattern="^[A-Za-z ]{3,}$"
        >
      </div> 
      <div>
        <label>CONTACT</label>
        <input name="contact" ngModel type="text"
          required
          pattern="^\\d{3}-\\d{7}$">
      </div>
      <div>
        <label>
          <input required name="sex" ngModel type="radio" value="male">MALE
        </label>
        <label>
          <input required name="sex" ngModel type="radio" value="female">FEMALE
        </label>
      </div>    
      <button [disabled]="frmNgForm.invalid">SAVE</button>    
    </form>
  `,
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {

}
