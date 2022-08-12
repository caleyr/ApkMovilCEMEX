import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss'],
})
export class HomeAdminComponent implements OnInit {

  linkClever = "https://cemex.sercae.com/sercae/pages/core/login.jsf";
  linkTrip = "https://tuviajecx.com/cemexterceros/login"

  constructor(private navCtrl : NavController) { }

  ngOnInit() {}

  onUrl(url : string){
    window.open(url, '_system', 'location=yes');
  }

  onClickTravel(){
    this.navCtrl.navigateRoot(['/app/travels'])
  }

  onClickMyTravel(){
    this.navCtrl.navigateRoot(['/app/my-travels'])
  }
}
