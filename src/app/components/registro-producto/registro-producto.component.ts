import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css'],
})
export class RegistroProductoComponent{
  disableSelect = new FormControl(false);
}
