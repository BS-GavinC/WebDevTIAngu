import { Component } from '@angular/core';
import { InterrupteurComponent } from "../interrupteur/interrupteur.component";
import { LumiereComponent } from "../lumiere/lumiere.component";

@Component({
  selector: 'app-main-inter',
  imports: [InterrupteurComponent, LumiereComponent],
  templateUrl: './main-inter.component.html',
  styleUrl: './main-inter.component.css'
})
export class MainInterComponent {

}
