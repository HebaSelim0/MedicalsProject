import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {
  errLogin =""
  loginForm = new FormGroup({
     email: new FormControl("",[Validators.required,Validators.minLength(3),Validators.email]),
     password: new FormControl("",[Validators.required])
   })

   constructor(private _global:GlobalService, private router:Router) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get("email");
  }
  get password(){
    return this.loginForm.get("password");
  }
  log_in(){
    if(this.loginForm.valid){
      this._global.login(this.loginForm.value).subscribe(
        (data)=>{
          localStorage.setItem('testToken', data.data.token)
        },
        (e)=>{console.log(e); this.errLogin=e.error.data},
        ()=>{
          this.errLogin=""
          this._global.isAuthed=true
this.router.navigate(["/doctor"])
        }
      )
    }
  }

}
