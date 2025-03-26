import { Component, inject } from '@angular/core';
import { InoutService } from '../services/inout.service';

@Component({
  selector: 'app-receiver',
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {

  _inoutService : InoutService = inject(InoutService)


}
