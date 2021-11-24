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

  mensaje: string="";

  estado: boolean = false;

  //Definir un grupo de formulario 
  EquipoForm!:FormGroup;


  //Inyectar el servicio
  constructor(private equipoService: EquipoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    //Contruir el formulario
    this.EquipoForm=this.fb.group({
      id:['',Validators.required],
      nombre:['',Validators.required]
    })
    this.traerEquipos();
  }

  traerEquipos(){
   
    this.equipoService.traerEquipos().subscribe((equipos: any)=>{
        this.equipos=equipos;
        console.log(equipos);
    })
  }

  enviar(){
    this.estado=true;
    console.log(this.EquipoForm)
    if(this.EquipoForm.status=="INVALID"){
      alert('No pueden haber campos vacios')
      this.estado=false;
    }else{
      this.equipoService.guardarEquipos(this.EquipoForm.value).subscribe((respuesta: any)=>{
      console.log(respuesta)
      this.mensaje=respuesta.mensaje
      this.traerEquipos();
      this.estado=false;
    })
    }
    
  }

}
