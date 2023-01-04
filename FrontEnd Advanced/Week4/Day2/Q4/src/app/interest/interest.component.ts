import { Component } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent {
  principal:any="";
  rate:any="";
  time:any="";
  result:any="";
  amount:any="";
  x:boolean=true;
  getValue()
  {
    this.x=false;
      this.result=this.principal*this.rate*this.time/100;
      this.amount= parseFloat(this.result) + parseFloat(this.principal);

  }
}
