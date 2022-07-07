import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss'],
})
export class HomeAdminComponent implements OnInit {

  linkClever = "https://cemex.sercae.com/sercae/pages/core/login.jsf";
  linkTrip = "https://tuviajecx.com/cemexterceros/login"

  constructor() { }

  ngOnInit() {}

  onUrl(url : string){
    window.open(url, '_system', 'location=yes');
  }
}
