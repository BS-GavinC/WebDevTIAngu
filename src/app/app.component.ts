import { Component, OnInit } from '@angular/core';
import { MyComponentComponent } from "./component/my-component/my-component.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MyComponentComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor() {
    console.log('CTOR');
  }

  ngOnInit(): void {
    console.log('INIT');
  }

}
