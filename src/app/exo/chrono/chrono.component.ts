import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  imports: [],
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.css'
})
export class ChronoComponent {

  private counter : number = 0;


  public get minutes() : number {
    return Math.floor(this.counter / 60)
  }

  public get secondes() : number {
    return Math.floor(this.counter % 60)
  }


  interval : any;

  start(){
    this.interval = setInterval(() => {
      this.counter++
    }, 1000)
  }

  stop(){
    clearInterval(this.interval);
  }

  reset(){
    this.stop();
    this.counter = 0;
  }

}
