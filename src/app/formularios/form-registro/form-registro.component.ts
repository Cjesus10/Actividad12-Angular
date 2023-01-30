import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {

  //Crear atributo de tipo FormBuilder
  constructor(private formBuilder : FormBuilder){ }

  // Estructura del formulario reactivo
  registroForm = this.formBuilder.group({
    dni:['', {validators:[Validators.required, Validators.pattern('[0-9]{9}')]}],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    asunto: ['', Validators.required],
    mensaje: ['', Validators.required],
    });

    // Generar un metodo get para cada campo del formularior reactivo
    get dni(){ return this.registroForm.get('dni'); }
    get nombres(){ return this.registroForm.get('nombres'); }
    get apellidos(){ return this.registroForm.get('apellidos'); }
    get asunto(){ return this.registroForm.get('asunto'); }
    get mensaje(){ return this.registroForm.get('mensaje'); }



    // Generar el metodo onSubmit para registrar los datos del formulario en un Array
    datos = new Array;

    exitoso = false;

    onSubmit(){
      if(!this.registroForm.valid){
        alert('Alguna validación no se ha cumplido');
        return;
      }
      this.datos.push({
        'Dni': this.registroForm.get('dni')?.value,
        'Nombres': this.registroForm.get('nombres')?.value,
        'Apellidos': this.registroForm.get('apellidos')?.value,
        'Ciudad': this.registroForm.get('asunto')?.value,
        'Mensaje': this.registroForm.get('mensaje')?.value,

      });
      console.log(this.datos);
      this.exitoso = true;
    }
    Refrescar(){
      location.reload();
    }

  }


  

