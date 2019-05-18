import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from '../core/auth.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashRoutingModule
  ],
  providers: [AuthService],
})
export class DashModule { }
