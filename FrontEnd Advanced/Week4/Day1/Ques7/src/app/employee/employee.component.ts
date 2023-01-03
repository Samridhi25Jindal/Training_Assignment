import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

employee:any = {empid : 54654564 , empname : "Stephen" , empjob : "Manager" , sal : 75000 , deptno : 10};
}
