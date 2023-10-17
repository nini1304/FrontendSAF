import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
import { MainComponent } from './components/main/main.component';
import { ActivoListComponent } from './components/movimientos-en-activos/activo-list.component';
import {ListaActivosComponent} from "./components/lista-activos/lista-activos.component";
import {ActualizacionActivosComponent} from "./components/actualizacion-activos/actualizacion-activos.component";

const routes: Routes = [
  { path: 'registro-activo', component: RegistroProductoComponent },
  { path: 'actualizar-activo', component: ActualizacionActivosComponent },
  { path: 'lista-activos', component: ListaActivosComponent },
  { path: 'movimientos-en-activos', component: ActivoListComponent },
  { path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
