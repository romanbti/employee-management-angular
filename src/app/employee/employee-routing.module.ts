import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { EmployeeComponent } from './employee.component';

const routes: Routes = [
 {
 path: '', component: EmployeeComponent, 
children:[
  {path:"employee-form",component:EmployeeFormComponent},
  {path:"employee-list",component:EmployeeListComponent},
  {path:"update/:id",component:EmployeeFormComponent},
]
      
  } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
