import { Personal } from './personal';
import { TipoActivo } from './tipoactivo';
import { Ubicacion } from './ubicacion';

export interface ActivoFijo {
    id: number;
    nombre: string;
    fecha_compra: Date;
    costo: number;
    descripcion: string;
    porcentaje: number;
    fecha_registro: Date;
    tipoactivo: TipoActivo;
    ubicacion: Ubicacion;
    personal: Personal;
}