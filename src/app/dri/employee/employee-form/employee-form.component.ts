import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import {  FormGroup, Validators } from '@angular/forms';
import { EmployeeController } from '../employee.controller';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeFormComponent extends EmployeeController implements OnInit {
  employeeForm:FormGroup;
  id = this.route.snapshot.params['id'];
  genders=['Male','Female'];
 
 

  constructor(public inj :Injector) 
   {
    super(inj)
   }

  ngOnInit(): void {
  
    console.log(localStorage.getItem('user'))
    
    this.emplyoeeService.getEmployee(this.id).subscribe((data: {}) => {
      this.employeeForm.patchValue(data);
    })
  

    this.employeeForm=this.fb.group({
      fullname:['',Validators.required],
      code:['',[Validators.required,Validators.pattern(/^[0-9]+[0-9]*$/)]],
   joineddate:['',Validators.required],
      email:['',[Validators.required,Validators.email,]],
      gender:['Male',Validators.required],
      address:['',Validators.required],
      position:['',Validators.required],
      mobileno:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }
  onSubmit(){
    let formData = this.employeeForm.value;
    if(this.id){
      this.emplyoeeService.updateEmployee(this.id,formData).subscribe((data=>{
        this.router.navigate(['/dri/employee/employee-list']);
      }))
    }else{console.log(this.employeeForm.value);
      
      this.emplyoeeService.createEmployee(formData).subscribe((data:{}) => {
          this.router.navigate(['/dri/employee/employee-list']);
        
        },err=>console.log(err));
      
      }
  }

}
