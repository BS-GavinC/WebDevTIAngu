import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-banner',
  imports: [RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  navItems : NavItem[] = [
    {
      title : 'Demo',
      url : ['/demo'],
      isVisible : true
    },
    {
      title : 'Exo',
      url : ['/exo'],
      isVisible : true
    },
  ]
}
