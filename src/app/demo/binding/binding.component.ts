import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumberGetterPipe } from '../../pipes/number-getter.pipe';

@Component({
  selector: 'app-binding',
  imports: [FormsModule, DatePipe, NumberGetterPipe],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  maVariable : string = 'Hello World !'

  userValue : string = "Bonjour"

  isEnabled : boolean = false;

  maDate : Date = new Date();

  alphaNumeric : string = 'ABC123DEF456'

  resetValues(){
    this.maVariable = "Reseted";
    this.userValue = "Reseted";
  }

  setValue(value : string){
    this.maVariable = value;
    this.userValue = value;
  }

}
