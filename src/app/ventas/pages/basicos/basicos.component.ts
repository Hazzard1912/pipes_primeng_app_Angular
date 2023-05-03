import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  nombreLower: string = 'jhonnier';
  nombreUpper: string = 'JHONNIER';
  nombreCompleto: string = 'JhonniEr herNanDeZ';

  fecha: Date = new Date();
}
