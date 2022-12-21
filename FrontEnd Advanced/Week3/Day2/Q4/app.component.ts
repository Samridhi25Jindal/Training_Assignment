import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_project';

empsArray:any[] = [
{ empno : 10256,  ename :  "Scott", job : "Manager", sal : 70000, deptno : 10},
{ empno : 10257,  ename :  "Steve", job : "Analyst", sal : 50000, deptno : 20},
{ empno : 10258,  ename :  "Smith", job : "Manager", sal : 70000, deptno : 10},
{ empno : 10259,  ename :  "Jacky", job : "Sales", sal : 40000, deptno : 40},
{ empno : 10260,  ename :  "Harry", job : "Operation", sal : 45000, deptno : 30},
{ empno : 10261,  ename :  "Ronny", job : "Analyst", sal : 50000, deptno : 20}
];
}
