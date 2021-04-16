import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router ,Params} from '@angular/router';

import { EmplyoeeService } from 'src/app/emplyoee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm:FormGroup;
  id = this.route.snapshot.params['id'];
  genders=['Male','Female'];
 
 

  constructor(public fb:FormBuilder, public employeeService:EmplyoeeService,
    public router:Router,
    public route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.employeeService.getEmployee(this.id).subscribe((data: {}) => {
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
      this.employeeService.updateEmployee(this.id,formData).subscribe((data=>{
        this.router.navigate(['/employee-list']);
      }))
    }else{console.log(this.employeeForm.value);
      
      this.employeeService.createEmployee(formData).subscribe((data:{}) => {
          this.router.navigate(['/employee-list']);
        
        },err=>console.log(err));
      
      this.employeeForm.reset();}
  }

}
