import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MainComponent} from './view/main/main.component';
import {HeaderComponent} from './view/header/header.component';
import {FormComponent} from './view/form/form.component';
import {TaskListComponent} from './view/task-list/task-list.component';
import {TaskComponent} from './view/task/task.component';
import {LoginComponent} from './view/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {AuthService} from "./service/auth.service";
import {authGuard} from "./guard/auth.guard";
import {LoaderComponent} from './view/loader/loader.component';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {errorInterceptor} from "./interceptor/error.interceptor";
import {CloudStoreTaskService} from "./service/cloud-store-task.service";
import {TaskService} from "./service/task-service";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {RoutingModule} from "./routing.module";



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FormComponent,
    TaskListComponent,
    TaskComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    provideFirebaseApp(() => initializeApp({
      "projectId": "to-do-app-angular-dd797",
      "appId": "1:385169365929:web:475d2cac4be7833cc382b8",
      "storageBucket": "to-do-app-angular-dd797.appspot.com",
      "apiKey": "AIzaSyC6b7bhxE6edmojQzPWSpBNdkJbH1a_P0c",
      "authDomain": "to-do-app-angular-dd797.firebaseapp.com",
      "messagingSenderId": "385169365929"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      enableHtml: true,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      progressBar: true,
      timeOut: 1500
    })
  ],
  providers: [AuthService,
    {provide: TaskService, useClass: CloudStoreTaskService}
    , provideHttpClient(withInterceptors([errorInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule {

}
