import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateUserFieldService {

  constructor() { }

  getStatusField( form, field: string ) {
    if ( form.controls[field].errors && form.controls[field].touched ) return 'error';
    if ( form.controls[field].errors && form.controls[field].dirty ) return 'error';
    if ( form.controls[field].errors && form.controls[field].errors.pattern ) return 'error';
    return 'regular';
  }

  getFirstNameFieldMsg( form, field: string, nameField: string ) {
    let msgError = '';    
    if ( form.controls[field].errors && form.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }
    return msgError;
  }

  getLastNameFieldMsg( form, field: string, nameField: string ) {
    let msgError = '';    
    if ( form.controls[field].errors && form.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }
    return msgError;
  }

  getDocumentFieldMsg( form, field: string, nameField: string ) {
    let msgError = '';    
    if ( form.controls[field].errors && form.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    if ( form.controls[field].errors && form.controls[field].dirty ) {
      msgError = `El campo ${ nameField } es incorrecto.`;
    }

    if ( form.controls[field].errors && form.controls[field].errors.pattern ) {
      msgError = `El campo ${ nameField } es incorrecto.`;
    }
    return msgError;
  }

  getSapCodeFieldMsg( form, field: string, nameField: string ) {
    let msgError = '';    
    if ( form.controls[field].errors && form.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    if ( form.controls[field].errors && form.controls[field].errors.pattern ) {
      msgError = `El campo ${ nameField } es incorrecto.`;
    }
    return msgError;
  }

  getPhoneNumberFieldMsg( form, field: string, nameField: string ) {
    let msgError = '';    
    if ( form.controls[field].errors && form.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    if ( form.controls[field].errors && form.controls[field].dirty ) {
      msgError = `El campo ${ nameField } debe empezar por 3 e inculir unicamente números`;
    }

    if ( form.controls[field].errors && form.controls[field].errors.pattern ) {
      msgError = `El campo ${ nameField } debe empezar por 3 e inculir unicamente números.`;
    }
    return msgError;
  }  

  getEmailFieldMsg( form , field : string, nameField: string ) {
    let msgError = '';
    if (form.controls[field].errors && form.controls[field].dirty){
      msgError = `Ingrese el ${ nameField } válido`;
    }
    if ( form.controls[field].errors && form.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }
    return msgError;
  }

  getPasswordFieldMsg( form , field : string, nameField: string ) {
    let msgError = '';
    if (form.controls[field].errors && form.controls[field].touched){
      msgError = `El campo ${ nameField } es requerido.`;
    }
    if ( form.controls[field].errors && form.controls[field].errors.pattern ) {
      msgError = `El campo debe contener minimo 10 caracteres con mayúsculas, minúsculas, numeros y un caracter especial.`;
    }
    return msgError;
  }
}
