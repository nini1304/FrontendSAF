import {Component, ViewChild} from '@angular/core';
import {ActivoslistaDto} from "../../dto/activoslista.dto";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivosService} from "../../service/activos.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {MasInformacionComponent} from "../mas-informacion/mas-informacion.component";

@Component({
  selector: 'app-lista-administrador',
  templateUrl: './lista-administrador.component.html',
  styleUrls: ['./lista-administrador.component.css']
})
export class ListaAdministradorComponent {
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
  actualizar(id: number) {
    console.log(id)
    this.router.navigate(['/actualizar-admin', id]);

  }
  eliminar(id: number) {
    this.activoservice.deleteActivo(id).subscribe({
      next: (data) => {
        console.log(data);
        alert('Estado de activo cambiado correctamente');
        location.reload();


      },error: (error: any) => {
        console.log(error);
        alert('Error al cambiar estado de activo');


      }

    });
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
