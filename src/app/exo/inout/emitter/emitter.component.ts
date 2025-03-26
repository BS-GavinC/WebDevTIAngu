import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InoutService } from '../services/inout.service';

@Component({
  selector: 'app-emitter',
  imports: [FormsModule],
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent {

  _inoutService : InoutService = inject(InoutService)

}
