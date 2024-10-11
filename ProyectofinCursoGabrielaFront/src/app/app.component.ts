import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { CuadroCancionComponent } from './cuadro-cancion/cuadro-cancion.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { MasDescargadasComponent } from './mas-descargadas/mas-descargadas.component';
import { MasVendidasComponent } from './mas-vendidas/mas-vendidas.component';
import { MasBuscadasComponent } from './mas-buscadas/mas-buscadas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CabeceroComponent,CuerpoComponent,NovedadesComponent,MasDescargadasComponent,MasVendidasComponent,MasBuscadasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoNuevo1';
}
