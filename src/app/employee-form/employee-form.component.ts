import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm:FormGroup;
  genders=['Male','Female'];
 

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm=this.fb.group({
      fullname:['',Validators.required],
      code:['',[Validators.required,Validators.pattern(/^[0-9]+[0-9]*$/)]],
   date:['',Validators.required],
      email:['',[Validators.required,Validators.email,]],
      gender:['Male',Validators.required],
      address:['',Validators.required],
      position:['',Validators.required],
      mobileno:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }
  onSubmit(){
    console.log(this.employeeForm.value);
    this.employeeForm.reset();
  }

}
