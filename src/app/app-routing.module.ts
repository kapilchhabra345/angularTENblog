import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
{
  path:'user',
  component:UserComponent

},
{
path:'admin',
component:AdminComponent
} ,
{
path:'admin-l', loadChildren:()=>import('./admin-l/admin-l.module').then(mod=>mod.AdminLModule)

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
