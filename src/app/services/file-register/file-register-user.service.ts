import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { HttpService } from '../http/http.service';
import { UserService } from '../user.service';
import { ConvertFileService } from '../convert-photo-camera/convert-file.service';
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

  async openCameraTwo() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      presentationStyle: 'fullscreen',
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
  async onFileDrivinglicense(event) {
    const file = <File>event.target.files[0];

    //Save Name File
    this.fileDrivinglicense = file.name;
    //alert(file.type);
    this.fileData.name.push('LicenciaConduccion');

    //Convert File
    const fileBlob = await this.convertFile.blobFormFile(event.target.files[0]);
    const resultado = await this.convertFile.base64FromPath(fileBlob) as string;

    //Save File
    await this.saveFile(this.fileDrivinglicense, resultado);
  }

  async onFileSecurityCard(event) {
    const file = <File>event.target.files[0];

    this.fileSecurityCard = file.name;
    this.fileData.name.push('CarnetSeguridadIndustrial');

    const fileBlob = await this.convertFile.blobFormFile(event.target.files[0]);
    const resultado = await this.convertFile.base64FromPath(fileBlob) as string;

    //Save File
    await this.saveFile(this.fileSecurityCard, resultado);
  }

  async onFileDocument(event) {
    const file = <File>event.target.files[0];
    this.fileDocument = file.name;
    this.fileData.name.push('CedulaDocumento');

    const fileBlob = await this.convertFile.blobFormFile(event.target.files[0]);
    const resultado = await this.convertFile.base64FromPath(fileBlob) as string;

    //Save File
    await this.saveFile(this.fileDocument, resultado);
  }

  // ELIMINAR ARCHIVOS
  async deleteFileDrivinglicense(input: any) {
    const uri = await this.convertFile.getFile(this.fileDrivinglicense);
    this.fileData.name = this.fileData.name.filter(data => data != 'LicenciaConduccion');
    this.fileData.file = this.fileData.file.filter(data => data != uri);

    //Clear File
    await this.convertFile.deleteFile(this.fileDrivinglicense);
    this.fileDrivinglicense = undefined;

    input.nativeElement.value = "";
  }

  async deleteFileSecurityCard(input: any) {
    const uri = await this.convertFile.getFile(this.fileSecurityCard);
    this.fileData.name = this.fileData.name.filter(data => data != 'CarnetSeguridadIndustrials');
    this.fileData.file = this.fileData.file.filter(data => data != uri);

    //Clear File
    await this.convertFile.deleteFile(this.fileSecurityCard);
    this.fileSecurityCard = undefined;

    input.nativeElement.value = "";
  }

  async deleteFileDocument(input: any) {
    const uri = await this.convertFile.getFile(this.fileDocument);
    this.fileData.name = this.fileData.name.filter(data => data != 'CedulaDocumento');
    this.fileData.file = this.fileData.file.filter(data => data != uri);

    //Clear File
    await this.convertFile.deleteFile(this.fileDocument);
    this.fileDocument = undefined;

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

    this.fileDrivinglicense = undefined;
    this.fileSecurityCard = undefined;
    this.fileDocument = undefined;

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
      if (namefile === 'LicenciaConduccion') {
        this.fileDrivinglicense = fileName;
      } else if (namefile === 'CarnetSeguridadIndustrial') {
        this.fileSecurityCard = fileName;
      } else if (namefile === 'CedulaDocumento') {
        this.fileDocument = fileName;
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
