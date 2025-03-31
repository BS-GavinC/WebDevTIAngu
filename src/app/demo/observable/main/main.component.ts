import { Component } from '@angular/core';
import { MiniBannerComponent } from "../mini-banner/mini-banner.component";
import { LogPageComponent } from "../log-page/log-page.component";

@Component({
  selector: 'app-main',
  imports: [MiniBannerComponent, LogPageComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
