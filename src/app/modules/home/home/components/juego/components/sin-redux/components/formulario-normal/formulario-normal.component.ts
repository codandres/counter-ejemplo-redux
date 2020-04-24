import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-normal',
  templateUrl: './formulario-normal.component.html',
  styleUrls: ['./formulario-normal.component.scss']
})
export class FormularioNormalComponent implements OnInit {


  puntajeRojosInput = 0;
  puntajeAzulesInput = 0;

  puntosRojos: number;
  puntosAzules: number;

  @Output() rojosChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() azulesChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    this.inicializarValores();
  }

  inicializarValores(): void {
    this.puntosRojos = 0;
    this.puntosAzules = 0;
    this.rojosChange.emit(this.puntosRojos);
    this.azulesChange.emit(this.puntosAzules);
  }

  sumarPuntoRojos(): void {
    this.puntosRojos++;
    this.rojosChange.emit(this.puntosRojos);
  }

  restarPuntoRojos(): void {
    this.puntosRojos--;
    this.rojosChange.emit(this.puntosRojos);
  }

  modificarPuntajeRojos(): void {
    this.puntosRojos = this.puntajeRojosInput;
    this.rojosChange.emit(this.puntosRojos);
  }

  sumarPuntoAzules(): void {
    this.puntosAzules++;
    this.azulesChange.emit(this.puntosAzules);
  }

  restarPuntoAzules(): void {
    this.puntosAzules--;
    this.azulesChange.emit(this.puntosAzules);
  }

  modificarPuntajeAzules(): void {
    this.puntosAzules = this.puntajeAzulesInput;
    this.azulesChange.emit(this.puntosAzules);
  }

}
