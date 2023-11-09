import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialdeprePoweruserComponent } from './historialdepre-poweruser.component';

describe('HistorialdeprePoweruserComponent', () => {
  let component: HistorialdeprePoweruserComponent;
  let fixture: ComponentFixture<HistorialdeprePoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialdeprePoweruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialdeprePoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
