import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vista-puntaje-normal',
  templateUrl: './vista-puntaje-normal.component.html',
  styleUrls: ['./vista-puntaje-normal.component.scss']
})
export class VistaPuntajeNormalComponent {

  @Input() azules: number = 0;
  @Input() rojos: number = 0;

  constructor() { }

}
