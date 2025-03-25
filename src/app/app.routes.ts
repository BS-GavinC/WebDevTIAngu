import { Routes } from '@angular/router';
import { MainDemoComponent } from './demo/main-demo/main-demo.component';
import { MainExoComponent } from './exo/main-exo/main-exo.component';
import { BindingComponent } from './demo/binding/binding.component';
import { ChronoComponent } from './exo/chrono/chrono.component';
import { DirectiveComponent } from './demo/directive/directive.component';
import { ParentComponent } from './demo/inpout/parent/parent.component';
export const routes: Routes = [
  {
    path : 'demo', component : MainDemoComponent, children : [
      {
        path : 'binding', component : BindingComponent
      },
      {
        path : 'directive', component : DirectiveComponent
      },
      {
        path : 'inpout', component : ParentComponent
      },
      {
        path : '**', redirectTo : 'demo1'
      }
    ]
  },
  {
    path : 'exo', component : MainExoComponent, children : [
      {
        path : 'chrono', component : ChronoComponent
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
