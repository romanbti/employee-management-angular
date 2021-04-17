import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriComponent } from './dri.component';

const routes: Routes = [{
  path: '', component: DriComponent,
  children: [{
    path: "", redirectTo: "employee", pathMatch: "full"
  },
  {
    path: "employee", loadChildren: () => import("./employee/employee.module").then((m) => m.EmployeeModule)
  }]}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DriRoutingModule { }
