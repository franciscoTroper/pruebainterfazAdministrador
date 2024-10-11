import { NgClass } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CancionService } from '../cancion.service';

@Component({
  selector: 'app-altas-bajas-modificaciones',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgClass],
  templateUrl: './altas-bajas-modificaciones.component.html',
  styleUrl: './altas-bajas-modificaciones.component.css'
})
export class AltasBajasModificacionesComponent {
  constructor(private cancionService: CancionService) { console.log('CancionService inyectado:', this.cancionService);
  
  
  }  // Inyecta el servicio
  
  title = 'InterfazParaAdministradores';
  accion: string = 'alta'; // Cambia esta variable para mostrar diferentes formularios
  
  cancion: any = {
    nombreCancion: '',
    fechaCreacion: '',
    duracionCancion: ''
  }
  interprete: any= {
    nombreInterprete: '',
    fechaCreacionGrupo: '',
    paisOrigen: ''
    }
  genero: any= {
    tipoGenero:''
  };
  
  onSubmit(){

  switch(this.accion)
  {
      case 'alta': 
      {

        if(this.checkedCancion)
          {
          this.cancionService.AltaCancion(this.cancion).subscribe(response => 
            {
            console.log('Canción enviada:', response);
            });
          }
        if(this.checkedInterprete)
          {
          this.cancionService.AltaInterprete(this.interprete).subscribe(response => 
            {
            console.log('interprete enviado:', response);
            });
          }
        if(this.checkedGenero){
          this.cancionService.AltaGenero(this.genero).subscribe(response => 
            {
            console.log('genero enviado:', response);
            });
          }
          
          
        break;
      }



        break;
      case 'baja': 
      {
        if(this.checkedCancion)
          {
            this.cancionService.BajasCancion(this.cancion).subscribe(response => 
            {
              console.log('Interprete enviado:', response);
            });
          }
        if(this.checkedInterprete)
          {
            this.cancionService.BajasInterprete(this.interprete).subscribe(response => 
            {
              console.log('Interprete enviado:', response);
            });
          }
        if(this.checkedGenero)
          {
            this.cancionService.BajasGenero(this.genero).subscribe(response => 
            {
            console.log('genero enviado:', response);
            });
          }
        break;
      }
        
      case 'modificar': {
        if(this.checkedCancion){

        }
        if(this.checkedInterprete){

        }
        if(this.checkedGenero){

        }
        
        break;
      }
       
        
        break;
      case 'consulta':{
        if(this.checkedCancion){
          
        }
        if(this.checkedInterprete){
          this.cancionService.Consultas(this.cancion.interprete).subscribe(response => 
            {
            console.log('Interprete enviado:', response);
            });
        }
        if(this.checkedGenero){

        }
        
        break;
      }
       
        default:
    }

  }
 
  alta() {
      this.accion='alta'
      this.habilitarInputs();
      console.log(this.genero.tipoGenero);
    }
  
  baja() {
      this.accion='baja';
      this.deshabilitarInputs();
      console.log(this.genero.tipoGenero);
    }
  
  modificar() {
      this.accion='modificar';
      this.habilitarInputs();
      console.log(this.genero.tipoGenero);
    }
  
  consultar() {
      this.accion='consultar';
      this.habilitarInputs();
    }

  habilitarInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.disabled = false;
    });
  }
   deshabilitarInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      if (input.id === 'candisable') {
        input.disabled = true;
      }
    });
  }
  MarcarDesmarcarRadios(event: Event){
      const checkBox = event.target as HTMLInputElement;
  
    }

  checkedCancion:boolean=false;
  checkedInterprete:boolean=false;
  checkedGenero:boolean=false;
  
  marcandoCheckBoxCancion(){

    setTimeout(() => {
      if(this.checkedCancion){
           this.checkedGenero=true;
           this.checkedInterprete=true;
      }
      else{
        this.cancion.nombreCancion='';
        this.cancion.fechaCreacion='';
        this.cancion.duracionCancion='';
      }
    }, 100);
  
  }
  marcandoCheckBoxInterprete()
  {
    setTimeout(() => {
      if(!this.checkedInterprete){
        console.log(this.checkedInterprete);
        this.interprete.nombreInterprete='';
        this.interprete.fechaCreacionGrupo='';
        this.interprete.paisOrigen='';
        }
    }, 100);
    
  }
  marcancoCheckBoxGenero(){
    setTimeout(() => {
      if(!this.checkedGenero){
        this.genero.tipoGenero='';
        } 
    }, 100);
  }

 
}
