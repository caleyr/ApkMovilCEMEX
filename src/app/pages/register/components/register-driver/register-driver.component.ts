import { Component, EventEmitter, Output, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Companies } from '../../../../interfaces/companies/companies';
import { CompaniesService } from '../../../../services/companies/companies.service';
import { AdminLogistService } from '../../../../services/adminLogist/admin-logist.service';
import { ValidateUserFieldService } from '../../../../services/error/validate-user-field.service';
import { FileRegisterUserService } from '../../../../services/file-register/file-register-user.service';
import { ErrorMessagesService } from '../../../../services/error-messages.service';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { HttpService } from '../../../../services/http/http.service';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserDetail } from '../../../../models/user-detail.model';
import { UserService } from '../../../../services/user.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.component.html',
  styleUrls: ['./register-driver.component.scss'],
})
export class RegisterDriverComponent implements AfterViewInit {

  loadingCompany: boolean = false;

  @Output()
  propagar = new EventEmitter<boolean>();

  form: FormGroup;
  data: FormData = new FormData();
  dataPrueba: FormData = new FormData();

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


  constructor(
    private formBuilder: FormBuilder,
    private companiesService: CompaniesService,
    private adminLogistService: AdminLogistService,
    public msgField: ValidateUserFieldService,
    public fileRegister: FileRegisterUserService,
    private errorMessages: ErrorMessagesService,
    private httpP: HttpService,
    private router: Router,
    private userService : UserService
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
      RolesId: ['1'],
      FirstName: ['', [Validators.required,]],
      LastName: ['', [Validators.required,]],
      PhoneNumber: ['', [Validators.pattern('^[3][0-9]*$')]],
      Email: ['', [Validators.required, Validators.email]],
      CompanyId: ['', [Validators.required,]],
      Status: ['0'],
      CodeSap: ['', [Validators.pattern('^[0-9]*$')]],
      policiesPermission: [false],
      Password: ['',
        [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{10,15}$')],
      ],
      IdDocument: ['', [Validators.pattern('^[0-9]*$')]]
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
    if( await this.checkEmail()){
      this.adminLogistService.createUser(this.data).subscribe({
        next: (result: any) => {
          this.propagar.emit(false);
          this.alertSucces = true;
          this.alertConfirm = false;
          this.alertSucces = true;
          this.errors = [];  
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
    }else {
      this.propagar.emit(false);
      this.errors = this.errorMessages.parsearErroresAPI('Error, el correo digita ya se encuentra registrado.');
      this.form.get('Email').setValue('');
      this.data = new FormData();
    }
  }

  async addFormData(objeto) {
    for (var key in objeto) {
      this.dataPrueba.append(key, objeto[key]);
    }
  }

  checkEmail(){
    return new Promise((resolve) => {
      this.userService.getUserEmailLogin(this.form.controls['Email'].value).subscribe({
        next : (data : any) => {
          if(data.data.length === 0){
            resolve(true);
          }else if(data.data.length === 1){
            resolve(false);
          }else {
            resolve(false);
          }
        },
        error : (err) =>{
          alert(JSON.stringify(err));
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
      if (this.nameFile === 'LicenciaConduccion') {
        this.fileRegister.fileDrivinglicense = fileName;
      } else if (this.nameFile === 'CarnetSeguridadIndustrial') {
        this.fileRegister.fileSecurityCard = fileName;
      } else if (this.nameFile === 'CedulaDocumento') {
        this.fileRegister.fileDocument = fileName;
      }
      this.data.append(this.nameFile, file,);
      this.cloceModalDocument();
    });
  }

  async onFileDrivinglicense(event) {
    const file = <File>event.target.files[0];
    this.fileURL = URL.createObjectURL(file);
    await this.blobFormFile(event.target.files[0])
    const resultado = await this.saveFile(file.name, this.fileBlob);
    this.httpP.uploadFile(this.fileBlob, file.name).then(result => {
      alert('Paso ' + JSON.stringify(result));
    }).catch((error) => {
      alert('Error ' + JSON.stringify(error));
    })
    /*this.fileRegister.fileDrivinglicense = file.name;
    this.data.append('Drivinglicense', file, file.name);*/
  }

  async saveFile(path, file) {
    const base64Data = await this.base64FromPath(file) as string;
    const savedFile = await Filesystem.writeFile({
      path: path,
      data: base64Data,
      directory: Directory.Cache,
    });
    return savedFile;
  }

  async base64FromPath(blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = this.getFileReader();
      reader.onerror = reject;
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject('method did not return a string');
        }
      };
      reader.readAsDataURL(blob);
    });
  }

  async blobFormFile(file): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const reader = this.getFileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        this.fileBlob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
        resolve(true);
      };
      reader.onerror = (error) => {
        reject(false);
      };
    })
  }

  getFileReader(): FileReader {
    const fileReader = new FileReader();
    const zoneOriginalInstance = (fileReader as any)["__zone_symbol__originalInstance"];
    return zoneOriginalInstance || fileReader;
  }

  onBack() {
    this.router.navigate(['app/home']);
  }
}
