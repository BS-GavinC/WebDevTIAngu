import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-mini-banner',
  imports: [],
  templateUrl: './mini-banner.component.html',
  styleUrl: './mini-banner.component.css'
})
export class MiniBannerComponent implements OnInit {

  private _loginService : LoginService = inject(LoginService)

  isConnected! : boolean;

  ngOnInit(): void {
    this._loginService.logSubject.subscribe(
      (isConnect) => {
        this.isConnected = isConnect
      }
    )
  }

  disconnect(){
    this._loginService.logout()
  }

}
