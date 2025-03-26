import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InoutService {

  sharedElement : string = 'Init';

  reset(){
    this.sharedElement = ''
  }

  constructor() { }
}
