import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { TypeConveyorService } from 'src/app/services/type-conveyor/type-conveyor.service';
import { LoginService } from '../../services/auth/login.service';
import { Router } from '@angular/router';

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
    private location : Location,
    private router : Router
  ) { }

  ngOnInit() {
    //this.cwcChange(this.loginService.rol);
  }

  cwcChange(data){
    if(data.detail === '3'){      
      this.loading = true;
      this.showFormManTruck = false;
      this.showFormDriver = false;
      this.showFormAdminLogist = true;
      this.loading = false;
    }else if(data.detail === '2'){      
      this.loading = true;
      this.showFormAdminLogist = false;
      this.showFormDriver = false;
      this.showFormManTruck = true;
      this.loading = false;
    }else if(data.detail === '1'){
      this.loading = true;
      this.showFormManTruck = false;
      this.showFormAdminLogist = false;
      this.showFormDriver = true;
      this.loading = false;
    }
  }

  showLoading(value) {
    this.loading = value;
  }

  onBack(){
    this.router.navigate(['app/home']);
  }
}
