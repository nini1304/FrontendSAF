import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcPoweruserComponent } from './cc-poweruser.component';

describe('CcPoweruserComponent', () => {
  let component: CcPoweruserComponent;
  let fixture: ComponentFixture<CcPoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcPoweruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcPoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
