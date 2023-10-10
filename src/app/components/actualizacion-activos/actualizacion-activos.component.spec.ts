import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionActivosComponent } from './actualizacion-activos.component';

describe('ActualizacionActivosComponent', () => {
  let component: ActualizacionActivosComponent;
  let fixture: ComponentFixture<ActualizacionActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizacionActivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizacionActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
