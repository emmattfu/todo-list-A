import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from "./guards/auth.guard";

import { homeRoutes } from "./modules/home-module/home-routing";
import { authRoutes } from "./modules/auth-module/auth-routing";


const routes: Routes = [
  { path: 'login', children: [...authRoutes] },
  { path: '', children: [...homeRoutes], canActivate: [AuthGuard] },
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
