import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellBeing } from './well-being';

describe('WellBeing', () => {
  let component: WellBeing;
  let fixture: ComponentFixture<WellBeing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WellBeing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellBeing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
