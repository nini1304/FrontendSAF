import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogappPoweruserComponent } from './logapp-poweruser.component';

describe('LogappPoweruserComponent', () => {
  let component: LogappPoweruserComponent;
  let fixture: ComponentFixture<LogappPoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogappPoweruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogappPoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
