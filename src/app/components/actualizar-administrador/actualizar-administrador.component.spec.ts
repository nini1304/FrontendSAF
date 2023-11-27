import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAdministradorComponent } from './actualizar-administrador.component';

describe('ActualizarAdministradorComponent', () => {
  let component: ActualizarAdministradorComponent;
  let fixture: ComponentFixture<ActualizarAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
