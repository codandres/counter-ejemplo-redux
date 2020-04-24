import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sin-redux',
  templateUrl: './sin-redux.component.html',
  styleUrls: ['./sin-redux.component.scss']
})
export class SinReduxComponent implements OnChanges {

  rojos = 0;
  azules = 0;
  @Input() reiniciarPuntajes: boolean;
  @Output() reiniciarPuntajesChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() {
  }

  ngOnChanges(): void {
    setTimeout(() => {
      if (this.reiniciarPuntajes) {
        this.azules = 0;
        this.rojos = 0;
        this.reiniciarPuntajes = false;
        this.reiniciarPuntajesChange.emit(this.reiniciarPuntajes);
      }
    });

  }

}
