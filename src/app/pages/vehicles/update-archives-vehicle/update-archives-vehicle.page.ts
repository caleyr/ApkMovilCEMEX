import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileRegisterVehicleService } from '../../../services/file-register/file-register-vehicle.service';
import { ErrorMessagesService } from '../../../services/error-messages.service';
import { VehiclesService } from '../../../services/vehicles.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-archives-vehicle',
  templateUrl: './update-archives-vehicle.page.html',
  styleUrls: ['./update-archives-vehicle.page.scss'],
})
export class UpdateArchivesVehiclePage implements OnInit {

  id: any;

  fileSOATCheck: boolean = false;
  fileTecnoMecanicaCheck: boolean = false;
  filePolizaCheck: boolean = false;
  fileTarjetaPropiedadCheck: boolean = false;

  @ViewChild('getFileSoatDocument') inputFileSoat: ElementRef;
  @ViewChild('getFileTechnomechanicsDocument') inputFileTechnomechanicsDocument: ElementRef;
  @ViewChild('getFilePolicyDocument') inputFilePolicyDocument: ElementRef;
  @ViewChild('getFileCardPropertyDocument') inputFileDoc: ElementRef;

  nameFile: string;
  nameText: string;

  showUpdateDoc: boolean = false;

  alertSucces = false;
  alertConfirm = false;
  toastMessage = '';

  errors: string[] = [];

  loading = false;

  constructor(
    public fileVehicle: FileRegisterVehicleService,
    private errorMessages: ErrorMessagesService,
    private location: Location,
    private vehiclesService : VehiclesService
  ) { }

  async ngOnInit() {
    this.id = this.vehiclesService.id;
    this.fileVehicle.fileData = { name: [], file: [] };
  }

  showFileSOAT(event){
    this.fileSOATCheck = event.detail;
    if(!event.detail){
      const data = this.fileVehicle.fileData.name.filter(data => data === 'SoatDocument');
      if (data.length !== 0) {
        this.fileVehicle.deleteFileSOAT(this.inputFileSoat);
      }
    }  
  }

  showFileTecnoMecanica(event){
    this.fileTecnoMecanicaCheck = event.detail;
    if(!event.detail){
      const data = this.fileVehicle.fileData.name.filter(data => data === 'TechnomechanicsDocument');
      if (data.length !== 0) {
        this.fileVehicle.deleteFileTecnoMecanica(this.inputFileTechnomechanicsDocument);
      }
    }  
  }

  showFilePoliza(event){
    this.filePolizaCheck = event.detail;
    if(!event.detail){
      const data = this.fileVehicle.fileData.name.filter(data => data === 'PolicyDocument');
      if (data.length !== 0) {
        this.fileVehicle.deleteFilePoliza(this.inputFilePolicyDocument);
      }
    }  
  }

  

  showFileTarjetaPropiedad(event){
    this.fileTarjetaPropiedadCheck = event.detail;
    if(!event.detail){
    const data = this.fileVehicle.fileData.name.filter(data => data === 'CardPropertyDocument');
      if (data.length !== 0) {
        this.fileVehicle.deleteFileTarjetaPropiedad(this.inputFileDoc);
      }
    }
  }

  nextSelectDoc() {
    this.showUpdateDoc = true;
  }

  validateCheckBox() : boolean{
    if(this.fileSOATCheck){
      return true;
    }else if(this.fileTecnoMecanicaCheck){
      return true;
    }else if(this.filePolizaCheck){
      return true;
    }else if(this.fileTarjetaPropiedadCheck){
      return true;
    }else{      
      this.showUpdateDoc = false;
      return false;
    }
  }

  updateDocument() {
    this.loading = true;
    this.vehiclesService.updateDocument(this.id, this.fileVehicle.fileData).subscribe({
      next: (data: any) => {
        this.alertSucces = true;
        this.alertConfirm = false;
        this.alertSucces = true;
        this.errors = [];
        setTimeout(() => {
          this.alertSucces = false;
          this.onBack();
        }, 3000);
      },
      error: (err) => {
        this.errors = this.errorMessages.parsearErroresAPI(err.data);
        this.fileVehicle.resetForm();
      },
      complete: () => {
        this.fileVehicle.resetForm();
        this.loading = false;
      }
    })
  }

  openModalDocument(name) {
    if (name === 'SoatDocument') {
      this.nameFile = name;
      this.nameText = 'documento de SOAT';
    } else if (name === 'TechnomechanicsDocument') {
      this.nameFile = name;
      this.nameText = 'certificado de revisión tecno mecánica';
    } else if (name === 'PolicyDocument') {
      this.nameFile = name;
      this.nameText = 'póliza';
    } else if (name === 'CardPropertyDocument') {
      this.nameFile = name;
      this.nameText = 'tarjeta de propiedad';
    }
    document.getElementById('modal-document').setAttribute('open', 'true');
  }

  cloceModalDocument() {
    document.getElementById('modal-document').setAttribute('open', 'false');
    this.fileVehicle.resetPhoto();
  }

  async saveDocument() {
    await this.fileVehicle.savePdf(this.nameFile);
    this.cloceModalDocument();
  }

  onBack() {
    this.location.back();
  }

}
