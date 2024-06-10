import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSemaforoComponent } from './modal-semaforo.component';

describe('ModalSemaforoComponent', () => {
  let component: ModalSemaforoComponent;
  let fixture: ComponentFixture<ModalSemaforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSemaforoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSemaforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
