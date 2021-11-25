import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipo } from 'src/app/models/equipo.model';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
//Definir un grupo de formulario 
EquipoForm!:FormGroup;

@Input('equipo') equipoRecibido!: Equipo;

@Output() onNuevoEquipo: EventEmitter<Equipo>=new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //Contruir el formulario
    this.EquipoForm=this.fb.group({
      id:['',Validators.required],
      nombre:['',Validators.required]
    })
  }

  ngOnChanges(changes: SimpleChanges){
    this.EquipoForm=this.fb.group({
      id:[this.equipoRecibido.id,Validators.required],
      nombre:[this.equipoRecibido.nombre,Validators.required]
    })
  }

  enviar(){
   if( this.EquipoForm.valid){
     this.onNuevoEquipo.emit(this.EquipoForm.value)
   }else{
     alert('No pueden haber campos vacios')
   }
  }

}
