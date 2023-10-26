import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEncargadoComponent } from './menu-encargado.component';

describe('MenuEncargadoComponent', () => {
  let component: MenuEncargadoComponent;
  let fixture: ComponentFixture<MenuEncargadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEncargadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
