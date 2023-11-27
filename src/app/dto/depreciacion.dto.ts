export interface DepreciacionDto {
  id: number;
  nombre: string;
  valor: number;
  fechaCompra: string;
  descripcion: string;
  tipoActivoNombre: string;
  marcaNombre: string;
  calle: string;
  avenida: string;
  bloqueNombre: string;
  ciudadNombre: string;
  personalNombre: string;
  estadoNombre: string;
  condicionNombre: string;
  porcentajeDepreciacion: number;
  valorDepreciacion: number;
  valorActual: number;
  mesesRestantes: number;
}
