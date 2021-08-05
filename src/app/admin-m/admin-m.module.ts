import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMRoutingModule } from './admin-m-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [ListComponent, LoginComponent],
  imports: [
    CommonModule,
    AdminMRoutingModule
  ]
})
export class AdminMModule { }
