import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NewTodoComponent } from "./components/new-todo/new-todo.component";
import { TodoEditComponent } from "./components/todo-edit/todo-edit.component";

export const homeRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-todo', component: NewTodoComponent },
  { path: 'todos/:id', component: TodoEditComponent }
];
