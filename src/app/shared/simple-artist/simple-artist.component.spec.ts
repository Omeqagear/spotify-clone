import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleArtistComponent } from './simple-artist.component';

describe('SimpleArtistComponent', () => {
  let component: SimpleArtistComponent;
  let fixture: ComponentFixture<SimpleArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
