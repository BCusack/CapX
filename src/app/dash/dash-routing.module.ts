import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
{ path: 'new', component: AddProjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
