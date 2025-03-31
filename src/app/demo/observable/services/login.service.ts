import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor() { }

  private isLog : boolean = true;

  logSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLog)

  login(){
    this.isLog = true;
    this.logSubject.next(this.isLog)
  }

  logout(){
    this.isLog = false
    this.logSubject.next(this.isLog)
  }

}
