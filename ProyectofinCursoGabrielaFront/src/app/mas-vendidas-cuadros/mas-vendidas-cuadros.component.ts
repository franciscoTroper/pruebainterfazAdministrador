import { Component } from '@angular/core';
import { CuadroCancionComponent } from '../cuadro-cancion/cuadro-cancion.component';

@Component({
  selector: 'app-mas-vendidas-cuadros',
  standalone: true,
  imports: [CuadroCancionComponent],
  templateUrl: './mas-vendidas-cuadros.component.html',
  styleUrl: './mas-vendidas-cuadros.component.css'
})
export class MasVendidasCuadrosComponent {

}
