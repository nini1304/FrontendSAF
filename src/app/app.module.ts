import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarPoweruserComponent } from './components/registrar-poweruser/registrar-poweruser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MovimientosPoweruserComponent } from './components/movimientos-poweruser/movimientos-poweruser.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MAT_DATE_FORMATS, MatNativeDateModule} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from "@angular/material/dialog";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {HttpClientModule} from "@angular/common/http";
import { ListaPoweruserComponent } from './components/lista-poweruser/lista-poweruser.component';
import {MatTableModule} from "@angular/material/table";
import { ActualizarPoweruserComponent } from './components/actualizar-poweruser/actualizar-poweruser.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {CommonModule} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MasInformacionComponent } from './components/mas-informacion/mas-informacion.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { LoginComponent } from './components/login/login.component';
import { MenuPoweruserComponent } from './components/menu-poweruser/menu-poweruser.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { ListaUserComponent } from './components/lista-user/lista-user.component';
import { MenuAdministradorComponent } from './components/menu-administrador/menu-administrador.component';
import { ListaAdministradorComponent } from './components/lista-administrador/lista-administrador.component';
import { MovimientosAdministradorComponent } from './components/movimientos-administrador/movimientos-administrador.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrarPoweruserComponent,
    MovimientosPoweruserComponent,
    ListaPoweruserComponent,
    ActualizarPoweruserComponent,
    MasInformacionComponent,
    DetallesComponent,
    LoginComponent,
    MenuPoweruserComponent,
    MenuUserComponent,
    ListaUserComponent,
    MenuAdministradorComponent,
    ListaAdministradorComponent,
    MovimientosAdministradorComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        MatInputModule,
        MatDividerModule,
        MatButtonModule,
        MatDialogModule,
        MatAutocompleteModule,
        HttpClientModule,
        MatDatepickerModule,
        MatTableModule,
        MatSidenavModule,
        CommonModule,
        MatPaginatorModule,
    ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
