import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-main-exo',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './main-exo.component.html',
  styleUrl: './main-exo.component.css'
})
export class MainExoComponent {

  navItems : NavItem[] = [
    {
      title : 'chrono',
      url : ['/exo', 'chrono'],
      isVisible : true
    },
    {
      title : 'cart',
      url : ['/exo', 'cart'],
      isVisible : true
    },
    {
      title : 'inout',
      url : ['/exo', 'inout'],
      isVisible : true
    },
    {
      title : 'List',
      url : ['/exo', 'list'],
      isVisible : true
    },
    {
      title : 'Interrupteur',
      url : ['/exo', 'interrupteur'],
      isVisible : true
    },
    {
      title : 'Http',
      url : ['/exo', 'http'],
      isVisible : true
    },
  ]

}
