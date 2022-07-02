/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { LoginService } from 'src/app/services/auth/login.service';
import { SidebarMenuService } from 'src/app/services/sidebar-menu.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  notDriver = false;
  roles: string;
  menu: any[] = [];
  user = {
    name: '',
  };
  constructor(
    private storage: Storage,
    private sideBarMenu: SidebarMenuService,
    public loginService: LoginService
    ) {

    }

  async ngOnInit() {
      await this.storage.create();
      await this.getRoles();
  }

  logout(){
    this.menu = [];
    this.roles = " ";
    this.loginService.logout();
  }

  async currentUser(){
    this.user.name = this.loginService.perfil.FirstName + ' ' + this.loginService.perfil.LastName;
  }

  async getRoles(){
    await this.storage.get('Roles').then(resp =>{
      if(resp !== "Conductor"){
        this.notDriver = true;
      } 
    });
  }

}
