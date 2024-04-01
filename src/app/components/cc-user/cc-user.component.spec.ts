import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcUserComponent } from './cc-user.component';

describe('CcUserComponent', () => {
  let component: CcUserComponent;
  let fixture: ComponentFixture<CcUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
