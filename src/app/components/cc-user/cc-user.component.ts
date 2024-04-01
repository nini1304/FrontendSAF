import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivosService} from "../../service/activos.service";

@Component({
  selector: 'app-cc-user',
  templateUrl: './cc-user.component.html',
  styleUrls: ['./cc-user.component.css']
})
export class CcUserComponent {
  nombre = localStorage.getItem('nombre');
  cambiarconForm: FormGroup;
  hidePassword = true;
  hidePassword1 = true;
  hidePassword2 = true;


  constructor(private formBuilder: FormBuilder,
              private fb: FormBuilder) {
    this.cambiarconForm = this.fb.group({
      antiguapass: new FormControl('', [Validators.required]),
      nuevapass: new FormControl('', [Validators.required, Validators.minLength(12), this.validatePassword]),
      passwordConfirmation: new FormControl('', [Validators.required]),


    }, { validators: this.passwordMatchValidator });
  }




  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }

  validatePassword(control: any) {
    const password = control.value;
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/; // Esta es la expresión regular para validar la contraseña

    if (!pattern.test(password)) {
      return { 'invalidPassword': true };
    }

    return null;
  }

  passwordMatchValidator(group: FormGroup) {
    console.log('Validating password match');
    const password = group.get('nuevopass')?.value;
    const passwordConfirmation = group.get('passwordConfirmation')?.value;
    console.log('Password:', password);
    console.log('Password Confirmation:', passwordConfirmation);

    if (password === passwordConfirmation) {
      return null;
    } else {
      group.get('passwordConfirmation')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  togglePasswordVisibility1() {
    this.hidePassword1 = !this.hidePassword1;
  }
  togglePasswordVisibility2() {
    this.hidePassword2 = !this.hidePassword2;
  }
}
