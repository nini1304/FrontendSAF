import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivoFijoDto} from "../../dto/activofijo.dto";
import {ActivosService} from "../../service/activos.service";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-movimientos-en-activos',
  templateUrl: './activo-list.component.html',
  styleUrls: ['./activo-list.component.css']
})
export class ActivoListComponent {
  Listactivo: any;
  displayedColumns = ['Nro', 'Nombre','Valor','FechaCompra','UbicacionCompra','Condicion'];
  dataSource!: MatTableDataSource<ActivoFijoDto>;
  constructor(private activosService:ActivosService) {
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
  }
  async cargarDatos(){
    let respuesta;
    console.log("PRIMER METODO");
    //let idProvider:number = parseInt(localStorage.getItem('userId'));
    await this.activosService.getActivosFijos().toPromise().then((response) => {
      respuesta = response;
    }).catch(e => console.error(e));

    return respuesta;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
