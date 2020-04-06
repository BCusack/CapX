import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule, NgbPopoverModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbCollapseModule,
    NgbPopoverModule,
    NgbDatepickerModule
  ], exports: [NgbCollapseModule, NgbPopoverModule, NgbDatepickerModule]
})
export class BootstrapModule { }
