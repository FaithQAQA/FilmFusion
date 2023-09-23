import { Component, Input } from '@angular/core';
import PorgramDetails from '../../assets/data/HeaderInfo.json'
import { ProgramDataInterface } from '../Myinterfaces/ProgramDetailsinterface';
import { MovieInterface } from '../Myinterfaces/MovieDetailsInterface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
externalProgramData: ProgramDataInterface = PorgramDetails.ProgramData
externalMovieData: MovieInterface = PorgramDetails.MovieName

}
