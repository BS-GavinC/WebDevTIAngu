import { Routes } from '@angular/router';
import { MainDemoComponent } from './demo/main-demo/main-demo.component';
import { MainExoComponent } from './exo/main-exo/main-exo.component';
import { BindingComponent } from './demo/binding/binding.component';
import { ChronoComponent } from './exo/chrono/chrono.component';
import { DirectiveComponent } from './demo/directive/directive.component';
import { ParentComponent as inpoutParent } from './demo/inpout/parent/parent.component';
import { ParentComponent as cartParent } from './exo/cart/parent/parent.component';
import { ServiceComponent } from './demo/service/service.component';
import { InoutComponent } from './exo/inout/inout.component';
import { RoutingComponent } from './demo/routing/routing.component';
import { FormsComponent } from './demo/forms/forms.component';

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
        path : 'inpout', component : inpoutParent
      },
      {
        path : 'service', component : ServiceComponent
      },
      {
        path : 'routing', component : RoutingComponent
      },
      {
        path : 'routing/:id', component : RoutingComponent
      },
      {
        path : 'forms', component : FormsComponent
      },
      {
        path : '**', redirectTo : 'demo1'
      }
    ]
  },
  {
    path : 'exo', loadComponent : () => import('./exo/main-exo/main-exo.component').then(x => x.MainExoComponent), children : [
      {
        path : 'chrono', component : ChronoComponent
      },
      {
        path : 'cart', component : cartParent
      },
      {
        path : 'inout', component : InoutComponent
      },
      {
        path : '**', redirectTo : 'chrono'
      }
    ]
  },
  {
    path : '**', redirectTo : 'demo'
  }
];
