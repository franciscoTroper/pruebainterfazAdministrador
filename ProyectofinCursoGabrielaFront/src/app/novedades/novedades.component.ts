import { Component } from '@angular/core';
import { CuadroCancionComponent } from "../cuadro-cancion/cuadro-cancion.component";
import { NovedadesCuadrosComponent } from "../novedades-cuadros/novedades-cuadros.component";

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [CuadroCancionComponent, NovedadesCuadrosComponent],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css'
})
export class NovedadesComponent {
  
}
