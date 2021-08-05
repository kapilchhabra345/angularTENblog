import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLRoutingModule } from './admin-l-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
console.warn("admin-l module");

@NgModule({
  declarations: [LoginComponent, ListComponent],
  imports: [
    CommonModule,
    AdminLRoutingModule
  ]
})
export class AdminLModule { }
