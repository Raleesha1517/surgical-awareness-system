import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalExercises } from './physical-exercises';

describe('PhysicalExercises', () => {
  let component: PhysicalExercises;
  let fixture: ComponentFixture<PhysicalExercises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalExercises]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalExercises);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
