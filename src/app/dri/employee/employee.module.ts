import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import{MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent,EmployeeFormComponent,FooterComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ]
})
export class EmployeeModule { }
