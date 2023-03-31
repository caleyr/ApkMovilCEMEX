import { Request } from './models/request';
import { LoginService } from 'src/app/services/auth/login.service';
import { RequestService } from './../../services/request.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/auth/api.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.page.html',
  styleUrls: ['./waiting-list.page.scss'],
})
export class WaitingListPage implements OnInit {

  loading = false;

  currentDate = new Date();

  requestsList: Request[] = [];

  suscripcion: Subscription;

  constructor(
    private requestService: RequestService,
    private apiService: ApiService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.suscripcion = this.requestService.refresh$.subscribe(() => {
      this.getData();
      this.cd.detectChanges();
    })
    this.getData();
  }

  getData() {
    if (this.apiService.userProfile.RolesId === 1) {
      this.requestService.getRequestByIdUser(this.apiService.userProfile.UserId).subscribe({
        next: (data: any) => {
          alert(JSON.stringify(data.data));
          this.requestsList = data.data.filter(data => data.StatusRequest !== 1);
        },
        complete: () => {
          this.loading = false;
        },
      })
    } else {
      this.requestService.getRequestByIdCompany(this.apiService.userProfile.CompanyId).subscribe({
        next: (data: any) => {
          alert(JSON.stringify(data.data));
          this.requestsList = data.data.filter(data => data.StatusRequest !== 1);
        },
        complete: () => {
          this.loading = false;
        },
      })
    }
  }

  doRefresh(event) {
    this.loading = true;
    setTimeout(() => {
      this.requestsList = [];
      this.getData();
      this.cd.detectChanges();
      event.target.complete();
    }, 2000);
  }

}
