import { Component } from '@angular/core';


@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {
  searchQuery: string = '';

  onSearch() {
    console.log('Buscando:', this.searchQuery);
    // Aquí puedes añadir la lógica para manejar la búsqueda
  }

}
