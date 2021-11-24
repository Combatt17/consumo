import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Equipo } from '../models/equipo.model';

const baseURL= environment.baseURL;
@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) { }

  get headers(){
    return { headers: { 'Access-Control-Allow-Origin':'*'} };
  }

  //Método GET
  traerEquipos(){
    return this.http.get<Equipo[]>(`${baseURL}/equipos`, this.headers);
  }

  //Método POST
  guardarEquipos(data:Equipo){
     return this.http.post(`${baseURL}/equipos`,data);
  }
  
}
