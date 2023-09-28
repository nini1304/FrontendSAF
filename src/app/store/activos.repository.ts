import { createStore, withProps } from '@ngneat/elf';
import { withEntities, selectAllEntities, setEntities, addEntities, updateEntities, deleteEntities, withUIEntities, withActiveId, selectActiveEntity, setActiveId, withActiveIds, selectActiveEntities, toggleActiveIds } from '@ngneat/elf-entities';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

export interface ActivosState{
  id: string;
  nombreActivo: string;
  precio: number;
  descripcion: string;
  fecha: string;
  ciudad: string;
  calle: string;
  avenida: string;
  bloque: string;
  porcentaje: number;
  fechaRe: string;
}

export interface ActivosProps{
  filter: 'ALL' | 'ACTIVE' | 'COMPLETED';
}

const store = createStore(
  {name: 'activos'},
  withEntities<ActivosState>(),
  withProps<ActivosProps>({filter: 'ALL'}),
);

@Injectable({providedIn: 'root'})
export class ActivosRepository{
  activos$ = store.pipe(selectAllEntities());
  getActivosProps(){
    return store.pipe(selectAllEntities());
  }
  addActivos(activos: string, precio: number, descripcion: string, fecha: string, ciudad: string, calle: string, avenida: string, bloque: string, porcentaje: number, fechaRe: string){
    store.update(addEntities({id: uuid(), nombreActivo: activos, precio: precio, descripcion: descripcion, fecha: fecha, ciudad: ciudad, calle: calle, avenida: avenida, bloque: bloque, porcentaje: porcentaje, fechaRe: Date.now().toString()}));
  }
}
