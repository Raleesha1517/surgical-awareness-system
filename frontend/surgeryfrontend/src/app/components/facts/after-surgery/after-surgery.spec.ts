import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSurgery } from './after-surgery';

describe('AfterSurgery', () => {
  let component: AfterSurgery;
  let fixture: ComponentFixture<AfterSurgery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterSurgery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterSurgery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
