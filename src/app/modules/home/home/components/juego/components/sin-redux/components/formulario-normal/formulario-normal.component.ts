import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-normal',
  templateUrl: './formulario-normal.component.html',
  styleUrls: ['./formulario-normal.component.scss']
})
export class FormularioNormalComponent implements OnInit {

  puntajeRojosInput: number;
  puntajeAzulesInput: number;

  puntosRojos: number;
  puntosAzules: number;

  @Output() rojos: EventEmitter<number> = new EventEmitter<number>();
  @Output() azules: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    this.puntosRojos = 0;
    this.puntosAzules = 0;
    this.rojos.emit(this.puntosRojos);
    this.azules.emit(this.puntosAzules);
  }

  sumarPuntoRojos() {
    this.puntosRojos++;
    this.rojos.emit(this.puntosRojos);
  }

  restarPuntoRojos() {
    this.puntosRojos--;
    this.rojos.emit(this.puntosRojos);
  }

  modificarPuntajeRojos() {
    this.puntosRojos = this.puntajeRojosInput;
    this.rojos.emit(this.puntosRojos);
  }

  sumarPuntoAzules() {
    this.puntosAzules++;
    this.azules.emit(this.puntosAzules);
  }

  restarPuntoAzules() {
    this.puntosAzules--;
    this.azules.emit(this.puntosAzules);
  }

  modificarPuntajeAzules() {
    this.puntosAzules = this.puntajeAzulesInput;
    this.azules.emit(this.puntosAzules);
  }

}
