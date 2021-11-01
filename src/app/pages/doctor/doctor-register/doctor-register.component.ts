import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    age: new FormControl("",[Validators.required,Validators.minLength(24)]),
    phone: new FormControl("",[Validators.required,Validators.minLength(10),Validators.pattern('/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im')]),

    email: new FormControl("",[Validators.required,Validators.minLength(3),Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(25)]),

    address: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(100)]),
    price: new FormControl("",[Validators.required,Validators.min(100)]),
    female: new FormControl(""),
    male: new FormControl(""),
  })
  registerUser(){
    console.log(this.registerForm.valid)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
