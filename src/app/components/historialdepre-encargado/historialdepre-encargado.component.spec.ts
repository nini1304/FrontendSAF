import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialdepreEncargadoComponent } from './historialdepre-encargado.component';

describe('HistorialdepreEncargadoComponent', () => {
  let component: HistorialdepreEncargadoComponent;
  let fixture: ComponentFixture<HistorialdepreEncargadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialdepreEncargadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialdepreEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
