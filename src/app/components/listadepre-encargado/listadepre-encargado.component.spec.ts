import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadepreEncargadoComponent } from './listadepre-encargado.component';

describe('ListaDepreciadaComponent', () => {
  let component: ListadepreEncargadoComponent;
  let fixture: ComponentFixture<ListadepreEncargadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadepreEncargadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadepreEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
