import { Component,EventEmitter, Output,OnInit } from '@angular/core';
import { states } from "./states";
import { time } from "./time";
import { state } from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ngOnInit(){
    this.state.emit(this.s_selected);
    this.time.emit(this.t_selected);

  }

  
  @Output() state:EventEmitter<states>=new EventEmitter<states>();
  s_selected:states={ name: "Delhi",value:6 };
  @Output() time:EventEmitter<time>=new EventEmitter<time>();
  t_selected:time={ key: "Last 7 days" , value:7 };
 

  statelist : states[]= [
    { name: "Andra Pradesh",value:1 },
    //{ name: "Arunachal Pradesh",value:2 },
    //{ name: "Assam",value:3 },
    { name: "Bihar",value:4 },
    //{ name: "Chhattigarh",value:5 },
    { name: "Delhi",value:6 },
    //{ name: "Goa",value:7 },
    { name: "Gujrat",value:8 },
    //{ name: "Haryana",value:9 },
    //{ name: "Himachal Pradesh",value:10 },
    //{ name: "Jammu and Kashmir",value:11 },
    //{ name: "Jharkhand",value:12 },
    { name: "Karnataka",value:13 },
    //{ name: "Kerala",value:14},
    { name: "Madhya Pradesh",value:15 },
    { name: "Maharashtra",value:16 },
    // { name: "Manipur",value:17 },
    // { name: "Meghalaya",value:18 },
    // { name: "Mizoram",value:19 },
    // { name: "Nagaland",value:20 },
    // { name: "Orissa",value:21 },
    // { name: "Punjab",value:22 },
    // { name: "Rajasthan",value:23 },
    // { name: "Sikkim",value:24 },
    // { name: "Tamil Nadu",value:25 },
    // { name: "telangana",value:26 },
    // { name: "Tripura",value:27 },
    // { name: "Uttranchal",value:28 },
    { name: "Uttar Pradesh",value:29}
  ];

  timelist:time[]=[
    {key:"Last 1 day", value:1 },
    {key:"Last 2 days", value:2 },
    {key:"Last 3 days", value:3 },
    {key:"Last 4 days", value:4 },
    {key:"Last 5 days", value:5 },
    {key:"Last 6 days", value:6 },
    {key:"Last Week", value:7 },
    {key:"Last 10 days", value:10 },
    {key:"Last 15 days", value:15 },
    {key:"Last 20 days", value:20 },
    {key:"Last Month", value:30 },
    

  ];
  statechange(event:any){
    this.s_selected.value=event.value;
    this.state.emit(this.s_selected);
    
  }
  timechange(event:any){
    this.t_selected.value=event.value;
    this.time.emit(this.t_selected);
  }
  
}
