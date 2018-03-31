import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTrackComponent } from './simple-track.component';

describe('SimpleTrackComponent', () => {
  let component: SimpleTrackComponent;
  let fixture: ComponentFixture<SimpleTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
