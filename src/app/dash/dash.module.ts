import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { AuthService } from '../core/auth.service';
import { AddProjectComponent } from './add-project/add-project.component';

@NgModule({
  declarations: [AddProjectComponent],
  imports: [
    CommonModule,
    DashRoutingModule
  ],
  providers: [AuthService],
})
export class DashModule { }
