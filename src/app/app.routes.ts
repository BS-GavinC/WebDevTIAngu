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
import { ListComponent } from './exo/fan/list/list.component';
import { AddComponent } from './exo/fan/add/add.component';
import { DetailComponent } from './exo/fan/detail/detail.component';
import { UpdateComponent } from './exo/fan/update/update.component';
import { MainComponent } from './demo/observable/main/main.component';
import { MainInterComponent } from './exo/observable/main-inter/main-inter.component';
import { PokemonComponent } from './demo/http/pokemon/pokemon.component';
import { MainHttpComponent } from './exo/http/main-http/main-http.component';

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
        path : 'observable', component : MainComponent
      },
      {
        path : 'pokemon', component : PokemonComponent
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
        path : 'list', component : ListComponent
      },
      {
        path : 'add', component : AddComponent
      },
      {
        path : 'detail/:id', component : DetailComponent
      },
      {
        path : 'update/:id', component : UpdateComponent
      },
      {
        path : 'interrupteur', component : MainInterComponent
      },
      {
        path : 'http', component : MainHttpComponent
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
