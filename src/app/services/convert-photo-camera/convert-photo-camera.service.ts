import { Injectable } from '@angular/core';
import { Photo } from '@capacitor/camera';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ConvertPhotoCameraService {

  constructor(
    private platform: Platform
  ) { }

  async savePicture(photo: Photo) {
    const base64Data = await this.readAsBase64(photo);
    const fileName = new Date().getTime() + '.' + photo.format;
    const photoResul = {
      filepath: fileName,
      data: base64Data,
      webviewPath: photo.webPath
    };
    const response = await fetch(photoResul.data);
    const resultBob = await response.blob();
    const sendPhoto = {
      filepath: fileName,
      data: base64Data,
      bob: resultBob,
      webviewPath: photo.webPath
    };
    return sendPhoto;
  }

  private async readAsBase64(photo: Photo) {
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

}
