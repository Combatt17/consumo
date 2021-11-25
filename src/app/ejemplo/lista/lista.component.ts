import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { Equipo } from 'src/app/models/equipo.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() equipos:Equipo[]=[];

  @Output() onEdit:EventEmitter<Equipo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  editar(equipo:Equipo){
    this.onEdit.emit(equipo);
  }

}
