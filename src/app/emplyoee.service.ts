import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Employee } from './shared/employee';

@Injectable({
  providedIn: 'root'
})
export class EmplyoeeService {
  apiURL = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  constructor(private http : HttpClient) { }
  getEmployees() {
    return this.http.get<Employee>(this.apiURL+'/employees');
    }
    getEmployee(id) {
      return this.http.get<Employee>(this.apiURL + '/employees/' + id);
    }

    createEmployee(employee){
    
      console.log(employee)
      return this.http.post(this.apiURL+'/employees',JSON.stringify(employee), this.httpOptions);
    }

    updateEmployee(id, employee) {
      return this.http.put(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
}
deleteEmployee(id){
  return this.http.delete(this.apiURL +'/employees/'+id,this.httpOptions)
}
}




