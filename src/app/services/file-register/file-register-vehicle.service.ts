import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { ConvertFileService } from '../convert-photo-camera/convert-file.service';
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
  async onFileSOAT(event) {
    const file = <File>event.target.files[0];

    this.fileSOAT = file.name;
    this.fileData.name.push('SoatDocument');

    const fileBlob = await this.convertFile.blobFormFile(event.target.files[0]);
    const resultado = await this.convertFile.base64FromPath(fileBlob) as string;

    //Save File
    await this.saveFile(this.fileSOAT, resultado);
  }

  async onFileTecnoMecanica(event) {
    const file = <File>event.target.files[0];

    this.fileTecnoMecanica = file.name;
    this.fileData.name.push('TechnomechanicsDocument');

    const fileBlob = await this.convertFile.blobFormFile(event.target.files[0]);
    const resultado = await this.convertFile.base64FromPath(fileBlob) as string;

    //Save File
    await this.saveFile(this.fileTecnoMecanica, resultado);
  }

  async onFilePoliza(event) {
    const file = <File>event.target.files[0];

    this.filePoliza = file.name;
    this.fileData.name.push('PolicyDocument');

    const fileBlob = await this.convertFile.blobFormFile(event.target.files[0]);
    const resultado = await this.convertFile.base64FromPath(fileBlob) as string;

    //Save File
    await this.saveFile(this.filePoliza, resultado);
  }

  async onFileTarjetaPropiedad(event) {
    const file = <File>event.target.files[0];

    this.fileTarjetaPropiedad = file.name;
    this.fileData.name.push('CardPropertyDocument');

    const fileBlob = await this.convertFile.blobFormFile(event.target.files[0]);
    const resultado = await this.convertFile.base64FromPath(fileBlob) as string;

    //Save File
    await this.saveFile(this.fileTarjetaPropiedad, resultado);
  }

  // ELIMINAR ARCHIVOS
  async deleteFileSOAT(input: any) {
    const uri = await this.convertFile.getFile(this.fileSOAT);
    this.fileData.name = this.fileData.name.filter(data => data != 'SoatDocument');
    this.fileData.file = this.fileData.file.filter(data => data != uri);

    //Clear File
    await this.convertFile.deleteFile(this.fileSOAT);
    this.fileSOAT = undefined;

    input.nativeElement.value = "";
  }

  async deleteFileTecnoMecanica(input: any) {
    const uri = await this.convertFile.getFile(this.fileTecnoMecanica);
    this.fileData.name = this.fileData.name.filter(data => data != 'TechnomechanicsDocument');
    this.fileData.file = this.fileData.file.filter(data => data != uri);

    //Clear File
    await this.convertFile.deleteFile(this.fileTecnoMecanica);
    this.fileTecnoMecanica = undefined;

    input.nativeElement.value = "";
  }

  async deleteFilePoliza(input: any) {
    const uri = await this.convertFile.getFile(this.filePoliza);
    this.fileData.name = this.fileData.name.filter(data => data != 'PolicyDocument');
    this.fileData.file = this.fileData.file.filter(data => data != uri);

    //Clear File
    await this.convertFile.deleteFile(this.filePoliza);
    this.filePoliza = undefined;

    input.nativeElement.value = "";
  }

  async deleteFileTarjetaPropiedad(input: any) {
    const uri = await this.convertFile.getFile(this.fileTarjetaPropiedad);
    this.fileData.name = this.fileData.name.filter(data => data != 'CardPropertyDocument');
    this.fileData.file = this.fileData.file.filter(data => data != uri);

    //Clear File
    await this.convertFile.deleteFile(this.fileTarjetaPropiedad);
    this.fileTarjetaPropiedad = undefined;

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

    this.fileSOAT = undefined;
    this.fileTecnoMecanica = undefined;
    this.filePoliza = undefined;
    this.fileTarjetaPropiedad = undefined;

    this.fileData = undefined;
  }

  async savePdf(namefile) {
    const pdfDefinition: any = {
      content: [
        {
          image: this.savePhotoFrontal,
          width: 500,
        },
        {
          text: '\n\n',
        },
        {
          image: this.savePhotoBack,
          width: 500,
        },
      ]
    }
    var blob;
    const fileName = new Date().getTime() + `_${namefile}.pdf`;
    await pdfMake.createPdf(pdfDefinition).getBase64(async base => {
      if (namefile === 'SoatDocument') {
        this.fileSOAT = fileName;
      } else if (namefile === 'TechnomechanicsDocument') {
        this.fileTecnoMecanica = fileName;
      } else if (namefile === 'PolicyDocument') {
        this.filePoliza = fileName;
      } else if(namefile === 'CardPropertyDocument') {
        this.fileTarjetaPropiedad = fileName;
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

