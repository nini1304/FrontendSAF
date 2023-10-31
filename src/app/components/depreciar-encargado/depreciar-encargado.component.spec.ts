import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepreciarEncargadoComponent } from './depreciar-encargado.component';

describe('DepreciarComponent', () => {
  let component: DepreciarEncargadoComponent;
  let fixture: ComponentFixture<DepreciarEncargadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepreciarEncargadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepreciarEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
