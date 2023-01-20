import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TravelService } from '../../../../../services/travels/travel.service';
import { ApiService } from '../../../../../services/auth/api.service';

@Component({
  selector: 'app-new-drive-message',
  templateUrl: './new-drive-message.page.html',
  styleUrls: ['./new-drive-message.page.scss'],
})
export class NewDriveMessagePage implements OnInit {

  form: FormGroup;

  alertShow = false;
  
  loading = false;

  id : string;

  constructor(
    private location : Location,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private travelService : TravelService
  ) {    
    this.formBuilderInput();
  }

  ngOnInit() {
    this.id = this.travelService.id;
  }

  formBuilderInput(){
    this.form = this.formBuilder.group({
      message: ['', [ Validators.required ]]
    });
  }

  async onBack(){
    this.location.back();
  }

  async createMessage() {
    this.loading = true;
    const data = new FormData();
    data.append('observationsOfTravel', this.form.controls['message'].value);
    data.append('UserId', this.apiService.userProfile.UserId.toString());
    data.append('TraveId', this.id);
    await this.updateTravel(data);
    this.loading = false;
    this.alertShow = true;
  }

  updateTravel(dataForm) {
    return new Promise((resolve) => {
      this.travelService.updateTravel(dataForm).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (error) => {
          if (error.status === 401) {
            this.apiService.refreshToken();
          }
        }
      })
    });
  }

}
