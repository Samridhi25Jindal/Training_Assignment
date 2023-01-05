import { Component } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  sno:number=0;
  name:string="";
  grades:number=0;
   empsArray:any[] = [
   {sno:1 , name:"Scott" , grades:1},
   {sno:2 , name:"Abrons" , grades:2},
   {sno:3 , name:"Smith" , grades:3},
   {sno:4 , name:"James" , grades:4},
   {sno:5 , name:"Adam" , grades:1},
   {sno:6 , name:"Sathya" , grades:3},
   {sno:7 , name:"Maneesh" , grades:4},
   {sno:8 , name:"Haneesh" , grades:2}
  ];
}
