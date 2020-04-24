import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoComponent } from './home/components/juego/juego.component';

const routes: Routes = [
  { path: '', redirectTo: 'juego' },
  { path: 'juego', component: JuegoComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
