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
    empObj.sal = this.salary;
    empObj.deptno = this.deptno;


    this.httpObj.post(url, empObj).subscribe((response:any)  =>  
    {
      alert("dsf");
      this.getData_click();
    });
  }

}

