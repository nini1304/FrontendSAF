import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivosService } from '../../service/activos.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {MasInformacionComponent} from "../mas-informacion/mas-informacion.component";
import {ActivatedRoute, Router} from "@angular/router";
import {DepreciacionDto} from "../../dto/depreciacion.dto";
import {ActivoslistaDto} from "../../dto/activoslista.dto";
import {DepreciarEncargadoComponent} from "../depreciar-encargado/depreciar-encargado.component";
import {DepreciarPoweruserComponent} from "../depreciar-poweruser/depreciar-poweruser.component";







@Component({
  selector: 'app-lista-poweruser',
  templateUrl: './lista-poweruser.component.html',
  styleUrls: ['./lista-poweruser.component.css']
})
export class ListaPoweruserComponent {
  nombre = localStorage.getItem('nombre');
  activoslistaDto: ActivoslistaDto[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'valor', 'fecha', 'tipo', 'masinfo','acciones'];
  dataSource: MatTableDataSource<ActivoslistaDto>;

  // dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private activoservice: ActivosService, public dialog: MatDialog, private router: Router) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.activoslistaDto);

  }
  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }
  openDialog(descripcion: string, marca: string, calle: string, avenida: string, bloque:string, ciudad: string,personal:string, estado:string, condicion:string) : void {
    const dialogRef = this.dialog.open(MasInformacionComponent, {
      // width: '250px',
      data: {descripcion: descripcion, marca: marca, calle: calle, avenida: avenida, bloque: bloque, ciudad: ciudad, personal: personal, estado: estado, condicion: condicion}
    });

  }
  abrirDepreciar(){
    this.dialog.open(DepreciarPoweruserComponent);
  }
  actualizar(id: number,nombre:string,valor:number,descripcion:string,calle:string,avenida:string) {
    console.log(id)
    this.router.navigate(['/actualizar-poweruser', id,nombre,valor,descripcion,calle,avenida]);

  }
  eliminar(id: number) {
    // Preguntar al usuario si está seguro de eliminar
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este activo?');

    // Si el usuario confirma la eliminación, proceder con la acción
    if (confirmacion) {
      // @ts-ignore
      this.activoservice.deleteActivo(id, this.nombre).subscribe({
        next: (data) => {
          console.log(data);
          alert('Estado de activo cambiado correctamente');
          location.reload();
        },
        error: (error: any) => {
          console.log(error);
          alert('Error al cambiar estado de activo');
        }
      });
    } else {
      // Si el usuario cancela la eliminación, no se hace nada
      alert('Eliminación cancelada por el usuario');
    }
  }


  ngAfterViewInit() {
    const idempresa = localStorage.getItem('idempresa');
    // @ts-ignore
    const idemp = parseInt(idempresa);
    this.activoservice.getListaActivosFijos(idemp).subscribe({
      next: (data: ActivoslistaDto []) => {
        console.log(data);
        this.activoslistaDto = data;
        this.dataSource = new MatTableDataSource(this.activoslistaDto);
        // @ts-ignore
        this.dataSource.paginator = this.paginator;
        // @ts-ignore
        this.dataSource.sort = this.sort;



      }


    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


