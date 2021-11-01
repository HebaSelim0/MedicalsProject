import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData = { name:"", gender:"", age:"", email:"", password:"", phone:"" }
  emailError = ""
  constructor(
    private _global:GlobalService,
    private router:Router,
    private toastr: ToastrService
    )
    { }
  LoginForm = new FormGroup({

  })

  ngOnInit(): void {
  }
  onRegister(data:any){
    console.log(data.value)
  }
  registerForm = new FormGroup({
     name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
     age: new FormControl("",[Validators.required,Validators.minLength(24)]),
     phone: new FormControl("",[Validators.required,Validators.minLength(10),Validators.pattern('/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im')]),

     email: new FormControl("",[Validators.required,Validators.minLength(3),Validators.email]),
     password: new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(25)]),

     address: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(100)]),
     female: new FormControl(""),
     male: new FormControl(""),
    })
   register_userFun(registerUser:NgForm){
    if(registerUser.valid){
      this._global.registerUser(this.userData).subscribe(
        (res)=>{},
        (err)=>{
          if(err.error.data.includes('email')) this.emailError="email used before"
        },
        ()=>{
          this.emailError=""
          registerUser.resetForm()
          this.toastr.success('Success!', 'registered!');
          setTimeout(()=>{
            this.router.navigateByUrl('/user/login?msg=success')
          },500)
        }//final
      )
    }
  }

}
