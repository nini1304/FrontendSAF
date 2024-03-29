import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarRolesComponent } from './gestionar-roles.component';

describe('GestionarRolesComponent', () => {
  let component: GestionarRolesComponent;
  let fixture: ComponentFixture<GestionarRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
