import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salpipe'
})
export class SalpipePipe implements PipeTransform {

  transform(input:any[],min:number,max:number):any[]
   {
    var result:any[]=input.filter(item=>item.salary>min&&item.salary<max)
    return result;
  }

}
