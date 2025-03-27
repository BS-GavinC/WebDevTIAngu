import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FanService } from '../services/fan.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  private _formBuilder : FormBuilder = inject(FormBuilder)

  private _fanService : FanService = inject(FanService)

  private _router : Router = inject(Router)

  form : FormGroup;

  constructor() {
    this.form = this._formBuilder.group({
      name : [null, [Validators.required, Validators.minLength(2)]],
      birthdate : [null, [Validators.required]],
      movies : this._formBuilder.array([])
    })
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
      this._fanService.addFan(this.form.value)
      setTimeout(() => {
        this._router.navigate(["/exo", "list"])
      }, 1000)
    }
  }

}
