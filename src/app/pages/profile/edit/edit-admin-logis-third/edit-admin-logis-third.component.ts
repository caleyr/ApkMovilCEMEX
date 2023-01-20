import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user/user';
import { Companies } from '../../../../interfaces/companies/companies';
import { CompaniesService } from '../../../../services/companies/companies.service';
import { ErrorMessagesService } from '../../../../services/error-messages.service';
import { AdminLogistService } from '../../../../services/adminLogist/admin-logist.service';
import { NavController } from '@ionic/angular';
import { LoginService } from '../../../../services/auth/login.service';
import { Profile } from 'src/app/models/profile.model';
import { UserDetail } from '../../../../models/user-detail.model';
import { ApiService } from '../../../../services/auth/api.service';
import { ValidateUserFieldService } from '../../../../services/error/validate-user-field.service';
import { UserService } from '../../../../services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-admin-logis-third',
  templateUrl: './edit-admin-logis-third.component.html',
  styleUrls: ['./edit-admin-logis-third.component.scss'],
})
export class EditAdminLogisThirdComponent implements OnInit {

  @Output()
  propagar = new EventEmitter<boolean>();

  form: FormGroup;
  data: FormData = new FormData();
  profile: UserDetail = new UserDetail();
  company: string = '';
  previusMail: string;

  alertSucces = false;
  alertConfirm = false;
  addIdentityCard = false;
  addDocumentCompany = false;
  toastMessage = '';

  errors: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private errorMessages: ErrorMessagesService,
    private apiService: ApiService,
    public msgField: ValidateUserFieldService,
    private userService: UserService,
    private location : Location
  ) {
    this.profile = apiService.userProfile;
    this.company = apiService.userProfile.CompanyName;
    this.previusMail = apiService.userProfile.Email;
    this.formBuilderInput(apiService.userProfile.CompanyId);
  }

  ngOnInit() {
  }

  formBuilderInput(id: number) {
    this.form = this.formBuilder.group({
      RolesId: [this.profile.RolesId, [Validators.required]],
      FirstName: [this.profile.FirstName, [Validators.required]],
      LastName: [this.profile.LastName, [Validators.required]],
      PhoneNumber: [this.profile.PhoneNumber, [Validators.required]],
      CodeSap: [this.profile.CodeSap, [Validators.required]],
      IdDocument: [this.profile.IdDocument, [Validators.required]],
      Email: [this.profile.Email, [Validators.required]],
      CompanyId: [id, [Validators.required]],
      Status: [this.profile.Status, [Validators.required]],
      UserId: [this.profile.UserId],
      policiesPermission: [this.profile.policiesPermission],
      term: [true, [Validators.requiredTrue]]
    });
  }


  async updateData() {
    this.errors = [];
    this.alertConfirm = false;
    if (this.form.invalid) {
      return;
    }
    this.propagar.emit(true);
    await this.addFormData(this.form.value);
    this.userService.updateUser(this.data).subscribe({
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
        this.propagar.emit(false);
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

