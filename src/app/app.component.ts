import { Component } from '@angular/core';
import programDetails from '../assets/data/HeaderInfo.json';
import { ProgramDataInterface } from './Myinterfaces/ProgramDetailsinterface';
import { Movie } from './Myinterfaces/MovieShowing';
import { MovieShowTimingsData } from './Myinterfaces/MovieShowTiming';
import headInfo from '../assets/data/HeaderInfo.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment4';

  externalProgramData: ProgramDataInterface = programDetails.ProgramData;
  moviesData2: Movie[] = programDetails.MoviesShowing;
  selectedMovieScreen: number | null = null;
 // movieShowTimingsData: MovieShowTimingsData = programDetails.MovieShowTimingsData;
 // movieShowTimingsData: MovieShowTimingsData = movieShowTimingsData.MovieShowTimingsData;
 // movieShowTimingsData: MovieShowTimingsData = programDetails.MovieShowTimingsData;
  movieShowTimingsData = headInfo.MovieShowTimingsData;
  movieScreensData = headInfo.MovieShowTimingsData;

}
