import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
import { MainComponent } from './components/main/main.component';
import { ActivoListComponent } from './components/activo-list/activo-list.component';

const routes: Routes = [
  { path: 'registro-producto', component: RegistroProductoComponent },
  { path: 'lista-activos', component: ActivoListComponent },
  { path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
