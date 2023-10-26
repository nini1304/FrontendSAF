import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPoweruserComponent } from './actualizar-poweruser.component';

describe('ActualizacionActivosComponent', () => {
  let component: ActualizarPoweruserComponent;
  let fixture: ComponentFixture<ActualizarPoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPoweruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
