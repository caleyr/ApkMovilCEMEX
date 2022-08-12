import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss'],
})
export class HomeUserComponent implements OnInit {

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
