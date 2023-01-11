import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  
 constructor(private httpObj:HttpClient) { }
  public empsArray:any[] = [];
 public ename:string="";
 public job:string="";
 public deptno:number=0;
 public salary:number=0;

 getData_click():void
  {
    let url:string = "http://localhost:3000/details";
    this.httpObj.get(url).subscribe((response:any)  =>  
    {

        this.empsArray = response;
    });
  }

  addData_click():void
  {    
    let url:string = "http://localhost:3000/details";

    let empObj:any =  {};
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.salary = this.salary;
    empObj.deptno = this.deptno;


    this.httpObj.post(url, empObj).subscribe((response:any)  =>  
    {
      this.getData_click();
    });
  }

  updateData_click(empno:number):void
  {
    let url:string = "http://localhost:3000/details/" +empno;
    let empObj:any = {};
    empObj.empno = empno;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.salary = this.salary;
    empObj.deptno = this.deptno;
  

  this.httpObj.put(url,empObj).subscribe((response:any) =>
  {
    this.getData_click();
  });
}
selectData_click(empno:number):void
{
  let url:string = "http://localhost:3000/details/" +empno;
  this.httpObj.get(url).subscribe((response:any) =>
  {
    this.ename = response.ename;
    this.job = response.job;
    this.salary = response.salary;
    this.deptno = response.deptno;
  });
}
deleteData_click(empno:number):void
{
  let url:string ="http://localhost:3000/details/" +empno;
  this.httpObj.delete(url).subscribe((response:any) =>
  {
    this.getData_click();
});
}
}
