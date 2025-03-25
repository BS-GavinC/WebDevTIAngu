import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-main-demo',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './main-demo.component.html',
  styleUrl: './main-demo.component.css'
})
export class MainDemoComponent {

  navItems : NavItem[] = [
    {
      title : 'Binding',
      url : ['/demo', 'binding'],
      isVisible : true
    },
    {
      title : 'Directive',
      url : ['/demo', 'directive'],
      isVisible : true
    },
    {
      title : 'InpOut',
      url : ['/demo', 'inpout'],
      isVisible : true
    },
  ]
}
