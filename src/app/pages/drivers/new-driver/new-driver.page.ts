import { Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorMessagesService } from '../../../services/error-messages.service';
import { CompaniesService } from '../../../services/companies/companies.service';
import { LoginService } from '../../../services/auth/login.service';
import { Location } from '@angular/common';
import { DriversService } from '../../../services/drivers.service';
import { Companies } from '../../../interfaces/companies/companies';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AdminLogistService } from '../../../services/adminLogist/admin-logist.service';
import { ValidateUserFieldService } from '../../../services/error/validate-user-field.service';
import { FileRegisterUserService } from '../../../services/file-register/file-register-user.service';
import { HttpService } from '../../../services/http/http.service';
import { Router } from '@angular/router';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { ApiService } from '../../../services/auth/api.service';
import { UserService } from '../../../services/user.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.page.html',
  styleUrls: ['./new-driver.page.scss'],
})
export class NewDriverPage implements OnInit {

  form: FormGroup;
  emailExist = false;

  id: number;
  data: FormData = new FormData();
  company: string = '';

  listCompanies: Companies[] = [];

  alertSucces = false;
  alertConfirm = false;
  toastMessage = '';

  errors: string[] = [];

  openPhotoIdentityCard = false;
  openPhotoDocumentCompany = false;

  nameFile: string = 'Drivinglicense';
  nameText: string;

  fileURL;
  fileBlob;

  @ViewChild('getFileDrivinglicense') inputFileDrive: ElementRef;
  @ViewChild('getFileSecurityCard') inputFileSecurity: ElementRef;
  @ViewChild('getFileDocument') inputFileDoc: ElementRef;

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private adminLogistService: AdminLogistService,
    public msgField: ValidateUserFieldService,
    public fileRegister: FileRegisterUserService,
    private errorMessages: ErrorMessagesService,
    private httpP: HttpService,
    private location: Location,
    private apiService: ApiService,
    private userService: UserService,
    private router: Router
  ) {
    this.fileRegister.fileData = { name: [], file: [] };
    Filesystem.checkPermissions();
    this.company = apiService.userProfile.CompanyName;
    this.formBuilderInput();
  }

  async ngOnInit() {
  }

  formBuilderInput() {
    this.form = this.formBuilder.group({
      RolesId: ['1'],
      FirstName: ['', [Validators.required,]],
      LastName: ['', [Validators.required,]],
      PhoneNumber: ['', [Validators.pattern('^[3][0-9]*$')]],
      Email: ['', [Validators.required, Validators.email]],
      CompanyId: [this.apiService.userProfile.CompanyId, [Validators.required,]],
      Status: ['0'],
      CodeSap: ['', [Validators.pattern('^[0-9]*$')]],
      policiesPermission: [false],
      Password: ['Cemex_2023', [Validators.required],
      ],
      IdDocument: ['', [Validators.pattern('^[0-9]*$')]],
      term: [false, [Validators.requiredTrue]]
    });
  }

  async register() {
    this.errors = [];
    this.alertConfirm = false;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    await this.addFormData(this.form.value);
    if (await this.checkEmail()) {
      this.adminLogistService.createUser(this.data).subscribe({
        next: async () => {
          if (this.fileRegister.fileData.name.length != 0) {
            await this.getIdEmail();
            await this.updateDocument();
          } else {
            this.loading = false;
            this.alertSucces = true;
            this.alertConfirm = false;
            this.alertSucces = true;
            this.errors = [];
          }
        },
        error: (err) => {
          this.loading = false;
          this.errors = this.errorMessages.parsearErroresAPI(err.data);
          this.fileRegister.resetForm();
        }
      });
    } else {
      this.loading = false;
      this.errors = this.errorMessages.parsearErroresAPI('Error, el correo digita ya se encuentra registrado.');
      this.form.get('Email').setValue('');
      this.data = new FormData();
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
          alert(JSON.stringify(err));
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
          this.loading = false;
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
          this.loading = false;
          this.alertSucces = true;
          this.alertConfirm = false;
          this.alertSucces = true;
          this.errors = [];
        },
        error: (err) => {
          this.loading = false;
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
    if (name === 'Drivinglicense') {
      this.nameFile = name;
      this.nameText = 'licencia de conducción';
    } else if (name === 'SecurityCard') {
      this.nameFile = name;
      this.nameText = 'carné de seguridad industrial y vial';
    } else if (name === 'DocumentIdentityCard') {
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
