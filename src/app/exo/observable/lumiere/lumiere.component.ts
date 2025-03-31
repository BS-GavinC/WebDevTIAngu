import { Component, inject, OnInit } from '@angular/core';
import { InterrupteurService } from '../service/interrupteur.service';

@Component({
  selector: 'app-lumiere',
  imports: [],
  templateUrl: './lumiere.component.html',
  styleUrl: './lumiere.component.css'
})
export class LumiereComponent implements OnInit {

  private _interrupteurService : InterrupteurService = inject(InterrupteurService)

  isActive! : boolean;

  public get getStyle() : any {
    return {
      "background-color" : this.isActive ? "yellow" : "white"
    }
  }

  ngOnInit(): void {
    this._interrupteurService.interrupteur$.subscribe((statut) => {
      this.isActive = statut
    })
  }


}
