import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipo } from 'src/app/models/equipo.model';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  //Arreglo que va a contener la respuesta del servidor
  public equipos: Equipo[] = [];

  public auxEquipo!: Equipo;

  mensaje: string="";

  estado: boolean = false;

  //Inyectar el servicio
  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    
    this.traerEquipos();
  }

  //Utilizando el método del servicio por GET
  traerEquipos(){
   
    this.equipoService.traerEquipos().subscribe((equipos: any)=>{
        this.equipos=equipos;
        console.log(equipos);
    })
  }

  //Utilizando el método del service por POST
  enviar(equipo: Equipo){ //Lo recibe desde el $event --->Equipo
    this.estado=true;
      this.equipoService.guardarEquipos(equipo).subscribe((respuesta: any)=>{
      console.log(respuesta)
      this.mensaje=respuesta.mensaje
      this.traerEquipos();
      this.estado=false;
    })
    }
    
  

  editar(equipo:Equipo){
    this.auxEquipo=equipo;
  }

}

