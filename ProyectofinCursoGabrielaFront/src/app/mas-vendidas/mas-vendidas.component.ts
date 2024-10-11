import { Component } from '@angular/core';
import { MasVendidasCuadrosComponent } from '../mas-vendidas-cuadros/mas-vendidas-cuadros.component';

@Component({
  selector: 'app-mas-vendidas',
  standalone: true,
  imports: [MasVendidasCuadrosComponent],
  templateUrl: './mas-vendidas.component.html',
  styleUrl: './mas-vendidas.component.css'
})
export class MasVendidasComponent {

}
