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
import {MenuEncargadoComponent} from "./components/menu-encargado/menu-encargado.component";
import {ListaEncargadoComponent} from "./components/lista-encargado/lista-encargado.component";
import {ListadepreEncargadoComponent} from "./components/listadepre-encargado/listadepre-encargado.component";
import {RegistroUsuarioComponent} from "./components/registro-usuario/registro-usuario.component";
import {ListadeprePoweruserComponent} from "./components/listadepre-poweruser/listadepre-poweruser.component";
import {ListadeUsuariosComponent} from "./components/listade-usuarios/listade-usuarios.component";
import {RegistrarAdministradorComponent} from "./components/registrar-administrador/registrar-administrador.component";
import {ActualizarUsuarioComponent} from "./components/actualizar-usuario/actualizar-usuario.component";
import {
  HistorialdeprePoweruserComponent
} from "./components/historialdepre-poweruser/historialdepre-poweruser.component";
import {ManualPoweruserComponent} from "./components/manual-poweruser/manual-poweruser.component";
import {
  HistorialdepreEncargadoComponent
} from "./components/historialdepre-encargado/historialdepre-encargado.component";
import {
  ActualizarAdministradorComponent
} from "./components/actualizar-administrador/actualizar-administrador.component";


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'menu-poweruser', component: MenuPoweruserComponent},
  { path: 'registrar-poweruser', component: RegistrarPoweruserComponent},
  { path: 'lista-poweruser', component: ListaPoweruserComponent},
  { path: 'listadepre-poweruser/:mes/:anio', component: ListadeprePoweruserComponent},
  { path: 'historialdepre-poweruser', component: HistorialdeprePoweruserComponent },
  { path: 'actualizar-poweruser/:id/:nombre/:valor/:descripcion/:calle/:avenida', component: ActualizarPoweruserComponent},
  { path: 'movimientos-poweruser', component: MovimientosPoweruserComponent},
  { path: 'registrar-usuario', component: RegistroUsuarioComponent},
  { path: 'listade-usuarios', component: ListadeUsuariosComponent},
  { path: 'actualizar-usuario/:id', component: ActualizarUsuarioComponent},
  { path: 'manual-poweruser', component: ManualPoweruserComponent},
  { path: 'menu-user', component: MenuUserComponent},
  { path: 'lista-user', component: ListaUserComponent},
  { path: 'menu-admin', component: MenuAdministradorComponent},
  { path: 'registrar-admin', component: RegistrarAdministradorComponent},
  { path: 'lista-admin', component: ListaAdministradorComponent},
  { path: 'actualizar-admin/:id/:nombre/:valor/:descripcion/:calle/:avenida', component:ActualizarAdministradorComponent},
  { path: 'movimientos-admin', component: MovimientosAdministradorComponent},
  { path: 'menu-encargado', component: MenuEncargadoComponent},
  { path: 'lista-encargado', component: ListaEncargadoComponent},
  { path: 'listadepre-encargado/:mes/:anio', component: ListadepreEncargadoComponent},
  { path: 'historialdepre-encargado', component: HistorialdepreEncargadoComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
