import { Component, signal } from '@angular/core';
import { EnfantComponent } from '../enfant/enfant.component';

@Component({
  selector: 'app-parent',
  imports: [EnfantComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  valeurParent = "Bonjour Fiston"

  valeurEnfant! : string;

  recevoirValeurEnfant(valeur : string){
    this.valeurEnfant = valeur
  }

}
