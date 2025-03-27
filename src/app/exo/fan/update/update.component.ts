import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FanService } from '../services/fan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Fan } from '../models/fan.interface';

@Component({
  selector: 'app-update',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  private _formBuilder : FormBuilder = inject(FormBuilder)

  private _fanService : FanService = inject(FanService)

  private _router : Router = inject(Router)

  private _activatedRoute : ActivatedRoute = inject(ActivatedRoute)

  form : FormGroup;

  fan : Fan

  constructor() {

    let id = this._activatedRoute.snapshot.params["id"]

    this.fan = this._fanService.getFans.find(x => x.id == id)!

    this.form = this._formBuilder.group({
      name : [this.fan.name, [Validators.required, Validators.minLength(2)]],
      birthdate : [this.fan.birthdate, [Validators.required]],
      movies : this._formBuilder.array([])
    })

    for (const mov of this.fan.movies) {
      this.getArray().push(new FormControl(mov, Validators.required))
    }
  }

  getArray(){
    return this.form.get("movies") as FormArray
  }

  addMovie(){
    this.getArray().push(new FormControl(null, Validators.required))
  }

  deleteArrayItem(index : number){
    this.getArray().removeAt(index)
  }

  submit(){
    if (this.form.valid) {

      let fanToUpdate = {
        ...this.form.value,
        id : this.fan.id
      }

      this._fanService.updateFan(this.fan.id, fanToUpdate)
      setTimeout(() => {
        this._router.navigate(["/exo", "list"])
      }, 1000)
    }
  }
}
