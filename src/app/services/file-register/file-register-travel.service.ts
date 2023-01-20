import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class FileRegisterTravelService {

  savePhotoFrontal: any;
  savePhotoBack: any;

  photoFrontal;
  photoBack;

  fileConsignment: string;
  fileManifest: string;

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

  removePhotoFrontal() {
    this.photoFrontal = undefined;
  }

  onFileConsignment(event, data: FormData) {
    const file = <File>event.target.files[0];
    this.fileConsignment = file.name;
    data.append('ConsignmentDocument', file, file.name);
    return data;
  }

  onFileManifest(event, data: FormData) {
    const file = <File>event.target.files[0];
    this.fileManifest = file.name;
    data.append('ManifestDocument', file, file.name);
    return data;
  }

  // ELIMINAR ARCHIVOS
  deleteFileConsignment(data: FormData, input: any) {
    this.fileConsignment = undefined;
    data.delete('ConsignmentDocument');
    input.nativeElement.value = "";
    return data;
  }

  deleteFileManifest(data: FormData, input: any) {
    this.fileManifest = undefined;
    data.delete('ManifestDocument');
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

    this.fileConsignment = undefined;
    this.fileManifest = undefined;
  }
}
