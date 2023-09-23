import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScreensComponent } from './movie-screens.component';

describe('MovieScreensComponent', () => {
  let component: MovieScreensComponent;
  let fixture: ComponentFixture<MovieScreensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieScreensComponent],
    });
    fixture = TestBed.createComponent(MovieScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
