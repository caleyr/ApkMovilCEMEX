import { ActiveTabsService } from './../../services/active-tabs.service';
/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  notDriver = false;
  roles: string;
  user = {
    name: '',
  };
  constructor(
    private storage: Storage,
    private loginService: LoginService,
    private activeTabsService: ActiveTabsService
    ) {
      if(loginService.profileUser.Roles !== "Conductor"){
        this.notDriver = true;
      }         
      this.currentUser();
    }

  async ngOnInit() {
      await this.storage.create();
  }
  ionViewWillLeave(){
    this.activeTabsService.clearSelectedTabs();
  }

  async currentUser(){
    this.user.name = this.loginService.profileUser.FirstName + ' ' + this.loginService.profileUser.LastName;
  }

  async getData(){
    this.storage.get('token').then(data=>{
      this.loginService.getDataProfile(data);
    });
  }

  logout(){
    this.activeTabsService.clearSelectedTabs();
    this.roles = " ";
    this.loginService.logout();
  }

}
