import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {

  private _formBuilder : FormBuilder = inject(FormBuilder)
  form : FormGroup;

  reg : RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

  constructor() {
    this.form = this._formBuilder.group({
      email : ['user@user.be', [Validators.required, Validators.email]],
      password : ['',[Validators.pattern(this.reg), Validators.required]],
      beg : this._formBuilder.array([])
    })
  }

  getBegArray(): FormArray{
    return this.form.get('beg') as FormArray
  }

  addBeg(){
    this.getBegArray().push(new FormControl("", Validators.required))
  }

  removeBeg(index : number){
    this.getBegArray().removeAt(index)
  }

  submit(){
    if (this.form.valid) {
      console.log(this.form.value);
    }
    else{
      console.log("Invalide");

    }
  }

}
