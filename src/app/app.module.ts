import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule } from "./routing.module";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NewTodoComponent } from "./components/new-todo/new-todo.component";
import { HttpClientModule } from "@angular/common/http";
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { MyDatePipe } from "./pipes/my-date.pipe";
import { SumPipe } from "./pipes/sum.pipe";
import { MyNgStyleDirective } from './directives/my-ng-style.directive';
import { ClassDirective } from './directives/class.directive';

import { HomeModule } from "./modules/home-module/home.module";
import {AuthModuleModule} from "./modules/auth-module/auth-module.module";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    HomeModule,
    AuthModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
