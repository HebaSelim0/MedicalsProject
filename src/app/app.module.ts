import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//heba add this
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { UserComponent } from './pages/user/user.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { AppointmentBookingComponent } from './pages/user/appointment-booking/appointment-booking.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ActivateComponent } from './pages/user/activate/activate.component';

import { HomeComponent } from './pages/general/home/home.component';
import { Error404Component } from './pages/general/error404/error404.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';


import { DoctorCardsComponent } from './shared/doctor-cards/doctor-cards.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { ShowAppointmentsComponent } from './pages/doctor/show-appointments/show-appointments.component';
import { EditScheduleComponent } from './pages/doctor/edit-schedule/edit-schedule.component';
import { DeleteScheduleComponent } from './pages/doctor/delete-schedule/delete-schedule.component';
import { AddScheduleComponent } from './pages/doctor/add-schedule/add-schedule.component';
import { EditAppointmentComponent } from './pages/user/edit-appointment/edit-appointment.component';
import { CancelAppointmentComponent } from './pages/user/cancel-appointment/cancel-appointment.component';
import { ShowAllmyAppointmentsComponent } from './pages/user/show-allmy-appointments/show-allmy-appointments.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LogoutComponent } from './pages/general/logout/logout.component';

//date picker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//doctor // admin
import { DoctorRegisterComponent } from './pages/doctor/doctor-register/doctor-register.component';
import { DoctorActivateComponent } from './pages/doctor/doctor-activate/doctor-activate.component';
import { DoctorHomePageComponent } from './pages/doctor/doctor-home-page/doctor-home-page.component';
import { DoctorLoginComponent } from './pages/doctor/doctor-login/doctor-login.component';
import { DoctorProfileComponent } from './pages/doctor/doctor-profile/doctor-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProfileComponent,
    AppointmentBookingComponent,
    LoginComponent,
    ActivateComponent,
    HomeComponent,
    Error404Component,
    NavbarComponent,
    FooterComponent,
    DoctorCardsComponent,
    DoctorComponent,
    ShowAppointmentsComponent,
    DeleteScheduleComponent,
    AddScheduleComponent,
    EditAppointmentComponent,
    CancelAppointmentComponent,
    ShowAllmyAppointmentsComponent,
    RegisterComponent,
    LogoutComponent,
    DoctorRegisterComponent,
    DoctorActivateComponent,
    DoctorHomePageComponent,
    DoctorLoginComponent,
    DoctorProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //heba added this
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
