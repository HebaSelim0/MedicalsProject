import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allRoles=[];
  //sliders:any[]=["assets/1.jpg","assets/2.jpg","assets/3.jpg"];
  constructor(private _golbale:GlobalService) { }

  ngOnInit(): void {
    this.getAllRoles();
  }
getAllRoles(){
  this._golbale.getAllRoles().subscribe(data=>{
    this.allRoles=data.data;
    console.log(this.allRoles)
  })
}
}
