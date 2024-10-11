import { inject, Inject, Injectable,Optional } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { isEmpty, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CancionService {
  private apiUrl = 'http://localhost:8080'; // Cambia esta URL por la de tu backend
  

  private http = inject(HttpClient); 

  AltaCancion(cancion: any): Observable<any> {
    return this.http.post(this.apiUrl+'/canciones', cancion);
  }
  AltaInterprete(interprete: any):Observable<any>{
    if (this.http === null) {
      return new Observable<null>;
    }
    else{
    console.log("///"+interprete.fechaCreacionGrupo+"///"+interprete.nombreInterprete+"///"+interprete.paisOrigen+"///"); 
    return this.http.post(this.apiUrl + '/interpretes', interprete);
    }

  }
  AltaGenero(genero: any):Observable<any>{
    if (this.http === null) {
    
      return new Observable<null>;
    } else {
     
      return this.http.post(this.apiUrl +'/generos', genero);
    }
   
  }
  
  BajasCancion(cancion: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/canciones`, cancion);
  }
  
  BajasInterprete(interprete: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/interpretes`, interprete);
  }

  BajasGenero(genero: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/generos`, genero);
  }

  modificarCancion(cancion:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/canciones`,cancion)
  }
  modificarInterprete(interpete:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/interpretes`,interpete)
  }
  modificarGenero(genero:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/generos`,genero)
  }



  Consultas(genero: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/generos`, genero);
  }
}
