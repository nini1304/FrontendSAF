import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdministradorComponent } from './lista-administrador.component';

describe('ListaAdministradorComponent', () => {
  let component: ListaAdministradorComponent;
  let fixture: ComponentFixture<ListaAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
