import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodoEditComponent } from "./components/todo-edit/todo-edit.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { RegisterComponent } from "./components/register/register.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'add-todo', component: NewTodoComponent, canActivate: [AuthGuard] },
  { path: 'todos/:id', component: TodoEditComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoutingModule { }
