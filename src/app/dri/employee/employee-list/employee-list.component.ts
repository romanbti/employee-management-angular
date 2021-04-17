import { Component, Injector, OnInit } from '@angular/core';

import { EmployeeController } from '../employee.controller';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent extends EmployeeController implements OnInit {
  Employee: any = [];

  constructor( public injector:Injector)  { 
      super(injector)
      
    }

  ngOnInit(): void {

    this.loadEmployees();

    
  }

  loadEmployees(){
    this.emplyoeeService.getEmployees().subscribe(data=>{
      console.log(data);
      this.Employee=data;},err=>console.log(err) );

  }
  // onUpdateEmployee(id) {
  //   console.log(id+'/update');
  //   this.router.navigate([id+'/update'], {relativeTo: this.route});
    
  // }


  deleteEmployee(id){
    this.emplyoeeService.deleteEmployee(id).subscribe(data=>{
      this.loadEmployees();
    })
  }
}
