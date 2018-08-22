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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    NewTodoComponent,
    TodoEditComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
