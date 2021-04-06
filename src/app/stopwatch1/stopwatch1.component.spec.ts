import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stopwatch1Component } from './stopwatch1.component';

describe('Stopwatch1Component', () => {
  let component: Stopwatch1Component;
  let fixture: ComponentFixture<Stopwatch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stopwatch1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Stopwatch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
