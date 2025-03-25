import { Component } from '@angular/core';
import { count } from 'rxjs';

export enum country{
  be,
  fr,
  nl
}

@Component({
  selector: 'app-directive',
  imports: [],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {


  // if dir
  age : number = 14;

  //for dir
  maList : number[] = [1,2,3,4,5,6,7,8,9,10]

  // Switch Dir
  countryEnum: typeof country = country;
  countrySelected : country = country.fr

}
