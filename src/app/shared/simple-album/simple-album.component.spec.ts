import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAlbumComponent } from './simple-album.component';

describe('SimpleAlbumComponent', () => {
  let component: SimpleAlbumComponent;
  let fixture: ComponentFixture<SimpleAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
