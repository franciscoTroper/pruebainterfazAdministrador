import { Component } from '@angular/core';

import { MasBuscadasCuadrosComponent } from "../mas-buscadas-cuadros/mas-buscadas-cuadros.component";
import { PieDePaginaComponent } from '../pie-de-pagina/pie-de-pagina.component';

@Component({
  selector: 'app-mas-buscadas',
  standalone: true,
  imports: [MasBuscadasCuadrosComponent,PieDePaginaComponent],
  templateUrl: './mas-buscadas.component.html',
  styleUrl: './mas-buscadas.component.css'
})
export class MasBuscadasComponent {

}
