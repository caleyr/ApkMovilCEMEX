import { ActiveTabsService } from './../../services/active-tabs.service';
/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { LoginService } from 'src/app/services/auth/login.service';
import { ApiService } from '../../services/auth/api.service';
import { UserService } from '../../services/user.service';

import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  role: number;
  showPage: boolean = true;

  errorMessage: string;
  alertConfirm = false;

  notDriver = false;
  user = {
    name: '',
  };

  term: boolean = false;

  constructor(
    private apiService: ApiService,
    private activeTabsService: ActiveTabsService,
    private callNumber: CallNumber
  ) {
  }

  async ngOnInit() {
    if (this.apiService.userProfile === null) {
      this.showPage = false;
      this.errorMessage = 'El usuario no exite comuniquese con un administrador.';
      document.getElementById('modal-error').setAttribute('open', 'true');
      setTimeout(() => {
        this.logout();
      }, 3000);
    } else if (this.apiService.userProfile === undefined) {
      this.showPage = false;
      this.errorMessage = 'El usuario no exite comuniquese con un administrador.';
      document.getElementById('modal-error').setAttribute('open', 'true');
      setTimeout(() => {
        this.logout();
      }, 3000);
    } else {
      this.role = this.apiService.userProfile.RolesId;
      if (this.role === 4 || this.role === 5) {
        this.showPage = false;
        this.errorMessage = 'El usuario no esta autorizado para acceder, por favor comunicarse con un administrador.'
        document.getElementById('modal-error').setAttribute('open', 'true');
      } else {
        if (!this.apiService.userProfile.policiesPermission) {
          this.showPage = false;
          this.term = true;
        }

        if (this.apiService.userProfile.RolesId !== 1) {
          this.notDriver = true;
        }
        this.currentUser();
      }
    }
  }

  ionViewWillLeave() {
    this.activeTabsService.clearSelectedTabs();
  }

  async currentUser() {
    this.user.name = this.apiService.userProfile.FirstName + ' ' + this.apiService.userProfile.LastName;
  }

  logout() {
    this.apiService.logout();
  }

  ngOnDestroy() {
    this.activeTabsService.clearSelectedTabs();
  }

  showPages(value) {
    this.showPage = value;
  }

  openAlertConfirm() {
    this.alertConfirm = true;
  }

  closeAlertConfirm() {
    this.alertConfirm = false;
  }

  callServices() {
    this.closeAlertConfirm();
    this.callNumber.callNumber("#236", true);
  }

}
