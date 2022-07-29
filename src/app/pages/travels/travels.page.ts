import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.page.html',
  styleUrls: ['./travels.page.scss'],
})
export class TravelsPage implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  cwcChangeCompany(event: Event){

  }

}
