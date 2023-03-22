import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileRegisterUserService } from '../../../services/file-register/file-register-user.service';
import { UserService } from '../../../services/user.service';
import { ErrorMessagesService } from '../../../services/error-messages.service';
import { DriversService } from '../../../services/drivers.service';

@Component({
  selector: 'app-update-archives-drive',
  templateUrl: './update-archives-drive.page.html',
  styleUrls: ['./update-archives-drive.page.scss'],
})
export class UpdateArchivesDrivePage implements OnInit {

  id: any;

  fileDrivinglicenseV: boolean = false;
  fileSecurityCardV: boolean = false;
  fileDocumentV: boolean = false;

  @ViewChild('getFileDrivinglicense') inputFileDrive: ElementRef;
  @ViewChild('getFileSecurityCard') inputFileSecurity: ElementRef;
  @ViewChild('getFileDocument') inputFileDoc: ElementRef;

  nameFile: string;
  nameText: string;

  showUpdateDoc: boolean = false;

  alertSucces = false;
  alertConfirm = false;
  toastMessage = '';

  errors: string[] = [];

  loading = false;

  constructor(
    public fileRegister: FileRegisterUserService,
    private errorMessages: ErrorMessagesService,
    private location: Location,
    private driversService : DriversService
  ) { }

  async ngOnInit() {
    this.id = this.driversService.id;
    this.fileRegister.fileData = { name: [], file: [] };
  }

  showFileDrivinglicense(event) {
    this.fileDrivinglicenseV = event.detail;
    if (!event.detail) {
      const data = this.fileRegister.fileData.name.filter(data => data === 'LicenciaConduccion');
      if (data.length !== 0) {
        this.fileRegister.deleteFileDrivinglicense(this.inputFileDrive);
      }
    }
  }

  showFileSecurityCard(event) {
    this.fileSecurityCardV = event.detail;
    if (!event.detail) {
      const data = this.fileRegister.fileData.name.filter(data => data === 'CarnetSeguridadIndustrial');
      if (data.length !== 0) {
        this.fileRegister.deleteFileSecurityCard(this.inputFileSecurity);
      }
    }
  }

  showFileDocument(event) {
    this.fileDocumentV = event.detail;
    if (!event.detail) {
      const data = this.fileRegister.fileData.name.filter(data => data === 'CedulaDocumento');
      if (data.length !== 0) {
        this.fileRegister.deleteFileDocument(this.inputFileDoc);
      }
    }
  }

  nextSelectDoc() {
    this.showUpdateDoc = true;
  }

  validateCheckBox(): boolean {
    if (this.fileDrivinglicenseV) {
      return true;
    } else if (this.fileSecurityCardV) {
      return true;
    } else if (this.fileDocumentV) {
      return true;
    } else {
      this.showUpdateDoc = false;
      return false;
    }
  }

  updateDocument() {
    this.loading = true;
    this.driversService.updateDocument(this.id, this.fileRegister.fileData).subscribe({
      next: (data: any) => {
        this.alertSucces = true;
        this.alertConfirm = false;
        this.alertSucces = true;
        this.errors = [];
        setTimeout(() => {
          this.alertSucces = false;
          this.onBack();
        }, 2000);
      },
      error: (err) => {
        this.errors = this.errorMessages.parsearErroresAPI(err.data);
        this.fileRegister.resetForm();
      },
      complete: () => {
        this.fileRegister.resetForm();
        this.loading = false;
      }
    })
  }

  openModalDocument(name) {
    if (name === 'LicenciaConduccion') {
      this.nameFile = name;
      this.nameText = 'licencia de conducción';
    } else if (name === 'CarnetSeguridadIndustrial') {
      this.nameFile = name;
      this.nameText = 'carné de seguridad industrial y vial';
    } else if (name === 'CedulaDocumento') {
      this.nameFile = name;
      this.nameText = 'cédula de ciudadanía';
    }
    document.getElementById('modal-document').setAttribute('open', 'true');
  }

  cloceModalDocument() {
    document.getElementById('modal-document').setAttribute('open', 'false');
    this.fileRegister.resetPhoto();
  }

  async saveDocument() {
    await this.fileRegister.savePdf(this.nameFile);
    this.cloceModalDocument();
  }

  onBack() {
    this.location.back();
  }
}
