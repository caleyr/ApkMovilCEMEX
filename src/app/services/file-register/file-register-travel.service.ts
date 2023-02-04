import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ConvertFileService } from '../convert-photo-camera/convert-file.service';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Directory, Filesystem } from '@capacitor/filesystem';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

  fileData: { name: string[], file: string[] };

  constructor(
    private convertFile: ConvertFileService
  ) {
    Camera.checkPermissions()
  }

  async openCameraOne() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      presentationStyle: 'fullscreen',
      quality: 100
    });
    this.photoFrontal = capturedPhoto.dataUrl;
    this.savePhotoFrontal = capturedPhoto.dataUrl;
  }

  removePhotoFrontal() {
    this.photoFrontal = undefined;
  }

  async onFileConsignment(event) {
    const file = <File>event.target.files[0];

    //Save Name File
    this.fileConsignment = file.name;
    this.fileData.name.push('ConsignmentDocument');

    //Convert File
    const fileBlob = await this.convertFile.blobFormFile(event.target.files[0]);
    const resultado = await this.convertFile.base64FromPath(fileBlob) as string;

    //Save File
    await this.saveFile(this.fileConsignment, resultado);
  }

  async onFileManifest(event) {
    const file = <File>event.target.files[0];

    //Save Name File
    this.fileManifest = file.name;
    this.fileData.name.push('ManifestDocument');

    //Convert File
    const fileBlob = await this.convertFile.blobFormFile(event.target.files[0]);
    const resultado = await this.convertFile.base64FromPath(fileBlob) as string;

    //Save File
    await this.saveFile(this.fileManifest, resultado);
  }

  // ELIMINAR ARCHIVOS
  async deleteFileConsignment(input: any) {
    const uri = await this.convertFile.getFile(this.fileConsignment);
    this.fileData.name = this.fileData.name.filter(data => data != 'ConsignmentDocument');
    this.fileData.file = this.fileData.file.filter(data => data != uri);

    //Clear File
    await this.convertFile.deleteFile(this.fileConsignment);
    this.fileConsignment = undefined;

    input.nativeElement.value = "";
  }

  async deleteFileManifest(input: any) {
    const uri = await this.convertFile.getFile(this.fileManifest);
    this.fileData.name = this.fileData.name.filter(data => data != 'ManifestDocument');
    this.fileData.file = this.fileData.file.filter(data => data != uri);

    //Clear File
    await this.convertFile.deleteFile(this.fileManifest);
    this.fileManifest = undefined;

    input.nativeElement.value = "";
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
    this.fileData = undefined;
  }

  async savePdf(namefile) {
    const pdfDefinition: any = {
      content: [
        {
          image: this.savePhotoFrontal,
          width: 500,
        }
      ]
    }
    var blob;
    const fileName = new Date().getTime() + `_${namefile}.pdf`;
    await pdfMake.createPdf(pdfDefinition).getBase64(async base => {
      if (namefile === 'ConsignmentDocument') {
        this.fileConsignment = fileName;
      } else if (namefile === 'ManifestDocument') {
        this.fileManifest = fileName;
      }
      this.fileData.name.push(namefile);
      await this.saveFile(fileName, base);
    });
  }



  saveFile(filename, base64) {
    return new Promise((resolve) => {
      Filesystem.writeFile({
        path: filename,
        data: base64,
        directory: Directory.Cache
      }).then(async (val) => {
        this.fileData.file.push(await this.convertFile.getFile(filename));
        resolve(true);
      })
    })
  }
}
