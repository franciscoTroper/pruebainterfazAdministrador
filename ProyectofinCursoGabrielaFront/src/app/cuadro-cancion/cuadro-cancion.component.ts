import { Component } from '@angular/core';

@Component({
  selector: 'app-cuadro-cancion',
  standalone: true,
  imports: [],
  templateUrl: './cuadro-cancion.component.html',
  styleUrl: './cuadro-cancion.component.css'
})
export class CuadroCancionComponent {
  playSong() {
    const progressBar = document.querySelector('.progress') as HTMLElement;
    progressBar.style.width = '100%';
    setTimeout(() => {
      progressBar.style.width = '0';
    }, 10000);
  }
  
  invisibilidad(invisiblep: boolean) {
    let cancion = document.getElementById("cancion");
    if (cancion) { // Verifica que cancion no sea null
      if (invisiblep) {
        cancion.style.display = "block"; // Mostrar el componente
      } else {
        cancion.style.display = "none"; // Ocultar el componente
      }
    } else {
      console.error("El elemento 'cancion' no se encontró.");
    }
  }
  
}
