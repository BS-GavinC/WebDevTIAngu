import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FanService } from '../services/fan.service';
import { Fan } from '../models/fan.interface';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  private _activatedRoute : ActivatedRoute = inject(ActivatedRoute)

  private _fanService : FanService = inject(FanService)

  fan : Fan


  constructor() {

    let id = this._activatedRoute.snapshot.params["id"]

    this.fan = this._fanService.getFans.find(x => x.id == id)!

  }

}
