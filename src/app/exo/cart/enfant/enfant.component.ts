import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { Article } from '../../../interfaces/article.interface';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent {

  articles : InputSignal<Article[] | undefined> = input<Article[]>()

  eventEmitterDelete : OutputEmitterRef<number> = output<number>()

  deleteById(id : number){
    this.eventEmitterDelete.emit(id)
  }

}
