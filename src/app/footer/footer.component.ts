import { Component } from '@angular/core';
import PorgramDetails from '../../assets/data/HeaderInfo.json'
import { FooterInterface } from '../Myinterfaces/FootInterface';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  externalFooterInfo: FooterInterface= PorgramDetails.FootInfo

}
