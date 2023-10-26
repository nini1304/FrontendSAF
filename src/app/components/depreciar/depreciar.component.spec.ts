import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepreciarComponent } from './depreciar.component';

describe('DepreciarComponent', () => {
  let component: DepreciarComponent;
  let fixture: ComponentFixture<DepreciarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepreciarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepreciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
