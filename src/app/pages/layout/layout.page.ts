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
    private loginService: LoginService
    ) {
      if(loginService.rol !== "Conductor"){
        this.notDriver = true;
      }         
      this.currentUser();
    }

  async ngOnInit() {
      await this.storage.create();      
      //await this.getData(); 
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
    this.menu = [];
    this.roles = " ";
    this.loginService.logout();
  }

}
