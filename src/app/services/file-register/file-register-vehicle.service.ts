import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { HttpService } from '../http/http.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class FileRegisterVehicleService {

  savePhotoFrontal: any;
  savePhotoBack: any;

  photoFrontal;
  photoBack;

  fileSOAT: string;
  fileTecnoMecanica: string;
  filePoliza: string;
  fileTarjetaPropiedad: string;

  dataForm: FormData;

  constructor(private httpP: HttpService) {
    Camera.checkPermissions()
  }

  async openCameraOne() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photoFrontal = capturedPhoto.dataUrl;
    this.savePhotoFrontal = capturedPhoto.dataUrl;
  }

  async openCameraTwo() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photoBack = capturedPhoto.dataUrl;
    this.savePhotoBack = capturedPhoto.dataUrl;
  }

  //REMOVER PHOTO
  removePhotoFrontal() {
    this.photoFrontal = undefined;
  }
  removePhotoBack() {
    this.photoBack = undefined;
  }

  // AGREGAR ARCHIVOS
  onFileSOAT(event, data: FormData) {
    const file = <File>event.target.files[0];
    this.fileSOAT = file.name;
    data.append('SoatDocument', file, file.name);
    return data;
  }

  onFileTecnoMecanica(event, data: FormData) {
    const file = <File>event.target.files[0];
    this.fileTecnoMecanica = file.name;
    data.append('TechnomechanicsDocument', file, file.name);
    return data;
  }

  onFilePoliza(event, data: FormData) {
    const file = <File>event.target.files[0];
    this.filePoliza = file.name;
    data.append('PolicyDocument', file, file.name);
    return data;
  }

  onFileTarjetaPropiedad(event, data: FormData) {
    const file = <File>event.target.files[0];
    this.fileTarjetaPropiedad = file.name;
    data.append('CardPropertyDocument', file, file.name);
    return data;
  }

  // ELIMINAR ARCHIVOS
  deleteFileSOAT(data: FormData, input: any) {
    this.fileSOAT = undefined;
    data.delete('SoatDocument');
    input.nativeElement.value = "";
    return data;
  }

  deleteFileTecnoMecanica(data: FormData, input: any) {
    this.fileTecnoMecanica = undefined;
    data.delete('TechnomechanicsDocument');
    input.nativeElement.value = "";
    return data;
  }

  deleteFilePoliza(data: FormData, input: any) {
    this.filePoliza = undefined;
    data.delete('PolicyDocument');
    input.nativeElement.value = "";
    return data;
  }

  deleteFileTarjetaPropiedad(data: FormData, input: any) {
    this.fileTarjetaPropiedad = undefined;
    data.delete('CardPropertyDocument');
    input.nativeElement.value = "";
    return data;
  }

  resetPhoto() {
    this.photoFrontal = undefined;
    this.photoBack = undefined;

    this.savePhotoFrontal = undefined;
    this.savePhotoBack = undefined;
  }

  resetForm() {
    this.photoFrontal = undefined;
    this.photoBack = undefined;

    this.savePhotoFrontal = undefined;
    this.savePhotoBack = undefined;

    this.fileSOAT = undefined;
    this.fileTecnoMecanica = undefined;
    this.filePoliza = undefined;
    this.fileTarjetaPropiedad = undefined;
  }
}

