import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { JuegoComponent } from './home/components/juego/juego.component';
import { ConReduxComponent } from './home/components/juego/components/con-redux/con-redux.component';
import { SinReduxComponent } from './home/components/juego/components/sin-redux/sin-redux.component';
import { FormularioComponent } from './home/components/juego/components/con-redux/components/formulario/formulario.component';
import { VistaPuntajeComponent } from './home/components/juego/components/con-redux/components/vista-puntaje/vista-puntaje.component';
import { FormularioNormalComponent } from './home/components/juego/components/sin-redux/components/formulario-normal/formulario-normal.component';
import { VistaPuntajeNormalComponent } from './home/components/juego/components/sin-redux/components/vista-puntaje-normal/vista-puntaje-normal.component';


@NgModule({
    declarations: [
        HomeComponent,
        JuegoComponent,
        ConReduxComponent,
        SinReduxComponent,
        FormularioComponent,
        VistaPuntajeComponent,
        FormularioNormalComponent,
        VistaPuntajeNormalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
