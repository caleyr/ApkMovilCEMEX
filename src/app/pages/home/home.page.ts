import { Component, OnInit } from '@angular/core';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { EventMessage, EventType, AuthenticationResult } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';
import { ApiService } from '../../services/auth/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  rol: number;

  loading = false;

  constructor(
    private apiService: ApiService
  ) {
  }

  async ngOnInit() {
    if (this.apiService.userProfile) {
      this.rol = this.apiService.userProfile.RolesId;
    }
  }

  showLoading(value) {
    this.loading = value;
  }
}
