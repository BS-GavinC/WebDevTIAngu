import { Component, input, Input, InputSignal, output, Output, OutputEmitterRef, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent {
  // Input
  valeurDuParent : InputSignal<string|undefined> = input<string>()

  //Output
  eventParent : OutputEmitterRef<string> = output<string>()

  transmettre(){
    this.eventParent.emit('Salut papa')
  }

  // Signal Exemple
  monSignal = signal<string>('');

  changeValue(){
    this.monSignal.set('Bonjour')
  }

}
