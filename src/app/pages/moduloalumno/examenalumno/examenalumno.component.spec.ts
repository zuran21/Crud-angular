import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenalumnoComponent } from './examenalumno.component';

describe('ExamenalumnoComponent', () => {
  let component: ExamenalumnoComponent;
  let fixture: ComponentFixture<ExamenalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenalumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
