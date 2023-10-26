import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosPoweruserComponent } from './movimientos-poweruser.component';

describe('ActivoListComponent', () => {
  let component: MovimientosPoweruserComponent;
  let fixture: ComponentFixture<MovimientosPoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientosPoweruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimientosPoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
