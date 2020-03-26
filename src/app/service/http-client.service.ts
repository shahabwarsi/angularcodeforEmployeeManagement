import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Employee
{
  constructor(public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
    )
  {}
}
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpclient:HttpClient) { }
  getEmployees()
  {
    console.log("test call")
    return this.httpclient.get<Employee[]>('http://localhost:8080/dataofemployee')
  }

  deleteEmployee(employee)
  {
    return this.httpclient.delete<Employee>("http://localhost:8080/user" + "/"+ employee.empId)
  }

  createEmployee(employee)
  {
    return this.httpclient.post<Employee>("http://localhost:8080/user",employee)

  }
}
