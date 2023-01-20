import { Location, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../../services/auth/api.service';
import { TravelService } from '../../../../../services/travels/travel.service';

@Component({
  selector: 'app-new-update-message',
  templateUrl: './new-update-message.page.html',
  styleUrls: ['./new-update-message.page.scss'],
})
export class NewUpdateMessagePage implements OnInit {

  form: FormGroup;

  alertShow = false;
  
  loading = false;

  id : string;

  constructor(
    private location : Location,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private travelService : TravelService,
    private datepipe : DatePipe
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
    const horaStar = new Date();
    const data = new FormData();
    data.append('UserId', this.apiService.userProfile.UserId.toString());
    data.append('TraveId', this.id);
    data.append('observationsOfTravel', this.form.controls['message'].value);
    data.append('TimeObservations', this.datepipe.transform(horaStar, 'h:mm'));
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
