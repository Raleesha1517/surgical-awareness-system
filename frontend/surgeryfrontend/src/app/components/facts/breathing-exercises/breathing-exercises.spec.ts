import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathingExercises } from './breathing-exercises';

describe('BreathingExercises', () => {
  let component: BreathingExercises;
  let fixture: ComponentFixture<BreathingExercises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreathingExercises]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreathingExercises);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
