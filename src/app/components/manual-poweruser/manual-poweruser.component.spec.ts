import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualPoweruserComponent } from './manual-poweruser.component';

describe('ManualPoweruserComponent', () => {
  let component: ManualPoweruserComponent;
  let fixture: ComponentFixture<ManualPoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualPoweruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualPoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
