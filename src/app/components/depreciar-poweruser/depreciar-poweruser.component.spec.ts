import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepreciarPoweruserComponent } from './depreciar-poweruser.component';

describe('DepreciarPoweruserComponent', () => {
  let component: DepreciarPoweruserComponent;
  let fixture: ComponentFixture<DepreciarPoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepreciarPoweruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepreciarPoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
