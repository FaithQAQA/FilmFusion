import { Component, Input } from '@angular/core';
import PorgramDetails from '../../assets/data/HeaderInfo.json'
import { Movie } from '../Myinterfaces/MovieShowing';
import { MovieInterface } from '../Myinterfaces/MovieDetailsInterface';
@Component({
  selector: 'app-list-of-movies',
  templateUrl: './list-of-movies.component.html',
  styleUrls: ['./list-of-movies.component.css']
})
export class ListOfMoviesComponent {

  externalMovieInfo: Movie[] = PorgramDetails.MoviesShowing
  displayedColumns: string[] = ['name', 'genre', 'runningTime', 'releaseDate', 'ratings', 'ageRestriction'];
  @Input() externalProgramData!: Movie;
  @Input() externalMovieInfo1: Movie[] = [];

}
