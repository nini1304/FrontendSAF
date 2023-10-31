import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadeprePoweruserComponent } from './listadepre-poweruser.component';

describe('ListadeprePoweruserComponent', () => {
  let component: ListadeprePoweruserComponent;
  let fixture: ComponentFixture<ListadeprePoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadeprePoweruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadeprePoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
