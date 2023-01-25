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
import { Filesystem } from '@capacitor/filesystem';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
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
  data: FormData = new FormData();

  listCompanies: Companies[] = [];

  alertSucces = false;
  alertConfirm = false;
  toastMessage = '';

  errors: string[] = [];

  openPhotoIdentityCard = false;
  openPhotoDocumentCompany = false;

  nameFile: string = '';
  nameText: string;

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
    public msgField: ValidateUserFieldService,
    public fileRegister: FileRegisterUserService
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
  }

  cwcChange(event) {
    this.form.get('CompanyId').setValue(`${event.detail.value}`);
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
    this.adminLogistService.createUser(this.data).subscribe({
      next: (result: any) => {
        if (result.data.message !== 'Saved') {
          this.propagar.emit(false);
          this.errors = this.errorMessages.parsearErroresAPI('Error, el correo digita ya se encuentra registrado.');
          this.form.get('Email').setValue('');
          this.data = new FormData();
        } else {
          this.propagar.emit(false);
          this.alertSucces = true;
          this.alertConfirm = false;
          this.alertSucces = true;
          this.errors = [];
        }
      },
      error: (err) => {
        this.propagar.emit(false);
        this.errors = this.errorMessages.parsearErroresAPI(err.data);
        this.fileRegister.resetForm();
      },
      complete: () => {
        this.propagar.emit(false);
      }
    });
  }

  async addFormData(objeto) {
    for (var key in objeto) {
      this.data.append(key, objeto[key]);
    }
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

  async savePdf() {
    const pdfDefinition: any = {
      content: [
        {
          image: this.fileRegister.savePhotoFrontal,
        },
        {
          text: '\n\n',
        },
        {
          image: this.fileRegister.savePhotoBack,
        },
      ]
    }
    const pdfDocGenerator = await pdfMake.createPdf(pdfDefinition);
    const fileName = new Date().getTime() + `_${this.nameFile}.pdf`;
    await pdfDocGenerator.getBlob((file) => {
      if (this.nameFile === 'Drivinglicense') {
        this.fileRegister.fileDrivinglicense = fileName;
      } else if (this.nameFile === 'SecurityCard') {
        this.fileRegister.fileSecurityCard = fileName;
      } else if (this.nameFile === 'DocumentIdentityCard') {
        this.fileRegister.fileDocument = fileName;
      }
      this.data.append(this.nameFile, file,);
      this.cloceModalDocument();
    });
  }
}
