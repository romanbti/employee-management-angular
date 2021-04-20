import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [

 { path: '',   redirectTo: 'auth', pathMatch: 'full' },
 {
   path: 'dri',  canActivate: [AuthGuard], loadChildren: () => import('./dri/dri.module').then(m => m.DriModule) },

 { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
