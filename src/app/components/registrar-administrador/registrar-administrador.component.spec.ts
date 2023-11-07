import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAdministradorComponent } from './registrar-administrador.component';

describe('RegistrarAdminComponent', () => {
  let component: RegistrarAdministradorComponent;
  let fixture: ComponentFixture<RegistrarAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
