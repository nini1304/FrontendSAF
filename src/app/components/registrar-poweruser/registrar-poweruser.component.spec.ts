import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPoweruserComponent } from './registrar-poweruser.component';

describe('RegistroProductoComponent', () => {
  let component: RegistrarPoweruserComponent;
  let fixture: ComponentFixture<RegistrarPoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPoweruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
