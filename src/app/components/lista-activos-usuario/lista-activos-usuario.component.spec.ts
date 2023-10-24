import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaActivosUsuarioComponent } from './lista-activos-usuario.component';

describe('ListaActivosUsuarioComponent', () => {
  let component: ListaActivosUsuarioComponent;
  let fixture: ComponentFixture<ListaActivosUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaActivosUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaActivosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
