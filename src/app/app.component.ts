import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BannerComponent } from "./shared/banner/banner.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
