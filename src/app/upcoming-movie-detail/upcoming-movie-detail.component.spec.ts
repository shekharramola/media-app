import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMovieDetailComponent } from './upcoming-movie-detail.component';

describe('UpcomingMovieDetailComponent', () => {
  let component: UpcomingMovieDetailComponent;
  let fixture: ComponentFixture<UpcomingMovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingMovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
