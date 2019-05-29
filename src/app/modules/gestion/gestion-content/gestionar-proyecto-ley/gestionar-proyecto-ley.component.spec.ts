import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarProyectoLeyComponent } from './gestionar-proyecto-ley.component';

describe('GestionarProyectoLeyComponent', () => {
  let component: GestionarProyectoLeyComponent;
  let fixture: ComponentFixture<GestionarProyectoLeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarProyectoLeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarProyectoLeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
