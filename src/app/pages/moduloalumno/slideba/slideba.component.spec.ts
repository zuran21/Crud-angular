import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidebaComponent } from './slideba.component';

describe('SlidebaComponent', () => {
  let component: SlidebaComponent;
  let fixture: ComponentFixture<SlidebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
