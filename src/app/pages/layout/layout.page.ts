import { ActiveTabsService } from './../../services/active-tabs.service';
/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { LoginService } from 'src/app/services/auth/login.service';
import { ApiService } from '../../services/auth/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  role: number;
  showPage: boolean = true;

  errorMessage: string;

  notDriver = false;
  user = {
    name: '',
  };
  constructor(
    private apiService: ApiService,
    private activeTabsService: ActiveTabsService,
  ) {
  }

  async ngOnInit() {
    if (this.apiService.userProfile === null) {
      this.showPage = false;
      this.errorMessage = 'Error 500 al realizar la peticion al servidor.';
      document.getElementById('modal-error').setAttribute('open', 'true');
    } else if (this.apiService.userProfile === undefined) {
      this.showPage = false;
      this.errorMessage = 'El usuario no exite comuniquese con un administrador.';
      document.getElementById('modal-error').setAttribute('open', 'true');
    } else {
      this.role = this.apiService.userProfile.RolesId;
      if (this.role === 4 || this.role === 5) {
        this.showPage = false;
        this.errorMessage = 'El usuario no esta autorizado para acceder, por favor comunicarse con un administrador.'
        document.getElementById('modal-error').setAttribute('open', 'true');
      } else {
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

}
