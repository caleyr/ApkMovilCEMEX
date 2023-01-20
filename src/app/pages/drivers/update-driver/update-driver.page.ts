import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Companies } from '../../../interfaces/companies/companies';
import { LoginService } from '../../../services/auth/login.service';
import { CompaniesService } from '../../../services/companies/companies.service';
import { ErrorMessagesService } from '../../../services/error-messages.service';
import { DriversService } from '../../../services/drivers.service';
import { Location } from '@angular/common';
import { debounceTime } from 'rxjs/operators';
import { DriverUpdate } from '../models/driver-update';
import { ApiService } from '../../../services/auth/api.service';
import { UserDetail } from '../../../models/user-detail.model';
import { ValidateUserFieldService } from '../../../services/error/validate-user-field.service';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.page.html',
  styleUrls: ['./update-driver.page.scss'],
})
export class UpdateDriverPage implements OnInit {

  driver: UserDetail = new UserDetail();
  company: string = '';


  form: FormGroup;
  data: FormData = new FormData();

  alertSucces = false;
  alertConfirm = false;
  addIdentityCard = false;
  addDocumentCompany = false;
  toastMessage = '';

  errors: string[] = [];

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private companiesService: CompaniesService,
    private errorMessages: ErrorMessagesService,
    private driversService: DriversService,
    private location: Location,
    private apiService: ApiService,
    public msgField: ValidateUserFieldService,
  ) {
    this.driver = driversService.driver;
    this.company = apiService.userProfile.CompanyName;
    this.formBuilderInput(apiService.userProfile.CompanyId);
  }

  ngOnInit() {
  }

  formBuilderInput(id: number) {
    this.form = this.formBuilder.group({
      RolesId: [this.driver.RolesId, [Validators.required]],
      FirstName: [this.driver.FirstName, [Validators.required]],
      LastName: [this.driver.LastName, [Validators.required]],
      PhoneNumber: [this.driver.PhoneNumber, [Validators.required]],
      CodeSap: [this.driver.CodeSap, [Validators.required]],
      IdDocument: [this.driver.IdDocument, [Validators.required]],
      Email: [this.driver.Email, [Validators.required]],
      CompanyId: [id, [Validators.required]],
      Status: [this.driver.Status, [Validators.required]],
      UserId: [this.driver.UserId],
      policiesPermission: [this.driver.policiesPermission],
      term: [true, [Validators.requiredTrue]]
    });
  }

  async update() {
    this.errors = [];
    this.alertConfirm = false;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    await this.addFormData(this.form.value);
    this.driversService.updateDriver(this.data).subscribe({
      next: (result: any) => {
        if (result.data.message !== 'Updated') {
          this.errors = this.errorMessages.parsearErroresAPI(['Error, al actualizar el susuario.']);
          this.data = new FormData();
        } else {
          this.alertSucces = true;
          this.errors = [];
        }
      },
      error: (err) => {
        this.errors = this.errorMessages.parsearErroresAPI(err.data);
      },
      complete: () => {
        this.loading = false;
        this.alertConfirm = false;
      }
    });
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

  onBack() {
    this.location.back();
  }
}
