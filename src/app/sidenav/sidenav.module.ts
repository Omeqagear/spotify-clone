import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    CommonModule
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent]
})
export class SidenavModule { }
