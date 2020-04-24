import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStore } from 'src/app/shared/store/store';
import { selectPuntajes } from 'src/app/shared/store/reducers/juego.reducer';

@Component({
  selector: 'app-vista-puntaje',
  templateUrl: './vista-puntaje.component.html',
  styleUrls: ['./vista-puntaje.component.scss']
})
export class VistaPuntajeComponent implements OnInit {

  azules: number;
  rojos: number;

  constructor(private readonly store: Store<AppStore>) { }

  ngOnInit(): void {
    this.obtenerPuntajesJuego();
  }

  obtenerPuntajesJuego(): void {
    this.store.pipe(select(selectPuntajes))
      .subscribe((data: any) => {
        this.azules = data.azules;
        this.rojos = data.rojos;
      });
  }

}
