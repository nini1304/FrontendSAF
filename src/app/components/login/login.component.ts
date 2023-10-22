import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  // usuario = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder,
              private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      usuario: new FormControl('', [Validators.required]),
      contraseña: new FormControl('', [Validators.required]),
    });

  }
  ingresar() {
    window.location.href = '/menu';

  }


}
