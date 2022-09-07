import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateVehicleFieldService {

  constructor() { }

  getStatusField( form, field: string ) {
    if ( form.controls[field].errors && form.controls[field].touched ) return 'error';
    return 'regular';
  }

  getLicenseVehicleFieldMsg( form, field: string, nameField: string ) {
    let msgError = '';    
    if ( form.controls[field].errors && form.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }
    return msgError;
  }

  getModelFieldMsg( form, field: string, nameField: string ) {
    let msgError = '';    
    if ( form.controls[field].errors && form.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }
    return msgError;
  }

  getTypeTrailerFieldMsg( form, field: string, nameField: string ) {
    let msgError = '';    
    if ( form.controls[field].errors && form.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }
    return msgError;
  }

  getSoatFieldMsg( form, field: string, nameField: string ) {
    let msgError = '';    
    if ( form.controls[field].errors && form.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }
    return msgError;
  }

  getCompanyIdFieldMsg( form, field: string, nameField: string ) {
    let msgError = '';    
    if ( form.controls[field].errors && form.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }
    return msgError;
  }
}
