import { Component, inject } from '@angular/core';
import { InterrupteurService } from '../service/interrupteur.service';

@Component({
  selector: 'app-interrupteur',
  imports: [],
  templateUrl: './interrupteur.component.html',
  styleUrl: './interrupteur.component.css'
})
export class InterrupteurComponent {

  private _interrupteurService : InterrupteurService = inject(InterrupteurService)


  public get getStyle() : any {
    return {
      "background-color" : this._interrupteurService.isActive ? 'grey' : 'white'
    }
  }

  activer(){
    this._interrupteurService.activer()
  }



}
