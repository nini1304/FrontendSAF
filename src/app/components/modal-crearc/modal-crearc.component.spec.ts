import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearcComponent } from './modal-crearc.component';

describe('ModalCrearcComponent', () => {
  let component: ModalCrearcComponent;
  let fixture: ComponentFixture<ModalCrearcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
