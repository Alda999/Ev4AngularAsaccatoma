import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/environments/environment';
import { Asignatura } from './asignatura';


@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  api=URL_SERVICIOS;
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  
  constructor(private http:HttpClient) { }
  
  listaAsignaturas(): Observable<any>{
    return this.http.get<any>(this.api+"/asignatura/listar")
  }
  
  registrarAsignatura(asignatura: Asignatura): Observable<any>{
    console.log(asignatura);
    //----- Para que el registro sea exitoso, el unico cambio que falto es castear al tipo Escuela despues del: this.http.post----
    //return this.http.post<Escuela>(this.api+"/escuela/registrar",escuela,{headers: this.httpHeaders})
  
    return this.http.post<Asignatura>(this.api+"/asignatura/registrar",asignatura,{headers: this.httpHeaders})
  }
}
