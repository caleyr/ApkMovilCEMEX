import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextResponseService {

  constructor() { }

  getRole(role: number) {
    switch (role) {
      case 1:
        return 'Conductor';
      case 2:
        return 'Hombre Camión';
      case 3:
        return 'Admin. Logístico Tercero';
      case 4:
        return 'Admin. Logístico Cemex';
      case 5:
        return 'Power User Cemex';
      default:
        return '';
    }
  }

  getStatusTravel(status) {
    switch (status) {
      case 0:
        return 'Por Solicitar';
      case 1:
        return 'Solicitado';
      case 2:
        return 'Asignado';
      case 3:
        return 'Confirmado';
      case 4:
        return 'En proceso';
      case 5:
        return 'Finalizado';
      case 6:
        return 'Documentos Cargados';
      case 7:
        return 'Cancelado';
      default:
        return '';
    }
  }

  getStatus(status: number) {
    switch (status) {
      case 1:
        return 'Inactivo';
      case 2:
        return 'Activo';
      default:
        return status;
    }
  }

  getStatusTravelUser(status: number){
    switch (status) {
      case 0:
        return 'Disponible';
      case 1:
        return 'En turno';
      default:
        return status;
    }
  }

  getStatusWaitingList(status: number) {
    switch (status) {
      case 0:
        return 'Pendiente';
      case 1:
        return 'Aprobado';
      case 2:
        return 'No Aprobado';
      default:
        return status;
    }
  }
}
