import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmplyoeeService } from 'src/app/emplyoee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  Employee: any = [];

  constructor( public employeeService:EmplyoeeService,
    public router: Router,
    public route: ActivatedRoute)  { }

  ngOnInit(): void {

    this.loadEmployees();

    
  }

  loadEmployees(){
    this.employeeService.getEmployees().subscribe(data=>{
      console.log(data);
      this.Employee=data;},err=>console.log(err) );

  }
  // onUpdateEmployee(id) {
  //   console.log(id+'/update');
  //   this.router.navigate([id+'/update'], {relativeTo: this.route});
    
  // }


  deleteEmployee(id){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      this.loadEmployees();
    })
  }
}
