import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { HttpService } from '../http/http.service';
import { UserService } from '../user.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class FileRegisterUserService {

  savePhotoFrontal: any;
  savePhotoBack: any;

  photoFrontal;
  photoBack;

  fileDrivinglicense: string;
  fileSecurityCard: string;
  fileDocument: string;

  dataForm: FormData;

  constructor(
    private httpP: HttpService,
    private userService : UserService
    ) {
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
  onFileDrivinglicense(event, data: FormData) {
    const file = <File>event.target.files[0];
    this.fileDrivinglicense = file.name;
    data.append('LicenciaConduccion', file, file.name);
    return data;
  }

  onFileSecurityCard(event, data: FormData) {
    const file = <File>event.target.files[0];
    this.fileSecurityCard = file.name;
    data.append('CarnetSeguridadIndustrial', file, file.name);
    var path = (window.URL || window.webkitURL).createObjectURL(file);
    this.userService.updateDocument({ name : ['CarnetSeguridadIndustrial'], file : [path]}).subscribe({
      next: (data: any) => {
        alert(JSON.stringify(data.data));
      },
      error: (err) => {
        alert(JSON.stringify(err));
      }
    });

    return data;
  }

  onFileDocument(event, data: FormData) {
    const file = <File>event.target.files[0];
    this.fileDocument = file.name;
    data.append('CedulaDocumento', file, file.name);
    return data;
  }

  // ELIMINAR ARCHIVOS
  deleteFileDrivinglicense(data: FormData, input: any) {
    this.fileDrivinglicense = undefined;
    data.delete('LicenciaConduccion');
    input.nativeElement.value = "";
    return data;
  }

  deleteFileSecurityCard(data: FormData, input: any) {
    this.fileSecurityCard = undefined;
    data.delete('CarnetSeguridadIndustrial');
    input.nativeElement.value = "";
    return data;
  }

  deleteFileDocument(data: FormData, input: any) {
    this.fileDocument = undefined;
    data.delete('CedulaDocumento');
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

    this.fileDrivinglicense = undefined;
    this.fileSecurityCard = undefined;
    this.fileDocument = undefined;
  }
}
