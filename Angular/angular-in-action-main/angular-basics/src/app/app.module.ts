import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { LoopComponent } from './loop/loop.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent,
    ControlFlowComponent,
    LoopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
