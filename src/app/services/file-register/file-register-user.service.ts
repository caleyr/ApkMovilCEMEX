import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { HttpService } from '../http/http.service';
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

  dataForm : FormData;

  constructor(private httpP : HttpService) {    
    Camera.checkPermissions()
   }

  async openCameraOne(){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photoFrontal = capturedPhoto.dataUrl;
    this.savePhotoFrontal = capturedPhoto.dataUrl; 
  }

  async openCameraTwo(){
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photoBack = capturedPhoto.dataUrl;
    this.savePhotoBack = capturedPhoto.dataUrl;
  }

  //REMOVER PHOTO
  removePhotoFrontal(){
    this.photoFrontal = undefined;
  }
  removePhotoBack(){
    this.photoBack = undefined;
  }
  
  // AGREGAR ARCHIVOS
  onFileDrivinglicense(event, data: FormData){
    const file = <File>event.target.files[0];
    this.fileDrivinglicense = file.name;
    data.append('Drivinglicense', file, file.name);
    return data;
  }

  onFileSecurityCard(event, data: FormData){
    const file = <File>event.target.files[0];
    this.fileSecurityCard = file.name;
    data.append('SecurityCard', file, file.name);
    return data;
  }

  onFileDocument(event, data: FormData){
    const file = <File>event.target.files[0];
    this.fileDocument = file.name;
    data.append('DocumentIdentityCard', file, file.name);    
    return data;
  }

  // ELIMINAR ARCHIVOS
  deleteFileDrivinglicense(data : FormData){ 
    this.fileDrivinglicense = undefined;   
    data.delete('Drivinglicense');
    return data;
  }

  deleteFileSecurityCard(data : FormData){
    this.fileSecurityCard = undefined;
    data.delete('SecurityCard');
    return data;
  }

  deleteFileDocument(data : FormData){
    this.fileDocument = undefined;
    data.delete('DocumentIdentityCard');
    return data;
  }

  resetPhoto(){
    this.photoFrontal = undefined;
    this.photoBack = undefined; 
    
    this.savePhotoFrontal = undefined;
    this.savePhotoBack = undefined;
  }

  resetForm(){
    this.photoFrontal = undefined;
    this.photoBack = undefined;    

    this.savePhotoFrontal = undefined;
    this.savePhotoBack = undefined;

    this.fileDrivinglicense = undefined;
    this.fileSecurityCard = undefined;
    this.fileDocument = undefined;
  }
}
