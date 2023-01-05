import { Component } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent {
 
  
  empsArray:any[] = [
    {sno:1 , name:"Scott" , salary:20000},
    {sno:2 , name:"Abrons" , salary:50000},
    {sno:3 , name:"Smith" , salary:30000},
    {sno:4 , name:"James" , salary:9000},
    {sno:5 , name:"Adam" ,salary:100000},
    {sno:6 , name:"Sathya" , salary:45000},
    {sno:7 , name:"Maneesh" , salary:65000},
    {sno:8 , name:"Haneesh" , salary:20000}
  ];
}
