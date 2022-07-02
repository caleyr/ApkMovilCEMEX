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
    private loginService : LoginService
  ) { }

  ngOnInit() {
    this.cwcChange(this.loginService.rol);
  }

  cwcChange(data){   
    if(data === '1'){
      this.showFormManTruck = false;
      this.showFormDriver = false;
      this.showFormAdminLogist = true;
    }else if(data === '2'){
      this.showFormAdminLogist = false;
      this.showFormDriver = false;
      this.showFormManTruck = true;
    }else if(data === '3'){
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
}
