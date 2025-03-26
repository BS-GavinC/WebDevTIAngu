import { Component } from '@angular/core';
import { EmitterComponent } from "./emitter/emitter.component";
import { ReceiverComponent } from "./receiver/receiver.component";

@Component({
  selector: 'app-inout',
  imports: [EmitterComponent, ReceiverComponent],
  templateUrl: './inout.component.html',
  styleUrl: './inout.component.css'
})
export class InoutComponent {

}
