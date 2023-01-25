import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/auth/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-modal-term',
  templateUrl: './modal-term.component.html',
  styleUrls: ['./modal-term.component.scss'],
})
export class ModalTermComponent implements OnInit {

  @Input() alertShow = false;

  @Output()
  propagar = new EventEmitter<boolean>();

  term: any;

  dataFormS: FormData;

  constructor(
    private apiService: ApiService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.apiService.logout();
  }

  changeTerm() {
    this.dataFormS = new FormData();
    this.dataFormS.append('UserId', this.apiService.userProfile.UserId.toString());
    this.dataFormS.append('policiesPermission', 'true');
    this.userService.updateProfile(this.dataFormS).subscribe(data => {
      document.getElementById('alert-confirm').setAttribute('open', 'false');
      this.propagar.emit(true);
    }, (err) => {
      alert(err);
      this.logout();
    });
  }

}
