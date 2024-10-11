import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Importa HttpClientModule y HttpClient
import { delay, Observable } from 'rxjs'; // Importa Observable
import { CancionService } from './cancion.service';
import { NgClass } from '@angular/common';
import { AltasBajasModificacionesComponent } from "./altas-bajas-modificaciones/altas-bajas-modificaciones.component";
import { ConsultasComponent } from "./consultas/consultas.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AltasBajasModificacionesComponent, ConsultasComponent, HttpClientModule], // Importa HttpClientModule aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title='mi aplicacion';
}
