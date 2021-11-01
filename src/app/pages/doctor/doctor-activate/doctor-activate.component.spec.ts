import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorActivateComponent } from './doctor-activate.component';

describe('DoctorActivateComponent', () => {
  let component: DoctorActivateComponent;
  let fixture: ComponentFixture<DoctorActivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorActivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
