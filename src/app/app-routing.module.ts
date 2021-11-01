import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { AppRoutingModule } from './app-routing.module';

import { AddScheduleComponent } from './pages/doctor/add-schedule/add-schedule.component';
import { DeleteScheduleComponent } from './pages/doctor/delete-schedule/delete-schedule.component';
import { DoctorActivateComponent } from './pages/doctor/doctor-activate/doctor-activate.component';
import { DoctorHomePageComponent } from './pages/doctor/doctor-home-page/doctor-home-page.component';
import { DoctorLoginComponent } from './pages/doctor/doctor-login/doctor-login.component';
import { DoctorProfileComponent } from './pages/doctor/doctor-profile/doctor-profile.component';
import { DoctorRegisterComponent } from './pages/doctor/doctor-register/doctor-register.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { EditScheduleComponent } from './pages/doctor/edit-schedule/edit-schedule.component';
import { ShowAppointmentsComponent } from './pages/doctor/show-appointments/show-appointments.component';
import { Error404Component } from './pages/general/error404/error404.component';
import { HomeComponent } from './pages/general/home/home.component';
import { LogoutComponent } from './pages/general/logout/logout.component';
import { ActivateComponent } from './pages/user/activate/activate.component';
import { AppointmentBookingComponent } from './pages/user/appointment-booking/appointment-booking.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { ShowAllmyAppointmentsComponent } from './pages/user/show-allmy-appointments/show-allmy-appointments.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"user",children:[
    {path:"",component:ProfileComponent},
   {path:"register",component:RegisterComponent},
    {path:"activate/:id",component:ActivateComponent},
    {path:"login",component:LoginComponent},
    {path:"bookAppointment",component:AppointmentBookingComponent},
    {path:"showMyAppointments",component:ShowAllmyAppointmentsComponent},
    {path:"logout",component:LogoutComponent}

  ]
  },
  {path:"post",children:[
    {path:"",component:ShowAllmyAppointmentsComponent},
    {path:"bookAppointment",component:AppointmentBookingComponent},
    {path:"activate/:id",component:ActivateComponent},
    {path:"login",component:LoginComponent},
    {path:"bookAppointment",component:AppointmentBookingComponent},
    {path:"logout",component:LogoutComponent}

  ]
  },
  {path:"doctor",children:[
    {path:"",component:DoctorProfileComponent},
    {path:"register",component:DoctorRegisterComponent},
    {path:"activate/:id",component:DoctorActivateComponent},
    {path:"login",component:DoctorLoginComponent},
    {path:"show-appointments",component:ShowAppointmentsComponent},
    {path:"addSchedule",component:AddScheduleComponent},
    {path:"deleteSchedule",component:DeleteScheduleComponent},
    {path:"editSchedule",component:EditScheduleComponent},
    {path:"home",component:DoctorHomePageComponent},
    {path:"logout",component:LogoutComponent}

     ]
  },
  {path:"post",children:[
    {path:"",component:ShowAppointmentsComponent},
    {path:"Add",component:AddScheduleComponent},
    {path:"delete/:id",component:DeleteScheduleComponent},
    {path:"update/id",component:EditScheduleComponent},
    {path:"show",component:ShowAppointmentsComponent},
    {path:"logout",component:LogoutComponent}

  ]
  },
  {path:"**",component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
