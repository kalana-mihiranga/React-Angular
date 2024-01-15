import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { TempFormComponent } from './temp-form/temp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    TempFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
