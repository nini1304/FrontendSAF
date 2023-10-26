import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPoweruserComponent } from './lista-poweruser.component';

describe('ListaActivosComponent', () => {
  let component: ListaPoweruserComponent;
  let fixture: ComponentFixture<ListaPoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPoweruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
