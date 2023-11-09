import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivoFijoDto} from "../../dto/activofijo.dto";
import {ActivosService} from "../../service/activos.service";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {MasInformacionComponent} from "../mas-informacion/mas-informacion.component";
import {MatDialog} from "@angular/material/dialog";
import {DetallesComponent} from "../detalles/detalles.component";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-movimientos-poweruser',
  templateUrl: './movimientos-poweruser.component.html',
  styleUrls: ['./movimientos-poweruser.component.css']
})
export class MovimientosPoweruserComponent {
  nombre = localStorage.getItem('nombre');

  Listactivo: any;
  displayedColumns = ['Nro', 'Nombre','Valor','FechaCompra','TipoActivo','masinfo','masinfo2'];
  dataSource!: MatTableDataSource<ActivoFijoDto>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private activosService:ActivosService, public dialog: MatDialog,) {
  }
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  async ngOnInit():Promise<void> {

    this.Listactivo=await this.cargarDatos();
    this.dataSource= new MatTableDataSource<ActivoFijoDto>(this.Listactivo);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.dataSource.paginator = this.paginator;
  }
  async cargarDatos(){
    let respuesta;
    console.log("PRIMER METODO");
    //let idProvider:number = parseInt(localStorage.getItem('userId'));
    const idempresa = localStorage.getItem('idempresa');
    // @ts-ignore
    const idemp = parseInt(idempresa);
    await this.activosService.getActivosFijos(idemp).toPromise().then((response) => {
      respuesta = response;
    }).catch(e => console.error(e));

    return respuesta;
  }
  openDialog(descripcion: string, marca: string, calle: string, avenida: string, bloque:string, ciudad: string,personal:string, estado:string, condicion:string) : void {
    const dialogRef = this.dialog.open(MasInformacionComponent, {
      // width: '250px',
      data: {descripcion: descripcion, marca: marca, calle: calle, avenida: avenida, bloque: bloque, ciudad: ciudad, personal: personal, estado: estado, condicion: condicion}
    });
  }
  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }
  openDialog2(fechaRegistro: string, evento: string, usuario: string):void{
    const dialogRef=this.dialog.open(DetallesComponent,{
      data: {fechaRegistro: fechaRegistro, evento:evento,usuario:usuario}
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
