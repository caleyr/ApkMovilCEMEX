import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { TypeConveyorService } from 'src/app/services/type-conveyor/type-conveyor.service';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  typeConveyors: any = [];
  selectTypeConveyor: any;
  formTypeConveyor: FormGroup;
  showFormDriver = false;
  showFormManTruck = false;
  showFormAdminLogist = false;
  loading = false;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Output() public monthSelected = new EventEmitter<any>();

  constructor(
    private loginService : LoginService,
    private location : Location
  ) { }

  ngOnInit() {
    //this.cwcChange(this.loginService.rol);
  }

  cwcChange(data){
    if(data.detail.value === '1'){      
      this.loading = true;
      this.showFormManTruck = false;
      this.showFormDriver = false;
      this.showFormAdminLogist = true;
      setTimeout(() =>{
        this.loading = false;
      }, 1000);
    }else if(data.detail.value === '2'){      
      this.loading = true;
      this.showFormAdminLogist = false;
      this.showFormDriver = false;
      this.showFormManTruck = true;
      setTimeout(() =>{
        this.loading = false;
      }, 1000);
    }else if(data.detail.value === '3'){
      this.loading = true;
      this.showFormManTruck = false;
      this.showFormAdminLogist = false;
      this.showFormDriver = true;
      setTimeout(() =>{
        this.loading = false;
      }, 1000);
    }
  }

  showLoading(value) {
    this.loading = value;
  }

  onBack(){
    this.location.back();
  }
}
