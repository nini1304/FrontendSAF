import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {MenuPoweruserComponent} from "./components/menu-poweruser/menu-poweruser.component";
import {RegistrarPoweruserComponent} from "./components/registrar-poweruser/registrar-poweruser.component";
import {ListaPoweruserComponent} from "./components/lista-poweruser/lista-poweruser.component";
import {ActualizarPoweruserComponent} from "./components/actualizar-poweruser/actualizar-poweruser.component";
import {MovimientosPoweruserComponent} from "./components/movimientos-poweruser/movimientos-poweruser.component";
import {MenuUserComponent} from "./components/menu-user/menu-user.component";
import {ListaUserComponent} from "./components/lista-user/lista-user.component";
import {MenuAdministradorComponent} from "./components/menu-administrador/menu-administrador.component";
import {ListaAdministradorComponent} from "./components/lista-administrador/lista-administrador.component";
import {
  MovimientosAdministradorComponent
} from "./components/movimientos-administrador/movimientos-administrador.component";


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'menu-poweruser', component: MenuPoweruserComponent},
  { path: 'registrar-poweruser', component: RegistrarPoweruserComponent},
  { path: 'lista-poweruser', component: ListaPoweruserComponent},
  { path: 'actualizar-poweruser/:id', component: ActualizarPoweruserComponent},
  { path: 'movimientos-poweruser', component: MovimientosPoweruserComponent},
  { path: 'menu-user', component: MenuUserComponent},
  { path: 'lista-user', component: ListaUserComponent},
  { path: 'menu-admin', component: MenuAdministradorComponent},
  { path: 'lista-admin', component: ListaAdministradorComponent},
  { path: 'movimientos-admin', component: MovimientosAdministradorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
