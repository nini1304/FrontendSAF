import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPoweruserComponent } from './menu-poweruser.component';

describe('MenuAdministradorComponent', () => {
  let component: MenuPoweruserComponent;
  let fixture: ComponentFixture<MenuPoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPoweruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
