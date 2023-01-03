import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_project';

eventsArray:any[] = [
{ title : "Microsoft Azure Virtual Training Day:AI Fundamentals", url : "#" , date : "January 8,2023", format : "Digital/Online" , time :"3:00 PM Pacific Time"},
{ title : "Microsoft Azure Virtual Training Day:Cloud-Native Apps", url : "#" , date : "January 12,2023-January 13,2023", format : "Digital/Online" , time :"9:00 AM Pacific Time"},
{title : "DemocracyLab-Hacky New Year", url : "#" , date : "January 14,2023", format : "Digital/Online" , time :"8:30 AM Pacific Time"}
];
}
