import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-doctor-cards',
  templateUrl: './doctor-cards.component.html',
  styleUrls: ['./doctor-cards.component.css']
})
export class DoctorCardsComponent implements OnInit {

  @Input() dData :any
  constructor(public _global:GlobalService) { }

  ngOnInit(): void {
  }

}
