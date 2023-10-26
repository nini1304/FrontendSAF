import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEncargadoComponent } from './lista-encargado.component';

describe('ListaEncargadoComponent', () => {
  let component: ListaEncargadoComponent;
  let fixture: ComponentFixture<ListaEncargadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEncargadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
