import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.guard';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { AddProjectComponent } from './dash/add-project/add-project.component';

const routes: Routes = [
  { path: '', component: DashboardComponent/*, canActivate: [AuthGuard]*/ },
  { path: 'new', component: AddProjectComponent/*, canActivate: [AuthGuard] */ },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
