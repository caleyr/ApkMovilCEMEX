import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss'],
})
export class HomeUserComponent implements OnInit {

  linkClever = "https://cemex.sercae.com/sercae/pages/core/login.jsf";
  linkTrip = "https://tuviajecx.com/cemexterceros/login"

  constructor() { }

  ngOnInit() {}

  onUrl(url : string){
    window.open(url, '_system', 'location=yes');
  }

}
