import { Component,OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  public Loginstatus = false;
  constructor(private fb:FormBuilder,private router:Router){}
  LoginFormGroup=this.fb.group({
    username:[''],
    password:['']
  })
  OnSubmit(){
    if(this.LoginFormGroup.value.username == 'Admin' && this.LoginFormGroup.value.password=='Admin'){
      this.router.navigate(['adminhome'])
    }
    else{
      this.Loginstatus = true;
      alert("Invalid Username or Password ");
    }
  }
  ngOnInit(): void {
    
  }

}
