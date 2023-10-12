export interface ActivoFijoDto{
  id: number;
  nombre: String;
  valor: number;
  fechaCompra?: string;
  descripcion: string;
  //private Integer porcentajeDepreciacion;
  tipoObjeto: number;
  marcaId: number;
  ubicacionId: number;
  personalId: number;
  estadoId: number;
  condicionId: number;
  estado: boolean;
}
