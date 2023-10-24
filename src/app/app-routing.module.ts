import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
import { MainComponent } from './components/main/main.component';
import { ActivoListComponent } from './components/movimientos-en-activos/activo-list.component';
import {ListaActivosComponent} from "./components/lista-activos/lista-activos.component";
import {ActualizacionActivosComponent} from "./components/actualizacion-activos/actualizacion-activos.component";
import {LoginComponent} from "./components/login/login.component";
import {MenuAdministradorComponent} from "./components/menu-administrador/menu-administrador.component";
import {ListaActivosUsuarioComponent} from "./components/lista-activos-usuario/lista-activos-usuario.component";
import {MovimientosAtivosUsuarioComponent} from "./components/movimientos-ativos-usuario/movimientos-ativos-usuario.component";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'menu-administrador', component: MenuAdministradorComponent},
  { path: 'menu', component: MainComponent},
  { path: 'registro-activo', component: RegistroProductoComponent },
  { path: 'actualizar-activo/:id', component: ActualizacionActivosComponent },
  { path: 'lista-activos', component: ListaActivosComponent },
  { path: 'lista-activos-usuario', component: ListaActivosUsuarioComponent },
  { path: 'movimientos-en-activos', component: ActivoListComponent },
  { path: 'movimientos-activos-usuario', component: MovimientosAtivosUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
