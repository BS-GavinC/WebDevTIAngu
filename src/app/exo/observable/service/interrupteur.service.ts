import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterrupteurService {

  isActive : boolean = true;

  interrupteur$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isActive)

  activer(){
    this.isActive = !this.isActive
    this.interrupteur$.next(this.isActive)
  }

}
