import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcEncargadoComponent } from './cc-encargado.component';

describe('CcEncargadoComponent', () => {
  let component: CcEncargadoComponent;
  let fixture: ComponentFixture<CcEncargadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcEncargadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
