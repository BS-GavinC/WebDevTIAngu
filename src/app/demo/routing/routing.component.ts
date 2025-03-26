import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent implements OnInit{

  _router : Router = inject(Router)
  _activatedRoute : ActivatedRoute = inject(ActivatedRoute)

  id: string | undefined

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id']
    console.log(this._activatedRoute.snapshot.queryParams["pomme"]);

  }

  toBinding(){
    this._router.navigate(['/demo', 'binding'])
  }

}
