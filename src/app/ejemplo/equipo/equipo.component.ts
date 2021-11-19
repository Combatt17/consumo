import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/equipo.model';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  //Areglo que va a contener la respuesta del servidor
  public equipos: Equipo[] = [];

  //Inyectar el servicio
  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.traerEquipos();
  }

  traerEquipos(){
    this.equipoService.traerEquipos().subscribe((equipos: any)=>{
        this.equipos=equipos;
        console.log(equipos);
    })
  }

}
