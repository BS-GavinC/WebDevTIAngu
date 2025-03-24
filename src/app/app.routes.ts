import { Routes } from '@angular/router';
import { MainDemoComponent } from './demo/main-demo/main-demo.component';
import { MainExoComponent } from './exo/main-exo/main-exo.component';
import { Exo1Component } from './exo/exo1/exo1.component';
import { BindingComponent } from './demo/binding/binding.component';
export const routes: Routes = [
  {
    path : 'demo', component : MainDemoComponent, children : [
      {
        path : 'binding', component : BindingComponent
      },
      {
        path : '**', redirectTo : 'demo1'
      }
    ]
  },
  {
    path : 'exo', component : MainExoComponent, children : [
      {
        path : 'exo1', component : Exo1Component
      },
      {
        path : '**', redirectTo : 'exo1'
      }
    ]
  },
  {
    path : '**', redirectTo : 'demo'
  }
];
