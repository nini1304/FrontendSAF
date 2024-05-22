import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsuPoweruserComponent } from './logsu-poweruser.component';

describe('LogsuPoweruserComponent', () => {
  let component: LogsuPoweruserComponent;
  let fixture: ComponentFixture<LogsuPoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsuPoweruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogsuPoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
