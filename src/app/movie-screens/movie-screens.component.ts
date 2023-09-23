import { Component, Input } from '@angular/core';
import movieShowTimingsData from '../../assets/data/HeaderInfo.json';
import { MovieShowTiming, MovieShowTimingsData } from '../Myinterfaces/MovieShowTiming';

@Component({
  selector: 'app-movie-screens',
  templateUrl: './movie-screens.component.html',
  styleUrls: ['./movie-screens.component.css']
})
export class MovieScreensComponent {

  movieScreens: number[] = [1, 2, 3, 4];
  selectedMovieScreen: number | null = null;
  selectedMovieScreenData: MovieShowTiming[] = [];
  @Input() movieShowTimingsData: MovieShowTimingsData = {};
  @Input() showTimings!: any[];

  onMovieScreenSelect(movieScreen: number) {
    this.selectedMovieScreen = movieScreen;
    const movieScreenData: any = this.movieShowTimingsData;
    this.selectedMovieScreenData = movieScreenData[movieScreen.toString()] || [];
  }
}
