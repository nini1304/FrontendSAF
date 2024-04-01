import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcAdministradorComponent } from './cc-administrador.component';

describe('CcAdministradorComponent', () => {
  let component: CcAdministradorComponent;
  let fixture: ComponentFixture<CcAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
