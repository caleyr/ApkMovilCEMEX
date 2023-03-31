import { Component, OnInit, EventEmitter, ViewChild, ElementRef, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Companies } from '../../../interfaces/companies/companies';
import { CompaniesService } from '../../../services/companies/companies.service';
import { ErrorMessagesService } from '../../../services/error-messages.service';
import { debounceTime } from 'rxjs/operators';
import { VehiclesService } from '../../../services/vehicles.service';
import { Location } from '@angular/common';
import { LoginService } from '../../../services/auth/login.service';
import { ApiService } from '../../../services/auth/api.service';
import { FileRegisterVehicleService } from '../../../services/file-register/file-register-vehicle.service';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Filesystem } from '@capacitor/filesystem';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.page.html',
  styleUrls: ['./new-vehicle.page.scss'],
})
export class NewVehiclePage implements OnInit {

  loading = false;

  id: number;
  form: FormGroup;
  data: FormData = new FormData();

  company: string;

  alertSucces = false;
  alertConfirm = false;
  alertShow = false;
  toastMessage = '';

  addIdentityCard = false;
  addDocumentCompany = false;

  errors: string[] = [];

  nameFile: string = '';
  nameText: string;


  @ViewChild('getFileSoatDocument') inputFileSoat: ElementRef;
  @ViewChild('getFileTechnomechanicsDocument') inputFileTechnomechanicsDocument: ElementRef;
  @ViewChild('getFilePolicyDocument') inputFilePolicyDocument: ElementRef;
  @ViewChild('getFileCardPropertyDocument') inputFileDoc: ElementRef;


  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private errorMessages: ErrorMessagesService,
    private vehiclesService: VehiclesService,
    private location: Location,
    public fileVehicle: FileRegisterVehicleService
  ) {
    this.fileVehicle.fileData = { name: [], file: [] };
    Filesystem.checkPermissions();
    this.company = apiService.userProfile.CompanyName;
    this.formBuilderInput();
  }

  ngOnInit() {
  }

  formBuilderInput() {
    this.form = this.formBuilder.group({
      Model: ['', [Validators.required]],
      LicenseVehiculo: ['', [Validators.required]],
      TypeTrailer: ['', [Validators.required]],
      CompanyId: [this.apiService.userProfile.CompanyId],
      Soat: [''],
      StatusVehicle: ['0'],
      StatusTravel: ['1'],
      UserId: [this.apiService.userProfile.UserId],
      Status: ['0'],
      term: [false, [Validators.requiredTrue]]
    });
  }

  updateDocument(id) {
    return new Promise((resolve) => {
      this.vehiclesService.updateDocument(id, this.fileVehicle.fileData).subscribe({
        next: (data: any) => {
          this.loading = false;
          this.alertSucces = true;
          this.alertConfirm = false;
          this.errors = [];
          setTimeout(() => {
            this.alertSucces = false;
            this.onBack();
          }, 4000);
        },
        error: (err) => {
          this.loading = false;
          this.errors = this.errorMessages.parsearErroresAPI(err.data);
        },
        complete: () => {
          this.fileVehicle.resetForm();
          resolve(true);
        }
      })
    })
  }

  async createVehicle() {
    this.errors = [];
    this.alertConfirm = false;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    if (this.vehiclesService.count < 5) {
      await this.addFormData(this.form.value);
      this.vehiclesService.createVehicle(this.data).subscribe({
        next: async (result: any) => {
          if (result.data.message !== 'Saved') {
            this.errors = this.errorMessages.parsearErroresAPI('Error, La placa del vehiculo anotada ya se encuentra registrada.');
            setTimeout(() => {
              this.onBack();
            }, 1000);
            this.data = new FormData();
          } else {
            if (this.fileVehicle.fileData.name.length != 0) {
              await this.updateDocument(result.data.count);
            } else {
              this.alertSucces = true;
              this.alertConfirm = false;
              this.errors = [];
              setTimeout(() => {
                this.alertSucces = false;
                this.onBack();
              }, 4000);
            }
          }
        },
        error: (err) => {
          this.errors = this.errorMessages.parsearErroresAPI(err.data);
          this.fileVehicle.resetForm();
        },
        complete: () => {
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
      this.showModalLimit();
    }
  }

  async addFormData(objeto) {
    for (var key in objeto) {
      if (key !== 'term') {
        this.data.append(key, objeto[key]);
      }
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
    if (name === 'SoatDocument') {
      this.nameFile = name;
      this.nameText = 'documento de SOAT';
    } else if (name === 'TechnomechanicsDocument') {
      this.nameFile = name;
      this.nameText = 'certificado de revisión tecno mecánica';
    } else if (name === 'PolicyDocument') {
      this.nameFile = name;
      this.nameText = 'póliza';
    } else if (name === 'CardPropertyDocument') {
      this.nameFile = name;
      this.nameText = 'tarjeta de propiedad';
    }
    document.getElementById('modal-document').setAttribute('open', 'true');
  }

  cloceModalDocument() {
    document.getElementById('modal-document').setAttribute('open', 'false');
    this.fileVehicle.resetPhoto();
  }

  async saveDocument() {
    await this.fileVehicle.savePdf(this.nameFile);
    this.cloceModalDocument();
  }

  onBack() {
    this.location.back();
  }

  showModalLimit() {
    this.alertShow = true;
    setTimeout(() => {
      this.alertShow = false;
      this.onBack();
    }, 3000);
  }
}
