import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMRoutingModule } from './user-m-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [ListComponent, LoginComponent],
  imports: [
    CommonModule,
    UserMRoutingModule
  ]
})
export class UserMModule { }
