import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthController } from '../auth.controller';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends AuthController implements OnInit {

loginForm:FormGroup;

  constructor(public inj:Injector) {
    super(inj);
   }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[''],
      Password:['']
    });
  }

  onSubmit(){
    console.log(this.loginForm.value);
    sessionStorage.setItem('access_token','sdfsfefewfewfewfwefe')
    sessionStorage.setItem('user',"{name:'Roman',email:'roman@gmail.com'}")
    this.router.navigate(['/dri/employee/employee-list']);
  }
}
