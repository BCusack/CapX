import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { AuthService } from '../core/auth.service';
import { AddProjectComponent } from './add-project/add-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashAppComponent } from './dash-app/dash-app.component';
import { NavComponent } from '../shared/nav/nav.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  declarations: [DashboardComponent, AddProjectComponent, DashAppComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,
    DashRoutingModule
  ],
  providers: [AuthService],
})
export class DashModule { }
