import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearrComponent } from './modal-crearr.component';

describe('ModalCrearrComponent', () => {
  let component: ModalCrearrComponent;
  let fixture: ComponentFixture<ModalCrearrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
