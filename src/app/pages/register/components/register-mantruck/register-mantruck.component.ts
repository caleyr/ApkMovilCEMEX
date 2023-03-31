import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, finalize } from 'rxjs/operators';
import { ConveyorService } from 'src/app/services/conveyor/conveyor.service';
import { ErrorMessagesService } from 'src/app/services/error-messages.service';
import { CompaniesService } from '../../../../services/companies/companies.service';
import { AdminLogistService } from '../../../../services/adminLogist/admin-logist.service';
import { Companies } from '../../../../interfaces/companies/companies';
import { FileRegisterUserService } from '../../../../services/file-register/file-register-user.service';
import { ValidateUserFieldService } from 'src/app/services/error/validate-user-field.service';
import { Directory, Filesystem, FilesystemDirectory } from '@capacitor/filesystem';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { UserService } from '../../../../services/user.service';
import { UserDetail } from '../../../../models/user-detail.model';
import { Router } from '@angular/router';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-register-mantruck',
  templateUrl: './register-mantruck.component.html',
  styleUrls: ['./register-mantruck.component.scss'],
})
export class RegisterMantruckComponent implements AfterViewInit {

  loadingCompany: boolean = false;

  @Output()
  propagar = new EventEmitter<boolean>();

  form: FormGroup;
  emailExist = false;

  id: number;
  data: FormData = new FormData();

  listCompanies: Companies[] = [];

  alertSucces = false;
  alertConfirm = false;
  alertError = true;
  toastMessage = '';

  errors: string[] = [];

  openPhotoIdentityCard = false;
  openPhotoDocumentCompany = false;

  nameFile: string = '';
  nameText: string;

  fileData = new FormData();

  fileURL;
  fileBlob;

  @ViewChild('getFileDrivinglicense') inputFileDrive: ElementRef;
  @ViewChild('getFileSecurityCard') inputFileSecurity: ElementRef;
  @ViewChild('getFileDocument') inputFileDoc: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private companiesService: CompaniesService,
    private errorMessages: ErrorMessagesService,
    private adminLogistService: AdminLogistService,
    private userService: UserService,
    public msgField: ValidateUserFieldService,
    public fileRegister: FileRegisterUserService,
    private router: Router
  ) {
    this.formBuilderInput();
    this.loadingCompany = true;
    Filesystem.checkPermissions();
  }

  async ngAfterViewInit() {
    this.companiesService.getCompanies().subscribe({
      next: (data: any) => {
        this.listCompanies = data.data;
      },
      complete: () => {
        this.loadingCompany = false;
      }
    });
  }

  formBuilderInput() {
    this.form = this.formBuilder.group({
      RolesId: ['2'],
      FirstName: ['', [Validators.required,]],
      LastName: ['', [Validators.required,]],
      PhoneNumber: ['', [Validators.pattern('^[3][0-9]*$')]],
      Email: ['', [Validators.required, Validators.email]],
      CompanyId: ['', [Validators.required,]],
      Status: ['0'],
      CodeSap: ['0'],
      policiesPermission: [false],
      Password: ['',
        [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{10,15}$')],
      ]
    });
    this.fileRegister.fileData = { name: [], file: [] };
  }

  cwcChange(event) {
    this.form.get('CompanyId').setValue(`${event.detail}`);
  }

  async register() {
    this.errors = [];
    this.alertConfirm = false;
    this.propagar.emit(true);
    if (this.form.invalid) {
      this.propagar.emit(false);
      return;
    }
    await this.addFormData(this.form.value);
    if (await this.checkEmail()) {
      this.adminLogistService.createUser(this.data).subscribe({
        next: async () => {
          if (this.fileRegister.fileData.name.length != 0) {
            await this.getIdEmail();
            await this.updateDocument();
          } else {
            this.propagar.emit(false);
            this.alertSucces = true;
            this.alertConfirm = false;
            this.alertSucces = true;
            this.errors = [];
            setTimeout(() => {
              this.alertSucces = false;
              this.onBack();
            }, 4000);
          }
        },
        error: (err) => {
          this.propagar.emit(false);
          this.errors = this.errorMessages.parsearErroresAPI(err.data);
          this.fileRegister.resetForm();
        }
      });
    } else {
      this.propagar.emit(false);
      this.alertError = true;
      //this.errors = this.errorMessages.parsearErroresAPI('Error, el correo digita ya se encuentra registrado.');
      this.form.get('Email').setValue('');
      this.data = new FormData();
      setTimeout(() => {
        this.alertError = false;
      }, 4000);
    }
  }

  async addFormData(objeto) {
    for (var key in objeto) {
      this.data.append(key, objeto[key]);
    }
  }

  checkEmail() {
    return new Promise((resolve) => {
      this.userService.getUserEmailLogin(this.form.controls['Email'].value).subscribe({
        next: (data: any) => {
          if (data.data.length === 0) {
            resolve(true);
          } else if (data.data.length === 1) {
            resolve(false);
          } else {
            resolve(false);
          }
        },
        error: (err) => {
          resolve(true);
        }
      })
    })
  }

  getIdEmail() {
    return new Promise((resolve) => {
      this.userService.getUserEmailLogin(this.form.controls['Email'].value).subscribe({
        next: (data: any) => {
          this.id = data.data[0].UserId;
          resolve(true);
        },
        error: (err) => {
          this.propagar.emit(false);
          this.errors = this.errorMessages.parsearErroresAPI(err.data);
          this.fileRegister.resetForm();
          resolve(true);
        }
      })
    })
  }

  updateDocument() {
    return new Promise((resolve) => {
      this.userService.updateDocument(this.id, this.fileRegister.fileData).subscribe({
        next: (data: any) => {
          alert(data.data);
          this.propagar.emit(false);
          this.alertSucces = true;
          this.alertConfirm = false;
          this.alertSucces = true;
          this.errors = [];
          setTimeout(() => {
            this.alertSucces = false;
            this.onBack();
          }, 4000);
        },
        error: (err) => {
          alert(err);
          this.propagar.emit(false);
          this.errors = this.errorMessages.parsearErroresAPI(err.data);
        },
        complete: () => {
          this.fileRegister.resetForm();
          resolve(true);
        }
      })
    })
  }

  openAlertConfirm() {
    if (this.form.invalid) {
      return;
    }
    this.alertConfirm = true;
  }

  closeAlertConfirm() {
    this.alertConfirm = false;
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
    this.router.navigate(['app/home']);
  }
}
