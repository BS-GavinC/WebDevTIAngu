import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-log-page',
  imports: [],
  templateUrl: './log-page.component.html',
  styleUrl: './log-page.component.css'
})
export class LogPageComponent implements OnInit {

  private _loginService : LoginService = inject(LoginService)

  isConnect! : boolean;

  ngOnInit(): void {
    this._loginService.logSubject.subscribe(
      (value) => {
        this.isConnect = value
      }
    )
  }

  connection(){
    this._loginService.login()
  }

}
