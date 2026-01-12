import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hygeine } from './hygeine';

describe('Hygeine', () => {
  let component: Hygeine;
  let fixture: ComponentFixture<Hygeine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hygeine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hygeine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
