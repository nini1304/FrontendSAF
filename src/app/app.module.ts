import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ActivoListComponent } from './components/activo-list/activo-list.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegistroProductoComponent,
    ActivoListComponent
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
