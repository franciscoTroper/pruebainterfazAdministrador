import { Component } from '@angular/core';
import { CuadroCancionComponent } from '../cuadro-cancion/cuadro-cancion.component';

@Component({
  selector: 'app-mas-descargadas-cuadros',
  standalone: true,
  imports: [CuadroCancionComponent],
  templateUrl: './mas-descargadas-cuadros.component.html',
  styleUrl: './mas-descargadas-cuadros.component.css'
})
export class MasDescargadasCuadrosComponent {

}
