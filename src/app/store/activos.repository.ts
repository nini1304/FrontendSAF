import { createStore, withProps } from '@ngneat/elf';
import { withEntities, selectAllEntities, setEntities, addEntities, updateEntities, deleteEntities, withUIEntities, withActiveId, selectActiveEntity, setActiveId, withActiveIds, selectActiveEntities, toggleActiveIds } from '@ngneat/elf-entities';
import { Injectable } from '@angular/core';

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
