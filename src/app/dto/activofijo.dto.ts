export interface ActivoFijoDto{
  id: number;
  nombre: String;
  valor: number;
  fechaCompra?: string;
  fechaRegistro: string;
  descripcion: string;
  //private Integer porcentajeDepreciacion;
  tipoObjeto: number;
  marcaId: number;
  ubicacionId: number;
  personalId: number;
  estadoId: number;
  condicionId: number;
  estado: boolean;
  usuario: string;
  evento: string;
}
