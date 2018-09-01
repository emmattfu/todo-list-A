import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./components/home/home.component";
import {ClassDirective} from "./derectives/class.directive";
import {MyNgStyleDirective} from "./derectives/my-ng-style.directive";
import {SumPipe} from "./pipes/sum.pipe";
import {MyDatePipe} from "./pipes/my-date.pipe";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxSpinnerModule} from "ngx-spinner";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NewTodoComponent} from "./components/new-todo/new-todo.component";
import {TodoEditComponent} from "./components/todo-edit/todo-edit.component";

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    NewTodoComponent,
    TodoEditComponent,
    ClassDirective,
    MyNgStyleDirective,
    SumPipe,
    MyDatePipe
  ],
  providers: [],
  exports: [
    HomeComponent,
    NewTodoComponent,
    TodoEditComponent
  ]
})
export class HomeModule { }
