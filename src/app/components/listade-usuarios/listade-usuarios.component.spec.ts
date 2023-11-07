import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadeUsuariosComponent } from './listade-usuarios.component';

describe('ListadeUsuariosComponent', () => {
  let component: ListadeUsuariosComponent;
  let fixture: ComponentFixture<ListadeUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadeUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadeUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
