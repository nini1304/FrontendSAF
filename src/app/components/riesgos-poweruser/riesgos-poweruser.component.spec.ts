import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgosPoweruserComponent } from './riesgos-poweruser.component';

describe('RiesgosPoweruserComponent', () => {
  let component: RiesgosPoweruserComponent;
  let fixture: ComponentFixture<RiesgosPoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiesgosPoweruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiesgosPoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
