import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllmyAppointmentsComponent } from './show-allmy-appointments.component';

describe('ShowAllmyAppointmentsComponent', () => {
  let component: ShowAllmyAppointmentsComponent;
  let fixture: ComponentFixture<ShowAllmyAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllmyAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllmyAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
