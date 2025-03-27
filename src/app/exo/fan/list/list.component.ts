import { Component, inject } from '@angular/core';
import { FanService } from '../services/fan.service';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [DatePipe, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  protected _fanService : FanService = inject(FanService);

  private _router : Router = inject(Router)

  routeToUpdate(id : number){
    this._router.navigate(['/exo/update/' + id])
  }

  routeToDateil(id : number){
    this._router.navigate(['/exo/detail/' + id])
  }

}
