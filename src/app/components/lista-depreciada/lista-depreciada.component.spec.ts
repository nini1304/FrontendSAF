import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDepreciadaComponent } from './lista-depreciada.component';

describe('ListaDepreciadaComponent', () => {
  let component: ListaDepreciadaComponent;
  let fixture: ComponentFixture<ListaDepreciadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDepreciadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDepreciadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
