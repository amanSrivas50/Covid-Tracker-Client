import { Component, OnInit,ViewChild,Output,EventEmitter } from '@angular/core';
import { UserInfo } from './user';
import { NgForm } from '@angular/forms';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  denied:boolean=false;

  @ViewChild('form') signupform: NgForm;

  constructor( private service: RestapiService, private router:Router ) { }

  user: UserInfo= new UserInfo;

  onSubmit(){
    this.user.username=this.signupform.value.username;
    this.user.password=this.signupform.value.password;
    let ans= this.service.login(this.user);
    ans.subscribe(data=>{
      if(data=="WRONG"){
        this.denied=true;
      }
      else{
      this.service.secure=data;
      this.router.navigate(["/home"]);
      }
    });
  }

}
