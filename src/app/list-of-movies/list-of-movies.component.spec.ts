import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMoviesComponent } from './list-of-movies.component';

describe('ListOfMoviesComponent', () => {
  let component: ListOfMoviesComponent;
  let fixture: ComponentFixture<ListOfMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfMoviesComponent]
    });
    fixture = TestBed.createComponent(ListOfMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
