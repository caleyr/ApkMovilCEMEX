import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-drive-message',
  templateUrl: './new-drive-message.page.html',
  styleUrls: ['./new-drive-message.page.scss'],
})
export class NewDriveMessagePage implements OnInit {

  form: FormGroup;

  constructor(
    private location : Location,
    private formBuilder: FormBuilder
  ) {    
    this.formBuilderInput();
  }

  ngOnInit() {
  }

  formBuilderInput(){
    this.form = this.formBuilder.group({
      message: ['', [ Validators.required ]]
    });
  }

  async onBack(){
    this.location.back();
  }

  createMessage(){

  }

}
