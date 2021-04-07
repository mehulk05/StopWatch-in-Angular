import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwatchUsingRxjsComponent } from './stopwatch-using-rxjs.component';

describe('StopwatchUsingRxjsComponent', () => {
  let component: StopwatchUsingRxjsComponent;
  let fixture: ComponentFixture<StopwatchUsingRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopwatchUsingRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwatchUsingRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
