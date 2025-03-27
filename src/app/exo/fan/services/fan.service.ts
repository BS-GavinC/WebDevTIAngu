import { Injectable } from '@angular/core';
import { Fan } from '../models/fan.interface';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  private fans : Fan[] = [{
    id : 0,
    name : 'Jean',
    birthdate : new Date(),
    movies : ['test']
  }]


  public get getFans() : Fan[] {
    return this.fans
  }

  public addFan(fan : Fan){
    fan.id = Math.max(...this.fans.map(x => x.id)) + 1
    this.fans.push(fan)
  }

  public deleteFan(id : number){
    this.fans.splice(this.fans.findIndex(x => x.id === id), 1)
  }

  public updateFan(id : number, fan : Fan){
    fan.id = id
    this.fans[this.fans.findIndex(x => x.id == id)] = fan
  }


  constructor() { }
}
