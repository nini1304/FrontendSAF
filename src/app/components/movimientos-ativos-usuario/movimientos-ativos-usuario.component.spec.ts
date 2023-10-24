import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosAtivosUsuarioComponent } from './movimientos-ativos-usuario.component';

describe('MovimientosAtivosUsuarioComponent', () => {
  let component: MovimientosAtivosUsuarioComponent;
  let fixture: ComponentFixture<MovimientosAtivosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientosAtivosUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimientosAtivosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
