import { Component} from '@angular/core';
import { states } from './navbar/states';
import { time } from './navbar/time';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  state:number=1;
  time:number=7;
  covid:any=[];
 
  constructor ( private service:RestapiService, private router: Router){
  }

  getstate(statedata:states){
    this.state=statedata.value;
    var ans=this.service.getinfo(this.state,this.time);
    var namearr = new Array(this.time);
    var valuearr = new Array(this.time);
    ans.subscribe(data=>{
      var count=this.time
      for (let index = 0; index < this.time ; index++) {
        namearr[index]="Day "+count;
        count--;
      }
      var valuearr = data.split(',').map(Number);
      valuearr.reverse();
      this.covid=[];
      for (let index = 0; index < this.time; index++) {
        this.covid.push({name:namearr[index],value:valuearr[index]});
        
      }
    });
    
  }
  gettime(timedata:time){
    this.time=timedata.value;
    var ans=this.service.getinfo(this.state,this.time);
    var namearr = new Array(this.time);
    var valuearr = new Array(this.time);
    ans.subscribe(data=>{
      var count=this.time
      for (let index = 0; index < this.time ; index++) {
        namearr[index]="Day "+count;
        count--;
      }
      var valuearr = data.split(',').map(Number);
      valuearr.reverse();
      this.covid=[];
      for (let index = 0; index < this.time; index++) {
        this.covid.push({name:namearr[index],value:valuearr[index]});
      }
    });
  }
}
