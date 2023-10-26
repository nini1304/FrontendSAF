import {Component, ViewChild} from '@angular/core';
import {ActivoslistaDto} from "../../dto/activoslista.dto";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivosService} from "../../service/activos.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {MasInformacionComponent} from "../mas-informacion/mas-informacion.component";
import {DepreciarComponent} from "../depreciar/depreciar.component";
import {DepreciacionDto} from "../../dto/depreciacion.dto";

@Component({
  selector: 'app-lista-depreciada',
  templateUrl: './lista-depreciada.component.html',
  styleUrls: ['./lista-depreciada.component.css']
})
export class ListaDepreciadaComponent {
  nombre = localStorage.getItem('nombre');
  depreciacionDto: DepreciacionDto[] = [];

  mes: string = '';
  anio: number = 0;

  displayedColumns: string[] = ['id', 'nombre', 'valor', 'fecha', 'tipo', 'porcentaje','valord','valora','masinfo'];
  dataSource: MatTableDataSource<DepreciacionDto>;

  // dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private activoservice: ActivosService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.depreciacionDto);

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
  aceptar(){
    window.location.href = '/lista-encargado';
  }
  actualizar(id: number) {
    console.log(id)
    this.router.navigate(['/actualizar-poweruser', id]);

  }


  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      // this.id = +params['id'];
      this.mes = params['mes'];
      this.anio = +params['anio'];
    });
    this.activoservice.getActivosDepreciados(this.mes, this.anio).subscribe({
      next: (data: DepreciacionDto []) => {
        console.log(data);
        this.depreciacionDto = data;
        this.dataSource = new MatTableDataSource(this.depreciacionDto);
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
