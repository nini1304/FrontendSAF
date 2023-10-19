export interface ActivoslistaDto {
  id: number;
  nombre: string;
  valor: number;
  fechaCompra: Date;
  descripcion: string;
  tipoObjetoId: number;
  marcaId: number;
  ubicacionId: number;
  personalId: number;
  estadoId: number;
  condicionId: number;
  estado: boolean;
}
