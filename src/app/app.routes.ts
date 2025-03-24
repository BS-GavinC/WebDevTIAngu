import { Routes } from '@angular/router';
import { MyComponentComponent } from './component/my-component/my-component.component';
import { MySecondComponentComponent } from './component/my-second-component/my-second-component.component';
import { MySubComponentComponent } from './component/my-sub-component/my-sub-component.component';

export const routes: Routes = [
  {
    path : 'my-component', component : MyComponentComponent, children : [
      {
        path : 'my-sub-component', component : MySubComponentComponent
      }
    ]
  },
  {
    path : 'my-second-component', component : MySecondComponentComponent
  }
];
