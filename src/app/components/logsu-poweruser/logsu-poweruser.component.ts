import {Component, ViewChild} from '@angular/core';
import {ResponseLUDto} from "../../dto/ResponseLU.dto";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {LuService} from "../../service/lu.service";
import {ActivoslistaDto} from "../../dto/activoslista.dto";


@Component({
  selector: 'app-logsu-poweruser',
  templateUrl: './logsu-poweruser.component.html',
  styleUrls: ['./logsu-poweruser.component.css']
})
export class LogsuPoweruserComponent {
  nombre = localStorage.getItem('nombre');
  responseLUDto: ResponseLUDto[] = [];
  displayedColumns: string[] = ['id', 'usuario', 'accion', 'fecha','hora', 'ip'];
  dataSource: MatTableDataSource<ResponseLUDto>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private luservice: LuService) {
    this.dataSource = new MatTableDataSource(this.responseLUDto);
  }

  ngAfterViewInit() {

    this.luservice.listarLogsU().subscribe({
      next: (data: ResponseLUDto[]) => {
        console.log(data);
        this.responseLUDto = data;
        this.dataSource = new MatTableDataSource(this.responseLUDto);
        // @ts-ignore
        this.dataSource.paginator = this.paginator;
        // @ts-ignore
        this.dataSource.sort = this.sort;



      }


    })
  }

  borrarls(){
    // @ts-ignore
    this.luservice.registrarLogout(this.nombre).subscribe({
      next: (data: any) => {
        console.log(data);
        console.log("Se ha registrado el logout correctamente.");
        localStorage.clear();
        if (localStorage.length === 0) {
          console.log("LocalStorage ha sido limpiado correctamente.");
        } else {
          console.log("No se pudo limpiar el LocalStorage.");
        }


      },
      error: (error: any) => {
        console.log(error);
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
